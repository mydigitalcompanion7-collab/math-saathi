const data = window.mathSaathiSolutions;
const chapterSelect = document.querySelector('#chapter-select');
const exerciseSearch = document.querySelector('#exercise-search');
const list = document.querySelector('#exercise-list');
const appendixList = document.querySelector('#appendix-list');
let pageLanguage = localStorage.getItem('math-saathi-language') || 'hi';
const copy = {
  hi: {title:'अध्यायवार <em>उत्तर और हल</em>', intro:'किताब के क्रम में अध्याय चुनो और exercise के उत्तर/संकेत देखो।', chapter:'अध्याय', search:'Exercise खोजें', placeholder:'जैसे 1.1', note:'नोट: NCERT की दी हुई Appendix ‘Answers/Hints’ में कई सवालों के सिर्फ उत्तर या संकेत हैं, पूरे step-by-step हल नहीं। जहाँ किताब में पूरा हल दिया है, वह भी शामिल है।', back:'मुख्य पेज', appendix:'परिशिष्ट · अतिरिक्त अभ्यास', exercise:'Exercise', noExercises:'इस अध्याय के लिए answer key में कोई exercise entry नहीं मिली।', noSearch:'इस खोज से कोई exercise नहीं मिली।'},
  en: {title:'Chapter-wise <em>answers and solutions</em>', intro:'Choose a chapter in textbook order and open an exercise to see its answers or hints.', chapter:'Chapter', search:'Find an exercise', placeholder:'For example, 1.1', note:'Note: NCERT’s “Answers/Hints” appendix gives final answers or hints for many questions rather than full step-by-step workings. Full explanations included in the appendix are shown too.', back:'Home', appendix:'Appendices · Extra practice', exercise:'Exercise', noExercises:'No exercise entry for this chapter appears in the answer key.', noSearch:'No exercise matches this search.'}
};
function safeText(value) { return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
function selectedChapter() { return data.chapters.find(ch => ch.number === chapterSelect.value) || data.chapters[0]; }
function render() {
  const chapter = selectedChapter();
  const query = exerciseSearch.value.trim().toLowerCase();
  const exercises = chapter.exercises.filter(item => !query || item.id.toLowerCase().includes(query));
  list.innerHTML = exercises.length ? exercises.map((item, i) => `<details class="library-exercise" ${i === 0 ? 'open' : ''}><summary>${copy[pageLanguage].exercise} ${item.id}</summary><pre>${safeText(item.body)}</pre></details>`).join('') : `<p class="empty-search">${chapter.exercises.length ? copy[pageLanguage].noSearch : copy[pageLanguage].noExercises}</p>`;
  document.querySelector('#empty-search').hidden = true;
}
function setPageLanguage(next) {
  pageLanguage = next; localStorage.setItem('math-saathi-language', next); document.documentElement.lang = next;
  const t = copy[next];
  document.querySelector('#page-title').innerHTML = t.title;
  document.querySelector('#page-intro').textContent = t.intro;
  document.querySelector('#chapter-label').textContent = t.chapter;
  document.querySelector('#search-label').textContent = t.search;
  exerciseSearch.placeholder = t.placeholder;
  document.querySelector('#source-note').textContent = t.note;
  document.querySelector('#back-label').textContent = t.back;
  document.querySelector('#appendix-block h2').textContent = t.appendix;
  document.querySelector('#lang-hi').setAttribute('aria-pressed', String(next === 'hi'));
  document.querySelector('#lang-en').setAttribute('aria-pressed', String(next === 'en'));
  const current = chapterSelect.value;
  chapterSelect.innerHTML = data.chapters.map(ch => `<option value="${ch.number}">Chapter ${ch.number} · ${next === 'hi' ? ch.hi : ch.en}</option>`).join('');
  chapterSelect.value = current || '1';
  appendixList.innerHTML = data.appendices.map(item => `<details class="library-exercise"><summary>Exercise ${item.id}</summary><pre>${safeText(item.body)}</pre></details>`).join('');
  render();
}
chapterSelect.addEventListener('change', render);
exerciseSearch.addEventListener('input', render);
document.querySelector('#lang-hi').addEventListener('click', () => setPageLanguage('hi'));
document.querySelector('#lang-en').addEventListener('click', () => setPageLanguage('en'));
setPageLanguage(pageLanguage);
