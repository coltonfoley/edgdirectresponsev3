'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Phone,
  Shield,
  Thermometer,
  Timer,
  Wind,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import { generateServiceSchema } from '@/lib/schema';

interface SaunaFeature {
  _key?: string;
  icon: string;
  title: string;
  description: string;
}

interface SaunaSpec {
  _key?: string;
  label: string;
  value: string;
}

interface SaunaProduct {
  name?: string;
  shortDescription?: string;
  tagline?: string;
  quoteUrl?: string;
  features?: SaunaFeature[];
  specifications?: SaunaSpec[];
  quickFeatures?: string[];
}

interface SaunasPageProps {
  product?: SaunaProduct;
}

const iconMap: Record<string, LucideIcon> = {
  Thermometer,
  Wind,
  Droplets,
  Timer,
  Shield,
  Wrench,
};

const defaultFeatures: SaunaFeature[] = [
  {
    icon: 'Shield',
    title: 'ThermoWood Construction',
    description:
      'Heat-treated Scandinavian timber helps limit moisture movement, decay, and seasonal warping without chemical treatment.',
  },
  {
    icon: 'Droplets',
    title: 'Tempered Glass Throughout',
    description:
      'Full-height tempered glass doors and windows keep the cabin bright while giving the sauna a cleaner architectural presence.',
  },
  {
    icon: 'Wind',
    title: 'Integrated Ventilation',
    description:
      'Fresh-air intake and exhaust paths help the sauna feel comfortable during use and dry properly between sessions.',
  },
  {
    icon: 'Thermometer',
    title: 'Outdoor-Rated Roof Assembly',
    description:
      'Bituminous roof tiles and a compact cabin form are selected for exposed outdoor locations in Midwest weather.',
  },
  {
    icon: 'Timer',
    title: 'Integrated Lighting',
    description:
      'Under-bench LED lighting adds low-glare evening visibility without turning the cabin into a harsh utility space.',
  },
  {
    icon: 'Wrench',
    title: 'Full-Service Installation',
    description:
      'EDG coordinates fit, delivery, placement, electrical requirements, ventilation finish, and owner handoff.',
  },
];

const defaultSpecs: SaunaSpec[] = [
  { label: 'Available Models', value: '2-3, 4, and 5-6 person cabins' },
  { label: 'Construction Material', value: 'ThermoWood heat-treated Scandinavian timber' },
  { label: 'Roof', value: 'Bituminous outdoor roof tiles' },
  { label: 'Glazing', value: 'Tempered glass doors and windows' },
  { label: 'Lighting', value: 'LED under-bench lighting included' },
  { label: 'Ventilation', value: 'Integrated fresh-air system' },
  { label: 'Warranty', value: '5 years' },
  { label: 'Installation', value: 'Delivery, placement, electrical coordination, and finish' },
];

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw12-outdoor-sauna-12.webp',
    alt: 'Outdoor sauna cabin exterior',
  },
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw12-outdoor-sauna-2.webp',
    alt: 'Outdoor sauna side view',
  },
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw12-outdoor-sauna-5.webp',
    alt: 'Outdoor sauna glass and timber detail',
  },
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp',
    alt: 'Large outdoor sauna cabin',
  },
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw16-outdoor-sauna-23.webp',
    alt: 'Outdoor sauna in a landscaped setting',
  },
  {
    type: 'image' as const,
    src: '/images/saunas/mande-spa-mw20-outdoor-sauna-6.webp',
    alt: 'Premium outdoor sauna installation',
  },
];

const useCases = [
  {
    title: 'Dedicated Wellness Space',
    description:
      'A compact outdoor sauna gives the patio or backyard a defined recovery destination without requiring a full room addition.',
    image: '/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp',
  },
  {
    title: 'Right-Sized Cabin',
    description:
      'EDG compares 2-3, 4, and 5-6 person cabin sizes against the site, view, electrical path, and how many people will use the sauna at once.',
    image: '/images/saunas/mande-spa-mw12-outdoor-sauna-5.webp',
  },
  {
    title: 'Part of the Outdoor Room',
    description:
      'Saunas can pair with pergolas, glass, screens, heaters, pools, or outdoor kitchens when the full backyard plan calls for it.',
    image: '/images/saunas/mande-spa-mw20-outdoor-sauna-6.webp',
  },
];

const planningChecks = [
  {
    title: 'Placement and Access',
    description: 'Delivery path, base condition, door swing, view line, privacy, and daily walking route.',
  },
  {
    title: 'Power and Ventilation',
    description: 'Heater requirements, electrical coordination, fresh-air path, exhaust path, and service clearance.',
  },
  {
    title: 'Comfort Context',
    description: 'Cold plunge, pool, covered patio, lighting, privacy screens, changing area, and storage needs.',
  },
];

const relatedLinks = [
  {
    label: 'Louvered Pergolas',
    href: '/systems/pergolas',
    description: 'Motorized roof systems for covered patio plans.',
  },
  {
    label: 'Retractable Screens',
    href: '/systems/shades',
    description: 'Insect, sun, and privacy control for outdoor rooms.',
  },
  {
    label: 'Outdoor Room Plans',
    href: '/outdoor-rooms',
    description: 'Planning paths that combine roof, glass, screens, heat, cooking, and furniture.',
  },
  {
    label: 'Showroom',
    href: '/showroom',
    description: 'Compare materials and outdoor-living systems in Spring Grove.',
  },
];

export default function SaunasPageClient({ product }: SaunasPageProps) {
  const serviceSchema = generateServiceSchema({
    name: product?.name || 'Custom Sauna Installation',
    description:
      product?.shortDescription ||
      'Professionally specified and installed indoor and outdoor saunas for dedicated home wellness spaces.',
    url: 'https://www.edgpatioshade.com/systems/saunas',
    image: 'https://www.edgpatioshade.com/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp',
  });

  const features = product?.features || defaultFeatures;
  const specs = product?.specifications || defaultSpecs;
  const quickFeatures = product?.quickFeatures || [
    'ThermoWood construction',
    '2-3, 4, and 5-6 person models',
    'Tempered glass doors and windows',
    'Full-service installation',
  ];
  const heroContactHref =
    product?.quoteUrl ||
    buildContactHref({
      type: 'price',
      product: 'saunas',
      source: 'saunas_hero',
    });
  const bottomContactHref =
    product?.quoteUrl ||
    buildContactHref({
      type: 'price',
      product: 'saunas',
      source: 'saunas_bottom',
    });

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Systems', href: '/systems' },
                { label: 'Saunas' },
              ]}
              includeSchema={false}
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="order-1 min-w-0 lg:col-span-5">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-black" />
                {product?.tagline || 'Wellness System'}
              </div>
              <h1 className="text-text-primary mb-8 text-5xl leading-[0.92] font-bold tracking-tighter md:text-7xl">
                {product?.name || 'Custom Saunas.'}
              </h1>
              <p className="text-text-secondary mb-10 max-w-xl text-xl leading-relaxed">
                {product?.shortDescription ||
                  'Outdoor sauna cabins specified around your site, comfort goals, power path, and larger backyard plan. EDG helps select the right cabin and manages the installation details that make it work.'}
              </p>

              <div className="mb-10 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm">
                {quickFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text" />
                    <span className="font-bold text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href={heroContactHref}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Price a Sauna
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call EDG
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>

            <div className="order-2 min-w-0 lg:col-span-7">
              <ProductGallery items={galleryImages} />
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md border-t border-border bg-surface-muted">
        <Container>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="label-editorial-brand mb-4">System Overview</div>
            <h2 className="section-title mb-6">A Sauna Should Fit the Site, Not Just the Catalog</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG treats saunas like part of the outdoor living plan. Before recommending a model, we look at where the cabin will sit, how it will be powered, what should surround it, and whether the sauna should stand alone or connect to a larger patio, pool, or outdoor room.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <Card key={item.title} variant="default" padding="none" className="overflow-hidden">
                <div className="relative aspect-[4/3] bg-surface-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-text-primary mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4 text-edg-brand">Material + Comfort Details</div>
            <h2 className="section-title mb-6">Built Like an Outdoor Living System</h2>
            <p className="text-text-inverse-muted text-lg leading-relaxed">
              The right sauna is more than a cabin. Material, ventilation, glazing, electrical planning, and placement all affect how natural it feels to use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || Shield;

              return (
                <Card key={feature._key || feature.title} variant="dark" padding="lg">
                  <IconWrapper icon={IconComponent} variant="dark" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-lg font-bold text-text-inverse">{feature.title}</h3>
                  <p className="text-text-inverse-muted text-sm leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="section-md border-t border-border">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">Fit + Specification</div>
              <h2 className="section-title mb-6">What EDG Reviews Before Quoting</h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Sauna pricing depends on model size, location, power requirements, base prep, delivery access, finish details, and whether the sauna is part of a broader outdoor room scope.
              </p>

              <div className="space-y-4">
                {planningChecks.map((item) => (
                  <Card key={item.title} variant="muted" padding="lg">
                    <h3 className="text-text-primary mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="dark" padding="lg">
              <h3 className="mb-6 text-xl font-bold text-text-inverse">Specification Highlights</h3>
              <div className="divide-y divide-border-inverse">
                {specs.map((spec) => (
                  <div
                    key={spec._key || spec.label}
                    className="grid gap-2 py-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-center"
                  >
                    <span className="text-text-inverse-muted text-sm">{spec.label}</span>
                    <span className="font-bold text-text-inverse sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md border-t border-border bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">Complete the Space</div>
              <h2 className="section-title mb-6">Plan the Sauna Around the Rest of the Backyard</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                A sauna often works best when the surrounding path, lighting, shade, privacy, seating, and cold-weather comfort are considered together. These related pages are the most useful next planning stops.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Start Sauna Fit Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card
                    variant="default"
                    padding="lg"
                    className="group h-full hover:border-edg-brand/30"
                  >
                    <h3 className="text-text-primary mb-2 font-bold transition-colors group-hover:text-edg-brand-text">
                      {item.label}
                    </h3>
                    <p className="text-text-secondary mb-5 text-sm leading-relaxed">{item.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-text-primary uppercase transition-colors group-hover:text-edg-brand-text">
                      View page
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4 text-edg-brand">Next Step</div>
              <h2 className="section-title mb-6">Ready to Price a Sauna for Your Space?</h2>
              <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
                Send EDG the rough location, preferred cabin size, and how the sauna should connect to the rest of the outdoor living plan. We will help sort the model, placement, and install path.
              </p>
            </div>
            <div className="space-y-4">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg" className="w-full">
                  Get Sauna Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="w-full">
                  View Gallery
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-text-inverse-muted text-center text-sm">
                Spring Grove showroom available by appointment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
