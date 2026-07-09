import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Trophy,
  Umbrella,
  Users,
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
  title: 'Country Club Outdoor Living | Chicago IL | EDG',
  description:
    'Country club outdoor amenity planning for dining terraces, pool decks, cabanas, events, shade, pergolas, screens, and member comfort.',
  alternates: {
    canonical: '/commercial/country-club-outdoor-spaces',
  },
  openGraph: {
    title: 'Country Club Outdoor Spaces | EDG Commercial',
    description:
      'Outdoor amenity planning for country club dining terraces, pool decks, cabanas, and events.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'country-club-outdoor-spaces',
  location: 'chicago',
  source: 'country_club_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'country-club-outdoor-spaces',
  location: 'chicago',
  source: 'country_club_bottom',
});

const faqs = [
  {
    question: 'How do louvered pergolas support the 19th hole experience?',
    answer:
      'A pergola can help with sun, glare, light rain, heat, and lighting when the dining terrace, bar, staff flow, and member expectations are reviewed together. EDG helps clubs plan the system around the actual amenity.',
  },
  {
    question: 'Are these systems suitable for pool decks and cabanas?',
    answer:
      'Pool environments can be good candidates for aluminum pergolas, exterior screens, umbrellas, heaters, and shade packages. The right mix depends on corrosion exposure, guest control, furniture layout, drainage, and maintenance expectations.',
  },
  {
    question: 'Can you help clubs host more outdoor events?',
    answer:
      'EDG can help clubs review event terraces, ceremony spaces, dining patios, and tournament viewing areas around weather exposure, seating changes, power, lighting, heat, and staff handoff.',
  },
  {
    question: 'What member amenities work best with these systems?',
    answer:
      'Dining terraces, poolside cabanas, outdoor bars, tournament viewing areas, and event terraces are common review areas. Each space should be scoped around member use, staff operations, and maintenance.',
  },
];

const planningSteps = [
  {
    icon: Trophy,
    title: 'Member experience review',
    description:
      'Dining, pool, cabana, event, and tournament spaces each need different comfort, access, shade, and service assumptions.',
  },
  {
    icon: Users,
    title: 'Operations and staff flow',
    description:
      'Clubs need systems that support banquets, daily dining, pool teams, facilities staff, member events, and seasonal maintenance.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controls and ownership',
    description:
      'Staff-only controls, guest zones, heaters, lighting, sensors, and maintenance routines should be defined before installation.',
  },
];

const amenityOptions = [
  {
    icon: Wine,
    title: 'Dining terrace and 19th hole',
    description:
      'Pergolas, screens, heat, and lighting can help dining spaces handle sun, glare, light rain, evening service, and member comfort.',
  },
  {
    icon: Umbrella,
    title: 'Pool deck and cabanas',
    description:
      'Shade and privacy packages should consider UV exposure, corrosion, furniture layout, family use, and staff visibility.',
  },
  {
    icon: Calendar,
    title: 'Event terraces',
    description:
      'Outdoor event spaces need clear decisions around seating changes, power, weather procedures, lighting, and service flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Facilities handoff',
    description:
      'Maintenance expectations, controls, sensors, cleaning, and seasonal care should be simple for club teams to own.',
  },
];

const planningChecklist = [
  'Dining, pool, event, tournament, and cabana use cases',
  'Member comfort, staff paths, furniture layouts, and ADA clearances',
  'Sun, wind, rain, heat, lighting, privacy, controls, and service access',
  'Board approvals, capital planning, maintenance, and staff handoff',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Country Club Outdoor Living Solutions',
  description:
    'Motorized pergolas, shade, screens, heat, lighting, and amenity planning for country club outdoor spaces',
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

export default function CountryClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-edg-dark pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.brand.context.pool}
            alt="Country club pool deck and outdoor amenity space"
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
              { label: 'Country Clubs' },
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
              Club and Member Amenities
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Country Club Outdoor Space Planning
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Pergola, shade, screen, heat, lighting, and control planning for
              dining terraces, pool decks, cabanas, events, and member spaces.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Schedule a Club Assessment
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
                Club amenities need member comfort and facilities ownership
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                A country club outdoor project may touch capital planning,
                member expectations, events, dining, pool operations, facilities
                staff, and maintenance. The system should make those pieces
                easier to operate.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                EDG compares pergolas, screens, umbrellas, glass, heat,
                lighting, and controls so the final package fits the club
                rather than a single product menu.
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
                src={images.brand.hero.pergola}
                alt="Pergola and outdoor dining area for club amenity planning"
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
              Amenity Types
            </div>
            <h2 className="section-title mb-4">
              Build the package around how members use the club
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              A dining terrace, pool deck, event lawn, and cabana row all need
              different comfort, control, and maintenance decisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenityOptions.map((option) => (
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
                Keep capital planning tied to club operations
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                EDG can help a club review the amenity value, maintenance
                burden, member experience, and operating model before a product
                package is selected.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Club Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Members', 'Comfort, shade, privacy, dining, pool, and event use'],
                ['Staff', 'Controls, service flow, cleaning, setup, and seasonal care'],
                ['Board', 'Scope clarity, capital planning, documentation, and approvals'],
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
              Country Club Outdoor Living Questions
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
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
              >
                Hotel Pergolas
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/restaurant-patio-solutions"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors hover:text-edg-brand-text"
              >
                Restaurant Planning
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
              Start with the member amenity plan
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the dining terrace, pool deck, cabana, or event-space
              context. We will help narrow the system path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Start Club Review
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
