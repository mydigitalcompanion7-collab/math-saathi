(() => {
  const key = 'math-saathi-study-time-v1';
  const display = document.getElementById('study-today-time');
  const startButton = document.getElementById('study-start');
  const resetButton = document.getElementById('study-reset');
  const status = document.getElementById('study-timer-status');
  if (!display || !startButton || !resetButton || !status) return;
  const copy = {
    hi: { eyebrow: 'APNI PADHAI KA SAMAY', title: 'Aaj maths ko kitna waqt diya?', note: 'Yeh samay sirf isi device ke browser mein save hota hai.', today: 'Aaj', start: 'Padhai shuru', pause: 'Roko', reset: 'Aaj ka samay reset', paused: 'Timer ruka hua hai', running: 'Timer chal raha hai' },
    en: { eyebrow: 'YOUR STUDY TIME', title: 'How long did you study maths today?', note: 'This time is saved only in this browser on this device.', today: 'Today', start: 'Start studying', pause: 'Pause', reset: 'Reset today', paused: 'Timer is paused', running: 'Timer is running' }
  };
  const todayKey = () => new Date().toLocaleDateString('en-CA');
  let state;
  try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch { state = {}; }
  const today = todayKey();
  if (state.day !== today) state = { day: today, seconds: 0, running: false, startedAt: 0 };
  state.seconds = Math.max(0, Number(state.seconds) || 0);
  state.running = false; // Refresh never silently keeps counting.
  const save = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} };
  const fmt = (seconds) => {
    const n = Math.max(0, Math.floor(seconds));
    return [Math.floor(n / 3600), Math.floor((n % 3600) / 60), n % 60].map(v => String(v).padStart(2, '0')).join(':');
  };
  function render() {
    if (state.day !== todayKey()) { state = { day: todayKey(), seconds: 0, running: false, startedAt: 0 }; }
    const elapsed = state.running ? Math.floor((Date.now() - state.startedAt) / 1000) : 0;
    display.textContent = fmt(state.seconds + elapsed);
    const lang = document.documentElement.lang === 'en' ? 'en' : 'hi';
    startButton.textContent = copy[lang][state.running ? 'pause' : 'start'];
    status.textContent = copy[lang][state.running ? 'running' : 'paused'];
    document.querySelectorAll('[data-study-copy]').forEach(el => { const k = el.dataset.studyCopy; if (copy[lang][k]) el.textContent = copy[lang][k]; });
    startButton.setAttribute('aria-pressed', String(state.running));
    save();
  }
  startButton.addEventListener('click', () => {
    if (state.running) { state.seconds += Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000)); state.running = false; state.startedAt = 0; }
    else { state.day = todayKey(); state.startedAt = Date.now(); state.running = true; }
    render();
  });
  resetButton.addEventListener('click', () => {
    const en = document.documentElement.lang === 'en';
    if (!window.confirm(en ? 'Reset today’s study time?' : 'Aaj ka study time reset karna hai?')) return;
    state = { day: todayKey(), seconds: 0, running: false, startedAt: 0 }; render();
  });
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setTimeout(render, 0)));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.running) { state.seconds += Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000)); state.running = false; state.startedAt = 0; render(); }
  });
  window.addEventListener('pagehide', () => { if (state.running) { state.seconds += Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000)); state.running = false; state.startedAt = 0; } save(); });
  render();
  setInterval(render, 1000);
})();