#!/usr/bin/env python3
"""
Generate Customs Valuation I Learning Path
Converts customs_valuation_i_learning_path.json into learning path files
"""

import json
import os

# Read the JSON file
with open('assets/customs_valuation_i_learning_path.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Create output directory
output_dir = 'customs-valuation-i/learning-path'
os.makedirs(output_dir, exist_ok=True)

# Generate data.js
print("Generating data.js...")

def get_unit_icon(theme):
    icons = {
        'Introduction': '📚',
        'Ancient World': '🏛️',
        'Medieval Period': '⚔️',
        'Early Modern': '🌍',
        'Modern Era': '🏭',
        'Regional History': '🗺️',
        'Tax Systems': '💰',
        'Tax Revolts': '⚡',
        'Contemporary': '🌐',
        'Evolution': '📈',
        'Comparative': '🔄',
        'Future': '🚀'
    }
    return icons.get(theme, '📖')

def get_unit_color(unit_id):
    colors = [
        '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899',
        '#06b6d4', '#84cc16', '#f97316', '#6366f1', '#14b8a6', '#a855f7'
    ]
    return colors[(unit_id - 1) % len(colors)]

topics = []
for unit in data['units']:
    topic = {
        'id': unit['unit_id'],
        'title': unit['title'],
        'icon': get_unit_icon(unit['theme']),
        'color': get_unit_color(unit['unit_id']),
        'description': unit['unit_goal'],
        'steps': len(unit['lessons'])
    }
    topics.append(topic)

data_js = f"""const TOPICS = {json.dumps(topics, indent=2)};

const STEP_TYPES = [
  {{ id: 1, name: "Learn", icon: "📚", description: "Read and understand key concepts" }},
  {{ id: 2, name: "Recall", icon: "🧠", description: "Test your memory with flashcards" }},
  {{ id: 3, name: "Match", icon: "🎯", description: "Match terms with definitions" }},
  {{ id: 4, name: "Scenario", icon: "💼", description: "Apply knowledge to real situations" }},
  {{ id: 5, name: "Timed Quiz", icon: "⏱️", description: "Quick quiz under time pressure" }},
  {{ id: 6, name: "Boss Challenge", icon: "👑", description: "Master the topic with a final test" }}
];

// XP Constants
const XP_PER_STEP = 100;
const XP_PER_TOPIC = 600;
const XP_TOPIC_MASTERY = 50;
const XP_PERFECT_BOSS = 100;
const XP_CHAPTER_COMPLETE = 250;
const TOTAL_CHAPTER_XP = 7200;
"""

with open(os.path.join(output_dir, 'data.js'), 'w', encoding='utf-8') as f:
    f.write(data_js)

print("✓ data.js created")

# Generate lessons.js (placeholder structure)
print("Generating lessons.js...")

lessons_js = """// Lesson content for Customs Valuation I

// Helper function to shuffle answers
function shuffleAnswers(questions) {
  const shuffled = JSON.parse(JSON.stringify(questions));
  
  for (let i = 0; i < shuffled.length; i++) {
    const q = shuffled[i];
    if (!q.options || q.options.length < 2) continue;
    
    const correctAnswer = q.options[q.correct];
    let newCorrectIndex;
    
    if (i > 0 && shuffled[i-1].correct !== undefined) {
      const prevCorrect = shuffled[i-1].correct;
      const availablePositions = [...Array(q.options.length).keys()].filter(idx => idx !== prevCorrect);
      newCorrectIndex = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    } else {
      newCorrectIndex = Math.floor(Math.random() * q.options.length);
    }
    
    const newOptions = [...q.options];
    const correctOption = newOptions.splice(q.correct, 1)[0];
    
    for (let j = newOptions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [newOptions[j], newOptions[k]] = [newOptions[k], newOptions[j]];
    }
    
    newOptions.splice(newCorrectIndex, 0, correctOption);
    
    q.options = newOptions;
    q.correct = newCorrectIndex;
  }
  
  return shuffled;
}

const LESSON_CONTENT = {
"""

# Generate placeholder lesson content for each unit
for unit in data['units']:
    unit_id = unit['unit_id']
    lessons_js += f"  {unit_id}: {{ // {unit['title']}\n"
    
    for idx, lesson in enumerate(unit['lessons'], 1):
        lesson_type = lesson['type']
        lesson_title = lesson['title']
        
        lessons_js += f"    {idx}: {{ // {lesson_title}\n"
        lessons_js += f"      type: '{lesson_type}',\n"
        lessons_js += f"      title: '{lesson_title}',\n"
        
        if lesson_type == 'learn':
            lessons_js += f"      cards: [\n"
            lessons_js += f"        {{\n"
            lessons_js += f"          front: '{lesson['goal']}',\n"
            lessons_js += f"          back: 'Content for {lesson_title} will be added here.',\n"
            lessons_js += f"          example: 'Skills: {', '.join(lesson['skills'][:2])}'\n"
            lessons_js += f"        }}\n"
            lessons_js += f"      ],\n"
            lessons_js += f"      microChecks: [\n"
            lessons_js += f"        {{\n"
            lessons_js += f"          question: 'Quick check for {lesson_title}',\n"
            lessons_js += f"          options: ['Option A', 'Option B', 'Option C'],\n"
            lessons_js += f"          correct: 0\n"
            lessons_js += f"        }}\n"
            lessons_js += f"      ]\n"
        elif lesson_type in ['quiz', 'recall']:
            lessons_js += f"      passThreshold: 60,\n"
            lessons_js += f"      questions: [\n"
            lessons_js += f"        {{\n"
            lessons_js += f"          question: 'Sample question for {lesson_title}',\n"
            lessons_js += f"          options: ['Option A', 'Option B', 'Option C', 'Option D'],\n"
            lessons_js += f"          correct: 0\n"
            lessons_js += f"        }}\n"
            lessons_js += f"      ]\n"
        elif lesson_type == 'scenario':
            lessons_js += f"      passThreshold: 70,\n"
            lessons_js += f"      scenarios: [\n"
            lessons_js += f"        {{\n"
            lessons_js += f"          situation: 'Scenario for {lesson_title}',\n"
            lessons_js += f"          options: ['Option A', 'Option B', 'Option C', 'Option D'],\n"
            lessons_js += f"          correct: 0,\n"
            lessons_js += f"          explanation: 'Explanation here'\n"
            lessons_js += f"        }}\n"
            lessons_js += f"      ]\n"
        elif lesson_type == 'checkpoint':
            lessons_js += f"      passThreshold: 75,\n"
            lessons_js += f"      questions: [\n"
            lessons_js += f"        {{\n"
            lessons_js += f"          question: 'Checkpoint question for {lesson_title}',\n"
            lessons_js += f"          options: ['Option A', 'Option B', 'Option C', 'Option D'],\n"
            lessons_js += f"          correct: 0\n"
            lessons_js += f"        }}\n"
            lessons_js += f"      ]\n"
        elif lesson_type == 'match':
            lessons_js += f"      passThreshold: 70,\n"
            lessons_js += f"      matchPairs: [\n"
            lessons_js += f"        {{ term: 'Term 1', definition: 'Definition 1', category: 'item' }},\n"
            lessons_js += f"        {{ term: 'Term 2', definition: 'Definition 2', category: 'item' }}\n"
            lessons_js += f"      ]\n"
        
        lessons_js += f"    }},\n"
    
    lessons_js += f"  }},\n"

lessons_js += "};\n"

with open(os.path.join(output_dir, 'lessons.js'), 'w', encoding='utf-8') as f:
    f.write(lessons_js)

print("✓ lessons.js created")

# Generate index.html
print("Generating index.html...")

index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Customs Valuation I - Learning Path</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    * {{ font-family: 'Inter', sans-serif; }}
    
    body {{
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }}

    body.dark-mode {{
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }}

    .path-container {{
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }}

    .topic-node {{
      position: relative;
      margin: 3rem 0;
      animation: fadeIn 0.5s ease-out;
    }}

    @keyframes fadeIn {{
      from {{ opacity: 0; transform: translateY(20px); }}
      to {{ opacity: 1; transform: translateY(0); }}
    }}

    .topic-card {{
      background: white;
      border-radius: 1.5rem;
      padding: 1.5rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      transition: all 0.3s;
      cursor: pointer;
    }}

    body.dark-mode .topic-card {{
      background: #1e293b;
    }}

    .topic-card:hover {{
      transform: translateY(-4px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    }}

    .topic-card.locked {{
      opacity: 0.6;
      cursor: not-allowed;
    }}

    .topic-card.locked:hover {{
      transform: none;
    }}

    .step-dot {{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transition: all 0.3s;
    }}

    .step-dot.completed {{
      background: #10b981;
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    }}

    .step-dot.current {{
      background: #3b82f6;
      animation: pulse 2s infinite;
    }}

    .step-dot.locked {{
      background: #cbd5e1;
    }}

    @keyframes pulse {{
      0%, 100% {{ transform: scale(1); opacity: 1; }}
      50% {{ transform: scale(1.2); opacity: 0.8; }}
    }}

    .streak-flame {{
      animation: flicker 1.5s infinite;
    }}

    @keyframes flicker {{
      0%, 100% {{ transform: scale(1); }}
      50% {{ transform: scale(1.1); }}
    }}

    @keyframes successPop {{
      0% {{ transform: scale(0.8); opacity: 0; }}
      50% {{ transform: scale(1.1); }}
      100% {{ transform: scale(1); opacity: 1; }}
    }}

    @keyframes errorShake {{
      0%, 100% {{ transform: translateX(0); }}
      25% {{ transform: translateX(-10px); }}
      75% {{ transform: translateX(10px); }}
    }}

    @keyframes confetti-fall {{
      0% {{ transform: translateY(-100vh) rotate(0deg); opacity: 1; }}
      100% {{ transform: translateY(100vh) rotate(720deg); opacity: 0; }}
    }}

    .success-animation {{
      animation: successPop 0.5s ease-out;
    }}

    .error-animation {{
      animation: errorShake 0.5s ease-out;
    }}

    .confetti {{
      position: fixed;
      width: 10px;
      height: 10px;
      z-index: 9999;
      pointer-events: none;
    }}
  </style>
</head>
<body>

  <!-- Header -->
  <header class="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <h1 class="text-white font-bold text-lg">Customs Valuation I</h1>
      </div>
      <div class="flex items-center gap-3">
        <!-- Hearts -->
        <div class="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span class="text-xl">❤️</span>
          <span class="text-white font-bold" id="hearts-count">5</span>
        </div>
        <!-- Streak -->
        <div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span class="text-2xl streak-flame">🔥</span>
          <span class="text-white font-bold" id="streak-count">0</span>
        </div>
        <!-- XP -->
        <div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span class="text-xl">⭐</span>
          <span class="text-white font-bold" id="xp-count">0</span>
        </div>
        <!-- Theme Toggle -->
        <button id="theme-toggle" class="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all">
          <svg id="sun-icon" class="w-5 h-5 text-white hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="moon-icon" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Path -->
  <div class="path-container" id="path-container">
    <!-- Topics will be rendered here -->
  </div>

  <!-- Topic Modal -->
  <div id="topic-modal" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex items-start justify-between mb-6">
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2" id="modal-title"></h2>
            <p class="text-slate-600 dark:text-slate-400 mb-3" id="modal-subtitle"></p>
            <div class="flex items-center gap-3">
              <div class="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div id="modal-progress-bar" class="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500" style="width: 0%"></div>
              </div>
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-300" id="modal-progress-text">0/6</span>
            </div>
          </div>
          <button id="close-modal" class="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all ml-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Steps Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="steps-grid">
          <!-- Steps will be rendered here -->
        </div>
      </div>
    </div>
  </div>

  <!-- Lesson Screen -->
  <div id="lesson-screen" class="hidden fixed inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 z-50 overflow-y-auto">
    <div class="min-h-screen flex flex-col">
      <div class="bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-3">
        <div class="max-w-4xl mx-auto flex items-center justify-between">
          <button id="exit-lesson" class="p-2 hover:bg-white/20 rounded-lg transition-all">
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div class="flex-1 mx-4">
            <div class="h-3 bg-white/20 rounded-full overflow-hidden">
              <div id="lesson-progress-bar" class="h-full bg-white transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-white font-bold" id="lesson-hearts">❤️ 5</span>
          </div>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center p-4">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full" id="lesson-content">
          <!-- Dynamic lesson content -->
        </div>
      </div>
    </div>
  </div>

  <!-- Results Modal -->
  <div id="results-modal" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
      <div class="text-6xl mb-4" id="results-icon">🎉</div>
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2" id="results-title">Great Job!</h2>
      <p class="text-slate-600 dark:text-slate-400 mb-6" id="results-message"></p>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
          <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400" id="results-xp">+100</div>
          <div class="text-xs text-slate-600 dark:text-slate-400">XP Earned</div>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
          <div class="text-2xl font-bold text-green-600 dark:text-green-400" id="results-accuracy">100%</div>
          <div class="text-xs text-slate-600 dark:text-slate-400">Accuracy</div>
        </div>
      </div>

      <button id="continue-btn" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
        Continue
      </button>
    </div>
  </div>

  <script src="data.js"></script>
  <script src="lessons.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""

with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_html)

print("✓ index.html created")

# Copy app.js from theory-of-taxation
print("Copying app.js...")
with open('theory-of-taxation/learning-path/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Update the localStorage key
app_js = app_js.replace("'theoryOfTaxationProgress'", "'historyOfTaxationProgress'")

with open(os.path.join(output_dir, 'app.js'), 'w', encoding='utf-8') as f:
    f.write(app_js)

print("✓ app.js created")

print("\n✅ Customs Valuation I Learning Path generated successfully!")
print(f"📁 Files created in: {output_dir}/")
print(f"📊 {len(topics)} units with {sum(len(u['lessons']) for u in data['units'])} total lessons")
print("\n🎯 Open customs-valuation-i/learning-path/index.html in a browser to start learning!")
