// Test Application Logic
let currentQuestion = 0;
let score = 0;
let answers = [];
let timeRemaining = testInfo.timeLimit * 60;
let timerInterval;
let testStarted = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('test-title').textContent = testInfo.title;
  document.getElementById('total-questions').textContent = testInfo.totalQuestions;
  document.getElementById('time-limit').textContent = testInfo.timeLimit;
  
  // Start button
  document.getElementById('start-btn').addEventListener('click', startTest);
});

function startTest() {
  testStarted = true;
  document.getElementById('intro-screen').classList.add('hidden');
  document.getElementById('test-screen').classList.remove('hidden');
  
  // Initialize answers array
  answers = new Array(questions.length).fill(null);
  
  // Start timer
  startTimer();
  
  // Show first question
  showQuestion(0);
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      autoSubmitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById('timer').textContent = 
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Warning color when less than 5 minutes
  if (timeRemaining < 300) {
    document.getElementById('timer').classList.add('text-red-600', 'font-bold');
  }
}

function showQuestion(index) {
  currentQuestion = index;
  const question = questions[index];
  
  // Update progress
  document.getElementById('current-question').textContent = index + 1;
  document.getElementById('question-progress').textContent = testInfo.totalQuestions;
  
  // Update progress bar
  const progress = ((index + 1) / testInfo.totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
  
  // Show question
  document.getElementById('question-number').textContent = `Question ${index + 1}`;
  document.getElementById('question-text').textContent = question.question;
  document.getElementById('question-topic').textContent = `Topic: ${question.topic}`;
  
  // Show options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  Object.entries(question.options).forEach(([key, value]) => {
    const button = document.createElement('button');
    button.className = 'option-btn w-full text-left p-4 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors';
    button.innerHTML = `<span class="font-bold">${key}.</span> ${value}`;
    button.onclick = () => selectAnswer(key, index);
    
    // Highlight if already answered
    if (answers[index] === key) {
      button.classList.add('border-blue-500', 'bg-blue-50');
    }
    
    optionsContainer.appendChild(button);
  });
  
  // Update navigation buttons
  document.getElementById('prev-btn').disabled = index === 0;
  document.getElementById('next-btn').textContent = 
    index === questions.length - 1 ? 'Review Answers' : 'Next Question';
}

function selectAnswer(answer, questionIndex) {
  answers[questionIndex] = answer;
  
  // Update button styling
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.classList.remove('border-blue-500', 'bg-blue-50');
  });
  event.target.closest('.option-btn').classList.add('border-blue-500', 'bg-blue-50');
  
  // Auto-advance after short delay
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      nextQuestion();
    }
  }, 300);
}

function previousQuestion() {
  if (currentQuestion > 0) {
    showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    showReviewScreen();
  }
}

function showReviewScreen() {
  const unanswered = answers.filter(a => a === null).length;
  const answered = answers.length - unanswered;
  
  document.getElementById('answered-count').textContent = answered;
  document.getElementById('unanswered-count').textContent = unanswered;
  
  document.getElementById('test-screen').classList.add('hidden');
  document.getElementById('review-screen').classList.remove('hidden');
}

function backToTest() {
  document.getElementById('review-screen').classList.add('hidden');
  document.getElementById('test-screen').classList.remove('hidden');
}

function confirmSubmit() {
  const unanswered = answers.filter(a => a === null).length;
  const timeLeft = Math.floor(timeRemaining / 60);
  
  let message = `You have answered ${answers.length - unanswered} out of ${answers.length} questions.`;
  if (unanswered > 0) {
    message += `\n\n${unanswered} question(s) are unanswered.`;
  }
  message += `\n\nTime remaining: ${timeLeft} minute(s)`;
  message += `\n\nAre you sure you want to submit?`;
  
  if (confirm(message)) {
    submitTest();
  }
}

function autoSubmitTest() {
  alert('Time is up! Your test will be submitted automatically.');
  submitTest();
}

function submitTest() {
  clearInterval(timerInterval);
  
  // Calculate score
  score = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correct_answer) {
      score++;
    }
  });
  
  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= testInfo.passingScore;
  
  // Show results
  document.getElementById('review-screen').classList.add('hidden');
  document.getElementById('test-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  
  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = questions.length;
  document.getElementById('percentage').textContent = percentage;
  
  const statusEl = document.getElementById('pass-status');
  if (passed) {
    statusEl.textContent = '✓ PASSED';
    statusEl.className = 'text-2xl font-bold text-green-600';
  } else {
    statusEl.textContent = '✗ FAILED';
    statusEl.className = 'text-2xl font-bold text-red-600';
  }
  
  // Show detailed results
  showDetailedResults();
}

function showDetailedResults() {
  const container = document.getElementById('detailed-results');
  container.innerHTML = '';
  
  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    const isCorrect = userAnswer === question.correct_answer;
    
    const div = document.createElement('div');
    div.className = `p-4 rounded-lg border-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`;
    
    div.innerHTML = `
      <div class="flex items-start justify-between mb-2">
        <span class="font-bold">Question ${index + 1}</span>
        <span class="${isCorrect ? 'text-green-600' : 'text-red-600'} font-bold">
          ${isCorrect ? '✓ Correct' : '✗ Wrong'}
        </span>
      </div>
      <p class="mb-2">${question.question}</p>
      <p class="mb-1"><strong>Your answer:</strong> ${userAnswer ? userAnswer + '. ' + question.options[userAnswer] : 'Not answered'}</p>
      <p class="mb-1"><strong>Correct answer:</strong> ${question.correct_answer}. ${question.options[question.correct_answer]}</p>
      ${question.explanation ? `<p class="mt-2 text-sm text-gray-700"><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
    `;
    
    container.appendChild(div);
  });
}

function retakeTest() {
  location.reload();
}
