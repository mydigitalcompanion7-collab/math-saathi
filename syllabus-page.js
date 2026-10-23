(() => {
  const data = window.mathSaathiSyllabi;
  const select = document.querySelector('#syllabus-board');
  const classSelect = document.querySelector('#syllabus-class');
  const content = document.querySelector('#syllabus-content');
  const params = new URLSearchParams(location.search);
  const boardNames = Object.entries(data).map(([key, item]) => `<option value="${key}">${item.name}</option>`).join('');
  select.innerHTML = boardNames;
  const requestedBoard = data[params.get('board')] ? params.get('board') : 'cbse';
  classSelect.value = ['6','7','8','9','10','11','12'].includes(params.get('class')) ? params.get('class') : '10';
  select.value = requestedBoard;
  let language = 'hi';
  try { language = localStorage.getItem('math-saathi-language') === 'en' ? 'en' : 'hi'; } catch {}
  const fixedCopy = {
    hi:{eyebrow:'OFFICIAL SOURCES · CLASS 6–12',title:'Maths ka <em>syllabus</em>',intro:'Class aur board chuno. Syllabus ka saal, topics aur official source yahan dekho.',classLabel:'Class',boardLabel:'Board',disclaimer:'Syllabus official board ke source se liya gaya hai. Jahan latest syllabus source par available nahi tha ya PDF verify nahi hui, wahan status saaf diya hai.',back:'← Math Saathi par wapas',source:'आधिकारिक स्रोत खोलें ↗',topics:'विषय और मुख्य टॉपिक',notFound:'इस बोर्ड के लिए कोई syllabus विवरण उपलब्ध नहीं है।'},
    en:{eyebrow:'OFFICIAL SOURCES · CLASS 6–12',title:'Maths <em>syllabus</em>',intro:'Choose a class and board to see the syllabus year, topics, and official source.',classLabel:'Class',boardLabel:'Board',disclaimer:'Syllabus details come from official board sources. Where a current syllabus was unavailable or its PDF could not be verified, the page says so.',back:'← Back to Math Saathi',source:'Open official source ↗',topics:'Subjects and key topics',notFound:'No syllabus details are available for this board.'}
  };
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-copy]').forEach(el => el.innerHTML = fixedCopy[next][el.dataset.copy]);
    document.querySelectorAll('.language-option').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.language === next)));
    try { localStorage.setItem('math-saathi-language', next); } catch {}
    render();
  }
  function render() {
    const grade = classSelect.value;
    const sourceData = ['6','7','8','9'].includes(grade) ? window.mathSaathiSyllabi6to9[grade] : grade === '12' ? window.mathSaathiSyllabi12 : grade === '11' ? window.mathSaathiSyllabi11 : data;
    const item = sourceData[select.value] || sourceData.unspecified;
    const status = language === 'hi' ? item.statusHi : item.statusEn;
    const summary = language === 'hi' ? item.summaryHi : item.summaryEn;
    const topics = language === 'hi' ? item.topicsHi : item.topicsEn;
    const sources = item.sources.map(([label,url]) => `<a class="syllabus-source-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span>↗</span></a>`).join('');
    const cards = topics.map(([title,detail]) => `<article class="syllabus-topic"><h3>${title}</h3><p>${detail}</p></article>`).join('');
    content.innerHTML = `<div class="syllabus-status ${item.verified ? 'is-verified' : 'is-limited'}"><span class="status-dot"></span>${status}</div><p class="syllabus-summary">${summary}</p>${cards ? `<h2 class="syllabus-topics-title">${fixedCopy[language].topics}</h2><div class="syllabus-topic-grid">${cards}</div>` : ''}${sources ? `<div class="syllabus-sources">${sources}</div>` : ''}`;
    const url = new URL(location.href); url.searchParams.set('board', select.value); url.searchParams.set('class', grade); history.replaceState(null, '', url);
  }
  document.querySelectorAll('.language-option').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.language)));
  select.addEventListener('change', render);
  classSelect.addEventListener('change', render);
  setLanguage(language);
})();
