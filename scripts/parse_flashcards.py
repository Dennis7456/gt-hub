#!/usr/bin/env python3
"""Parse eaccma.txt and generate comprehensive flashcards"""

import re
import json

def parse_flashcards(filename):
    """Parse the flashcard file and extract all Front/Back pairs"""
    flashcards = []
    current_topic = "General"
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by topic sections
    sections = re.split(r'\n(?=\d+\.|[A-Z][a-z]+ (?:and |or )?[a-z]+.*—)', content)
    
    for section in sections:
        # Extract topic from section header
        topic_match = re.match(r'(\d+\.\s+.+?)\s*—\s*Anki-style flashcards', section)
        if topic_match:
            current_topic = topic_match.group(1).strip()
        
        # Also check for subsection headers
        subsection_match = re.match(r'^([A-Z][^\n]+)\n\n', section)
        if subsection_match and not topic_match:
            subsection = subsection_match.group(1).strip()
            if not subsection.startswith('Front:') and not subsection.startswith('Back:'):
                current_topic = subsection
        
        # Find all Front/Back pairs
        pairs = re.findall(r'Front:\s*(.+?)\s*Back:\s*(.+?)(?=\n\nFront:|\n\n[A-Z]|\Z)', section, re.DOTALL)
        
        for front, back in pairs:
            # Clean up the text
            front = front.strip().replace('\n', ' ')
            back = back.strip().replace('\n', ' ')
            
            if front and back:
                flashcards.append({
                    'topic': current_topic,
                    'front': front,
                    'back': back
                })
    
    return flashcards

def generate_js_file(flashcards, output_file):
    """Generate the JavaScript cards.js file"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('const flashcards = [\n')
        
        for i, card in enumerate(flashcards):
            # Escape quotes and special characters
            front = card['front'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')
            back = card['back'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')
            topic = card['topic'].replace('\\', '\\\\').replace('"', '\\"')
            
            f.write('  {\n')
            f.write(f'    topic: "{topic}",\n')
            f.write(f'    front: "{front}",\n')
            f.write(f'    back: "{back}"\n')
            f.write('  }')
            
            if i < len(flashcards) - 1:
                f.write(',\n')
            else:
                f.write('\n')
        
        f.write('];\n')

if __name__ == '__main__':
    print("Parsing flashcards from eaccma.txt...")
    flashcards = parse_flashcards('flashcards/eaccma/eaccma.txt')
    print(f"Found {len(flashcards)} flashcards")
    
    print("Generating cards.js...")
    generate_js_file(flashcards, 'flashcards/eaccma/cards.js')
    print("Done!")
    
    # Print topic summary
    topics = {}
    for card in flashcards:
        topic = card['topic']
        topics[topic] = topics.get(topic, 0) + 1
    
    print("\nFlashcards by topic:")
    for topic, count in sorted(topics.items()):
        print(f"  {topic}: {count} cards")
