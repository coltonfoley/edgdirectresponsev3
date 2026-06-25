#!/usr/bin/env node
/**
 * Generate branded placeholder images for projects
 * Uses EDG brand colors: mint green (#42ffc1), dark backgrounds
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// EDG Brand Colors
const COLORS = {
  dark: '#0f172a',      // Dark blue/slate background
  brand: '#42ffc1',     // Mint green accent
  white: '#ffffff',
  gray: '#94a3b8'
};

// Project data with descriptions
const projects = [
  { id: 'karp', name: 'Karp', desc: 'Multi-Bay System with Wood Grain Panels', type: 'residential' },
  { id: 'carmines', name: "Carmine's", desc: 'Multi-Bay Commercial Restaurant System', type: 'commercial' },
  { id: 'rosebud', name: 'Rosebud', desc: 'Rooftop Restaurant - Millennium Park', type: 'commercial' },
  { id: 'wade', name: 'Wade', desc: 'Outdoor Room with Retractable Glass', type: 'residential' },
  { id: 'the-elm', name: 'The Elm', desc: 'Rooftop Commercial Dining', type: 'commercial' },
  { id: 'the-district', name: 'The District', desc: 'Tall Column Commercial System', type: 'commercial' },
  { id: 'chicago-winery', name: 'Chicago Winery', desc: 'Urban Motorized Screens', type: 'commercial' },
  { id: 'jake-everly-residence', name: 'Jake Everly Residence', desc: 'Multi-Bay Residential Entertaining', type: 'residential' },
  { id: 'greco', name: 'Greco', desc: 'Waterfall Sunken Seating Area', type: 'residential' },
  { id: 'reddy', name: 'Reddy', desc: 'Integrated Screens & Heaters', type: 'residential' },
  { id: 'arora', name: 'Arora', desc: 'Sport Court Shade System', type: 'residential' },
  { id: 'ike-oak', name: 'Ike & Oak', desc: 'Brewery Outdoor Seating', type: 'commercial' },
  { id: 'matchbox', name: 'Matchbox', desc: 'Rail Car Restaurant Connection', type: 'commercial' },
  { id: 'lou-malnati-naperville', name: 'Lou Malnati Naperville', desc: 'Screens & Heaters for Year-Round', type: 'commercial' },
  { id: '151-n-franklin', name: '151 N Franklin', desc: 'Rooftop Tenant Spaces', type: 'commercial' },
  { id: 'palm-springs-airport', name: 'Palm Springs Airport', desc: 'Airport Restaurant Shade', type: 'commercial' },
  { id: 'hyatt-wicker-park', name: 'Hyatt Wicker Park', desc: 'Hotel Restaurant Concrete Mount', type: 'commercial' },
  { id: 'boden-residence', name: 'Boden Residence', desc: 'Outdoor Kitchen & Entertaining', type: 'residential' },
  { id: 'dicks-roofing-troha', name: 'Dicks Roofing (Troha)', desc: 'Pavilion with Dual Screens', type: 'residential' },
  { id: 'dicks-roofing-project-2', name: 'Dicks Roofing Project 2', desc: 'Pavilion with Fire Pit', type: 'residential' },
  { id: 'haiti', name: 'Haiti', desc: 'Commercial Showroom Window Shutters', type: 'commercial' },
  { id: 'dalesandro', name: 'Dalesandro', desc: 'Riverwalk Privacy Wall', type: 'residential' },
  { id: 'moody', name: 'Moody', desc: 'Two-Bay Residential System', type: 'residential' },
  { id: 'tony-koch', name: 'Tony Koch', desc: '4-Bay System with Heaters', type: 'residential' },
  { id: 'avaella', name: 'Avaella', desc: 'Condo Balcony Enclosures', type: 'residential' },
];

// Map project IDs to folder names
const folderMap = {
  'karp': 'northbrook-family-entertaining',
  'carmines': 'arlington-heights-hotel',
  'rosebud': 'lake-forest-estate-builder',
  'wade': 'barrington-outdoor-room',
  'the-elm': 'elmhurst-entertainment-space',
  'the-district': 'wheaton-outdoor-dining',
  'chicago-winery': 'st-charles-winery',
  'jake-everly-residence': 'libertyville-shade-system',
  'greco': 'deerfield-backyard-oasis',
  'reddy': 'hinsdale-custom-builder',
  'arora': 'hinsdale-garden-room',
  'ike-oak': 'buffalo-grove-brewery',
  'matchbox': 'evanston-rooftop-terrace',
  'lou-malnati-naperville': 'naperville-pool-pavilion',
  '151-n-franklin': 'glencoe-modern-estate',
  'palm-springs-airport': 'lake-geneva-restaurant',
  'hyatt-wicker-park': 'wilmette-country-club',
  'boden-residence': 'winnetka-lakeside-retreat',
  'dicks-roofing-troha': 'kenilworth-heritage-home',
  'dicks-roofing-project-2': 'glencoe-renovation-builder',
  'haiti': 'lake-forest-pergola',
  'dalesandro': 'highland-park-builder',
  'moody': 'winnetka-modern-builder',
  'tony-koch': 'northbrook-family-entertaining', // reuse
  'avaella': 'barrington-hills-estate'
};

// Escape XML special characters
function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Create SVG for hero image
function createHeroSVG(project) {
  const typeLabel = project.type === 'commercial' ? 'COMMERCIAL PROJECT' : 'RESIDENTIAL PROJECT';
  const safeName = escapeXml(project.name);
  const safeDesc = escapeXml(project.desc);
  
  return `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${COLORS.dark};stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="1920" height="1080" fill="url(#bg)"/>
    
    <!-- Decorative elements -->
    <rect x="0" y="0" width="1920" height="8" fill="${COLORS.brand}"/>
    <rect x="860" y="300" width="200" height="4" fill="${COLORS.brand}"/>
    
    <!-- Type Label -->
    <text x="960" y="380" font-family="Arial, sans-serif" font-size="16" 
          font-weight="600" fill="${COLORS.brand}" text-anchor="middle" 
          letter-spacing="4">${typeLabel}</text>
    
    <!-- Project Name -->
    <text x="960" y="480" font-family="Arial, sans-serif" font-size="72" 
          font-weight="700" fill="${COLORS.white}" text-anchor="middle">${safeName}</text>
    
    <!-- Description -->
    <text x="960" y="550" font-family="Arial, sans-serif" font-size="28" 
          fill="${COLORS.gray}" text-anchor="middle">${safeDesc}</text>
    
    <!-- Bottom accent -->
    <rect x="760" y="620" width="400" height="1" fill="${COLORS.brand}" opacity="0.5"/>
    
    <!-- EDG Logo text -->
    <text x="960" y="1000" font-family="Arial, sans-serif" font-size="18" 
          font-weight="600" fill="${COLORS.brand}" text-anchor="middle" 
          letter-spacing="2">EDG PATIO SHADE</text>
  </svg>`;
}

// Create SVG for gallery images
function createGallerySVG(number) {
  return `<svg width="1600" height="1200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${COLORS.dark};stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <rect width="1600" height="1200" fill="url(#bg)"/>
    <rect x="0" y="0" width="1600" height="6" fill="${COLORS.brand}"/>
    
    <text x="800" y="580" font-family="Arial, sans-serif" font-size="24" 
          fill="${COLORS.gray}" text-anchor="middle">Gallery Image ${number}</text>
    
    <text x="800" y="1150" font-family="Arial, sans-serif" font-size="16" 
          fill="${COLORS.brand}" text-anchor="middle" letter-spacing="2">EDG PATIO + SHADE</text>
  </svg>`;
}

async function generateImages() {
  console.log('🎨 Generating branded placeholder images...\n');
  
  for (const project of projects) {
    const folder = folderMap[project.id];
    if (!folder) {
      console.log(`⚠️  No folder mapping for ${project.id}`);
      continue;
    }
    
    const baseDir = path.join(__dirname, '../public/projects', folder);
    
    // Ensure directory exists
    if (!fs.existsSync(baseDir)) {
      console.log(`⚠️  Directory not found: ${baseDir}`);
      continue;
    }
    
    console.log(`📁 ${project.name}`);
    
    // Generate hero image
    const heroSVG = createHeroSVG(project);
    await sharp(Buffer.from(heroSVG))
      .jpeg({ quality: 90 })
      .toFile(path.join(baseDir, 'hero.jpg'));
    console.log('   ✓ hero.jpg');
    
    // Generate gallery images 1-4
    for (let i = 1; i <= 4; i++) {
      const gallerySVG = createGallerySVG(i);
      await sharp(Buffer.from(gallerySVG))
        .jpeg({ quality: 90 })
        .toFile(path.join(baseDir, `${i}.jpg`));
      console.log(`   ✓ ${i}.jpg`);
    }
    
    console.log('');
  }
  
  console.log('✅ All branded placeholders generated!');
}

generateImages().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
