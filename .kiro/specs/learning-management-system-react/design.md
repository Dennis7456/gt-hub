# Design Document: Learning Management System (React + TypeScript)

## Overview

This design document specifies the technical architecture for a modern learning management system built with React, TypeScript, and Supabase. The system replaces existing static HTML/JavaScript implementations while preserving all educational content across eight customs and taxation learning modules.

### System Goals

- Provide authenticated, personalized learning experiences
- Track user progress across lessons, tests, and flashcards
- Migrate existing content from static files to a dynamic React application
- Support responsive design for desktop, tablet, and mobile devices
- Enable fast, reliable content delivery with offline-capable features

### Technology Stack

- Frontend: React 18+ with TypeScript
- Build Tool: Vite
- Backend: Supabase (PostgreSQL database + Authentication)
- Styling: Tailwind CSS
- Routing: React Router v6
- State Management: React Context API + hooks
- Testing: Vitest + React Testing Library + fast-check (property-based testing)

### Modules

The system supports eight learning modules:
1. clearance-one
2. customs-in-international-context
3. customs-valuation-i
4. wto-customs-valuation
5. history-of-taxation
6. theory-of-taxation
7. tax-and-customs-theory
8. eaccma

Each module contains:
- Learning path with multiple lessons
- Multiple timed tests (typically 12 per module)
- Flashcard sets for memorization

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     React Application                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Pages      │  │  Components  │  │   Services   │      │
│  │              │  │              │  │              │      │
│  │ - Dashboard  │  │ - LessonView │  │ - AuthService│      │
│  │ - Module     │  │ - TestView   │  │ - ContentSvc │      │
│  │ - Lesson     │  │ - Flashcard  │  │ - ProgressSvc│      │
│  │ - Test       │  │ - Progress   │  │              │      │
│  │ - Flashcards │  │ - Navigation │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Context Providers                          │   │
│  │  - AuthContext  - ContentContext  - ProgressContext  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Supabase Backend                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Auth Service │  │  PostgreSQL  │  │  Storage     │      │
│  │              │  │   Database   │  │              │      │
│  │ - Register   │  │ - Users      │  │ - Assets     │      │
│  │ - Login      │  │ - Progress   │  │ - Content    │      │
│  │ - Session    │  │ - Tests      │  │              │      │
│  │ - Reset      │  │ - Flashcards │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Application Structure

```
src/
├── main.tsx                 # Application entry point
├── App.tsx                  # Root component with routing
├── pages/                   # Page-level components
│   ├── Dashboard.tsx        # Module selection dashboard
│   ├── ModuleOverview.tsx   # Module detail page
│   ├── LessonPage.tsx       # Lesson display page
│   ├── TestPage.tsx         # Test taking page
│   ├── FlashcardPage.tsx    # Flashcard study page
│   ├── Login.tsx            # Authentication page
│   └── Register.tsx         # Registration page
├── components/              # Reusable components
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ProtectedRoute.tsx
│   ├── lesson/
│   │   ├── LessonContent.tsx
│   │   ├── LessonNavigation.tsx
│   │   └── LessonProgress.tsx
│   ├── test/
│   │   ├── QuestionCard.tsx
│   │   ├── TestTimer.tsx
│   │   ├── TestResults.tsx
│   │   └── AnswerFeedback.tsx
│   ├── flashcard/
│   │   ├── FlashcardDeck.tsx
│   │   ├── FlashcardCard.tsx
│   │   └── FlashcardControls.tsx
│   ├── progress/
│   │   ├── ProgressBar.tsx
│   │   ├── ProgressStats.tsx
│   │   └── ModuleProgress.tsx
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Loading.tsx
│       └── ErrorBoundary.tsx
├── services/                # Business logic and API calls
│   ├── auth.service.ts      # Authentication operations
│   ├── content.service.ts   # Content loading and parsing
│   ├── progress.service.ts  # Progress tracking operations
│   └── supabase.client.ts   # Supabase client configuration
├── context/                 # React Context providers
│   ├── AuthContext.tsx      # Authentication state
│   ├── ContentContext.tsx   # Content loading state
│   └── ProgressContext.tsx  # Progress tracking state
├── types/                   # TypeScript type definitions
│   ├── auth.types.ts
│   ├── content.types.ts
│   ├── progress.types.ts
│   └── index.ts
├── utils/                   # Utility functions
│   ├── contentParser.ts     # Parse legacy content files
│   ├── validators.ts        # Input validation
│   └── formatters.ts        # Data formatting
└── hooks/                   # Custom React hooks
    ├── useAuth.ts
    ├── useProgress.ts
    └── useContent.ts
```

### Routing Structure

```
/                           → Dashboard (protected)
/login                      → Login page
/register                   → Register page
/module/:moduleId           → Module overview (protected)
/module/:moduleId/lesson/:lessonId  → Lesson page (protected)
/module/:moduleId/test/:testId      → Test page (protected)
/module/:moduleId/flashcards        → Flashcard page (protected)
/search                     → Search results (protected)
```

### State Management Strategy

The application uses React Context API for global state management:

1. **AuthContext**: Manages user authentication state, session tokens, and user profile
2. **ContentContext**: Manages loaded content, caching, and content parsing
3. **ProgressContext**: Manages user progress data, syncing with Supabase

Local component state is managed with useState and useReducer hooks for UI-specific concerns.

## Components and Interfaces

### Core Components

#### Authentication Components

**LoginForm**
- Props: `onSuccess: () => void, onError: (error: Error) => void`
- State: email, password, loading, error
- Validates email format and password length
- Calls AuthService.login()
- Redirects to dashboard on success

**RegisterForm**
- Props: `onSuccess: () => void, onError: (error: Error) => void`
- State: email, password, confirmPassword, loading, error
- Validates email format, password strength, password match
- Calls AuthService.register()
- Redirects to dashboard on success

**ProtectedRoute**
- Props: `children: ReactNode`
- Checks authentication status from AuthContext
- Redirects to /login if not authenticated
- Renders children if authenticated

#### Lesson Components

**LessonContent**
- Props: `lesson: Lesson, moduleId: string`
- Renders lesson text with proper formatting
- Supports markdown-style formatting
- Handles embedded images and lists
- Marks lesson as viewed on mount

**LessonNavigation**
- Props: `currentLessonId: string, lessons: Lesson[], moduleId: string`
- Displays previous/next lesson buttons
- Shows lesson progress indicator
- Disables navigation during content loading

**LessonProgress**
- Props: `completedLessons: string[], totalLessons: number`
- Displays visual progress bar
- Shows percentage completion
- Lists completed vs remaining lessons

#### Test Components

**QuestionCard**
- Props: `question: Question, onAnswer: (answerId: number) => void, selectedAnswer?: number, showFeedback: boolean`
- Displays question text and options
- Highlights selected answer
- Shows correct/incorrect feedback when showFeedback is true
- Displays explanation after submission

**TestTimer**
- Props: `duration: number, onTimeUp: () => void, isPaused: boolean`
- Displays countdown timer
- Auto-submits test when time reaches zero
- Shows warning when time is low (< 2 minutes)
- Supports pause/resume

**TestResults**
- Props: `score: number, totalQuestions: number, questions: Question[], userAnswers: number[]`
- Displays score and percentage
- Shows correct answers with explanations
- Highlights user's incorrect answers
- Provides option to retake test

#### Flashcard Components

**FlashcardDeck**
- Props: `flashcards: Flashcard[], moduleId: string, onComplete: () => void`
- Manages flashcard navigation
- Tracks reviewed cards
- Supports shuffle mode
- Records progress to database

**FlashcardCard**
- Props: `flashcard: Flashcard, isFlipped: boolean, onFlip: () => void`
- Displays front or back of card
- Animates flip transition
- Supports touch and click interactions

**FlashcardControls**
- Props: `currentIndex: number, total: number, onPrevious: () => void, onNext: () => void, onShuffle: () => void`
- Navigation buttons for deck
- Displays card position (e.g., "5 / 50")
- Shuffle button to randomize order

#### Progress Components

**ProgressBar**
- Props: `current: number, total: number, label?: string`
- Visual progress indicator
- Displays percentage
- Color-coded based on completion level

**ProgressStats**
- Props: `lessonsCompleted: number, testsCompleted: number, flashcardsReviewed: number, moduleId: string`
- Summary statistics for module
- Displays highest test scores
- Shows recent activity

**ModuleProgress**
- Props: `moduleId: string, progress: ModuleProgressData`
- Comprehensive module progress view
- Lesson completion list
- Test score history
- Flashcard review stats

### Service Interfaces

#### AuthService

```typescript
interface AuthService {
  register(email: string, password: string): Promise<User>;
  login(email: string, password: string): Promise<Session>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  getSession(): Promise<Session | null>;
}
```

#### ContentService

```typescript
interface ContentService {
  getModules(): Promise<Module[]>;
  getModule(moduleId: string): Promise<Module>;
  getLessons(moduleId: string): Promise<Lesson[]>;
  getLesson(moduleId: string, lessonId: string): Promise<Lesson>;
  getTests(moduleId: string): Promise<Test[]>;
  getTest(moduleId: string, testId: string): Promise<Test>;
  getFlashcards(moduleId: string): Promise<Flashcard[]>;
  searchContent(query: string): Promise<SearchResult[]>;
}
```

#### ProgressService

```typescript
interface ProgressService {
  markLessonComplete(userId: string, moduleId: string, lessonId: string): Promise<void>;
  saveTestResult(userId: string, moduleId: string, testId: string, score: number, totalQuestions: number): Promise<void>;
  recordFlashcardReview(userId: string, moduleId: string, flashcardSetId: string, cardsReviewed: number): Promise<void>;
  getLessonProgress(userId: string, moduleId: string): Promise<LessonProgress[]>;
  getTestResults(userId: string, moduleId: string): Promise<TestResult[]>;
  getFlashcardProgress(userId: string, moduleId: string): Promise<FlashcardProgress>;
  getOverallProgress(userId: string): Promise<OverallProgress>;
}
```

## Data Models

### User Model

```typescript
interface User {
  id: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
```

### Module Model

```typescript
interface Module {
  id: string;
  name: string;
  displayName: string;
  description: string;
  icon: string;
  color: string;
  lessonCount: number;
  testCount: number;
  flashcardCount: number;
}
```

### Lesson Model

```typescript
interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  order: number;
  estimatedMinutes: number;
}
```

### Test Model

```typescript
interface Test {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number; // in seconds
  questions: Question[];
  passingScore: number;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number; // index of correct answer
  explanation?: string;
}
```

### Flashcard Model

```typescript
interface Flashcard {
  id: number;
  front: string;
  back: string;
  topic?: string;
}

interface FlashcardSet {
  moduleId: string;
  cards: Flashcard[];
  topics?: FlashcardTopic[];
}

interface FlashcardTopic {
  id: number;
  label: string;
  range: [number, number]; // [startId, endId]
}
```

### Progress Models

```typescript
interface LessonProgress {
  id: string;
  user_id: string;
  module_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: Date | null;
}

interface TestResult {
  id: string;
  user_id: string;
  module_id: string;
  test_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  completed_at: Date;
}

interface FlashcardProgress {
  id: string;
  user_id: string;
  module_id: string;
  flashcard_set_id: string;
  cards_reviewed: number;
  total_cards: number;
  last_reviewed_at: Date;
}

interface OverallProgress {
  userId: string;
  modules: {
    [moduleId: string]: {
      lessonsCompleted: number;
      totalLessons: number;
      testsCompleted: number;
      totalTests: number;
      highestScores: { [testId: string]: number };
      flashcardsReviewed: number;
      totalFlashcards: number;
    };
  };
}
```

### Database Schema

#### users table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### lesson_progress table
```sql
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id, lesson_id)
);

CREATE INDEX idx_lesson_progress_user ON lesson_progress(user_id);
CREATE INDEX idx_lesson_progress_module ON lesson_progress(module_id);
```

#### test_results table
```sql
CREATE TABLE test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  test_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_test_results_user ON test_results(user_id);
CREATE INDEX idx_test_results_module ON test_results(module_id);
CREATE INDEX idx_test_results_test ON test_results(test_id);
```

#### flashcard_progress table
```sql
CREATE TABLE flashcard_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  flashcard_set_id TEXT NOT NULL,
  cards_reviewed INTEGER DEFAULT 0,
  total_cards INTEGER NOT NULL,
  last_reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id, flashcard_set_id)
);

CREATE INDEX idx_flashcard_progress_user ON flashcard_progress(user_id);
CREATE INDEX idx_flashcard_progress_module ON flashcard_progress(module_id);
```

### Content Migration Strategy

The ContentService will parse existing content files:

1. **Lessons**: Read from `.txt` files and `data.js` files, extract text content and metadata
2. **Tests**: Read from `questions.js` files, parse question arrays into Test objects
3. **Flashcards**: Read from `cards.js` files, parse card arrays into Flashcard objects
4. **JSON Content**: Read from `assets/*.json` files for newer structured content

Content will be loaded dynamically at runtime rather than stored in the database, keeping the database focused on user-generated data (progress, results).



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: User registration with valid credentials creates account

*For any* valid email address and password of at least 8 characters, when a user registers with these credentials, the Authentication_Service should successfully create a new user account.

**Validates: Requirements 2.1**

### Property 2: Valid credentials authenticate and create session

*For any* registered user with valid credentials, when the user logs in, the Authentication_Service should authenticate the user and create an active session.

**Validates: Requirements 2.2**

### Property 3: Password reset request triggers email

*For any* registered user email address, when a password reset is requested, the Authentication_Service should send a password reset email to that address.

**Validates: Requirements 2.3**

### Property 4: Logout terminates session

*For any* active user session, when the user logs out, the Authentication_Service should terminate that session and the user should no longer be authenticated.

**Validates: Requirements 2.4**

### Property 5: Unauthenticated access redirects to login

*For any* protected route, when an unauthenticated user attempts to access it, the Router should redirect the user to the login page.

**Validates: Requirements 2.5**

### Property 6: Invalid email formats are rejected

*For any* string that does not match valid email format, when a user attempts to register with it, the Authentication_Service should reject the registration.

**Validates: Requirements 2.6**

### Property 7: Short passwords are rejected

*For any* password string with fewer than 8 characters, when a user attempts to register with it, the Authentication_Service should reject the registration.

**Validates: Requirements 2.7**

### Property 8: Session token storage after authentication

*For any* successful authentication, the LMS_Application should store a session token in secure storage immediately after authentication completes.

**Validates: Requirements 3.1**

### Property 9: Valid session restoration

*For any* valid stored session token, when the user returns to the application, the LMS_Application should restore the session and authenticate the user without requiring re-login.

**Validates: Requirements 3.2**

### Property 10: Expired session prompts re-authentication

*For any* expired session token, when the user attempts to access the application, the LMS_Application should prompt the user to re-authenticate.

**Validates: Requirements 3.3**

### Property 11: Remember Me extends session duration

*For any* authentication with "Remember Me" enabled, the session duration should be longer than the session duration without "Remember Me" enabled.

**Validates: Requirements 3.4**

### Property 12: Module selection navigates to overview

*For any* module in the system, when a user selects that module, the Router should navigate to that module's overview page.

**Validates: Requirements 4.3**

### Property 13: Module progress indicators display

*For any* module with user progress data, the LMS_Application should display progress indicators showing completion status on the dashboard.

**Validates: Requirements 4.4**

### Property 14: Deep linking to content works

*For any* valid content URL (lesson, test, or flashcard), when a user navigates directly to that URL, the Router should load and display that specific content.

**Validates: Requirements 4.5**

### Property 15: Lesson selection loads content

*For any* lesson in any module, when a user selects that lesson, the Content_Parser should load and display the lesson content.

**Validates: Requirements 5.1**

### Property 16: Lesson navigation controls function

*For any* lesson in a learning path, the LMS_Application should provide working navigation controls to move to the previous and next lessons.

**Validates: Requirements 5.3**

### Property 17: Lesson progress displays

*For any* lesson in a learning path, the LMS_Application should display the user's progress within that learning path, showing which lessons are completed.

**Validates: Requirements 5.4**

### Property 18: Lesson completion records progress

*For any* lesson, when a user completes that lesson, the Progress_Tracker should record the completion in the database.

**Validates: Requirements 5.5**

### Property 19: Test displays all questions

*For any* test, when a user starts that test, the LMS_Application should display all questions belonging to that test.

**Validates: Requirements 6.1**

### Property 20: Test starts countdown timer

*For any* test with a duration, when the test starts, the LMS_Application should start a countdown timer from the test duration.

**Validates: Requirements 6.2**

### Property 21: Timer expiration auto-submits test

*For any* active test, when the countdown timer reaches zero, the LMS_Application should automatically submit the test.

**Validates: Requirements 6.3**

### Property 22: Answer selection is recorded

*For any* test question, when a user selects an answer, the LMS_Application should record that selection.

**Validates: Requirements 6.4**

### Property 23: Test submission calculates and displays score

*For any* test, when the user submits the test, the LMS_Application should calculate the score based on correct answers and display it to the user.

**Validates: Requirements 6.5**

### Property 24: Test submission shows correct answers

*For any* test, when the user submits the test, the LMS_Application should display the correct answers and explanations for all questions.

**Validates: Requirements 6.6**

### Property 25: Test completion records progress

*For any* test, when a user completes that test, the Progress_Tracker should record the completion and score in the database.

**Validates: Requirements 6.7**

### Property 26: Test submission requires confirmation

*For any* test, the LMS_Application should prevent submission until the user explicitly confirms they want to submit.

**Validates: Requirements 6.8**

### Property 27: Flashcard set loads all cards

*For any* flashcard set in a module, when a user selects that set, the LMS_Application should load all flashcards belonging to that set.

**Validates: Requirements 7.1**

### Property 28: Flashcard click flips card

*For any* flashcard, when a user clicks on it, the LMS_Application should flip the card to show the opposite side (front to back or back to front).

**Validates: Requirements 7.2**

### Property 29: Flashcard navigation functions

*For any* flashcard in a deck, the LMS_Application should provide working navigation controls to move to the previous and next flashcards.

**Validates: Requirements 7.3**

### Property 30: Flashcard progress displays

*For any* flashcard in a deck, the LMS_Application should display the current card position and total number of cards (e.g., "5 / 50").

**Validates: Requirements 7.4**

### Property 31: Flashcard shuffle randomizes order

*For any* flashcard deck, when the user activates shuffle, the LMS_Application should randomize the order of flashcards, producing a different sequence than the original order.

**Validates: Requirements 7.5**

### Property 32: Flashcard review records progress

*For any* flashcard, when a user reviews that flashcard, the Progress_Tracker should record the review in the database.

**Validates: Requirements 7.6**

### Property 33: Lesson completion marks in database

*For any* lesson, when a user completes that lesson, the Progress_Tracker should mark the lesson as complete in the Database_Service with a completion timestamp.

**Validates: Requirements 8.1**

### Property 34: Lesson completion percentage calculation

*For any* module with lessons, the Progress_Tracker should calculate the percentage of completed lessons as (completed_count / total_count) × 100.

**Validates: Requirements 8.2**

### Property 35: Completed lessons show visual indicator

*For any* completed lesson, the LMS_Application should display a visual indicator (such as a checkmark or different color) to distinguish it from incomplete lessons.

**Validates: Requirements 8.3**

### Property 36: Module progress displays

*For any* module, the LMS_Application should display the overall learning path progress showing completion status across all lessons.

**Validates: Requirements 8.4**

### Property 37: Test completion saves score

*For any* test, when a user completes that test, the Progress_Tracker should save the test score to the Database_Service.

**Validates: Requirements 9.1**

### Property 38: Test completion saves timestamp

*For any* test, when a user completes that test, the Progress_Tracker should save the completion timestamp to the Database_Service.

**Validates: Requirements 9.2**

### Property 39: Test attempt history is maintained

*For any* test, when a user takes that test multiple times, the Progress_Tracker should maintain a history of all attempts with their scores and timestamps.

**Validates: Requirements 9.3**

### Property 40: Highest test score displays

*For any* test with multiple attempts, the LMS_Application should display the highest score achieved across all attempts.

**Validates: Requirements 9.4**

### Property 41: Most recent test score displays

*For any* test with multiple attempts, the LMS_Application should display the score from the most recent attempt.

**Validates: Requirements 9.5**

### Property 42: Test retake is allowed

*For any* completed test, the LMS_Application should allow the user to retake that test, creating a new attempt.

**Validates: Requirements 9.6**

### Property 43: Flashcard review records in database

*For any* flashcard, when a user reviews that flashcard, the Progress_Tracker should record the review in the Database_Service.

**Validates: Requirements 10.1**

### Property 44: Flashcard review count increments

*For any* flashcard, when a user reviews that flashcard, the Progress_Tracker should increment the review count for that flashcard.

**Validates: Requirements 10.2**

### Property 45: Total flashcards reviewed displays

*For any* module with flashcards, the LMS_Application should display the total number of flashcards reviewed in that module.

**Validates: Requirements 10.3**

### Property 46: Flashcard review percentage displays

*For any* flashcard set, the LMS_Application should display the percentage of flashcards reviewed as (reviewed_count / total_count) × 100.

**Validates: Requirements 10.4**

### Property 47: Foreign key constraint enforcement

*For any* database record with a foreign key reference, the Database_Service should reject the record if the referenced record does not exist.

**Validates: Requirements 11.5**

### Property 48: Content parser handles lesson files

*For any* valid lesson content file (.txt or .js format), the Content_Parser should successfully parse the file and extract lesson content.

**Validates: Requirements 12.1**

### Property 49: Content parser handles test files

*For any* valid questions.js file, the Content_Parser should successfully parse the file and extract test questions with their options and correct answers.

**Validates: Requirements 12.2**

### Property 50: Content parser handles flashcard files

*For any* valid cards.js file, the Content_Parser should successfully parse the file and extract flashcard data with front and back content.

**Validates: Requirements 12.3**

### Property 51: Content parser handles JSON files

*For any* valid JSON content file in the assets directory, the Content_Parser should successfully parse the file and extract structured content.

**Validates: Requirements 12.4**

### Property 52: Migrated content preserves structure

*For any* content parsed from legacy files, the displayed content should maintain the same structure and information as the original file.

**Validates: Requirements 12.5**

### Property 53: Responsive rendering across screen sizes

*For any* screen width between 320px and 2560px, the LMS_Application should render without layout errors or horizontal scrolling.

**Validates: Requirements 13.1**

### Property 54: Layout adaptation at breakpoints

*For any* screen size change that crosses a responsive breakpoint, the LMS_Application should adapt the layout appropriately (e.g., switching from multi-column to single-column).

**Validates: Requirements 13.2**

### Property 55: Loading states display during data fetching

*For any* data fetching operation, the LMS_Application should display a loading state indicator while the operation is in progress.

**Validates: Requirements 14.3**

### Property 56: Error messages display on operation failure

*For any* failed operation (authentication, data loading, submission), the LMS_Application should display an error message explaining what went wrong.

**Validates: Requirements 14.4**

### Property 57: Theme switching works

*For any* theme (light or dark), when the user switches to that theme, the LMS_Application should apply the theme's color scheme to all components.

**Validates: Requirements 14.6**

### Property 58: Data caching for repeated requests

*For any* data that has been fetched once, when the same data is requested again within the cache validity period, the LMS_Application should return the cached data without making a new network request.

**Validates: Requirements 15.3**

### Property 59: Offline data queuing

*For any* progress update operation, if the Database_Service is unavailable, the LMS_Application should queue the data locally for later synchronization.

**Validates: Requirements 16.2**

### Property 60: Connectivity restoration triggers sync

*For any* queued data, when network connectivity is restored, the LMS_Application should automatically synchronize the queued data to the Database_Service.

**Validates: Requirements 16.3**

### Property 61: Sync status indicator displays

*For any* data synchronization operation, the LMS_Application should display a sync status indicator showing whether data is syncing, synced, or has sync errors.

**Validates: Requirements 16.4**

### Property 62: Authentication errors show user-friendly messages

*For any* authentication error (invalid credentials, network error, server error), the LMS_Application should display a user-friendly error message without exposing technical details.

**Validates: Requirements 17.1**

### Property 63: Network errors show retry option

*For any* network error during an operation, the LMS_Application should display a retry button allowing the user to attempt the operation again.

**Validates: Requirements 17.2**

### Property 64: Content loading failures show error state

*For any* content loading failure, the LMS_Application should display an error state with a reload button to retry loading the content.

**Validates: Requirements 17.3**

### Property 65: Errors are logged to console

*For any* error that occurs in the application, the LMS_Application should log the error details to the browser console for debugging purposes.

**Validates: Requirements 17.4**

### Property 66: Error messages don't expose sensitive information

*For any* error message displayed to users, the message should not contain sensitive information such as database queries, API keys, or internal system paths.

**Validates: Requirements 17.5**

### Property 67: Keyboard navigation for interactive elements

*For any* interactive element (button, link, input), the element should be accessible via keyboard navigation (Tab key) and activatable via keyboard (Enter or Space).

**Validates: Requirements 18.1**

### Property 68: Semantic HTML elements are used

*For any* page or component, the HTML structure should use semantic elements (header, nav, main, article, section, footer) rather than generic div elements where appropriate.

**Validates: Requirements 18.2**

### Property 69: ARIA labels for screen readers

*For any* interactive element without visible text, the element should have an appropriate ARIA label or aria-label attribute for screen reader users.

**Validates: Requirements 18.3**

### Property 70: Text contrast ratio meets accessibility standards

*For any* text element, the contrast ratio between the text color and background color should be at least 4.5:1 for normal text or 3:1 for large text.

**Validates: Requirements 18.4**

### Property 71: Dynamic content has screen reader announcements

*For any* dynamic content change (loading completion, error display, success message), the change should be announced to screen readers via ARIA live regions.

**Validates: Requirements 18.5**

### Property 72: Module navigation shows overview

*For any* module, when a user navigates to that module, the LMS_Application should display the module overview page with module information.

**Validates: Requirements 19.1**

### Property 73: Module overview displays content counts

*For any* module overview page, the page should display the number of lessons, tests, and flashcards available in that module.

**Validates: Requirements 19.2**

### Property 74: Module overview displays user progress

*For any* module overview page, the page should display the user's progress for lessons, tests, and flashcards in that module.

**Validates: Requirements 19.3**

### Property 75: Module overview provides navigation links

*For any* module overview page, the page should provide navigation links to access the lessons, tests, and flashcards in that module.

**Validates: Requirements 19.4**

### Property 76: Module overview displays description and objectives

*For any* module overview page, the page should display the module description and learning objectives.

**Validates: Requirements 19.5**

### Property 77: Search queries search all modules

*For any* search query entered by the user, the LMS_Application should search across all modules, lessons, tests, and flashcards for matching content.

**Validates: Requirements 20.2**

### Property 78: Search results include metadata

*For any* search result, the result should include metadata indicating the content type (lesson, test, or flashcard) and the module it belongs to.

**Validates: Requirements 20.3**

### Property 79: Search result selection navigates to content

*For any* search result, when the user selects that result, the Router should navigate to the corresponding content page.

**Validates: Requirements 20.4**

### Property 80: Search terms are highlighted in results

*For any* search result, the search terms should be highlighted or emphasized in the result text to show where the match occurred.

**Validates: Requirements 20.5**



## Error Handling

### Error Categories

The application handles four main categories of errors:

1. **Authentication Errors**: Invalid credentials, expired sessions, registration failures
2. **Network Errors**: Connection failures, timeouts, server unavailability
3. **Content Errors**: Missing files, parse failures, invalid content format
4. **Data Errors**: Database constraint violations, invalid input, sync failures

### Error Handling Strategy

#### Authentication Errors

- Display user-friendly messages without exposing security details
- Provide clear next steps (e.g., "Check your email and password" or "Try resetting your password")
- Log detailed error information to console for debugging
- Redirect to login page when session expires
- Clear invalid session tokens from storage

#### Network Errors

- Display retry buttons for failed operations
- Implement exponential backoff for automatic retries
- Queue data locally when offline
- Show sync status indicators
- Provide offline mode for viewing cached content

#### Content Errors

- Display error state with reload button
- Fall back to cached content if available
- Log parse errors with file information
- Provide helpful error messages for missing content
- Gracefully degrade when optional content is unavailable

#### Data Errors

- Validate input before submission
- Display field-specific validation errors
- Handle database constraint violations gracefully
- Provide clear error messages for invalid data
- Prevent data loss by queuing failed operations

### Error Boundaries

React Error Boundaries wrap major sections of the application:

- **RootErrorBoundary**: Catches errors in the entire application
- **PageErrorBoundary**: Catches errors within individual pages
- **ComponentErrorBoundary**: Catches errors in complex components (tests, flashcards)

Error boundaries display fallback UI and log errors for debugging.

### Error Logging

All errors are logged with:
- Error type and message
- Stack trace
- User context (authenticated user ID, current route)
- Timestamp
- Browser and device information

Logs are written to the browser console in development and can be sent to an error tracking service in production.

### User Feedback

Error messages follow these principles:
- **Clear**: Explain what went wrong in plain language
- **Actionable**: Tell users what they can do to resolve the issue
- **Non-technical**: Avoid jargon and technical details
- **Secure**: Never expose sensitive information
- **Helpful**: Provide links to help documentation when appropriate

## Testing Strategy

### Testing Approach

The application uses a dual testing approach combining unit tests and property-based tests:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs

Both testing approaches are complementary and necessary for comprehensive coverage. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Testing Tools

- **Test Runner**: Vitest
- **Component Testing**: React Testing Library
- **Property-Based Testing**: fast-check
- **Mocking**: Vitest mocks for Supabase client and external dependencies
- **Coverage**: Vitest coverage with c8

### Unit Testing Strategy

Unit tests focus on:

1. **Component Rendering**: Verify components render correctly with various props
2. **User Interactions**: Test button clicks, form submissions, navigation
3. **Edge Cases**: Empty states, loading states, error states
4. **Integration Points**: Component interactions, context providers, service calls
5. **Error Conditions**: Invalid input, network failures, authentication errors

Example unit test structure:

```typescript
describe('LoginForm', () => {
  it('should display validation error for invalid email', () => {
    // Specific example of invalid email
  });

  it('should call onSuccess when login succeeds', () => {
    // Specific example of successful login
  });

  it('should display error message when login fails', () => {
    // Specific example of failed login
  });
});
```

### Property-Based Testing Strategy

Property tests verify universal properties using fast-check to generate random test inputs. Each property test:

- Runs a minimum of 100 iterations with randomized inputs
- References the corresponding design document property
- Uses the tag format: `Feature: learning-management-system-react, Property {number}: {property_text}`

Example property test structure:

```typescript
import fc from 'fast-check';

describe('Authentication Properties', () => {
  it('Property 1: User registration with valid credentials creates account', () => {
    // Feature: learning-management-system-react, Property 1: User registration with valid credentials creates account
    fc.assert(
      fc.property(
        fc.emailAddress(),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (email, password) => {
          const result = await authService.register(email, password);
          expect(result).toBeDefined();
          expect(result.email).toBe(email);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 6: Invalid email formats are rejected', () => {
    // Feature: learning-management-system-react, Property 6: Invalid email formats are rejected
    fc.assert(
      fc.property(
        fc.string().filter(s => !isValidEmail(s)),
        fc.string({ minLength: 8 }),
        async (invalidEmail, password) => {
          await expect(
            authService.register(invalidEmail, password)
          ).rejects.toThrow();
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Property Test Generators

Custom generators for domain-specific data:

```typescript
// Generate valid lesson content
const lessonArbitrary = fc.record({
  id: fc.string(),
  moduleId: fc.constantFrom(...MODULE_IDS),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  content: fc.string({ minLength: 10, maxLength: 5000 }),
  order: fc.nat(),
  estimatedMinutes: fc.integer({ min: 1, max: 60 })
});

// Generate valid test questions
const questionArbitrary = fc.record({
  id: fc.nat(),
  question: fc.string({ minLength: 10, maxLength: 500 }),
  options: fc.array(fc.string({ minLength: 1, maxLength: 200 }), { minLength: 2, maxLength: 6 }),
  correct: fc.nat(),
  explanation: fc.option(fc.string({ minLength: 10, maxLength: 500 }))
}).filter(q => q.correct < q.options.length);

// Generate valid flashcards
const flashcardArbitrary = fc.record({
  id: fc.nat(),
  front: fc.string({ minLength: 5, maxLength: 500 }),
  back: fc.string({ minLength: 5, maxLength: 1000 }),
  topic: fc.option(fc.string())
});
```

### Test Organization

```
src/
├── __tests__/
│   ├── unit/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.test.tsx
│   │   │   │   └── RegisterForm.test.tsx
│   │   │   ├── lesson/
│   │   │   │   ├── LessonContent.test.tsx
│   │   │   │   └── LessonNavigation.test.tsx
│   │   │   ├── test/
│   │   │   │   ├── QuestionCard.test.tsx
│   │   │   │   └── TestTimer.test.tsx
│   │   │   └── flashcard/
│   │   │       ├── FlashcardCard.test.tsx
│   │   │       └── FlashcardDeck.test.tsx
│   │   ├── services/
│   │   │   ├── auth.service.test.ts
│   │   │   ├── content.service.test.ts
│   │   │   └── progress.service.test.ts
│   │   └── utils/
│   │       ├── contentParser.test.ts
│   │       └── validators.test.ts
│   └── properties/
│       ├── auth.properties.test.ts
│       ├── content.properties.test.ts
│       ├── progress.properties.test.ts
│       ├── navigation.properties.test.ts
│       ├── ui.properties.test.ts
│       └── accessibility.properties.test.ts
└── test-utils/
    ├── generators.ts          # fast-check generators
    ├── mocks.ts              # Mock data and services
    └── test-helpers.tsx      # Testing utilities
```

### Coverage Goals

- **Unit Test Coverage**: Minimum 80% line coverage for all services and utilities
- **Component Coverage**: Minimum 70% coverage for all components
- **Property Test Coverage**: All 80 correctness properties must have corresponding property tests
- **Integration Coverage**: All major user flows must have end-to-end tests

### Continuous Integration

Tests run automatically on:
- Every commit (unit tests only for speed)
- Every pull request (full test suite including property tests)
- Nightly builds (full test suite with extended property test iterations)

### Test Execution

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run property tests only
npm run test:properties

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Mocking Strategy

- **Supabase Client**: Mock all Supabase operations to avoid external dependencies
- **Content Files**: Mock file system access for content parsing tests
- **Browser APIs**: Mock localStorage, sessionStorage, and navigation APIs
- **Timers**: Use fake timers for testing time-dependent behavior (test timers, session expiration)

### Testing Best Practices

1. **Isolation**: Each test should be independent and not rely on other tests
2. **Clarity**: Test names should clearly describe what is being tested
3. **Simplicity**: Tests should be simple and focused on one behavior
4. **Speed**: Unit tests should run quickly; property tests can be slower
5. **Reliability**: Tests should not be flaky or dependent on timing
6. **Maintainability**: Tests should be easy to update when requirements change

### Property Test Configuration

Each property test must:
- Run at least 100 iterations (`{ numRuns: 100 }`)
- Include a comment tag referencing the design property
- Use appropriate fast-check generators for input data
- Verify the property holds for all generated inputs
- Handle async operations correctly

Example configuration:

```typescript
fc.assert(
  fc.property(
    // generators here
    async (input1, input2) => {
      // test logic here
    }
  ),
  { 
    numRuns: 100,
    verbose: true,
    seed: 42 // optional: for reproducible tests
  }
);
```

