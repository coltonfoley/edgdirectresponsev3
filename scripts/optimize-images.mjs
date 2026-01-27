import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const MAX_DIMENSION = 2560;
const MIN_SIZE_TO_OPTIMIZE = 500 * 1024; // 500KB

async function getAllFiles(dir, fileList = []) {
    try {
        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            if (file.startsWith('.')) continue; // Skip hidden files like .DS_Store

            const filePath = path.join(dir, file);
            try {
                const stat = await fs.promises.stat(filePath);
                if (stat.isDirectory()) {
                    await getAllFiles(filePath, fileList);
                } else {
                    fileList.push(filePath);
                }
            } catch (err) {
                // console.warn(`Skipping ${filePath}: ${err.message}`);
            }
        }
    } catch (err) {
        //  console.warn(`Skipping directory ${dir}: ${err.message}`);
    }
    return fileList;
}

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    try {
        const stat = await fs.promises.stat(filePath);
        if (stat.size < MIN_SIZE_TO_OPTIMIZE) return;

        console.log(`Optimizing: ${path.relative(process.cwd(), filePath)} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

        // Check dimensions
        const dimOutput = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
        const widthMatch = dimOutput.match(/pixelWidth: (\d+)/);
        const heightMatch = dimOutput.match(/pixelHeight: (\d+)/);

        if (widthMatch && heightMatch) {
            const width = parseInt(widthMatch[1], 10);
            const height = parseInt(heightMatch[1], 10);

            if (width <= MAX_DIMENSION && height <= MAX_DIMENSION) {
                console.log(`  -> Dimensions OK (${width}x${height}). Skipping resize.`);
                return;
            }
        }

        // Run sips to resize
        execSync(`sips -Z ${MAX_DIMENSION} "${filePath}"`, { stdio: 'ignore' });

        const newStat = await fs.promises.stat(filePath);
        if (newStat.size < stat.size) {
            const saved = ((stat.size - newStat.size) / 1024 / 1024).toFixed(2);
            console.log(`  -> Saved ${saved} MB`);
        } else {
            console.log(`  -> No savings.`);
        }

    } catch (err) {
        console.error(`  -> Error optimizing ${filePath}:`, err.message);
    }
}

async function main() {
    console.log('Starting image optimization using sips...');
    const files = await getAllFiles(PUBLIC_DIR);

    for (const file of files) {
        await optimizeImage(file);
    }
    console.log('Optimization complete.');
}

main();
