(() => {
 const text = {
  hi:{navFormulas:'सूत्र लाइब्रेरी',navFeedback:'सुझाव दें',summaryTopics:'topics',summaryFormulas:'सूत्र',formulaEyebrow:'MATHS REFERENCE · CLASS 6–12',formulaTitle:'Topic के हिसाब से सूत्र खोजो',formulaIntro:'Topic या formula लिखो—दोनों भाषाओं में खोज सकते हो। Topic खोलकर उसके जरूरी सूत्र देखो।',searchLabel:'Topic या formula खोजें',searchPlaceholder:'जैसे: त्रिकोणमिति, area, quadratic, ब्याज…',resultStart:'दिख रहे Topics:',noResults:'इस खोज से कोई Topic नहीं मिला। दूसरा शब्द लिखकर देखो।',formulaCount:'सूत्र',feedbackEyebrow:'MATH SAATHI को बेहतर बनाएँ',feedbackTitle:'Feedback भेजें',feedbackIntro:'अपना सुझाव या मिली हुई गलती लिखें। GitHub पर draft खुलेगा; भेजने से पहले आप उसे देख और submit कर सकते हैं।',feedbackType:'Feedback का प्रकार',feedbackSuggestion:'सुझाव',feedbackBug:'गलती / समस्या',feedbackOther:'कुछ और',feedbackMessage:'आपका संदेश',feedbackPlaceholder:'क्या बेहतर किया जा सकता है?',feedbackSend:'Feedback draft खोलें',feedbackNote:'यह form अपने-आप कुछ publish नहीं करता। GitHub account से आप खुद final submit करेंगे।',draftReady:'GitHub में draft खुल रहा है—review करके खुद submit करें।'},
  en:{navFormulas:'Formula library',navFeedback:'Feedback',summaryTopics:'topics',summaryFormulas:'formulas',formulaEyebrow:'MATHS REFERENCE · CLASSES 6–12',formulaTitle:'Find formulas by topic',formulaIntro:'Search by topic or formula in either language. Open a topic to browse its key formulas.',searchLabel:'Search topics or formulas',searchPlaceholder:'For example: trigonometry, area, quadratic, interest…',resultStart:'Topics shown:',noResults:'No topics match that search. Try another term.',formulaCount:'formulas',feedbackEyebrow:'HELP IMPROVE MATH SAATHI',feedbackTitle:'Send feedback',feedbackIntro:'Share a suggestion or report a problem. A GitHub draft will open for you to review and submit.',feedbackType:'Feedback type',feedbackSuggestion:'Suggestion',feedbackBug:'Bug / issue',feedbackOther:'Other',feedbackMessage:'Your message',feedbackPlaceholder:'What could be better?',feedbackSend:'Open feedback draft',feedbackNote:'This form does not publish automatically. You review and submit it yourself with a GitHub account.',draftReady:'Opening a draft in GitHub—review it and submit it yourself.'}
 };
 const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const norm = s => String(s).toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}√∫π²³ₙₓ₁₂₃⁰⁻⁺−<>/=]+/gu,' ');
 const search=document.querySelector('#formula-search'), list=document.querySelector('#formula-topics'), count=document.querySelector('#formula-result-count');
 let lang=document.documentElement.lang==='en'?'en':'hi';
 function render(){
  const q=norm(search.value.trim()), terms=q.split(/\s+/).filter(Boolean);
  const cards=(window.MATH_SAATHI_FORMULAS||[]).flatMap(topic=>{
   const topicText=norm([topic.h,topic.e,topic.k].join(' '));
   const topicMatch=!terms.length||terms.every(t=>topicText.includes(t));
   const formulas=topic.f.filter(f=>!terms.length||topicMatch||terms.every(t=>norm(f.join(' ')).includes(t)));
   return formulas.length?[{topic,formulas,opened:Boolean(terms.length)}]:[];
  });
  count.textContent=text[lang].resultStart+' '+cards.length;
  const total=(window.MATH_SAATHI_FORMULAS||[]).reduce((sum,topic)=>sum+topic.f.length,0);
  document.querySelector('#formula-summary-count').textContent=total+' '+text[lang].summaryFormulas+' · '+(window.MATH_SAATHI_FORMULAS||[]).length+' '+text[lang].summaryTopics;
  list.innerHTML=cards.length?cards.map(({topic,formulas,opened})=>'<details class="formula-topic"'+(opened?' open':'')+'><summary><span class="formula-topic-title">'+esc(topic[lang==='en'?'e':'h'])+'</span><span class="formula-topic-meta">'+formulas.length+' '+esc(text[lang].formulaCount)+'</span></summary><ul class="formula-list">'+formulas.map(f=>'<li><code>'+esc(f[0])+'</code><p>'+esc(lang==='hi'?f[1]:f[2])+'</p></li>').join('')+'</ul></details>').join(''):'<p class="formula-empty">'+esc(text[lang].noResults)+'</p>';
 }
 window.setFeatureLanguage=language=>{
  lang=language==='en'?'en':'hi';
  document.querySelectorAll('[data-feature-copy]').forEach(el=>{const value=text[lang][el.dataset.featureCopy];if(value)el.textContent=value;});
  document.querySelectorAll('[data-feature-placeholder]').forEach(el=>{const value=text[lang][el.dataset.featurePlaceholder];if(value)el.placeholder=value;});
  document.querySelectorAll('[data-option-copy]').forEach(el=>{const value=text[lang][el.dataset.optionCopy];if(value)el.textContent=value;});
  const category=document.querySelector('#feedback-category');
  if(category)[...category.options].forEach(option=>{option.textContent=text[lang][option.dataset.copy];});
  render();
 };
 document.querySelectorAll('.quick-nav a').forEach(link=>link.addEventListener('click',()=>{const panel=document.querySelector(link.getAttribute('href'));if(panel instanceof HTMLDetailsElement)panel.open=true;}));
 search.addEventListener('input',render);
 document.querySelector('#feedback-form').addEventListener('submit',event=>{
  event.preventDefault();const form=event.currentTarget,message=form.elements.message.value.trim();if(!message)return;
  const type=form.elements.category.selectedOptions[0].textContent,title='[Math Saathi feedback] '+type;
  const body='Feedback from Math Saathi website\n\nType: '+type+'\nLanguage: '+(lang==='hi'?'Hindi':'English')+'\n\n'+message+'\n\nPage: '+location.href;
  const target='https://github.com/mydigitalcompanion7-collab/math-saathi/issues/new?title='+encodeURIComponent(title)+'&body='+encodeURIComponent(body);
  document.querySelector('#feedback-status').textContent=text[lang].draftReady;
  window.open(target,'_blank','noopener,noreferrer');
 });
 window.setFeatureLanguage(lang);
})();





