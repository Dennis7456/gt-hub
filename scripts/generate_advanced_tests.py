#!/usr/bin/env python3
"""Generate EACCMA advanced test files from JSON"""

import json
import os

def load_tests(filename):
    """Load tests from JSON file"""
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def generate_html(test_data, test_num):
    """Generate HTML file for a test"""
    test = test_data['tests'][test_num - 1]
    title = test['title']
    time_limit = test['time_limit_minutes']
    question_count = test['question_count']
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
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

    .difficulty-badge {{
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }}

    .difficulty-advanced {{
      background: rgba(239, 68, 68, 0.1);
      color: #dc2626;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }}

    body.dark-mode .difficulty-advanced {{
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
    }}
  </style>
</head>
<body class="min-h-screen">

  <header class="header-light backdrop-blur-sm sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <h1 class="text-base sm:text-lg font-semibold">{title}</h1>
          <span class="difficulty-badge difficulty-advanced">Advanced</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400">{question_count} Questions · {time_limit} Minutes</p>
      </div>
      <div class="flex items-center gap-3">
        <button id="theme-toggle" class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <svg id="sun-icon" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="moon-icon" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
        <div id="timer" class="text-sm font-semibold px-3 py-1.5 rounded-lg bg-red-600 text-white shadow-sm">
          {time_limit}:00
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    
    <div id="start-screen" class="text-center py-12">
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
        <div class="mb-4">
          <span class="difficulty-badge difficulty-advanced">Advanced Level</span>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready for the Challenge?</h2>
        <p class="text-slate-600 dark:text-slate-300 mb-6">
          This advanced test contains {question_count} challenging multiple-choice questions on EACCMA.
          You have {time_limit} minutes to complete it. Questions require deeper understanding and application of concepts.
        </p>
        <button id="start-btn" class="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold transition-all">
          Start Advanced Test
        </button>
      </div>
    </div>

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

    <div id="questions-container" class="hidden space-y-6"></div>

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
'''
    return html

def generate_questions_js(test_data, test_num):
    """Generate questions.js file for a test"""
    test = test_data['tests'][test_num - 1]
    questions = test['questions']
    
    js = 'const QUESTIONS = [\n'
    
    for q in questions:
        # Convert options dict to array
        options = [q['options']['A'], q['options']['B'], q['options']['C'], q['options']['D']]
        
        # Find correct answer index (A=0, B=1, C=2, D=3)
        correct_idx = ord(q['correct_answer']) - ord('A')
        
        # Escape quotes in strings
        question_text = q['question'].replace('\\', '\\\\').replace('"', '\\"')
        options_escaped = [opt.replace('\\', '\\\\').replace('"', '\\"') for opt in options]
        
        js += '  {\n'
        js += f'    id: {q["question_number"]},\n'
        js += f'    question: "{question_text}",\n'
        js += '    options: [\n'
        for opt in options_escaped:
            js += f'      "{opt}",\n'
        js += '    ],\n'
        js += f'    correct: {correct_idx}\n'
        js += '  },\n'
    
    js += '];\n'
    return js

def generate_app_js(time_limit):
    """Generate app.js file"""
    js = f'''// State
let userAnswers = new Array(QUESTIONS.length).fill(null);
let testStarted = false;
let testSubmitted = false;
let timerInterval = null;
let timeRemaining = {time_limit} * 60;

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

function init() {{
  initTheme();
  renderQuestions();
}}

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

function startTimer() {{
  timerInterval = setInterval(() => {{
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {{
      clearInterval(timerInterval);
      submitTest(true);
    }}
  }}, 1000);
}}

function updateTimerDisplay() {{
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${{minutes}}:${{seconds.toString().padStart(2, '0')}}`;
  
  if (timeRemaining <= 300) {{
    timerDisplay.classList.add('animate-pulse');
  }}
}}

function renderQuestions() {{
  questionsContainer.innerHTML = '';
  
  QUESTIONS.forEach((q, index) => {{
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 sm:p-6';
    questionCard.id = `question-${{index}}`;
    
    const questionHeader = document.createElement('div');
    questionHeader.className = 'flex items-start gap-3 mb-4';
    questionHeader.innerHTML = `
      <span class="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-semibold text-sm">
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

function startTest() {{
  testStarted = true;
  startScreen.classList.add('hidden');
  questionsContainer.classList.remove('hidden');
  submitContainer.classList.remove('hidden');
  startTimer();
}}

function submitTest(autoSubmit = false) {{
  if (testSubmitted) return;
  
  if (!autoSubmit) {{
    const unanswered = userAnswers.filter(a => a === null).length;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeStr = `${{minutes}}:${{seconds.toString().padStart(2, '0')}}`;
    
    let message = 'Are you sure you want to submit your test?\\n\\n';
    message += `Time remaining: ${{timeStr}}\\n`;
    message += `Unanswered questions: ${{unanswered}}`;
    
    const confirm = window.confirm(message);
    if (!confirm) return;
  }}
  
  testSubmitted = true;
  clearInterval(timerInterval);
  
  if (autoSubmit) {{
    alert('Time is up! Your test has been automatically submitted.');
  }}
  
  showResults();
}}

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
  
  submitContainer.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  resultsScreen.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
}}

function reviewAnswers() {{
  resultsScreen.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
}}

function restartTest() {{
  userAnswers = new Array(QUESTIONS.length).fill(null);
  testStarted = false;
  testSubmitted = false;
  timeRemaining = {time_limit} * 60;
  clearInterval(timerInterval);
  
  timerDisplay.textContent = '{time_limit}:00';
  timerDisplay.classList.remove('animate-pulse');
  
  resultsScreen.classList.add('hidden');
  questionsContainer.classList.add('hidden');
  submitContainer.classList.add('hidden');
  startScreen.classList.remove('hidden');
  
  renderQuestions();
  window.scrollTo({{ top: 0, behavior: 'smooth' }});
}}

startBtn.addEventListener('click', startTest);
submitBtn.addEventListener('click', submitTest);
reviewBtn.addEventListener('click', reviewAnswers);
restartBtn.addEventListener('click', restartTest);
themeToggle.addEventListener('click', toggleTheme);

init();
'''
    return js

def main():
    print("Loading EACCMA advanced tests from JSON...")
    test_data = load_tests('eaccma/eaccma_12_advanced_tests.json')
    
    # Create tests directory
    tests_dir = 'eaccma/tests'
    os.makedirs(tests_dir, exist_ok=True)
    
    print(f"Generating {test_data['total_tests']} advanced tests...")
    
    for i in range(1, test_data['total_tests'] + 1):
        test_dir = f'{tests_dir}/advanced-{i}'
        os.makedirs(test_dir, exist_ok=True)
        
        test = test_data['tests'][i - 1]
        time_limit = test['time_limit_minutes']
        
        # Generate files
        html = generate_html(test_data, i)
        questions_js = generate_questions_js(test_data, i)
        app_js = generate_app_js(time_limit)
        
        # Write files
        with open(f'{test_dir}/index.html', 'w', encoding='utf-8') as f:
            f.write(html)
        
        with open(f'{test_dir}/questions.js', 'w', encoding='utf-8') as f:
            f.write(questions_js)
        
        with open(f'{test_dir}/app.js', 'w', encoding='utf-8') as f:
            f.write(app_js)
        
        print(f"  ✓ Advanced Test {i}: {test['title']} ({test['question_count']} questions, {time_limit} min)")
    
    print(f"\nDone! Created {test_data['total_tests']} advanced tests in {tests_dir}/")

if __name__ == '__main__':
    main()
