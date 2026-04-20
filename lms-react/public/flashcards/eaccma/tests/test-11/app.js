// State
let userAnswers = new Array(QUESTIONS.length).fill(null);
let testStarted = false;
let testSubmitted = false;
let timerInterval = null;
let timeRemaining = 60 * 60;

// Elements
const startScreen = document.getElementById('start-screen');
const questionsContainer = document.getElementById('questions-container');
const submitContainer = document.getElementById('submit-container');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const timerDisplay = document.getElementById('timer');

function init() {
  initTheme();
  renderQuestions();
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  if (isDark) {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitTest(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  if (timeRemaining <= 300) {
    timerDisplay.classList.remove('bg-indigo-600');
    timerDisplay.classList.add('bg-red-600', 'animate-pulse');
  }
}

function renderQuestions() {
  questionsContainer.innerHTML = '';
  
  QUESTIONS.forEach((q, index) => {
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 sm:p-6';
    questionCard.id = `question-${index}`;
    
    const questionHeader = document.createElement('div');
    questionHeader.className = 'flex items-start gap-3 mb-4';
    questionHeader.innerHTML = `
      <span class="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-semibold text-sm">
        ${index + 1}
      </span>
      <p class="flex-1 text-slate-800 dark:text-slate-200 font-medium">${q.question}</p>
    `;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'ml-11 space-y-2';
    
    q.options.forEach((option, optIndex) => {
      const optionBtn = document.createElement('button');
      optionBtn.className = 'option-btn w-full text-left px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700';
      optionBtn.innerHTML = `
        <span class="font-medium text-slate-700 dark:text-slate-300">${String.fromCharCode(65 + optIndex)}.</span>
        <span class="ml-2 text-slate-600 dark:text-slate-400">${option}</span>
      `;
      
      optionBtn.addEventListener('click', () => selectAnswer(index, optIndex));
      optionsContainer.appendChild(optionBtn);
    });
    
    questionCard.appendChild(questionHeader);
    questionCard.appendChild(optionsContainer);
    questionsContainer.appendChild(questionCard);
  });
}

function selectAnswer(questionIndex, optionIndex) {
  if (testSubmitted) return;
  
  userAnswers[questionIndex] = optionIndex;
  
  const questionCard = document.getElementById(`question-${questionIndex}`);
  const options = questionCard.querySelectorAll('.option-btn');
  
  options.forEach((btn, idx) => {
    btn.classList.remove('selected');
    if (idx === optionIndex) {
      btn.classList.add('selected');
    }
  });
}

function startTest() {
  testStarted = true;
  startScreen.classList.add('hidden');
  questionsContainer.classList.remove('hidden');
  submitContainer.classList.remove('hidden');
  startTimer();
}

function submitTest(autoSubmit = false) {
  if (testSubmitted) return;
  
  if (!autoSubmit) {
    const unanswered = userAnswers.filter(a => a === null).length;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    let message = 'Are you sure you want to submit your test?\n\n';
    message += `Time remaining: ${timeStr}\n`;
    message += `Unanswered questions: ${unanswered}`;
    
    const confirm = window.confirm(message);
    if (!confirm) return;
  }
  
  testSubmitted = true;
  clearInterval(timerInterval);
  
  if (autoSubmit) {
    alert('Time is up! Your test has been automatically submitted.');
  }
  
  showResults();
}

function showResults() {
  let correct = 0;
  let incorrect = 0;
  
  QUESTIONS.forEach((q, index) => {
    const questionCard = document.getElementById(`question-${index}`);
    const options = questionCard.querySelectorAll('.option-btn');
    
    options.forEach((btn, optIndex) => {
      btn.disabled = true;
      
      if (optIndex === q.correct) {
        btn.classList.add('correct');
      }
      
      if (userAnswers[index] === optIndex && optIndex !== q.correct) {
        btn.classList.add('incorrect');
      }
    });
    
    if (userAnswers[index] === q.correct) {
      correct++;
    } else if (userAnswers[index] !== null) {
      incorrect++;
    }
  });
  
  const scorePercent = Math.round((correct / QUESTIONS.length) * 100);
  
  document.getElementById('correct-count').textContent = correct;
  document.getElementById('incorrect-count').textContent = incorrect;
  document.getElementById('score-percent').textContent = `${scorePercent}%`;
  
  submitContainer.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  resultsScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function reviewAnswers() {
  resultsScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
  userAnswers = new Array(QUESTIONS.length).fill(null);
  testStarted = false;
  testSubmitted = false;
  timeRemaining = 60 * 60;
  clearInterval(timerInterval);
  
  timerDisplay.textContent = '60:00';
  timerDisplay.classList.remove('bg-red-600', 'animate-pulse');
  timerDisplay.classList.add('bg-indigo-600');
  
  resultsScreen.classList.add('hidden');
  questionsContainer.classList.add('hidden');
  submitContainer.classList.add('hidden');
  startScreen.classList.remove('hidden');
  
  renderQuestions();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

startBtn.addEventListener('click', startTest);
submitBtn.addEventListener('click', submitTest);
reviewBtn.addEventListener('click', reviewAnswers);
restartBtn.addEventListener('click', restartTest);
themeToggle.addEventListener('click', toggleTheme);

init();
