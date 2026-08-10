import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Bolt,
  Check,
  DollarSign,
  Gauge,
  Layers3,
  Ruler,
  Settings2,
  Wrench,
} from 'lucide-react';
import { ScreenFitBudgetForm } from '@/components/features/shades/ScreenFitBudgetForm';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { buttonClassName, LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import * as images from '@/lib/images';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Motorized Retractable Screen Pricing Guide 2026 | EDG',
  description:
    'Realistic installed pricing for motorized retractable screens, with example budgets and the size, mesh, controls, electrical, sensor, and installation choices that affect cost.',
  alternates: {
    canonical: '/guides/motorized-retractable-screen-pricing',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Retractable Screen Pricing Guide 2026 | EDG',
    description:
      'Compare realistic installed motorized-screen budgets and the decisions that change a project quote.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized retractable screen cost',
    'motorized screen price',
    'retractable patio screen cost',
    'outdoor motorized screen installation cost',
    'motorized porch screen price',
  ],
};

const installedRanges = [
  {
    type: 'One straightforward opening',
    range: '$3,500–$8,000+',
    description:
      'A custom motorized screen on a covered, accessible opening with a practical mounting and power path.',
  },
  {
    type: 'Two- to four-opening patio',
    range: '$8,000–$25,000+',
    description:
      'A typical residential porch, covered patio, or pergola with coordinated housings, controls, and installation.',
  },
  {
    type: 'Large or highly integrated space',
    range: '$25,000–$50,000+',
    description:
      'Wide spans, multiple zones, concealed details, specialty mesh, sensors, or screens integrated into a larger outdoor room.',
  },
  {
    type: 'Commercial or complex project',
    range: '$35,000–$100,000+',
    description:
      'Restaurants, hospitality spaces, roof decks, and multi-opening projects with difficult access or heavier coordination needs.',
  },
];

const costDrivers = [
  {
    icon: Ruler,
    title: 'Opening size and screen count',
    description:
      'Width, height, and quantity set the basic scope. Very wide or tall openings can require larger housings, stronger components, and more installation time.',
  },
  {
    icon: Layers3,
    title: 'Mesh and fabric',
    description:
      'Insect mesh, solar mesh, privacy fabrics, and clear or vinyl-style weather panels solve different problems and do not price the same. Openness, color, and specialty material matter too.',
  },
  {
    icon: Settings2,
    title: 'Motor and controls',
    description:
      'Motor choice, handheld remotes, wall switches, app control, smart-home integration, and grouping several screens into zones all affect equipment and setup cost.',
  },
  {
    icon: Bolt,
    title: 'Electrical work',
    description:
      'Nearby power can simplify a project. Long wire paths, finished ceilings, new circuits, exterior-rated connections, or coordination with a licensed electrician add scope.',
  },
  {
    icon: Gauge,
    title: 'Weather sensors',
    description:
      'Wind, sun, or other compatible sensors add equipment and programming. They can support convenient operation, but they do not replace product limits or owner judgment in severe weather.',
  },
  {
    icon: Wrench,
    title: 'Installation conditions',
    description:
      'Masonry, uneven or out-of-square openings, recessed housings, hidden tracks, lifts, roof-deck access, finish carpentry, and structural blocking can make installation more involved.',
  },
];

const examples = [
  {
    title: 'Covered porch bug control',
    budget: '$4,000–$8,000+',
    scope:
      'One moderate opening, insect mesh, standard motor and remote, accessible mounting surface, and a short power route.',
  },
  {
    title: 'Three-sided residential patio',
    budget: '$12,000–$25,000+',
    scope:
      'Three custom openings, coordinated housings and tracks, solar or insect mesh, multi-screen controls, wiring, and professional installation.',
  },
  {
    title: 'Integrated pergola screens',
    budget: '$20,000–$45,000+',
    scope:
      'Several larger bays planned with the pergola, concealed or color-matched details, control zones, sensors where appropriate, and electrical coordination.',
  },
  {
    title: 'Restaurant or roof-deck enclosure',
    budget: '$35,000–$100,000+',
    scope:
      'Multiple wide openings, demanding exposure or access, heavier daily use, specialty materials, controls, and site-specific installation planning.',
  },
];

const quoteChecklist = [
  'Rough width and height of each opening',
  'Photos showing the opening, ceiling or beam, side posts, and nearby power',
  'The main goal: insects, glare, privacy, wind comfort, or seasonal use',
  'Preferred mesh or how much view, shade, and privacy you want',
  'Control preferences and whether screens should operate together or separately',
  'Any masonry, trim, access, electrical, or concealment constraints you already know about',
];

const faqs = [
  {
    question: 'How much does a motorized retractable screen cost installed?',
    answer:
      'A straightforward custom opening often plans around $3,500 to $8,000+. Multi-opening residential patios commonly fall around $8,000 to $25,000+, while large, integrated, commercial, or difficult-access projects can cost more. Measurements and site conditions are required for a firm quote.',
  },
  {
    question: 'Are motorized screens priced by square foot?',
    answer:
      'Square footage can help with a rough comparison, but it misses important fixed and project-specific costs such as the motor, housing, tracks, controls, wiring, access, and setup. Installed pricing is more useful when it is based on each complete opening.',
  },
  {
    question: 'What is usually excluded from an online screen price?',
    answer:
      'Low online prices may describe a product or basic opening, not a complete installed project. Ask whether the quote includes custom measurement, housing and tracks, mesh, motor, controls, freight, electrical work, installation, programming, trim, lifts, and taxes.',
  },
  {
    question: 'Does mesh choice change the price?',
    answer:
      'Yes. Insect, solar, privacy, and specialty weather materials have different costs, weights, view-through, airflow, and operating limits. The right choice depends on what the opening needs to solve, not only on the lowest material price.',
  },
  {
    question: 'How is this guide different from the MagnaTrack cost guide?',
    answer:
      'This guide covers the broader motorized retractable-screen category and the full installed budget. The MagnaTrack guide focuses on a featured premium magnetic track-guided system and when that product approach may justify its cost.',
  },
];

export default function MotorizedRetractableScreenPricingGuide() {
  const articleSchema = generateArticleSchema({
    title: 'Motorized Retractable Screen Pricing Guide 2026',
    description:
      'Realistic installed motorized-screen ranges, example budgets, and the primary choices that affect a project quote.',
    url: 'https://www.edgpatioshade.com/guides/motorized-retractable-screen-pricing',
    image: `https://www.edgpatioshade.com${images.systems.shades.deployed}`,
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
    category: 'Buying Guide',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Motorized Screen Pricing' },
              ]}
            />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                2026 Installed Pricing Guide
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                Motorized Retractable Screen Pricing
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                A realistic guide to complete installed budgets—not just the
                screen material. Compare opening sizes, mesh, motors, controls,
                electrical work, sensors, and site conditions before requesting
                a project-specific quote.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="#screen-pricing-quote"
                  conversionName="screen_fit_budget_cta"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                </TrackedLink>
                <LinkButton
                  href="#installed-price-ranges"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See Installed Ranges
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.deployed}
                alt="Installed motorized retractable screens on a covered outdoor space"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short Answer</div>
            <h2 className="section-title mb-6">
              What should you budget for installed motorized screens?
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                A single custom motorized retractable screen often falls around
                <strong className="text-text-primary">
                  {' '}
                  $3,500 to $8,000+
                </strong>
                installed. A patio with two to four openings commonly plans
                around{' '}
                <strong className="text-text-primary">
                  $8,000 to $25,000+
                </strong>
                . Larger outdoor rooms, wide spans, commercial spaces, concealed
                details, and difficult installation conditions can move well
                beyond those bands.
              </p>
              <p>
                These are planning ranges, not fixed offers. The useful number
                is the complete installed price for a screen that fits the
                opening and use case. Product-only or per-square-foot figures
                can omit the housing, tracks, motor, controls, wiring, freight,
                installation, programming, and finish work.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="installed-price-ranges"
        className="section-lg bg-surface-muted scroll-mt-24"
      >
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Planning Ranges</div>
            <h2 className="section-title mb-4">
              Realistic installed price ranges
            </h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Use these bands to decide whether a custom system fits the
              project. A measured site review is still needed for a firm price.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {installedRanges.map((item) => (
              <Card key={item.type} variant="default" padding="lg">
                <DollarSign className="text-edg-brand-text mb-4 h-6 w-6" />
                <h3 className="mb-3 text-xl font-bold">{item.type}</h3>
                <p className="text-edg-brand-text mb-4 text-2xl font-bold">
                  {item.range}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Primary Cost Drivers
            </div>
            <h2 className="section-title mb-5">
              What changes a motorized-screen quote?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The screen is a custom assembly tied to the opening and building.
              These six factors explain most of the difference between a simple
              installation and a larger integrated project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((driver) => (
              <Card key={driver.title} variant="muted" padding="lg">
                <driver.icon className="text-edg-brand-text mb-4 h-6 w-6" />
                <h3 className="mb-3 text-xl font-bold">{driver.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {driver.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Example Budgets</div>
            <h2 className="section-title mb-4">
              Four ways the scope can add up
            </h2>
            <p className="text-text-secondary mx-auto max-w-3xl">
              These examples illustrate scope, not a menu of fixed packages.
              Similar-size openings can price differently when mesh, power,
              controls, mounting, exposure, or access changes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {examples.map((example) => (
              <Card key={example.title} variant="default" padding="lg">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold">{example.title}</h3>
                  <p className="text-edg-brand-text text-xl font-bold">
                    {example.budget}
                  </p>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {example.scope}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">Compare Quotes</div>
              <h2 className="section-title mb-6">
                Make sure the prices include the same scope.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                A lower quote is not necessarily a better value if it excludes
                the electrical path, controls, installation equipment, trim, or
                site corrections. Ask for the complete opening-by-opening scope
                and the assumptions behind it.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Product choice matters too. For a closer look at EDG&apos;s
                featured premium magnetic track-guided option, read the{' '}
                <Link
                  href="/guides/magnatrack-screens-cost"
                  className="text-text-primary underline underline-offset-4"
                >
                  MagnaTrack screen cost guide
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-4">
              {quoteChecklist.map((item) => (
                <Card key={item} variant="default" padding="lg">
                  <div className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-primary leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="screen-pricing-quote"
        className="section-lg bg-surface-muted scroll-mt-24"
      >
        <Container>
          <div className="border-border mx-auto grid max-w-5xl gap-12 border bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div>
              <div className="label-editorial-brand mb-4">
                Project-Specific Pricing
              </div>
              <h2 className="section-title mb-6">
                Request a motorized-screen quote.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                Start with your contact information and what you want the
                screens to solve. Rough sizes, notes, and photos are helpful but
                optional for the initial request.
              </p>
              <p className="text-text-secondary leading-relaxed">
                EDG will review the opening, product fit, installation
                conditions, and next step before providing project-specific
                pricing.
              </p>
            </div>
            <ScreenFitBudgetForm
              source="motorized_screen_pricing_quote"
              ctaPosition="motorized_screen_pricing_guide"
            />
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Motorized screen pricing questions
              </h2>
            </div>
            <div className="space-y-6">
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

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Turn the planning range into a real scope.
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                EDG can review your openings, goals, photos, electrical path,
                and installation conditions before recommending a screen system.
              </p>
              <TrackedLink
                href="#screen-pricing-quote"
                conversionName="screen_fit_budget_cta"
                className={buttonClassName({ size: 'lg' })}
              >
                Request a Quote
              </TrackedLink>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="text-text-inverse-muted space-y-4">
                <h3 className="text-lg font-bold tracking-wide uppercase">
                  Related planning
                </h3>
                <Link
                  href="/systems/shades"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Motorized screen design and installation
                </Link>
                <Link
                  href="/guides/magnatrack-screens-cost"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  MagnaTrack-specific cost guide
                </Link>
                <Link
                  href="/service-areas/chicago-il/retractable-screens"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Chicago retractable screens
                </Link>
                <Link
                  href="/service-areas/southwest-florida/motorized-screens"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Southwest Florida motorized screens
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
