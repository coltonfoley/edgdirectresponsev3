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
import { generateServiceSchema } from '@/lib/schema';

interface ShadesPageProps {
  product: any;
}

const iconMap: Record<string, any> = {
  Sun,
  Wind,
  Eye,
  Thermometer,
  Wifi,
  Shield,
};

const galleryImages = [
  { type: 'image' as const, src: '/images/shades/shade-deployed-screens-01.jpg', alt: 'Motorized mesh screens deployed on white pergola' },
  { type: 'image' as const, src: '/images/shades/shade-patio-close-01.jpg', alt: 'Exterior screen shades providing sun protection on patio' },
  { type: 'image' as const, src: '/images/shades/commercial-white-r-blade-screens-lake.jpg', alt: 'Commercial pergola with retractable shade screens overlooking lake' },
  { type: 'image' as const, src: '/images/shades/shades-hero.jpg', alt: 'Pergola with solid shade panel closed for privacy' },
];

const fabricOptions = [
  { name: '5% Openness', desc: 'Maximum view, moderate heat reduction', opacity: 'bg-gray-300' },
  { name: '3% Openness', desc: 'Balanced view and solar control', opacity: 'bg-gray-500' },
  { name: '1% Openness', desc: 'Maximum heat/glare reduction', opacity: 'bg-gray-700' },
  { name: 'Blackout', desc: 'Complete light blockage', opacity: 'bg-gray-900' },
];

export default function ShadesPageClient({ product }: ShadesPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Motorized Exterior Shades',
    description: product?.shortDescription || 'Wind-rated exterior screens that block heat and glare.',
    url: 'https://www.edgpatioshade.com/systems/shades',
    image: 'https://www.edgpatioshade.com/images/shades/shade-deployed-screens-01.jpg',
  });

  const features = product?.features || [];
  const specs = product?.specifications || [];
  const quickFeatures = product?.quickFeatures || ['Block 80%+ solar heat', 'Wind rated to 35+ mph', 'Preserve outward view', 'Smart home ready'];

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
                  Solar & Wind Protection
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {product?.name || 'Motorized Exterior Shades'}
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  {product?.shortDescription || 'Wind-rated sun shades for patios that block 80%+ of heat and glare while preserving your view.'}
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
                <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=shades'} className="flex-1">
                  <Button size="lg" className="w-full rounded-none">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button size="lg" variant="secondary" className="w-full rounded-none"><Phone className="mr-2 h-5 w-5" /> Call Us</Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">Free consultation • Custom sizing • Professional installation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* BEFORE/AFTER */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <BeforeAfter
              beforeImage="/images/shades/shade-before.jpg"
              afterImage="/images/shades/shade-after.jpg"
              beforeLabel="Unshaded Patio"
              afterLabel="With Motorized Shades"
            />
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Feel the Difference</h2>
              <p className="text-edg-gray-text mb-6 text-lg font-medium dark:text-gray-400">
                That unbearable hot spot on your patio? The glare that makes your TV unwatchable? Motorized shades solve all of it—without blocking your view.
              </p>
              <ul className="space-y-3">
                {['Reduce surface temperatures by 20-30°F', 'Cut glare while maintaining visibility', 'Protect furniture from UV fading', 'Lower cooling costs'].map((item) => (
                  <li key={item} className="text-edg-gray-text flex items-center gap-3 font-medium dark:text-gray-400">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engineered for Performance</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Not just any shade—purpose-built exterior screens designed for the elements.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature: any) => {
              const IconComponent = iconMap[feature.icon] || Sun;
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

      {/* FABRIC OPTIONS */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Fabric Options</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Choose the right balance of view, light control, and heat reduction for your space.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-4">
            {fabricOptions.map((fabric) => (
              <div key={fabric.name} className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                <div className={`mx-auto mb-4 h-24 w-24 rounded-full ${fabric.opacity}`} />
                <h3 className="font-bold">{fabric.name}</h3>
                <p className="text-edg-gray-text mt-1 text-sm font-medium dark:text-gray-400">{fabric.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-edg-gray-text mt-8 text-center font-medium dark:text-gray-400">
            50+ colors available. See fabric samples at our showroom or request swatches.
          </p>
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
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-edg-dark mb-6 text-3xl font-bold md:text-4xl">Ready to Beat the Heat?</h2>
            <p className="text-edg-dark/80 mb-8 text-xl">
              Get a custom quote for motorized shades. We'll help you choose the right fabric and configuration for your space.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=shades'}>
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
