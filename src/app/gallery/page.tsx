import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Link } from '@/components/ui/Link';
import { buildContactHref } from '@/lib/contact-links';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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

const displayPriority = new Map(
  [
    '/images/brand/hero-outdoor-dining-showcase.jpg',
    '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.webp',
    '/images/shades/progressive-magnatrack-waterfront-lounge.jpg',
    '/images/enclosures/residential-glass-enclosure-lifestyle.jpg',
    '/projects/karp/karp-hero.jpg',
    '/projects/carmines/carmines-hero.jpg',
  ].map((src, index) => [src, index])
);

function getGallerySortKey(image: GalleryImage): string {
  const priority = displayPriority.get(image.src);
  if (priority !== undefined) return String(priority).padStart(3, '0');

  if (image.src.startsWith('/projects/')) return `100-${image.src}`;
  if (image.src.includes('/pergolas/')) return `200-${image.src}`;
  if (image.src.includes('/shades/')) return `300-${image.src}`;
  if (image.src.includes('/enclosures/')) return `400-${image.src}`;
  if (image.src.includes('/images/brand/')) return `500-${image.src}`;
  if (image.src.includes('/images/appliances/')) return `700-${image.src}`;

  return `600-${image.src}`;
}

export const metadata: Metadata = {
  title: 'Project Gallery | EDG Patio & Shade Work',
  description:
    'View our portfolio of motorized pergola and screen installations across Chicago, Wisconsin, and Florida.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Project Gallery | EDG Patio & Shade',
    description: 'Portfolio of outdoor living installations.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

export default function GalleryPage() {
  const displayImages: GalleryImage[] = [...galleryData].sort((a, b) =>
    getGallerySortKey(a).localeCompare(getGallerySortKey(b))
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Section className="border-b border-white/10 bg-black pt-32 pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Gallery' }]} />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-edg-brand mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase">
                <span className="bg-edg-brand h-px w-8"></span>
                Visual Portfolio
              </p>
              <h1 className="mb-8 text-5xl leading-none font-bold text-white md:text-7xl">
                The Work.
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-zinc-300">
                Real project, product, and showroom imagery from EDG patio,
                shade, screen, glass, and outdoor room work.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href={buildContactHref({
                    type: 'consultation',
                    product: 'multiple',
                    source: 'gallery_hero',
                  })}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-edg-brand grid gap-4 border-l-2 pl-6">
              {[
                ['Pergolas', 'adjustable shade and rain control'],
                ['Screens', 'bug, glare, wind, and privacy control'],
                ['Glass', 'enclosed outdoor-room projects'],
              ].map(([label, description]) => (
                <div key={label}>
                  <div className="text-sm font-bold tracking-[0.16em] text-white uppercase">
                    {label}
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-black py-0">
        <Container fluid className="px-0 md:px-0">
          {/* Use a simple flex column layout on mobile, masonry-like on desktop via columns */}
          <div className="columns-1 gap-0 space-y-0 md:columns-2 xl:columns-3">
            {displayImages.map((image) => (
              <div key={image.id} className="group relative break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full grayscale-[20%] transition-all duration-700 ease-out group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transform text-center transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-edg-brand mb-2 text-xs font-bold tracking-widest uppercase">
                      EDG Project
                    </p>
                    <div className="mx-auto h-px w-8 bg-white/50"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-black py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-edg-brand mb-4 text-xs font-bold tracking-[0.2em] uppercase">
              End of Portfolio
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Turn the inspiration into a site-specific plan.
            </h2>
            <p className="mb-10 text-zinc-300">
              EDG can help match the right pergola, screen, glass, appliance, or
              outdoor-room package to the way the space needs to work.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={buildContactHref({
                  type: 'consultation',
                  product: 'multiple',
                  source: 'gallery_bottom',
                })}
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/showroom">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Visit the Showroom
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
