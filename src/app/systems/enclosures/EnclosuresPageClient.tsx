'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import { BeforeAfter } from '@/components/features/gallery/BeforeAfter';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Wind,
  Thermometer,
  Eye,
  Maximize2,
  Shield,
  Phone,
  ChevronRight,
  Droplets,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateServiceSchema } from '@/lib/schema';

interface EnclosuresPageProps {
  product: any;
}

const iconMap: Record<string, any> = {
  Wind,
  Thermometer,
  Eye,
  Maximize2,
  Shield,
  Droplets,
};

const galleryImages = [
  { type: 'image' as const, src: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg', alt: 'Commercial glass enclosure at night with outdoor dining' },
  { type: 'image' as const, src: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg', alt: 'Retractable glass panels open on commercial patio during the day' },
  { type: 'image' as const, src: '/images/enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg', alt: 'Glass wall system with elegant hanging lights' },
  { type: 'image' as const, src: '/images/enclosures/commercial-glass-enclosure-interior-wood-deck-01.jpg', alt: 'Interior view of glass enclosure on wood deck' },
  { type: 'image' as const, src: '/images/enclosures/commercial-glass-enclosure-night-interior-01.jpg', alt: 'Glass enclosure interior lighting at night' },
  { type: 'image' as const, src: '/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg', alt: 'Residential white pergola with glass sliding doors by the pool' },
  { type: 'image' as const, src: '/images/pergolas/residential-white-pergola-pool-glass-doors-02.jpg', alt: 'Modern louvered roof with glass enclosure exterior view' },
  { type: 'image' as const, src: '/images/enclosures/residential-glass-enclosure-lifestyle.jpg', alt: 'Residential glass enclosure with people lounging inside' },
];

const systemTypes = [
  { name: 'Bi-Fold', desc: 'Panels fold accordion-style to one or both sides. Best for large openings.', image: '/images/frameless-sliding-glass-walls.jpg' },
  { name: 'Stacking', desc: 'Individual panels slide and stack. Great for partial openings.', image: '/images/staging/residential-white-pergola-pool-glass-doors-01.jpg' },
  { name: 'Sliding', desc: 'Panels slide on tracks. Ideal for narrow spaces or straight runs.', image: '/images/staging/Photo B250XL Brustor - REF_2022NL04 (5).jpg' },
];

export default function EnclosuresPageClient({ product }: EnclosuresPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Glass Enclosure Systems',
    description: product?.shortDescription || 'Frameless retractable glass walls that transform your patio into a year-round room.',
    url: 'https://www.edgpatioshade.com/systems/enclosures',
    image: 'https://www.edgpatioshade.com/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
  });

  const features = product?.features || [];
  const specs = product?.specifications || [];
  const quickFeatures = product?.quickFeatures || ['Panels stack & disappear', 'Weatherproof seals', 'Year-round use', 'Adds home value'];

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      {/* HERO WITH GALLERY */}
      <section className="bg-white pt-8 pb-16 dark:bg-black">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <ProductGallery items={galleryImages} />
            
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">
                  {product?.tagline || 'Year-Round Living'}
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {product?.name || 'Glass Patio Enclosures'}
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  {product?.shortDescription || 'Frameless sliding glass doors and outdoor glass walls that stack, fold, and disappear. Add weatherproof square footage to your home without heavy construction.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickFeatures.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=enclosure'} className="flex-1">
                  <Button size="lg" className="w-full rounded-none">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button size="lg" variant="secondary" className="w-full rounded-none"><Phone className="mr-2 h-5 w-5" /> Call Us</Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">Free consultation • Engineering included • Professional installation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SYSTEM TYPES */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Opening Configurations</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Choose how your space opens based on your layout and preferences.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {systemTypes.map((type) => (
              <div key={type.name} className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
                <div className="relative aspect-video">
                  <img src={type.image} alt={type.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{type.name}</h3>
                  <p className="text-edg-gray-text font-medium dark:text-gray-400">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* BEFORE/AFTER */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Expand Your Living Space</h2>
              <p className="text-edg-gray-text mb-6 text-lg font-medium dark:text-gray-400">
                That covered patio you can only use 5 months a year? Transform it into usable square footage year-round—without the cost of a traditional addition.
              </p>
              <ul className="space-y-3">
                {['Use your outdoor space 365 days a year', 'Adds significant value to your home', 'No heavy construction required', 'Open completely for the outdoor feel', 'Close for protection and climate control'].map((item) => (
                  <li key={item} className="text-edg-gray-text flex items-center gap-3 font-medium dark:text-gray-400">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BeforeAfter
              beforeImage="/images/enclosures/glass-enclosure-partial-open.jpg"
              afterImage="/images/enclosures/glass-enclosure-closed-exterior.jpg"
              beforeLabel="Open Patio"
              afterLabel="Enclosed"
            />
          </div>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Glass Enclosures?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              The benefits of indoor comfort with the feel of being outside.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature: any) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div key={feature._key} className="flex gap-4">
                  <div className="bg-edg-brand/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <IconComponent className="text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* IDEAL FOR */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ideal Applications</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: '/images/enclosures/commercial-glass-enclosure-night-interior-02.jpg', label: 'Covered Patios' },
              { src: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg', label: 'Pergolas' },
              { src: '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg', label: 'Pool Houses' },
              { src: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg', label: 'Restaurants' },
            ].map((item) => (
              <div key={item.label} className="group relative aspect-square overflow-hidden rounded-xl">
                <img src={item.src} alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SPECIFICATIONS */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Specifications</h2>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              {specs.map((spec: any, index: number) => (
                <div key={spec._key} className={`flex items-center justify-between p-6 ${index !== specs.length - 1 ? 'border-b border-black/5 dark:border-white/5' : ''}`}>
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
            <p className="text-edg-gray-text mt-6 text-center text-sm font-medium dark:text-gray-400">
              Specifications vary by manufacturer and configuration.
              <Link href="/contact" className="text-edg-brand-text dark:text-edg-brand ml-1 font-bold hover:underline">Contact us for detailed specs</Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-edg-dark mb-6 text-3xl font-bold md:text-4xl">Ready for Year-Round Outdoor Living?</h2>
            <p className="text-edg-dark/80 mb-8 text-xl">
              Get a custom quote for a glass enclosure system. We'll assess your space and recommend the right configuration.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=enclosure'}>
                <Button size="lg" variant="secondary" className="bg-edg-dark hover:bg-edg-dark/90 rounded-none px-8 text-lg text-white">
                  Get Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button size="lg" variant="ghost" className="text-edg-dark hover:bg-edg-dark/10 rounded-none px-8 text-lg">
                  See Gallery <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
