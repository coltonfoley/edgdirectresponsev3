import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Hotel,
  MapPin,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Trees,
  Utensils,
  Zap,
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
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Outdoor Living | Hospitality & Restaurant Systems | EDG',
  description:
    'Commercial pergola, screen, glass, heat, and control planning for restaurants, hotels, clubs, and hospitality venues.',
  alternates: { canonical: '/commercial' },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Commercial Outdoor Living | EDG',
    description:
      'Commercial outdoor system planning for hospitality venues, restaurants, hotels, clubs, and amenity spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'commercial',
  location: 'chicago',
  source: 'commercial_hub_hero',
});

const assessmentContactHref = buildContactHref({
  type: 'commercial',
  product: 'commercial',
  location: 'chicago',
  source: 'commercial_hub_assessment',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'commercial',
  location: 'chicago',
  source: 'commercial_hub_bottom',
});

const faqs = [
  {
    question: 'How quickly can a commercial outdoor system be installed?',
    answer:
      'Timing depends on the system mix, permitting, structural review, lead times, and the operating schedule for the property. EDG helps sequence design, procurement, and installation around service hours instead of assuming every site follows one timeline.',
  },
  {
    question: 'Do commercial patio projects need permits or engineering?',
    answer:
      'Often, yes. Requirements vary by municipality, mounting condition, wind exposure, egress, fire-safety review, and whether the project changes the building envelope. EDG helps coordinate product documentation and structural inputs early.',
  },
  {
    question:
      'Can this integrate with an existing patio, roof deck, or terrace?',
    answer:
      'Many projects can work with existing steel, masonry, concrete, or wood conditions, but the right answer depends on the structure, drainage, utilities, clearances, and code path. A site assessment confirms what should be reused and what needs to change.',
  },
  {
    question: 'What maintenance should operators plan for?',
    answer:
      'Commercial systems should be cleaned, inspected, and serviced on a predictable schedule. EDG reviews care expectations, staff operating rules, sensor behavior, and service access so ownership knows how the system will be managed after installation.',
  },
];

const planningSteps = [
  {
    icon: Utensils,
    title: 'Operations first',
    description:
      'Seating plans, staff paths, host flow, weather procedures, heaters, lighting, and closing routines shape the system before product selection.',
  },
  {
    icon: ClipboardCheck,
    title: 'Code and structure review',
    description:
      'Mounting, drainage, wind exposure, egress, power, landlord approvals, and municipal review are handled as part of the commercial planning path.',
  },
  {
    icon: SlidersHorizontal,
    title: 'System mix and controls',
    description:
      'Pergolas, screens, glass, heat, lighting, and sensors are compared as a complete operating system instead of a single-feature purchase.',
  },
];

const industrySolutions = [
  {
    href: '/commercial/hotel-pergolas',
    icon: Hotel,
    title: 'Hotels & Rooftops',
    description:
      'Pergola, screen, glass, and comfort planning for rooftop bars, pool decks, lounges, and guest-facing terraces.',
  },
  {
    href: '/commercial/restaurant-patio-enclosures',
    icon: Utensils,
    title: 'Restaurants',
    description:
      'Outdoor dining systems planned around table layout, service rhythm, staff controls, weather exposure, and permit needs.',
  },
  {
    href: '/commercial/country-club-outdoor-spaces',
    icon: Trees,
    title: 'Country Clubs',
    description:
      'Member dining, event, terrace, and poolside systems that balance comfort, appearance, service access, and long-term care.',
  },
  {
    href: '/commercial/chicago-hospitality-outdoor-living',
    icon: Building2,
    title: 'Hospitality Groups',
    description:
      'A repeatable planning standard for restaurant groups, hotel operators, and multi-location hospitality teams.',
  },
];

const locationLinks = [
  {
    href: '/commercial/west-loop',
    title: 'West Loop / Fulton Market',
    description:
      "Terrace and patio planning for Chicago's dense restaurant row",
  },
  {
    href: '/commercial/restaurant-patio-enclosures',
    title: 'Chicago Restaurant Patio Enclosures',
    description:
      'Pergola, screen, glass, heat, and control planning around restaurant seating and daily service',
  },
  {
    href: '/commercial/hotel-roof-deck-systems',
    title: 'Hotel Roof Deck Systems',
    description: 'Structural and comfort planning for elevated outdoor spaces',
  },
];

const capabilityCards = [
  {
    icon: ShieldCheck,
    title: 'Commercial-grade product review',
    description:
      'EDG compares products for exposure, daily cycles, service access, sensors, warranty expectations, and staff use.',
  },
  {
    icon: Zap,
    title: 'Installation sequencing',
    description:
      'Planning accounts for operating hours, guest access, staging, weather windows, inspections, and handoff.',
  },
  {
    icon: BarChart3,
    title: 'Business-case inputs',
    description:
      'The review can model seats, hours, weather interruptions, staffing, seasonality, and maintenance without promising a generic outcome.',
  },
];

const relatedSystems = [
  {
    href: '/systems/pergolas',
    title: 'Motorized Pergolas',
    description: 'Adjustable louvers for sun, shade, and rain management',
  },
  {
    href: '/systems/shades',
    title: 'Retractable Screens',
    description: 'Side protection for sun, wind, privacy, and insects',
  },
  {
    href: '/systems/enclosures',
    title: 'Glass Enclosures',
    description: 'Sliding glass walls for enclosed outdoor-room planning',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Commercial Outdoor Living Systems',
  description:
    'Commercial outdoor living planning for restaurants, hotels, country clubs, and hospitality properties using pergolas, screens, glass, heat, lighting, and controls.',
  url: 'https://www.edgpatioshade.com/commercial',
  image: `https://www.edgpatioshade.com${images.brand.context.commercial}`,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Commercial', url: '/commercial' },
]);

export default function CommercialPage() {
  const faqSchema = generateFAQSchema(faqs);
  const schemas = [serviceSchema, breadcrumbSchema, faqSchema];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="bg-edg-dark relative flex min-h-[68vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.brand.context.commercial}
            alt="Commercial outdoor living installation with covered dining"
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
            items={[{ label: 'Commercial' }]}
            className="mb-6 text-zinc-300"
          />

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="label-editorial text-edg-brand mb-6">
                Commercial Outdoor Living
              </div>
              <h1 className="hero-title mb-6 max-w-5xl">
                Commercial Outdoor Systems Planned Around Operations
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
                EDG helps restaurants, hotels, country clubs, and hospitality
                groups plan pergolas, screens, glass, heat, lighting, and
                controls around the way the space needs to work.
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

            <div className="border border-white/10 bg-black/35 p-8">
              <div className="text-edg-brand mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                Commercial Review Covers
              </div>
              <div className="space-y-6">
                {[
                  [
                    'Use case',
                    'Dining, rooftop, pool deck, club terrace, or event space',
                  ],
                  [
                    'Site conditions',
                    'Wind, sun, rain, drainage, power, structure, and egress',
                  ],
                  [
                    'Operating model',
                    'Staff controls, service paths, opening routines, and closing rules',
                  ],
                  [
                    'Planning output',
                    'A qualified system path with clear next steps',
                  ],
                ].map(([label, description]) => (
                  <div
                    key={label}
                    className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="mb-1 text-sm font-bold text-white">
                      {label}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
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

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Solutions by Industry
            </div>
            <h2 className="section-title mb-4">
              One commercial standard, adapted to each property type
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Choose the property type that most closely matches your operation,
              then review the site, system, and handoff questions that matter
              for that setting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((solution) => (
              <Link key={solution.href} href={solution.href} className="group">
                <Card
                  variant="outline"
                  padding="lg"
                  className="hover:border-edg-brand h-full"
                >
                  <IconWrapper
                    icon={solution.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Learn More
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted border-border border-y">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Chicago Commercial Planning
              </div>
              <h2 className="section-title mb-6">
                Bring the same planning standard to each hospitality setting
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                From Fulton Market patios to hotel roof decks, EDG reviews each
                site with the same focus on operations, structure, controls,
                approvals, and long-term care.
              </p>
              <div className="space-y-4">
                {locationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group border-border hover:border-edg-brand flex items-center justify-between border bg-white p-4 transition-colors"
                  >
                    <div>
                      <h3 className="group-hover:text-edg-brand-text font-bold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="text-text-muted group-hover:text-edg-brand-text h-5 w-5 shrink-0 transition-all group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.enclosures.commercialPergolaDay}
                alt="Commercial pergola and glass patio dining area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Commercial Capabilities
            </div>
            <h2 className="section-title mb-4">
              Serious outdoor spaces need planning, not a residential template
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG stays system-agnostic and matches the product mix to the site,
              staff model, approvals, and ownership expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <Card key={card.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={card.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
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
              <div className="label-editorial-brand mb-4">Assessment Path</div>
              <h2 className="section-title mb-6 text-white">
                Review the business case with the actual site assumptions
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                A commercial recommendation should be tied to the property:
                seats, weather exposure, staffing, service hours, utilities,
                permit path, maintenance, and who will operate the system.
              </p>
              <TrackedLink href={assessmentContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  'Inputs',
                  'Seating, service flow, exposure, approvals, and goals',
                ],
                [
                  'System',
                  'Pergola, screens, glass, heat, lighting, and controls',
                ],
                [
                  'Handoff',
                  'Staff rules, care plan, service access, and next steps',
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

      <Section className="section-md bg-surface-muted border-border border-b">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title mb-4">
                Commercial planning questions
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Common questions from owners, operators, GMs, and facilities
                teams before they choose a system path.
              </p>
              <TrackedLink href={assessmentContactHref}>
                <Button variant="dark" className="w-full justify-start">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>
            <div className="space-y-5 lg:col-span-8">
              {faqs.map((item) => (
                <Card key={item.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-lg font-bold text-black">
                    {item.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Explore the Systems
            </div>
            <h2 className="section-title mb-4">
              Commercial plans are built from EDG's core system categories
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Compare pergolas, screens, and glass around the property&apos;s
              exposure, operating model, staff controls, approvals, and
              maintenance expectations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedSystems.map((system) => (
              <Link key={system.href} href={system.href} className="group">
                <Card
                  variant="outline"
                  padding="lg"
                  className="hover:border-edg-brand h-full text-center"
                >
                  <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {system.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Start with the commercial conditions
              </h2>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
                Send EDG the use case, site constraints, and operating goals. We
                will help narrow the system, approvals, and next planning steps.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
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
            <div className="border-l border-white/20 pl-8">
              <h3 className="mb-6 text-lg font-bold tracking-wide uppercase">
                Commercial Fit Examples
              </h3>
              <ul className="space-y-4 text-zinc-300">
                {[
                  'Fine dining restaurants',
                  'Country clubs and golf courses',
                  'Hotels and rooftop bars',
                  'Hospitality groups and commercial campuses',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="text-edg-brand h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
