import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  X,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola vs. Patio Cover in Chicago & Lake Geneva | EDG',
  description:
    'Compare pergolas, patio covers, and louvered systems for Chicago and Lake Geneva homes by weather protection, drainage, daylight, review needs, and design fit.',
  alternates: {
    canonical: '/guides/pergola-vs-patio-cover',
  },
};

const guideData = {
  title: 'Pergola vs. Patio Cover',
  subtitle: 'How to Choose for Chicago & Lake Geneva Homes',
  intro:
    "The right answer depends on more than the name of the structure. For Chicago patios, roof decks, and Lake Geneva properties, compare daylight, drainage, wind exposure, attachment, and how the space needs to work before choosing a fixed cover or an adjustable louvered system.",
};

const comparisonMatrix = [
  {
    type: 'Traditional Pergola',
    shade: 'Partial (Slats)',
    rain: 'None',
    airflow: 'Excellent',
    cost: '$$ - $$$',
    recommended: false,
  },
  {
    type: 'Solid Patio Cover',
    shade: 'Full fixed shade',
    rain: 'Fixed roof coverage when properly designed',
    airflow: 'May reduce airflow',
    cost: '$$$ - $$$$',
    recommended: false,
  },
  {
    type: 'Louvered Pergola',
    shade: 'Adjustable',
    rain: 'Rain management when the system is specified correctly',
    airflow: 'Excellent (Vented)',
    cost: '$$$$',
    recommended: true,
  },
];

const faqs = [
  {
    question:
      'What is the main difference between a pergola and a patio cover?',
    answer:
      "A patio cover is an extension of your roofline with a solid roof for fixed shade and rain coverage. A pergola typically has an open lattice roof. A 'Louvered Pergola' is the hybrid that gives you adjustable overhead control when the system, drainage, and site conditions are specified correctly.",
  },
  {
    question: 'Which increases home value more?',
    answer:
      'Permanent structures can support perceived value when they make the outdoor area more useful, but appraised value depends on the local market, documentation, installation quality, and buyer priorities.',
  },
  {
    question: 'Can I attach a pergola to my house?',
    answer:
      "Yes, wall-mounted (attached) systems are very popular. However, they require careful engineering to handle snow loads without stressing your home's existing fascia and framing.",
  },
];

export default function PergolaVsPatioCover() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark relative flex min-h-[58vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.pergolaVsPatioCover}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Pergola vs Patio Cover' },
            ]}
            className="mb-8"
          />
          <div className="max-w-4xl">
            <div className="label-editorial mb-5 inline-flex items-center gap-3 text-edg-brand">
              <Lightbulb className="h-4 w-4" />
              Comparison Guide
            </div>
            <h1 className="mb-5 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              {guideData.title}
            </h1>
            <p className="mb-4 text-xl font-bold text-edg-brand md:text-2xl">
              {guideData.subtitle}
            </p>
            <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
              {guideData.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* ========== COMPARISON MATRIX ========== */}
      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Decision Matrix
              </div>
              <h2 className="section-title mb-4">
                Quick Decision Matrix
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Compare the three main options by the job they actually do:
                fixed shade, fixed weather protection, or adjustable outdoor
                room control.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {comparisonMatrix.map((item) => (
                <Card
                  key={item.type}
                  variant={item.recommended ? 'dark' : 'muted'}
                  padding="lg"
                  className={item.recommended ? 'border-edg-brand/60' : ''}
                >
                  <div
                    className={
                      item.recommended
                        ? 'text-edg-brand mb-4 text-xs font-bold tracking-[0.18em] uppercase'
                        : 'text-text-muted mb-4 text-xs font-bold tracking-[0.18em] uppercase'
                    }
                  >
                    {item.recommended ? 'EDG preferred path when fit supports it' : 'Fixed option'}
                  </div>
                  <h3
                    className={
                      item.recommended
                        ? 'mb-5 text-xl font-bold text-text-inverse'
                        : 'mb-5 text-xl font-bold text-text-primary'
                    }
                  >
                    {item.type}
                  </h3>
                  <div
                    className={
                      item.recommended
                        ? 'divide-y divide-border-inverse text-sm'
                        : 'divide-y divide-border text-sm'
                    }
                  >
                    {[
                      ['Shade', item.shade],
                      ['Rain Protection', item.rain],
                      ['Airflow', item.airflow],
                      ['Investment', item.cost],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="grid grid-cols-[0.95fr_1.05fr] gap-4 py-3"
                      >
                        <span
                          className={
                            item.recommended
                              ? 'text-text-inverse-muted'
                              : 'text-text-secondary'
                          }
                        >
                          {label}
                        </span>
                        <span
                          className={
                            item.recommended
                              ? 'font-bold text-text-inverse'
                              : 'font-bold text-text-primary'
                          }
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== DEEP DIVE ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Side-by-side breakdown
              </div>
              <h2 className="section-title">
                The difference is control, not just cover
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <h3 className="mb-4 text-2xl font-bold text-text-primary">
                  Option A: Fixed Patio Cover
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Usually an extension of your home&apos;s roofline. It uses
                  shingles or metal roofing to create permanent shade and a
                  fixed rain cover.
                </p>
                <div className="space-y-3">
                  {[
                    ['Total rain protection', true],
                    ['Seamless look with house', true],
                    ['Darkens adjacent interior rooms', false],
                    ['Traps heat in summer', false],
                  ].map(([label, positive]) => (
                    <div key={label as string} className="flex items-center gap-3 text-sm">
                      {positive ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-edg-brand-text" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-zinc-500" />
                      )}
                      <span className="text-text-secondary">{label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="dark" padding="lg" className="border-edg-brand/40">
                <div className="text-edg-brand mb-4 text-xs font-bold tracking-[0.18em] uppercase">
                  EDG preferred path when the site fits
                </div>
                <h3 className="mb-4 text-2xl font-bold text-text-inverse">
                  Option B: Louvered Pergola
                </h3>
                <p className="text-text-inverse-muted mb-6 leading-relaxed">
                  An aluminum structure with motorized louvers that can open for
                  light and airflow or close for rain management when the system,
                  pitch, drainage, and controls are specified correctly.
                </p>
                <div className="space-y-3">
                  {[
                    'Sun when you want it',
                    'Shade when you need it',
                    'Active ventilation for comfort',
                    'Higher initial investment',
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-edg-brand" />
                      <span className="text-text-inverse-muted">{label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RECOMMENDATION ========== */}
      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card variant="muted" padding="lg" className="border-l-4 border-l-edg-brand">
              <div className="mb-4 flex items-center gap-3">
                <IconWrapper icon={ShieldCheck} variant="brand" size="md" />
                <div className="label-editorial-brand">Our Recommendation</div>
              </div>
              <h2 className="section-title mb-4">
                Start with the problem the structure has to solve
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                If you have south-facing windows that you don&apos;t want to
                darken, a <strong>louvered pergola</strong> is often the better
                path because it can keep winter light available while reducing
                summer heat and glare. If you want a strictly dry room that
                feels more indoors, consider a full enclosure, sunroom, or fixed
                cover.
              </p>
              <p className="text-text-secondary mt-4 text-lg leading-relaxed">
                For a Chicago roof deck or a Lake Geneva site with more open
                exposure, review structure, drainage, attachment, and local
                approvals before treating any option as a standard package.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-inverse md:text-4xl">
              Need to choose the right path?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-text-inverse-muted">
              Use the planning guide or send the project context so EDG can
              compare pergola, cover, screen, glass, and outdoor-room options
              against the actual site.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/guides/motorized-pergola-planning">
                <Button
                  size="lg"
                >
                  Read the Planning Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides/pergola-system-fit-review?source=pergola_vs_patio_cover_bottom">
                <Button
                  size="lg"
                  variant="outline"
                >
                  Get a Fit Review
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
