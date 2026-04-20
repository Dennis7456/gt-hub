export interface Flashcard {
  id: number;
  front: string;
  back: string;
  topic?: string;
}

export interface FlashcardTopic {
  id: number;
  label: string;
  range: [number, number]; // [startId, endId]
}

export interface FlashcardSet {
  moduleId: string;
  cards: Flashcard[];
  topics?: FlashcardTopic[];
}
