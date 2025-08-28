// This script generates placeholder images for development
// Run: node generate-placeholders.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create placeholder SVG
const createPlaceholderSVG = (width, height, text, bgColor = '#E8E6E1') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#8B8680" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
};

// Ensure directories exist
const dirs = [
  'public/images/houses',
  'public/images/hero',
  'public/images/gallery',
  'public/images/plans',
  'public/images/og'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Generate placeholder images
const placeholders = [
  // Hero images
  { path: 'public/images/hero/estate-main.jpg', width: 1200, height: 800, text: 'Osiedle Brzozowe Wzgórze' },
  
  // House placeholders
  { path: 'public/images/houses/placeholder.jpg', width: 800, height: 600, text: 'Dom' },
  { path: 'public/images/houses/placeholder-main.jpg', width: 1200, height: 900, text: 'Widok główny' },
  { path: 'public/images/houses/placeholder-2.jpg', width: 600, height: 450, text: 'Widok 2' },
  { path: 'public/images/houses/placeholder-3.jpg', width: 600, height: 450, text: 'Widok 3' },
  { path: 'public/images/houses/placeholder-4.jpg', width: 600, height: 450, text: 'Widok 4' },
  
  // Gallery images
  { path: 'public/images/gallery/estate-aerial.jpg', width: 1200, height: 800, text: 'Widok z lotu ptaka' },
  
  // OG image
  { path: 'public/images/og/default.jpg', width: 1200, height: 630, text: 'FALCO INVESTMENTS' }
];

// Create placeholder files
placeholders.forEach(({ path: filePath, width, height, text }) => {
  const fullPath = path.join(__dirname, filePath);
  const svg = createPlaceholderSVG(width, height, text);
  // Save as SVG but with .jpg extension for now
  fs.writeFileSync(fullPath.replace('.jpg', '.svg'), svg);
  console.log(`Created placeholder: ${filePath}`);
});

console.log('✅ All placeholder images created!');
