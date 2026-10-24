(() => {
  const apiBase = (window.MATH_SAATHI_API_URL || '').replace(/\/$/, '');
  const clientId = window.MATH_SAATHI_GOOGLE_CLIENT_ID || '';
  const consent = document.getElementById('study-consent');
  const mount = document.getElementById('google-signin');
  const pendingButton = document.getElementById('google-signin-placeholder');
  const status = document.getElementById('study-status');
  const signout = document.getElementById('study-signout');
  const deleteButton = document.getElementById('study-delete');
  const stats = document.getElementById('study-stats');
  const admin = document.getElementById('study-admin');
  if (!consent || !mount) return;
  let token = '';
  let accumulated = 0;
  let lastTick = 0;
  let lastActivity = Date.now();
  let heartbeatTimer;
  let statusKey=apiBase&&clientId?'ready':'config';
  let googleLoaded=false;
  const text = {
    hi:{setup:'Sign-in abhi setup nahi hua. Site owner ko Google aur Cloudflare settings poori karni hongi.', consent:'Main samajhta/samajhti hoon: Math Saathi mera pseudonymous Google account ID aur padhai ka samay save karega. Samay sirf tab ginega jab page visible aur main active hoon. Owner ko mera naam ya email nahi dikhega. Main sign out kar sakta/sakti hoon ya apna samay record mita sakta/sakti hoon.', intro:'Sign-in optional hai. Sahmati dene ke baad hi padhai ka samay record hoga.', summary:'Apna padhai ka samay dekho', title:'Padhai ka waqt tumhare liye', today:'Aaj', total:'Kul padhai', note:'Samay tabhi judta hai jab page visible ho aur tum active raho. Record mitaane ke liye neeche button dabao.', delete:'Mera record mitaao', admin:'Sab users ka anonymous total', users:'Kul users', alltime:'Kul study time', adminNote:'Sirf aggregated totals. Kisi ka naam ya email nahi.', signout:'Sign out', agree:'Pehle consent box par tick karo; uske baad Google se sign in karo.', config:'Sign-in abhi configure nahi hai. Owner ko Google Client ID aur Worker URL set karna hoga.', ready:'Consent tick karke Google se sign in karo.', login:'Google sign-in ho gaya. Ab active padhai ka samay gina ja raha hai.', fail:'Sign-in verify nahi hua. Dobara koshish karo.', signinPending:'Google sign-in setup abhi baaki hai.', offline:'Abhi server se connect nahi hua. Thodi der mein dobara koshish karo.'},
    en:{setup:'Sign-in is not set up yet. The site owner must finish Google and Cloudflare configuration.', consent:'I understand: Math Saathi will store my pseudonymous Google account ID and study time. Time counts only while this page is visible and I am active. The owner will not see my name or email. I can sign out or delete my study-time record at any time.', intro:'Sign-in is optional. Study time is recorded only after you consent.', summary:'View your study time', title:'Your study time', today:'Today', total:'Total study', note:'Time counts only while this page is visible and you are active. Use the button below to delete your record.', delete:'Delete my study record', admin:'Anonymous totals for all users', users:'Total users', alltime:'Total study time', adminNote:'Aggregated totals only. No names or emails are shown.', signout:'Sign out', agree:'Tick the consent box before signing in with Google.', config:'Sign-in is not configured yet. The owner must set the Google Client ID and Worker URL.', ready:'Tick consent, then sign in with Google.', login:'Signed in. Active study time is now being counted.', fail:'Sign-in could not be verified. Please try again.', signinPending:'Google sign-in setup is not finished yet.', offline:'Could not reach the server. Please try again shortly.'}
  };
  const language = () => document.documentElement.lang === 'en' ? 'en' : 'hi';
  const t = key => text[language()][key];
  const set = key => { statusKey=key; status.textContent = t(key); };
  function paintLanguage(){ document.querySelectorAll('[data-study-copy]').forEach(el=>{const k=el.dataset.studyCopy;if(text[language()][k])el.textContent=text[language()][k];}); if(!apiBase||!clientId)set('config');else set(statusKey); }
  function minutes(s){const m=Math.floor((s||0)/60);return m<60?`${m} min`:`${Math.floor(m/60)} h ${m%60} min`;}
  function activeNow(){return !!token&&consent.checked&&!document.hidden&&Date.now()-lastActivity<5*60*1000;}
  function accrue(){const now=Date.now();if(lastTick&&activeNow())accumulated+=Math.min(30,Math.max(0,(now-lastTick)/1000));lastTick=now;}
  async function request(path, body){const r=await fetch(`${apiBase}${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});if(!r.ok)throw new Error('request failed');return r.json();}
  async function refreshStats(){try{const data=await request('/usage/me');document.getElementById('study-today').textContent=minutes(data.todaySeconds);document.getElementById('study-total').textContent=minutes(data.totalSeconds);stats.hidden=false;admin.hidden=!data.isAdmin;if(data.isAdmin){const totals=await request('/usage/admin');document.getElementById('study-users').textContent=totals.users;document.getElementById('study-alltime').textContent=minutes(totals.totalSeconds);}}catch{if(token)set('offline');}}
  async function heartbeat(){accrue();const seconds=Math.floor(accumulated);if(!token||!consent.checked||seconds<1)return;accumulated-=seconds;try{await request('/usage/heartbeat',{seconds});await refreshStats();}catch{accumulated+=seconds;}}
  function signedIn(jwt){if(!consent.checked){set('agree');return;}token=jwt;lastActivity=Date.now();lastTick=Date.now();mount.hidden=true;signout.hidden=false;set('login');refreshStats();clearInterval(heartbeatTimer);heartbeatTimer=setInterval(heartbeat,30000);}
  function signOut(){heartbeat().finally(()=>{token='';accumulated=0;clearInterval(heartbeatTimer);mount.hidden=!consent.checked;signout.hidden=true;stats.hidden=true;admin.hidden=true;set(apiBase&&clientId?'ready':'config');});}
  signout.addEventListener('click',signOut);
  deleteButton.addEventListener('click',async()=>{if(!token||!confirm(language()==='hi'?'Apna poora study-time record mita dein?':'Delete all of your study-time records?'))return;try{await request('/usage/delete',{});document.getElementById('study-today').textContent=minutes(0);document.getElementById('study-total').textContent=minutes(0);set('login');await refreshStats();}catch{set('offline');}});
  mount.hidden=!consent.checked;
  consent.addEventListener('change',()=>{if(!consent.checked&&token)signOut();else{mount.hidden=!consent.checked;if(consent.checked&&apiBase&&clientId){set('ready');loadGoogleButton();}}});
  ['pointerdown','keydown','touchstart','scroll'].forEach(e=>document.addEventListener(e,()=>{lastActivity=Date.now();},{passive:true}));
  document.addEventListener('visibilitychange',()=>{accrue();if(document.hidden)heartbeat();else{lastActivity=Date.now();lastTick=Date.now();}});
  window.addEventListener('pagehide',()=>{accrue();if(token&&accumulated>=1)fetch(`${apiBase}/usage/heartbeat`,{method:'POST',keepalive:true,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({seconds:Math.floor(accumulated)})});});
  document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setTimeout(paintLanguage,0)));
  paintLanguage();
  function loadGoogleButton(){if(googleLoaded||!apiBase||!clientId||!consent.checked)return;googleLoaded=true;const s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.async=true;s.onload=()=>{google.accounts.id.initialize({client_id:clientId,callback:r=>signedIn(r.credential),auto_select:false});pendingButton.hidden=true;google.accounts.id.renderButton(mount,{type:'standard',theme:'outline',size:'large',text:'signin_with',shape:'rectangular',locale:language()==='hi'?'hi':'en'});};s.onerror=()=>{googleLoaded=false;pendingButton.hidden=false;set('offline');};document.head.appendChild(s);}
})();
