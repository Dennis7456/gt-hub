-- Learning Management System Database Schema
-- This schema supports user authentication and progress tracking for eight learning modules

-- Enable UUID extension for generating unique identifiers
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- LESSON_PROGRESS TABLE
-- ============================================================================
-- Tracks user progress through learning path lessons in each module.
-- user_id references auth.users(id) directly — Supabase Auth is the source of
-- truth for users, so we don't need a separate public.users table.
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id, lesson_id)
);

-- Performance indexes for lesson_progress
CREATE INDEX idx_lesson_progress_user ON lesson_progress(user_id);
CREATE INDEX idx_lesson_progress_module ON lesson_progress(module_id);
CREATE INDEX idx_lesson_progress_user_module ON lesson_progress(user_id, module_id);

-- ============================================================================
-- TEST_RESULTS TABLE
-- ============================================================================
-- Stores test/quiz results for each user and module
CREATE TABLE test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  test_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Performance indexes for test_results
CREATE INDEX idx_test_results_user ON test_results(user_id);
CREATE INDEX idx_test_results_module ON test_results(module_id);
CREATE INDEX idx_test_results_test ON test_results(test_id);
CREATE INDEX idx_test_results_user_module ON test_results(user_id, module_id);
CREATE INDEX idx_test_results_user_test ON test_results(user_id, test_id);

-- ============================================================================
-- FLASHCARD_PROGRESS TABLE
-- ============================================================================
-- Tracks flashcard study progress for each user and module
CREATE TABLE flashcard_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  flashcard_set_id TEXT NOT NULL,
  cards_reviewed INTEGER DEFAULT 0,
  total_cards INTEGER NOT NULL,
  last_reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id, flashcard_set_id)
);

-- Performance indexes for flashcard_progress
CREATE INDEX idx_flashcard_progress_user ON flashcard_progress(user_id);
CREATE INDEX idx_flashcard_progress_module ON flashcard_progress(module_id);
CREATE INDEX idx_flashcard_progress_user_module ON flashcard_progress(user_id, module_id);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
-- Enable RLS on all tables to ensure users can only access their own data

ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_progress ENABLE ROW LEVEL SECURITY;

-- Lesson progress policies
CREATE POLICY "Users can view their own lesson progress"
  ON lesson_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own lesson progress"
  ON lesson_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lesson progress"
  ON lesson_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Test results policies
CREATE POLICY "Users can view their own test results"
  ON test_results FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own test results"
  ON test_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Flashcard progress policies
CREATE POLICY "Users can view their own flashcard progress"
  ON flashcard_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own flashcard progress"
  ON flashcard_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own flashcard progress"
  ON flashcard_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS AND TRIGGERS
-- ============================================================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to update updated_at on record modification
CREATE TRIGGER update_lesson_progress_updated_at
  BEFORE UPDATE ON lesson_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_flashcard_progress_updated_at
  BEFORE UPDATE ON flashcard_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
