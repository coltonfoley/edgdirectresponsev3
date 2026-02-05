import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import { BeforeAfter } from '@/components/features/gallery/BeforeAfter';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  Wind,
  Eye,
  Thermometer,
  Wifi,
  Shield,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motorized Exterior Shades | Outdoor Privacy Screens',
  description:
    'Premium motorized exterior shades and outdoor screens. Wind-rated up to 35+ mph, UV protection, and smart home integration. Block heat while preserving your view.',
  alternates: {
    canonical: '/systems/shades',
  },
  openGraph: {
    title: 'Motorized Exterior Shades | EDG Outdoor Living',
    description:
      'Wind-rated exterior screens that block heat and glare while preserving your view.',
  },
};

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/shades/shade-deployed-screens-01.jpg',
    alt: 'Motorized mesh screens deployed on white pergola',
  },
  {
    type: 'image' as const,
    src: '/images/shades/shade-patio-close-01.jpg',
    alt: 'Exterior screen shades providing sun protection on patio',
  },
  {
    type: 'image' as const,
    src: '/images/shades/commercial-white-r-blade-screens-lake.jpg',
    alt: 'Commercial pergola with retractable shade screens overlooking lake',
  },
  {
    type: 'image' as const,
    src: '/images/shades/shades-hero.jpg',
    alt: 'Pergola with solid shade panel closed for privacy',
  },
];

const features = [
  {
    icon: Thermometer,
    title: 'The Heat Block',
    description:
      'Solar fabrics dramatically reduce heat gain while keeping the breeze—so you can enjoy the shade without losing the outdoors.',
  },
  {
    icon: Wind,
    title: 'Wind-Rated Design',
    description:
      'Side tracks or cables keep the fabric secure in real conditions—not just calm days.',
  },
  {
    icon: Eye,
    title: 'View-Through Technology',
    description:
      'Solar mesh blocks glare and UV while letting you see out clearly. Protection without feeling boxed in.',
  },
  {
    icon: Sun,
    title: 'Full UV Defense',
    description:
      'Protect your furniture, flooring, and family from harmful rays—even on bright days.',
  },
  {
    icon: Wifi,
    title: 'One-Touch Control',
    description:
      'Wall switch, remote, phone app, or voice assistant. Choose how you want to operate your system.',
  },
  {
    icon: Shield,
    title: 'Multi-Year Warranty',
    description:
      'Motors, fabric, and components covered. We stand behind what we install.',
  },
];

const specs = [
  { label: 'Maximum Width', value: "Up to 20' single span" },
  { label: 'Maximum Drop', value: "Up to 16'" },
  { label: 'Wind Rating', value: '35+ mph (track-guided)' },
  { label: 'UV Blockage', value: 'Up to 97%' },
  { label: 'Visibility', value: '1-14% openness factor' },
  { label: 'Warranty', value: '5-year comprehensive' },
];

const fabricOptions = [
  {
    name: '5% Openness',
    desc: 'Maximum view, moderate heat reduction',
    opacity: 'bg-gray-300',
  },
  {
    name: '3% Openness',
    desc: 'Balanced view and solar control',
    opacity: 'bg-gray-500',
  },
  {
    name: '1% Openness',
    desc: 'Maximum heat/glare reduction',
    opacity: 'bg-gray-700',
  },
  { name: 'Blackout', desc: 'Complete light blockage', opacity: 'bg-gray-900' },
];

import { generateServiceSchema } from '@/lib/schema';

export default function ShadesPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Exterior Shades',
    description:
      'Wind-rated exterior screens that block 80%+ of heat and glare while preserving your view.',
    url: 'https://www.edgpatioshade.com/systems/shades',
    image:
      'https://www.edgpatioshade.com/images/shades/shade-deployed-screens-01.jpg',
  });

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ========== HERO WITH GALLERY ========== */}
      <section className="bg-white pt-8 pb-16 dark:bg-black">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery items={galleryImages} />

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">
                  Solar & Wind Protection
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Outdoor Privacy Screens & Motorized Shades
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  Wind-rated sun shades for patios that block 80%+ of heat and
                  glare while preserving your view. Retract completely when you
                  don't need them.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Block 80%+ solar heat',
                  'Wind rated to 35+ mph',
                  'Preserve outward view',
                  'Smart home ready',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <TrackedLink
                  href="/contact?type=price&product=shades"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full rounded-lg">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full rounded-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">
                Free consultation • Custom sizing • Professional installation
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== USE CASES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Perfect For Every Application
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Pergola Enclosure',
                desc: 'Add privacy and wind protection to your pergola with side-mount shade drops.',
                image: '/images/shades/shade-deployed-screens-01.jpg',
              },
              {
                title: 'Window & Door Screens',
                desc: 'Block solar heat before it enters your home. Reduce AC costs significantly.',
                image: '/images/shades/shade-patio-close-01.jpg',
              },
              {
                title: 'Patio & Deck',
                desc: 'Create a comfortable outdoor space even in the heat of summer.',
                image:
                  '/images/shades/commercial-white-r-blade-screens-lake.jpg',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800"
              >
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== BEFORE/AFTER ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <BeforeAfter
              beforeImage="/images/shades/shade-before-no-screens.jpg"
              afterImage="/images/shades/shade-after-screens-deployed.jpg"
              beforeLabel="Without Shades"
              afterLabel="With Shades"
            />
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Feel the Difference
              </h2>
              <p className="text-edg-gray-text mb-6 text-lg font-medium dark:text-gray-400">
                That unbearable hot spot on your patio? The glare that makes
                your TV unwatchable? The faded furniture? Motorized shades solve
                all of it—without blocking your view.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduce surface temperatures by 20-30°F',
                  'Cut glare while maintaining visibility',
                  'Protect furniture from UV fading',
                  'Lower cooling costs',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-edg-gray-text flex items-center gap-3 font-medium dark:text-gray-400"
                  >
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FEATURES ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Engineered for Performance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Not just any shade—purpose-built exterior screens designed for the
              elements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="bg-edg-brand/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <feature.icon className="text-edg-brand h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FABRIC OPTIONS ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Fabric Options
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Choose the right balance of view, light control, and heat
              reduction for your space.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-4">
            {fabricOptions.map((fabric) => (
              <div
                key={fabric.name}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div
                  className={`mx-auto mb-4 h-24 w-24 rounded-full ${fabric.opacity}`}
                />
                <h3 className="font-bold">{fabric.name}</h3>
                <p className="text-edg-gray-text mt-1 text-sm font-medium dark:text-gray-400">
                  {fabric.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-edg-gray-text mt-8 text-center font-medium dark:text-gray-400">
            50+ colors available. See fabric samples at our showroom or request
            swatches.
          </p>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Technical Specifications
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specs.length - 1
                      ? 'border-b border-black/5 dark:border-white/5'
                      : ''
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== COMMERCIAL BRIDGE ========== */}
      <Section className="border-t border-black/5 bg-zinc-50 py-20 dark:border-white/5 dark:bg-zinc-900">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-edg-brand-text dark:text-edg-brand mb-2 block text-xs font-bold tracking-wider uppercase">
                Commercial Solutions
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Need Commercial Outdoor Shading?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Reduce cooling costs and increase dining comfort for your
                business. Our heavy-duty systems are built for restaurants,
                hotels, and country clubs.
              </p>
              <Link href="/commercial/chicago-hospitality-outdoor-living">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full border border-black/10 bg-transparent hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
                >
                  View Commercial Solutions{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
              {/* Reusing a commercial-relevant image */}
              <img
                src="/images/shades/commercial-white-r-blade-screens-lake.jpg"
                alt="Commercial shading solution"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-edg-dark mb-6 text-3xl font-bold md:text-4xl">
              Ready to Beat the Heat?
            </h2>
            <p className="text-edg-dark/80 mb-8 text-xl">
              Get a custom quote for motorized shades. We'll help you choose the
              right fabric and configuration for your space.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=price&product=shades">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                >
                  Get Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-edg-dark hover:bg-edg-dark/10 rounded-full px-8 text-lg"
                >
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
