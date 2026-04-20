export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number; // index of correct answer
  explanation?: string;
}

export interface Test {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number; // in seconds
  questions: Question[];
  passingScore: number;
}
