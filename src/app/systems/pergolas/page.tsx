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
  CloudRain,
  Snowflake,
  Thermometer,
  Lightbulb,
  Wifi,
  Shield,
  Ruler,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Louvered Pergola Systems | Motorized Aluminum Pergolas',
  description:
    'Premium louvered pergola systems with rotating aluminum louvers for complete sun, shade, and rain control. Smart home ready with integrated lighting and heating options.',
  alternates: {
    canonical: '/systems/pergolas',
  },
  openGraph: {
    title: 'Louvered Pergolas | EDG Outdoor Living',
    description:
      'Motorized aluminum pergolas with rotating louvers. The ultimate four-season outdoor room.',
  },
};

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-black-r-blade-01.jpg',
    alt: 'Modern black R-Blade pergola installation',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    alt: 'Gray bronze R-Blade with white louvers',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg',
    alt: 'Gray and white R-Shade over outdoor kitchen',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-white-r-blade-led-strip.jpg',
    alt: 'White R-Blade with integrated LED lighting',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg',
    alt: 'Dark gray R-Blade with recessed lights',
  },
];

const features = [
  {
    icon: Sun,
    title: 'Precision Sun Control',
    description:
      'Louvers rotate 0-135° at the touch of a button—so you can dial in exactly the light you want, any time of day.',
  },
  {
    icon: CloudRain,
    title: 'The Weather Shield',
    description:
      'Louvers close for a watertight seal. Integrated gutters channel rain away—no dripping, no pooling.',
  },
  {
    icon: Snowflake,
    title: 'Midwest-Engineered Frame',
    description:
      'Built for our winters. Structural calculations factor in real snow loads for your specific location.',
  },
  {
    icon: Thermometer,
    title: 'Season Extender Package',
    description:
      'Optional infrared heaters let you enjoy your space from early spring through late fall—and beyond.',
  },
  {
    icon: Lightbulb,
    title: 'Integrated Ambient Lighting',
    description:
      'Dimmable LEDs built into the louvers. Set the mood without wires or hanging fixtures.',
  },
  {
    icon: Wifi,
    title: 'Smart Home Integration',
    description:
      'Control from your phone, voice assistant, or tie into your existing home automation setup.',
  },
];

const specs = [
  { label: 'Maximum Span', value: "Up to 23' single span" },
  { label: 'Louver Rotation', value: '0° - 135°' },
  { label: 'Wind Rating', value: 'Up to 100 mph' },
  { label: 'Snow Load', value: 'Up to 60 psf' },
  { label: 'Frame Material', value: 'Powder-coated aluminum' },
  { label: 'Warranty', value: '10-year structural' },
];

const colorOptions = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Bronze', hex: '#4a3728' },
  { name: 'Graphite', hex: '#4a4a4a' },
  { name: 'Sand', hex: '#c2b280' },
  {
    name: 'Custom RAL',
    hex: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
  },
];

import { generateServiceSchema } from '@/lib/schema';

export default function PergolasPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Louvered Pergola Installation',
    description:
      'Motorized aluminum louvers that rotate from full sun to full shade—and close completely for rain protection.',
    url: 'https://www.edgpatioshade.com/systems/pergolas',
    image:
      'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-01.jpg',
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
                  Most Popular System
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Louvered Pergola Systems
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  Custom motorized aluminum pergolas with rotating louvers from
                  full sun to full shade—and close completely for rain
                  protection. The ultimate year-round outdoor room.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Rotating louvers (0-135°)',
                  'Rain & snow protection',
                  'Integrated LED lighting',
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
                  href="/contact?type=price&product=pergola"
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

      {/* ========== HOW IT WORKS ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              See How It Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              From blazing sun to sudden rainstorm—adapt your outdoor space in
              seconds.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Louvers Open */}
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img
                  src="/images/pergolas/pergola-lifestyle.jpg"
                  alt="Louvers fully open"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">Full Sun</p>
                  <p className="text-sm text-white/80">Louvers open at 135°</p>
                </div>
              </div>
            </div>

            {/* Louvers Angled */}
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img
                  src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-03.jpg"
                  alt="Louvers partially closed"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">Filtered Light</p>
                  <p className="text-sm text-white/80">Louvers angled at 45°</p>
                </div>
              </div>
            </div>

            {/* Louvers Closed */}
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img
                  src="/images/pergolas/pergola-closed-louvers.jpg"
                  alt="Louvers fully closed"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">
                    Full Shade / Rain
                  </p>
                  <p className="text-sm text-white/80">Louvers closed at 0°</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== BEFORE/AFTER ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Transform Your Outdoor Space
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                See the difference a louvered pergola makes. What was once an
                unusable hot patio becomes a year-round outdoor living room.
              </p>
              <ul className="space-y-3">
                {[
                  'Adds usable square footage to your home',
                  'Increases property value',
                  'Creates a defined outdoor room',
                  'Protection from sun, rain, and light snow',
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
            <BeforeAfter
              beforeImage="/images/pergolas/before-pergola-install.jpg"
              afterImage="/images/pergolas/after-pergola-install.jpg"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </Container>
      </Section>

      {/* ========== FEATURES ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built for Year-Round Performance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Every feature designed for the Midwest climate—and the way you
              actually live.
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

      {/* ========== OPTIONS & CONFIGURATIONS ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Options & Configurations
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Every system is custom-built to your specifications.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Colors */}
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
              <h3 className="mb-6 text-xl font-bold">Frame Colors</h3>
              <div className="grid grid-cols-3 gap-4">
                {colorOptions.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="mx-auto mb-2 h-16 w-16 rounded-full border-2 border-black/10 dark:border-white/10"
                      style={{ background: color.hex }}
                    />
                    <p className="text-sm font-medium">{color.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Custom RAL colors available for an additional lead time.
              </p>
            </div>

            {/* Add-ons */}
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-6 text-xl font-bold">Popular Add-Ons</h3>
              <ul className="space-y-4">
                {[
                  {
                    name: 'Integrated LED Lighting',
                    desc: 'Dimmable strips in louvers',
                  },
                  { name: 'Infrared Heaters', desc: 'Extend your season' },
                  {
                    name: 'Motorized Shades',
                    desc: 'Side screens for privacy/wind',
                  },
                  { name: 'Smart Controls', desc: 'App, voice, or automation' },
                  {
                    name: 'Rain Sensors',
                    desc: 'Auto-close when rain detected',
                  },
                  {
                    name: 'Fan Integration',
                    desc: 'Built-in ceiling fan mount',
                  },
                ].map((addon) => (
                  <li key={addon.name} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <span className="text-sm font-bold md:text-base">
                        {addon.name}
                      </span>
                      <span className="text-edg-gray-text text-xs md:text-sm dark:text-gray-400">
                        {' '}
                        — {addon.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

            <p className="text-edg-gray-text mt-6 text-center text-sm font-medium dark:text-gray-400">
              Specifications vary by manufacturer and configuration.
              <Link
                href="/contact"
                className="text-edg-brand-text dark:text-edg-brand ml-1 font-bold hover:underline"
              >
                Contact us for detailed specs
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== LIFESTYLE GALLERY ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How People Use Their Pergolas
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                src: '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png',
                label: 'Outdoor Dining',
              },
              {
                src: '/images/pergolas/residential-black-r-blade-04.jpg',
                label: 'Entertainment',
              },
              {
                src: '/images/pergolas/pergola-pool-spa.jpg',
                label: 'Pool & Spa',
              },
              {
                src: '/images/pergolas/residential-black-r-blade-privacy-walls-pool.jpg',
                label: 'Relaxation',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-semibold text-white">
                  {item.label}
                </p>
              </div>
            ))}
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
                Looking for Restaurant & Hotel Pergolas?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We specialize in high-ROI outdoor dining spaces for the
                hospitality industry. From country clubs to rooftop bars, get
                systems designed for commercial durability.
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
              {/* Placeholder for commercial visual - reusing a suitable existing image */}
              <img
                src="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
                alt="Commercial pergola dining setting"
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
              Ready to Create Your Outdoor Room?
            </h2>
            <p className="text-edg-dark/80 mb-8 text-xl">
              Get a custom quote for your space. We'll help you choose the right
              configuration and options for how you actually want to use it.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=price&product=pergola">
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
