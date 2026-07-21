import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudSun,
  FileText,
  MapPin,
  PanelsTopLeft,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Milwaukee, WI | Pergolas & Screens | EDG',
  description:
    'Motorized pergolas, retractable screens, and outdoor-room planning for Milwaukee, WI homes. Design around shade, rain, wind, permits, and urban patios.',
  alternates: {
    canonical: '/service-areas/milwaukee-wi',
  },
  keywords: [
    'Milwaukee pergola installer',
    'pergola Milwaukee WI',
    'motorized pergola Milwaukee',
    'louvered pergola Milwaukee WI',
    'Milwaukee outdoor living',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Milwaukee Pergolas & Outdoor Living | EDG Patio & Shade',
    description:
      'Motorized pergolas, screens, and permit-aware outdoor room planning for Milwaukee patios and roof decks.',
  },
};

const localBenefits = [
  'System-agnostic recommendations for the way the patio will actually be used',
  'One plan for the roof, screens, drainage, lighting, heat, and controls',
  'Address-specific planning before a permanent structure is ordered',
  'A direct path to product and permit-planning pages for Milwaukee homeowners',
];

const neighborhoods = [
  {
    name: 'Bay View, Walker’s Point, and south-side patios',
    description:
      'Older homes and compact lots often make the patio a valuable extension of the house. The first design conversation should look at doors, windows, utilities, drainage, post locations, and how the space moves from kitchen to grill to seating. A motorized roof can add useful shade and rain control without treating the structure like a generic kit.',
  },
  {
    name: 'East Side, Riverwest, and dense urban outdoor spaces',
    description:
      'In closer-in neighborhoods, privacy, low sun, wind, and neighboring sightlines can matter as much as overhead shade. Screens, lighting, and louver direction need to be designed with the structure, not added after the final layout is already fixed. That is especially important when an outdoor room has limited clearances or a shared visual context.',
  },
  {
    name: 'West-side and northwest Milwaukee backyards',
    description:
      'A larger backyard does not automatically mean a simpler project. The best layout still depends on exposure, patio dimensions, foundation conditions, water routing, and how the family uses the space for meals, play, or entertaining. A freestanding design can be the right answer when house attachment would complicate drainage or structure.',
  },
  {
    name: 'Downtown terraces and rooftop-adjacent spaces',
    description:
      'Urban terraces and roof-adjacent outdoor areas should begin with the building, access, attachment method, wind exposure, and approval path. The goal is a durable, coordinated outdoor space—not a product selected before the property conditions and responsibilities are clear.',
  },
];

const planningCards = [
  {
    title: 'Motorized pergolas',
    description:
      'Adjustable louvered roofs for shade, ventilation, rain control, lighting, and a more intentional architectural finish.',
    icon: CloudSun,
    href: '/service-areas/milwaukee-wi/motorized-pergolas',
  },
  {
    title: 'Wind, privacy, and bug control',
    description:
      'Plan screens and side protection around the pergola openings, view lines, electrical path, and daily use of the patio.',
    icon: Wind,
    href: '/systems/shades',
  },
  {
    title: 'Permit and zoning guidance',
    description:
      'Use the City’s official permitting and zoning resources to confirm the review path for the exact address and scope.',
    icon: FileText,
    href: '/service-areas/milwaukee-wi/zoning-guide',
  },
];

const faqs = [
  {
    question: 'Does EDG serve Milwaukee, WI?',
    answer:
      'Yes. EDG plans and installs motorized pergolas, retractable screens, and coordinated outdoor living systems across the Chicago–Milwaukee corridor. Request a quote and the team will follow up to understand the address, patio, desired use, and project constraints.',
  },
  {
    question: 'Do I need a permit for a Milwaukee pergola?',
    answer:
      'Do not assume the answer from a product listing or a neighbor’s project. The City of Milwaukee reviews zoning and permit compliance by project and address. A permanent, attached, covered, or electrically equipped system can involve different questions than an open, freestanding shade structure. Verify the current path with the City before construction.',
  },
  {
    question: 'Can a motorized pergola work on a Milwaukee patio or terrace?',
    answer:
      'Often, but the correct system depends on structure, access, exposure, drainage, utilities, and the rules for the property. A design review should identify whether a freestanding or attached layout is appropriate before final sizing or product selection.',
  },
  {
    question: 'What should I share for a Milwaukee outdoor-room review?',
    answer:
      'Start with wide photos of the patio and the back of the home, rough dimensions, the address, and the main outcome you want: shade, rain protection, privacy, bugs, lighting, heat, or a complete outdoor room. HOA, condo, or building requirements are useful to share early too.',
  },
];

const heroContactHref = buildContactHref({
  type: 'fit-review',
  product: 'pergola',
  location: 'Milwaukee, WI',
  source: 'milwaukee_hub_hero',
});

const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Milwaukee, WI',
  source: 'milwaukee_hub_bottom',
});

export default function MilwaukeeServiceAreaPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Systems in Milwaukee, WI',
            description:
              'Motorized pergolas, retractable screens, and outdoor living planning for Milwaukee, Wisconsin homes.',
            provider: { '@id': 'https://www.edgpatioshade.com/#organization' },
            areaServed: {
              '@type': 'City',
              name: 'Milwaukee',
              addressRegion: 'WI',
            },
            url: 'https://www.edgpatioshade.com/service-areas/milwaukee-wi',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="Motorized louvered pergola with an outdoor dining area"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        </div>
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Milwaukee, WI' },
            ]}
            className="mb-6"
          />
          <FadeIn>
            <div className="max-w-4xl">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Milwaukee, WI
              </span>
              <h1 className="hero-title mb-6 text-white">
                Milwaukee Pergolas &amp;
                <span className="text-edg-brand block">
                  {' '}
                  Outdoor Living Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mb-10 max-w-3xl text-lg leading-relaxed md:text-xl">
                EDG designs motorized pergolas, retractable screens, lighting,
                heat, and coordinated outdoor-room systems for Milwaukee patios,
                yards, terraces, and roof-adjacent spaces. Start with the site,
                the project goal, and the right local review path—not a
                one-size- fits-all pergola kit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg" className="px-8 text-lg">
                    Request a Quote{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/service-areas/milwaukee-wi/motorized-pergolas">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-white/40 bg-white/10 px-8 text-lg text-white hover:bg-white/20"
                  >
                    Explore Motorized Pergolas
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm">
            {localBenefits.map((benefit) => (
              <span
                key={benefit}
                className="text-text-inverse-muted flex items-center gap-2"
              >
                <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                {benefit}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Milwaukee planning paths
            </div>
            <h2 className="section-title mb-4">
              Start with the problem your patio needs to solve
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Milwaukee homeowners do not all need the same outdoor system. A
              west-facing patio may need late-day shade. A dense city lot may
              need privacy and screen planning. A terrace or roof-adjacent space
              may need access and approval questions answered first. These pages
              give the project a more useful starting point.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {planningCards.map((card) => (
              <Link key={card.href} href={card.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full"
                >
                  <IconWrapper
                    icon={card.icon}
                    variant="brand"
                    size="lg"
                    className="mb-5"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Open page <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Local context matters
            </div>
            <h2 className="section-title mb-4">
              Design for Milwaukee properties, not a catalog image
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The property should determine the system. EDG begins with how the
              home is built, where sun and wind reach the patio, how people use
              the space, and what needs coordination before the product is
              finalized.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {neighborhood.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="border-border relative aspect-[4/3] overflow-hidden border">
              <Image
                src={images.systems.pergolas.whiteLedStrip}
                alt="White louvered pergola with integrated lighting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                A coordinated outdoor room
              </div>
              <h2 className="section-title mb-6">
                The roof is only one part of the experience
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  A motorized pergola can solve more than overhead shade when it
                  is planned as a complete system. Louvers, gutters, post
                  locations, screens, heaters, lighting, controls, and service
                  access all affect whether the patio feels easy to use after
                  the project is installed.
                </p>
                <p>
                  Starting with the full outcome also protects the home. The
                  structure can be sized around doors, windows, siding, roof
                  lines, and circulation, while finish choices are considered
                  alongside the architecture instead of as a final add-on.
                </p>
                <p>
                  If the address is in Milwaukee city limits, the City’s
                  Development Center and zoning resources should be part of the
                  planning conversation before permanent work begins. Our
                  <Link
                    href="/service-areas/milwaukee-wi/zoning-guide"
                    className="text-edg-brand-text font-semibold hover:underline"
                  >
                    {' '}
                    Milwaukee permit guide
                  </Link>{' '}
                  explains where to start without guessing at site-specific
                  rules.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Milwaukee outdoor-living questions
              </h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
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

      <section className="bg-surface-dark text-text-inverse py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <PanelsTopLeft className="text-edg-brand mx-auto mb-6 h-10 w-10" />
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Plan the Milwaukee patio before choosing the system.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Share photos, rough dimensions, the address, and the main problem
              you want the outdoor space to solve. EDG can help sort through the
              roof, screen, drainage, electrical, and review questions before a
              permanent system is ordered.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/milwaukee-wi/motorized-pergolas">
                <Button size="lg">Explore Milwaukee Pergolas</Button>
              </Link>
              <Link href={bottomContactHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
