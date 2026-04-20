#!/usr/bin/env python3
"""
Generate History of Taxation Flashcards
Converts history_of_taxation_flashcards.json into interactive flashcard app
"""

import json
import os

# Read the JSON file
print("Reading history_of_taxation_flashcards.json...")
with open('assets/history_of_taxation_flashcards.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Create output directory
output_dir = 'flashcards/history-of-taxation'
os.makedirs(output_dir, exist_ok=True)

print(f"Generating flashcards for {data['topic']}...")
print(f"Total flashcards: {len(data['flashcards'])}")

# Get unique categories
categories = sorted(list(set(card['category'] for card in data['flashcards'])))
print(f"Categories: {len(categories)}")

# Generate cards.js
cards_js = f"""// Flashcards for {data['topic']}
// Source: {data['source']}

const flashcards = {json.dumps(data['flashcards'], indent=2)};

const categories = {json.dumps(categories, indent=2)};
"""

with open(os.path.join(output_dir, 'cards.js'), 'w', encoding='utf-8') as f:
    f.write(cards_js)

print("✓ cards.js created")

# Copy app.js from theory-of-taxation (same structure)
print("Copying app.js...")
with open('flashcards/theory-of-taxation/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Update localStorage key
app_js = app_js.replace("'theoryOfTaxationFlashcards'", "'historyOfTaxationFlashcards'")

with open(os.path.join(output_dir, 'app.js'), 'w', encoding='utf-8') as f:
    f.write(app_js)

print("✓ app.js created")

# Generate index.html
index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>History of Taxation - Flashcards</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    * {{ font-family: 'Inter', sans-serif; }}
    
    body {{
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      transition: background 0.3s;
    }}

    body.dark-mode {{
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }}

    .card {{
      perspective: 1000px;
      cursor: pointer;
    }}

    .card-inner {{
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }}

    .card.flipped .card-inner {{
      transform: rotateY(180deg);
    }}

    .card-front, .card-back {{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }}

    .card-front {{
      background: white;
    }}

    body.dark-mode .card-front {{
      background: #1e293b;
    }}

    .card-back {{
      background: #f1f5f9;
      transform: rotateY(180deg);
    }}

    body.dark-mode .card-back {{
      background: #334155;
    }}

    .filter-btn {{
      transition: all 0.2s;
    }}

    .filter-btn.active {{
      background: white;
      color: #667eea;
    }}

    body.dark-mode .filter-btn.active {{
      background: #1e293b;
      color: #818cf8;
    }}
  </style>
</head>
<body>

  <!-- Header -->
  <header class="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div>
        <h1 class="text-white font-bold text-xl">History of Taxation</h1>
        <p class="text-white/80 text-sm">{len(data['flashcards'])} Flashcards</p>
      </div>
      <div class="flex items-center gap-3">
        <button id="shuffle-btn" class="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all">
          🔀 Shuffle
        </button>
        <button id="theme-toggle" class="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all">
          <svg id="sun-icon" class="w-5 h-5 text-white hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="moon-icon" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Filters -->
  <div class="max-w-6xl mx-auto px-4 py-6">
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
      <h2 class="text-white font-semibold mb-3">Filter by Category</h2>
      <div class="flex flex-wrap gap-2" id="category-filters">
        <button class="filter-btn px-4 py-2 bg-white/20 text-white rounded-lg text-sm active" data-category="all">
          All ({len(data['flashcards'])})
        </button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <main class="max-w-6xl mx-auto px-4 pb-12">
    
    <!-- Progress -->
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-white font-medium">Progress</span>
        <span class="text-white" id="progress-text">0 / {len(data['flashcards'])}</span>
      </div>
      <div class="h-3 bg-white/20 rounded-full overflow-hidden">
        <div id="progress-bar" class="h-full bg-white transition-all duration-300" style="width: 0%"></div>
      </div>
    </div>

    <!-- Card Display -->
    <div class="flex flex-col items-center">
      <div class="card w-full max-w-2xl h-96 mb-6" id="flashcard">
        <div class="card-inner h-full">
          <div class="card-front shadow-2xl">
            <div class="text-center">
              <div class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-4" id="card-category"></div>
              <p class="text-xl font-medium text-slate-800 dark:text-slate-200" id="card-front-text"></p>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-6">Click to flip</p>
            </div>
          </div>
          <div class="card-back shadow-2xl">
            <div class="text-center">
              <p class="text-lg text-slate-700 dark:text-slate-200" id="card-back-text"></p>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-6">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex items-center gap-4">
        <button id="prev-btn" class="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold transition-all backdrop-blur-sm">
          ← Previous
        </button>
        <span class="text-white font-semibold" id="card-counter">1 / {len(data['flashcards'])}</span>
        <button id="next-btn" class="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold transition-all backdrop-blur-sm">
          Next →
        </button>
      </div>
    </div>

  </main>

  <script src="cards.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""

with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_html)

print("✓ index.html created")

# Create README
readme = f"""# History of Taxation - Flashcards

## Overview
Interactive flashcards for studying the History of Taxation.

## Content
- **Total Flashcards**: {len(data['flashcards'])}
- **Categories**: {len(categories)}
- **Source**: {data['source']}

## Categories

{chr(10).join(f'- {cat}' for cat in categories)}

## Features

- **Interactive Cards**: Click to flip between question and answer
- **Category Filtering**: Filter cards by historical period or topic
- **Progress Tracking**: See how many cards you've reviewed
- **Shuffle Mode**: Randomize card order for better learning
- **Dark/Light Mode**: Toggle theme preference
- **Navigation**: Move forward/backward through cards
- **Keyboard Support**: Use arrow keys to navigate

## How to Use

1. Open `index.html` in a web browser
2. Click on a card to flip it and see the answer
3. Use "Previous" and "Next" buttons to navigate
4. Filter by category to focus on specific historical periods
5. Click "Shuffle" to randomize the order
6. Toggle dark/light mode with the theme button

## Topics Covered

### Ancient Civilizations
- Mesopotamia (agricultural produce, trade taxes)
- Ancient Greece (property, wealth, eisphora)
- Rome (census tax, direct and indirect taxes)

### Medieval Period
- Feudal taxation systems
- Tithes and church taxes
- Magna Carta and taxation limits

### Early Modern Period
- English taxation evolution
- French taxation system
- Colonial taxation

### Modern Era
- Income tax development
- VAT/GST introduction
- Contemporary tax systems

### Regional History
- African taxation history
- Asian taxation systems
- European tax evolution
- American taxation development

### Key Concepts
- Evolution from simple grain levies to complex systems
- Direct vs indirect taxation through history
- Tax revolts and reforms
- Impact on governance and social structures

## Study Tips

1. **Chronological Study**: Start with ancient civilizations and progress forward
2. **Regional Focus**: Use filters to study one region at a time
3. **Comparative Analysis**: Compare tax systems across different periods
4. **Shuffle Practice**: Test your knowledge with randomized cards
5. **Spaced Repetition**: Review cards multiple times over several days

---

Generated: 2026-04-17
Total Cards: {len(data['flashcards'])}
Source: History of Taxation.pptx
"""

with open(os.path.join(output_dir, 'README.md'), 'w', encoding='utf-8') as f:
    f.write(readme)

print("✓ README.md created")

print(f"\n✅ History of Taxation flashcards generated successfully!")
print(f"📁 Files created in: {output_dir}/")
print(f"📊 {len(data['flashcards'])} flashcards across {len(categories)} categories")
print("\n🎯 Open flashcards/history-of-taxation/index.html in a browser to start studying!")
