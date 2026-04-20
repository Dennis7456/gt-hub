export interface TestResult {
  id: string;
  user_id: string;
  module_id: string;
  test_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  completed_at: Date;
}
