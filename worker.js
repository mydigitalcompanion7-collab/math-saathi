const recentRequests = new Map();
const MAX_BODY_BYTES = 5_000_000;
const MAX_QUESTION_CHARS = 8_000;
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': origin,
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
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
      }});
    }
    if (request.method !== 'POST') return json({error: 'Method not allowed'}, 405, allowedOrigin);
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
