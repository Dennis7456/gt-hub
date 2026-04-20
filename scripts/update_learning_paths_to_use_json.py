#!/usr/bin/env python3
"""
Update learning path HTML files to load JSON content instead of placeholder lessons.js
"""

import re
from pathlib import Path

def update_html_file(html_path, json_path):
    """Update HTML file to load JSON content."""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if lessons.js is referenced
    if 'lessons.js' not in content:
        print(f"  ⚠ No lessons.js reference found in {html_path}")
        return False
    
    # Replace lessons.js with a JSON loader
    # Find the script tag for lessons.js
    pattern = r'<script src="lessons\.js"></script>'
    
    replacement = f'''<script>
    // Load lesson content from JSON
    let LESSON_CONTENT = {{}};
    fetch('{json_path.split('/')[-1]}')
      .then(response => response.json())
      .then(data => {{
        LESSON_CONTENT = data;
        console.log('✓ Lesson content loaded:', Object.keys(LESSON_CONTENT).length, 'units');
      }})
      .catch(error => {{
        console.error('Error loading lesson content:', error);
        alert('Failed to load lesson content. Please refresh the page.');
      }});
  </script>'''
    
    new_content = re.sub(pattern, replacement, content)
    
    if new_content == content:
        print(f"  ⚠ Could not find pattern to replace in {html_path}")
        return False
    
    # Write updated content
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    """Main function."""
    updates = [
        {
            'name': 'Tax and Customs Theory',
            'html': 'tax-and-customs-theory/learning-path/index.html',
            'json': 'tax-and-customs-theory/learning-path/lesson_content.json'
        },
        {
            'name': 'Theory of Taxation',
            'html': 'theory-of-taxation/learning-path/index.html',
            'json': 'theory-of-taxation/learning-path/lesson_content.json'
        },
        {
            'name': 'History of Taxation',
            'html': 'history-of-taxation/learning-path/index.html',
            'json': 'history-of-taxation/learning-path/lesson_content.json'
        }
    ]
    
    print("=" * 60)
    print("Updating Learning Path HTML Files")
    print("=" * 60)
    
    for update in updates:
        print(f"\n{update['name']}:")
        print(f"  HTML: {update['html']}")
        print(f"  JSON: {update['json']}")
        
        if update_html_file(update['html'], update['json']):
            print(f"  ✓ Updated successfully")
        else:
            print(f"  ✗ Update failed")
    
    print("\n" + "=" * 60)
    print("✓ HTML files updated to load JSON content")
    print("=" * 60)
    print("\nThe learning paths now load real content from JSON files")
    print("instead of using placeholder lessons.js files.")

if __name__ == '__main__':
    main()
