// State Management
let userProgress = {
  xp: 0,
  streak: 0,
  hearts: 5,
  maxHearts: 5,
  lastActivityDate: null,
  streakFreezes: 2,
  topics: {}
};

// Initialize topics progress
TOPICS.forEach(topic => {
  userProgress.topics[topic.id] = {
    completed: false,
    mastered: false,
    steps: Array(6).fill(false),
    stepScores: Array(6).fill(0),
    xp: 0,
    accuracy: 0
  };
});

// Lesson State
let currentLesson = {
  topicId: null,
  stepIndex: null,
  currentQuestion: 0,
  hearts: 5,
  correctAnswers: 0,
  totalQuestions: 0,
  startTime: null,
  answers: [],
  wrongQuestions: [], // Track questions to retry
  retryMode: false,
  questionsAttempted: [] // Track which questions have been seen
};

// Sound effects (using Web Audio API)
const sounds = {
  correct: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 523.25; // C5
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  },
  
  incorrect: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 200; // Lower tone
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
  },
  
  complete: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 659.25; // E5
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }
};

// Animation helpers
function showSuccessAnimation(element) {
  element.classList.add('success-animation');
  sounds.correct();
  createConfetti(5);
  setTimeout(() => element.classList.remove('success-animation'), 500);
}

function showErrorAnimation(element) {
  element.classList.add('error-animation');
  sounds.incorrect();
  setTimeout(() => element.classList.remove('error-animation'), 500);
}

function createConfetti(count) {
  const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `confetti-fall ${2 + Math.random()}s linear`;
    confetti.style.animationDelay = Math.random() * 0.3 + 's';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Elements
const pathContainer = document.getElementById('path-container');
const topicModal = document.getElementById('topic-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalProgressBar = document.getElementById('modal-progress-bar');
const modalProgressText = document.getElementById('modal-progress-text');
const stepsGrid = document.getElementById('steps-grid');
const closeModal = document.getElementById('close-modal');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const streakCount = document.getElementById('streak-count');
const xpCount = document.getElementById('xp-count');
const heartsCount = document.getElementById('hearts-count');
const lessonScreen = document.getElementById('lesson-screen');
const lessonContent = document.getElementById('lesson-content');
const lessonProgressBar = document.getElementById('lesson-progress-bar');
const lessonHearts = document.getElementById('lesson-hearts');
const exitLesson = document.getElementById('exit-lesson');
const resultsModal = document.getElementById('results-modal');
const resultsIcon = document.getElementById('results-icon');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');
const resultsXp = document.getElementById('results-xp');
const resultsAccuracy = document.getElementById('results-accuracy');
const continueBtn = document.getElementById('continue-btn');

// Initialize
function init() {
  loadProgress();
  initTheme();
  renderPath();
  updateHeader();
  checkStreak();
}

// Load progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem('customsLearningProgress');
  if (saved) {
    const loadedProgress = JSON.parse(saved);
    
    // Merge with default structure to ensure all properties exist
    userProgress = {
      ...userProgress,
      ...loadedProgress,
      topics: {}
    };
    
    // Ensure each topic has all required properties
    TOPICS.forEach(topic => {
      userProgress.topics[topic.id] = {
        completed: false,
        mastered: false,
        steps: Array(6).fill(false),
        stepScores: Array(6).fill(0),
        xp: 0,
        accuracy: 0,
        ...(loadedProgress.topics && loadedProgress.topics[topic.id] ? loadedProgress.topics[topic.id] : {})
      };
      
      // Ensure stepScores array exists and has correct length
      if (!userProgress.topics[topic.id].stepScores || userProgress.topics[topic.id].stepScores.length !== 6) {
        userProgress.topics[topic.id].stepScores = Array(6).fill(0);
      }
    });
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('customsLearningProgress', JSON.stringify(userProgress));
}

// Theme management
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

// Check and update streak
function checkStreak() {
  const today = new Date().toDateString();
  const lastActivity = userProgress.lastActivityDate;
  
  if (!lastActivity) {
    return;
  }
  
  const lastDate = new Date(lastActivity);
  const todayDate = new Date(today);
  const diffTime = todayDate - lastDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 1) {
    // Streak broken
    userProgress.streak = 0;
    saveProgress();
  }
}

// Update streak
function updateStreak() {
  const today = new Date().toDateString();
  const lastActivity = userProgress.lastActivityDate;
  
  if (lastActivity === today) {
    return; // Already counted today
  }
  
  if (!lastActivity) {
    userProgress.streak = 1;
  } else {
    const lastDate = new Date(lastActivity);
    const todayDate = new Date(today);
    const diffTime = todayDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      userProgress.streak++;
    } else if (diffDays > 1) {
      userProgress.streak = 1;
    }
  }
  
  userProgress.lastActivityDate = today;
  saveProgress();
  updateHeader();
}

// Update header stats
function updateHeader() {
  streakCount.textContent = userProgress.streak;
  xpCount.textContent = userProgress.xp.toLocaleString();
  heartsCount.textContent = userProgress.hearts;
}

// Calculate topic progress
function getTopicProgress(topicId) {
  const topic = userProgress.topics[topicId];
  const completed = topic.steps.filter(s => s).length;
  const total = topic.steps.length;
  const percentage = Math.round((completed / total) * 100);
  return { completed, total, percentage };
}

// Check if topic is unlocked
function isTopicUnlocked(topicId) {
  if (topicId === 1) return true;
  
  const prevTopic = userProgress.topics[topicId - 1];
  return prevTopic.completed;
}

// Render learning path
function renderPath() {
  pathContainer.innerHTML = '';
  
  TOPICS.forEach((topic, index) => {
    const progress = getTopicProgress(topic.id);
    const unlocked = isTopicUnlocked(topic.id);
    
    const topicNode = document.createElement('div');
    topicNode.className = 'topic-node';
    
    // Alternate left/right positioning
    const alignment = index % 2 === 0 ? 'mr-auto' : 'ml-auto';
    
    topicNode.innerHTML = `
      <div class="topic-card ${unlocked ? '' : 'locked'} ${alignment}" style="max-width: 400px;" data-topic-id="${topic.id}">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style="background: ${topic.color}20;">
              ${topic.icon}
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-1">${topic.title}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">${topic.description}</p>
            
            <!-- Progress -->
            <div class="flex items-center gap-3">
              <div class="flex-1">
                <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full transition-all duration-500" style="width: ${progress.percentage}%; background: ${topic.color};"></div>
                </div>
              </div>
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">${progress.completed}/${progress.total}</span>
            </div>
            
            <!-- Steps dots -->
            <div class="flex gap-2 mt-3">
              ${Array(6).fill(0).map((_, i) => {
                const stepCompleted = userProgress.topics[topic.id].steps[i];
                const isCurrent = !stepCompleted && (i === 0 || userProgress.topics[topic.id].steps[i - 1]);
                return `<div class="step-dot ${stepCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}"></div>`;
              }).join('')}
            </div>
            
            ${!unlocked ? '<div class="mt-3 text-xs text-slate-500 dark:text-slate-400">🔒 Complete previous topic to unlock</div>' : ''}
          </div>
        </div>
      </div>
    `;
    
    if (unlocked) {
      topicNode.querySelector('.topic-card').addEventListener('click', () => openTopicModal(topic));
    }
    
    pathContainer.appendChild(topicNode);
    
    // Add connector line
    if (index < TOPICS.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'flex justify-center my-4';
      connector.innerHTML = `
        <div class="w-1 h-12 bg-white/30 rounded-full"></div>
      `;
      pathContainer.appendChild(connector);
    }
  });
}

// Open topic modal
function openTopicModal(topic) {
  modalTitle.textContent = topic.title;
  modalSubtitle.textContent = topic.description;
  
  const progress = getTopicProgress(topic.id);
  modalProgressBar.style.width = `${progress.percentage}%`;
  modalProgressText.textContent = `${progress.completed}/6`;
  
  stepsGrid.innerHTML = '';
  
  STEP_TYPES.forEach((step, index) => {
    const stepCompleted = userProgress.topics[topic.id].steps[index];
    const isUnlocked = index === 0 || userProgress.topics[topic.id].steps[index - 1];
    const stepScore = userProgress.topics[topic.id].stepScores[index] || 0;
    
    const stepCard = document.createElement('div');
    stepCard.className = `p-4 rounded-xl border-2 transition-all ${
      stepCompleted ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
      isUnlocked ? 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-500 cursor-pointer hover:shadow-lg' :
      'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-50 cursor-not-allowed'
    }`;
    
    stepCard.innerHTML = `
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">${step.icon}</span>
        <div class="flex-1">
          <h4 class="font-semibold text-slate-900 dark:text-white">${step.name}</h4>
          ${stepCompleted && stepScore > 0 ? `<div class="text-xs text-green-600 dark:text-green-400 font-medium">${stepScore}% accuracy</div>` : ''}
        </div>
        ${stepCompleted ? '<span class="text-2xl">✓</span>' : ''}
        ${!isUnlocked ? '<span class="text-slate-400 text-xl">🔒</span>' : ''}
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">${step.description}</p>
      ${isUnlocked && !stepCompleted ? `<div class="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400">+${XP_PER_STEP} XP</div>` : ''}
    `;
    
    if (isUnlocked) {
      stepCard.addEventListener('click', () => startStep(topic.id, index));
    }
    
    stepsGrid.appendChild(stepCard);
  });
  
  topicModal.classList.remove('hidden');
}

// Close modal
function closeTopicModal() {
  topicModal.classList.add('hidden');
}

// Start a step
function startStep(topicId, stepIndex) {
  // Check if lesson content exists
  if (!LESSON_CONTENT[topicId] || !LESSON_CONTENT[topicId][stepIndex + 1]) {
    // Simulate completing the step for topics without content yet
    completeStepSimple(topicId, stepIndex);
    return;
  }
  
  // Initialize lesson state
  currentLesson = {
    topicId,
    stepIndex,
    currentQuestion: 0,
    hearts: userProgress.hearts,
    correctAnswers: 0,
    totalQuestions: 0,
    startTime: Date.now(),
    answers: [],
    wrongQuestions: [],
    retryMode: false,
    questionsAttempted: []
  };
  
  closeTopicModal();
  lessonScreen.classList.remove('hidden');
  
  const lessonData = LESSON_CONTENT[topicId][stepIndex + 1];
  renderLesson(lessonData);
}

// Simple completion for steps without content
function completeStepSimple(topicId, stepIndex) {
  userProgress.topics[topicId].steps[stepIndex] = true;
  userProgress.topics[topicId].stepScores[stepIndex] = 100;
  userProgress.topics[topicId].xp += XP_PER_STEP;
  userProgress.xp += XP_PER_STEP;
  
  // Check if topic is completed
  const allStepsComplete = userProgress.topics[topicId].steps.every(s => s);
  if (allStepsComplete) {
    userProgress.topics[topicId].completed = true;
    userProgress.xp += XP_TOPIC_MASTERY;
  }
  
  updateStreak();
  saveProgress();
  updateHeader();
  
  showResults(100, XP_PER_STEP, 'Step Completed!');
}

// Render lesson based on type
function renderLesson(lessonData) {
  lessonHearts.textContent = `❤️ ${currentLesson.hearts}`;
  
  switch(lessonData.type) {
    case 'learn':
      renderLearnLesson(lessonData);
      break;
    case 'recall':
    case 'scenario':
    case 'timed':
    case 'boss':
      renderQuizLesson(lessonData);
      break;
    case 'match':
      renderMatchLesson(lessonData);
      break;
  }
}

// Render Learn lesson (flashcard style with micro-checks)
function renderLearnLesson(lessonData) {
  const totalItems = lessonData.cards.length + (lessonData.microChecks ? lessonData.microChecks.length : 0);
  currentLesson.totalQuestions = totalItems;
  updateLessonProgress();
  
  // Show cards first
  if (currentLesson.currentQuestion < lessonData.cards.length) {
    const card = lessonData.cards[currentLesson.currentQuestion];
    
    lessonContent.innerHTML = `
      <div class="text-center mb-4">
        <span class="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
          Card ${currentLesson.currentQuestion + 1} of ${lessonData.cards.length}
        </span>
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">${lessonData.title}</h2>
      <div class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-6 min-h-[280px] flex flex-col justify-center">
        <h3 class="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">${card.front}</h3>
        <p class="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-lg">${card.back.replace(/\n/g, '<br>')}</p>
        ${card.example ? `<div class="text-sm text-slate-600 dark:text-slate-400 italic mt-4 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">${card.example}</div>` : ''}
      </div>
      <button onclick="nextLearnCard()" class="w-full px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all text-lg shadow-lg">
        ${currentLesson.currentQuestion < lessonData.cards.length - 1 ? 'Continue →' : 'Start Quick Checks →'}
      </button>
    `;
  } 
  // Then show micro-checks
  else if (lessonData.microChecks) {
    const checkIndex = currentLesson.currentQuestion - lessonData.cards.length;
    const check = lessonData.microChecks[checkIndex];
    
    lessonContent.innerHTML = `
      <div class="text-center mb-4">
        <span class="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
          Quick Check ${checkIndex + 1} of ${lessonData.microChecks.length}
        </span>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">${check.question}</h3>
      <div class="space-y-3">
        ${check.options.map((option, index) => `
          <button onclick="selectMicroCheck(${index})" class="micro-check-option w-full text-left px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all text-lg text-slate-900 dark:text-white font-medium">
            ${option}
          </button>
        `).join('')}
      </div>
    `;
  }
}

window.selectMicroCheck = function(selectedIndex) {
  const lessonData = LESSON_CONTENT[currentLesson.topicId][currentLesson.stepIndex + 1];
  const checkIndex = currentLesson.currentQuestion - lessonData.cards.length;
  const check = lessonData.microChecks[checkIndex];
  const isCorrect = selectedIndex === check.correct;
  
  const options = document.querySelectorAll('.micro-check-option');
  const selectedOption = options[selectedIndex];
  
  // Disable all options
  options.forEach(opt => opt.disabled = true);
  
  // Track this question as attempted
  const questionId = checkIndex;
  if (!currentLesson.questionsAttempted.includes(questionId)) {
    currentLesson.questionsAttempted.push(questionId);
  }
  
  if (isCorrect) {
    selectedOption.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-900/20');
    selectedOption.innerHTML += ' <span class="text-green-600 text-2xl">✓</span>';
    showSuccessAnimation(selectedOption);
    currentLesson.correctAnswers++;
    
    // Remove from wrong questions if retry
    const retryIndex = currentLesson.wrongQuestions.indexOf(questionId);
    if (retryIndex > -1) {
      currentLesson.wrongQuestions.splice(retryIndex, 1);
    }
  } else {
    selectedOption.classList.add('border-red-500', 'bg-red-50', 'dark:bg-red-900/20');
    selectedOption.innerHTML += ' <span class="text-red-600 text-2xl">✗</span>';
    showErrorAnimation(selectedOption);
    
    // Show correct answer
    options[check.correct].classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-900/20');
    options[check.correct].innerHTML += ' <span class="text-green-600 text-xl">✓ Correct</span>';
    
    // Add to retry queue if not already there
    if (!currentLesson.wrongQuestions.includes(questionId)) {
      currentLesson.wrongQuestions.push(questionId);
    }
  }
  
  setTimeout(() => {
    currentLesson.currentQuestion++;
    
    // Check if we've gone through all checks once
    if (currentLesson.currentQuestion >= currentLesson.totalQuestions) {
      // Check if there are wrong questions to retry
      if (currentLesson.wrongQuestions.length > 0) {
        // Enter retry mode - go back to first wrong check
        currentLesson.retryMode = true;
        currentLesson.currentQuestion = lessonData.cards.length + currentLesson.wrongQuestions[0];
        renderLearnLesson(lessonData);
      } else {
        // All checks passed
        sounds.complete();
        createConfetti(15);
        completeLesson(100, 100);
      }
    } else {
      renderLearnLesson(lessonData);
    }
  }, 1500);
};

window.nextLearnCard = function() {
  currentLesson.currentQuestion++;
  currentLesson.correctAnswers++;
  
  const lessonData = LESSON_CONTENT[currentLesson.topicId][currentLesson.stepIndex + 1];
  renderLearnLesson(lessonData);
};

// Render Quiz lesson (MCQ with retry system)
function renderQuizLesson(lessonData) {
  if (!currentLesson.retryMode) {
    currentLesson.totalQuestions = lessonData.questions.length;
  }
  updateLessonProgress();
  
  // Get current question (either from main queue or retry queue)
  let question, questionIndex;
  if (currentLesson.retryMode && currentLesson.wrongQuestions.length > 0) {
    // Retry mode - get next question from retry queue
    questionIndex = currentLesson.wrongQuestions[0];
    question = lessonData.questions[questionIndex];
  } else {
    questionIndex = currentLesson.currentQuestion;
    question = lessonData.questions[questionIndex];
  }
  
  const questionNumber = currentLesson.retryMode ? 
    `Retry - ${currentLesson.wrongQuestions.length} remaining` : 
    `Question ${currentLesson.currentQuestion + 1} of ${lessonData.questions.length}`;
  
  lessonContent.innerHTML = `
    <div class="text-center mb-4">
      <span class="inline-block px-3 py-1 ${currentLesson.retryMode ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'} rounded-full text-sm font-medium">
        ${questionNumber}
      </span>
    </div>
    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">${lessonData.title}</h2>
    <p class="text-lg text-slate-800 dark:text-slate-200 mb-6">${question.question || question.situation}</p>
    <div class="space-y-3" id="quiz-options">
      ${question.options.map((option, index) => `
        <button onclick="selectAnswer(${index}, ${questionIndex})" class="quiz-option w-full text-left px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
          <span class="font-semibold text-slate-700 dark:text-slate-300">${String.fromCharCode(65 + index)}.</span>
          <span class="ml-2 text-slate-600 dark:text-slate-400">${option}</span>
        </button>
      `).join('')}
    </div>
  `;
}

window.selectAnswer = function(selectedIndex, questionIndex) {
  const lessonData = LESSON_CONTENT[currentLesson.topicId][currentLesson.stepIndex + 1];
  const question = lessonData.questions[questionIndex];
  const isCorrect = selectedIndex === question.correct;
  
  const options = document.querySelectorAll('.quiz-option');
  const selectedOption = options[selectedIndex];
  
  // Disable all options
  options.forEach(opt => opt.disabled = true);
  
  // Track this question as attempted
  if (!currentLesson.questionsAttempted.includes(questionIndex)) {
    currentLesson.questionsAttempted.push(questionIndex);
  }
  
  if (isCorrect) {
    // Correct answer
    selectedOption.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-900/20');
    selectedOption.innerHTML += ' <span class="text-green-600 text-xl">✓</span>';
    showSuccessAnimation(selectedOption);
    
    currentLesson.correctAnswers++;
    
    // Remove from wrong questions if it was a retry
    const retryIndex = currentLesson.wrongQuestions.indexOf(questionIndex);
    if (retryIndex > -1) {
      currentLesson.wrongQuestions.splice(retryIndex, 1);
    }
  } else {
    // Wrong answer
    selectedOption.classList.add('border-red-500', 'bg-red-50', 'dark:bg-red-900/20');
    selectedOption.innerHTML += ' <span class="text-red-600 text-xl">✗</span>';
    showErrorAnimation(selectedOption);
    
    // Show correct answer
    options[question.correct].classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-900/20');
    options[question.correct].innerHTML += ' <span class="text-green-600 text-xl">✓ Correct</span>';
    
    // Add to wrong questions if not already there
    if (!currentLesson.wrongQuestions.includes(questionIndex)) {
      currentLesson.wrongQuestions.push(questionIndex);
    }
    
    // Lose a heart
    currentLesson.hearts--;
    userProgress.hearts = Math.max(0, userProgress.hearts - 1);
    lessonHearts.textContent = `❤️ ${currentLesson.hearts}`;
    updateHeader();
    saveProgress();
    
    if (currentLesson.hearts <= 0) {
      setTimeout(() => failLesson(), 1500);
      return;
    }
  }
  
  // Show explanation if available
  if (question.explanation) {
    setTimeout(() => {
      const explanationDiv = document.createElement('div');
      explanationDiv.className = `mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'}`;
      explanationDiv.innerHTML = `<p class="text-sm text-slate-700 dark:text-slate-300"><strong>Explanation:</strong> ${question.explanation}</p>`;
      document.getElementById('quiz-options').appendChild(explanationDiv);
    }, 500);
  }
  
  setTimeout(() => {
    // Check if we're in retry mode
    if (currentLesson.retryMode) {
      // In retry mode, check if all retries are done
      if (currentLesson.wrongQuestions.length === 0) {
        // All questions now correct!
        sounds.complete();
        createConfetti(20);
        completeLesson(100); // Perfect score since all must be correct
      } else {
        // Continue with next retry question
        renderQuizLesson(lessonData);
      }
    } else {
      // Normal mode
      currentLesson.currentQuestion++;
      
      if (currentLesson.currentQuestion >= lessonData.questions.length) {
        // Finished all questions once
        if (currentLesson.wrongQuestions.length > 0) {
          // Start retry mode
          currentLesson.retryMode = true;
          renderQuizLesson(lessonData);
        } else {
          // All correct on first try!
          sounds.complete();
          createConfetti(20);
          completeLesson(100);
        }
      } else {
        // Continue with next question
        renderQuizLesson(lessonData);
      }
    }
  }, question.explanation ? 3000 : 1500);
};

// Update lesson progress bar
function updateLessonProgress() {
  if (currentLesson.retryMode) {
    // In retry mode, show progress based on retry queue
    const retryProgress = currentLesson.wrongQuestions.length === 0 ? 100 : 
      ((currentLesson.questionsAttempted.length - currentLesson.wrongQuestions.length) / currentLesson.questionsAttempted.length) * 100;
    lessonProgressBar.style.width = `${retryProgress}%`;
  } else {
    // Normal mode
    const progress = ((currentLesson.currentQuestion) / currentLesson.totalQuestions) * 100;
    lessonProgressBar.style.width = `${Math.min(progress, 100)}%`;
  }
}

// Complete lesson
function completeLesson(accuracy, customXp = null) {
  const xpEarned = customXp !== null ? customXp : Math.round((accuracy / 100) * XP_PER_STEP);
  
  userProgress.topics[currentLesson.topicId].steps[currentLesson.stepIndex] = true;
  userProgress.topics[currentLesson.topicId].stepScores[currentLesson.stepIndex] = accuracy;
  userProgress.topics[currentLesson.topicId].xp += xpEarned;
  userProgress.xp += xpEarned;
  
  // Check if topic is completed
  const allStepsComplete = userProgress.topics[currentLesson.topicId].steps.every(s => s);
  if (allStepsComplete) {
    userProgress.topics[currentLesson.topicId].completed = true;
    
    // Check for mastery (85%+ average)
    const avgScore = userProgress.topics[currentLesson.topicId].stepScores.reduce((a, b) => a + b, 0) / 6;
    if (avgScore >= 85) {
      userProgress.topics[currentLesson.topicId].mastered = true;
    }
    
    // Topic completion bonus
    userProgress.xp += XP_TOPIC_MASTERY;
    
    // Perfect boss bonus
    if (currentLesson.stepIndex === 5 && accuracy === 100) {
      userProgress.xp += XP_PERFECT_BOSS;
    }
  }
  
  updateStreak();
  saveProgress();
  updateHeader();
  
  lessonScreen.classList.add('hidden');
  showResults(accuracy, xpEarned, 'Great Job!');
}

// Fail lesson
function failLesson() {
  lessonScreen.classList.add('hidden');
  alert('Out of hearts! Practice mode coming soon. For now, hearts will refill.');
  userProgress.hearts = userProgress.maxHearts;
  saveProgress();
  updateHeader();
  renderPath();
}

// Show results
function showResults(accuracy, xp, title) {
  resultsIcon.textContent = accuracy >= 90 ? '🎉' : accuracy >= 70 ? '👍' : '💪';
  resultsTitle.textContent = title;
  resultsMessage.textContent = accuracy >= 90 ? 'Excellent work!' : accuracy >= 70 ? 'Good job!' : 'Keep practicing!';
  resultsXp.textContent = `+${xp}`;
  resultsAccuracy.textContent = `${accuracy}%`;
  
  resultsModal.classList.remove('hidden');
}

// Continue from results
continueBtn.addEventListener('click', () => {
  resultsModal.classList.add('hidden');
  renderPath();
});

// Exit lesson
exitLesson.addEventListener('click', () => {
  if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
    lessonScreen.classList.add('hidden');
    renderPath();
  }
});

// Render Match lesson (placeholder)
function renderMatchLesson(lessonData) {
  lessonContent.innerHTML = `
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">${lessonData.title}</h2>
    <p class="text-slate-600 dark:text-slate-400 mb-6">Match exercise coming soon!</p>
    <button onclick="completeLesson(100)" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
      Continue
    </button>
  `;
}

// Event listeners
closeModal.addEventListener('click', closeTopicModal);
themeToggle.addEventListener('click', toggleTheme);

// Close modal on outside click
topicModal.addEventListener('click', (e) => {
  if (e.target === topicModal) {
    closeTopicModal();
  }
});

// Initialize app
init();
