import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  CloudRain,
  DollarSign,
  FileText,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
  Zap,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title:
    'Motorized Pergola Planning Guide: Cost, System Fit, Permits & Design | EDG',
  description:
    'A practical planning guide for premium motorized pergolas. Learn how EDG evaluates site fit, cost, structure, drainage, controls, screens, heaters, permits, and manufacturer selection.',
  alternates: {
    canonical: '/guides/motorized-pergola-planning',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Pergola Planning Guide | EDG Patio & Shade',
    description:
      'Understand cost, system fit, project constraints, and the questions that determine the right motorized pergola system for your site.',
  },
};

const systemFitFactors = [
  {
    title: 'Site Exposure',
    description:
      'Wind, snow, sun angle, coastal air, open-yard exposure, and roof-deck height all affect the system spec.',
    icon: Wind,
  },
  {
    title: 'Mounting Approach',
    description:
      'Freestanding, wall-mounted, deck-mounted, roof-deck, and integrated outdoor-room projects create different structural paths.',
    icon: Home,
  },
  {
    title: 'Span And Posts',
    description:
      'Post placement, clear span, door swings, furniture zones, and outdoor kitchens can change the frame layout.',
    icon: Ruler,
  },
  {
    title: 'Drainage Path',
    description:
      'A louvered roof still has to move water somewhere. Gutters, downspouts, patio pitch, and adjacent doors matter.',
    icon: CloudRain,
  },
  {
    title: 'Power And Controls',
    description:
      'Motors, lighting, heaters, sensors, remotes, and smart-home controls need a clean electrical plan.',
    icon: Zap,
  },
  {
    title: 'Accessories',
    description:
      'Screens, heaters, lighting, fans, privacy walls, and glass can turn a pergola into a full outdoor room.',
    icon: SlidersHorizontal,
  },
];

const budgetBands = [
  {
    band: '$25K-$50K',
    fit: 'Smaller patios or simpler structures',
    watchouts:
      'Accessory packages, structural work, and electrical can push a project above this range quickly.',
  },
  {
    band: '$50K-$100K',
    fit: 'Common premium residential range',
    watchouts:
      'Screens, heaters, lighting, complex drainage, or deck reinforcement can materially change scope.',
  },
  {
    band: '$100K+',
    fit: 'Large outdoor rooms, roof decks, commercial patios, and multi-zone designs',
    watchouts:
      'Engineering, permitting, access, crane needs, and custom integration usually drive the final number.',
  },
];

const decisionRows = [
  {
    question:
      'Is the space exposed to high wind, lakefront weather, or roof-deck conditions?',
    impact:
      'Wind rating, sensor strategy, mounting details, and the manufacturer toolkit become more important.',
  },
  {
    question:
      'Does water need to drain near doors, windows, stairs, or an outdoor kitchen?',
    impact:
      'The frame layout, louver orientation, gutter path, and downspout placement may decide which system works best.',
  },
  {
    question: 'Will the pergola sit on an existing deck or roof structure?',
    impact:
      'The project may need structural review before pricing is meaningful.',
  },
  {
    question:
      'Are screens, heaters, lights, privacy, or smart controls part of the goal?',
    impact:
      'The pergola should be planned as an integrated outdoor room, not as a standalone roof.',
  },
  {
    question:
      'Is the buyer trying to solve sun, rain, bugs, privacy, heat, or all of the above?',
    impact:
      'The right answer may be a pergola, pergola plus screens, glass enclosure, fixed cover, or a different system.',
  },
];

const resourceLinks = [
  {
    title: 'Request a Pergola Quote',
    description:
      'Request a quote and optionally send photos, rough dimensions, location, and project goals.',
    href: '/guides/pergola-system-fit-review',
    icon: ClipboardCheck,
  },
  {
    title: 'Motorized Pergola Cost Guide',
    description:
      'Review the budget bands, hidden costs, and site conditions that change premium pergola pricing.',
    href: '/guides/pergola-cost',
    icon: DollarSign,
  },
  {
    title: 'Motorized Pergola Budget Examples',
    description:
      'Compare compact patios, full outdoor rooms, roof decks, estate patios, and commercial multi-bay budget ranges.',
    href: '/guides/motorized-pergola-budget-examples',
    icon: DollarSign,
  },
  {
    title: 'Pergola + Glass Outdoor Room',
    description:
      'See how a louvered roof, frameless glass, screens, heat, and lighting become one protected patio plan.',
    href: '/outdoor-rooms/pergola-glass-outdoor-room',
    icon: Home,
  },
  {
    title: 'How EDG Chooses A Pergola System',
    description:
      "See how Brustor, Azenco, and Sundance fit into EDG's manufacturer-flexible toolkit.",
    href: '/guides/louvered-pergola-brands-compared',
    icon: ShieldCheck,
  },
  {
    title: 'Pergolas On Decks And Roof Decks',
    description:
      'Review structure, wind, access, waterproofing, drainage, and electrical questions before pricing an elevated pergola.',
    href: '/guides/motorized-pergola-deck-roof-deck',
    icon: Building2,
  },
  {
    title: 'Permits, HOA, And Engineering',
    description:
      'Plan surveys, drawings, structure, electrical, setbacks, finish review, and scope-changing review risks.',
    href: '/guides/motorized-pergola-permits-hoa-engineering',
    icon: FileText,
  },
  {
    title: 'Pergola vs. Patio Cover',
    description:
      'Compare adjustable louvered roofs, fixed patio covers, and simpler shade structures before choosing a path.',
    href: '/guides/pergola-vs-patio-cover',
    icon: FileText,
  },
];

const localProofLinks = [
  {
    city: 'Chicago',
    note: 'Roof decks, tight access, wind, drainage, and permit-aware planning.',
    href: '/service-areas/chicago-il/motorized-pergolas',
  },
  {
    city: 'Barrington',
    note: 'Larger estate patios, pool areas, outdoor kitchens, and privacy planning.',
    href: '/service-areas/barrington-il/motorized-pergolas',
  },
  {
    city: 'Naperville',
    note: 'HOA, budget, backyard patio, and family outdoor-room planning.',
    href: '/service-areas/naperville-il/motorized-pergolas',
  },
  {
    city: 'Northbrook',
    note: 'North Shore architecture, snow load, drainage, and premium finishes.',
    href: '/service-areas/northbrook-il/motorized-pergolas',
  },
];

const projectProofExamples = [
  {
    title: 'Northbrook poolside pergola',
    project: 'Karp',
    city: 'Northbrook, IL',
    href: '/projects/karp',
    image: images.projects.karp.gallery[0],
    imageAlt:
      'Wood-grain motorized pergola louvers on a Northbrook poolside project',
    type: 'Residential poolside multi-bay system',
    fitQuestion: 'How can a modern louvered roof feel warm next to a pool?',
    signal:
      'Multi-bay layout, wood-grain finish, privacy wall, and distinct dining and lounge zones.',
  },
  {
    title: 'Chicago commercial rooftop',
    project: "Carmine's",
    city: 'Chicago, IL',
    href: '/projects/carmines',
    image: images.projects.carmines.gallery[1],
    imageAlt:
      'Commercial motorized pergola structure on a Chicago rooftop patio',
    type: 'Commercial angled rooftop system',
    fitQuestion: 'What changes when the site is angled, elevated, and busy?',
    signal:
      'Cantilevered conditions, steel reinforcement, long spans, and restaurant seating goals.',
  },
  {
    title: 'Barrington outdoor room',
    project: 'Wade',
    city: 'Barrington, IL',
    href: '/projects/wade',
    image: images.projects.wade.gallery[0],
    imageAlt: 'Motorized pergola outdoor room with glass walls in Barrington',
    type: 'Residential pergola with motorized glass',
    fitQuestion: 'When does a pergola become a full outdoor room?',
    signal:
      'Retractable louvers, motorized glass walls, concealed drainage, electrical routing, and poolside use.',
  },
  {
    title: 'Crystal Lake landscape integration',
    project: 'Jake',
    city: 'Crystal Lake, IL',
    href: '/projects/jake-everly-residence',
    image: images.projects.jake.gallery[0],
    imageAlt:
      'Motorized pergola integrated into a larger Crystal Lake landscape project',
    type: 'Residential landscape-coordinated system',
    fitQuestion: 'What happens when the pergola is one piece of a larger yard?',
    signal:
      'Landscape coordination, multi-bay layout, concealed wiring, and drainage tied to grading.',
  },
  {
    title: 'St. Charles sunken seating area',
    project: 'Greco',
    city: 'St. Charles, IL',
    href: '/projects/greco',
    image: images.projects.greco.gallery[0],
    imageAlt:
      'Motorized pergola structure over a sunken seating area in St. Charles',
    type: 'Residential pergola over custom hardscape',
    fitQuestion: 'How should the system adapt to unusual masonry and grade?',
    signal:
      'Waterfall structure, sunken seating, custom mounting, and careful electrical coordination.',
  },
];

const faqs = [
  {
    question: 'What happens after I request a motorized pergola quote?',
    answer:
      'EDG starts with your contact information and interest, then follows up to understand the site, goals, features, and budget before recommending a likely motorized pergola direction.',
  },
  {
    question: 'Why does EDG not start with a manufacturer?',
    answer:
      'EDG is a dealer for proven pergola manufacturers including Brustor, Azenco, and Sundance, but the project determines the system. The manufacturer is part of the toolkit after the site, structure, drainage, controls, and budget are understood.',
  },
  {
    question: 'What information helps EDG give a useful first response?',
    answer:
      'Include the project location, photos, rough dimensions, intended use, budget range, timeline, and known constraints such as HOA, permit, deck, roof deck, drainage, or electrical concerns.',
  },
  {
    question:
      'Can EDG tell me exactly what a pergola will cost from this guide?',
    answer:
      'No guide can price a custom motorized pergola exactly without site details. This guide gives realistic planning bands and explains what changes cost, but EDG needs project specifics before a proposal.',
  },
];

export default function MotorizedPergolaPlanningPage() {
  const articleSchema = generateArticleSchema({
    title:
      'Motorized Pergola Planning Guide: Cost, System Fit, Permits, and Design Choices',
    description:
      'A practical guide to planning premium motorized pergola projects, including site fit, budget, drainage, controls, accessories, and system selection.',
    url: 'https://www.edgpatioshade.com/guides/motorized-pergola-planning',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteLedStrip}`,
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    category: 'Motorized Pergola Planning',
  });
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Pergola System Fit Planning',
    description:
      'System-fit planning for premium motorized pergola projects, including site exposure, structure, drainage, controls, accessories, and budget range.',
    url: 'https://www.edgpatioshade.com/guides/motorized-pergola-planning',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteLedStrip}`,
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Motorized Pergola Planning Guide' },
  ]);
  const projectProofSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Motorized pergola project proof examples',
    itemListElement: projectProofExamples.map((example, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${example.project} ${example.type}`,
      url: `https://www.edgpatioshade.com${example.href}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema,
            serviceSchema,
            projectProofSchema,
            faqSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Motorized Pergola Planning Guide' },
            ]}
            className="mb-8"
          />

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Premium Pergola Planning Center
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
                Motorized pergola planning, before product selection.
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
                The right pergola system is determined by the job: exposure,
                mounting, span, drainage, electrical, controls, accessories,
                budget, and how the space needs to perform. EDG uses
                manufacturers as a toolkit, not as the starting point.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/guides/pergola-system-fit-review">
                  <Button size="lg">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/guides/pergola-cost">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 text-white hover:bg-white/10"
                  >
                    Compare Cost Bands
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={images.systems.pergolas.whiteLedStrip}
                alt="Motorized pergola with integrated LED lighting and louvered roof"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Fast answer</div>
            <h2 className="section-title mb-4">
              What determines the right motorized pergola system?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The right system is the one that fits the site constraints and the
              job the outdoor space must perform. Brand comes later. A serious
              recommendation starts with the real patio, deck, roof deck, pool
              area, restaurant patio, or outdoor kitchen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemFitFactors.map((factor) => (
              <Card key={factor.title} variant="muted" padding="lg">
                <factor.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{factor.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                EDG specification logic
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                The manufacturer is the toolkit. The project is the brief.
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG is manufacturer-flexible. We are a dealer for proven
                  systems including Brustor, Azenco, and Sundance, but we do not
                  start by selling a logo. We start by understanding what the
                  site needs.
                </p>
                <p>
                  A compact backyard patio may need a different value balance
                  than a lakefront terrace, a restaurant patio, or a roof deck
                  exposed to wind. The same buyer might also need screens,
                  heaters, lighting, and privacy, which changes the pergola from
                  a shade product into a planned outdoor room.
                </p>
              </div>
            </div>

            <Card variant="dark" padding="lg">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Questions that change the recommendation
              </h3>
              <div className="space-y-5">
                {decisionRows.map((row) => (
                  <div
                    key={row.question}
                    className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="mb-2 font-bold text-white">{row.question}</p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {row.impact}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Budget planning</div>
            <h2 className="section-title mb-4">
              Planning bands for premium motorized pergolas
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These bands are not quotes. They are practical filters for early
              planning so buyers understand whether the project is in the right
              category before requesting a detailed proposal.
            </p>
          </div>

          <div className="border-border overflow-x-auto border bg-white">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="border-border bg-surface border-b">
                  <th className="px-5 py-4 text-left text-sm font-bold">
                    Planning band
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-bold">
                    Likely fit
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-bold">
                    Watchouts
                  </th>
                </tr>
              </thead>
              <tbody>
                {budgetBands.map((band) => (
                  <tr
                    key={band.band}
                    className="border-border border-b last:border-b-0"
                  >
                    <td className="text-edg-brand-text px-5 py-5 text-lg font-bold">
                      {band.band}
                    </td>
                    <td className="text-text-secondary px-5 py-5 text-sm">
                      {band.fit}
                    </td>
                    <td className="text-text-secondary px-5 py-5 text-sm">
                      {band.watchouts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-edg-brand mt-8 flex flex-col items-start justify-between gap-4 border-l-4 bg-white p-6 md:flex-row md:items-center">
            <div>
              <h3 className="mb-2 text-xl font-bold">
                Want more detail on cost?
              </h3>
              <p className="text-text-secondary">
                The cost guide explains hidden costs, accessory packages, site
                preparation, permits, and why online kit prices are not a useful
                comparison for premium systems.
              </p>
            </div>
            <Link href="/guides/pergola-cost" className="shrink-0">
              <Button variant="secondary">
                Read Cost Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Continue planning</div>
            <h2 className="section-title mb-4">
              Move from general research to a site-specific plan
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Use these resources to compare cost, site fit, permitting,
              structure, and system options before requesting a quote.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resourceLinks.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group block h-full"
              >
                <Card
                  variant="default"
                  padding="lg"
                  className="group-hover:border-edg-brand/40 h-full transition-colors"
                >
                  <resource.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold">
                    {resource.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Open resource <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">
                Local proof matters
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Similar sites make the advice more useful.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG&apos;s local planning guidance accounts for real market
                conditions: city permitting, roof deck access, estate patios,
                North Shore architecture, pool areas, and Chicago-area weather.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {localProofLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group block">
                  <Card
                    variant="default"
                    padding="lg"
                    className="group-hover:border-edg-brand/40 h-full transition-colors"
                  >
                    <div className="text-edg-brand-text mb-3 flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                      <MapPin className="h-4 w-4" />
                      {item.city}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.note}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Project proof</div>
            <h2 className="section-title mb-4">
              Real projects show why system fit comes first
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These EDG projects are useful because they connect the planning
              questions to visible job conditions: poolside privacy, roof-deck
              structure, glass integration, landscape coordination, drainage,
              and custom mounting.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projectProofExamples.map((example) => (
              <Link
                key={example.href}
                href={example.href}
                className="group block h-full"
              >
                <Card
                  variant="default"
                  padding="none"
                  className="group-hover:border-edg-brand/40 h-full overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    <Image
                      src={example.image}
                      alt={example.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-edg-brand-text mb-3 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                      <MapPin className="h-4 w-4" />
                      {example.city}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{example.title}</h3>
                    <p className="text-text-secondary mb-4 text-sm font-semibold">
                      {example.type}
                    </p>
                    <div className="border-border space-y-3 border-t pt-4">
                      <div>
                        <p className="mb-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                          Fit question
                        </p>
                        <p className="text-sm leading-relaxed">
                          {example.fitQuestion}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                          Project signal
                        </p>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {example.signal}
                        </p>
                      </div>
                    </div>
                    <div className="text-edg-brand-text mt-5 flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                      View project <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">
              Prepare for your review
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              What to send EDG for a useful first response
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Project city or ZIP',
                'Photos or plan links',
                'Rough dimensions',
                'Patio, deck, roof deck, pool, or commercial context',
                'Budget range and timeline',
                'Must-have features such as screens, heaters, lighting, privacy, or controls',
              ].map((item) => (
                <div
                  key={item}
                  className="border-border flex items-start gap-3 border p-4"
                >
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-edg-dark mt-8 p-8 text-white">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Ready for a site-specific recommendation?
                  </h3>
                  <p className="text-zinc-300">
                    Submit the site details and EDG will help identify the
                    likely recommendation, budget band, and red flags.
                  </p>
                </div>
                <Link href="/guides/pergola-system-fit-review">
                  <Button size="lg">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Common questions</div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-edg-dark py-16 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-edg-brand mb-3 text-sm font-bold tracking-widest uppercase">
                Start with fit, not a brand
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Send the site context. EDG will help narrow the system.
              </h2>
            </div>
            <Link href="/guides/pergola-system-fit-review">
              <Button size="lg">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
