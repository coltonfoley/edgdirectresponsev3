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
  title: 'Considering StruXure? Explore EDG Pergola Alternatives | EDG',
  description:
    'Explore EDG pergola alternatives to StruXure, with system selection, design, installation, and care planned around your patio and comfort goals.',
  keywords: [
    'struxure pergola alternative',
    'struxure alternative',
    'motorized pergola alternatives',
    'motorized pergola design',
    'EDG pergolas',
  ],
  alternates: {
    canonical: '/guides/struxure-pergola-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Considering StruXure? Explore EDG Pergola Alternatives | EDG',
    description:
      'Explore EDG pergola alternatives with design, installation, and care planned around your patio, roof, screens, controls, and comfort needs.',
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
      'Width, projection, clear spans, post locations, and independently operated roof zones shape the design, engineering, and installation plan.',
  },
  {
    icon: Layers,
    title: 'Roof operation and layout',
    description:
      'EDG compares how the roof opens, where it shades, how it handles rain, and how it fits the patio instead of starting with a brand name alone.',
  },
  {
    icon: Lightbulb,
    title: 'Screens, glass, and controls',
    description:
      'Screens, glass walls, heaters, fans, lighting, sensors, and controls should be planned with the roof so the finished space works as one system.',
  },
  {
    icon: ShieldCheck,
    title: 'Mounting and structure',
    description:
      'Attached, freestanding, deck, roof, slab, landscaped, sloped, and tight-access projects each need a clear support and preparation path.',
  },
  {
    icon: Wind,
    title: 'Exposure, drainage, and approvals',
    description:
      'EDG reviews sun, wind, snow, drainage, permits, HOA requirements, and project-specific engineering before the design is finalized.',
  },
  {
    icon: MapPin,
    title: 'Installation and care',
    description:
      'Delivery, staging, installation, owner orientation, service access, and ongoing care are part of choosing a system that will work well at home.',
  },
];

const faqs = [
  {
    question: 'Can EDG recommend an alternative to a StruXure pergola?',
    answer:
      'Yes. EDG can review the patio, roof layout, screens, controls, installation path, and care needs you are comparing, then recommend an alternative motorized pergola system that fits the project. EDG starts with the space and the way you want to use it.',
  },
  {
    question: 'What should I compare besides the pergola brand?',
    answer:
      'Compare the complete project: footprint, post locations, roof operation, drainage, foundations, electrical work, screens, lighting, permits, engineering, installation, owner handoff, and service. The right comparison is the system and support plan that fit your patio.',
  },
  {
    question: 'How does EDG choose a pergola system?',
    answer:
      'EDG is manufacturer-flexible. We look at exposure, mounting, drainage, controls, screens or glass, engineering, budget, local installation, and the way the patio will be used before recommending the system and layout.',
  },
];

export default function StruxurePergolaCostPage() {
  const articleSchema = generateArticleSchema({
    title: 'Considering StruXure? Explore EDG Pergola Alternatives',
    description:
      'A homeowner guide to EDG pergola alternatives, with motorized system selection, roof layout, screens, installation, and care planned around the patio.',
    url: 'https://www.edgpatioshade.com/guides/struxure-pergola-cost',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Pergola Planning',
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
              { label: 'EDG Pergola Alternatives' },
            ]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Pergola planning guide
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                Considering StruXure? Explore EDG pergola alternatives.
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                Start with how you want to use the patio. EDG selects and
                designs motorized pergola systems around shade, rain, views,
                screens, glass, controls, installation, and care.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="/guides/pergola-system-fit-review?source=struxure_pergola_cost"
                  conversionName="struxure_pergola_cost_quote_cta"
                  ctaPosition="struxure_pergola_cost_hero"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
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
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.grayBronzeWhite}
                alt="Motorized louvered pergola used by EDG to illustrate an installed patio project"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short answer</div>
            <h2 className="section-title mb-6">
              The right pergola starts with the way you use the patio
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                A pergola is more than a roof model. The footprint, post
                locations, sun exposure, drainage path, controls, screens,
                glass, lighting, heat, and installation plan all shape the
                result. EDG brings those decisions into one design conversation.
              </p>
              <p>
                If you are considering StruXure, EDG can recommend an
                alternative motorized pergola system when it fits the layout,
                use, and service plan better. The goal is a roof that fits the
                home and the way you want the space to work.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              What shapes the plan
            </div>
            <h2 className="section-title mb-4">
              The details behind a good pergola recommendation
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG uses the same practical questions whether the starting point
              is a brand, a sketch, or a patio that needs a better way to work.
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
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">How EDG works</div>
              <h2 className="section-title mb-6">
                A specialty partner for the whole outdoor room
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG is a system-agnostic design and supply partner for
                  motorized outdoor systems. We use multi-brand access to
                  recommend what fits the project, then coordinate design,
                  engineering, permitting, installation, and care for local
                  homeowners.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/systems/pergolas"
                  className={buttonClassName({ variant: 'dark' })}
                >
                  Explore EDG pergolas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/outdoor-rooms/pergola-glass-outdoor-room"
                  className="border-border-strong text-text-primary hover:bg-surface-muted inline-flex h-11 items-center justify-center border px-6 py-2 text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  See a complete room plan
                </Link>
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-edg-brand-text h-6 w-6" />
                <h3 className="text-2xl font-bold">What you can expect</h3>
              </div>
              <ul className="text-text-secondary space-y-3 leading-relaxed">
                <li>• A recommendation around your site and priorities</li>
                <li>
                  • Clear roof, screen, glass, electrical, and drainage scope
                </li>
                <li>
                  • Support through design, approvals, installation, and care
                </li>
                <li>• Local white-glove service where EDG installs directly</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Questions homeowners ask
            </div>
            <h2 className="section-title mb-4">
              Considering a motorized pergola?
            </h2>
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
              Plan the pergola around your patio
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
              A footprint, photos, location, and the comfort you want are
              helpful but not required to start. EDG can help you choose the
              right roof layout and coordinate the rest of the outdoor room.
            </p>
            <TrackedLink
              href="/guides/pergola-system-fit-review?source=struxure_pergola_cost_bottom"
              conversionName="struxure_pergola_cost_quote_cta"
              ctaPosition="struxure_pergola_cost_bottom"
              className="bg-edg-dark hover:bg-edg-dark/90 inline-flex h-14 items-center justify-center px-8 py-2 text-base font-bold tracking-wider text-white uppercase transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </div>
        </Container>
      </Section>
    </article>
  );
}
