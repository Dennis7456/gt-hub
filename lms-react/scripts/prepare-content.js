#!/usr/bin/env node
/**
 * Prepare content files for production build
 * 
 * Copies content files from workspace root into lms-react/public/
 * so they can be served as static assets in production.
 * 
 * Run this before building: npm run prepare-content
 */

import { cpSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workspaceRoot = join(__dirname, '..', '..');
const publicDir = join(__dirname, '..', 'public');

console.log('📦 Preparing content files for production...');

// Content directories to copy
const contentDirs = [
  'assets',
  'clearance-one',
  'customs-in-international-context',
  'customs-valuation-i',
  'wto-customs-valuation',
  'history-of-taxation',
  'theory-of-taxation',
  'tax-and-customs-theory',
  'eaccma',
  'article-vii-valuation',
  'flashcards'
];

let copiedCount = 0;

for (const dir of contentDirs) {
  const sourcePath = join(workspaceRoot, dir);
  const destPath = join(publicDir, dir);

  if (existsSync(sourcePath)) {
    try {
      // Create parent directory if needed
      mkdirSync(dirname(destPath), { recursive: true });
      
      // Copy directory recursively
      cpSync(sourcePath, destPath, { recursive: true });
      console.log(`✓ Copied ${dir}/`);
      copiedCount++;
    } catch (error) {
      console.error(`✗ Failed to copy ${dir}/:`, error.message);
    }
  } else {
    console.warn(`⚠ Skipped ${dir}/ (not found)`);
  }
}

console.log(`\n✅ Copied ${copiedCount}/${contentDirs.length} content directories`);
console.log('Ready for production build!');
