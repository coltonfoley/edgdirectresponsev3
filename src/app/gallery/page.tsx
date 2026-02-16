import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getGalleryImages } from '@/sanity/lib/server-fetch';
import { urlFor } from '@/sanity/lib/image';
import galleryData from '@/data/gallery-images.json';

export const metadata: Metadata = {
  title: 'Gallery | EDG Outdoor Living',
  description:
    'Explore our portfolio of luxury outdoor living spaces. Louvered pergolas, motorized shades, and glass enclosures in Chicago and Wisconsin.',
  alternates: {
    canonical: '/gallery',
  },
};

export default async function GalleryPage() {
  const sanityImages = await getGalleryImages();

  // Mix in fallbacks if Sanity is empty, or just use Sanity
  // Given the goal is 100% complete, we should prefer Sanity but allow fallback for dev
  const displayImages = sanityImages?.length > 0 ? sanityImages.map((img: any) => ({
    id: img._id,
    src: urlFor(img.src).url(), // Note: galleryImagesQuery maps image.asset->url to 'src' if I recall, but let's check fetch
    width: img.width || 800,
    height: img.height || 600,
    alt: img.alt || 'EDG Outdoor Living Project',
  })) : [...galleryData].sort((a, b) => a.src.localeCompare(b.src));

  return (
    <main className="min-h-screen bg-black text-white">
      <Section className="bg-black pt-32 pb-12">
        <Container>
          <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto mb-20 max-w-4xl text-center duration-700">
            <p className="text-edg-brand mb-6 text-xs font-bold tracking-[0.2em] uppercase">
              Visual Experience
            </p>
            <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">
              The Gallery
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-white/60">
              Real projects. Real transformations. Explore our completed
              installations across Chicago, Wisconsin, and nationwide—from
              luxury residential estates to commercial spaces.
            </p>
            <div className="border-edg-brand/30 bg-edg-brand/5 text-edg-brand inline-flex animate-pulse items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="bg-edg-brand absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-edg-brand relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              Detailed Case Studies Coming Soon
            </div>
          </div>

          {/* Gallery Grid - Masonry-ish feel using CSS columns */}
          <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
            {displayImages.map((image: any) => (
              <div
                key={image.id}
                className="group relative mb-8 break-inside-avoid overflow-hidden rounded-sm bg-zinc-900"
              >
                <div className="relative w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="mb-1 text-xs font-bold tracking-wider text-white/60 uppercase">
                      EDG Outdoor Living
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pb-12 text-center">
            <p className="animate-pulse text-sm text-white/40">
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
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
