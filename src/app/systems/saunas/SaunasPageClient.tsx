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
  Thermometer,
  Wind,
  Droplets,
  Timer,
  Shield,
  Wrench,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateServiceSchema } from '@/lib/schema';
import { urlFor } from '@/sanity/lib/image';

interface SaunasPageProps {
  product: any;
}

const iconMap: Record<string, any> = {
  Thermometer,
  Wind,
  Droplets,
  Timer,
  Shield,
  Wrench,
};

const defaultFeatures = [
  { icon: 'Shield', title: 'ThermoWood® Construction', description: 'Sustainably sourced Scandinavian timber that\'s been heat-treated to eliminate moisture, warping, and decay — no chemicals, no compromises.' },
  { icon: 'Droplets', title: 'Tempered Glass Throughout', description: 'Floor-to-ceiling tempered glass doors and windows flood the cabin with natural light and give it a distinctly modern, high-end aesthetic.' },
  { icon: 'Wind', title: 'Integrated Ventilation', description: 'A built-in ventilation system circulates fresh air properly, keeping sessions comfortable and the interior dry between uses.' },
  { icon: 'Thermometer', title: 'Bituminous Roof Tiles', description: 'Weather-resistant roofing designed to handle Midwest winters, heavy snow loads, and year-round outdoor exposure without maintenance.' },
  { icon: 'Timer', title: 'LED Under-Bench Lighting', description: 'Ambient LED lighting built beneath the benches creates a warm, spa-like atmosphere without overhead glare.' },
  { icon: 'Wrench', title: 'Full-Service Installation', description: 'We handle the site prep, electrical connection, ventilation finishing, and final inspection — turnkey from delivery to first session.' },
];

const defaultSpecs = [
  { label: 'Available Models', value: '2–3, 4, and 5–6 person cabins' },
  { label: 'Construction Material', value: 'ThermoWood® (heat-treated Scandinavian timber)' },
  { label: 'Roof', value: 'Bituminous tile — weather & snow rated' },
  { label: 'Glazing', value: 'Tempered glass doors & windows' },
  { label: 'Lighting', value: 'LED under-bench lighting included' },
  { label: 'Ventilation', value: 'Integrated system — standard on all models' },
  { label: 'Warranty', value: '5 years' },
  { label: 'Installation', value: 'Full-service — site prep, electrical, finish' },
];

export default function SaunasPageClient({ product }: SaunasPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Custom Sauna Installation',
    description: product?.shortDescription || 'Professionally specified and installed indoor and outdoor saunas for year-round wellness.',
    url: 'https://www.edgpatioshade.com/systems/saunas',
    image: product?.heroImage ? urlFor(product.heroImage).url() : undefined,
  });

  const features = product?.features || defaultFeatures;
  const specs = product?.specifications || defaultSpecs;
  const quickFeatures = product?.quickFeatures || [
    'ThermoWood® construction',
    '2–3, 4, and 5–6 person models',
    'Tempered glass doors & windows',
    'Full-service installation',
  ];

  const galleryImages = product?.gallery?.map((item: any) => ({
    type: 'image' as const,
    src: item.image ? urlFor(item.image).url() : (item.url || item),
    alt: item.alt || product?.name || 'Sauna image',
  })) || [
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw12-outdoor-sauna-12.webp', alt: 'Outdoor sauna cabin exterior' },
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw12-outdoor-sauna-2.webp', alt: 'Outdoor sauna side view' },
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw12-outdoor-sauna-5.webp', alt: 'Outdoor sauna detail' },
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp', alt: 'Large outdoor sauna cabin' },
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw16-outdoor-sauna-23.webp', alt: 'Outdoor sauna with landscape setting' },
    { type: 'image' as const, src: '/images/saunas/mande-spa-mw20-outdoor-sauna-6.webp', alt: 'Premium outdoor sauna installation' },
  ];

  const beforeAfterSection = product?.beforeAfter?.beforeImage ? (
    <Section className="bg-white py-20 dark:bg-black">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Total Transformation</h2>
            <p className="text-edg-gray-text mb-6 text-lg font-medium dark:text-gray-400">
              See how a custom sauna turns an unused corner of your property into a daily wellness retreat.
            </p>
          </div>
          <BeforeAfter
            beforeImage={urlFor(product.beforeAfter.beforeImage).url()}
            afterImage={urlFor(product.beforeAfter.afterImage).url()}
            beforeLabel={product.beforeAfter.beforeLabel || 'Before'}
            afterLabel={product.beforeAfter.afterLabel || 'After'}
          />
        </div>
      </Container>
    </Section>
  ) : null;

  const useCases = [
    {
      title: 'Year-Round Wellness',
      desc: 'Step outside any time of year for deep heat that loosens muscles, clears the mind, and improves sleep. Cold Midwest winters make it even more rewarding.',
      image: '/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp',
    },
    {
      title: 'Right-Sized for Any Space',
      desc: 'Choose from 2–3, 4, or 5–6 person cabins. Whether it\'s a corner of your patio or a dedicated backyard structure, we\'ll find the fit.',
      image: '/images/saunas/mande-spa-mw12-outdoor-sauna-5.webp',
    },
    {
      title: 'Backyard Destination',
      desc: 'A standalone outdoor sauna cabin becomes a focal point of your property — perfect after a swim, workout, or long day.',
      image: '/images/saunas/mande-spa-mw20-outdoor-sauna-6.webp',
    },
  ];

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
                  {product?.tagline || 'Wellness & Recovery'}
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {product?.name || 'Custom Saunas'}
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  {product?.shortDescription || 'Handcrafted outdoor sauna cabins built from ThermoWood® — sustainably sourced Scandinavian timber engineered to last in any climate. We spec the right model for your space and handle every step of installation.'}
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

              <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row">
                <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=saunas'} className="flex-1">
                  <Button size="lg" className="h-full w-full rounded-none">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button size="lg" variant="secondary" className="h-full w-full rounded-none"><Phone className="mr-2 h-5 w-5" /> Call Us</Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">Handcrafted in Lithuania. Installed by us. 5-year warranty.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Sauna, Your Way</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-700">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {beforeAfterSection}

      {/* FEATURES */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for the Long Run</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Every sauna we install is specified for durability, performance, and the specific demands of your climate and usage.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature: any) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div key={feature._key || feature.title} className="flex gap-4">
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

      {/* SPECIFICATIONS */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Specification Highlights</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              {specs.map((spec: any, index: number) => (
                <div
                  key={spec._key || spec.label}
                  className={`flex items-center justify-between p-6 ${index !== specs.length - 1 ? 'border-b border-black/5 dark:border-white/5' : ''}`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-edg-dark relative overflow-hidden py-24 text-white">
        <div className="from-edg-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Ready to Add a Sauna?</h2>
            <p className="mb-10 text-xl leading-relaxed text-gray-400">
              Tell us about your space and goals — we'll spec the right sauna, handle the installation, and have you relaxing in it faster than you expect.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=saunas'}>
                <Button size="lg" className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-none px-10 text-lg transition-all hover:scale-105">
                  Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button size="lg" variant="ghost" className="rounded-none px-10 text-lg text-white hover:bg-white/10">
                  View Gallery <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
