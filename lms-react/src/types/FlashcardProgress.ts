export interface FlashcardProgress {
  id: string;
  user_id: string;
  module_id: string;
  flashcard_set_id: string;
  cards_reviewed: number;
  total_cards: number;
  last_reviewed_at: Date;
}
