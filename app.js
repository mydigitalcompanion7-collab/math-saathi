const translations = {
  hi: {
    eyebrow:'TUMHARA MATHS SAATHI', title:'Maths ko samjho,<br><em>step by step.</em>', intro:'Sawaal likho ya uski tasveer bhejo. Hum milkar hal tak pahunchenge.', questionLabel:'PEHLA KADAM', questionTitle:'Apna maths sawaal bhejo', chapter:'Class 6–12', typeLabel:'Sawaal yahan type karo', placeholder:'Jaise: 2x + 5 = 15 · 5C2 · derivative of x^3', or:'YA', uploadTitle:'Tasveer scan ya upload karo', uploadHint:'Sawaal ki photo chuno · JPG, PNG', solve:'Sawaal bhejo', solveLoading:'Sawaal ke hal nikale ja rahe hain…', solverUnavailable:'Sawaal solve karne ki seva abhi set nahi hui hai.', solveError:'Abhi hal nahi mil paya. Thodi der baad koshish karo.', privacy:'Sawaal/photo ko hal nikalne ke liye online service par bheja jayega.', solutionLabel:'DOOSRA KADAM', solutionTitle:'Tumhara solution', emptyTitle:'Solution yahan dikhega', emptyCopy:'Pehle apna sawaal bhejo. Phir hum ise aasaan steps mein samjhenge.', learning:'SIRF JAWAB NAHI, SAMAJH BHI', howLabel:'SEEDHA SA TAREEQA', how1Title:'Sawaal bhejo', how1Copy:'Type karo ya tasveer chuno.', how2Title:'Steps dekho', how2Copy:'Har qadam par samajh badhao.', how3Title:'Khud solve karo', how3Copy:'Agla sawaal apne dum par.', footer:'· saath seekhenge', footerRight:'ABHI SHURUAAT HAI', imageSelected:'Tasveer chuni gayi', imageUnavailable:'Tasveer nahi padh payi. Saaf photo bhejo ya sawaal type karo.', questionNeeded:'Pehle apna sawaal type karo ya tasveer chuno.', solverUnsupported:'Is sawaal ko local solver abhi solve nahi kar sakta.', solverInvalid:'Sawaal ka format check karo.', solverArithmetic:'Hisab', solverRearrange:'x wale terms aur numbers ko alag karo:', solverCombine:'Dono taraf ke x wale terms ko jodo:', solverDivide:'Ab dono taraf coefficient se divide karo:', solverAnswer:'Jawab', solverNoSolution:'Is equation ka koi solution nahi hai.', solverAllNumbers:'Is equation ke har real number ke liye solution sahi hai.', calcEyebrow:'PEHLE MATHS KI NEENV', calcTitle:'Chalo, calculator se shuru karein.', calcIntro:'Basic hisaab yahin karo—seedha browser mein.', calcDisplayLabel:'TUMHARA HISAAB', calcFootnote:'Keyboard se bhi likh sakte ho · Enter dabao to jawab milega · % ka matlab ÷100', calcError:'Is hisaab ko check karo—shayad koi number ya bracket chhoot gaya.', solutionsLink:'Class 10 ke chapter solutions dekho →', syllabusLink:'Apni class ka official syllabus dekho →', calcDivisionError:'Zero se divide nahi kar sakte.', chapterEyebrow:'CLASS 10 · UNIT I · 5 MARKS', chapterTitle:'Vastavik Sankhyaen <em>(Real Numbers)</em>', chapterStarted:'PEHLA CHAPTER', chapterIntro:'Tumhare syllabus ke mutabik, is chapter ki shuruaat do ideas se hoti hai:', theoremTitle:'Ankganit ka Mool Pramey', theoremCopy:'1 se badi har poori sankhya ko prime sankhyaon ke guna ke roop mein <strong>ek hi tarah</strong> likha ja sakta hai (kram ko chhodkar). Misal: <strong>140 = 2² × 5 × 7</strong>.', irrationalTitle:'√2, √3, √5 ko aparimey siddh karna', irrationalCopy:'Is proof mein prime factorisation aur contradiction ka tareeqa seekhenge.', proofSummary:'Ek proof dekho: √2, √3 aur √5 aparimey kyun hain?', proofIntro:'In teeno mein <strong>p = 2, 3, ya 5</strong> ek prime number hai. Maan lo √p = a/b, jahan a/b sabse saral roop mein hai.', proofStep1:'Dono taraf square karo: <strong>p = a²/b²</strong>, isliye <strong>a² = p × b²</strong>.', proofStep2:'Iska matlab p, a² ko divide karta hai. p prime hai, isliye p ko a ko bhi divide karna hoga. Likho <strong>a = p × k</strong>.', proofStep3:'Ise wapas rakhne par <strong>b² = p × k²</strong>. Isliye p, b ko bhi divide karta hai.', proofStep4:'Ab p, a aur b dono ko divide karta hai. Yeh a/b ke sabse saral roop mein hone ke khilaaf hai—hamara maan galat tha.', proofConclusion:'Isliye √2, √3 aur √5 aparimey sankhyaen hain.', syllabusSource:'Chapter ke topics tumhare bheje hue Class 10 syllabus se liye gaye hain.', solutionsEyebrow:'CHAPTER PRACTICE', solutionsTitle:'Chapter 1 ke solutions', solutionsHint:'Kisi sawaal par tap karke steps dekho'
  },
  en: {
    eyebrow:'YOUR MATHS COMPANION', title:'Make maths clear,<br><em>step by step.</em>', intro:'Type your question or add a photo. We’ll work towards the solution together.', questionLabel:'STEP ONE', questionTitle:'Share your maths question', chapter:'Classes 6–12', typeLabel:'Type your question here', placeholder:'For example: 2x + 5 = 15 · 5C2 · derivative of x^3', or:'OR', uploadTitle:'Scan or upload a photo', uploadHint:'Choose a question photo · JPG, PNG', solve:'Send question', solveLoading:'Working through your question…', solverUnavailable:'Question solving is not set up on this website yet.', solveError:'A solution is not available right now. Please try again in a moment.', privacy:'Your question/photo will be sent to an online service to work out a solution.', solutionLabel:'STEP TWO', solutionTitle:'Your solution', emptyTitle:'Your solution will appear here', emptyCopy:'Send your question first. Then we’ll work through it in simple steps.', learning:'UNDERSTAND IT, NOT JUST THE ANSWER', howLabel:'A SIMPLE WAY TO LEARN', how1Title:'Share a question', how1Copy:'Type it or choose a photo.', how2Title:'See the steps', how2Copy:'Build understanding at each step.', how3Title:'Solve on your own', how3Copy:'Try the next one yourself.', footer:'· learning together', footerRight:'JUST GETTING STARTED', imageSelected:'Photo selected', imageUnavailable:'Could not read the image. Upload a clear photo or type the question.', questionNeeded:'Type a question or choose a photo first.', solverUnsupported:'The local solver cannot handle this question yet.', solverInvalid:'Check the question format.', solverArithmetic:'Calculation', solverRearrange:'Collect x terms and constants:', solverCombine:'Combine the x terms on both sides:', solverDivide:'Divide both sides by the coefficient:', solverAnswer:'Answer', solverNoSolution:'This equation has no solution.', solverAllNumbers:'Every real number is a solution to this equation.', solverDiscriminant:'Find the discriminant:', solverQuadraticFormula:'Apply the quadratic formula:', solverNoRealRoots:'This equation has no real roots.', calcEyebrow:'BUILDING THE MATHS FOUNDATION', calcTitle:'Let’s start with a calculator.', calcIntro:'Do basic calculations here—in your browser.', calcDisplayLabel:'YOUR CALCULATION', calcFootnote:'Type with your keyboard too · press Enter for the answer · % means ÷100', calcError:'Check the expression—there may be a missing number or bracket.', solutionsLink:'Browse Class 10 chapter solutions →', syllabusLink:'View the official syllabus for this class →', calcDivisionError:'Cannot divide by zero.', chapterEyebrow:'CLASS 10 · UNIT I · 5 MARKS', chapterTitle:'Real Numbers <em>(Vastavik Sankhyaen)</em>', chapterStarted:'FIRST CHAPTER', chapterIntro:'According to your syllabus, this unit starts with two ideas:', theoremTitle:'Fundamental Theorem of Arithmetic', theoremCopy:'Every whole number greater than 1 can be written as a product of primes in <strong>one unique way</strong> (ignoring order). Example: <strong>140 = 2² × 5 × 7</strong>.', irrationalTitle:'Proving √2, √3 and √5 are irrational', irrationalCopy:'This proof uses prime factorisation and contradiction.', proofSummary:'See a proof: why are √2, √3 and √5 irrational?', proofIntro:'For each case, <strong>p = 2, 3, or 5</strong> is prime. Suppose √p = a/b, where a/b is in lowest terms.', proofStep1:'Square both sides: <strong>p = a²/b²</strong>, so <strong>a² = p × b²</strong>.', proofStep2:'So p divides a². Since p is prime, p must also divide a. Write <strong>a = p × k</strong>.', proofStep3:'Substitute that back: <strong>b² = p × k²</strong>. So p also divides b.', proofStep4:'Now p divides both a and b. That contradicts a/b being in lowest terms, so our assumption was false.', proofConclusion:'Therefore √2, √3 and √5 are irrational.', syllabusSource:'These chapter topics come from the Class 10 syllabus you shared.', solutionsEyebrow:'CHAPTER PRACTICE', solutionsTitle:'Chapter 1 solutions', solutionsHint:'Tap a question to see the steps'
  }
};

// Chapter 1 answers are kept here for later use, but are not rendered on the clean homepage.
const exerciseBank = {
  hi: [
    {title:'Exercise 1.1 · Q1 · Prime factorisation',body:`<ol><li><strong>140</strong> = 2 × 2 × 5 × 7 = <strong>2² × 5 × 7</strong>.</li><li><strong>156</strong> = 2 × 2 × 3 × 13 = <strong>2² × 3 × 13</strong>.</li><li><strong>3825</strong> = 5 × 5 × 3 × 3 × 17 = <strong>3² × 5² × 17</strong>.</li><li><strong>5005</strong> = 5 × 7 × 11 × 13.</li><li><strong>7429</strong> = 17 × 19 × 23.</li></ol>`},
    {title:'Exercise 1.1 · Q2 · HCF, LCM aur jaanch',body:`<ol><li>26 = 2 × 13, 91 = 7 × 13. <strong>HCF = 13</strong>, <strong>LCM = 182</strong>; 13 × 182 = 26 × 91 = 2366.</li><li>510 = 2 × 3 × 5 × 17, 92 = 2² × 23. <strong>HCF = 2</strong>, <strong>LCM = 23,460</strong>; 2 × 23,460 = 510 × 92 = 46,920.</li><li>336 = 2⁴ × 3 × 7, 54 = 2 × 3³. <strong>HCF = 6</strong>, <strong>LCM = 3,024</strong>; 6 × 3,024 = 336 × 54 = 18,144.</li></ol>`},
    {title:'Exercise 1.1 · Q3 · Teen sankhyaon ka HCF aur LCM',body:`<ol><li>12 = 2²×3, 15 = 3×5, 21 = 3×7. <strong>HCF = 3</strong>; <strong>LCM = 2²×3×5×7 = 420</strong>.</li><li>17, 23, 29 alag prime sankhyaen hain. <strong>HCF = 1</strong>; <strong>LCM = 17×23×29 = 11,339</strong>.</li><li>8 = 2³, 9 = 3², 25 = 5². <strong>HCF = 1</strong>; <strong>LCM = 2³×3²×5² = 1,800</strong>.</li></ol>`},
    {title:'Exercise 1.1 · Q4 · HCF se LCM',body:`<p>Do sankhyaon ke liye HCF × LCM = pehli sankhya × doosri sankhya.</p><p>LCM = (306 × 657) ÷ 9 = 34 × 657 = <strong>22,338</strong>.</p>`},
    {title:'Exercise 1.1 · Q5 · 6ⁿ ka aakhri digit',body:`<p>Agar 6ⁿ ka aakhri digit 0 ho, toh woh 10 se divisible hoga; isliye uske prime factors mein 5 bhi hona chahiye. Lekin 6ⁿ = 2ⁿ × 3ⁿ mein factor 5 nahi hota.</p><p><strong>Isliye kisi bhi natural n ke liye 6ⁿ ka aakhri digit 0 nahi ho sakta.</strong></p>`},
    {title:'Exercise 1.1 · Q6 · Dono sankhyaen composite hain',body:`<ol><li>7×11×13 + 13 = 13(7×11 + 1) = <strong>13×78</strong>. Dono factors 1 aur khud sankhya se bade hain, isliye yeh composite hai.</li><li>7×6×5×4×3×2×1 + 5 = 5(7×6×4×3×2×1 + 1) = <strong>5×1009</strong>. Isliye yeh composite hai.</li></ol>`},
    {title:'Exercise 1.1 · Q7 · Ek hi jagah phir milna',body:`<p>Dono ko starting point par ek saath dobara milne mein 18 aur 12 ka LCM jitna samay lagega.</p><p>18 = 2×3², 12 = 2²×3; LCM = 2²×3² = <strong>36 minute</strong>.</p>`},
    {title:'Exercise 1.2 · Q1 · √5 aparimey hai',body:`<ol><li>Maan lo √5 = a/b, jahan a/b sabse saral roop mein hai.</li><li>Square karne par a² = 5b². Isliye 5, a² ko divide karta hai; prime 5 ko a ko bhi divide karna hoga. Likho a = 5k.</li><li>Rakhne par 25k² = 5b², yaani b² = 5k². Isliye 5, b ko bhi divide karta hai.</li><li>Ab 5, a aur b dono ko divide karta hai—yeh sabse saral roop ke khilaaf hai.</li></ol><p><strong>Atah √5 aparimey hai.</strong></p>`},
    {title:'Exercise 1.2 · Q2 · 3 + 2√5 aparimey hai',body:`<p>Maan lo 3 + 2√5 parimey hai. Tab √5 = ((3 + 2√5) − 3) ÷ 2 bhi parimey hota, kyunki parimey sankhya se 3 ghata kar 2 se bhaag dene par parimey hi milta hai.</p><p>Lekin √5 aparimey hai. Yeh virodhabhaas hai, isliye <strong>3 + 2√5 aparimey hai</strong>.</p>`},
    {title:'Exercise 1.2 · Q3 · Teenon abhivyaktiyan aparimey',body:`<ol><li><strong>1/√2:</strong> Agar yeh parimey ho, toh iska ulta √2 bhi parimey hoga. Yeh galat hai; isliye 1/√2 aparimey hai.</li><li><strong>7√5:</strong> Agar yeh parimey ho, toh 7 se bhaag dene par √5 parimey hoga. Yeh galat hai; isliye 7√5 aparimey hai.</li><li><strong>6 + √2:</strong> Agar yeh parimey ho, toh 6 ghatane par √2 parimey hoga. Yeh galat hai; isliye 6 + √2 aparimey hai.</li></ol>`}
  ],
  en: [
    {title:'Exercise 1.1 · Q1 · Prime factorisation',body:`<ol><li><strong>140</strong> = 2 × 2 × 5 × 7 = <strong>2² × 5 × 7</strong>.</li><li><strong>156</strong> = 2 × 2 × 3 × 13 = <strong>2² × 3 × 13</strong>.</li><li><strong>3825</strong> = 5 × 5 × 3 × 3 × 17 = <strong>3² × 5² × 17</strong>.</li><li><strong>5005</strong> = 5 × 7 × 11 × 13.</li><li><strong>7429</strong> = 17 × 19 × 23.</li></ol>`},
    {title:'Exercise 1.1 · Q2 · HCF, LCM and verification',body:`<ol><li>26 = 2 × 13, 91 = 7 × 13. <strong>HCF = 13</strong>, <strong>LCM = 182</strong>; 13 × 182 = 26 × 91 = 2366.</li><li>510 = 2 × 3 × 5 × 17, 92 = 2² × 23. <strong>HCF = 2</strong>, <strong>LCM = 23,460</strong>; 2 × 23,460 = 510 × 92 = 46,920.</li><li>336 = 2⁴ × 3 × 7, 54 = 2 × 3³. <strong>HCF = 6</strong>, <strong>LCM = 3,024</strong>; 6 × 3,024 = 336 × 54 = 18,144.</li></ol>`},
    {title:'Exercise 1.1 · Q3 · HCF and LCM of three integers',body:`<ol><li>12 = 2²×3, 15 = 3×5, 21 = 3×7. <strong>HCF = 3</strong>; <strong>LCM = 2²×3×5×7 = 420</strong>.</li><li>17, 23 and 29 are distinct primes. <strong>HCF = 1</strong>; <strong>LCM = 17×23×29 = 11,339</strong>.</li><li>8 = 2³, 9 = 3², 25 = 5². <strong>HCF = 1</strong>; <strong>LCM = 2³×3²×5² = 1,800</strong>.</li></ol>`},
    {title:'Exercise 1.1 · Q4 · Find LCM from HCF',body:`<p>For two integers, HCF × LCM = first integer × second integer.</p><p>LCM = (306 × 657) ÷ 9 = 34 × 657 = <strong>22,338</strong>.</p>`},
    {title:'Exercise 1.1 · Q5 · The last digit of 6ⁿ',body:`<p>If 6ⁿ ended in 0, it would be divisible by 10 and its prime factorisation would include 5. But 6ⁿ = 2ⁿ × 3ⁿ has no factor 5.</p><p><strong>So 6ⁿ cannot end in 0 for any natural n.</strong></p>`},
    {title:'Exercise 1.1 · Q6 · Show both numbers are composite',body:`<ol><li>7×11×13 + 13 = 13(7×11 + 1) = <strong>13×78</strong>, so it is composite.</li><li>7×6×5×4×3×2×1 + 5 = 5(7×6×4×3×2×1 + 1) = <strong>5×1009</strong>, so it is composite.</li></ol>`},
    {title:'Exercise 1.1 · Q7 · Meet again at the start',body:`<p>They will both be at the starting point after the LCM of 18 and 12 minutes.</p><p>18 = 2×3², 12 = 2²×3; LCM = 2²×3² = <strong>36 minutes</strong>.</p>`},
    {title:'Exercise 1.2 · Q1 · √5 is irrational',body:`<ol><li>Suppose √5 = a/b in lowest terms.</li><li>Squaring gives a² = 5b². So 5 divides a²; since 5 is prime, it divides a. Let a = 5k.</li><li>Substitution gives b² = 5k², so 5 also divides b.</li><li>Then 5 divides both a and b, contradicting lowest terms.</li></ol><p><strong>Therefore √5 is irrational.</strong></p>`},
    {title:'Exercise 1.2 · Q2 · 3 + 2√5 is irrational',body:`<p>Suppose 3 + 2√5 were rational. Then √5 = ((3 + 2√5) − 3) ÷ 2 would also be rational, because rational numbers remain rational under subtraction and division by 2.</p><p>But √5 is irrational. This contradiction proves <strong>3 + 2√5 is irrational</strong>.</p>`},
    {title:'Exercise 1.2 · Q3 · All three expressions are irrational',body:`<ol><li><strong>1/√2:</strong> If this were rational, its reciprocal √2 would be rational. Contradiction; so 1/√2 is irrational.</li><li><strong>7√5:</strong> If this were rational, dividing by 7 would make √5 rational. Contradiction.</li><li><strong>6 + √2:</strong> If this were rational, subtracting 6 would make √2 rational. Contradiction.</li></ol>`}
  ]
};

const courseCopy = {
  hi: {
    eyebrow: 'APNA COURSE CHUNO', title: 'Class, board aur syllabus', classLabel: 'Class', boardLabel: 'Board', syllabusLabel: 'Syllabus',
    boardUnknown: 'Board specify nahi hai (uploaded syllabus)', uploadedSyllabus: 'Mera bheja hua syllabus PDF', ncertSyllabus: 'NCERT Maths textbook', boardSyllabus: 'Board syllabus details',
    statusDefault: 'Chapter lesson: Class 10 Real Numbers. Typed solver: selected Class 10/11/12 ke kuch common topics; abhi har sawal nahi.',
    statusOther: 'Class {grade} · {board} select kiya. Chapter lessons abhi Class 10 Real Numbers ke hain; typed solver mein Class 10/11/12 ke kuch common question formats hain, par har sawal nahi.'
  },
  en: {
    eyebrow: 'CHOOSE YOUR COURSE', title: 'Class, board and syllabus', classLabel: 'Class', boardLabel: 'Board', syllabusLabel: 'Syllabus',
    boardUnknown: 'Board not specified (uploaded syllabus)', uploadedSyllabus: 'My uploaded syllabus PDF', ncertSyllabus: 'NCERT Mathematics textbook', boardSyllabus: 'Board syllabus details',
    statusDefault: 'Chapter lesson: Class 10 Real Numbers. Typed solver: some common Class 10/11/12 topics; not every question yet.',
    statusOther: 'Class {grade} · {board} selected. Chapter lessons currently cover Class 10 Real Numbers; the typed solver handles some common Class 10/11/12 formats, but not every question.'
  }
};

let language = (() => {
  try { return localStorage.getItem('math-saathi-language') === 'en' ? 'en' : 'hi'; }
  catch { return 'hi'; }
})();
const languageOptions = document.querySelectorAll('.language-option');
const question = document.querySelector('#question');
const fileInput = document.querySelector('#question-image');
const preview = document.querySelector('#image-preview');
const solveButton = document.querySelector('#solve-button');
const solution = document.querySelector('#solution-content');
const calcDisplay = document.querySelector('#calc-display');
const calcMessage = document.querySelector('#calc-message');
const calcKeys = document.querySelector('.calc-keys');
const classSelect = document.querySelector('#class-select');
const boardSelect = document.querySelector('#board-select');
const syllabusSelect = document.querySelector('#syllabus-select');
const courseMessage = document.querySelector('#course-message');
const syllabusLink = document.querySelector('.syllabus-link');
let imageUrl;
let justEvaluated = false;

function loadCoursePreferences() {
  try { return JSON.parse(localStorage.getItem('math-saathi-course') || '{}'); }
  catch { return {}; }
}

function saveCoursePreferences() {
  try {
    localStorage.setItem('math-saathi-course', JSON.stringify({grade: classSelect.value, board: boardSelect.value, syllabus: syllabusSelect.value}));
  } catch { /* Local file mode may block browser storage. */ }
}

function populateClassOptions(selected = '10') {
  classSelect.innerHTML = Array.from({length: 7}, (_, index) => {
    const grade = index + 6;
    return `<option value="${grade}">Class ${grade}</option>`;
  }).join('');
  classSelect.value = ['6','7','8','9','10','11','12'].includes(selected) ? selected : '10';
}

function populateBoardOptions(selected = 'unspecified') {
  const boards = [
    {value:'unspecified', label:courseCopy[language].boardUnknown},
    {value:'cbse', label:'CBSE'},
    {value:'cisce', label:'ICSE / CISCE'},
    {value:'up', label:'Uttar Pradesh Board (UPMSP)'},
    {value:'bihar', label:'Bihar Board (BSEB)'},
    {value:'mp', label:'Madhya Pradesh Board (MPBSE)'},
    {value:'maharashtra', label:'Maharashtra State Board'},
    {value:'rajasthan', label:'Rajasthan Board (RBSE)'},
    {value:'other-state', label:'Other State Board'},
    {value:'other', label:'Other / Custom'}
  ];
  boardSelect.innerHTML = boards.map((board) => `<option value="${board.value}">${board.label}</option>`).join('');
  boardSelect.value = boards.some((board) => board.value === selected) ? selected : 'unspecified';
}

function populateSyllabusOptions(selected) {
  const copy = courseCopy[language];
  let options;
  if (boardSelect.value === 'unspecified') {
    options = [{value:'uploaded', label:copy.uploadedSyllabus}, {value:'ncert', label:copy.ncertSyllabus}];
  } else {
    options = [
      {value:'board', label:`${boardSelect.selectedOptions[0].textContent} · ${copy.boardSyllabus}`},
      {value:'uploaded', label:copy.uploadedSyllabus},
      {value:'ncert', label:copy.ncertSyllabus}
    ];
  }
  syllabusSelect.innerHTML = options.map((option) => `<option value="${option.value}">${option.label}</option>`).join('');
  syllabusSelect.value = options.some((option) => option.value === selected) ? selected : options[0].value;
}

function updateCourseMessage() {
  const grade = classSelect.value;
  const board = boardSelect.selectedOptions[0]?.textContent || '';
  if (grade === '10' && boardSelect.value === 'unspecified' && syllabusSelect.value === 'uploaded') {
    courseMessage.textContent = courseCopy[language].statusDefault;
  } else {
    courseMessage.textContent = courseCopy[language].statusOther.replace('{grade}', grade).replace('{board}', board);
  }
  if (syllabusLink) {
    syllabusLink.href = `syllabus.html?board=${encodeURIComponent(boardSelect.value)}&class=${encodeURIComponent(grade)}`;
    syllabusLink.hidden = !['6','7','8','9','10','11','12'].includes(grade);
  }
}

function initializeCourseControls() {
  const saved = loadCoursePreferences();
  populateClassOptions(saved.grade || '10');
  populateBoardOptions(saved.board || 'unspecified');
  populateSyllabusOptions(saved.syllabus || 'uploaded');
  classSelect.addEventListener('change', () => { updateCourseMessage(); saveCoursePreferences(); });
  boardSelect.addEventListener('change', () => { populateSyllabusOptions(); updateCourseMessage(); saveCoursePreferences(); });
  syllabusSelect.addEventListener('change', () => { updateCourseMessage(); saveCoursePreferences(); });
  updateCourseMessage();
}

function setLanguage(next) {
  language = next;
  try { localStorage.setItem('math-saathi-language', next); } catch { /* Local file mode may block browser storage. */ }
  document.documentElement.lang = next;
  window.setFeatureLanguage?.(next);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[next][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translations[next][element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = translations[next][element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-course-i18n]').forEach((element) => {
    element.textContent = courseCopy[next][element.dataset.courseI18n];
  });
  populateBoardOptions(boardSelect.value || 'unspecified');
  populateSyllabusOptions(syllabusSelect.value || 'uploaded');
  updateCourseMessage();
  calcDisplay.setAttribute('aria-label', translations[next].calcDisplayLabel);
  calcMessage.textContent = '';
  languageOptions.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === next));
  });
  if (fileInput.files[0]) showPreview(fileInput.files[0]);
}

function showPreview(file) {
  if (imageUrl) URL.revokeObjectURL(imageUrl);
  imageUrl = URL.createObjectURL(file);
  preview.hidden = false;
  preview.innerHTML = `<img src="${imageUrl}" alt="${translations[language].imageSelected}"><span>${translations[language].imageSelected}</span><button type="button" aria-label="Remove image">×</button>`;
  preview.querySelector('button').addEventListener('click', () => {
    fileInput.value = '';
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    imageUrl = undefined;
    preview.hidden = true;
    preview.replaceChildren();
  });
}

languageOptions.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

function calculateExpression(source, steps) {
  const normalized = source.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-').replaceAll('²', '^2').replaceAll('³', '^3').replaceAll(' ', '');
  const tokens = normalized.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/%^]/g) || [];
  if (!tokens.length || tokens.join('') !== normalized) throw new Error('invalid');
  let position = 0;
  function expression() {
    let value = term();
    while (tokens[position] === '+' || tokens[position] === '-') {
      const operator = tokens[position++];
      const right = term();
      const before = value;
      value = operator === '+' ? value + right : value - right;
      if (steps) steps.push(`${formatMathNumber(before)} ${operator} ${formatMathNumber(right)} = ${formatMathNumber(value)}`);
    }
    return value;
  }
  function term() {
    let value = power();
    while (tokens[position] === '*' || tokens[position] === '/') {
      const operator = tokens[position++];
      const right = power();
      if (operator === '/' && right === 0) throw new Error('division');
      const before = value;
      value = operator === '*' ? value * right : value / right;
      if (steps) steps.push(`${formatMathNumber(before)} ${operator} ${formatMathNumber(right)} = ${formatMathNumber(value)}`);
    }
    return value;
  }
  function power() {
    let value = unary();
    if (tokens[position] === '^') {
      position++;
      const exponent = power();
      const base = value;
      value = base ** exponent;
      if (steps) steps.push(`${formatMathNumber(base)} ^ ${formatMathNumber(exponent)} = ${formatMathNumber(value)}`);
    }
    return value;
  }
  function unary() {
    if (tokens[position] === '+') { position++; return unary(); }
    if (tokens[position] === '-') { position++; return -unary(); }
    let value;
    if (tokens[position] === '(') {
      position++;
      value = expression();
      if (tokens[position++] !== ')') throw new Error('invalid');
    } else {
      const token = tokens[position++];
      if (token === undefined || !/^\d*\.?\d+$/.test(token)) throw new Error('invalid');
      value = Number(token);
    }
    while (tokens[position] === '%') { position++; value /= 100; }
    return value;
  }
  const result = expression();
  if (position !== tokens.length || !Number.isFinite(result)) throw new Error('invalid');
  return Number(result.toPrecision(12)).toString();
}

function enterCalcValue(value) {
  if (justEvaluated && /[\d.(]/.test(value)) calcDisplay.value = '';
  justEvaluated = false;
  calcDisplay.value += value;
  calcMessage.textContent = '';
  calcDisplay.focus();
}

function runCalculation() {
  try {
    calcDisplay.value = calculateExpression(calcDisplay.value);
    calcMessage.textContent = '';
    justEvaluated = true;
  } catch (error) {
    calcMessage.textContent = error.message === 'division' ? translations[language].calcDivisionError : translations[language].calcError;
    justEvaluated = false;
  }
}

calcKeys.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.calc === 'clear') {
    calcDisplay.value = '';
    calcMessage.textContent = '';
    justEvaluated = false;
  } else if (button.dataset.calc === 'backspace') {
    calcDisplay.value = calcDisplay.value.slice(0, -1);
    calcMessage.textContent = '';
    justEvaluated = false;
  } else if (button.dataset.calc === 'equals') {
    runCalculation();
  } else if (button.dataset.value) {
    enterCalcValue(button.dataset.value);
  }
});

calcDisplay.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    runCalculation();
  } else if (event.key === 'Escape') {
    calcDisplay.value = '';
    calcMessage.textContent = '';
    justEvaluated = false;
  }
});
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) showPreview(file);
});
function formatMathNumber(value) {
  if (Math.abs(value) < 1e-12) value = 0;
  return Number(value.toPrecision(10)).toString();
}
function formatLinearTerm(coefficient, variable = 'x') {
  if (Math.abs(coefficient) < 1e-12) return '';
  const abs = Math.abs(coefficient);
  const coeff = Math.abs(abs - 1) < 1e-12 ? '' : formatMathNumber(abs);
  return `${coefficient < 0 ? '−' : ''}${coeff}${variable}`;
}
function solvePolynomialSide(source) {
  const normalized = source.toLowerCase().replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-').replaceAll('²', '^2').replaceAll('³', '^3').replaceAll(' ', '');
  const tokens = normalized.match(/(?:\d+(?:\.\d*)?|\.\d+)|x|[()+\-*/%^]/g) || [];
  if (!tokens.length || tokens.join('') !== normalized) throw new Error('invalid');
  let position = 0;
  const poly = (c0=0,c1=0,c2=0) => ({c:[c0,c1,c2]});
  const add = (a,b,sign=1) => poly(a.c[0]+sign*b.c[0],a.c[1]+sign*b.c[1],a.c[2]+sign*b.c[2]);
  function multiply(a,b) {
    const c=[0,0,0];
    for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
      if (Math.abs(a.c[i]*b.c[j])<1e-12) continue;
      if (i+j>2) throw new Error('nonlinear');
      c[i+j]+=a.c[i]*b.c[j];
    }
    return poly(...c);
  }
  function expression() {
    let value=term();
    while (tokens[position] === '+' || tokens[position] === '-') {
      const op=tokens[position++], right=term(); value=add(value,right,op==='+'?1:-1);
    }
    return value;
  }
  function term() {
    let value=unary();
    while (position<tokens.length) {
      const op=tokens[position], implicit=op==='x'||op==='(';
      if (op!=='*'&&op!=='/'&&!implicit) break;
      if (!implicit) position++;
      const right=unary();
      if (op==='/') {
        if (Math.abs(right.c[1])+Math.abs(right.c[2])>1e-12) throw new Error('nonlinear');
        if (Math.abs(right.c[0])<1e-12) throw new Error('division');
        value=poly(value.c[0]/right.c[0],value.c[1]/right.c[0],value.c[2]/right.c[0]);
      } else value=multiply(value,right);
    }
    return value;
  }
  function unary() {
    if (tokens[position]==='+') {position++;return unary();}
    if (tokens[position]==='-') {position++;const v=unary();return poly(-v.c[0],-v.c[1],-v.c[2]);}
    let value;
    if (tokens[position]==='(') {position++;value=expression();if(tokens[position++]!==')')throw new Error('invalid');}
    else if(tokens[position]==='x'){position++;value=poly(0,1,0);}
    else {const token=tokens[position++];if(token===undefined||!/^\d*\.?\d+$/.test(token))throw new Error('invalid');value=poly(Number(token),0,0);}
    while(tokens[position]==='%') {position++;if(Math.abs(value.c[1])+Math.abs(value.c[2])>1e-12)throw new Error('invalid');value=poly(value.c[0]/100,0,0);}
    while(tokens[position]==='^') {
      position++;let sign=1;if(tokens[position]==='-'){sign=-1;position++;}else if(tokens[position]==='+')position++;
      const exponent=Number(tokens[position++])*sign;
      if(!Number.isInteger(exponent)||exponent<0||exponent>2)throw new Error('nonlinear');
      let result=poly(1),base=value;
      for(let i=0;i<exponent;i++) result=multiply(result,base);
      value=result;
    }
    return value;
  }
  const value=expression();
  if(position!==tokens.length||value.c.some(n=>!Number.isFinite(n)))throw new Error('invalid');
  return value;
}
function formatPolynomial(poly) {
  const pieces=[];
  for(let degree=2;degree>=0;degree--) {
    const coefficient=poly.c[degree]; if(Math.abs(coefficient)<1e-12)continue;
    const negative=coefficient<0, abs=Math.abs(coefficient), variable=degree===2?'x²':degree===1?'x':'';
    const amount=variable&&Math.abs(abs-1)<1e-12?'':formatMathNumber(abs);
    pieces.push(`${pieces.length?(negative?' − ':' + '):(negative?'−':'')}${amount}${variable}`);
  }
  return pieces.join('')||'0';
}
function polyFromCoefficients(c) { return {c}; }
function parseGeneralPolynomial(source) {
  const text=source.toLowerCase().replaceAll('−','-').replaceAll('²','^2').replaceAll('³','^3').replaceAll('⁴','^4').replaceAll(' ','');
  const terms=text.match(/[+-]?[^+-]+/g); if(!terms)throw new Error('invalid');
  const coefficients=Array(13).fill(0);
  for(const term of terms){const m=term.match(/^([+-]?)(?:(\d+(?:\.\d*)?|\.\d+)\*?)?(x)?(?:\^(\d+))?$/);if(!m||(!m[2]&&!m[3]))throw new Error('invalid');const degree=m[3]?Number(m[4]||1):0;if(degree>12)throw new Error('nonlinear');const coefficient=(m[1]==='-'?-1:1)*(m[2]?Number(m[2]):1);coefficients[degree]+=coefficient;}
  return coefficients;
}
function formatGeneralPolynomial(coefficients) {
  const parts=[];for(let degree=coefficients.length-1;degree>=0;degree--){const coefficient=coefficients[degree];if(Math.abs(coefficient)<1e-12)continue;const negative=coefficient<0,abs=Math.abs(coefficient),variable=degree?`x${degree>1?`^${degree}`:''}`:'',amount=variable&&Math.abs(abs-1)<1e-12?'':formatMathNumber(abs);parts.push(`${parts.length?(negative?' − ':' + '):(negative?'−':'')}${amount}${variable}`);}return parts.join('')||'0';
}
function solveTextQuestion(source) {
  const q = source.toLowerCase().replaceAll('−','-').replaceAll('×','*').replaceAll('π','pi').replaceAll('²','^2').replaceAll('³','^3');
  const nums = (text=q) => (text.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  const result = (kind, answer, lines) => ({kind, answer, lines:[source, ...lines, `${translations[language].solverAnswer}: ${answer}`]});

  const fraction=q.match(/(?:simplify|reduce|lowest terms|saral(?:\s+roop)?\s+me(?:in)?)\s+(?:the\s+)?(?:fraction\s+)?(-?\d+)\s*\/\s*(-?\d+)/);
  if(fraction){let a=Math.abs(Number(fraction[1])),b=Math.abs(Number(fraction[2]));if(b){const originalA=a,originalB=b;while(b)[a,b]=[b,a%b];const sign=Math.sign(Number(fraction[1])*Number(fraction[2]))<0?-1:1,gcd=a||1,n=sign*originalA/gcd,d=originalB/gcd;return result('fractions',`${n}/${d}`,[`Find the greatest common divisor: HCF(${originalA}, ${originalB}) = ${gcd}.`,`Divide numerator and denominator by ${gcd}: ${n}/${d}.`]);}}

  const percent=q.match(/(-?\d+(?:\.\d+)?)\s*(?:%|percent)\s*(?:of|ka|ki)\s*(-?\d+(?:\.\d+)?)/);
  if(percent){const rate=Number(percent[1]),amount=Number(percent[2]),value=rate*amount/100;return result('percentages',formatMathNumber(value),[`${rate}% = ${rate}/100.`,`(${rate}/100) × ${amount} = ${formatMathNumber(value)}`]);}

  const simpleInterest=q.match(/simple interest.*?(?:principal\s*[:=]?\s*)?(-?\d+(?:\.\d+)?).*?(?:rate\s*[:=]?\s*|at\s*)(-?\d+(?:\.\d+)?)\s*%.*?(?:time\s*[:=]?\s*|for\s*)(-?\d+(?:\.\d+)?)/);
  if(simpleInterest){const [p,r,t]=simpleInterest.slice(1).map(Number);const interest=p*r*t/100;return result('simple-interest',formatMathNumber(interest),[`Simple Interest = (P × R × T) / 100.`,`= (${p} × ${r} × ${t}) / 100 = ${formatMathNumber(interest)}`]);}

  const cuboid=q.match(/(?:volume of (?:a )?cuboid|cuboid volume).*?(?:length|l)\s*[:=]?\s*(-?\d+(?:\.\d+)?).*?(?:breadth|width|w)\s*[:=]?\s*(-?\d+(?:\.\d+)?).*?(?:height|h)\s*[:=]?\s*(-?\d+(?:\.\d+)?)/);
  if(cuboid){const [l,w,h]=cuboid.slice(1).map(Number),v=l*w*h;return result('mensuration',formatMathNumber(v),[`Cuboid volume = length × breadth × height.`,`V = ${l} × ${w} × ${h} = ${formatMathNumber(v)} cubic units.`]);}

  const hypotenuse=q.match(/hypotenuse.*?(?:sides?|legs?)\s*(-?\d+(?:\.\d+)?)\s*(?:and|,|&)\s*(-?\d+(?:\.\d+)?)/);
  if(hypotenuse){const [a,b]=hypotenuse.slice(1).map(Number),c=Math.hypot(a,b);return result('geometry',formatMathNumber(c),[`Pythagorean theorem: c² = a² + b².`,`c = √(${a}² + ${b}²) = √(${a*a+b*b}) = ${formatMathNumber(c)}.`]);}

  if (/\b(hcf|gcd|greatest common factor|highest common factor)\b/.test(q) || /महत्तम समापवर्तक/.test(q)) {
    const values=nums(); if(values.length>=2) {
      const [a,b]=values.slice(-2).map(Math.abs); let x=Math.round(a),y=Math.round(b);
      while(y){[x,y]=[y,x%y];} const gcd=x, lcm=gcd?Math.abs(a*b)/gcd:0;
      const wantsLcm=/\blcm\b|least common multiple|लघुत्तम समापवर्त्य/.test(q);
      return result('number-theory',wantsLcm?formatMathNumber(lcm):String(gcd),[`HCF(${a}, ${b}) = ${gcd}`,`LCM(${a}, ${b}) = ${formatMathNumber(lcm)}`]);
    }
  }

  if (/\b(mean|average|median|mode)\b/.test(q) && /(?:data|numbers|observations|values)\s*[:=]/.test(q)) {
    const listMatch=q.split(/(?:data|numbers|observations|values)\s*[:=]/).at(-1);
    const values=nums(listMatch); if(values.length) {
      const sorted=[...values].sort((a,b)=>a-b), total=values.reduce((a,b)=>a+b,0), mean=total/values.length;
      const median=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
      const counts=new Map(); values.forEach(n=>counts.set(n,(counts.get(n)||0)+1)); const maxCount=Math.max(...counts.values());
      const modes=[...counts].filter(([,c])=>c===maxCount).map(([n])=>n);
      const requested=/\bmedian\b/.test(q)?`Median = ${formatMathNumber(median)}`:/\bmode\b/.test(q)?`Mode = ${modes.join(', ')}${maxCount===1?' (no repeated value)':''}`:`Mean = (${values.join(' + ')}) / ${values.length} = ${formatMathNumber(mean)}`;
      return result('statistics',requested,[`Arrange data: ${sorted.join(', ')}`,`Count = ${values.length}; sum = ${formatMathNumber(total)}`,`Mean = ${formatMathNumber(mean)}; Median = ${formatMathNumber(median)}; Mode = ${modes.join(', ')}`]);
    }
  }

  const apMatch=q.match(/(?:ap|a\.p\.|arithmetic progression|समांतर श्रेढ़ी)[^\d-]*(-?\d+(?:\.\d+)?)(?:\s*[,;]\s*|\s+)(-?\d+(?:\.\d+)?)(?:\s*[,;]\s*|\s+)(-?\d+(?:\.\d+)?)/);
  if (apMatch && /\b(term|terms|nth|sum|पद|योग)\b/.test(q)) {
    const [a,b,c]=apMatch.slice(1).map(Number), d=b-a;
    if(Math.abs((c-b)-d)<1e-9) {
      const ordinal=q.match(/(\d+)(?:st|nd|rd|th)?\s*(?:term|पद)/), n=ordinal?Number(ordinal[1]):null;
      if(n && /\bsum\b|\bfirst\s+\d+\s+terms?\b|योग/.test(q)) {
        const N=Number((q.match(/(?:first\s+|sum of first\s+)(\d+)/)||[])[1]||n);
        const sum=N*(2*a+(N-1)*d)/2;
        return result('arithmetic-progression',formatMathNumber(sum),[`a = ${a}, d = ${d}, n = ${N}`,`Sₙ = n/2 [2a + (n − 1)d]`,`S${N} = ${formatMathNumber(sum)}`]);
      }
      if(n) { const term=a+(n-1)*d; return result('arithmetic-progression',formatMathNumber(term),[`a = ${a}, d = ${d}, n = ${n}`,`aₙ = a + (n − 1)d = ${a} + (${n} − 1) × ${d}`,`a${n} = ${formatMathNumber(term)}`]); }
    }
  }

  const coordinatePairs=[...q.matchAll(/\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g)];
  if(coordinatePairs.length>=2 && /distance|दूरी/.test(q)) {
    const [[,x1,y1],[,x2,y2]]=coordinatePairs.map(m=>m.map(Number));
    const dx=x2-x1,dy=y2-y1,distance=Math.hypot(dx,dy);
    return result('coordinate-geometry',formatMathNumber(distance),[`Δx = ${x2} − (${x1}) = ${dx}; Δy = ${y2} − (${y1}) = ${dy}`,`d = √[(Δx)² + (Δy)²] = √(${dx*dx} + ${dy*dy})`,`d = ${formatMathNumber(distance)}`]);
  }
  if(coordinatePairs.length>=2 && /slope|gradient|प्रवणता|ढाल/.test(q)) {
    const [[,x1,y1],[,x2,y2]]=coordinatePairs.map(m=>m.map(Number)),dx=x2-x1,dy=y2-y1;
    if(Math.abs(dx)<1e-12)return result('coordinate-geometry','undefined (vertical line)',[`m = (y₂ − y₁)/(x₂ − x₁)`,`x₂ − x₁ = 0, so the line is vertical.`]);
    return result('coordinate-geometry',formatMathNumber(dy/dx),[`m = (y₂ − y₁)/(x₂ − x₁)`,`m = (${y2} − ${y1})/(${x2} − ${x1}) = ${formatMathNumber(dy/dx)}`]);
  }
  if(coordinatePairs.length>=2 && /midpoint|mid-point|मध्यबिंदु/.test(q)) {
    const [[,x1,y1],[,x2,y2]]=coordinatePairs.map(m=>m.map(Number)),x=(x1+x2)/2,y=(y1+y2)/2;
    return result('coordinate-geometry',`(${formatMathNumber(x)}, ${formatMathNumber(y)})`,[`M = ((x₁+x₂)/2, (y₁+y₂)/2)`,`M = ((${x1}+${x2})/2, (${y1}+${y2})/2)`,`M = (${formatMathNumber(x)}, ${formatMathNumber(y)})`]);
  }
  if(coordinatePairs.length>=3 && /area|क्षेत्रफल/.test(q)) {
    const [[,x1,y1],[,x2,y2],[,x3,y3]]=coordinatePairs.slice(0,3).map(m=>m.map(Number)),area=Math.abs(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2;
    return result('coordinate-geometry',formatMathNumber(area),[`Area = ½ |x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|`,`Area = ${formatMathNumber(area)}`]);
  }
  const triples=[...q.matchAll(/\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g)];
  if(triples.length>=1 && /vector|magnitude|\|/.test(q) && /magnitude|modulus|norm/.test(q)) {
    const v=triples[0].slice(1).map(Number),magnitude=Math.hypot(...v);
    return result('vectors',formatMathNumber(magnitude),[`For v = (${v.join(', ')}), |v| = √(x² + y² + z²).`,`|v| = √(${v.map(n=>n*n).join(' + ')}) = ${formatMathNumber(magnitude)}`]);
  }
  if(triples.length>=2 && /dot product|scalar product/.test(q)) {
    const a=triples[0].slice(1).map(Number),b=triples[1].slice(1).map(Number),terms=a.map((n,i)=>n*b[i]),dot=terms.reduce((x,y)=>x+y,0);
    return result('vectors',formatMathNumber(dot),[`a · b = a₁b₁ + a₂b₂ + a₃b₃`,`= ${a.map((n,i)=>`${n}×${b[i]}`).join(' + ')} = ${terms.join(' + ')} = ${formatMathNumber(dot)}`]);
  }
  if(triples.length>=2&&/3d|three-dimensional|three dimensional|space distance/.test(q)) {
    const p=triples[0].slice(1).map(Number),r=triples[1].slice(1).map(Number),d=Math.hypot(...p.map((v,i)=>r[i]-v));
    return result('coordinate-geometry',formatMathNumber(d),[`d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]`,`d = ${formatMathNumber(d)}`]);
  }

  const trig=q.match(/\b(sin|cos|tan)\s*(\d+(?:\.\d+)?)\s*°?/);
  if(trig) {
    const angle=Number(trig[2]), trigFn=trig[1];
    if([0,30,45,60,90].includes(angle)) {
      const values={sin:{0:'0',30:'1/2',45:'1/√2',60:'√3/2',90:'1'},cos:{0:'1',30:'√3/2',45:'1/√2',60:'1/2',90:'0'},tan:{0:'0',30:'1/√3',45:'1',60:'√3',90:'undefined'}};
      const exact=values[trigFn][angle];
      return result('trigonometry',exact,[`Use the standard-angle value for ${trigFn} ${angle}°:`,`Therefore ${trigFn} ${angle}° = ${exact}`]);
    }
  }

  const circle=q.match(/(?:circle|वृत्त)[^\d]*radius\s*(-?\d+(?:\.\d+)?)|radius\s*(-?\d+(?:\.\d+)?)[^a-z]*(?:circle|वृत्त)/);
  if(circle && /area|क्षेत्रफल|circumference|परिधि/.test(q)) {
    const r=Number(circle[1]||circle[2]); if(r>=0) {
      const area=Math.PI*r*r, circumference=2*Math.PI*r, isArea=/area|क्षेत्रफल/.test(q), answer=formatMathNumber(isArea?area:circumference);
      return result('mensuration',answer,[`r = ${r}`,isArea?`A = πr² = π × ${r}² = ${answer}`:`C = 2πr = 2 × π × ${r} = ${answer}`]);
    }
  }

  if(/\b(prime factorization|prime factorisation|prime factors|अभाज्य गुणनखंड)\b/.test(q)) {
    const n=Math.abs(Math.trunc(nums().at(-1)||0));
    if(n>1) { let value=n,p=2;const factors=[];while(p*p<=value){let power=0;while(value%p===0){value/=p;power++;}if(power)factors.push(power>1?`${p}^${power}`:String(p));p++;}if(value>1)factors.push(String(value));return result('number-theory',factors.join(' ×'),[`Divide ${n} repeatedly by the smallest prime numbers.`,`Prime factorisation: ${n} = ${factors.join(' × ')}`]); }
  }

  if(/\b(factori[sz]e|factorise|factorise|गुणनखंड करो|गुणनखंड कीजिए)\b/.test(q)) {
    const expression=source.replace(/^.*?(?:factori[sz]e|factorise)\s*/i,'').replaceAll('²','^2').replaceAll('−','-');
    try {const p=solvePolynomialSide(expression),[c,b,a]=p.c;if(Math.abs(a)>1e-12){const disc=b*b-4*a*c;if(disc>=0){const r1=(-b+Math.sqrt(disc))/(2*a),r2=(-b-Math.sqrt(disc))/(2*a);if(Math.abs(r1-Math.round(r1))<1e-9&&Math.abs(r2-Math.round(r2))<1e-9){const f=(r)=>`(x ${r<0?'+':'−'} ${Math.abs(Math.round(r))})`;return result('factorisation',`${formatMathNumber(a)}${f(r1)}${f(r2)}`,[`Find two roots of ${formatPolynomial(p)} = 0: ${formatMathNumber(r1)} and ${formatMathNumber(r2)}.`,`Write the factors using (x − root).`]);}}}} catch {}
  }

  if(/\b(area|क्षेत्रफल)\b/.test(q) && /\b(triangle|त्रिभुज)\b/.test(q) && /\b(base|आधार)\b/.test(q) && /\b(height|ऊंचाई|ऊँचाई)\b/.test(q)) {
    const base=q.match(/(?:base|आधार)\s*(?:of\s*)?(?:is\s*)?(-?\d+(?:\.\d+)?)/), height=q.match(/(?:height|ऊंचाई|ऊँचाई)\s*(?:is\s*)?(-?\d+(?:\.\d+)?)/);
    if(base&&height){const b=Number(base[1]),h=Number(height[1]),area=b*h/2;return result('mensuration',formatMathNumber(area),[`Area of triangle = ½ × base × height`,`= ½ × ${b} × ${h} = ${formatMathNumber(area)}`]);}
  }

  if(/\b(area|क्षेत्रफल)\b/.test(q) && /\b(rectangle|आयत)\b/.test(q)) {
    const length=q.match(/(?:length|लंबाई)\s*(?:is\s*)?(-?\d+(?:\.\d+)?)/), width=q.match(/(?:width|breadth|चौड़ाई)\s*(?:is\s*)?(-?\d+(?:\.\d+)?)/);
    if(length&&width){const l=Number(length[1]),w=Number(width[1]),area=l*w;return result('mensuration',formatMathNumber(area),[`Area of rectangle = length × width`,`= ${l} × ${w} = ${formatMathNumber(area)}`]);}
  }

  if(/\b(integrate|integration|integral)\b|समाकलन/.test(q)) {
    const definite=source.match(/(?:integrate|integral of)\s+(.+?)\s+from\s+(-?\d+(?:\.\d+)?)\s+to\s+(-?\d+(?:\.\d+)?)/i);
    const indefinite=source.match(/(?:integrate|integral of|∫)\s*(.+?)(?:\s*dx)?\s*$/i);
    const raw=(definite?.[1]||indefinite?.[1]||'').trim().replaceAll('²','^2').replaceAll('³','^3');
    try {
      const coefficients=parseGeneralPolynomial(raw),anti=[0,...coefficients.map((c,i)=>c/(i+1))],antiText=formatGeneralPolynomial(anti);
      if(definite){const a=Number(definite[2]),b=Number(definite[3]),evaluate=x=>anti.reduce((sum,c,p)=>sum+c*x**p,0),fa=evaluate(a),fb=evaluate(b),value=fb-fa;return result('calculus',formatMathNumber(value),[`Integrate term by term using ∫xⁿ dx = xⁿ⁺¹/(n+1).`,`F(x) = ${antiText} + C`,`∫[${raw}] dx from ${a} to ${b} = F(${b}) − F(${a}) = ${formatMathNumber(fb)} − (${formatMathNumber(fa)}) = ${formatMathNumber(value)}`]);}
      return result('calculus',`${antiText} + C`,[`Use the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C.`,`Integrate each polynomial term: ∫(${formatGeneralPolynomial(coefficients)}) dx = ${antiText} + C`]);
    } catch {}
  }
  if(/\b(second derivative|differentiate twice|second order derivative)\b/.test(q)) {
    const expression=source.replace(/^.*?(?:second derivative of|differentiate twice)\s*/i,'').replaceAll('²','^2');
    try {const coefficients=parseGeneralPolynomial(expression),first=coefficients.slice(1).map((c,i)=>c*(i+1)),second=first.slice(1).map((c,i)=>c*(i+1)),text=formatGeneralPolynomial(second);return result('calculus',`f″(x) = ${text}`,[`f(x) = ${formatGeneralPolynomial(coefficients)}`,`Differentiate once: f′(x) = ${formatGeneralPolynomial(first)}`,`Differentiate again: f″(x) = ${text}`]);}catch{}
  }
  if(/\b(derivative|differentiate|अवकलज|अवकलन)\b/.test(q)) {
    const expression=source.replace(/^.*?(?:derivative\s+of|differentiate|अवकलज|अवकलन)\s*/i,'').replace(/\s+with respect to\s+x.*$/i,'').replace(/\s+at\s+x\s*=.*$/i,'').replaceAll('²','^2');
    const at=q.match(/\bat\s+x\s*=\s*(-?\d+(?:\.\d+)?)/);
    try {const coefficients=parseGeneralPolynomial(expression),derivative=coefficients.slice(1).map((coefficient,degree)=>coefficient*(degree+1)),text=formatGeneralPolynomial(derivative);
      if(at){const x=Number(at[1]),value=derivative.reduce((sum,coefficient,degree)=>sum+coefficient*x**degree,0);return result('calculus',formatMathNumber(value),[`f(x) = ${formatGeneralPolynomial(coefficients)}`,`Power rule: d(xⁿ)/dx = n·xⁿ⁻¹`,`f′(x) = ${text}`,`f′(${x}) = ${formatMathNumber(value)}`]);}
      return result('calculus',`f′(x) = ${text}`,[`f(x) = ${formatGeneralPolynomial(coefficients)}`,`Apply the power rule term by term: d(xⁿ)/dx = n·xⁿ⁻¹`,`f′(x) = ${text}`]);
    } catch { /* Continue to the standard parser. */ }
  }

  const inequality=source.match(/^\s*(?:solve\s*)?(.+?)\s*(<=|>=|<|>|≤|≥)\s*(.+?)\s*$/i);
  if(inequality&&/x/i.test(inequality[1]+inequality[3])) {
    try {const left=solvePolynomialSide(inequality[1]),right=solvePolynomialSide(inequality[3]),c=left.c.map((v,i)=>v-right.c[i]);if(Math.abs(c[2])<1e-12&&Math.abs(c[1])>1e-12){let op=inequality[2].replace('≤','<=').replace('≥','>='),bound=-c[0]/c[1];if(c[1]<0)op=({'<':'>','>':'<','<=':'>=','>=':'<='})[op];const answer=`x ${op} ${formatMathNumber(bound)}`;return result('inequality',answer,[`Move all terms to the left and isolate x.`,`Boundary value: x = ${formatMathNumber(bound)}.`,`Since the coefficient of x is ${c[1]}, the solution is ${answer}.`]);}}catch{}
  }

  const setMatch=source.match(/\{([^{}]+)\}\s*(union|intersection|intersect|difference|\u222a|\u2229|-)\s*\{([^{}]+)\}/i);
  if(setMatch){const parseSet=(s)=>s.split(',').map(x=>x.trim()).filter(Boolean),a=parseSet(setMatch[1]),b=parseSet(setMatch[3]),op=setMatch[2].toLowerCase();let out;if(op==='union'||op==='∪')out=[...new Set([...a,...b])];else if(op==='intersection'||op==='intersect'||op==='∩')out=a.filter(x=>b.includes(x));else out=a.filter(x=>!b.includes(x));return result('sets',`{${out.join(', ')}}`,[`A = {${a.join(', ')}}, B = {${b.join(', ')}}`,`Apply ${op}: keep each element once for union, shared elements for intersection, or A-only elements for difference.`]);}

  const gpMatch=q.match(/(?:\bgp\b|\bg\.p\.\b|geometric progression)[^\d-]*(-?\d+(?:\.\d+)?)(?:\s*[,;]\s*|\s+)(-?\d+(?:\.\d+)?)(?:\s*[,;]\s*|\s+)(-?\d+(?:\.\d+)?)/);
  if(gpMatch&&/\b(term|terms|nth|sum)\b/.test(q)){const [a,b,c]=gpMatch.slice(1).map(Number),r=b/a,nMatch=q.match(/(\d+)(?:st|nd|rd|th)?\s*(?:term)/);if(a!==0&&Math.abs(c-b*r)<1e-9&&nMatch){const n=Number(nMatch[1]);if(/\bsum\b/.test(q)){const sum=Math.abs(r-1)<1e-12?a*n:a*(1-r**n)/(1-r);return result('geometric-progression',formatMathNumber(sum),[`a = ${a}, common ratio r = ${formatMathNumber(r)}, n = ${n}`,`Sₙ = a(1 − rⁿ)/(1 − r)`,`S${n} = ${formatMathNumber(sum)}`]);}const term=a*r**(n-1);return result('geometric-progression',formatMathNumber(term),[`a = ${a}, common ratio r = ${formatMathNumber(r)}, n = ${n}`,`aₙ = arⁿ⁻¹`,`a${n} = ${formatMathNumber(term)}`]);}}

  const choose=q.match(/(\d+)\s*(c|p)\s*(\d+)|(\d+)\s*(choose|combinations? of|permutations? of)\s*(\d+)|(?:choose|combination|permutation)\s+(\d+)\s*(?:from|of|out of)\s*(\d+)/);
  if(choose){const reverse=Boolean(choose[7]),n=Number(choose[1]||choose[4]||choose[9]),r=Number(choose[3]||choose[6]||choose[8]),permutation=choose[2]==='p'||/permutation/.test(choose[5]||choose[7]||'');const N=reverse?n:n,R=r;if(R<=N){let value=1;for(let i=0;i<R;i++)value*=permutation?N-i:(N-i)/(i+1);const answer=formatMathNumber(value);return result('counting',answer,[permutation?`nPᵣ = n!/(n−r)!`:`nCᵣ = n!/[r!(n−r)!]`,`Substitute n = ${N}, r = ${R}: ${answer}`]);}}

  const factorial=q.match(/(?:factorial\s+of\s+)?(\d+)\s*!/);if(factorial){const n=Number(factorial[1]);if(n<=170){let value=1;for(let i=2;i<=n;i++)value*=i;return result('counting',String(value),[`n! = 1 × 2 × ... × ${n}`,`${n}! = ${value}`]);}}

  const limitMatch=source.match(/(?:lim|limit)\s*(?:as\s*)?x\s*(?:->|→|tends\s+to|approaches)\s*(-?\d+(?:\.\d+)?)\s*(?:of\s*)?(.+)/i);
  if(limitMatch){try{const at=Number(limitMatch[1]),expr=limitMatch[2].trim().replaceAll(' ','');let numerator,denominator;const grouped=expr.match(/^\((.+)\)\/\((.+)\)$/);if(grouped){numerator=parseGeneralPolynomial(grouped[1]);denominator=parseGeneralPolynomial(grouped[2]);}else if(expr.includes('/')){const slash=expr.indexOf('/');numerator=parseGeneralPolynomial(expr.slice(0,slash).replace(/^\(|\)$/g,''));denominator=parseGeneralPolynomial(expr.slice(slash+1).replace(/^\(|\)$/g,''));}else{numerator=parseGeneralPolynomial(expr.replace(/^\(|\)$/g,''));denominator=[1,...Array(12).fill(0)];}const valueAt=(coefficients)=>coefficients.reduce((sum,coefficient,power)=>sum+coefficient*at**power,0);let top=valueAt(numerator),bottom=valueAt(denominator),steps=[`Substitute x = ${at}.`];if(Math.abs(bottom)<1e-12&&Math.abs(top)<1e-12&&expr.includes('/')){const divideAt=(coefficients)=>{const desc=coefficients.slice().reverse();while(desc.length>1&&Math.abs(desc[0])<1e-12)desc.shift();const quotient=[desc[0]];for(let i=1;i<desc.length-1;i++)quotient[i]=desc[i]+at*quotient[i-1];const remainder=desc.at(-1)+at*quotient.at(-1);return {q:quotient.reverse(),remainder};};let nResult=divideAt(numerator),dResult=divideAt(denominator),count=0;while(Math.abs(nResult.remainder)<1e-9&&Math.abs(dResult.remainder)<1e-9&&count<10){numerator=nResult.q;denominator=dResult.q;nResult=divideAt(numerator);dResult=divideAt(denominator);count++;}top=valueAt(numerator);bottom=valueAt(denominator);steps.push(`Factor out (x − ${at}) from numerator and denominator ${count} time(s).`);}if(Math.abs(bottom)>1e-12){const answer=formatMathNumber(top/bottom);return result('calculus',answer,[...steps,`Limit = ${formatMathNumber(top)} / ${formatMathNumber(bottom)} = ${answer}`]);}}catch{}}

  const conic=q.match(/x\s*\^?\s*2\s*\/\s*(\d+(?:\.\d+)?)\s*([+-])\s*y\s*\^?\s*2\s*\/\s*(\d+(?:\.\d+)?)\s*=\s*1/);
  if(conic&&/eccentricity|focus|foci/.test(q)){const first=Number(conic[1]),second=Number(conic[3]),ellipse=conic[2]==='+',a2=ellipse?Math.max(first,second):first,b2=ellipse?Math.min(first,second):second,eccentricity=Math.sqrt(ellipse?1-b2/a2:1+b2/a2);return result('conic-sections',formatMathNumber(eccentricity),[ellipse?'For an ellipse: e² = 1 − b²/a².':'For this horizontal hyperbola: e² = 1 + b²/a².',`e = ${formatMathNumber(eccentricity)}`]);}

  const binomial=q.match(/(\d+)(?:st|nd|rd|th)\s+term.*?\(\s*x\s*([+-])\s*(\d+(?:\.\d+)?)\s*\)\s*\^\s*(\d+)/);
  if(binomial){const k=Number(binomial[1]),constant=Number(binomial[3]),n=Number(binomial[4]);if(k>0&&k<=n+1&&n<=170){let coefficient=1;for(let i=0;i<k-1;i++)coefficient*=((n-i)/(i+1));coefficient*=constant**(k-1)*(binomial[2]==='-'&&((k-1)%2)?-1:1);const power=n-k+1,term=`${formatMathNumber(coefficient)}${power?`x${power===1?'':`^${power}`}`:''}`;return result('binomial-theorem',term,[`General term: Tᵣ = ⁿCᵣ₋₁ · xⁿ⁻ʳ⁺¹ · (${binomial[2]}${constant})ʳ⁻¹`,`Here r = ${k}, n = ${n}.`,`T${k} = ${term}`]);}}

  const functionValue=source.match(/(?:f|y)\s*\(\s*x\s*\)\s*=\s*(.+?)\s+(?:at\s+x\s*=|when\s+x\s*=)\s*(-?\d+(?:\.\d+)?)/i);
  if(functionValue){try{const coefficients=parseGeneralPolynomial(functionValue[1]),x=Number(functionValue[2]),value=coefficients.reduce((sum,coefficient,degree)=>sum+coefficient*x**degree,0);return result('functions',formatMathNumber(value),[`f(x) = ${formatGeneralPolynomial(coefficients)}`,`Substitute x = ${x}.`,`f(${x}) = ${formatMathNumber(value)}`]);}catch{}}

  if(/\bprobability\b|प्रायिकता/.test(q)) {
    const ratio=q.match(/(?:favourable|favorable|अनुकूल)\D{0,20}(\d+)\D{0,30}(?:total|possible|कुल)\D{0,20}(\d+)/);
    if(ratio){const f=Number(ratio[1]),total=Number(ratio[2]);if(total>0&&f>=0&&f<=total){const g=(a,b)=>b?g(b,a%b):a,div=g(f,total);return result('probability',`${f/div}/${total/div}`,[`P(E) = favourable outcomes / total outcomes`,`P(E) = ${f}/${total} = ${f/div}/${total/div}`]);}}
  }

  const equations=source.replace(/^\s*(?:solve|हल करो|हल करें)\s*:?[\s]*/i,'').split(/\s+(?:and|&)\s+|;\s*/i).map(e=>e.trim()).filter(e=>e.includes('='));
  if(equations.length===2 && equations.every(e=>/[xy]/i.test(e))) {
    function linearForm(text) {
      const sides=text.split('='); if(sides.length!==2) throw new Error('invalid');
      function parse(side) {
        const normalized=side.toLowerCase().replaceAll(' ','').replaceAll('−','-');
        const terms=normalized.match(/[+-]?[^+-]+/g); if(!terms) throw new Error('invalid');
        const out={x:0,y:0,c:0};
        for(const term of terms) {
          const match=term.match(/^([+-]?)(\d+(?:\.\d*)?|\.\d+)?([xy])?$/); if(!match||(!match[2]&&!match[3])) throw new Error('invalid');
          const coefficient=(match[1]==='-'?-1:1)*(match[2]?Number(match[2]):1);
          if(match[3]) out[match[3]]+=coefficient; else out.c+=coefficient;
        }
        return out;
      }
      const a=parse(sides[0]),b=parse(sides[1]); return [a.x-b.x,a.y-b.y,b.c-a.c];
    }
    try {
      const [a,b,c]=linearForm(equations[0]),[d,e,f]=linearForm(equations[1]),det=a*e-b*d;
      if(Math.abs(det)>1e-12) {
        const x=(c*e-b*f)/det,y=(a*f-c*d)/det;
        return result('simultaneous-equations',`x = ${formatMathNumber(x)}, y = ${formatMathNumber(y)}`,[`Standard form: ${a}x + ${b}y = ${c}; ${d}x + ${e}y = ${f}`,`Solve the pair by elimination: x = ${formatMathNumber(x)}, y = ${formatMathNumber(y)}`,`Substitute both values back into the original equations to verify.`]);
      }
    } catch { /* Let the regular equation parser provide the supported-format message. */ }
  }

  return null;
}
function solveMathQuestion(source) {
  const advanced = solveTextQuestion(source);
  if (advanced) return advanced;
  const clean = source.trim().replace(/^(solve|simplify|calculate|find)\s*:?\s*/i, '').replace(/^(हल करो|हल करें|गणना करो)\s*:?\s*/i, '');
  const equals = clean.split('=');
  if (equals.length === 1) {
    const steps=[];
    const answer = calculateExpression(clean, steps);
    return {kind:'arithmetic', answer, lines:[`${translations[language].solverArithmetic}: ${clean}`, ...steps, `${translations[language].solverAnswer}: ${answer}`]};
  }
  if (equals.length !== 2 || !equals[0].trim() || !equals[1].trim()) throw new Error('invalid');
  const left=solvePolynomialSide(equals[0]), right=solvePolynomialSide(equals[1]);
  const c=[left.c[0]-right.c[0],left.c[1]-right.c[1],left.c[2]-right.c[2]];
  const lines=[`${clean}`, `${translations[language].solverRearrange} ${formatPolynomial(polyFromCoefficients(c))} = 0`];
  if (Math.abs(c[2])<1e-12) {
    if (Math.abs(c[1])<1e-12) {
      const answer=Math.abs(c[0])<1e-12?translations[language].solverAllNumbers:translations[language].solverNoSolution;
      lines.push(answer); return {kind:'equation',answer,lines};
    }
    const answer=formatMathNumber(-c[0]/c[1]);
    lines.push(`${translations[language].solverDivide} ${formatMathNumber(c[1])}: x = ${answer}`);
    lines.push(`${translations[language].solverAnswer}: x = ${answer}`);
    return {kind:'equation',answer,lines};
  }
  const [constantTerm,linearTerm,quadraticTerm]=c;
  const discriminant=linearTerm*linearTerm-4*quadraticTerm*constantTerm;
  lines.push(`${translations[language].solverDiscriminant}: D = b² − 4ac = ${formatMathNumber(discriminant)}`);
  if (discriminant < -1e-12) {
    const real=formatMathNumber(-linearTerm/(2*quadraticTerm));
    const imaginary=formatMathNumber(Math.sqrt(-discriminant)/(2*Math.abs(quadraticTerm)));
    const answer=`x = ${real} ± ${imaginary}i`;
    lines.push(language==='hi'?`सम्मिश्र मूल: x = (−b ± i√|D|) / 2a`:`Complex roots: x = (−b ± i√|D|) / 2a`);
    lines.push(`${translations[language].solverAnswer}: ${answer}`);
    return {kind:'equation',answer,lines};
  }
  const root=Math.sqrt(Math.max(0,discriminant));
  const first=formatMathNumber((-linearTerm+root)/(2*quadraticTerm));
  const second=formatMathNumber((-linearTerm-root)/(2*quadraticTerm));
  const roots=Math.abs(discriminant)<1e-12?`x = ${first}`:`x₁ = ${first}, x₂ = ${second}`;
  lines.push(`${translations[language].solverQuadraticFormula}: x = (−b ± √D) / 2a`);
  lines.push(`${translations[language].solverAnswer}: ${roots}`);
  return {kind:'equation',answer:roots,lines};
}
function escapeHtml(value) {
  return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}
function fileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('image-read'));
    reader.readAsDataURL(file);
  });
}
async function requestSolution(typed, file) {
  const endpoint = window.MATH_SAATHI_API_URL;
  if (!endpoint) throw new Error('not-configured');
  const imageDataUrl = file ? await fileAsDataUrl(file) : undefined;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      question: typed,
      imageDataUrl,
      language,
      grade: classSelect.value,
      board: boardSelect.value,
      syllabus: syllabusSelect.value
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || 'request-failed');
  if (typeof payload.answer !== 'string' || !payload.answer.trim()) throw new Error('empty-answer');
  return payload.answer.trim();
}
function showSolution(answer) {
  solution.innerHTML = `<div class="solver-result"><div class="solver-question">${escapeHtml(question.value.trim() || translations[language].imageSelected)}</div><div class="solution-answer">${escapeHtml(answer).replaceAll('\n','<br>')}</div></div>`;
}
solveButton.addEventListener('click', async () => {
  const t = translations[language];
  const typed = question.value.trim();
  const file = fileInput.files[0];
  if (!typed && !file) { question.focus(); return; }
  const label = solveButton.querySelector('[data-i18n="solve"]');
  const originalLabel = label.textContent;
  const setBusy = (busy) => {
    solveButton.disabled = busy;
    label.textContent = busy ? t.solveLoading : originalLabel;
    solveButton.setAttribute('aria-busy', String(busy));
  };
  if (file || !typed) {
    setBusy(true);
    solution.innerHTML = `<p class="empty-title">${escapeHtml(t.solveLoading)}</p>`;
    try {
      showSolution(await requestSolution(typed, file));
    } catch (error) {
      const message = error.message === 'not-configured' ? t.solverUnavailable : error.message === 'image-read' ? t.imageUnavailable : t.solveError;
      solution.innerHTML = `<p class="empty-title">${escapeHtml(message)}</p>`;
    } finally { setBusy(false); }
    return;
  }
  try {
    const result=solveMathQuestion(typed);
    solution.innerHTML=`<div class="solver-result"><p class="solver-question">${escapeHtml(typed)}</p><ol>${result.lines.slice(1,-1).map(line=>`<li>${escapeHtml(line)}</li>`).join('')}</ol><p class="solver-answer"><strong>${escapeHtml(result.lines.at(-1))}</strong></p></div>`;
  } catch (error) {
    if (error.message === 'division') {
      solution.innerHTML=`<p class="empty-title">${escapeHtml(t.calcDivisionError)}</p>`;
      return;
    }
    setBusy(true);
    solution.innerHTML = `<p class="empty-title">${escapeHtml(t.solveLoading)}</p>`;
    try { showSolution(await requestSolution(typed)); }
    catch (solveError) {
      const message = solveError.message === 'not-configured' ? t.solverUnavailable : t.solveError;
      solution.innerHTML=`<p class="empty-title">${escapeHtml(message)}</p><p class="empty-copy">${escapeHtml(t.solverUnsupported)}</p>`;
    } finally { setBusy(false); }
  }
});

initializeCourseControls();
setLanguage(language);


