import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import galleryData from '@/data/gallery-images.json';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  id: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#111" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => Buffer.from(str).toString('base64');

export const metadata: Metadata = {
  title: 'Project Gallery | EDG Outdoor Living Work',
  description: 'View our portfolio of motorized pergola and screen installations across Chicago, Wisconsin, and Florida.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Project Gallery | EDG Outdoor Living',
    description: 'Portfolio of outdoor living installations.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Outdoor Living',
  },
};

export default function GalleryPage() {
  const displayImages: GalleryImage[] = [...galleryData].sort((a, b) =>
    a.src.localeCompare(b.src)
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Section className="bg-black pt-32 pb-24 border-b border-white/10">
        <Container>
          <div className="max-w-4xl">
            <p className="text-edg-brand mb-6 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3">
              <span className="h-px w-8 bg-edg-brand"></span>
              Visual Portfolio
            </p>
            <h1 className="mb-8 text-6xl md:text-8xl font-bold tracking-tighter text-white">
              The Work.
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-gray-400 mb-12">
              Transformations across Chicago and Wisconsin. No render ghosts. Just built reality.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-black py-0">
        <Container fluid className="px-0 md:px-0">
          {/* Use a simple flex column layout on mobile, masonry-like on desktop via columns */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-0 space-y-0">
            {displayImages.map((image) => (
              <div key={image.id} className="relative group break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-edg-brand text-xs font-bold tracking-widest uppercase mb-2">EDG Project</p>
                    <div className="w-8 h-px bg-white/50 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-black py-24 border-t border-white/10">
        <Container>
          <div className="text-center">
            <div className="text-gray-500 text-sm uppercase tracking-widest animate-pulse flex justify-center items-center gap-2">
              End of Portfolio <span className="h-1 w-1 bg-edg-brand rounded-full"></span>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
