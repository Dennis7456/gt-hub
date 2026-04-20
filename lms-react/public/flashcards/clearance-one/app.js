// State
let currentIndex = 0;
let isFlipped = false;
let filteredCards = [...CARDS];
let isShuffled = false;

// Elements
const cardInner = document.getElementById('card-inner');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const flipBtn = document.getElementById('flip-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardCounter = document.getElementById('card-counter');
const progressBar = document.getElementById('progress-bar');
const topicBadge = document.getElementById('topic-badge');
const topicsBtn = document.getElementById('topics-btn');
const topicOverlay = document.getElementById('topic-overlay');
const closeTopics = document.getElementById('close-topics');
const topicList = document.getElementById('topic-list');
const headerSubtitle = document.getElementById('header-subtitle');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const shuffleBtn = document.getElementById('shuffle-btn');
const cardCounterMobile = document.getElementById('card-counter-mobile');

// Initialize
function init() {
  renderTopicList();
  showCard(0);
  updateUI();
  initTheme();
  updateShuffleButton();
}

// Theme management
function initTheme() {
  // Default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    document.body.classList.remove('dark-mode');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
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

// Shuffle functionality
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function toggleShuffle() {
  if (isShuffled) {
    // Unshuffle - restore original order
    const currentCard = filteredCards[currentIndex];
    
    // Get the current topic filter if any
    const activeTopic = TOPICS.find(topic => {
      const firstCard = filteredCards[0];
      return firstCard && firstCard.id >= topic.range[0] && firstCard.id <= topic.range[1];
    });
    
    if (activeTopic) {
      filteredCards = CARDS.filter(card => 
        card.id >= activeTopic.range[0] && card.id <= activeTopic.range[1]
      );
    } else {
      filteredCards = [...CARDS];
    }
    
    // Find the current card in the restored order
    currentIndex = filteredCards.findIndex(card => card.id === currentCard.id);
    if (currentIndex === -1) currentIndex = 0;
    
    isShuffled = false;
  } else {
    // Shuffle
    const currentCard = filteredCards[currentIndex];
    filteredCards = shuffleArray(filteredCards);
    
    // Find the current card in the shuffled order
    currentIndex = filteredCards.findIndex(card => card.id === currentCard.id);
    if (currentIndex === -1) currentIndex = 0;
    
    isShuffled = true;
  }
  
  updateShuffleButton();
  showCard(currentIndex);
  updateUI();
}

function updateShuffleButton() {
  if (isShuffled) {
    shuffleBtn.classList.add('bg-indigo-100', 'dark:bg-indigo-900/30');
    shuffleBtn.setAttribute('data-tooltip', 'Restore original order');
  } else {
    shuffleBtn.classList.remove('bg-indigo-100', 'dark:bg-indigo-900/30');
    shuffleBtn.setAttribute('data-tooltip', 'Shuffle cards');
  }
}

// Render topic list
function renderTopicList() {
  const allBtn = document.createElement('button');
  allBtn.className = 'topic-pill active px-3 py-2 rounded-lg text-sm text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-all';
  allBtn.textContent = `All Cards (${CARDS.length})`;
  allBtn.onclick = () => filterByTopic(null);
  topicList.appendChild(allBtn);

  TOPICS.forEach(topic => {
    const btn = document.createElement('button');
    btn.className = 'topic-pill px-3 py-2 rounded-lg text-sm text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-all';
    const count = topic.range[1] - topic.range[0] + 1;
    btn.textContent = `${topic.label} (${count})`;
    btn.onclick = () => filterByTopic(topic);
    topicList.appendChild(btn);
  });
}

// Filter by topic
function filterByTopic(topic) {
  if (!topic) {
    filteredCards = [...CARDS];
    headerSubtitle.textContent = `${CARDS.length} flashcards`;
  } else {
    filteredCards = CARDS.filter(card => 
      card.id >= topic.range[0] && card.id <= topic.range[1]
    );
    headerSubtitle.textContent = `${topic.label} · ${filteredCards.length} cards`;
  }
  
  // Update active state
  document.querySelectorAll('.topic-pill').forEach((btn, i) => {
    btn.classList.toggle('active', topic ? i === TOPICS.indexOf(topic) + 1 : i === 0);
  });
  
  // Reset shuffle state when changing topics
  isShuffled = false;
  updateShuffleButton();
  
  currentIndex = 0;
  showCard(0);
  updateUI();
  closeTopicOverlay();
}

// Show card
function showCard(index) {
  if (filteredCards.length === 0) return;
  
  const card = filteredCards[index];
  cardFront.textContent = card.front;
  cardBack.textContent = card.back;
  
  // Find topic for badge
  const topic = TOPICS.find(t => card.id >= t.range[0] && card.id <= t.range[1]);
  topicBadge.textContent = topic ? topic.label : 'General';
  
  // Reset flip
  if (isFlipped) {
    cardInner.classList.remove('flipped');
    isFlipped = false;
  }
  
  // Animate card entrance
  const { animate } = Motion;
  animate(cardInner, 
    { scale: [0.95, 1], opacity: [0, 1] },
    { duration: 0.3, easing: 'ease-out' }
  );
}

// Flip card
function flipCard() {
  cardInner.classList.toggle('flipped');
  isFlipped = !isFlipped;
  
  const { animate } = Motion;
  animate(cardInner,
    { rotateY: isFlipped ? 180 : 0 },
    { duration: 0 }
  );
}

// Navigation
function nextCard() {
  if (currentIndex < filteredCards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
    updateUI();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
    updateUI();
  }
}

// Update UI
function updateUI() {
  const counterText = `${currentIndex + 1} / ${filteredCards.length}`;
  cardCounter.textContent = counterText;
  cardCounterMobile.textContent = counterText;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === filteredCards.length - 1;
  
  const progress = ((currentIndex + 1) / filteredCards.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Topic overlay
function openTopicOverlay() {
  topicOverlay.classList.remove('hidden');
  topicOverlay.classList.add('visible');
}

function closeTopicOverlay() {
  topicOverlay.classList.remove('visible');
  topicOverlay.classList.add('hidden');
}

// Event listeners
flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
topicsBtn.addEventListener('click', openTopicOverlay);
closeTopics.addEventListener('click', closeTopicOverlay);
cardInner.addEventListener('click', flipCard);
themeToggle.addEventListener('click', toggleTheme);
shuffleBtn.addEventListener('click', toggleShuffle);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === ' ') {
    e.preventDefault();
    flipCard();
  }
  if (e.key === 'Escape') closeTopicOverlay();
});

// Click outside to close overlay
topicOverlay.addEventListener('click', (e) => {
  if (e.target === topicOverlay) closeTopicOverlay();
});

// Initialize app
init();
