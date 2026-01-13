import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const metadata: Metadata = {
    title: "Gallery | EDG Outdoor Living",
    description: "Explore our portfolio of luxury outdoor living spaces. Louvered pergolas, motorized shades, and glass enclosures in Chicago and Wisconsin.",
};

type GalleryImage = {
    src: string;
    width: number;
    height: number;
    alt: string;
    id: string;
};

// Recursive function to get all images
async function getGalleryImages(dir: string, baseDir: string = ""): Promise<GalleryImage[]> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    const images: GalleryImage[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        // Calculate the relative path from the 'public' folder for the URL
        // If dir is /.../public/images, and entry is foo.jpg, we want /images/foo.jpg
        // We know we start at process.cwd() + /public/images.

        if (entry.isDirectory()) {
            images.push(...(await getGalleryImages(fullPath, baseDir)));
        } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(entry.name)) {
            try {
                // Read metadata for dimensions
                const metadata = await sharp(fullPath).metadata();

                // Construct public URL
                // Assuming 'dir' starts with the absolute path to 'public'
                // We'll fix the path logic to be robust
                const relativePath = path.relative(path.join(process.cwd(), "public"), fullPath);
                const publicUrl = "/" + relativePath.split(path.sep).join("/");

                if (metadata.width && metadata.height) {
                    images.push({
                        src: publicUrl,
                        width: metadata.width,
                        height: metadata.height,
                        alt: entry.name.replace(/\.[^/.]+$/, "").replace(/-/g, " "), // filename as alt, cleanup
                        id: publicUrl
                    });
                }
            } catch (e) {
                console.error(`Failed to process image ${fullPath}:`, e);
            }
        }
    }

    return images;
}

export default async function GalleryPage() {
    const imagesDir = path.join(process.cwd(), "public", "images");
    let displayImages: GalleryImage[] = [];

    try {
        displayImages = await getGalleryImages(imagesDir);
        // Sort randomly or by date? User didn't specify. 
        // Let's shuffle them slightly so it's not just a file list dump, 
        // or keep them alphabetical. Random feels more "gallery-like".
        // Actually, filesystem order is arbitrary. Let's shuffle to mix categories.
        displayImages = displayImages.sort(() => Math.random() - 0.5);
    } catch (error) {
        console.error("Error loading gallery images:", error);
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Section className="pt-32 pb-12 bg-black">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <p className="text-edg-brand font-bold tracking-[0.2em] uppercase text-xs mb-6">
                            Visual Experience
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            The Gallery
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Immerse yourself in our collection of transformed outdoor spaces.
                            Scroll to explore the details of our finest work in Chicago and Wisconsin.
                        </p>
                    </div>

                    {/* Gallery Grid - Masonry-ish feel using CSS columns */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {displayImages.map((image) => (
                            <div
                                key={image.id}
                                className="break-inside-avoid relative group overflow-hidden rounded-sm bg-zinc-900 mb-8"
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        placeholder="blur"
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} // Simple placeholder
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">
                                            EDG Outdoor Living
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24 pb-12">
                        <p className="text-white/40 text-sm animate-pulse">
                            End of Gallery
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

// Shimmer effect helpers for loading state
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)
