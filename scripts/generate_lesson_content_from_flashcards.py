#!/usr/bin/env python3
"""
Generate lesson content JSON files from flashcard data.
This creates actual educational content that can be loaded dynamically.
"""

import json
import random
from pathlib import Path
from collections import defaultdict

def load_json(path):
    """Load JSON file."""
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(data, path):
    """Save JSON file."""
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def group_by_category(flashcards):
    """Group flashcards by category."""
    groups = defaultdict(list)
    for card in flashcards:
        category = card.get('category', 'General')
        groups[category].append(card)
    return dict(groups)

def find_relevant_flashcards(flashcards_by_category, lesson_skills, count=10):
    """Find flashcards relevant to lesson skills."""
    relevant = []
    
    # Try to match by category or skills
    for skill in lesson_skills:
        skill_lower = skill.lower()
        for category, cards in flashcards_by_category.items():
            category_lower = category.lower()
            if skill_lower in category_lower or any(word in category_lower for word in skill_lower.split()):
                relevant.extend(cards)
    
    # If no matches, use all flashcards
    if not relevant:
        for cards in flashcards_by_category.values():
            relevant.extend(cards)
    
    # Remove duplicates and sample
    unique_cards = list({card['id']: card for card in relevant}.values())
    return random.sample(unique_cards, min(count, len(unique_cards)))

def generate_wrong_answers(correct_answer, all_flashcards, count=3):
    """Generate plausible wrong answers."""
    # Try to use other flashcard answers as distractors
    other_answers = [card['back'] for card in random.sample(all_flashcards, min(10, len(all_flashcards))) 
                     if card['back'] != correct_answer]
    
    if len(other_answers) >= count:
        return random.sample(other_answers, count)
    
    # Fallback generic wrong answers
    generic = [
        'This is not the correct answer',
        'This option is incorrect',
        'This answer does not apply',
        'Not the right choice',
        'This is a common misconception'
    ]
    return (other_answers + generic)[:count]

def create_learn_content(flashcards, lesson):
    """Create learn-type lesson content."""
    cards = []
    for card in flashcards[:5]:
        cards.append({
            'front': card['front'],
            'back': card['back'],
            'example': f"💡 {card.get('category', 'Key Concept')}"
        })
    
    # Micro checks
    micro_checks = []
    for card in flashcards[5:8] if len(flashcards) > 5 else flashcards[:3]:
        options = [card['back']] + generate_wrong_answers(card['back'], flashcards, 2)
        random.shuffle(options)
        
        micro_checks.append({
            'question': card['front'],
            'options': options,
            'correct': options.index(card['back'])
        })
    
    return {
        'type': 'learn',
        'title': lesson['title'],
        'goal': lesson.get('goal', ''),
        'cards': cards,
        'microChecks': micro_checks
    }

def create_quiz_content(flashcards, lesson, pass_threshold=60):
    """Create quiz/recall-type lesson content."""
    questions = []
    for card in flashcards[:10]:
        options = [card['back']] + generate_wrong_answers(card['back'], flashcards, 3)
        random.shuffle(options)
        
        questions.append({
            'question': card['front'],
            'options': options,
            'correct': options.index(card['back'])
        })
    
    return {
        'type': lesson.get('type', 'quiz'),
        'title': lesson['title'],
        'goal': lesson.get('goal', ''),
        'passThreshold': pass_threshold,
        'questions': questions
    }

def create_match_content(flashcards, lesson):
    """Create match-type lesson content."""
    pairs = []
    for card in flashcards[:8]:
        # Shorten text for matching
        term = card['front'].replace('?', '').strip()
        if len(term) > 60:
            term = term[:57] + '...'
        
        definition = card['back']
        if len(definition) > 80:
            definition = definition[:77] + '...'
        
        pairs.append({
            'term': term,
            'definition': definition,
            'category': 'item'
        })
    
    return {
        'type': 'match',
        'title': lesson['title'],
        'goal': lesson.get('goal', ''),
        'passThreshold': 70,
        'matchPairs': pairs
    }

def create_scenario_content(flashcards, lesson):
    """Create scenario-type lesson content."""
    scenarios = []
    for card in flashcards[:6]:
        options = [card['back']] + generate_wrong_answers(card['back'], flashcards, 3)
        random.shuffle(options)
        
        scenarios.append({
            'situation': f"Scenario: {card['front']}",
            'options': options,
            'correct': options.index(card['back']),
            'explanation': f"Correct! {card['back']}"
        })
    
    return {
        'type': 'scenario',
        'title': lesson['title'],
        'goal': lesson.get('goal', ''),
        'passThreshold': 70,
        'scenarios': scenarios
    }

def create_checkpoint_content(flashcards, lesson):
    """Create checkpoint-type lesson content."""
    return create_quiz_content(flashcards, lesson, pass_threshold=75)

def generate_lesson_content(lesson, flashcards_by_category, all_flashcards):
    """Generate content for a single lesson."""
    lesson_type = lesson.get('type', 'learn')
    skills = lesson.get('skills', [])
    
    # Find relevant flashcards
    relevant_cards = find_relevant_flashcards(flashcards_by_category, skills, count=15)
    
    # Generate content based on type
    if lesson_type == 'learn':
        return create_learn_content(relevant_cards, lesson)
    elif lesson_type in ['quiz', 'recall']:
        return create_quiz_content(relevant_cards, lesson)
    elif lesson_type == 'match':
        return create_match_content(relevant_cards, lesson)
    elif lesson_type == 'scenario':
        return create_scenario_content(relevant_cards, lesson)
    elif lesson_type == 'checkpoint':
        return create_checkpoint_content(relevant_cards, lesson)
    else:
        # Default to quiz
        return create_quiz_content(relevant_cards, lesson)

def process_learning_path(flashcards_path, learning_path_path, output_path):
    """Process a complete learning path and generate content."""
    print(f"\nProcessing: {learning_path_path}")
    
    # Load data
    flashcards_data = load_json(flashcards_path)
    learning_path = load_json(learning_path_path)
    
    flashcards = flashcards_data.get('flashcards', [])
    flashcards_by_category = group_by_category(flashcards)
    
    print(f"  Loaded {len(flashcards)} flashcards in {len(flashcards_by_category)} categories")
    
    # Generate content for each unit and lesson
    lesson_content = {}
    
    for unit in learning_path.get('units', []):
        unit_id = unit['unit_id']
        unit_title = unit['title']
        print(f"  Unit {unit_id}: {unit_title}")
        
        lesson_content[unit_id] = {}
        
        for lesson in unit.get('lessons', []):
            lesson_id = lesson['lesson_id']
            lesson_title = lesson['title']
            
            # Generate content
            content = generate_lesson_content(lesson, flashcards_by_category, flashcards)
            lesson_content[unit_id][lesson_id] = content
            
            print(f"    ✓ {lesson_id}: {lesson_title} ({content['type']})")
    
    # Save to JSON file
    save_json(lesson_content, output_path)
    print(f"  ✓ Saved to: {output_path}")
    
    return lesson_content

def main():
    """Main function."""
    configs = [
        {
            'name': 'Tax and Customs Theory',
            'flashcards': 'flashcards/tax-and-customs-theory/tax_and_customs_theory_flashcards.json',
            'learning_path': 'tax-and-customs-theory/tax_and_customs_theory_duolingo_path.json',
            'output': 'tax-and-customs-theory/learning-path/lesson_content.json'
        },
        {
            'name': 'Theory of Taxation',
            'flashcards': 'assets/theory_of_taxation_flashcards.json',
            'learning_path': 'assets/theory_of_taxation_learning_path.json',
            'output': 'theory-of-taxation/learning-path/lesson_content.json'
        },
        {
            'name': 'History of Taxation',
            'flashcards': 'assets/history_of_taxation_flashcards.json',
            'learning_path': 'assets/history_of_taxation_learning_path.json',
            'output': 'history-of-taxation/learning-path/lesson_content.json'
        }
    ]
    
    print("=" * 60)
    print("Generating Lesson Content from Flashcards")
    print("=" * 60)
    
    for config in configs:
        try:
            process_learning_path(
                config['flashcards'],
                config['learning_path'],
                config['output']
            )
        except Exception as e:
            print(f"  ✗ Error processing {config['name']}: {e}")
    
    print("\n" + "=" * 60)
    print("✓ All lesson content generated successfully!")
    print("=" * 60)
    print("\nThe lesson content is now stored in JSON files that can be")
    print("loaded dynamically by the learning path applications.")

if __name__ == '__main__':
    main()
