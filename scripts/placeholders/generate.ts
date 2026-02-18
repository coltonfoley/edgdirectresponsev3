#!/usr/bin/env tsx
/**
 * Placeholder Image Generation Script
 * 
 * Generates JPG placeholder images for all 24 projects using Sharp.
 * Creates images with branded colors and project information overlays.
 * 
 * Usage:
 *   npx tsx scripts/placeholders/generate.ts
 * 
 * Options:
 *   --clean     Remove existing images before generating
 *   --project   Generate only for specific project slug
 *   --list      List all projects without generating
 */

import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { projectDefinitions, projectSlugs, type ProjectDefinition } from './data/projects-data';

// Configuration
const OUTPUT_BASE_DIR = path.join(process.cwd(), 'public', 'projects');

// EDG Brand Colors (from brand guidelines)
const BRAND = {
  darkBlue: '#1a2744',      // Primary dark
  blue: '#2c3e50',          // Secondary
  gold: '#c9a961',          // Accent
  lightGold: '#e0c080',     // Light accent
  white: '#ffffff',
  lightGray: '#f5f5f5',
  mediumGray: '#999999',
};

// Image dimensions
const DIMENSIONS = {
  hero: { width: 1920, height: 1080 },
  gallery: { width: 1200, height: 800 },
  thumbnail: { width: 600, height: 400 },
};

// Parse command line arguments
const args = process.argv.slice(2);
const shouldClean = args.includes('--clean');
const projectFilter = args.find((_, i) => args[i - 1] === '--project');
const shouldList = args.includes('--list');

// Utility: Ensure directory exists
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Utility: Clean directory
function cleanDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// Generate SVG placeholder as a Buffer
function generatePlaceholderSVG(
  project: ProjectDefinition,
  index: number,
  type: 'hero' | 'gallery',
  width: number,
  height: number
): Buffer {
  const isHero = type === 'hero';
  
  // Create a gradient background based on project type
  let gradientStart = BRAND.darkBlue;
  let gradientEnd = BRAND.blue;
  
  if (project.type === 'Commercial') {
    gradientStart = '#2a3f5f';
    gradientEnd = '#1a2744';
  } else if (project.type === 'Builder Project') {
    gradientStart = '#3d4f6f';
    gradientEnd = '#2a3f5f';
  }

  // Generate pattern based on index
  const patternOpacity = 0.05;
  const patternSize = 40;
  
  // Text content
  const title = project.title;
  const subtitle = project.location;
  const imageLabel = isHero ? 'Hero Image' : `Gallery Image ${index}`;
  const dimensions = `${width}×${height}`;
  
  // Calculate font sizes based on image size
  const titleSize = Math.max(24, Math.floor(width / 25));
  const subtitleSize = Math.max(14, Math.floor(width / 45));
  const labelSize = Math.max(12, Math.floor(width / 60));
  
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradientStart};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${gradientEnd};stop-opacity:1" />
    </linearGradient>
    
    <!-- Pattern -->
    <pattern id="grid" width="${patternSize}" height="${patternSize}" patternUnits="userSpaceOnUse">
      <path d="M ${patternSize} 0 L 0 0 0 ${patternSize}" fill="none" stroke="${BRAND.gold}" stroke-width="0.5" opacity="${patternOpacity}"/>
    </pattern>
    
    <!-- Gold Accent Line Gradient -->
    <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${BRAND.gold};stop-opacity:0" />
      <stop offset="50%" style="stop-color:${BRAND.gold};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND.gold};stop-opacity:0" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)" />
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <!-- Decorative corner accents -->
  <path d="M 0 0 L 100 0 L 0 100 Z" fill="${BRAND.gold}" opacity="0.1" />
  <path d="M ${width} ${height} L ${width - 100} ${height} L ${width} ${height - 100} Z" fill="${BRAND.gold}" opacity="0.1" />
  
  <!-- Gold accent line -->
  <rect x="${width * 0.2}" y="${height * 0.45}" width="${width * 0.6}" height="2" fill="url(#goldLine)" />
  
  <!-- Project Type Badge -->
  <rect x="${width / 2 - 60}" y="${height * 0.25 - 15}" width="120" height="30" rx="15" fill="${BRAND.gold}" opacity="0.9" />
  <text x="${width / 2}" y="${height * 0.25 + 5}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${labelSize}" 
        font-weight="600"
        fill="${BRAND.darkBlue}" 
        text-anchor="middle">${project.type.toUpperCase()}</text>
  
  <!-- Main Title -->
  <text x="${width / 2}" y="${height * 0.4}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${titleSize}" 
        font-weight="700"
        fill="${BRAND.white}" 
        text-anchor="middle">${escapeXml(title)}</text>
  
  <!-- Location -->
  <text x="${width / 2}" y="${height * 0.4 + titleSize + 10}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${subtitleSize}" 
        fill="${BRAND.lightGold}" 
        text-anchor="middle">${escapeXml(subtitle)}</text>
  
  <!-- Image Label -->
  <text x="${width / 2}" y="${height * 0.55}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${labelSize}" 
        fill="${BRAND.mediumGray}" 
        text-anchor="middle">${imageLabel}</text>
  
  <!-- Dimensions -->
  <text x="${width / 2}" y="${height * 0.55 + labelSize + 8}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${Math.floor(labelSize * 0.8)}" 
        fill="${BRAND.mediumGray}" 
        text-anchor="middle" opacity="0.7">${dimensions}</text>
  
  <!-- EDG Logo placeholder -->
  <text x="${width / 2}" y="${height - 30}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${Math.floor(labelSize * 0.9)}" 
        font-weight="600"
        fill="${BRAND.gold}" 
        text-anchor="middle" opacity="0.8">EDG PatioShade</text>
</svg>
  `.trim();
  
  return Buffer.from(svg);
}

// Escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate images for a single project
async function generateProjectImages(project: ProjectDefinition): Promise<void> {
  const projectDir = path.join(OUTPUT_BASE_DIR, project.slug);
  
  console.log(`\n📁 ${project.slug}/`);
  
  // Generate hero image
  const heroSvg = generatePlaceholderSVG(
    project,
    0,
    'hero',
    DIMENSIONS.hero.width,
    DIMENSIONS.hero.height
  );
  
  await sharp(heroSvg)
    .jpeg({ quality: 90, progressive: true })
    .toFile(path.join(projectDir, 'hero.jpg'));
  
  console.log(`  ✓ hero.jpg (${DIMENSIONS.hero.width}×${DIMENSIONS.hero.height})`);
  
  // Generate gallery images
  for (let i = 1; i <= project.imageCount; i++) {
    const gallerySvg = generatePlaceholderSVG(
      project,
      i,
      'gallery',
      DIMENSIONS.gallery.width,
      DIMENSIONS.gallery.height
    );
    
    await sharp(gallerySvg)
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(projectDir, `${i}.jpg`));
    
    console.log(`  ✓ ${i}.jpg (${DIMENSIONS.gallery.width}×${DIMENSIONS.gallery.height})`);
  }
}

// Generate the mapping file
function generateMappingFile(generatedProjects: ProjectDefinition[]): void {
  const mapping = {
    generatedAt: new Date().toISOString(),
    totalProjects: generatedProjects.length,
    totalImages: generatedProjects.reduce((sum, p) => sum + p.imageCount + 1, 0), // +1 for hero
    basePath: '/projects',
    projects: generatedProjects.map(p => ({
      slug: p.slug,
      title: p.title,
      location: p.location,
      type: p.type,
      images: {
        hero: `/projects/${p.slug}/hero.jpg`,
        gallery: Array.from({ length: p.imageCount }, (_, i) => 
          `/projects/${p.slug}/${i + 1}.jpg`
        ),
      },
      imageCount: p.imageCount + 1, // Including hero
    })),
  };
  
  const mappingPath = path.join(process.cwd(), 'scripts', 'placeholders', 'project-image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\n📝 Mapping file created: scripts/placeholders/project-image-mapping.json`);
}

// List all projects
function listProjects(): void {
  console.log('\n📋 Project List (24 total):\n');
  console.log('Slug'.padEnd(35) + 'Type'.padEnd(18) + 'Images' + '  Title');
  console.log('='.repeat(100));
  
  projectDefinitions.forEach((p, i) => {
    const num = `${i + 1}`.padStart(2, '0');
    const slug = p.slug.padEnd(32);
    const type = p.type.padEnd(15);
    const imgCount = `${p.imageCount + 1}`.padStart(3);
    console.log(`${num}. ${slug} ${type} ${imgCount}  ${p.title}`);
  });
  
  console.log('='.repeat(100));
  console.log(`\nTotal images to generate: ${projectDefinitions.reduce((s, p) => s + p.imageCount + 1, 0)}`);
}

// Main function
async function main(): Promise<void> {
  console.log('🎨 EDG PatioShade Placeholder Image Generator\n');
  
  if (shouldList) {
    listProjects();
    return;
  }
  
  // Filter projects if specified
  let projectsToGenerate = projectDefinitions;
  if (projectFilter) {
    if (!projectSlugs.includes(projectFilter)) {
      console.error(`❌ Error: Project "${projectFilter}" not found`);
      console.log('\nAvailable projects:');
      projectSlugs.forEach(slug => console.log(`  - ${slug}`));
      process.exit(1);
    }
    projectsToGenerate = projectDefinitions.filter(p => p.slug === projectFilter);
    console.log(`Generating images for: ${projectFilter}\n`);
  } else {
    console.log(`Generating images for ${projectsToGenerate.length} projects...\n`);
  }
  
  // Clean output directory if requested
  if (shouldClean && !projectFilter) {
    console.log('🧹 Cleaning output directory...');
    cleanDir(OUTPUT_BASE_DIR);
  } else {
    ensureDir(OUTPUT_BASE_DIR);
  }
  
  // Generate images for each project
  const generated: ProjectDefinition[] = [];
  for (const project of projectsToGenerate) {
    const projectDir = path.join(OUTPUT_BASE_DIR, project.slug);
    
    if (shouldClean && projectFilter) {
      cleanDir(projectDir);
    } else {
      ensureDir(projectDir);
    }
    
    try {
      await generateProjectImages(project);
      generated.push(project);
    } catch (error) {
      console.error(`❌ Error generating images for ${project.slug}:`, error);
    }
  }
  
  // Generate mapping file
  generateMappingFile(generated);
  
  // Summary
  const totalImages = generated.reduce((sum, p) => sum + p.imageCount + 1, 0);
  console.log(`\n✅ Generated ${totalImages} placeholder images for ${generated.length} projects`);
  console.log(`📂 Output directory: ${OUTPUT_BASE_DIR}`);
  console.log('\nNext steps:');
  console.log('  1. Replace placeholder images with real photos as they become available');
  console.log('  2. Update project data in src/lib/projects.ts to reference new paths');
  console.log('  3. See PLACEHOLDER_SYSTEM.md for detailed documentation');
}

// Run
main().catch(console.error);
