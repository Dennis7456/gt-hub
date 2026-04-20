#!/usr/bin/env python3
"""
Generate Theory of Taxation Tests
Converts theory_of_taxation_12_main_tests.json into test folders
"""

import json
import os

# Read the JSON file
print("Reading theory_of_taxation_12_main_tests.json...")
with open('assets/theory_of_taxation_12_main_tests.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Create output directory
output_dir = 'theory-of-taxation/tests'
os.makedirs(output_dir, exist_ok=True)

print(f"Generating {data['total_tests']} tests with {data['questions_per_test']} questions each...")

# Generate each test
for test in data['tests']:
    test_num = test['test_number']
    test_dir = os.path.join(output_dir, f'test-{test_num}')
    os.makedirs(test_dir, exist_ok=True)
    
    print(f"  Creating test-{test_num}...")
    
    # Generate index.html
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{test['title']}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * {{ font-family: 'Inter', sans-serif; }}
    
    body {{
      background: #f8fafc;
      color: #1e293b;
      transition: background 0.3s, color 0.3s;
    }}

    body.dark-mode {{
      background: #0f0f1a;
      color: #e2e8f0;
    }}

    .question-card {{
      transition: all 0.3s;
    }}

    .option-btn {{
      transition: all 0.2s;
    }}

    .option-btn:hover:not(.selected):not(.correct):not(.incorrect) {{
      background: #f1f5f9;
      border-color: #cbd5e1;
    }}

    body.dark-mode .option-btn:hover:not(.selected):not(.correct):not(.incorrect) {{
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }}

    .option-btn.selected {{
      background: #dbeafe;
      border-color: #3b82f6;
    }}

    body.dark-mode .option-btn.selected {{
      background: rgba(59, 130, 246, 0.2);
      border-color: #3b82f6;
    }}

    .option-btn.correct {{
      background: #dcfce7;
      border-color: #22c55e;
    }}

    body.dark-mode .option-btn.correct {{
      background: rgba(34, 197, 94, 0.2);
      border-color: #22c55e;
    }}

    .option-btn.incorrect {{
      background: #fee2e2;
      border-color: #ef4444;
    }}

    body.dark-mode .option-btn.incorrect {{
      background: rgba(239, 68, 68, 0.2);
      border-color: #ef4444;
    }}

    .header-light {{
      background: rgba(248, 250, 252, 0.8);
      border-bottom: 1px solid #e2e8f0;
    }}

    body.dark-mode .header-light {{
      background: rgba(15, 15, 26, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }}
  </style>
</head>
<body class="min-h-screen">

  <!-- Header -->
  <header class="header-light backdrop-blur-sm sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <div>
        <h1 class="text-base sm:text-lg font-semibold">Test {test_num}: Theory of Taxation</h1>
        <p class="text-xs text-slate-500 dark:text-slate-400">{test['question_count']} Questions · {test['time_limit_minutes']} Minutes</p>
      </div>
      <div class="flex items-center gap-3">
        <button id="theme-toggle" class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <svg id="sun-icon" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="moon-icon" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
        <div id="timer" class="text-sm font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white shadow-sm">
          {test['time_limit_minutes']}:00
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    
    <!-- Start Screen -->
    <div id="start-screen" class="text-center py-12">
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready to Start?</h2>
        <p class="text-slate-600 dark:text-slate-300 mb-6">
          This test contains {test['question_count']} multiple-choice questions on Theory of Taxation.
          You have {test['time_limit_minutes']} minutes to complete it.
        </p>
        <div class="text-left bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mb-6">
          <h3 class="font-semibold mb-2 text-slate-900 dark:text-white">Instructions:</h3>
          <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            {"".join(f'<li>• {instr}</li>' for instr in test['instructions'])}
          </ul>
        </div>
        <button id="start-btn" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
          Start Test
        </button>
      </div>
    </div>

    <!-- Results Screen -->
    <div id="results-screen" class="hidden mb-8">
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">Test Results</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400" id="correct-count">0</div>
            <div class="text-sm text-slate-600 dark:text-slate-400">Correct</div>
          </div>
          <div class="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <div class="text-3xl font-bold text-red-600 dark:text-red-400" id="incorrect-count">0</div>
            <div class="text-sm text-slate-600 dark:text-slate-400">Incorrect</div>
          </div>
          <div class="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
            <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400" id="score-percent">0%</div>
            <div class="text-sm text-slate-600 dark:text-slate-400">Score</div>
          </div>
        </div>
        <div class="flex gap-4 justify-center">
          <button id="review-btn" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all">
            Scroll to Questions
          </button>
          <button id="restart-btn" class="px-6 py-2.5 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-medium transition-all">
            Restart Test
          </button>
        </div>
      </div>
    </div>

    <!-- Questions Container -->
    <div id="questions-container" class="hidden space-y-6"></div>

    <!-- Submit Button -->
    <div id="submit-container" class="hidden mt-8 text-center">
      <button id="submit-btn" class="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold transition-all">
        Submit Test
      </button>
    </div>

  </main>

  <script src="questions.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""
    
    with open(os.path.join(test_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    # Generate questions.js
    questions_js = "const QUESTIONS = [\n"
    
    for q in test['questions']:
        # Convert options dict to array
        options = [q['options']['A'], q['options']['B'], q['options']['C'], q['options']['D']]
        correct_index = ['A', 'B', 'C', 'D'].index(q['correct_answer'])
        
        questions_js += "  {\n"
        questions_js += f"    id: {q['question_number']},\n"
        questions_js += f"    question: {json.dumps(q['question'])},\n"
        questions_js += f"    options: {json.dumps(options)},\n"
        questions_js += f"    correct: {correct_index}"
        
        if 'explanation' in q and q['explanation']:
            questions_js += f",\n    explanation: {json.dumps(q['explanation'])}\n"
        else:
            questions_js += "\n"
        
        questions_js += "  },\n"
    
    questions_js += "];\n"
    
    with open(os.path.join(test_dir, 'questions.js'), 'w', encoding='utf-8') as f:
        f.write(questions_js)
    
    # Generate app.js (same for all tests, just update time limit)
    app_js = f"""// State
let userAnswers = new Array(QUESTIONS.length).fill(null);
let testStarted = false;
let testSubmitted = false;
let timerInterval = null;
let timeRemaining = {test['time_limit_minutes']} * 60; // {test['time_limit_minutes']} minutes in seconds

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

// Initialize
function init() {{
  initTheme();
  renderQuestions();
}}

// Theme management
function initTheme() {{
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {{
    document.body.classList.add('dark-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }}
}}

function toggleTheme() {{
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  if (isDark) {{
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }} else {{
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }}
}}

// Timer
function startTimer() {{
  timerInterval = setInterval(() => {{
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {{
      clearInterval(timerInterval);
      submitTest(true); // Pass true to indicate auto-submit
    }}
  }}, 1000);
}}

function updateTimerDisplay() {{
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${{minutes}}:${{seconds.toString().padStart(2, '0')}}`;
  
  if (timeRemaining <= 300) {{ // 5 minutes
    timerDisplay.classList.remove('bg-indigo-600');
    timerDisplay.classList.add('bg-red-600', 'animate-pulse');
  }}
}}

// Render questions
function renderQuestions() {{
  questionsContainer.innerHTML = '';
  
  QUESTIONS.forEach((q, index) => {{
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 sm:p-6';
    questionCard.id = `question-${{index}}`;
    
    const questionHeader = document.createElement('div');
    questionHeader.className = 'flex items-start gap-3 mb-4';
    questionHeader.innerHTML = `
      <span class="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-semibold text-sm">
        ${{index + 1}}
      </span>
      <p class="flex-1 text-slate-800 dark:text-slate-200 font-medium">${{q.question}}</p>
    `;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'ml-11 space-y-2';
    
    q.options.forEach((option, optIndex) => {{
      const optionBtn = document.createElement('button');
      optionBtn.className = 'option-btn w-full text-left px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700';
      optionBtn.innerHTML = `
        <span class="font-medium text-slate-700 dark:text-slate-300">${{String.fromCharCode(65 + optIndex)}}.</span>
        <span class="ml-2 text-slate-600 dark:text-slate-400">${{option}}</span>
      `;
      
      optionBtn.addEventListener('click', () => selectAnswer(index, optIndex));
      optionsContainer.appendChild(optionBtn);
    }});
    
    questionCard.appendChild(questionHeader);
    questionCard.appendChild(optionsContainer);
    questionsContainer.appendChild(questionCard);
  }});
}}

// Select answer
function selectAnswer(questionIndex, optionIndex) {{
  if (testSubmitted) return;
  
  userAnswers[questionIndex] = optionIndex;
  
  const questionCard = document.getElementById(`question-${{questionIndex}}`);
  const options = questionCard.querySelectorAll('.option-btn');
  
  options.forEach((btn, idx) => {{
    btn.classList.remove('selected');
    if (idx === optionIndex) {{
      btn.classList.add('selected');
    }}
  }});
}}

// Start test
function startTest() {{
  testStarted = true;
  startScreen.classList.add('hidden');
  questionsContainer.classList.remove('hidden');
  submitContainer.classList.remove('hidden');
  startTimer();
}}

// Submit test
function submitTest(autoSubmit = false) {{
  if (testSubmitted) return;
  
  const unanswered = userAnswers.filter(a => a === null).length;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeRemainingStr = `${{minutes}}:${{seconds.toString().padStart(2, '0')}}`;
  
  if (unanswered > 0 && !autoSubmit) {{
    const confirm = window.confirm(`You have ${{unanswered}} unanswered question(s) and ${{timeRemainingStr}} remaining. Are you sure you want to submit?`);
    if (!confirm) return;
  }}
  
  testSubmitted = true;
  clearInterval(timerInterval);
  
  if (autoSubmit) {{
    alert('Time is up! Your test has been automatically submitted.');
  }}
  
  showResults();
}}

// Show results
function showResults() {{
  let correct = 0;
  let incorrect = 0;
  
  QUESTIONS.forEach((q, index) => {{
    const questionCard = document.getElementById(`question-${{index}}`);
    const options = questionCard.querySelectorAll('.option-btn');
    
    options.forEach((btn, optIndex) => {{
      btn.disabled = true;
      
      if (optIndex === q.correct) {{
        btn.classList.add('correct');
        // Add explanation if available
        if (q.explanation && userAnswers[index] !== q.correct) {{
          const explanationDiv = document.createElement('div');
          explanationDiv.className = 'mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-slate-700 dark:text-slate-300';
          explanationDiv.innerHTML = `<strong>Explanation:</strong> ${{q.explanation}}`;
          questionCard.appendChild(explanationDiv);
        }}
      }}
      
      if (userAnswers[index] === optIndex && optIndex !== q.correct) {{
        btn.classList.add('incorrect');
      }}
    }});
    
    if (userAnswers[index] === q.correct) {{
      correct++;
    }} else if (userAnswers[index] !== null) {{
      incorrect++;
    }}
  }});
  
  const scorePercent = Math.round((correct / QUESTIONS.length) * 100);
  
  document.getElementById('correct-count').textContent = correct;
  document.getElementById('incorrect-count').textContent = incorrect;
  document.getElementById('score-percent').textContent = `${{scorePercent}}%`;
  
  // Keep questions visible and show results at the top
  submitContainer.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  // Scroll to results
  resultsScreen.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
}}

// Review answers
function reviewAnswers() {{
  questionsContainer.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
}}

// Restart test
function restartTest() {{
  userAnswers = new Array(QUESTIONS.length).fill(null);
  testStarted = false;
  testSubmitted = false;
  timeRemaining = {test['time_limit_minutes']} * 60;
  clearInterval(timerInterval);
  
  timerDisplay.textContent = '{test['time_limit_minutes']}:00';
  timerDisplay.classList.remove('bg-red-600', 'animate-pulse');
  timerDisplay.classList.add('bg-indigo-600');
  
  resultsScreen.classList.add('hidden');
  questionsContainer.classList.add('hidden');
  submitContainer.classList.add('hidden');
  startScreen.classList.remove('hidden');
  
  renderQuestions();
  window.scrollTo({{ top: 0, behavior: 'smooth' }});
}}

// Event listeners
startBtn.addEventListener('click', startTest);
submitBtn.addEventListener('click', submitTest);
reviewBtn.addEventListener('click', reviewAnswers);
restartBtn.addEventListener('click', restartTest);
themeToggle.addEventListener('click', toggleTheme);

// Initialize
init();
"""
    
    with open(os.path.join(test_dir, 'app.js'), 'w', encoding='utf-8') as f:
        f.write(app_js)
    
    print(f"    ✓ test-{test_num} created ({test['question_count']} questions, {test['time_limit_minutes']} min)")

print(f"\n✅ All {data['total_tests']} tests generated successfully!")
print(f"📁 Tests created in: {output_dir}/")
print(f"📊 Total: {data['total_questions']} questions across {data['total_tests']} tests")
print("\n🎯 Tests ready to use - open any test-*/index.html in a browser")
