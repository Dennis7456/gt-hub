# Database Setup Guide

This directory contains the database schema and setup instructions for the Learning Management System.

## Quick Setup

1. Create a Supabase project at https://supabase.com
2. Copy your project URL and anon key to `.env`
3. Run `schema.sql` in the Supabase SQL Editor
4. Verify tables are created in the Table Editor

## Files

- **schema.sql** - Complete database schema with tables, indexes, RLS policies, and triggers

## Schema Details

### Tables

#### users
Stores user profile information. Supabase Auth handles authentication separately.

**Columns:**
- `id` - UUID primary key
- `email` - Unique email address
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

#### lesson_progress
Tracks which lessons users have completed in each module.

**Columns:**
- `id` - UUID primary key
- `user_id` - References users table
- `module_id` - Module identifier (e.g., "clearance-one")
- `lesson_id` - Lesson identifier (e.g., "lesson-1")
- `completed` - Boolean completion status
- `completed_at` - Completion timestamp
- `created_at`, `updated_at` - Record timestamps

**Indexes:**
- `idx_lesson_progress_user` - Fast lookup by user
- `idx_lesson_progress_module` - Fast lookup by module
- `idx_lesson_progress_user_module` - Fast lookup by user and module

**Constraints:**
- Unique constraint on (user_id, module_id, lesson_id) - prevents duplicate progress records

#### test_results
Stores test/quiz results for each user attempt.

**Columns:**
- `id` - UUID primary key
- `user_id` - References users table
- `module_id` - Module identifier
- `test_id` - Test identifier (e.g., "test-1")
- `score` - Number of correct answers
- `total_questions` - Total questions in test
- `percentage` - Score as percentage (0-100)
- `completed_at` - Test completion timestamp
- `created_at` - Record creation timestamp

**Indexes:**
- `idx_test_results_user` - Fast lookup by user
- `idx_test_results_module` - Fast lookup by module
- `idx_test_results_test` - Fast lookup by test
- `idx_test_results_user_module` - Fast lookup by user and module
- `idx_test_results_user_test` - Fast lookup by user and test

**Note:** No unique constraint - users can retake tests multiple times

#### flashcard_progress
Tracks flashcard study progress for each user and module.

**Columns:**
- `id` - UUID primary key
- `user_id` - References users table
- `module_id` - Module identifier
- `flashcard_set_id` - Flashcard set identifier
- `cards_reviewed` - Number of cards reviewed
- `total_cards` - Total cards in set
- `last_reviewed_at` - Last review timestamp
- `created_at`, `updated_at` - Record timestamps

**Indexes:**
- `idx_flashcard_progress_user` - Fast lookup by user
- `idx_flashcard_progress_module` - Fast lookup by module
- `idx_flashcard_progress_user_module` - Fast lookup by user and module

**Constraints:**
- Unique constraint on (user_id, module_id, flashcard_set_id) - one progress record per set

### Security (Row Level Security)

All tables have RLS enabled with policies that ensure:

1. **Users can only access their own data**
   - SELECT, INSERT, UPDATE policies check `auth.uid() = user_id`
   - No user can view or modify another user's progress

2. **Automatic filtering**
   - All queries are automatically filtered by the authenticated user's ID
   - No need to add WHERE clauses in application code

3. **Protection against unauthorized access**
   - Unauthenticated users cannot access any data
   - Authenticated users are restricted to their own records

### Triggers

**update_updated_at_column()**
- Automatically updates the `updated_at` timestamp on record modification
- Applied to: users, lesson_progress, flashcard_progress tables

## Module IDs

The system supports eight modules with the following IDs:

1. `clearance-one`
2. `customs-in-international-context`
3. `customs-valuation-i`
4. `wto-customs-valuation`
5. `history-of-taxation`
6. `theory-of-taxation`
7. `tax-and-customs-theory`
8. `eaccma`

## Performance Considerations

### Indexes

The schema includes strategic indexes for common query patterns:

- **User-based queries**: All tables have indexes on `user_id`
- **Module-based queries**: All tables have indexes on `module_id`
- **Combined queries**: Composite indexes on (user_id, module_id) for dashboard views
- **Test lookups**: Additional indexes on `test_id` for test history queries

### Query Optimization Tips

1. **Always filter by user_id first** - This uses the most selective index
2. **Use composite indexes** - Query by (user_id, module_id) together when possible
3. **Avoid SELECT \*** - Only select columns you need
4. **Use pagination** - For test history, limit results and use offset/cursor pagination

## Common Queries

### Get user's lesson progress for a module
```sql
SELECT lesson_id, completed, completed_at
FROM lesson_progress
WHERE user_id = 'user-uuid' AND module_id = 'clearance-one'
ORDER BY lesson_id;
```

### Get user's highest test score for each test
```sql
SELECT test_id, MAX(percentage) as highest_score
FROM test_results
WHERE user_id = 'user-uuid' AND module_id = 'clearance-one'
GROUP BY test_id;
```

### Get user's flashcard progress for a module
```sql
SELECT flashcard_set_id, cards_reviewed, total_cards, last_reviewed_at
FROM flashcard_progress
WHERE user_id = 'user-uuid' AND module_id = 'clearance-one';
```

### Get overall progress summary
```sql
SELECT 
  module_id,
  COUNT(CASE WHEN completed THEN 1 END) as completed_lessons,
  COUNT(*) as total_lessons
FROM lesson_progress
WHERE user_id = 'user-uuid'
GROUP BY module_id;
```

## Maintenance

### Backup

Supabase automatically backs up your database. To create manual backups:

1. Go to **Database** > **Backups** in Supabase dashboard
2. Click "Create backup"
3. Download the backup file

### Monitoring

Monitor database performance in Supabase dashboard:

1. **Database** > **Query Performance** - View slow queries
2. **Database** > **Indexes** - Check index usage
3. **Database** > **Logs** - View database logs

### Migrations

For schema changes:

1. Create a new SQL file with the migration
2. Test in a development project first
3. Run in production during low-traffic periods
4. Always backup before running migrations

## Troubleshooting

### "permission denied for table"
- RLS is enabled but policies aren't working
- Check that `auth.uid()` matches the user_id in your query
- Verify the user is authenticated

### Slow queries
- Check if indexes are being used (use EXPLAIN ANALYZE)
- Ensure you're filtering by indexed columns
- Consider adding composite indexes for common query patterns

### Duplicate key violations
- Unique constraints prevent duplicate records
- For lesson_progress and flashcard_progress, use UPSERT (INSERT ... ON CONFLICT)
- For test_results, duplicates are allowed (users can retake tests)

## Support

For Supabase-specific issues:
- Documentation: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions
- Status: https://status.supabase.com
