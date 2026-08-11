import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck,
  MapPin,
  PartyPopper,
  Phone,
  ShieldCheck,
  Users,
  Wine,
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
  title: 'West Loop Commercial Outdoor Living | EDG',
  description:
    'Commercial patio, rooftop, and outdoor amenity planning for Chicago West Loop, Fulton Market, restaurant, hotel, and hospitality spaces.',
  alternates: {
    canonical: '/commercial/west-loop',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'West Loop Commercial Outdoor Living | EDG',
    description:
      'Commercial patio, rooftop, and outdoor amenity planning for West Loop and Fulton Market hospitality spaces.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'west-loop',
  location: 'chicago',
  source: 'west_loop_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'west-loop',
  location: 'chicago',
  source: 'west_loop_bottom',
});

const faqs = [
  {
    question: 'What permits are required for West Loop rooftop installations?',
    answer:
      'West Loop and Fulton Market commercial projects can involve city review, landlord approvals, structural inputs, utilities, egress, and rooftop access constraints. EDG helps organize the system documentation and planning path with the project team.',
  },
  {
    question: 'How long does installation typically take?',
    answer:
      'Timing depends on permitting, access, structure, product lead times, service hours, and installation sequence. EDG plans the scope around the operating venue so owners can understand timing before work starts.',
  },
  {
    question: 'Do you work with historic buildings in Fulton Market?',
    answer:
      'Historic and architecturally sensitive buildings should be reviewed carefully. EDG helps coordinate system visibility, mounting, documentation, and project-team inputs when a venue or property has additional design constraints.',
  },
  {
    question: "What about Chicago's seasonal weather?",
    answer:
      'The system mix should respond to the actual exposure: sun, glare, wind, rain, drainage, heat, lighting, and staff controls. EDG compares pergolas, screens, glass, and controls around the site rather than assuming one package fits every patio.',
  },
];

const planningSteps = [
  {
    icon: MapPin,
    title: 'Neighborhood context',
    description:
      'West Loop and Fulton Market sites often involve dense patios, rooftops, alleys, landlords, nearby tenants, and tight construction access.',
  },
  {
    icon: Building2,
    title: 'Building and permit review',
    description:
      'Structure, egress, utilities, wind exposure, power, drainage, visibility, and city review can shape the final system.',
  },
  {
    icon: ClipboardCheck,
    title: 'Hospitality operations',
    description:
      'Dining, events, lounges, staff paths, service hours, cleanup, controls, and weather procedures should guide the scope.',
  },
];

const localFactors = [
  {
    icon: FileCheck,
    title: 'Permit and landlord path',
    description:
      'Commercial outdoor work should account for municipal review, property ownership, tenant approvals, and project documentation.',
  },
  {
    icon: Wind,
    title: 'Rooftop and alley exposure',
    description:
      'Wind, drainage, shade, privacy, and neighboring buildings can change what works on a West Loop terrace or patio.',
  },
  {
    icon: Wine,
    title: 'Dining and bar use',
    description:
      'Patio comfort should support covers, service flow, table turns, guest dwell time, heaters, lighting, and staff controls.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviceable systems',
    description:
      'Controls, access, maintenance, and service expectations should be simple enough for the venue team to own.',
  },
];

const amenityAreas = [
  {
    icon: Wine,
    title: 'Rooftop dining',
    description:
      'Weather-aware shade, heat, lighting, and control planning for rooftops where guest comfort has to work with service.',
  },
  {
    icon: Briefcase,
    title: 'Corporate events',
    description:
      'Event terraces need seating flexibility, lighting, power, privacy, weather procedures, and staff handoff.',
  },
  {
    icon: PartyPopper,
    title: 'Private functions',
    description:
      'Semi-private patios and dining areas should balance atmosphere, weather protection, service access, and cleanup.',
  },
  {
    icon: Users,
    title: 'Guest lounges',
    description:
      'Hotel and restaurant lounge areas need shade, wind control, furniture planning, lighting, and durable controls.',
  },
];

const areaCoverage = [
  'Fulton Market District',
  'Randolph Street Corridor',
  'Greektown and University Village',
  'Medical District',
  'Nearby West Side hospitality corridors',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'West Loop Commercial Outdoor Living',
  description:
    'Commercial patio, rooftop, and outdoor amenity planning for Chicago West Loop restaurants, hotels, and hospitality venues',
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
    containsPlace: {
      '@type': 'Neighborhood',
      name: 'West Loop',
    },
  },
};

export default function WestLoopPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-edg-dark relative flex min-h-[68vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.enclosures.commercialNightDining}
            alt="Commercial outdoor dining enclosure used for West Loop patio planning"
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
              { label: 'West Loop' },
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
            <div className="label-editorial text-edg-brand mb-6">
              West Loop Commercial
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              West Loop Patio Planning for Dense Hospitality Sites
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Commercial pergola, screen, glass, heat, lighting, and control
              planning for West Loop and Fulton Market restaurants, hotels,
              rooftops, and event spaces.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Request a Quote
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
              <div className="label-editorial text-edg-brand mb-4">
                Local Commercial Planning
              </div>
              <h2 className="section-title mb-6">
                West Loop outdoor spaces need product depth and site restraint
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Dense urban patios and rooftops rarely have unlimited access,
                space, or operating flexibility. The system has to fit the
                building, the restaurant or hotel team, and the guest
                experience.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                EDG reviews the patio, rooftop, or terrace conditions before
                recommending pergolas, screens, glass, heat, lighting, and
                controls.
              </p>
              <div className="grid gap-3">
                {areaCoverage.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.brand.context.commercial}
                alt="Chicago commercial patio context for West Loop hospitality planning"
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
            <div className="label-editorial-brand mb-4">Planning Factors</div>
            <h2 className="section-title mb-4">
              The neighborhood context changes the system decision
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A West Loop scope should account for building access, review path,
              weather exposure, service flow, and future maintenance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {localFactors.map((factor) => (
              <Card key={factor.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={factor.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{factor.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Common Uses</div>
            <h2 className="section-title mb-4">
              West Loop projects usually need more than shade
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Most dense hospitality spaces need a coordinated plan for guest
              comfort, staff operation, service access, and controls.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {amenityAreas.map((area) => (
              <Card key={area.title} variant="outline" padding="lg">
                <div className="flex items-start gap-4">
                  <IconWrapper icon={area.icon} variant="brand" size="lg" />
                  <div>
                    <h3 className="mb-3 text-xl font-bold">{area.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">Proof Standard</div>
              <h2 className="section-title mb-6 text-white">
                Keep the plan tied to the actual venue
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                EDG helps ownership and project teams review the building,
                operating model, weather exposure, and scope before making a
                product recommendation.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  'Site',
                  'Rooftop, patio, alley, terrace, utilities, and access',
                ],
                [
                  'Operation',
                  'Dining, events, staff paths, controls, and cleanup',
                ],
                [
                  'System',
                  'Pergola, screens, glass, heat, lighting, and sensors',
                ],
              ].map(([label, description]) => (
                <div key={label} className="border border-white/10 p-6">
                  <div className="text-edg-brand mb-3 text-xs font-bold tracking-[0.18em] uppercase">
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
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              West Loop Installation Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="outline" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface border-t border-black/10 py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link
              href="/commercial"
              className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Commercial Pages
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/commercial/chicago-hospitality-outdoor-living"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Chicago Hospitality
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/restaurant-patio-enclosures"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
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
              Start with the West Loop site constraints
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the venue, building, and outdoor-space context. We will
              help narrow the system and planning path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
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
