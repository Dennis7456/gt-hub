#!/usr/bin/env python3
"""
Generate WTO Customs Valuation flashcards from JSON data.
"""

import json
from pathlib import Path

def load_flashcards(json_path):
    """Load flashcards from JSON file."""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_flashcards_app(data, output_dir):
    """Generate flashcards HTML application."""
    
    # Create output directory
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    flashcards = data['flashcards']
    topic = data['topic']
    
    # Get unique categories
    categories = sorted(list(set(card['category'] for card in flashcards)))
    
    print(f"Topic: {topic}")
    print(f"Total flashcards: {len(flashcards)}")
    print(f"Categories: {len(categories)}")
    
    # Generate cards.js
    cards_js = f"""// {topic}
// Auto-generated from wto_customs_valuation_flashcards.json

const flashcards = {json.dumps(flashcards, indent=2, ensure_ascii=False)};

const categories = {json.dumps(categories, indent=2, ensure_ascii=False)};
"""
    
    with open(Path(output_dir) / 'cards.js', 'w', encoding='utf-8') as f:
        f.write(cards_js)
    
    # Generate app.js (same logic as other flashcard apps)
    app_js = """// Flashcard Application Logic
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
"""
    
    with open(Path(output_dir) / 'app.js', 'w', encoding='utf-8') as f:
        f.write(app_js)
    
    # Generate index.html
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{topic} - Flashcards</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .flashcard {{
      perspective: 1000px;
      cursor: pointer;
    }}
    
    .flashcard-inner {{
      position: relative;
      width: 100%;
      height: 400px;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }}
    
    .flashcard.flipped .flashcard-inner {{
      transform: rotateY(180deg);
    }}
    
    .flashcard-front, .flashcard-back {{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }}
    
    .flashcard-front {{
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }}
    
    .flashcard-back {{
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      transform: rotateY(180deg);
    }}
  </style>
</head>
<body class="bg-gray-50 min-h-screen p-4">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{topic}</h1>
      <p class="text-gray-600">Interactive Flashcards</p>
      
      <!-- Controls -->
      <div class="mt-4 flex flex-wrap gap-4">
        <div class="flex-1 min-w-[200px]">
          <label class="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
          <select id="category-filter" onchange="filterByCategory()" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Categories ({len(flashcards)} cards)</option>
          </select>
        </div>
        
        <div class="flex items-end">
          <button id="shuffle-btn" onclick="toggleShuffle()" 
                  class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            🔀 Shuffle
          </button>
        </div>
      </div>
    </div>

    <!-- Progress -->
    <div class="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">Progress</span>
        <span class="text-sm font-medium text-gray-700">
          Card <span id="current-card">1</span> of <span id="total-cards">{len(flashcards)}</span>
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div id="progress-bar" class="bg-blue-600 h-2 rounded-full transition-all" style="width: 0%"></div>
      </div>
    </div>

    <!-- Flashcard -->
    <div id="flashcard" class="flashcard mb-6" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="text-center">
            <p id="card-front" class="text-2xl font-bold mb-4"></p>
            <p class="text-sm opacity-75">Click to flip</p>
          </div>
        </div>
        <div class="flashcard-back">
          <div class="text-center">
            <p id="card-back" class="text-xl"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Badge -->
    <div class="text-center mb-6">
      <span id="card-category" class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"></span>
    </div>

    <!-- Navigation -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex justify-between items-center">
        <button id="prev-btn" onclick="previousCard()" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          ← Previous
        </button>
        
        <div class="text-center">
          <p class="text-sm text-gray-600">Use arrow keys to navigate</p>
          <p class="text-sm text-gray-600">Press spacebar to flip</p>
        </div>
        
        <button id="next-btn" onclick="nextCard()" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          Next →
        </button>
      </div>
    </div>

    <!-- Instructions -->
    <div class="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
      <h3 class="font-bold text-blue-900 mb-2">How to Use</h3>
      <ul class="text-sm text-blue-800 space-y-1">
        <li>• Click the card to flip between question and answer</li>
        <li>• Use Previous/Next buttons or arrow keys to navigate</li>
        <li>• Filter by category to focus on specific topics</li>
        <li>• Shuffle cards for random practice</li>
        <li>• Press spacebar to flip the current card</li>
      </ul>
    </div>
  </div>

  <script src="cards.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""
    
    with open(Path(output_dir) / 'index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"\n✓ Generated flashcards in: {output_dir}/")
    print(f"  - index.html")
    print(f"  - app.js")
    print(f"  - cards.js")

def main():
    """Main function."""
    print("=" * 60)
    print("Generating WTO Customs Valuation Flashcards")
    print("=" * 60)
    print()
    
    # Load data
    data = load_flashcards('assets/wto_customs_valuation_flashcards.json')
    
    # Generate flashcards
    output_dir = 'flashcards/wto-customs-valuation'
    generate_flashcards_app(data, output_dir)
    
    print("\n" + "=" * 60)
    print("✓ Flashcards generated successfully!")
    print("=" * 60)
    print(f"\nOpen {output_dir}/index.html in your browser to use the flashcards.")

if __name__ == '__main__':
    main()
