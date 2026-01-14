import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FOLDERS_TO_OPTIMIZE = [
    'public/images/staging/drive-download-20260114T043920Z-3-001',
    'public/images/staging/drive-download-20260114T044033Z-3-001'
];

const MAX_WIDTH = 2000;
const MAX_HEIGHT = 2000;
const QUALITY = 85;

async function optimizeImage(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const fileName = path.basename(filePath, ext);
        const dirName = path.dirname(filePath);

        // Skip if already optimized (webp)
        if (ext === '.webp') {
            console.log(`⏭️  Skipping already optimized: ${path.basename(filePath)}`);
            return;
        }

        // Skip video files
        if (ext === '.mov' || ext === '.mp4') {
            console.log(`⏭️  Skipping video file: ${path.basename(filePath)}`);
            return;
        }

        // Skip .tif files (too large, often not needed for web)
        if (ext === '.tif' || ext === '.tiff') {
            console.log(`⏭️  Skipping TIF file: ${path.basename(filePath)}`);
            return;
        }

        console.log(`🔄 Processing: ${path.basename(filePath)}`);

        // Read and process the image
        let image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize if needed
        if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
            image = image.resize(MAX_WIDTH, MAX_HEIGHT, {
                fit: 'inside',
                withoutEnlargement: true
            });
            console.log(`   📏 Resizing from ${metadata.width}x${metadata.height}`);
        }

        // Convert to WebP
        const outputPath = path.join(dirName, `${fileName}.webp`);
        await image
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        console.log(`   ✅ Saved as WebP: ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

        // Delete original file
        fs.unlinkSync(filePath);
        console.log(`   🗑️  Deleted original file`);

    } catch (error) {
        console.error(`   ❌ Error processing ${filePath}:`, error.message);
    }
}

async function processDirectory(dirPath) {
    const fullPath = path.join(process.cwd(), dirPath);

    if (!fs.existsSync(fullPath)) {
        console.error(`❌ Directory not found: ${dirPath}`);
        return;
    }

    console.log(`\n📁 Processing directory: ${dirPath}\n`);

    const files = fs.readdirSync(fullPath);
    let processed = 0;

    for (const file of files) {
        const filePath = path.join(fullPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile() && /\.(jpg|jpeg|png|heic|webp|tif|tiff)$/i.test(file)) {
            await optimizeImage(filePath);
            processed++;
        }
    }

    console.log(`\n✨ Processed ${processed} images in ${dirPath}\n`);
}

async function main() {
    console.log('🚀 Starting image optimization...\n');

    for (const folder of FOLDERS_TO_OPTIMIZE) {
        await processDirectory(folder);
    }

    console.log('🎉 All images optimized!\n');
    console.log('📝 Next steps:');
    console.log('   1. Run: node scripts/generate-gallery-data.mjs');
    console.log('   2. Commit the optimized images');
}

main();
