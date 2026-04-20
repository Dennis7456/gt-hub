# Learning Management System - React + TypeScript

A modern learning management system built with React, TypeScript, Vite, and Supabase.

## Features

- User authentication (register, login, password reset)
- Eight learning modules covering customs and taxation topics
- Interactive lessons with progress tracking
- Timed tests with immediate feedback
- Flashcard study interface with flip animations
- Responsive design for desktop, tablet, and mobile
- Progress tracking across lessons, tests, and flashcards

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API + hooks
- **Testing**: Vitest + React Testing Library + fast-check

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available at https://supabase.com)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Set up the database:
   - See the [Database Setup](#database-setup) section below

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:5173 in your browser

## Project Structure

```
src/
├── pages/              # Page-level components
├── components/         # Reusable components
├── services/           # Business logic and API calls
├── context/            # React Context providers
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
└── utils/              # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Database Setup

The application uses Supabase (PostgreSQL) for data storage. Follow these steps to set up the database:

### 1. Create a Supabase Project

1. Go to https://supabase.com and sign up or log in
2. Click "New Project"
3. Fill in your project details:
   - Project name
   - Database password (save this securely)
   - Region (choose closest to your users)
4. Wait for the project to be provisioned (1-2 minutes)

### 2. Get Your API Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")
3. Add these to your `.env` file:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

### 3. Run the Database Schema

1. In your Supabase project dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `database/schema.sql` from this repository
4. Paste it into the SQL editor
5. Click "Run" to execute the schema

This will create:
- **users** table - User profiles
- **lesson_progress** table - Tracks completed lessons
- **test_results** table - Stores test scores and attempts
- **flashcard_progress** table - Tracks flashcard study sessions
- Performance indexes on user_id, module_id, and test_id
- Row Level Security (RLS) policies to protect user data
- Automatic timestamp update triggers

### 4. Verify the Setup

1. Go to **Table Editor** in your Supabase dashboard
2. You should see four tables: `users`, `lesson_progress`, `test_results`, `flashcard_progress`
3. Each table should have the appropriate columns and indexes

### Database Schema Overview

#### users
- `id` (UUID, primary key)
- `email` (text, unique)
- `created_at`, `updated_at` (timestamps)

#### lesson_progress
- `id` (UUID, primary key)
- `user_id` (UUID, foreign key to users)
- `module_id` (text) - e.g., "clearance-one"
- `lesson_id` (text) - e.g., "lesson-1"
- `completed` (boolean)
- `completed_at` (timestamp)
- Unique constraint on (user_id, module_id, lesson_id)

#### test_results
- `id` (UUID, primary key)
- `user_id` (UUID, foreign key to users)
- `module_id` (text)
- `test_id` (text)
- `score` (integer)
- `total_questions` (integer)
- `percentage` (decimal)
- `completed_at` (timestamp)

#### flashcard_progress
- `id` (UUID, primary key)
- `user_id` (UUID, foreign key to users)
- `module_id` (text)
- `flashcard_set_id` (text)
- `cards_reviewed` (integer)
- `total_cards` (integer)
- `last_reviewed_at` (timestamp)
- Unique constraint on (user_id, module_id, flashcard_set_id)

### Security

The database uses Row Level Security (RLS) to ensure:
- Users can only view and modify their own data
- All queries are automatically filtered by the authenticated user's ID
- No user can access another user's progress or test results

### Troubleshooting

**Error: "Missing Supabase environment variables"**
- Ensure your `.env` file exists and contains valid `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart the development server after updating `.env`

**Error: "relation does not exist"**
- The database schema hasn't been run yet
- Follow step 3 above to execute `database/schema.sql` in the Supabase SQL Editor

**Authentication issues**
- Verify your Supabase project is active
- Check that the anon key is correct
- Ensure email confirmation is disabled in Supabase Auth settings (for development)

## Modules

The system includes eight learning modules:

1. Clearance One
2. Customs in International Context
3. Customs Valuation I
4. WTO Customs Valuation
5. History of Taxation
6. Theory of Taxation
7. Tax and Customs Theory
8. EACCMA

Each module contains:
- Learning path with multiple lessons
- Multiple timed tests
- Flashcard sets for memorization

## License

MIT
