#!/usr/bin/env python3
"""Generate Tax and Customs Theory flashcards from JSON"""

import json
import os
import shutil

def load_flashcards(filename):
    """Load flashcards from JSON file"""
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def generate_cards_js(flashcards_data):
    """Generate cards.js file"""
    flashcards = flashcards_data['flashcards']
    
    js = 'const flashcards = [\n'
    
    for card in flashcards:
        # Escape quotes in strings
        front = card['front'].replace('\\', '\\\\').replace('"', '\\"')
        back = card['back'].replace('\\', '\\\\').replace('"', '\\"')
        category = card['category'].replace('\\', '\\\\').replace('"', '\\"')
        
        js += '  {\n'
        js += f'    topic: "{category}",\n'
        js += f'    front: "{front}",\n'
        js += f'    back: "{back}"\n'
        js += '  },\n'
    
    js += '];\n'
    return js

def main():
    print("Loading Tax and Customs Theory flashcards from JSON...")
    flashcards_data = load_flashcards('flashcards/tax-and-customs-theory/tax_and_customs_theory_flashcards.json')
    
    # Create output directory
    output_dir = 'flashcards/tax-and-customs-theory'
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Generating flashcards for: {flashcards_data['topic']}")
    print(f"Total flashcards: {len(flashcards_data['flashcards'])}")
    
    # Generate cards.js
    cards_js = generate_cards_js(flashcards_data)
    
    with open(f'{output_dir}/cards.js', 'w', encoding='utf-8') as f:
        f.write(cards_js)
    
    print(f"  ✓ Generated cards.js with {len(flashcards_data['flashcards'])} flashcards")
    
    # Copy HTML and app.js from eaccma folder (they're the same structure)
    print("Copying HTML and app.js templates...")
    
    shutil.copy('flashcards/eaccma/index.html', f'{output_dir}/index.html')
    shutil.copy('flashcards/eaccma/app.js', f'{output_dir}/app.js')
    
    # Update the title in index.html
    with open(f'{output_dir}/index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = html.replace('EACCMA Flashcards', 'Tax & Customs Theory Flashcards')
    html = html.replace('<title>EACCMA Flashcards</title>', '<title>Tax & Customs Theory Flashcards</title>')
    
    with open(f'{output_dir}/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"  ✓ Updated index.html")
    print(f"  ✓ Copied app.js")
    
    # Print category summary
    categories = {}
    for card in flashcards_data['flashcards']:
        cat = card['category']
        categories[cat] = categories.get(cat, 0) + 1
    
    print(f"\nFlashcards by category:")
    for category, count in sorted(categories.items()):
        print(f"  {category}: {count} cards")
    
    print(f"\nDone! Flashcards created in {output_dir}/")
    print(f"Open {output_dir}/index.html in your browser to start studying.")

if __name__ == '__main__':
    main()
