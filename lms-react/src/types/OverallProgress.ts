export interface OverallProgress {
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
