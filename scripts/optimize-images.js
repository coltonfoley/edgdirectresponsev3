#!/usr/bin/env node
/**
 * Optimize oversized images using Sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to optimize with target sizes
const imagesToOptimize = [
  {
    src: 'public/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png',
    target: 300, // KB
    quality: 80,
    format: 'webp'
  },
  {
    src: 'public/images/pergolas/residential-black-r-blade-04.jpg',
    target: 150,
    quality: 80,
    format: 'webp'
  },
  {
    src: 'public/images/pergolas/residential-black-r-blade-01.jpg',
    target: 150,
    quality: 80,
    format: 'webp'
  },
  {
    src: 'public/images/pergolas/residential-black-r-blade-02.jpg',
    target: 150,
    quality: 80,
    format: 'webp'
  },
  {
    src: 'public/images/brand/detail-led.jpg',
    target: 200,
    quality: 80,
    format: 'webp'
  }
];

async function optimizeImage(config) {
  const inputPath = path.join(process.cwd(), config.src);
  const dir = path.dirname(inputPath);
  const basename = path.basename(config.src, path.extname(config.src));
  const outputPath = path.join(dir, `${basename}.${config.format}`);
  
  console.log(`\n📷 Processing: ${config.src}`);
  
  try {
    // Get original size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(1);
    console.log(`   Original: ${originalSizeKB} KB`);
    
    // Process image
    let pipeline = sharp(inputPath);
    
    // Resize if too large (max 2000px width)
    const metadata = await pipeline.metadata();
    if (metadata.width > 2000) {
      pipeline = pipeline.resize(2000, null, { withoutEnlargement: true });
      console.log(`   Resized to: 2000px width`);
    }
    
    // Convert to format
    if (config.format === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (config.format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: config.quality, progressive: true });
    }
    
    // Save
    await pipeline.toFile(outputPath);
    
    // Get new size
    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(1);
    const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`   Optimized: ${newSizeKB} KB (${savings}% reduction)`);
    console.log(`   Output: ${outputPath.replace(process.cwd() + '/', '')}`);
    
    return {
      success: true,
      originalSize: originalSizeKB,
      newSize: newSizeKB,
      savings: savings
    };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  let totalOriginal = 0;
  let totalNew = 0;
  let successCount = 0;
  
  for (const config of imagesToOptimize) {
    const result = await optimizeImage(config);
    if (result.success) {
      totalOriginal += parseFloat(result.originalSize);
      totalNew += parseFloat(result.newSize);
      successCount++;
    }
  }
  
  console.log('\n========================================');
  console.log('📊 Optimization Summary');
  console.log('========================================');
  console.log(`Images processed: ${successCount}/${imagesToOptimize.length}`);
  console.log(`Total original size: ${totalOriginal.toFixed(1)} KB`);
  console.log(`Total optimized size: ${totalNew.toFixed(1)} KB`);
  console.log(`Total savings: ${(totalOriginal - totalNew).toFixed(1)} KB (${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%)`);
  console.log('\n✅ Done! Remember to:');
  console.log('   1. Update image references in code to use .webp');
  console.log('   2. Delete original large files');
  console.log('   3. Run npm run validate-images');
}

main().catch(console.error);
