/* ============================================================
   INTELLECTA — script.js
   Features: Multi-page nav, topic selector, difficulty,
             timed quiz, score, results, contact form
   Questions: 20 per level (4 per topic × 5 topics)
============================================================ */

/* ============================================================
   SECTION 1: QUIZ DATA
   Each level has 20 questions — 4 per topic.
   topic key must match data-topic on the HTML buttons.
============================================================ */
const quizData = {

  /* ==================== BEGINNER ==================== */
  beginner: [
    // --- Limits & Continuity (4) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"What is lim(x→2) of (x² - 4) / (x - 2)?",
      options:["2","4","0","Undefined"], answer:1 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) sin(x) / x = ?",
      options:["0","∞","1","-1"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→3) (x² - 9) / (x - 3) = ?",
      options:["0","3","6","9"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"A function f(x) is continuous at x = a if lim(x→a) f(x) equals:",
      options:["0","f(a)","f(0)","1"], answer:1 },

    // --- Differentiation (4) ---
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"What is the derivative of x³?",
      options:["x²","3x²","3x³","x⁴/4"], answer:1 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"If f(x) = 5, then f′(x) = ?",
      options:["5x","1","5","0"], answer:3 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [x⁵] = ?",
      options:["4x⁴","5x⁴","5x⁵","x⁶/6"], answer:1 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"The derivative of sin(x) is:",
      options:["-cos(x)","cos(x)","-sin(x)","tan(x)"], answer:1 },

    // --- Integration (4) ---
    { topic:"integration", label:"INTEGRATION",
      question:"∫ x dx = ?",
      options:["x + C","x² + C","x²/2 + C","2x + C"], answer:2 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ cos(x) dx = ?",
      options:["-sin(x)+C","sin(x)+C","cos(x)+C","-cos(x)+C"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ 1 dx = ?",
      options:["0","x","x + C","1/x + C"], answer:2 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ 2x dx = ?",
      options:["x + C","2 + C","x² + C","2x² + C"], answer:2 },

    // --- Matrices (4) ---
    { topic:"matrices", label:"MATRICES",
      question:"A matrix with 3 rows and 4 columns has order:",
      options:["4×3","3×4","12×1","7×1"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"The transpose of a 2×3 matrix has order:",
      options:["2×3","3×3","3×2","2×2"], answer:2 },
    { topic:"matrices", label:"MATRICES",
      question:"A square matrix has equal number of:",
      options:["Elements and rows","Rows and columns","Columns and diagonals","Rows and zeros"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"An identity matrix has all diagonal elements equal to:",
      options:["0","−1","1","∞"], answer:2 },

    // --- Complex Numbers (4) ---
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"What is i² where i = √−1?",
      options:["1","−1","i","0"], answer:1 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The modulus of 3 + 4i is:",
      options:["3","4","5","7"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The real part of the complex number 7 − 3i is:",
      options:["−3","3","7","−7"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The imaginary part of 5 + 2i is:",
      options:["5","2i","2","5i"], answer:2 },
    // --- Extra Questions (added round 2) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→1) (x³ − 1) / (x − 1) = ?",
      options:["1","2","3","0"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [cos(x)] = ?",
      options:["sin(x)","-sin(x)","cos(x)","-cos(x)"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ x² dx = ?",
      options:["2x + C","x³ + C","x³/3 + C","x²/2 + C"], answer:2 },
    { topic:"matrices", label:"MATRICES",
      question:"A matrix with all elements zero is called a:",
      options:["Identity matrix","Zero matrix","Scalar matrix","Unit matrix"], answer:1 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"i⁴ = ?",
      options:["-1","i","0","1"], answer:3 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [tan(x)] = ?",
      options:["sec(x)","sec²(x)","cosec²(x)","-sec²(x)"], answer:1 }
  ],

  /* ==================== INTERMEDIATE ==================== */
  intermediate: [
    // --- Limits & Continuity (4) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) (1 + x)^(1/x) = ?",
      options:["1","0","e","∞"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→∞) (2x² + 3) / (x² − 1) = ?",
      options:["0","3","1","2"], answer:3 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) (eˣ − 1) / x = ?",
      options:["0","e","1","∞"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→∞) (3x³ − x) / (2x³ + 5) = ?",
      options:["0","3/2","1/2","∞"], answer:1 },

    // --- Differentiation (4) ---
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [sin(x²)] using chain rule = ?",
      options:["cos(x²)","2x·cos(x²)","-2x·cos(x²)","sin(2x)"], answer:1 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"The derivative of ln(x) is:",
      options:["x","1","1/x","eˣ"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [eˣ] = ?",
      options:["xeˣ","eˣ⁻¹","eˣ","1/eˣ"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"If f(x) = x·sin(x), then f′(x) = ?",
      options:["sin(x)","cos(x)","sin(x) + x·cos(x)","x·cos(x)"], answer:2 },

    // --- Integration (4) ---
    { topic:"integration", label:"INTEGRATION",
      question:"∫ eˣ dx = ?",
      options:["eˣ+C","xeˣ+C","e^(x−1)+C","1/eˣ+C"], answer:0 },
    { topic:"integration", label:"INTEGRATION",
      question:"Evaluate ∫₀¹ x² dx:",
      options:["1/2","1/3","1","2/3"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ sin(x) dx = ?",
      options:["cos(x)+C","-cos(x)+C","sin(x)+C","-sin(x)+C"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ 1/x dx = ?",
      options:["x+C","ln|x|+C","1/x²+C","eˣ+C"], answer:1 },

    // --- Matrices (4) ---
    { topic:"matrices", label:"MATRICES",
      question:"A symmetric matrix satisfies:",
      options:["A = −Aᵀ","A = Aᵀ","det(A) = 0","A·Aᵀ = I"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"det([[1,2],[3,4]]) = ?",
      options:["2","−2","4","10"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"The trace of a matrix is the sum of its:",
      options:["All elements","Diagonal elements","Off-diagonal elements","Row sums"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"A matrix multiplied by its inverse gives:",
      options:["Zero matrix","The same matrix","Identity matrix","Null matrix"], answer:2 },

    // --- Complex Numbers (4) ---
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The argument of the complex number i is:",
      options:["0","π/4","π/2","π"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The conjugate of (3 − 2i) is:",
      options:["3+2i","−3+2i","3−2i","−3−2i"], answer:0 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"(2 + 3i) + (1 − i) = ?",
      options:["3 + 2i","3 + 4i","1 + 4i","2 + 3i"], answer:0 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The modulus of 1 + i is:",
      options:["1","√2","2","√3"], answer:1 },
    // --- Extra Questions (added round 2) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) (sin 3x) / (3x) = ?",
      options:["3","0","1/3","1"], answer:3 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [x² · cos(x)] using product rule = ?",
      options:["2x·cos(x) − x²·sin(x)","2x·cos(x) + x²·sin(x)","-x²·sin(x)","2x·sin(x)"], answer:0 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ tan(x) dx = ?",
      options:["sec²(x)+C","ln|cos(x)|+C","-ln|cos(x)|+C","ln|sin(x)|+C"], answer:2 },
    { topic:"matrices", label:"MATRICES",
      question:"If A is a 2×2 matrix and det(A) = 0, the matrix is called:",
      options:["Identity","Orthogonal","Singular","Diagonal"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The product of a complex number and its conjugate gives:",
      options:["A pure imaginary number","Zero","The modulus squared","The argument"], answer:2 }
  ],

  /* ==================== ADVANCED ==================== */
  advanced: [
    // --- Limits & Continuity (4) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) [tan(x) − sin(x)] / x³ = ?",
      options:["0","1/3","1/2","1"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(n→∞) (1 + 1/n)ⁿ equals:",
      options:["π","φ (golden ratio)","e (Euler's number)","√2"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) (1 − cos x) / x² = ?",
      options:["0","1","1/2","2"], answer:2 },
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"If f(x) = |x|/x for x ≠ 0, then lim(x→0) f(x):",
      options:["1","−1","0","Does not exist"], answer:3 },

    // --- Differentiation (4) ---
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"Implicit differentiation of x² + y² = r² gives dy/dx = ?",
      options:["−x/y","x/y","y/x","−y/x"], answer:0 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"The nth derivative of e^(ax) is:",
      options:["e^(ax)","a·e^(ax)","aⁿ·e^(ax)","n·e^(ax)"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"d/dx [xˣ] = ?",
      options:["x·xˣ⁻¹","xˣ·ln(x)","xˣ(1 + ln x)","xˣ/ln x"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"Rolle's theorem requires f(a) = f(b) and f is continuous on [a,b]. What else?",
      options:["f is constant","f is differentiable on (a,b)","f has no zeros","f is increasing"], answer:1 },

    // --- Integration (4) ---
    { topic:"integration", label:"INTEGRATION",
      question:"∫ 1/(1+x²) dx = ?",
      options:["ln(1+x²)+C","tan⁻¹(x)+C","sin⁻¹(x)+C","sec⁻¹(x)+C"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"Using integration by parts, ∫ x·eˣ dx = ?",
      options:["eˣ+C","xeˣ+C","(x−1)eˣ+C","x²eˣ/2+C"], answer:2 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫₀^π sin(x) dx = ?",
      options:["0","1","2","π"], answer:2 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫ sec²(x) dx = ?",
      options:["sin(x)+C","tan(x)+C","sec(x)+C","cos(x)+C"], answer:1 },

    // --- Matrices (4) ---
    { topic:"matrices", label:"MATRICES",
      question:"If λ is an eigenvalue of A, then det(A − λI) = ?",
      options:["1","−1","λ","0"], answer:3 },
    { topic:"matrices", label:"MATRICES",
      question:"The rank of a 3×3 identity matrix is:",
      options:["0","1","2","3"], answer:3 },
    { topic:"matrices", label:"MATRICES",
      question:"Cayley–Hamilton theorem states a matrix satisfies:",
      options:["Its transpose equation","Its characteristic equation","The identity equation","Its inverse equation"], answer:1 },
    { topic:"matrices", label:"MATRICES",
      question:"For a skew-symmetric matrix A, Aᵀ = ?",
      options:["A","−A","A⁻¹","I"], answer:1 },

    // --- Complex Numbers (4) ---
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"By Euler's formula, e^(iπ) + 1 = ?",
      options:["2","−2","0","i"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The product (1+i)(1−i) = ?",
      options:["2i","0","2","1+2i"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"The nth roots of unity sum to:",
      options:["n","1","0","n−1"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"In polar form, z = r(cosθ + i·sinθ). Then z² = ?",
      options:["r²(cos2θ + i·sin2θ)","r(cos2θ + i·sin2θ)","2r(cosθ + i·sinθ)","r²(cosθ + i·sinθ)"], answer:0 },
    // --- Extra Questions (added round 2) ---
    { topic:"limits", label:"LIMITS & CONTINUITY",
      question:"lim(x→0) x · sin(1/x) = ?",
      options:["1","∞","0","Does not exist"], answer:2 },
    { topic:"differentiation", label:"DIFFERENTIATION",
      question:"The second derivative of x⁴ is:",
      options:["4x³","12x²","24x","12x³"], answer:1 },
    { topic:"integration", label:"INTEGRATION",
      question:"∫₀^(π/2) cos(x) dx = ?",
      options:["0","π/2","−1","1"], answer:3 },
    { topic:"matrices", label:"MATRICES",
      question:"For an orthogonal matrix A, which relation holds?",
      options:["A² = I","Aᵀ = A","A·Aᵀ = I","det(A) = 0"], answer:2 },
    { topic:"complex", label:"COMPLEX NUMBERS",
      question:"De Moivre's theorem states (cosθ + i·sinθ)ⁿ = ?",
      options:["cos(nθ) + i·sin(nθ)","n·cosθ + n·i·sinθ","cos(θ/n) + i·sin(θ/n)","cosⁿ(θ) + i·sinⁿ(θ)"], answer:0 }
  ]
};


/* ============================================================
   SECTION 2: STATE
============================================================ */
let currentLevel     = null;
let selectedTopics   = ["limits","differentiation","integration","matrices","complex"];
let currentQuestions = [];
let currentIndex     = 0;
let score            = 0;
let selectedOption   = null;
let timerInterval    = null;
let timeLeft         = 30;
let answerRevealed   = false;
const TIMER_DURATION = 30;


/* ============================================================
   SECTION 3: DOM REFERENCES
============================================================ */
const pageHome    = document.getElementById("page-home");
const pageAbout   = document.getElementById("page-about");
const pageContact = document.getElementById("page-contact");

const screenWelcome = document.getElementById("screen-welcome");
const screenQuiz    = document.getElementById("screen-quiz");
const screenResult  = document.getElementById("screen-result");

const levelButtons    = document.querySelectorAll(".level-btn");
const topicButtons    = document.querySelectorAll(".topic-btn");
const topicWarning    = document.getElementById("topic-warning");
const btnStart        = document.getElementById("btn-start");

const topicTag         = document.getElementById("topic-tag");
const timerDisplay     = document.getElementById("timer-display");
const timerBox         = document.querySelector(".timer-box");
const progressFill     = document.getElementById("progress-fill");
const qCounter         = document.getElementById("q-counter");
const scoreLive        = document.getElementById("score-live");
const questionText     = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const skipWarning      = document.getElementById("skip-warning");
const btnNext          = document.getElementById("btn-next");

const resultEmoji   = document.getElementById("result-emoji");
const resultTitle   = document.getElementById("result-title");
const resultScore   = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const scoreBarFill  = document.getElementById("score-bar-fill");
const statCorrect   = document.getElementById("stat-correct");
const statWrong     = document.getElementById("stat-wrong");
const statLevel     = document.getElementById("stat-level");
const btnRestart    = document.getElementById("btn-restart");
const btnChangeLevel= document.getElementById("btn-change-level");

const navBtns       = document.querySelectorAll(".nav-btn");
const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");
const navHamburger  = document.getElementById("nav-hamburger");
const mobileMenu    = document.getElementById("mobile-menu");
const navLogo       = document.getElementById("nav-logo");

const btnSendMsg  = document.getElementById("btn-send-msg");
const formSuccess = document.getElementById("form-success");


/* ============================================================
   SECTION 4: PAGE NAVIGATION
============================================================ */
const pages = { home: pageHome, about: pageAbout, contact: pageContact };

function navigateTo(pageName) {
  Object.values(pages).forEach(p => p.classList.remove("active"));
  if (pages[pageName]) pages[pageName].classList.add("active");
  navBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.page === pageName));
  mobileMenu.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navBtns.forEach(btn => btn.addEventListener("click", () => navigateTo(btn.dataset.page)));
mobileNavBtns.forEach(btn => btn.addEventListener("click", () => navigateTo(btn.dataset.page)));
navLogo.addEventListener("click", () => navigateTo("home"));
navHamburger.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));


/* ============================================================
   SECTION 5: LEVEL SELECTION
============================================================ */
levelButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    levelButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentLevel = btn.dataset.level;
  });
});


/* ============================================================
   SECTION 6: TOPIC SELECTION
============================================================ */
topicButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const topic = btn.dataset.topic;

    if (btn.classList.contains("active")) {
      const activeBtns = document.querySelectorAll(".topic-btn.active");
      if (activeBtns.length === 1) {
        topicWarning.textContent = "⚠ At least one topic must be selected!";
        topicWarning.classList.remove("hidden");
        setTimeout(() => topicWarning.classList.add("hidden"), 2000);
        return;
      }
      btn.classList.remove("active");
      selectedTopics = selectedTopics.filter(t => t !== topic);
    } else {
      btn.classList.add("active");
      selectedTopics.push(topic);
    }
  });
});


/* ============================================================
   SECTION 7: START QUIZ
============================================================ */
btnStart.addEventListener("click", function () {

  if (!currentLevel) {
    topicWarning.textContent = "⚠ Please select a difficulty level first!";
    topicWarning.classList.remove("hidden");
    setTimeout(() => topicWarning.classList.add("hidden"), 2500);
    return;
  }

  if (selectedTopics.length === 0) {
    topicWarning.textContent = "⚠ Please select at least one topic!";
    topicWarning.classList.remove("hidden");
    return;
  }

  topicWarning.classList.add("hidden");

  // Filter by chosen topics, then shuffle all matching questions
  const pool = quizData[currentLevel].filter(q => selectedTopics.includes(q.topic));
  currentQuestions = shuffleArray(pool);

  currentIndex = 0; score = 0; selectedOption = null; answerRevealed = false;

  showScreen(screenQuiz);
  loadQuestion();
});


/* ============================================================
   SECTION 8: SCREEN SWITCHER
============================================================ */
function showScreen(screenEl) {
  [screenWelcome, screenQuiz, screenResult].forEach(s => s.classList.remove("active"));
  screenEl.classList.add("active");
}


/* ============================================================
   SECTION 9: LOAD QUESTION
============================================================ */
function loadQuestion() {
  const q = currentQuestions[currentIndex];

  selectedOption = null;
  answerRevealed = false;
  skipWarning.classList.add("hidden");

  topicTag.textContent  = q.label;
  qCounter.textContent  = `Q ${currentIndex + 1} / ${currentQuestions.length}`;
  scoreLive.textContent = `Score: ${score}`;

  progressFill.style.width = ((currentIndex / currentQuestions.length) * 100) + "%";
  questionText.textContent = q.question;

  optionsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach(function (optText, idx) {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span><span>${optText}</span>`;
    btn.addEventListener("click", () => handleOptionClick(idx));
    optionsContainer.appendChild(btn);
  });

  const isLast = (currentIndex === currentQuestions.length - 1);
  btnNext.textContent = isLast ? "SUBMIT QUIZ →" : "NEXT →";

  startTimer();
}


/* ============================================================
   SECTION 10: OPTION CLICK
============================================================ */
function handleOptionClick(optionIndex) {
  if (answerRevealed) return;
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  document.querySelectorAll(".option-btn")[optionIndex].classList.add("selected");
  selectedOption = optionIndex;
  skipWarning.classList.add("hidden");
}


/* ============================================================
   SECTION 11: NEXT BUTTON
============================================================ */
btnNext.addEventListener("click", function () {
  if (selectedOption === null && !answerRevealed) {
    skipWarning.classList.remove("hidden");
    return;
  }
  if (answerRevealed) { advanceQuestion(); return; }
  revealAnswer();
});


/* ============================================================
   SECTION 12: REVEAL ANSWER
============================================================ */
function revealAnswer() {
  answerRevealed = true;
  stopTimer();

  const q = currentQuestions[currentIndex];
  const opts = document.querySelectorAll(".option-btn");

  opts[q.answer].classList.add("correct");
  opts[q.answer].classList.remove("selected");

  if (selectedOption !== null && selectedOption !== q.answer) {
    opts[selectedOption].classList.add("wrong");
    opts[selectedOption].classList.remove("selected");
  } else if (selectedOption === q.answer) {
    score++;
    scoreLive.textContent = `Score: ${score}`;
  }

  opts.forEach(b => b.disabled = true);

  const isLast = (currentIndex === currentQuestions.length - 1);
  btnNext.textContent = isLast ? "SEE RESULTS →" : "CONTINUE →";
}


/* ============================================================
   SECTION 13: ADVANCE QUESTION
============================================================ */
function advanceQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}


/* ============================================================
   SECTION 14: TIMER
============================================================ */
function startTimer() {
  timeLeft = TIMER_DURATION;
  timerDisplay.textContent = timeLeft;
  timerBox.classList.remove("urgent");
  stopTimer();

  timerInterval = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 10) timerBox.classList.add("urgent");
    if (timeLeft <= 0) {
      stopTimer();
      if (!answerRevealed) { selectedOption = null; revealAnswer(); }
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) { clearInterval(timerInterval); timerInterval = null; }
}


/* ============================================================
   SECTION 15: SHOW RESULTS
============================================================ */
function showResults() {
  stopTimer();
  const total   = currentQuestions.length;
  const wrong   = total - score;
  const percent = Math.round((score / total) * 100);

  let emoji, title, message;
  if      (percent >= 90) { emoji="🏆"; title="OUTSTANDING!";  message="You've absolutely mastered these topics!"; }
  else if (percent >= 70) { emoji="🎯"; title="EXCELLENT!";     message="Great command of the concepts. Keep it up!"; }
  else if (percent >= 50) { emoji="📐"; title="GOOD EFFORT";    message="Solid foundation — revisit the topics you missed."; }
  else if (percent >= 30) { emoji="📖"; title="KEEP STUDYING";  message="Practice more — maths rewards consistent effort!"; }
  else                    { emoji="💡"; title="JUST STARTING";  message="Don't give up — every expert was once a beginner."; }

  resultEmoji.textContent   = emoji;
  resultTitle.textContent   = title;
  resultScore.innerHTML     = `You scored <strong>${score} / ${total}</strong>`;
  resultMessage.textContent = message;
  statCorrect.textContent   = score;
  statWrong.textContent     = wrong;
  statLevel.textContent     = currentLevel.slice(0, 3).toUpperCase();

  showScreen(screenResult);
  setTimeout(() => { scoreBarFill.style.width = percent + "%"; }, 100);
}


/* ============================================================
   SECTION 16: RESTART BUTTONS
============================================================ */
btnRestart.addEventListener("click", function () {
  const pool = quizData[currentLevel].filter(q => selectedTopics.includes(q.topic));
  currentQuestions = shuffleArray(pool);
  currentIndex = 0; score = 0; selectedOption = null; answerRevealed = false;

  scoreBarFill.style.transition = "none";
  scoreBarFill.style.width = "0%";
  setTimeout(() => { scoreBarFill.style.transition = ""; }, 100);

  showScreen(screenQuiz);
  loadQuestion();
});

btnChangeLevel.addEventListener("click", function () {
  stopTimer();
  currentLevel = null;
  levelButtons.forEach(b => b.classList.remove("active"));
  showScreen(screenWelcome);
});


/* ============================================================
   SECTION 17: CONTACT FORM
============================================================ */
btnSendMsg.addEventListener("click", function () {
  const name    = document.getElementById("contact-name").value.trim();
  const email   = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !message) {
    formSuccess.textContent = "⚠ Please fill in name, email, and message.";
    formSuccess.style.color = "var(--accent2)";
    formSuccess.classList.remove("hidden");
    return;
  }
  if (!email.includes("@")) {
    formSuccess.textContent = "⚠ Please enter a valid email address.";
    formSuccess.style.color = "var(--accent2)";
    formSuccess.classList.remove("hidden");
    return;
  }

  formSuccess.textContent = "✅ Message sent! We'll get back to you soon.";
  formSuccess.style.color = "var(--correct)";
  formSuccess.classList.remove("hidden");

  document.getElementById("contact-name").value    = "";
  document.getElementById("contact-email").value   = "";
  document.getElementById("contact-subject").value = "";
  document.getElementById("contact-message").value = "";

  setTimeout(() => formSuccess.classList.add("hidden"), 4000);
});


/* ============================================================
   SECTION 18: UTILITY — Fisher-Yates Shuffle
============================================================ */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
