#!/usr/bin/env python3
"""
Generate Article VII Valuation test HTML files from JSON data.
Creates 12 tests with 50 questions each.
"""

import json
from pathlib import Path

def load_tests_data(json_path):
    """Load test data from JSON file."""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def create_test_html(test_data, test_number, output_dir):
    """Create HTML file for a single test."""
    
    # Create test directory
    test_dir = Path(output_dir) / f'test-{test_number}'
    test_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate questions.js
    questions_js = f"""// {test_data['title']}
// Auto-generated from article_vii_valuation_12_main_tests.json

const questions = {json.dumps(test_data['questions'], indent=2, ensure_ascii=False)};

const testInfo = {{
  title: "{test_data['title']}",
  timeLimit: {test_data['time_limit_minutes']},
  totalQuestions: {test_data['question_count']},
  passingScore: 70
}};
"""
    
    with open(test_dir / 'questions.js', 'w', encoding='utf-8') as f:
        f.write(questions_js)
    
    # Generate app.js (same for all tests)
    app_js = """// Test Application Logic
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
    message += `\\n\\n${unanswered} question(s) are unanswered.`;
  }
  message += `\\n\\nTime remaining: ${timeLeft} minute(s)`;
  message += `\\n\\nAre you sure you want to submit?`;
  
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
"""
    
    with open(test_dir / 'app.js', 'w', encoding='utf-8') as f:
        f.write(app_js)
    
    # Generate index.html
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{test_data['title']}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
  <!-- Intro Screen -->
  <div id="intro-screen" class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
      <h1 id="test-title" class="text-3xl font-bold text-gray-800 mb-4"></h1>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h2 class="font-bold text-lg mb-2">Test Information</h2>
        <ul class="space-y-2">
          <li>📝 <strong>Questions:</strong> <span id="total-questions"></span></li>
          <li>⏱️ <strong>Time Limit:</strong> <span id="time-limit"></span> minutes</li>
          <li>✅ <strong>Passing Score:</strong> 70%</li>
          <li>💡 <strong>Format:</strong> Multiple choice</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <h2 class="font-bold text-lg mb-2">Instructions</h2>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Answer all questions to the best of your ability</li>
          <li>You can navigate between questions using Previous/Next buttons</li>
          <li>Review your answers before submitting</li>
          <li>The test will auto-submit when time expires</li>
        </ul>
      </div>
      
      <button id="start-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors">
        Start Test
      </button>
    </div>
  </div>

  <!-- Test Screen -->
  <div id="test-screen" class="hidden min-h-screen p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div class="flex justify-between items-center">
          <div>
            <span class="text-sm text-gray-600">Question </span>
            <span id="current-question" class="font-bold">1</span>
            <span class="text-sm text-gray-600"> of </span>
            <span id="question-progress" class="font-bold">50</span>
          </div>
          <div class="text-2xl font-bold" id="timer">45:00</div>
        </div>
        <div class="mt-2 bg-gray-200 rounded-full h-2">
          <div id="progress-bar" class="bg-blue-600 h-2 rounded-full transition-all" style="width: 0%"></div>
        </div>
      </div>

      <!-- Question -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div class="mb-4">
          <h2 id="question-number" class="text-xl font-bold text-gray-800 mb-2">Question 1</h2>
          <p id="question-topic" class="text-sm text-gray-600 mb-4">Topic: General</p>
          <p id="question-text" class="text-lg text-gray-700"></p>
        </div>
        
        <div id="options-container" class="space-y-3">
          <!-- Options will be inserted here -->
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between">
        <button id="prev-btn" onclick="previousQuestion()" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          ← Previous
        </button>
        <button id="next-btn" onclick="nextQuestion()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Next →
        </button>
      </div>
    </div>
  </div>

  <!-- Review Screen -->
  <div id="review-screen" class="hidden min-h-screen flex items-center justify-center p-4">
    <div class="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Review Your Answers</h2>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p class="mb-2">✓ <strong>Answered:</strong> <span id="answered-count">0</span> questions</p>
        <p>⚠️ <strong>Unanswered:</strong> <span id="unanswered-count">0</span> questions</p>
      </div>
      
      <div class="space-y-3">
        <button onclick="backToTest()" class="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg">
          ← Back to Test
        </button>
        <button onclick="confirmSubmit()" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
          Submit Test
        </button>
      </div>
    </div>
  </div>

  <!-- Results Screen -->
  <div id="results-screen" class="hidden min-h-screen p-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Test Results</h2>
        
        <div class="text-center mb-6">
          <div class="text-6xl font-bold text-gray-800 mb-2">
            <span id="final-score">0</span>/<span id="total-score">50</span>
          </div>
          <div class="text-4xl font-bold text-gray-600 mb-4">
            <span id="percentage">0</span>%
          </div>
          <div id="pass-status" class="text-2xl font-bold"></div>
        </div>
        
        <div class="text-center">
          <button onclick="retakeTest()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Retake Test
          </button>
        </div>
      </div>

      <!-- Detailed Results -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Detailed Results</h3>
        <div id="detailed-results" class="space-y-4">
          <!-- Results will be inserted here -->
        </div>
      </div>
    </div>
  </div>

  <script src="questions.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""
    
    with open(test_dir / 'index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"  ✓ Test {test_number}: {test_data['title']}")

def main():
    """Main function to generate all tests."""
    print("=" * 60)
    print("Generating Article VII Valuation Tests")
    print("=" * 60)
    
    # Load test data
    data = load_tests_data('assets/article_vii_valuation_12_main_tests.json')
    
    print(f"\nTotal tests: {data['total_tests']}")
    print(f"Questions per test: {data['questions_per_test']}")
    print(f"Total questions: {data['total_questions']}\n")
    
    # Create output directory
    output_dir = 'article-vii-valuation/tests'
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # Generate each test
    for test in data['tests']:
        create_test_html(test, test['test_number'], output_dir)
    
    print("\n" + "=" * 60)
    print("✓ All tests generated successfully!")
    print("=" * 60)
    print(f"\nTests created in: {output_dir}/")
    print("Open any test-X/index.html file in your browser to start.")

if __name__ == '__main__':
    main()
