import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GlassWater,
  Hotel,
  MapPin,
  Phone,
  ShieldCheck,
  Utensils,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Chicago Hospitality Outdoor Living | Restaurant & Hotel Pergolas',
  description:
    'Commercial outdoor dining, rooftop, hotel, and club patio planning for Chicago hospitality venues using pergolas, screens, glass, heat, and controls.',
  alternates: {
    canonical: '/commercial/chicago-hospitality-outdoor-living',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Chicago Hospitality Outdoor Living | EDG',
    description:
      'Commercial patio, pergola, screen, glass, heat, and control planning for Chicago hospitality venues.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'hospitality-outdoor-living',
  location: 'chicago',
  source: 'chicago_hospitality_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'hospitality-outdoor-living',
  location: 'chicago',
  source: 'chicago_hospitality_bottom',
});

const faqs = [
  {
    question: 'Do Chicago restaurants need permits for outdoor patio enclosures?',
    answer:
      'Most permanent commercial patio structures need some level of review. The exact path depends on the municipality, structure, mounting, utilities, egress, fire safety, and whether the venue is in the City of Chicago or a surrounding community.',
  },
  {
    question: "How do these systems handle Chicago's weather?",
    answer:
      'Weather planning should be specific to the building and system. EDG helps compare product documentation, wind exposure, drainage, heat, sensors, glass, screens, and operating procedures before recommending a package.',
  },
  {
    question: 'What business-case inputs should a hospitality venue review?',
    answer:
      'The business case should be modeled from the actual venue: seats, ticket averages, weather interruptions, hours, staffing, events, maintenance, and project cost. EDG can help organize those assumptions without promising a generic financial outcome.',
  },
  {
    question: 'How disruptive is installation for a hospitality venue?',
    answer:
      'Installation sequencing depends on permits, product lead times, access, power, structure, and service hours. EDG plans the project around the operating venue so ownership can understand timing before the work starts.',
  },
];

const hospitalityContexts = [
  {
    icon: Utensils,
    title: 'Restaurant patios',
    description:
      'Plan outdoor dining around covers, server flow, guest comfort, heat, glare, noise, staff controls, and weather procedures.',
    href: '/commercial/restaurant-patio-solutions',
    cta: 'Restaurant Planning',
    image: images.systems.enclosures.commercialNightDining,
    alt: 'Commercial glass patio dining at night',
  },
  {
    icon: Hotel,
    title: 'Hotels and rooftops',
    description:
      'Review rooftop bars, pool decks, terraces, and amenity spaces around structure, wind exposure, guest access, and staff handoff.',
    href: '/commercial/hotel-roof-deck-systems',
    cta: 'Hotel Roof Decks',
    image: images.systems.enclosures.commercialDayExterior,
    alt: 'Commercial terrace enclosure at a hospitality property',
  },
  {
    icon: GlassWater,
    title: 'Clubs and amenities',
    description:
      'Support dining terraces, 19th-hole spaces, pool decks, events, and member amenities with systems that fit the operating model.',
    href: '/commercial/country-club-outdoor-spaces',
    cta: 'Club Amenities',
    image: images.brand.context.pool,
    alt: 'Poolside outdoor living area for member amenities',
  },
];

const planningFactors = [
  {
    icon: Building2,
    title: 'Local review path',
    description:
      'City of Chicago, North Shore, suburban, and Lake Geneva projects can have different permit, landlord, and inspection expectations.',
  },
  {
    icon: Wind,
    title: 'Weather exposure',
    description:
      'Lakefront wind, rooftop exposure, winter operation, drainage, and shoulder-season comfort should be tested against the actual site.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operating sequence',
    description:
      'Service hours, closures, construction access, storage, controls, and staff training need to be part of the commercial plan.',
  },
  {
    icon: ShieldCheck,
    title: 'System-agnostic scope',
    description:
      'EDG compares pergolas, screens, glass, heat, lighting, sensors, and controls instead of forcing every venue into one product answer.',
  },
];

const localChecklist = [
  'Chicago, North Shore, suburban, Lake Geneva, and Milwaukee-area hospitality planning',
  'Restaurant patios, hotel rooftops, pool decks, clubs, event terraces, and amenity spaces',
  'Structure, wind, drainage, power, heat, lighting, sensors, controls, and maintenance',
  'Commercial owner, architect, contractor, operator, and staff handoff coordination',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chicago Hospitality Outdoor Living Design',
  description:
    'Commercial pergolas, screens, glass enclosures, heat, and control planning for Chicago restaurants, hotels, clubs, and hospitality venues',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

export default function ChicagoHospitalityPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-edg-dark pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.brand.context.commercial}
            alt="Commercial patio and hospitality outdoor dining area"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Commercial', href: '/commercial' },
              { label: 'Chicago Hospitality' },
            ]}
            className="mb-6 text-zinc-300"
          />
          <Link
            href="/commercial"
            className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to commercial
          </Link>

          <div className="max-w-4xl">
            <div className="label-editorial mb-6 text-edg-brand">
              Chicago Hospitality Outdoor Living
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Hospitality Patio Planning for Chicago Venues
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              System-agnostic planning for restaurants, hotels, clubs, rooftops,
              pool decks, and event terraces that need outdoor comfort to work
              with commercial operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Schedule a Commercial Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-4">
            {planningFactors.map((factor) => (
              <div key={factor.title} className="border border-white/10 p-6">
                <IconWrapper
                  icon={factor.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h2 className="mb-3 text-xl font-bold">{factor.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Venue Types
            </div>
            <h2 className="section-title mb-4">
              One commercial standard, different operating realities
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Restaurant patios, hotel terraces, and club amenities all need
              weather planning. They should not all be forced into the same
              package.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {hospitalityContexts.map((context) => (
              <Card
                key={context.title}
                variant="default"
                padding="none"
                className="overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={context.image}
                    alt={context.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <IconWrapper
                    icon={context.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="mb-3 text-2xl font-bold">{context.title}</h3>
                  <p className="mb-6 leading-relaxed text-text-secondary">
                    {context.description}
                  </p>
                  <Link
                    href={context.href}
                    className="inline-flex items-center text-sm font-bold tracking-wider text-edg-brand-text uppercase transition-colors hover:text-black"
                  >
                    {context.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial mb-4 text-edg-brand">
                Local Commercial Planning
              </div>
              <h2 className="section-title mb-6">
                Chicago hospitality work needs local context and technical
                product depth
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                A commercial outdoor space can involve ownership goals,
                architects, contractors, landlords, staff, guests, municipal
                review, utilities, and maintenance teams. EDG helps organize
                the system choices around those realities.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                The result should be a specific scope that considers the venue,
                not a generic promise about always-open operation or fixed
                financial outcomes.
              </p>
              <div className="grid gap-3">
                {localChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand" />
                    <span className="text-sm font-medium text-zinc-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.progressiveCommercialPatio}
                alt="Commercial patio with exterior screen system and seating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-black/80 p-8 text-white">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-edg-brand uppercase">
                  <MapPin className="h-4 w-4" />
                  Greater Chicago Area
                </div>
                <p className="text-sm text-zinc-300">
                  Downtown, West Loop, North Shore, Lake Geneva, Milwaukee, and
                  nearby hospitality markets.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="label-editorial-brand mb-4 text-center">
              FAQ
            </div>
            <h2 className="section-title mb-10 text-center">
              Chicago Hospitality Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="outline" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-black/10 bg-surface py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
            >
              <ArrowLeft className="h-4 w-4" />
              All Commercial Pages
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/commercial/west-loop"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
              >
                West Loop
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
              >
                Hotel Pergolas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Review the venue before choosing the system
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the venue type, current outdoor space, and commercial
              goals. We will help narrow the product and planning path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Start Hospitality Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call EDG
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
