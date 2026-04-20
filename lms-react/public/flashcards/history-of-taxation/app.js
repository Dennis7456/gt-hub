// State
let currentIndex = 0;
let isFlipped = false;
let filteredCards = [...flashcards];
let isShuffled = false;

// Get unique topics
const topics = [...new Set(flashcards.map(card => card.topic))];

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
    const currentCard = filteredCards[currentIndex];
    const activeTopic = document.querySelector('.topic-pill.active')?.textContent.split(' (')[0];
    
    if (activeTopic && activeTopic !== 'All Cards') {
      filteredCards = flashcards.filter(card => card.topic === activeTopic);
    } else {
      filteredCards = [...flashcards];
    }
    
    currentIndex = filteredCards.findIndex(card => 
      card.front === currentCard.front && card.back === currentCard.back
    );
    if (currentIndex === -1) currentIndex = 0;
    
    isShuffled = false;
  } else {
    const currentCard = filteredCards[currentIndex];
    filteredCards = shuffleArray(filteredCards);
    
    currentIndex = filteredCards.findIndex(card => 
      card.front === currentCard.front && card.back === currentCard.back
    );
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
  } else {
    shuffleBtn.classList.remove('bg-indigo-100', 'dark:bg-indigo-900/30');
  }
}

// Render topic list
function renderTopicList() {
  const allBtn = document.createElement('button');
  allBtn.className = 'topic-pill active px-3 py-2 rounded-lg text-sm text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-all';
  allBtn.textContent = `All Cards (${flashcards.length})`;
  allBtn.onclick = () => filterByTopic(null);
  topicList.appendChild(allBtn);

  topics.forEach(topic => {
    const btn = document.createElement('button');
    btn.className = 'topic-pill px-3 py-2 rounded-lg text-sm text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-all';
    const count = flashcards.filter(card => card.topic === topic).length;
    btn.textContent = `${topic} (${count})`;
    btn.onclick = () => filterByTopic(topic);
    topicList.appendChild(btn);
  });
}

// Filter by topic
function filterByTopic(topic) {
  if (!topic) {
    filteredCards = [...flashcards];
    headerSubtitle.textContent = `${flashcards.length} flashcards`;
  } else {
    filteredCards = flashcards.filter(card => card.topic === topic);
    headerSubtitle.textContent = `${topic} · ${filteredCards.length} cards`;
  }
  
  document.querySelectorAll('.topic-pill').forEach((btn, i) => {
    btn.classList.toggle('active', topic ? btn.textContent.startsWith(topic) : i === 0);
  });
  
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
  topicBadge.textContent = card.topic;
  
  if (isFlipped) {
    cardInner.classList.remove('flipped');
    isFlipped = false;
  }
}

// Flip card
function flipCard() {
  cardInner.classList.toggle('flipped');
  isFlipped = !isFlipped;
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
