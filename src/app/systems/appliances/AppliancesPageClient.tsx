'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Thermometer,
  ChefHat,
  UtensilsCrossed,
  Zap,
  Shield,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateServiceSchema } from '@/lib/schema';

interface AppliancesPageProps {
  product: any;
}

const iconMap: Record<string, any> = {
  Flame,
  Thermometer,
  ChefHat,
  UtensilsCrossed,
  Zap,
  Shield,
};

const galleryImages = [
  { type: 'image' as const, src: '/images/appliances/outdoor-kitchen-hero.png', alt: 'Luxury outdoor kitchen with stainless steel grill and pizza oven' },
  { type: 'image' as const, src: '/images/appliances/patio-heater.png', alt: 'Modern outdoor patio heater next to lounge seating' },
  { type: 'image' as const, src: '/images/pergolas/residential-black-r-blade-01.jpg', alt: 'Outdoor living space with integrated appliances' },
];

const useCases = [
  { title: 'The Outdoor Chef', desc: 'Everything you need to cook gourmet meals outside: grills, side burners, and refrigeration.', image: '/images/appliances/outdoor-kitchen-hero.png' },
  { title: 'Year-Round Comfort', desc: "Don't let the chill drive you inside. Powerful heaters keep your space usable well into autumn.", image: '/images/appliances/patio-heater.png' },
  { title: 'Pizza Night', desc: 'Create memories with family and friends around a wood-fired or gas pizza oven.', image: '/images/pergolas/residential-black-r-blade-01.jpg' },
];

const defaultFeatures = [
  { icon: 'Flame', title: 'High-Performance Grills', description: 'Chef-grade stainless steel grills with precision heat control for the perfect sear every time.' },
  { icon: 'Thermometer', title: 'Marketing-Leading Heating', description: 'Infrared heaters that warm people, not just the air, extending your patio season by months.' },
  { icon: 'ChefHat', title: 'Artisan Pizza Ovens', description: 'Wood-fired or gas-powered ovens that reach 900°F for authentic Neapolitan-style pizza.' },
  { icon: 'UtensilsCrossed', title: 'Complete Kitchens', description: 'From refrigeration to beverage centers, we design fully functional outdoor culinary spaces.' },
  { icon: 'Zap', title: 'Smart Integration', description: 'Control lighting, heating, and even some cooking elements directly from your smart home system.' },
  { icon: 'Shield', title: 'Weather-Resistant', description: 'Appliances built with marine-grade stainless steel to withstand harsh Midwest winters.' },
];

const defaultSpecs = [
  { label: 'Grill Materials', value: '304 Stainless Steel' },
  { label: 'Heater Power', value: 'Up to 6000W / 50,000 BTU' },
  { label: 'Pizza Oven Temps', value: 'Up to 900°F+' },
  { label: 'Fuel Types', value: 'Natural Gas, Propane, Wood' },
  { label: 'Warranty', value: 'Lifetime on many burners/bodies' },
  { label: 'Installation', value: 'Professional Gas & Electric Connect' },
];

export default function AppliancesPageClient({ product }: AppliancesPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Outdoor Kitchen Appliances',
    description: product?.shortDescription || 'Premium outdoor grills, pizza ovens, and heating solutions for sophisticated outdoor living.',
    url: 'https://www.edgpatioshade.com/systems/appliances',
    image: 'https://www.edgpatioshade.com/images/appliances/outdoor-kitchen-hero.png',
  });

  const features = product?.features || defaultFeatures;
  const specs = product?.specifications || defaultSpecs;
  const quickFeatures = product?.quickFeatures || ['Professional-grade grills', 'Infrared patio heating', 'Outdoor pizza ovens', 'Custom outdoor kitchens'];

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
                  {product?.tagline || 'Outdoor Culinary & Comfort'}
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {product?.name || 'Premium Appliances'}
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-gray-400">
                  {product?.shortDescription || 'Transform your patio into a true extension of your home with chef-grade outdoor kitchens and powerful heating solutions.'}
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
                <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=appliances'} className="flex-1">
                  <Button size="lg" className="h-full w-full rounded-lg">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                  <Button size="lg" variant="secondary" className="h-full w-full rounded-lg"><Phone className="mr-2 h-5 w-5" /> Call Us</Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-muted-foreground text-sm">We design, supply, and install complete outdoor kitchen packages.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Elevate Your Outdoor Experience</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                <div className="relative aspect-video">
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

      {/* FEATURES */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for the Outdoors</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              We select appliances that combine stunning aesthetics with rugged durability.
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
                <div key={spec._key || spec.label} className={`flex items-center justify-between p-6 ${index !== specs.length - 1 ? 'border-b border-black/5 dark:border-white/5' : ''}`}>
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Complete Your Outdoor Oasis</h2>
            <p className="mb-10 text-xl leading-relaxed text-gray-400">
              Let's design the perfect outdoor kitchen and heating package for your home. Our team handles everything from design to professional installation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink href={product?.quoteUrl || '/contact?type=price&product=appliances'}>
                <Button size="lg" className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-10 text-lg transition-all hover:scale-105">
                  Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button size="lg" variant="ghost" className="rounded-full px-10 text-lg text-white hover:bg-white/10">
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
