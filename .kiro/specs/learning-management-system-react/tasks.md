# Implementation Plan: Learning Management System (React + TypeScript)

## Overview

This implementation plan converts the LMS design into actionable coding tasks. The system will be built incrementally, starting with core infrastructure (authentication, routing, database), then content display (lessons, tests, flashcards), progress tracking, and finally polish (responsive design, accessibility, search). Each major section includes property-based tests to validate correctness properties from the design document.

## Tasks

- [x] 1. Project setup and core infrastructure
  - [x] 1.1 Initialize React + TypeScript + Vite project
    - Create new Vite project with React TypeScript template
    - Install dependencies: react-router-dom, @supabase/supabase-js, tailwindcss
    - Configure Tailwind CSS with base styles
    - Set up project directory structure (pages, components, services, types, context, hooks, utils)
    - Create .env file template for Supabase credentials
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.2 Configure Supabase client and database schema
    - Create supabase.client.ts with Supabase initialization
    - Write SQL schema for users, lesson_progress, test_results, flashcard_progress tables
    - Add indexes for performance (user_id, module_id, test_id)
    - Document database setup instructions in README
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

  - [x] 1.3 Set up React Router with protected routes
    - Create App.tsx with router configuration
    - Define routes: /, /login, /register, /module/:moduleId, /module/:moduleId/lesson/:lessonId, /module/:moduleId/test/:testId, /module/:moduleId/flashcards, /search
    - Create ProtectedRoute component that checks authentication
    - Implement redirect logic for unauthenticated users
    - _Requirements: 2.5, 4.1, 4.5_

  - [x] 1.4 Create TypeScript type definitions
    - Define types in types/ directory: User, Module, Lesson, Test, Question, Flashcard, FlashcardSet, LessonProgress, TestResult, FlashcardProgress, OverallProgress
    - Export all types from types/index.ts
    - _Requirements: 1.2_

- [x] 2. Authentication system
  - [x] 2.1 Implement AuthService with Supabase integration
    - Create auth.service.ts with register, login, logout, resetPassword, getCurrentUser, getSession methods
    - Implement email validation (regex pattern)
    - Implement password validation (minimum 8 characters)
    - Handle Supabase auth errors and map to user-friendly messages
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.6, 2.7_

  - [x] 2.2 Write property tests for authentication
    - **Property 1: User registration with valid credentials creates account**
    - **Validates: Requirements 2.1**
    - **Property 2: Valid credentials authenticate and create session**
    - **Validates: Requirements 2.2**
    - **Property 6: Invalid email formats are rejected**
    - **Validates: Requirements 2.6**
    - **Property 7: Short passwords are rejected**
    - **Validates: Requirements 2.7**

  - [x] 2.3 Create AuthContext for global authentication state
    - Create AuthContext.tsx with user state, session state, loading state
    - Implement useAuth hook for accessing auth context
    - Provide login, logout, register functions through context
    - Handle session persistence with localStorage
    - _Requirements: 3.1, 3.2_

  - [x] 2.4 Write property tests for session management
    - **Property 8: Session token storage after authentication**
    - **Validates: Requirements 3.1**
    - **Property 9: Valid session restoration**
    - **Validates: Requirements 3.2**
    - **Property 10: Expired session prompts re-authentication**
    - **Validates: Requirements 3.3**

  - [x] 2.5 Build LoginForm and RegisterForm components
    - Create LoginForm.tsx with email/password inputs, validation, error display
    - Create RegisterForm.tsx with email/password/confirmPassword inputs, validation
    - Add loading states during authentication
    - Display user-friendly error messages
    - Implement "Remember Me" checkbox for extended sessions
    - _Requirements: 2.1, 2.2, 2.6, 2.7, 3.4, 17.1_

  - [x] 2.6 Write property tests for authentication UI
    - **Property 5: Unauthenticated access redirects to login**
    - **Validates: Requirements 2.5**
    - **Property 11: Remember Me extends session duration**
    - **Validates: Requirements 3.4**

  - [x] 2.7 Create Login and Register pages
    - Create Login.tsx page with LoginForm and navigation to Register
    - Create Register.tsx page with RegisterForm and navigation to Login
    - Add password reset link on Login page
    - Style pages with Tailwind CSS
    - _Requirements: 2.1, 2.2, 2.3_

- [x] 3. Checkpoint - Authentication complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Content service and migration
  - [x] 4.1 Implement content parser utilities
    - Create contentParser.ts with functions to parse .txt, .js, and .json files
    - Implement parseLessonContent for reading lesson files
    - Implement parseTestQuestions for reading questions.js files
    - Implement parseFlashcards for reading cards.js files
    - Implement parseJSONContent for reading assets/*.json files
    - Handle all eight modules: clearance-one, customs-in-international-context, customs-valuation-i, wto-customs-valuation, history-of-taxation, theory-of-taxation, tax-and-customs-theory, eaccma
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.6_

  - [x] 4.2 Write property tests for content parsing
    - **Property 48: Content parser handles lesson files**
    - **Validates: Requirements 12.1**
    - **Property 49: Content parser handles test files**
    - **Validates: Requirements 12.2**
    - **Property 50: Content parser handles flashcard files**
    - **Validates: Requirements 12.3**
    - **Property 51: Content parser handles JSON files**
    - **Validates: Requirements 12.4**
    - **Property 52: Migrated content preserves structure**
    - **Validates: Requirements 12.5**

  - [x] 4.3 Create ContentService for loading content
    - Create content.service.ts with getModules, getModule, getLessons, getLesson, getTests, getTest, getFlashcards, searchContent methods
    - Implement caching strategy for loaded content
    - Use contentParser utilities to load and parse files
    - Return typed data models (Module, Lesson, Test, Flashcard)
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 15.3_

  - [x] 4.4 Write property tests for content service
    - **Property 15: Lesson selection loads content**
    - **Validates: Requirements 5.1**
    - **Property 27: Flashcard set loads all cards**
    - **Validates: Requirements 7.1**
    - **Property 58: Data caching for repeated requests**
    - **Validates: Requirements 15.3**

  - [x] 4.5 Create ContentContext for global content state
    - Create ContentContext.tsx with modules state, loading state, error state
    - Implement useContent hook for accessing content context
    - Load modules on context initialization
    - Provide content caching and error handling
    - _Requirements: 15.3, 17.3_

- [x] 5. Progress tracking system
  - [x] 5.1 Implement ProgressService with Supabase integration
    - Create progress.service.ts with markLessonComplete, saveTestResult, recordFlashcardReview, getLessonProgress, getTestResults, getFlashcardProgress, getOverallProgress methods
    - Implement database operations for lesson_progress, test_results, flashcard_progress tables
    - Handle offline queuing for failed operations
    - Implement automatic retry with exponential backoff
    - _Requirements: 8.1, 8.2, 9.1, 9.2, 9.3, 10.1, 10.2, 16.2, 16.3_

  - [x] 5.2 Write property tests for progress tracking
    - **Property 18: Lesson completion records progress**
    - **Validates: Requirements 5.5**
    - **Property 25: Test completion records progress**
    - **Validates: Requirements 6.7**
    - **Property 32: Flashcard review records progress**
    - **Validates: Requirements 7.6**
    - **Property 33: Lesson completion marks in database**
    - **Validates: Requirements 8.1**
    - **Property 37: Test completion saves score**
    - **Validates: Requirements 9.1**
    - **Property 38: Test completion saves timestamp**
    - **Validates: Requirements 9.2**
    - **Property 43: Flashcard review records in database**
    - **Validates: Requirements 10.1**

  - [x] 5.3 Create ProgressContext for global progress state
    - Create ProgressContext.tsx with progress state, sync status, loading state
    - Implement useProgress hook for accessing progress context
    - Load user progress on context initialization
    - Implement sync status indicator (syncing, synced, error)
    - Handle offline data queuing and synchronization
    - _Requirements: 16.1, 16.2, 16.3, 16.4_

  - [x] 5.4 Write property tests for offline sync
    - **Property 59: Offline data queuing**
    - **Validates: Requirements 16.2**
    - **Property 60: Connectivity restoration triggers sync**
    - **Validates: Requirements 16.3**
    - **Property 61: Sync status indicator displays**
    - **Validates: Requirements 16.4**

- [x] 6. Checkpoint - Core services complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7.  Dashboard and module navigation
  - [x] 7.1 Create Dashboard page with module grid
    - Create Dashboard.tsx with grid layout of all eight modules
    - Display module cards with name, icon, color, description
    - Show progress indicators for each module (lessons, tests, flashcards)
    - Implement navigation to module overview on card click
    - Add search bar in header
    - _Requirements: 4.2, 4.3, 4.4, 20.1_

  - [x] 7.2 Write property tests for module navigation
    - **Property 12: Module selection navigates to overview**
    - **Validates: Requirements 4.3**
    - **Property 13: Module progress indicators display**
    - **Validates: Requirements 4.4**
    - **Property 14: Deep linking to content works**
    - **Validates: Requirements 4.5**

  - [x] 7.3 Create ModuleOverview page
    - Create ModuleOverview.tsx displaying module details
    - Show module description and learning objectives
    - Display content counts (lessons, tests, flashcards)
    - Show user progress for each content type
    - Provide navigation links to lessons, tests, flashcards
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5_

  - [x] 7.4 Write property tests for module overview
    - **Property 72: Module navigation shows overview**
    - **Validates: Requirements 19.1**
    - **Property 73: Module overview displays content counts**
    - **Validates: Requirements 19.2**
    - **Property 74: Module overview displays user progress**
    - **Validates: Requirements 19.3**
    - **Property 75: Module overview provides navigation links**
    - **Validates: Requirements 19.4**
    - **Property 76: Module overview displays description and objectives**
    - **Validates: Requirements 19.5**

  - [x] 7.4 Create ProgressBar, ProgressStats, and ModuleProgress components
    - Create ProgressBar.tsx with visual progress indicator and percentage
    - Create ProgressStats.tsx displaying summary statistics
    - Create ModuleProgress.tsx with comprehensive progress view
    - Add color coding based on completion level
    - _Requirements: 8.2, 8.3, 8.4, 9.4, 9.5, 10.3, 10.4_

  - [x] 7.5 Write property tests for progress display
    - **Property 34: Lesson completion percentage calculation**
    - **Validates: Requirements 8.2**
    - **Property 35: Completed lessons show visual indicator**
    - **Validates: Requirements 8.3**
    - **Property 36: Module progress displays**
    - **Validates: Requirements 8.4**
    - **Property 40: Highest test score displays**
    - **Validates: Requirements 9.4**
    - **Property 41: Most recent test score displays**
    - **Validates: Requirements 9.5**
    - **Property 45: Total flashcards reviewed displays**
    - **Validates: Requirements 10.3**
    - **Property 46: Flashcard review percentage displays**
    - **Validates: Requirements 10.4**

- [x] 8. Lesson display and navigation
  - [x] 8.1 Create LessonContent component
    - Create LessonContent.tsx rendering lesson text with formatting
    - Support markdown-style formatting (bold, italic, lists, headings)
    - Handle embedded images and code blocks
    - Mark lesson as viewed on component mount
    - _Requirements: 5.1, 5.2_

  - [x] 8.2 Create LessonNavigation component
    - Create LessonNavigation.tsx with previous/next buttons
    - Display lesson progress indicator
    - Disable navigation during content loading
    - Show lesson title and position in learning path
    - _Requirements: 5.3, 5.4_

  - [x] 8.3 Create LessonProgress component
    - Create LessonProgress.tsx with visual progress bar
    - Display percentage completion
    - List completed vs remaining lessons
    - _Requirements: 5.4, 8.3, 8.4_

  - [x] 8.4 Create LessonPage
    - Create LessonPage.tsx integrating LessonContent, LessonNavigation, LessonProgress
    - Load lesson content from ContentService
    - Handle loading and error states
    - Mark lesson complete when user finishes reading
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 8.5 Write property tests for lesson display
    - **Property 16: Lesson navigation controls function**
    - **Validates: Requirements 5.3**
    - **Property 17: Lesson progress displays**
    - **Validates: Requirements 5.4**

- [x] 9. Checkpoint - Lesson system complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Test taking interface
  - [x] 10.1 Create QuestionCard component
    - Create QuestionCard.tsx displaying question and options
    - Highlight selected answer
    - Show correct/incorrect feedback when showFeedback is true
    - Display explanation after submission
    - Support keyboard navigation for answer selection
    - _Requirements: 6.1, 6.4, 6.6_

  - [x] 10.2 Create TestTimer component
    - Create TestTimer.tsx with countdown timer
    - Auto-submit test when time reaches zero
    - Show warning when time is low (< 2 minutes)
    - Support pause/resume functionality
    - Display time in MM:SS format
    - _Requirements: 6.2, 6.3_

  - [x] 10.3 Create TestResults component
    - Create TestResults.tsx displaying score and percentage
    - Show correct answers with explanations
    - Highlight user's incorrect answers
    - Provide "Retake Test" button
    - Display test completion timestamp
    - _Requirements: 6.5, 6.6, 9.6_

  - [x] 10.4 Create AnswerFeedback component
    - Create AnswerFeedback.tsx showing correct/incorrect status
    - Display explanation text
    - Use color coding (green for correct, red for incorrect)
    - _Requirements: 6.6_

  - [x] 10.5 Create TestPage
    - Create TestPage.tsx integrating QuestionCard, TestTimer, TestResults
    - Load test questions from ContentService
    - Manage test state (answers, time remaining, submitted)
    - Implement confirmation dialog before submission
    - Save test results to ProgressService on submission
    - Calculate score based on correct answers
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8_

  - [x] 10.6 Write property tests for test interface
    - **Property 19: Test displays all questions**
    - **Validates: Requirements 6.1**
    - **Property 20: Test starts countdown timer**
    - **Validates: Requirements 6.2**
    - **Property 21: Timer expiration auto-submits test**
    - **Validates: Requirements 6.3**
    - **Property 22: Answer selection is recorded**
    - **Validates: Requirements 6.4**
    - **Property 23: Test submission calculates and displays score**
    - **Validates: Requirements 6.5**
    - **Property 24: Test submission shows correct answers**
    - **Validates: Requirements 6.6**
    - **Property 26: Test submission requires confirmation**
    - **Validates: Requirements 6.8**
    - **Property 39: Test attempt history is maintained**
    - **Validates: Requirements 9.3**
    - **Property 42: Test retake is allowed**
    - **Validates: Requirements 9.6**

- [x] 11. Flashcard study interface
  - [x] 11.1 Create FlashcardCard component
    - Create FlashcardCard.tsx displaying front or back of card
    - Implement flip animation (CSS transform)
    - Support touch and click interactions
    - Add visual indicator for flipped state
    - _Requirements: 7.2_

  - [x] 11.2 Create FlashcardControls component
    - Create FlashcardControls.tsx with navigation buttons
    - Display card position (e.g., "5 / 50")
    - Add shuffle button to randomize order
    - Implement previous/next navigation
    - _Requirements: 7.3, 7.4, 7.5_

  - [x] 11.3 Create FlashcardDeck component
    - Create FlashcardDeck.tsx managing flashcard navigation
    - Track reviewed cards
    - Implement shuffle mode with randomization
    - Record progress to ProgressService
    - Handle keyboard navigation (arrow keys, space to flip)
    - _Requirements: 7.1, 7.3, 7.4, 7.5, 7.6_

  - [x] 11.4 Create FlashcardPage
    - Create FlashcardPage.tsx integrating FlashcardDeck, FlashcardCard, FlashcardControls
    - Load flashcards from ContentService
    - Handle loading and error states
    - Display flashcard topics if available
    - Save review progress on page unload
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [x] 11.5 Write property tests for flashcard interface
    - **Property 28: Flashcard click flips card**
    - **Validates: Requirements 7.2**
    - **Property 29: Flashcard navigation functions**
    - **Validates: Requirements 7.3**
    - **Property 30: Flashcard progress displays**
    - **Validates: Requirements 7.4**
    - **Property 31: Flashcard shuffle randomizes order**
    - **Validates: Requirements 7.5**
    - **Property 44: Flashcard review count increments**
    - **Validates: Requirements 10.2**

- [ ] 12. Checkpoint - Content display complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Search functionality
  - [x] 13.1 Implement search in ContentService
    - Add searchContent method to content.service.ts
    - Search across all modules, lessons, tests, flashcards
    - Return results with content type and module metadata
    - Implement text matching with highlighting
    - _Requirements: 20.2, 20.3, 20.5_

  - [x] 13.2 Create search results page
    - Create SearchPage.tsx displaying search results
    - Show content type and module indicators
    - Highlight search terms in results
    - Navigate to content on result selection
    - Handle empty results state
    - _Requirements: 20.2, 20.3, 20.4, 20.5_

  - [x] 13.3 Add search bar to navigation
    - Update Navigation.tsx with search input
    - Implement search on Enter key or button click
    - Navigate to search results page with query parameter
    - _Requirements: 20.1_

  - [x] 13.4 Write property tests for search
    - **Property 77: Search queries search all modules**
    - **Validates: Requirements 20.2**
    - **Property 78: Search results include metadata**
    - **Validates: Requirements 20.3**
    - **Property 79: Search result selection navigates to content**
    - **Validates: Requirements 20.4**
    - **Property 80: Search terms are highlighted in results**
    - **Validates: Requirements 20.5**

- [x] 14. Layout and common components
  - [x] 14.1 Create Navigation component
    - Create Navigation.tsx with module links and user menu
    - Display current user email
    - Add logout button
    - Include search bar
    - Implement responsive mobile menu
    - _Requirements: 14.2_

  - [x] 14.2 Create Header and Footer components
    - Create Header.tsx with app title and navigation
    - Create Footer.tsx with copyright and links
    - Style with Tailwind CSS
    - _Requirements: 14.2_

  - [x] 14.3 Create common UI components
    - Create Button.tsx with variants (primary, secondary, danger)
    - Create Card.tsx for content containers
    - Create Loading.tsx with spinner animation
    - Create ErrorBoundary.tsx for error handling
    - Ensure all components support keyboard navigation
    - _Requirements: 14.1, 14.3, 14.5, 18.1_

  - [x] 14.4 Write property tests for UI components
    - **Property 55: Loading states display during data fetching**
    - **Validates: Requirements 14.3**
    - **Property 56: Error messages display on operation failure**
    - **Validates: Requirements 14.4**

- [x] 15. Error handling and user feedback
  - [x] 15.1 Implement error handling utilities
    - Create error handling utilities in utils/errorHandlers.ts
    - Map error types to user-friendly messages
    - Implement retry logic with exponential backoff
    - Add error logging to console
    - Ensure no sensitive information in error messages
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_

  - [x] 15.2 Write property tests for error handling
    - **Property 62: Authentication errors show user-friendly messages**
    - **Validates: Requirements 17.1**
    - **Property 63: Network errors show retry option**
    - **Validates: Requirements 17.2**
    - **Property 64: Content loading failures show error state**
    - **Validates: Requirements 17.3**
    - **Property 65: Errors are logged to console**
    - **Validates: Requirements 17.4**
    - **Property 66: Error messages don't expose sensitive information**
    - **Validates: Requirements 17.5**

  - [x] 15.3 Add error boundaries to application
    - Wrap App.tsx with RootErrorBoundary
    - Add PageErrorBoundary to each page component
    - Add ComponentErrorBoundary to complex components (TestPage, FlashcardPage)
    - Display fallback UI with error message and reload button
    - _Requirements: 17.3_

- [x] 16. Responsive design and accessibility
  - [x] 16.1 Implement responsive layouts
    - Add responsive breakpoints to Tailwind config
    - Update all components with responsive classes
    - Test layouts at 320px, 768px, 1024px, 1440px, 2560px widths
    - Implement mobile-first CSS approach
    - Add touch-friendly controls for mobile (larger tap targets)
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

  - [x] 16.2 Write property tests for responsive design
    - **Property 53: Responsive rendering across screen sizes**
    - **Validates: Requirements 13.1**
    - **Property 54: Layout adaptation at breakpoints**
    - **Validates: Requirements 13.2**

  - [x] 16.3 Implement accessibility features
    - Add ARIA labels to all interactive elements without visible text
    - Use semantic HTML elements (header, nav, main, article, section, footer)
    - Ensure keyboard navigation works for all interactive elements
    - Test with screen reader (announce dynamic content changes)
    - Verify text contrast ratios meet WCAG AA standards (4.5:1)
    - Add focus indicators for keyboard navigation
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

  - [x] 16.4 Write property tests for accessibility
    - **Property 67: Keyboard navigation for interactive elements**
    - **Validates: Requirements 18.1**
    - **Property 68: Semantic HTML elements are used**
    - **Validates: Requirements 18.2**
    - **Property 69: ARIA labels for screen readers**
    - **Validates: Requirements 18.3**
    - **Property 70: Text contrast ratio meets accessibility standards**
    - **Validates: Requirements 18.4**
    - **Property 71: Dynamic content has screen reader announcements**
    - **Validates: Requirements 18.5**

- [x] 17. Theme support
  - [x] 17.1 Implement light and dark themes
    - Add theme toggle to Navigation component
    - Create theme context for global theme state
    - Define light and dark color schemes in Tailwind config
    - Apply theme classes to all components
    - Persist theme preference in localStorage
    - _Requirements: 14.6_

  - [x] 17.2 Write property tests for theme switching
    - **Property 57: Theme switching works**
    - **Validates: Requirements 14.6**

- [x] 18. Performance optimization
  - [x] 18.1 Implement code splitting and lazy loading
    - Use React.lazy() for page components
    - Implement Suspense boundaries with loading fallbacks
    - Split routes for optimal bundle size
    - Lazy load images with loading="lazy" attribute
    - _Requirements: 1.6, 15.2, 15.4_

  - [x] 18.2 Optimize assets and caching
    - Compress images and use appropriate formats (WebP)
    - Implement service worker for offline caching (optional)
    - Configure Vite build for optimal chunking
    - Add cache headers for static assets
    - _Requirements: 15.2, 15.3, 15.5_

  - [x] 18.3 Measure and optimize performance
    - Test page load times on standard broadband connection
    - Ensure pages load within 2 seconds
    - Use React DevTools Profiler to identify bottlenecks
    - Optimize re-renders with React.memo and useMemo
    - _Requirements: 15.1_

- [-] 19. Final integration and testing
  - [-] 19.1 Integration testing for user flows
    - Test complete user flow: register → login → view module → complete lesson → take test → review flashcards
    - Test progress tracking across all content types
    - Test offline mode and sync functionality
    - Test error recovery scenarios
    - _Requirements: All_

  - [ ] 19.2 Run all property-based tests
    - Execute full property test suite with 100 iterations per property
    - Verify all 80 correctness properties pass
    - Fix any failing properties
    - Document any known limitations

  - [ ] 19.3 Create documentation
    - Write README.md with setup instructions
    - Document environment variables
    - Add user guide for common tasks
    - Document database setup and migration
    - Add developer guide for contributing
    - _Requirements: All_

- [ ] 20. Final checkpoint - Application complete
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at major milestones
- Property tests validate universal correctness properties from the design document
- Unit tests (not listed as separate tasks) should be written alongside implementation
- The implementation assumes existing content files remain in their current locations
- Supabase credentials must be configured in .env file before running the application
- All 80 correctness properties from the design document are covered by property test tasks
