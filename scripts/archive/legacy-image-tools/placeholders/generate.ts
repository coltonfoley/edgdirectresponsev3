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
 *   --validate  Validate all existing images without regenerating
 */

import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { projectDefinitions, projectSlugs, type ProjectDefinition } from './data/projects-data';

// Configuration
const OUTPUT_BASE_DIR = path.join(process.cwd(), 'public', 'projects');

// EDG Brand Colors - FROM globals.css
const BRAND = {
  background: '#000000',    // Black background (--color-edg-dark)
  mint: '#42ffc1',          // Mint accent (--color-edg-brand)
  white: '#ffffff',         // White text (--color-edg-light)
  muted: '#71717a',         // Muted text (--color-border-ui)
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
const shouldValidate = args.includes('--validate');

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

// Escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate SVG placeholder as a Buffer (CONSISTENT STYLING for all projects)
function generatePlaceholderSVG(
  project: ProjectDefinition,
  index: number,
  type: 'hero' | 'gallery',
  width: number,
  height: number
): Buffer {
  const isHero = type === 'hero';
  
  // Black background - EDG brand dark
  const bgColor = BRAND.background;
  const mintColor = BRAND.mint;
  
  // Text content - USE ACTUAL PROJECT DATA (NOT HARDCODED)
  const title = project.title;
  // FIX: Use project description for hero, location for gallery
  const subtitle = isHero ? project.description : project.location;
  const typeLabel = project.type.toUpperCase();
  
  // Calculate font sizes based on image size
  const titleSize = Math.max(72, Math.floor(width / 12));
  const subtitleSize = Math.max(16, Math.floor(width / 60));
  const smallSize = Math.max(12, Math.floor(width / 80));
  const labelSize = Math.max(14, Math.floor(width / 70));
  
  // Truncate long descriptions for better display
  const maxSubtitleLength = isHero ? 70 : 50;
  const displaySubtitle = subtitle.length > maxSubtitleLength 
    ? subtitle.substring(0, maxSubtitleLength - 3) + '...'
    : subtitle;
  
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="100%" height="100%" fill="${bgColor}" />
  
  <!-- Top mint line (centered, consistent width) -->
  <rect x="${width * 0.42}" y="${height * 0.28}" width="${width * 0.16}" height="3" fill="${mintColor}" />
  
  <!-- Project Type Label -->
  <text x="${width / 2}" y="${height * 0.35}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${labelSize}" 
        font-weight="500"
        fill="${mintColor}" 
        letter-spacing="4"
        text-anchor="middle">${typeLabel} PROJECT</text>
  
  <!-- Main Title -->
  <text x="${width / 2}" y="${height * 0.44}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${titleSize}" 
        font-weight="700"
        fill="white" 
        text-anchor="middle">${escapeXml(title)}</text>
  
  <!-- Description / Subtitle -->
  <text x="${width / 2}" y="${height * 0.52}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${subtitleSize}" 
        fill="#71717a" 
        text-anchor="middle">${escapeXml(displaySubtitle)}</text>
  
  <!-- Bottom mint line (faded) -->
  <rect x="${width * 0.3}" y="${height * 0.58}" width="${width * 0.4}" height="1" fill="${mintColor}" opacity="0.6" />
  
  <!-- EDG Brand at bottom -->
  <text x="${width / 2}" y="${height * 0.92}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${smallSize}" 
        font-weight="600"
        fill="${mintColor}" 
        letter-spacing="3"
        text-anchor="middle">EDG PATIO SHADE</text>
</svg>`;
  
  return Buffer.from(svg);
}

// Generate images for a single project
async function generateProjectImages(project: ProjectDefinition): Promise<void> {
  const projectDir = path.join(OUTPUT_BASE_DIR, project.slug);
  
  console.log(`\n📁 ${project.slug}/`);
  console.log(`   Title: ${project.title}`);
  console.log(`   Desc: ${project.description.substring(0, 50)}...`);
  
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
      csvId: p.csvId,
      title: p.title,
      location: p.location,
      type: p.type,
      description: p.description,
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

// Validate existing images
async function validateImages(): Promise<void> {
  console.log('\n🔍 Validating existing images...\n');
  
  let validCount = 0;
  let missingCount = 0;
  let errorCount = 0;
  
  for (const project of projectDefinitions) {
    const projectDir = path.join(OUTPUT_BASE_DIR, project.slug);
    const heroPath = path.join(projectDir, 'hero.jpg');
    
    process.stdout.write(`${project.slug.padEnd(35)} `);
    
    // Check hero exists
    if (!fs.existsSync(heroPath)) {
      console.log('❌ MISSING hero.jpg');
      missingCount++;
      continue;
    }
    
    // Check dimensions
    try {
      const metadata = await sharp(heroPath).metadata();
      if (metadata.width === DIMENSIONS.hero.width && metadata.height === DIMENSIONS.hero.height) {
        console.log(`✅ ${metadata.width}×${metadata.height}`);
        validCount++;
      } else {
        console.log(`⚠️  WRONG SIZE ${metadata.width}×${metadata.height} (expected ${DIMENSIONS.hero.width}×${DIMENSIONS.hero.height})`);
        errorCount++;
      }
    } catch (err) {
      console.log('❌ ERROR reading file');
      errorCount++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`Valid: ${validCount}, Missing: ${missingCount}, Errors: ${errorCount}`);
  console.log('='.repeat(50));
  
  if (missingCount > 0 || errorCount > 0) {
    console.log('\n💡 Run without --validate to regenerate all images');
  }
}

// Main function
async function main(): Promise<void> {
  console.log('🎨 EDG PatioShade Placeholder Image Generator\n');
  
  if (shouldList) {
    listProjects();
    return;
  }
  
  if (shouldValidate) {
    await validateImages();
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
    console.log(`Generating images for all ${projectDefinitions.length} projects\n`);
  }
  
  // Clean output directory if requested
  if (shouldClean) {
    console.log('🧹 Cleaning output directory...\n');
    cleanDir(OUTPUT_BASE_DIR);
  }
  
  // Ensure output directory exists
  ensureDir(OUTPUT_BASE_DIR);
  
  // Generate images for each project
  const generatedProjects: ProjectDefinition[] = [];
  
  for (const project of projectsToGenerate) {
    const projectDir = path.join(OUTPUT_BASE_DIR, project.slug);
    
    // Clean specific project directory if it exists
    if (fs.existsSync(projectDir)) {
      cleanDir(projectDir);
    } else {
      ensureDir(projectDir);
    }
    
    try {
      await generateProjectImages(project);
      generatedProjects.push(project);
    } catch (error) {
      console.error(`\n❌ Error generating images for ${project.slug}:`, error);
    }
  }
  
  // Generate mapping file
  generateMappingFile(generatedProjects);
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('✅ Generation Complete!');
  console.log('='.repeat(50));
  console.log(`\nProjects: ${generatedProjects.length}`);
  console.log(`Total images: ${generatedProjects.reduce((sum, p) => sum + p.imageCount + 1, 0)}`);
  console.log(`\n📂 Output: ${OUTPUT_BASE_DIR}`);
  console.log('\nNext steps:');
  console.log('  1. Replace placeholder images with real photos as they become available');
  console.log('  2. Update project data in src/lib/projects.ts to reference new paths');
  console.log('  3. See PLACEHOLDER_SYSTEM.md for detailed documentation');
}

// Run the script
main().catch(console.error);
