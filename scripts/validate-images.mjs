#!/usr/bin/env node
/**
 * Image Validation Script
 * 
 * Run this to verify all referenced images exist in the public folder.
 * Add to package.json scripts: "validate-images": "node scripts/validate-images.mjs"
 * 
 * Usage:
 *   npm run validate-images
 */

import fs from 'fs';
import path from 'path';

// ANSI colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

const PUBLIC_DIR = path.join(process.cwd(), 'public');

console.log(`${colors.bold}${colors.blue}🔍 Validating Image Paths...${colors.reset}\n`);

let errors = [];
let warnings = [];
let stats = {
  totalChecked: 0,
  exists: 0,
  missing: 0,
  inArchive: 0,
};

function checkFile(relativePath, category) {
  stats.totalChecked++;
  
  // Remove leading slash if present
  const cleanPath = relativePath.startsWith('/') 
    ? relativePath.slice(1) 
    : relativePath;
  
  const fullPath = path.join(PUBLIC_DIR, cleanPath);
  const exists = fs.existsSync(fullPath);
  
  // Check if it's in archive
  const inArchive = cleanPath.includes('_archive/');
  
  if (exists) {
    stats.exists++;
    if (inArchive) {
      stats.inArchive++;
      warnings.push({
        path: relativePath,
        message: 'Image is in archive folder but referenced in code',
        category,
      });
    }
  } else {
    stats.missing++;
    errors.push({
      path: relativePath,
      message: 'File does not exist',
      category,
    });
  }
  
  return exists;
}

// ============================================================================
// Define all expected images from src/lib/images.ts
// ============================================================================

const expectedImages = {
  // Brand images - UPDATED with accurate names
  'Brand - Hero': [
    '/images/brand/hero-pergola.jpg',
    '/images/brand/hero-screens-new.jpg',
    '/images/brand/hero-pergola-modern-white.jpg',
    '/images/brand/context-restaurant-retractable-roof.jpg',
    '/images/brand/hero-outdoor-dining-showcase.jpg',
  ],
  'Brand - Detail': [
    '/images/brand/context-outdoor-lounge-night.jpg',
    '/images/brand/detail-pergola-solid-roof-firepit.jpg',
    '/images/brand/detail-house-deck-pergola.jpg',
    '/images/brand/detail-led.webp',
    '/images/brand/detail-heater.jpg',
    '/images/brand/context-outdoor-living-dusk.jpg',
  ],
  'Brand - Context': [
    '/images/brand/context-pool.jpg',
    '/images/brand/context-lake.jpg',
    '/images/brand/context-commercial.jpg',
  ],
  
  // Project images (from src/lib/images.ts)
  'Projects': [
    // Wade - Barrington (custom named files from video frames)
    '/projects/wade/wade-hero.jpg',
    '/projects/wade/wade-exterior-wide.jpg',
    '/projects/wade/wade-bar-interior.jpg',
    '/projects/wade/wade-interior-loungers.jpg',
    '/projects/wade/wade-interior-seating.jpg',
    '/projects/wade/wade-windows-open.jpg',
    '/projects/wade/wade-exterior-glass.jpg',
    // Jake - Crystal Lake (custom named files)
    '/projects/jake/jake-hero.jpg',
    '/projects/jake/jake-exterior-wide.jpg',
    '/projects/jake/jake-pergola-detail.jpg',
    '/projects/jake/jake-louvered-ceiling.jpg',
    '/projects/jake/jake-interior-seating.jpg',
    '/projects/jake/jake-evening-view.jpg',
    '/projects/jake/jake-structure-detail.jpg',
    // Greco - St. Charles (custom named files from drone video and photos)
    '/projects/greco/greco-hero.png',
    '/projects/greco/greco-pergola-structure.jpg',
    '/projects/greco/greco-construction-view.jpg',
    '/projects/greco/greco-installation-detail.jpg',
    '/projects/greco/greco-aerial-house.jpg',
    '/projects/greco/greco-pool-patio-aerial.jpg',
    '/projects/greco/greco-backyard-overview.jpg',
    '/projects/greco/greco-drone-wide.jpg',
    // Other projects with standard naming
    ...['barrington-hills-estate', 'highland-park-builder',
        'lake-forest-pergola', 'lake-geneva-restaurant', 'libertyville-shade-system',
        'wilmette-country-club'].flatMap(slug => [
      `/projects/${slug}/hero.jpg`,
      `/projects/${slug}/1.jpg`,
      `/projects/${slug}/2.jpg`,
      `/projects/${slug}/3.jpg`,
    ]),
  ],
  
  // Page-specific images
  'Page - Home': [
    '/images/videos/commercial-pergola-video-clip-01.mp4',
  ],
  'Page - Price': [
    '/images/shades/shades-hero.jpg',
    '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg',
  ],
  'Page - Guides': [
    '/images/misc/guide-cover.png',
    '/images/pergolas/pergola-hero.jpg',  // Also in pergolas/ now
  ],
  'Page - Design': [
    '/images/misc/frameless-sliding-glass-walls.jpg',
  ],
  'Page - Pro': [
    '/images/pergolas/residential-black-r-blade-02.webp',
  ],
  'Page - Systems': [
    '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.webp',
    '/images/pergolas/residential-white-r-blade-led-strip.jpg',
  ],
  'Page - Service Areas': [
    '/images/pergolas/residential-black-r-blade-01.webp',
    '/images/pergolas/residential-black-r-blade-04.webp',
    '/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg',
    '/images/shades/shade-deployed-screens-01.jpg',
  ],
  
  // Assets
  'Assets': [
    '/logo.png',
    '/og-image.jpg',
  ],
};

// Check all expected images
Object.entries(expectedImages).forEach(([category, images]) => {
  images.forEach(img => checkFile(img, category));
});

// ============================================================================
// Check for orphaned images (in public but not in registry)
// ============================================================================

console.log(`${colors.bold}Checking for orphaned images...${colors.reset}\n`);

function scanDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const images = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      images.push(...scanDirectory(fullPath, relativePath));
    } else if (/\.(jpg|jpeg|png|gif|webp|svg|mp4|webm)$/i.test(entry.name)) {
      images.push('/' + relativePath.replace(/\\/g, '/'));
    }
  }
  
  return images;
}

const allPublicImages = scanDirectory(PUBLIC_DIR);
const allExpectedFlat = Object.values(expectedImages).flat();

const orphaned = allPublicImages.filter(img => {
  // Skip if it's in the expected list
  if (allExpectedFlat.includes(img)) return false;
  // Skip default Next.js/Vercel assets
  if (['/file.svg', '/globe.svg', '/next.svg', '/vercel.svg', '/window.svg'].includes(img)) return false;
  // Skip archive (we expect those to be "orphaned" from registry perspective)
  if (img.includes('/_archive/')) return false;
  return true;
});

// ============================================================================
// Report
// ============================================================================

console.log(`${colors.bold}═══ Validation Results ═══${colors.reset}\n`);

// Summary
console.log(`${colors.bold}Summary:${colors.reset}`);
console.log(`  Total checked: ${stats.totalChecked}`);
console.log(`  ${colors.green}✓ Exists: ${stats.exists}${colors.reset}`);
console.log(`  ${colors.red}✗ Missing: ${stats.missing}${colors.reset}`);
if (stats.inArchive > 0) {
  console.log(`  ${colors.yellow}⚠ In archive: ${stats.inArchive}${colors.reset}`);
}
console.log(`  ${colors.blue}? Orphaned: ${orphaned.length}${colors.reset}`);
console.log();

// Errors
if (errors.length > 0) {
  console.log(`${colors.bold}${colors.red}❌ MISSING FILES (${errors.length}):${colors.reset}`);
  errors.forEach(err => {
    console.log(`  ${colors.red}✗${colors.reset} ${err.path}`);
    console.log(`    Category: ${err.category}`);
  });
  console.log();
}

// Warnings
if (warnings.length > 0) {
  console.log(`${colors.bold}${colors.yellow}⚠️ WARNINGS (${warnings.length}):${colors.reset}`);
  warnings.forEach(warn => {
    console.log(`  ${colors.yellow}!${colors.reset} ${warn.path}`);
    console.log(`    ${warn.message}`);
  });
  console.log();
}

// Orphaned images
if (orphaned.length > 0) {
  console.log(`${colors.bold}${colors.blue}📝 ORPHANED IMAGES (${orphaned.length}):${colors.reset}`);
  console.log('  These exist in public/ but are not in the image registry:');
  orphaned.forEach(img => console.log(`    - ${img}`));
  console.log();
}

// Archive stats
const archivePath = path.join(PUBLIC_DIR, 'images', '_archive');
if (fs.existsSync(archivePath)) {
  const archiveImages = scanDirectory(archivePath, 'images/_archive');
  console.log(`${colors.bold}📦 Archive folder:${colors.reset} ${archiveImages.length} images`);
  console.log('  (Archive images are not validated - move to active to use)');
  console.log();
}

// Exit code
if (errors.length > 0) {
  console.log(`${colors.bold}${colors.red}❌ Validation failed with ${errors.length} missing files${colors.reset}`);
  process.exit(1);
} else if (warnings.length > 0) {
  console.log(`${colors.bold}${colors.yellow}⚠️ Validation passed with warnings${colors.reset}`);
  process.exit(0);
} else {
  console.log(`${colors.bold}${colors.green}✅ All images validated successfully!${colors.reset}`);
  process.exit(0);
}
