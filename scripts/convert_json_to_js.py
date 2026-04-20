#!/usr/bin/env python3
"""
Convert lesson content JSON files to JavaScript files to avoid CORS issues.
"""

import json
from pathlib import Path

def convert_json_to_js(json_path, js_path):
    """Convert JSON file to JavaScript file."""
    # Read JSON
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Write as JavaScript
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write('// Lesson content - Generated from flashcard data\n')
        f.write('// This file is auto-generated. Do not edit manually.\n\n')
        f.write('const LESSON_CONTENT = ')
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(';\n')
    
    print(f"✓ Converted {json_path} -> {js_path}")

def update_html_to_use_js(html_path):
    """Update HTML to use JS file instead of JSON fetch."""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and replace the fetch block with a simple script tag
    import re
    
    # Pattern to match the fetch block
    pattern = r'<script>\s*// Load lesson content from JSON.*?</script>'
    
    # Replacement - simple script tag
    replacement = '<script src="lessons.js"></script>'
    
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✓ Updated {html_path}")
        return True
    else:
        print(f"⚠ No changes needed for {html_path}")
        return False

def main():
    """Main function."""
    conversions = [
        {
            'name': 'Tax and Customs Theory',
            'json': 'tax-and-customs-theory/learning-path/lesson_content.json',
            'js': 'tax-and-customs-theory/learning-path/lessons.js',
            'html': 'tax-and-customs-theory/learning-path/index.html'
        },
        {
            'name': 'Theory of Taxation',
            'json': 'theory-of-taxation/learning-path/lesson_content.json',
            'js': 'theory-of-taxation/learning-path/lessons.js',
            'html': 'theory-of-taxation/learning-path/index.html'
        },
        {
            'name': 'History of Taxation',
            'json': 'history-of-taxation/learning-path/lesson_content.json',
            'js': 'history-of-taxation/learning-path/lessons.js',
            'html': 'history-of-taxation/learning-path/index.html'
        }
    ]
    
    print("=" * 60)
    print("Converting JSON to JavaScript Files")
    print("=" * 60)
    
    for conv in conversions:
        print(f"\n{conv['name']}:")
        convert_json_to_js(conv['json'], conv['js'])
        update_html_to_use_js(conv['html'])
    
    print("\n" + "=" * 60)
    print("✓ Conversion complete!")
    print("=" * 60)
    print("\nThe learning paths now use JavaScript files instead of JSON.")
    print("This avoids CORS issues when opening HTML files directly.")
    print("\nYou can now open the HTML files in your browser without")
    print("needing a local web server.")

if __name__ == '__main__':
    main()
