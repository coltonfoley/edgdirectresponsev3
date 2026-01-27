import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";
import Image from "next/image";
import galleryData from "@/data/gallery-images.json";

export const metadata: Metadata = {
    title: "Gallery | EDG Outdoor Living",
    description: "Explore our portfolio of luxury outdoor living spaces. Louvered pergolas, motorized shades, and glass enclosures in Chicago and Wisconsin.",
    alternates: {
        canonical: "/gallery",
    },
};

interface GalleryImage {
    src: string;
    width: number;
    height: number;
    alt: string;
    id: string;
}

export default function GalleryPage() {
    // Shuffling the images on the server or client? 
    // To keep it static and stable, let's just use the data as is or deterministic sort.
    // If we want random on every build, we can do it here.
    const displayImages: GalleryImage[] = [...galleryData].sort((a, b) => a.src.localeCompare(b.src));

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
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
                            Real projects. Real transformations. Explore our completed installations
                            across Chicago, Wisconsin, and nationwide—from luxury residential estates to commercial spaces.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-edg-brand/30 bg-edg-brand/5 text-edg-brand text-sm font-medium animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-edg-brand opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-edg-brand"></span>
                            </span>
                            Detailed Case Studies Coming Soon
                        </div>
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
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
