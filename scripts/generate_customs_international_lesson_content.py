#!/usr/bin/env python3
"""
Generate lesson content for Customs in International Context learning path
"""

import json
import random
from pathlib import Path
from collections import defaultdict

# Load flashcards
with open('assets/customs_in_international_context_flashcards.json', 'r') as f:
    flashcards_data = json.load(f)
    flashcards = flashcards_data.get('flashcards', [])

# Load learning path structure
with open('assets/customs_in_international_context_learning_path (1).json', 'r') as f:
    learning_path = json.load(f)

# Group flashcards by category
flashcard_groups = defaultdict(list)
for card in flashcards:
    category = card.get('category', 'General')
    flashcard_groups[category].append(card)

print(f"Loaded {len(flashcards)} flashcards in {len(flashcard_groups)} categories")

def generate_learn_content(lesson, flashcard_groups):
    """Generate content for learn-type lessons"""
    skills = lesson.get('skills', [])
    relevant_cards = []
    
    # Find flashcards matching the lesson skills
    for skill in skills:
        skill_lower = skill.lower()
        for category, cards in flashcard_groups.items():
            if skill_lower in category.lower():
                relevant_cards.extend(cards[:3])  # Take up to 3 cards per skill
    
    # If no matches, use random cards
    if not relevant_cards:
        all_cards = [card for cards in flashcard_groups.values() for card in cards]
        relevant_cards = random.sample(all_cards, min(5, len(all_cards)))
    
    return {
        "type": "learn",
        "content": relevant_cards[:5]  # Limit to 5 cards
    }

def generate_quiz_content(lesson, flashcard_groups):
    """Generate content for quiz-type lessons"""
    skills = lesson.get('skills', [])
    relevant_cards = []
    
    for skill in skills:
        skill_lower = skill.lower()
        for category, cards in flashcard_groups.items():
            if skill_lower in category.lower():
                relevant_cards.extend(cards)
    
    if not relevant_cards:
        all_cards = [card for cards in flashcard_groups.values() for card in cards]
        relevant_cards = random.sample(all_cards, min(10, len(all_cards)))
    
    # Create multiple choice questions
    questions = []
    for card in relevant_cards[:5]:
        # Get wrong answers from other cards
        all_cards = [c for cards in flashcard_groups.values() for c in cards if c != card]
        wrong_answers = random.sample([c['back'] for c in all_cards], min(3, len(all_cards)))
        
        options = [card['back']] + wrong_answers
        random.shuffle(options)
        
        questions.append({
            "question": card['front'],
            "options": options,
            "correct": card['back']
        })
    
    return {
        "type": "quiz",
        "questions": questions
    }

def generate_match_content(lesson, flashcard_groups):
    """Generate content for match-type lessons"""
    skills = lesson.get('skills', [])
    relevant_cards = []
    
    for skill in skills:
        skill_lower = skill.lower()
        for category, cards in flashcard_groups.items():
            if skill_lower in category.lower():
                relevant_cards.extend(cards)
    
    if not relevant_cards:
        all_cards = [card for cards in flashcard_groups.values() for card in cards]
        relevant_cards = random.sample(all_cards, min(6, len(all_cards)))
    
    pairs = []
    for card in relevant_cards[:6]:
        pairs.append({
            "left": card['front'],
            "right": card['back']
        })
    
    return {
        "type": "match",
        "pairs": pairs
    }

def generate_scenario_content(lesson, flashcard_groups):
    """Generate content for scenario-type lessons"""
    skills = lesson.get('skills', [])
    relevant_cards = []
    
    for skill in skills:
        skill_lower = skill.lower()
        for category, cards in flashcard_groups.items():
            if skill_lower in category.lower():
                relevant_cards.extend(cards)
    
    if not relevant_cards:
        all_cards = [card for cards in flashcard_groups.values() for card in cards]
        relevant_cards = random.sample(all_cards, min(3, len(all_cards)))
    
    scenarios = []
    for card in relevant_cards[:3]:
        scenarios.append({
            "scenario": f"Apply your knowledge: {card['front']}",
            "question": card['front'],
            "answer": card['back']
        })
    
    return {
        "type": "scenario",
        "scenarios": scenarios
    }

def generate_checkpoint_content(lesson, flashcard_groups):
    """Generate content for checkpoint-type lessons"""
    # Checkpoints are comprehensive reviews
    all_cards = [card for cards in flashcard_groups.values() for card in cards]
    selected_cards = random.sample(all_cards, min(10, len(all_cards)))
    
    questions = []
    for card in selected_cards:
        wrong_answers = random.sample([c['back'] for c in all_cards if c != card], min(3, len(all_cards)-1))
        options = [card['back']] + wrong_answers
        random.shuffle(options)
        
        questions.append({
            "question": card['front'],
            "options": options,
            "correct": card['back']
        })
    
    return {
        "type": "checkpoint",
        "questions": questions
    }

# Generate lesson content
lesson_content = {}

for unit in learning_path['units']:
    unit_id = unit['unit_id']
    print(f"\nUnit {unit_id}: {unit['title']}")
    
    for lesson in unit['lessons']:
        lesson_id = lesson['lesson_id']
        lesson_type = lesson['type']
        
        print(f"  ✓ {lesson_id}: {lesson['title']} ({lesson_type})")
        
        if lesson_type == 'learn':
            content = generate_learn_content(lesson, flashcard_groups)
        elif lesson_type == 'quiz':
            content = generate_quiz_content(lesson, flashcard_groups)
        elif lesson_type == 'match':
            content = generate_match_content(lesson, flashcard_groups)
        elif lesson_type == 'scenario':
            content = generate_scenario_content(lesson, flashcard_groups)
        elif lesson_type == 'checkpoint':
            content = generate_checkpoint_content(lesson, flashcard_groups)
        else:
            content = {"type": lesson_type, "content": []}
        
        lesson_content[lesson_id] = content

# Save to JSON
output_path = 'customs-in-international-context/learning-path/lesson_content.json'
Path(output_path).parent.mkdir(parents=True, exist_ok=True)
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(lesson_content, f, indent=2, ensure_ascii=False)

print(f"\n✓ Saved to: {output_path}")
print(f"✓ Generated content for {len(lesson_content)} lessons")
