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
import { generateServiceSchema } from '@/lib/schema';

interface PergolasPageProps {
  product: any;
}

// Icon mapping
const iconMap: Record<string, any> = {
  Sun,
  CloudRain,
  Snowflake,
  Thermometer,
  Lightbulb,
  Wifi,
};

const galleryImages = [
  { type: 'image' as const, src: '/images/pergolas/residential-black-r-blade-01.jpg', alt: 'Modern black R-Blade pergola installation' },
  { type: 'image' as const, src: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg', alt: 'Gray bronze R-Blade with white louvers' },
  { type: 'image' as const, src: '/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg', alt: 'Gray and white R-Shade over outdoor kitchen' },
  { type: 'image' as const, src: '/images/pergolas/residential-white-r-blade-led-strip.jpg', alt: 'White R-Blade with integrated LED lighting' },
  { type: 'image' as const, src: '/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg', alt: 'Dark gray R-Blade with recessed lights' },
];

const colorOptions = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Bronze', hex: '#4a3728' },
  { name: 'Graphite', hex: '#4a4a4a' },
  { name: 'Sand', hex: '#c2b280' },
  { name: 'Custom RAL', hex: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)' },
];

export default function PergolasPageClient({ product }: PergolasPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Louvered Pergola Installation',
    description: product?.shortDescription || 'Motorized aluminum louvers that rotate from full sun to full shade.',
    url: 'https://www.edgpatioshade.com/systems/pergolas',
    image: 'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-01.jpg',
  });

  const features = product?.features || [];
  const specs = product?.specifications || [];
  const quickFeatures = product?.quickFeatures || ['Rotating louvers (0-135°)', 'Rain & snow protection', 'Integrated LED lighting', 'Smart home ready'];

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
                  {product?.tagline || 'Most Popular System'}
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {product?.name || 'Louvered Pergola Systems'}
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  {product?.shortDescription || 'Custom motorized aluminum pergolas with rotating louvers from full sun to full shade.'}
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {quickFeatures.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <TrackedLink href={product?.pricingUrl || '/price?product=pergola'} className="flex-1">
                  <Button size="lg" className="w-full rounded-lg">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button size="lg" variant="secondary" className="w-full rounded-lg">
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">Free consultation • Custom sizing • Professional installation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">See How It Works</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              From blazing sun to sudden rainstorm—adapt your outdoor space in seconds.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img src="/images/pergolas/pergola-lifestyle.jpg" alt="Louvers fully open" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">Full Sun</p>
                  <p className="text-sm text-white/80">Louvers open at 135°</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-03.jpg" alt="Louvers partially closed" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">Filtered Light</p>
                  <p className="text-sm text-white/80">Louvers angled at 45°</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-zinc-800">
              <div className="relative aspect-video">
                <img src="/images/pergolas/pergola-closed-louvers.jpg" alt="Louvers fully closed" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg font-bold text-white">Full Shade / Rain</p>
                  <p className="text-sm text-white/80">Louvers closed at 0°</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* BEFORE/AFTER */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Transform Your Outdoor Space</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                See the difference a louvered pergola makes. What was once an unusable hot patio becomes a year-round outdoor living room.
              </p>
              <ul className="space-y-3">
                {['Adds usable square footage to your home', 'Increases property value', 'Creates a defined outdoor room', 'Protection from sun, rain, and light snow'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BeforeAfter
              beforeImage="/images/pergolas/pergola-before.jpg"
              afterImage="/images/pergolas/pergola-after.jpg"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </Container>
      </Section>

      {/* FEATURES GRID */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engineered for Midwest Weather</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Every feature designed for real-world performance—not just looks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature: any) => {
              const IconComponent = iconMap[feature.icon] || Sun;
              return (
                <div key={feature._key} className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-zinc-800">
                  <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <IconComponent className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-edg-gray-text dark:text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SPECIFICATIONS */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Specifications</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Built to handle real weather. Our pergolas are engineered for the Midwest's toughest conditions.
              </p>
              <div className="space-y-4">
                {specs.map((spec: any) => (
                  <div key={spec._key} className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-edg-gray-text dark:text-gray-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold">Color Options</h3>
              <p className="text-muted-foreground mb-6">
                Powder-coated aluminum finishes that resist fading and corrosion.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {colorOptions.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="mx-auto mb-2 h-16 w-16 rounded-full border-2 border-gray-200 shadow-sm dark:border-gray-700"
                      style={{ background: color.hex }}
                    />
                    <span className="text-sm font-medium">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to transform your outdoor space?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Get a custom quote for your louvered pergola. We'll assess your site,
              discuss your goals, and design the perfect system for your home.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={product?.quoteUrl || '/contact?type=design&product=pergola'}>
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Get Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button size="lg" variant="secondary" className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
