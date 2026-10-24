const recentRequests = new Map();
const MAX_BODY_BYTES = 5_000_000;
const MAX_QUESTION_CHARS = 8_000;
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;

async function googleClaims(token, clientId) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('invalid token');
  const decode = value => JSON.parse(atob(value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4)));
  const header = decode(parts[0]);
  const claims = decode(parts[1]);
  const now = Math.floor(Date.now() / 1000);
  if (header.alg !== 'RS256' || claims.iss !== 'https://accounts.google.com' && claims.iss !== 'accounts.google.com' || claims.aud !== clientId || !claims.sub || claims.exp < now || claims.iat > now + 60 || claims.email_verified !== true) throw new Error('invalid claims');
  const keysResponse = await fetch('https://www.googleapis.com/oauth2/v3/certs', {cf:{cacheTtl:3600,cacheEverything:true}});
  if (!keysResponse.ok) throw new Error('key lookup failed');
  const keys = await keysResponse.json();
  const jwk = keys.keys.find(key => key.kid === header.kid && key.alg === 'RS256');
  if (!jwk) throw new Error('unknown signing key');
  const key = await crypto.subtle.importKey('jwk', jwk, {name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'}, false, ['verify']);
  const input = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
  const sig = Uint8Array.from(atob(parts[2].replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - parts[2].length % 4) % 4)), c=>c.charCodeAt(0));
  if (!await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, sig, input)) throw new Error('bad signature');
  return claims;
}

async function authenticate(request, env) {
  const match = (request.headers.get('Authorization') || '').match(/^Bearer (.+)$/);
  if (!match || !env.GOOGLE_CLIENT_ID) return null;
  try { return await googleClaims(match[1], env.GOOGLE_CLIENT_ID); } catch { return null; }
}

async function usageRoute(request, env, origin, url) {
  if (!env.DB) return json({error:'Usage storage is not configured.'},503,origin);
  const user = await authenticate(request, env);
  if (!user) return json({error:'Sign in again to continue.'},401,origin);
  const day = new Date(Date.now()+330*60*1000).toISOString().slice(0,10);
  const isAdmin = String(user.email || '').toLowerCase() === String(env.ADMIN_EMAIL || '').toLowerCase();
  if (url.pathname === '/usage/heartbeat' && request.method === 'POST') {
    let body; try { body = await request.json(); } catch { return json({error:'Invalid request.'},400,origin); }
    const seconds = Number(body.seconds);
    if (!Number.isInteger(seconds) || seconds < 1 || seconds > 120) return json({error:'Invalid time interval.'},400,origin);
    await env.DB.prepare('INSERT INTO usage_daily(user_sub,day,seconds,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_sub,day) DO UPDATE SET seconds=MIN(86400,usage_daily.seconds+excluded.seconds),updated_at=excluded.updated_at').bind(user.sub,day,seconds,new Date().toISOString()).run();
    return json({ok:true},200,origin);
  }
  if (url.pathname === '/usage/me' && request.method === 'GET') {
    const result = await env.DB.prepare('SELECT COALESCE(SUM(seconds),0) AS totalSeconds, COALESCE(SUM(CASE WHEN day=? THEN seconds ELSE 0 END),0) AS todaySeconds FROM usage_daily WHERE user_sub=?').bind(day,user.sub).first();
    return json({todaySeconds:result.todaySeconds,totalSeconds:result.totalSeconds,isAdmin},200,origin);
  }
  if (url.pathname === '/usage/admin' && request.method === 'GET') {
    if (!isAdmin) return json({error:'Not allowed.'},403,origin);
    const result = await env.DB.prepare('SELECT COUNT(DISTINCT user_sub) AS users, COALESCE(SUM(seconds),0) AS totalSeconds FROM usage_daily').first();
    return json({users:result.users,totalSeconds:result.totalSeconds},200,origin);
  }
  if (url.pathname === '/usage/delete' && request.method === 'POST') {
    await env.DB.prepare('DELETE FROM usage_daily WHERE user_sub=?').bind(user.sub).run();
    return json({ok:true},200,origin);
  }
  return null;
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Vary': 'Origin'
    }
  });
}

function getClientBucket(request) {
  return request.headers.get('CF-Connecting-IP') || 'unknown';
}

function rateLimited(request) {
  const now = Date.now();
  const bucket = getClientBucket(request);
  const timestamps = (recentRequests.get(bucket) || []).filter((time) => now - time < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) return true;
  timestamps.push(now);
  recentRequests.set(bucket, timestamps);
  if (recentRequests.size > 2_000) {
    for (const [key, times] of recentRequests) {
      if (!times.length || now - times[times.length - 1] >= WINDOW_MS) recentRequests.delete(key);
    }
  }
  return false;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigin = env.ALLOWED_ORIGIN || '';
    if (!allowedOrigin || origin !== allowedOrigin) return new Response('Origin not allowed', {status: 403});
    if (request.method === 'OPTIONS') {
      return new Response(null, {status: 204, headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
      }});
    }
    const url = new URL(request.url);
    if (url.pathname.startsWith('/usage/')) {
      if (rateLimited(request)) return json({error:'Please wait before trying again.'},429,allowedOrigin);
      const result = await usageRoute(request, env, allowedOrigin, url);
      if (result) return result;
    }
    if (request.method !== 'POST' || url.pathname !== '/') return json({error: 'Method not allowed'}, 405, allowedOrigin);
    if (rateLimited(request)) return json({error: 'Please wait before trying again.'}, 429, allowedOrigin);
    const length = Number(request.headers.get('Content-Length') || 0);
    if (length > MAX_BODY_BYTES) return json({error: 'Request is too large.'}, 413, allowedOrigin);

    let body;
    try { body = await request.json(); }
    catch { return json({error: 'Invalid request.'}, 400, allowedOrigin); }
    const question = typeof body.question === 'string' ? body.question.trim() : '';
    const imageDataUrl = typeof body.imageDataUrl === 'string' ? body.imageDataUrl : '';
    if (!question && !imageDataUrl) return json({error: 'Add a question or an image.'}, 400, allowedOrigin);
    if (question.length > MAX_QUESTION_CHARS) return json({error: 'Question is too long.'}, 413, allowedOrigin);
    if (imageDataUrl && (!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(imageDataUrl) || imageDataUrl.length > MAX_BODY_BYTES)) {
      return json({error: 'Use a PNG, JPG, or WebP image under 3.5 MB.'}, 400, allowedOrigin);
    }
    if (!env.OPENAI_API_KEY || !env.OPENAI_MODEL) return json({error: 'AI service is not configured.'}, 503, allowedOrigin);

    const language = body.language === 'en' ? 'English' : 'Hindi';
    const grade = ['6','7','8','9','10','11','12'].includes(String(body.grade)) ? String(body.grade) : 'unspecified';
    const board = typeof body.board === 'string' ? body.board.slice(0, 40) : 'unspecified';
    const syllabus = typeof body.syllabus === 'string' ? body.syllabus.slice(0, 40) : 'unspecified';
    const content = [{type: 'input_text', text: [
      `Solve the student's mathematics question and teach the method in ${language}.`,
      `Course context: class ${grade}, board ${board}, syllabus ${syllabus}. Use it only as context; do not invent board-specific facts.`,
      'Show clear numbered steps, define any formula used, check the result when practical, and state uncertainty or ambiguity honestly. If the image is unreadable or not a maths problem, ask for clarification. Do not claim every answer is guaranteed correct.',
      question ? `Question: ${question}` : 'Read and solve the question in the attached image.'
    ].join('\n')}];
    if (imageDataUrl) content.push({type: 'input_image', image_url: imageDataUrl, detail: 'high'});

    let upstream;
    try {
      upstream = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {'Authorization': `Bearer ${env.OPENAI_API_KEY}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          model: env.OPENAI_MODEL,
          instructions: 'You are Math Saathi, a careful school mathematics tutor. Solve only what the student asked, explain each transformation, preserve exact forms where useful, and never fabricate steps or a final answer.',
          input: [{role: 'user', content}],
          max_output_tokens: 1200
        }),
        signal: AbortSignal.timeout(25_000)
      });
    } catch {
      return json({error: 'AI service is temporarily unavailable.'}, 502, allowedOrigin);
    }
    if (!upstream.ok) {
      const status = upstream.status === 429 ? 429 : 502;
      return json({error: status === 429 ? 'AI service is busy. Try again shortly.' : 'AI service could not solve this right now.'}, status, allowedOrigin);
    }
    let result;
    try { result = await upstream.json(); }
    catch { return json({error: 'AI returned an unreadable response.'}, 502, allowedOrigin); }
    const answer = result.output_text || (result.output || [])
      .flatMap((item) => item.content || [])
      .filter((item) => item.type === 'output_text')
      .map((item) => item.text)
      .join('\n');
    if (typeof answer !== 'string' || !answer.trim()) return json({error: 'AI did not return a solution.'}, 502, allowedOrigin);
    return json({answer: answer.trim()}, 200, allowedOrigin);
  }
};
