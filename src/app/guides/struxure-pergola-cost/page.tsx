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
  title: 'Considering StruXure? Explore EDG Pergolas | EDG',
  description:
    'Considering StruXure? See how EDG selects, designs, installs, and cares for motorized pergola systems around your patio, roof, screens, and comfort goals.',
  keywords: [
    'struxure pergola cost',
    'struxure pergola price',
    'struxure pergola cost per square foot',
    'struxure pergola quote',
    'motorized pergola design',
  ],
  alternates: {
    canonical: '/guides/struxure-pergola-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Considering StruXure? Explore EDG Pergolas | EDG',
    description:
      'See how EDG plans a motorized pergola around your patio, roof, screens, controls, installation, and care needs.',
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

const projectChecklist = [
  {
    label: 'How you use the patio',
    description:
      'Tell EDG when you use the space, where the sun lands, what you want protected, and whether the room should open fully or stay comfortable through changing weather.',
  },
  {
    label: 'Roof and post layout',
    description:
      'Share the rough footprint, desired post locations, roofline, and clearances. EDG turns those starting points into a buildable layout.',
  },
  {
    label: 'Comfort features',
    description:
      'Decide whether screens, glass, lighting, heaters, fans, privacy, or controls belong in the first design or a later phase.',
  },
  {
    label: 'Site and approval path',
    description:
      'EDG reviews the mounting surface, drainage, electrical path, access, permits, HOA requirements, and engineering needs for the location.',
  },
  {
    label: 'Installation and care',
    description:
      'The proposal should make delivery, installation, owner handoff, maintenance, and future service responsibilities easy to understand.',
  },
] as const;

const faqs = [
  {
    question: 'Can EDG help me compare a StruXure pergola?',
    answer:
      'Yes. EDG can review the patio, roof layout, screens, controls, installation path, and care needs you are comparing, then recommend a motorized pergola system that fits the project. EDG starts with the space and the way you want to use it.',
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
    title: 'Considering StruXure? Explore EDG Pergolas',
    description:
      'A homeowner guide to how EDG selects and plans motorized pergola systems around patio use, roof layout, screens, installation, and care.',
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
              { label: 'StruXure Pergola Cost' },
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
                Considering StruXure? Explore EDG pergolas.
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
                If you are considering StruXure, EDG can help you clarify the
                project brief and compare it with the motorized pergola systems
                EDG designs, supplies, installs, and supports. The goal is a
                roof that fits the home and the way you want the space to work.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Project fit</div>
            <h2 className="section-title mb-4">
              Compare the project, not just the name
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG starts with the patio and works outward. These are the
              decisions that make a motorized pergola feel right after
              installation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                How should the roof work?
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Decide where you want shade, how much sky you want to see, how
                the roof should respond to sun and rain, and whether separate
                zones would make the patio easier to use.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                What should the room include?
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Screens, glass, heaters, fans, lighting, privacy, and controls
                change the experience and the installation plan. EDG coordinates
                those choices with the roof instead of adding them after the
                layout is fixed.
              </p>
            </Card>
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">How EDG works</div>
            <h2 className="section-title mb-4">
              From patio questions to an installation plan
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Bring EDG the starting point. We help turn it into a clear design,
              a coordinated scope, and a project your family can use.
            </p>
          </div>
          <div className="mx-auto max-w-5xl space-y-4">
            {projectChecklist.map((item, index) => (
              <Card key={item.label} variant="muted" padding="md">
                <div className="grid gap-4 md:grid-cols-[auto_0.7fr_1.3fr] md:items-start">
                  <div className="text-edg-brand-text flex items-center gap-3 font-bold">
                    <span className="bg-edg-brand inline-flex h-8 w-8 items-center justify-center text-sm text-black">
                      {index + 1}
                    </span>
                    <span className="md:hidden">{item.label}</span>
                  </div>
                  <h3 className="hidden text-lg font-bold md:block">
                    {item.label}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
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
                The EDG difference
              </div>
              <h2 className="section-title mb-6">
                One specialty partner for the whole outdoor room
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG is a system-agnostic design and supply partner for
                  motorized outdoor systems. We recommend what fits the project,
                  not what happens to be the only option.
                </p>
                <p>
                  For local homeowners, EDG can coordinate design, engineering,
                  permitting, installation, and care. For trade partners, EDG
                  supports specification, procurement, delivery, and installer
                  coordination across the country.
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
              Share the footprint, photos, location, and the comfort you want.
              EDG can help you choose the right roof layout and coordinate the
              rest of the outdoor room.
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
