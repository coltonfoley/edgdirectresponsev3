import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Hotel,
  PartyPopper,
  Phone,
  SlidersHorizontal,
  Sun,
  Wine,
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
  title: 'Commercial Hotel Pergola Systems | EDG',
  description:
    'Commercial hotel pergola planning for Chicago and Milwaukee rooftops, pool decks, terraces, and amenity spaces with louvers, heat, lighting, and controls.',
  alternates: {
    canonical: '/commercial/hotel-pergolas',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Commercial Hotel Pergola Systems | EDG',
    description:
      'Commercial hotel pergola planning for rooftops, pool decks, terraces, and amenity spaces.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'hotel-pergolas',
  location: 'chicago',
  source: 'hotel_pergolas_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'hotel-pergolas',
  location: 'chicago',
  source: 'hotel_pergolas_bottom',
});

const faqs = [
  {
    question: 'How quickly can hotel pergola systems respond to weather changes?',
    answer:
      'Response behavior depends on the selected pergola, controls, sensors, and operating settings. EDG helps hotel teams review rain, wind, heat, lighting, and staff override needs before specifying the controls package.',
  },
  {
    question: 'What permit requirements apply for Chicago hotel rooftop installations?',
    answer:
      'Most hotel rooftop and terrace projects should be reviewed for structure, egress, fire safety, utilities, wind exposure, and local permitting. EDG helps organize product documentation and project-team coordination early in the planning process.',
  },
  {
    question: 'How do you handle structural load on existing rooftops?',
    answer:
      'Structural review belongs in the planning path before the system is selected. EDG coordinates the pergola scope, mounting concept, product documentation, and design inputs with the project team so structural questions are addressed directly.',
  },
  {
    question: 'What operational training do you provide hotel staff?',
    answer:
      'Hotel teams should receive a simple handoff for everyday operation, weather procedures, controls, maintenance expectations, and service contacts. The exact handoff depends on the systems and controls selected for the property.',
  },
];

const planningSteps = [
  {
    icon: Hotel,
    title: 'Guest amenity review',
    description:
      'Pool decks, rooftops, terraces, bars, and event spaces each need different shade, heat, lighting, access, and staff-control assumptions.',
  },
  {
    icon: Building2,
    title: 'Rooftop and structure coordination',
    description:
      'Mounting, wind exposure, drainage, power, egress, and building-operations constraints should be reviewed before the pergola package is selected.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controls and staff handoff',
    description:
      'Sensors, remotes, staff-only zones, heaters, and lighting should be easy enough for hotel teams to operate consistently.',
  },
];

const pergolaOptions = [
  {
    icon: Sun,
    title: 'Louvered shade control',
    description:
      'Adjustable louvers can help hotels manage sun, glare, and rain exposure when the roof deck or terrace conditions support the system.',
  },
  {
    icon: Calendar,
    title: 'Shoulder-season comfort',
    description:
      'Heat, side protection, and lighting can extend useful amenity time when they are planned around guest access and operations.',
  },
  {
    icon: Wine,
    title: 'Rooftop bar planning',
    description:
      'Bars and lounges need practical decisions around staff flow, cleanup, wind, power, furniture, guest controls, and weather procedures.',
  },
  {
    icon: PartyPopper,
    title: 'Event terrace planning',
    description:
      'Event spaces need a clear operating plan for weather interruptions, seating changes, AV, lighting, heat, and staff handoff.',
  },
];

const planningChecklist = [
  'Rooftop exposure, mounting surface, wind direction, power, and drainage',
  'Guest seating, pool access, event layout, staff paths, and ADA clearances',
  'Louvers, screens, heat, lighting, sensors, and manual override behavior',
  'Owner approval, brand standards, maintenance, documentation, and service plan',
];

const relatedPages = [
  { name: 'Hotel Roof Deck Systems', href: '/commercial/hotel-roof-deck-systems' },
  { name: 'Chicago Hospitality', href: '/commercial/chicago-hospitality-outdoor-living' },
  { name: 'West Loop', href: '/commercial/west-loop' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Hotel Pergola Systems',
  description:
    'Commercial hotel pergola planning for Chicago and Milwaukee hotels with louvers, heat, lighting, sensors, and controls',
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
  areaServed: [
    { '@type': 'City', name: 'Chicago' },
    { '@type': 'City', name: 'Milwaukee' },
  ],
};

export default function HotelPergolasPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-edg-dark pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.enclosures.commercialDayExterior}
            alt="Commercial hotel terrace with outdoor shade planning"
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
              { label: 'Hotel Pergolas' },
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
              Hotel Pergola Systems
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Hotel Pergola Planning for Rooftops and Amenities
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Commercial pergola, heat, lighting, sensor, and control planning
              for hotel terraces, pool decks, rooftop bars, and event spaces.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Schedule a Hotel Pergola Review
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
          <div className="grid gap-8 md:grid-cols-3">
            {planningSteps.map((step) => (
              <div key={step.title} className="border border-white/10 p-6">
                <IconWrapper
                  icon={step.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h2 className="mb-3 text-xl font-bold">{step.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial mb-4 text-edg-brand">
                Commercial Planning Standard
              </div>
              <h2 className="section-title mb-6">
                A hotel pergola has to work with the property team
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                The useful question is not simply whether a pergola fits. It is
                how the system affects guest use, staff access, weather
                procedures, power, drainage, structure, controls, and ongoing
                service.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                EDG is system-agnostic, so the recommendation can pair
                pergolas with screens, glass, heaters, lighting, and controls
                only where the property and operation call for it.
              </p>
              <div className="grid gap-3">
                {planningChecklist.map((item) => (
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
                alt="Commercial hotel patio with exterior shade system and seating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Hotel Use Cases
            </div>
            <h2 className="section-title mb-4">
              Pergola packages should follow the amenity use case
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Rooftop bars, pool decks, and event terraces need different
              combinations of shade, heat, lighting, screens, and controls.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pergolaOptions.map((option) => (
              <Card key={option.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={option.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                <p className="leading-relaxed text-text-secondary">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">
                Proof Standard
              </div>
              <h2 className="section-title mb-6 text-white">
                Keep the scope tied to the hotel operation
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                A good hotel pergola plan is specific: the amenity, weather
                exposure, control model, maintenance expectations, and guest
                experience all shape the recommendation.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Pergola Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Amenity', 'Rooftop, pool deck, terrace, bar, or event space'],
                ['Controls', 'Staff zones, sensors, heat, lighting, and overrides'],
                ['Handoff', 'Training, maintenance notes, and service expectations'],
              ].map(([label, description]) => (
                <div key={label} className="border border-white/10 p-6">
                  <div className="mb-3 text-xs font-bold tracking-[0.18em] text-edg-brand uppercase">
                    {label}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {description}
                  </p>
                </div>
              ))}
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
              Hotel Pergola Questions
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
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
                >
                  {page.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Review the hotel amenity before choosing the pergola
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the rooftop, terrace, or pool deck context. We will help
              narrow the system and operating path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Start Hotel Pergola Review
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
