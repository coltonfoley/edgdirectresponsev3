import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  ShieldCheck,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SystemFitReviewForm } from '@/components/features/pergola/SystemFitReviewForm';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola System Fit Review | EDG Patio & Shade',
  description:
    'Send photos, dimensions, location, budget, and project goals. EDG will outline the right pergola direction, budget range, and site red flags.',
  alternates: {
    canonical: '/guides/pergola-system-fit-review',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergola System Fit Review | EDG Patio & Shade',
    description:
      'A qualified intake for homeowners, builders, and commercial owners evaluating premium motorized pergola systems.',
  },
};

const reviewInputs = [
  'Project city or ZIP',
  'Photos or plan links',
  'Rough dimensions',
  'Patio, deck, roof deck, pool, or commercial context',
  'Budget range',
  'Known permit, HOA, wind, drainage, or electrical concerns',
];

const reviewOutputs = [
  {
    title: 'Likely system direction',
    description:
      'We identify whether the project points toward a freestanding, wall-mounted, deck-aware, roof-deck-aware, or integrated outdoor room approach.',
    icon: ClipboardCheck,
  },
  {
    title: 'Realistic budget band',
    description:
      'We separate compact patio projects from larger poolside, roof deck, and multi-feature outdoor room scopes.',
    icon: Ruler,
  },
  {
    title: 'Site red flags',
    description:
      'We call out the issues that change the spec: exposure, drainage, structure, electrical access, controls, screens, and review requirements.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Is this a quote?',
    answer:
      'No. A System Fit Review is an early feasibility screen. It helps EDG and the buyer understand the likely system direction, budget band, and site issues before a detailed proposal or site visit.',
  },
  {
    question: 'Why does EDG ask for photos and dimensions?',
    answer:
      'Motorized pergola selection depends on the real site. Photos, rough dimensions, rooflines, doors, drainage paths, deck conditions, utilities, and exposure can all change the system recommendation.',
  },
  {
    question: 'Will EDG recommend one manufacturer?',
    answer:
      'EDG is a dealer for proven pergola manufacturers including Brustor, Azenco, and Sundance, but the recommendation starts with the job. The manufacturer is part of the toolkit, not the strategy.',
  },
  {
    question: 'Who should use this review?',
    answer:
      'Homeowners, builders, designers, and commercial owners who are considering a premium motorized pergola or outdoor room and want to understand fit before chasing prices.',
  },
];

export default function PergolaSystemFitReviewPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Pergola System Fit Review',
    description:
      'Early feasibility review for premium motorized pergola projects, including site context, budget range, system direction, and known project constraints.',
    url: 'https://www.edgpatioshade.com/guides/pergola-system-fit-review',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteLedStrip}`,
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Pergola System Fit Review' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Pergola System Fit Review' },
            ]}
            className="mb-8"
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Qualified Pergola Planning
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
                Get a Pergola System Fit Review before you chase the wrong
                quote.
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
                EDG reviews the site, budget, and job the space needs to do,
                then helps narrow the motorized pergola system direction. The
                manufacturer comes after the project logic.
              </p>
            </div>

            <Card variant="dark" padding="lg" className="bg-white/5">
              <h2 className="mb-5 text-2xl font-bold">What to send</h2>
              <ul className="space-y-3">
                {reviewInputs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">What EDG returns</div>
            <h2 className="section-title mb-4">
              A clearer starting point for a premium pergola project
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Premium pergolas are not one-size-fits-all products. A compact
              patio, roof deck, estate pool area, and restaurant patio can all
              need different structure, drainage, controls, and accessory
              planning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviewOutputs.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <item.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="label-editorial-brand mb-4">Start here</div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Tell us what the space needs to become.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                EDG does not begin with a preferred manufacturer. We begin with
                the actual job: sun, rain, wind, privacy, bugs, roof exposure,
                snow, drainage, controls, and how the project should look next
                to the home or commercial property.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                The more concrete the intake, the more useful the first
                response. Photos and rough dimensions are more valuable than a
                perfect description.
              </p>
              <Link href="/guides/motorized-pergola-planning">
                <Button variant="secondary">
                  Read the Planning Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card variant="default" padding="lg">
              <SystemFitReviewForm />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
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
    </div>
  );
}
