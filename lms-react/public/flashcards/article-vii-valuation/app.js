// Flashcard Application Logic
let currentCard = 0;
let isFlipped = false;
let filteredCards = [...flashcards];
let selectedCategory = 'all';
let shuffled = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateCategories();
  showCard(0);
  updateProgress();
});

function populateCategories() {
  const select = document.getElementById('category-filter');
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function filterByCategory() {
  const select = document.getElementById('category-filter');
  selectedCategory = select.value;
  
  if (selectedCategory === 'all') {
    filteredCards = [...flashcards];
  } else {
    filteredCards = flashcards.filter(card => card.category === selectedCategory);
  }
  
  currentCard = 0;
  showCard(0);
  updateProgress();
}

function toggleShuffle() {
  shuffled = !shuffled;
  const btn = document.getElementById('shuffle-btn');
  
  if (shuffled) {
    // Fisher-Yates shuffle
    filteredCards = [...filteredCards];
    for (let i = filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    btn.textContent = '🔀 Shuffled';
    btn.classList.add('bg-green-600');
    btn.classList.remove('bg-gray-600');
  } else {
    // Reset to original order
    filterByCategory();
    btn.textContent = '🔀 Shuffle';
    btn.classList.remove('bg-green-600');
    btn.classList.add('bg-gray-600');
  }
  
  currentCard = 0;
  showCard(0);
}

function showCard(index) {
  if (filteredCards.length === 0) {
    document.getElementById('card-front').textContent = 'No cards available';
    document.getElementById('card-back').textContent = 'Try selecting a different category';
    return;
  }
  
  currentCard = index;
  isFlipped = false;
  
  const card = filteredCards[currentCard];
  document.getElementById('card-front').textContent = card.front;
  document.getElementById('card-back').textContent = card.back;
  document.getElementById('card-category').textContent = card.category;
  
  // Reset flip
  const cardElement = document.getElementById('flashcard');
  cardElement.classList.remove('flipped');
  
  updateProgress();
}

function flipCard() {
  const cardElement = document.getElementById('flashcard');
  cardElement.classList.toggle('flipped');
  isFlipped = !isFlipped;
}

function previousCard() {
  if (currentCard > 0) {
    showCard(currentCard - 1);
  }
}

function nextCard() {
  if (currentCard < filteredCards.length - 1) {
    showCard(currentCard + 1);
  }
}

function updateProgress() {
  document.getElementById('current-card').textContent = currentCard + 1;
  document.getElementById('total-cards').textContent = filteredCards.length;
  
  // Update progress bar
  const progress = ((currentCard + 1) / filteredCards.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
  
  // Update button states
  document.getElementById('prev-btn').disabled = currentCard === 0;
  document.getElementById('next-btn').disabled = currentCard === filteredCards.length - 1;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') previousCard();
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === ' ') {
    e.preventDefault();
    flipCard();
  }
});
