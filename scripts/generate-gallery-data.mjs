import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/gallery-images.json');

async function getGalleryImages(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    const images = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            images.push(...(await getGalleryImages(fullPath)));
        } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(entry.name)) {
            try {
                const metadata = await sharp(fullPath).metadata();
                const relativePath = path.relative(PUBLIC_DIR, fullPath);
                const publicUrl = '/' + relativePath.split(path.sep).join('/');

                if (metadata.width && metadata.height) {
                    images.push({
                        src: publicUrl,
                        width: metadata.width,
                        height: metadata.height,
                        alt: entry.name.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
                        id: publicUrl
                    });
                }
            } catch (e) {
                console.error(`Failed to process ${fullPath}:`, e.message);
            }
        }
    }
    return images;
}

async function main() {
    console.log('Generating gallery data...');
    try {
        const images = await getGalleryImages(IMAGES_DIR);

        // Ensure directory exists
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(images, null, 2));
        console.log(`Successfully generated ${images.length} gallery items to ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Error generating gallery data:', error);
        process.exit(1);
    }
}

main();
