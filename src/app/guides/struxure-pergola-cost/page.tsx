import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Lightbulb,
  MapPin,
  Ruler,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { buttonClassName } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Considering StruXure? Compare EDG Pergola Alternatives | EDG',
  description:
    'Considering StruXure? Explore EDG pergola alternatives and compare roof layouts, features, installation scope, and service for your patio.',
  keywords: [
    'struxure pergola cost',
    'struxure pergola price',
    'struxure pergola cost per square foot',
    'struxure pergola quote',
    'pergola x cost',
  ],
  alternates: {
    canonical: '/guides/struxure-pergola-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Considering StruXure? Compare EDG Pergola Alternatives | EDG',
    description:
      'Explore EDG pergola alternatives and compare features, installation scope, and service for your patio.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const costDrivers = [
  {
    icon: Ruler,
    title: 'Footprint, spans, and zones',
    description:
      'Width, projection, clear spans, post strategy, and the number of independently operated roof zones change the material, engineering, and installation scope.',
  },
  {
    icon: Layers,
    title: 'Model and configuration',
    description:
      'An adjustable louvered roof, a sliding roof, and a solid-roof bay offer different ways to use the patio. Compare roof operation and layout against the shade, shelter, and openness you want.',
  },
  {
    icon: Lightbulb,
    title: 'Accessories and controls',
    description:
      'Screens, heaters, fans, lighting, smart controls, sensors, audio, and the electrical work needed to support them can move the total quickly.',
  },
  {
    icon: ShieldCheck,
    title: 'Mounting and site conditions',
    description:
      'Attached, freestanding, deck, roof, slab, landscaped, sloped, or tight-access installations can require different foundations, attachment details, staging, and labor.',
  },
  {
    icon: Wind,
    title: 'Weather, permits, and engineering',
    description:
      'Local wind and snow conditions, drainage routing, permit drawings, HOA review, and project-specific engineering should be identified before a proposal is treated as comparable.',
  },
  {
    icon: MapPin,
    title: 'Dealer territory and execution',
    description:
      'Dealer labor, travel, freight, access, scheduling, site coordination, and the level of project management differ by market.',
  },
];

const quoteChecklist = [
  {
    label: 'Roof and layout',
    ask: 'Footprint, orientation, model/configuration, clear spans, post count, and number of zones.',
    reason:
      'A 10×10 single-zone roof is not the same scope as a long multi-zone roof, even when both are described as a StruXure pergola.',
  },
  {
    label: 'Mounting and structure',
    ask: 'Attached or freestanding; patio, deck, roof, slab, or landscape mounting; footing and reinforcement assumptions.',
    reason:
      'The foundation, attachment, and support path can change both price and whether the proposed layout is feasible.',
  },
  {
    label: 'Drainage and electrical',
    ask: 'Gutters, downspouts, discharge location, pitch, circuits, controls, final connections, and who performs each item.',
    reason:
      'A quote can look lower when water routing or electrical work is left for the owner or a separate trade.',
  },
  {
    label: 'Accessories',
    ask: 'Screens, heaters, fans, lights, sensors, audio, privacy elements, and smart-home integration.',
    reason:
      'Accessories affect more than the product line: they can add wiring, beams, controls, and installation time.',
  },
  {
    label: 'Approvals and engineering',
    ask: 'Permit package, stamped calculations, HOA submissions, inspection coordination, and any project-specific engineering exclusions.',
    reason:
      'The same roof can require a different preconstruction path in different municipalities or on a different structure.',
  },
  {
    label: 'Execution and ownership',
    ask: 'Delivery, staging, installation, cleanup, taxes, warranty terms, service path, lead time, payment schedule, and exclusions.',
    reason:
      'The most useful number is the total for the work you actually need, with the responsibilities and warranty boundaries in writing.',
  },
] as const;

const faqs = [
  {
    question: 'Can EDG help me compare pergola options?',
    answer: 'Yes. Share your patio dimensions, photos, and priorities. EDG can propose an alternative and help you compare roof layout, screens, controls, installation responsibilities, and service.',
  },
  {
    question: 'What should I compare besides the price?',
    answer: 'Compare the complete project: footprint, post locations, roof operation, drainage, foundations, electrical work, screens, lighting, permits, engineering, installation, warranty, and service. Ask each provider to identify what is included and excluded.',
  },
  {
    question: 'Is EDG a StruXure dealer?',
    answer: 'No. EDG offers pergola alternatives selected around your space, comfort goals, and budget.',
  },
];

export default function StruxurePergolaCostPage() {
  const articleSchema = generateArticleSchema({
    title: 'Considering StruXure? Compare EDG Pergola Alternatives',
    description:
      'Explore model-agnostic EDG pergola alternatives for your patio.',
    url: 'https://www.edgpatioshade.com/guides/struxure-pergola-cost',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Pergola Comparison',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'StruXure Pergola Cost' },
            ]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Pergola Comparison
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                Comparing StruXure with an EDG alternative?
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                Considering a StruXure pergola? Compare roof
                layouts, screens, controls, and installation scope with options
                from EDG. Start with how you want to use your patio, then find
                the combination that fits your space and budget.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="/guides/pergola-system-fit-review?source=struxure_pergola_cost"
                  conversionName="struxure_pergola_cost_quote_cta"
                  ctaPosition="struxure_pergola_cost_hero"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request an EDG Alternative Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <Link
                  href="/systems/pergolas"
                  className={buttonClassName({
                    variant: 'outline',
                    size: 'lg',
                  })}
                >
                  Explore EDG pergolas
                </Link>
              </div>
              <p className="text-text-inverse-muted mt-5 max-w-xl text-sm leading-relaxed">
                Quote requests on this page are for EDG alternatives.

              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.pergolas.grayBronzeWhite}
                  alt="Motorized louvered pergola used by EDG to illustrate installed project scope"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <p className="text-text-inverse-muted mt-3 text-xs leading-relaxed">
                Illustrative EDG system image. This photo is not represented as
                a StruXure installation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short answer</div>
            <h2 className="section-title mb-6">
              Start with the patio you want to use
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                Plan around your space: where you want shade, how you want the
                roof to open, whether you need screens, and how lighting or
                heaters will support everyday use. EDG recommends options around
                those priorities and your budget.
              </p>
              <p>
                When comparing proposals, use the same footprint and feature
                list. Include foundations, permits, electrical work, drainage,
                installation, and service responsibilities so you can evaluate
                the complete project.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">StruXure dealer vs. EDG</div>
            <h2 className="section-title mb-4">Two proposals. One project brief.</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Use the same footprint, comfort goals, and installation scope for
              both conversations so you can see what each proposal delivers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">A StruXure dealer proposal</h3>
              <p className="text-text-secondary leading-relaxed">
                Ask each dealer to identify the proposed configuration,
                installed scope, options, exclusions, warranty, and service
                responsibilities. Use the same project brief when requesting an EDG alternative.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">An EDG alternative</h3>
              <p className="text-text-secondary leading-relaxed">
                EDG starts with your space and selects an alternative from the
                systems we sell. We are model agnostic: roof layout, screens,
                lighting, controls, exposure, and budget guide the recommendation.
                Compare our proposed scope and responsibilities against the
                other proposal before choosing.
              </p>
              <Link href="/systems/pergolas" className="mt-6 inline-flex items-center gap-2 font-bold underline underline-offset-4">
                Explore EDG pergola options <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Cost drivers</div>
            <h2 className="section-title mb-4">
              What shapes your pergola project
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A quote should make the major changes visible. These are the
              questions that separate a real project comparison from a brand
              name and a square-foot guess.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((driver) => (
              <Card key={driver.title} variant="default" padding="lg">
                <driver.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{driver.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {driver.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Compare equivalent proposals
            </div>
            <h2 className="section-title mb-4">
              Put every bidder on the same scope sheet
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Ask for answers in writing. If a line is unknown, excluded, or
              assigned to another trade, keep it visible rather than treating
              the proposal as complete.
            </p>
          </div>
          <div className="mx-auto max-w-5xl space-y-4">
            {quoteChecklist.map((item, index) => (
              <Card key={item.label} variant="muted" padding="md">
                <div className="grid gap-4 md:grid-cols-[auto_0.7fr_1.3fr] md:items-start">
                  <div className="text-edg-brand-text flex items-center gap-3 font-bold">
                    <span className="bg-edg-brand inline-flex h-8 w-8 items-center justify-center text-sm text-black">
                      {index + 1}
                    </span>
                    <span className="md:hidden">{item.label}</span>
                  </div>
                  <div>
                    <h3 className="hidden text-lg font-bold md:block">
                      {item.label}
                    </h3>
                    <p className="text-text-primary font-medium">{item.ask}</p>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                EDG&apos;s relationship
              </div>
              <h2 className="section-title mb-6">
                Compare an EDG alternative on the same scope
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  Explore an EDG proposal for your patio and compare roof layout,
                  screens, controls, engineering, installation, and service
                  responsibilities against a StruXure dealer proposal.
                </p>
                <p>
                  EDG is a system-agnostic design and supply partner. Its
                  current pergola toolkit includes Brustor, Azenco, and
                  Sundance. The right alternative depends on the footprint,
                  exposure, drainage, controls, engineering path, budget, and
                  local service plan—not on a universal brand ranking.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/guides/louvered-pergola-brands-compared"
                  className={buttonClassName({ variant: 'dark' })}
                >
                  Compare system fit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/guides/pergola-cost"
                  className="border-border-strong text-text-primary hover:bg-surface-muted inline-flex h-11 items-center justify-center border px-6 py-2 text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  Read the general cost guide
                </Link>
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-edg-brand-text h-6 w-6" />
                <h3 className="text-2xl font-bold">Good next-step inputs</h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                If you want a project-specific conversation, these details are
                more useful than a brand name alone:
              </p>
              <ul className="text-text-secondary space-y-3 leading-relaxed">
                <li>• Rough width, projection, and desired post locations</li>
                <li>• Photos of the patio, deck, roofline, and access path</li>
                <li>• Attached or freestanding preference</li>
                <li>• Screens, heaters, lights, fans, and control goals</li>
                <li>• Project location, timing, and budget band</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Questions buyers ask
            </div>
            <h2 className="section-title mb-4">Comparing pergola options</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} variant="default" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-brand text-edg-dark">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Get an EDG alternative to compare
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
              Share the footprint, photos, location, and features you are
              considering. EDG can help clarify the project path and compare an
              equivalent motorized pergola scope.
            </p>
            <TrackedLink
              href="/guides/pergola-system-fit-review?source=struxure_pergola_cost_bottom"
              conversionName="struxure_pergola_cost_quote_cta"
              ctaPosition="struxure_pergola_cost_bottom"
              className="bg-edg-dark hover:bg-edg-dark/90 inline-flex h-14 items-center justify-center px-8 py-2 text-base font-bold tracking-wider text-white uppercase transition-colors"
            >
              Request an EDG Alternative Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </div>
        </Container>
      </Section>

    </article>
  );
}
