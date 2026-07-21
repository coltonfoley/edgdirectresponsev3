import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CloudRain,
  Info,
  Star,
  Sun,
  User,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'The Complete Guide to Louvered Pergolas | 2026 Edition',
  description:
    'Chicago homeowners: learn how motorized louvered pergolas handle sun, rain, drainage, permits, winter weather, and system-fit planning.',
  alternates: {
    canonical: '/guides/louvered-pergolas',
  },
};

const guideData = {
  title: 'The Complete Guide to Motorized Louvered Pergolas',
  subtitle: '2026 Edition',
  publishedDate: '2026-07-09',
  author: 'Colton Foley',
  intro:
    'Everything Chicago homeowners need to know about louvered roof systems: costs, permits, Midwest weather, drainage, and system fit.',
};

const comparisonData = [
  {
    feature: 'Rain Protection',
    louvered: 'Rain management when closed',
    traditional: 'None / Minimal',
  },
  {
    feature: 'Sun Control',
    louvered: 'Adjustable by selected system',
    traditional: 'Fixed Shade Only',
  },
  {
    feature: 'Snow Load',
    louvered: 'Engineered by selected system',
    traditional: 'Varies',
  },
  {
    feature: 'Integrated Tech',
    louvered: 'Lights, Heaters, Screens',
    traditional: 'Add-on / Difficult',
  },
  {
    feature: 'Maintenance',
    louvered: 'Low (Powder Coated)',
    traditional: 'High (Staining/Painting)',
  },
];

const faqs = [
  {
    question: 'How much does a louvered pergola cost in Chicago?',
    answer:
      'For a high-quality motorized aluminum louvered system, expect broad planning ranges around $120-$200 per sq. ft. fully installed, depending on the system, site conditions, electrical, drainage, screens, lights, heaters, and review path. EDG uses proven manufacturers such as Brustor, Azenco, and Sundance as a toolkit after the project fit is clear.',
  },
  {
    question: 'Do I need a permit for a louvered pergola?',
    answer:
      'Often, but not always. The answer depends on the address, jurisdiction, structure, attachment, electrical scope, and local review path. EDG can help organize the project information, but the city, village, county, or HOA confirms final requirements.',
  },
  {
    question: 'Can it handle Chicago winters?',
    answer:
      "Often, yes, when the selected system and installation are specified for the site. EDG reviews exposure, snow, drainage, attachment, controls, and the manufacturer's winter protocol before recommending a final direction.",
  },
  {
    question: 'Does it add value to my home?',
    answer:
      'It can support perceived value when it creates a more usable outdoor living area, but resale and appraisal impact depend on the market, installation quality, documentation, and buyer priorities.',
  },
];

const operatingModes = [
  {
    icon: Sun,
    title: 'Open mode',
    description:
      'Let in sun and airflow when the weather and season support it.',
  },
  {
    icon: Info,
    title: 'Angled mode',
    description:
      'Control glare and direct sun while keeping ventilation moving.',
  },
  {
    icon: CloudRain,
    title: 'Closed mode',
    description:
      'Manage rain when the system, pitch, drainage, and install conditions are specified correctly.',
  },
];

const budgetBands = [
  {
    label: 'Compact patio',
    range: '$25k+',
    note: 'Smaller footprints with simpler structure and fewer accessories.',
  },
  {
    label: 'Common residential',
    range: '$45k+',
    note: 'Larger patios with normal electrical, drainage, finish, and review coordination.',
  },
  {
    label: 'Outdoor room / multi-zone',
    range: '$75k+',
    note: 'Screens, heaters, lighting, glass, privacy, or more complex structure.',
  },
];

const nextSteps = [
  {
    title: 'Start with system fit',
    description:
      'Send rough dimensions, photos, location, and goals so EDG can identify the likely direction before pricing.',
    href: '/guides/pergola-system-fit-review?source=louvered_pergolas_guide',
  },
  {
    title: 'Compare cost variables',
    description:
      'See how size, structure, drainage, controls, screens, and accessories change the planning range.',
    href: '/guides/pergola-cost',
  },
  {
    title: 'Review system options',
    description:
      'Understand how EDG thinks about louvered roof systems before choosing a manufacturer.',
    href: '/systems/pergolas',
  },
];

export default function LouveredPergolaGuide() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Complete Guide to Louvered Pergolas' },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Pillar Guide
            </div>
            <h1 className="mb-5 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              {guideData.title}
            </h1>
            <p className="text-edg-brand mb-4 text-xl font-bold md:text-2xl">
              {guideData.subtitle}
            </p>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
              {guideData.intro}
            </p>

            <div className="mb-8 flex flex-wrap gap-5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" /> {guideData.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> 12 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="text-edg-brand h-4 w-4" /> Updated{' '}
                {guideData.publishedDate}
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?source=louvered_pergolas_hero">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  Design in 3D
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Fast Answer</div>
            <h2 className="section-title mb-6">
              What exactly is a louvered pergola?
            </h2>
            <p className="text-text-secondary mb-10 text-lg leading-relaxed">
              Unlike a traditional wooden pergola with fixed slats that only
              provide partial shade, a <strong>louvered pergola</strong>{' '}
              features a motorized roof made of aluminum blades. These blades
              rotate to help control sun, airflow, rain protection, and comfort
              across normal Chicago-area seasons.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {operatingModes.map((mode) => (
                <Card key={mode.title} variant="outline" padding="lg">
                  <IconWrapper
                    icon={mode.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="mb-3 text-lg font-bold">{mode.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {mode.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">Comparison</div>
              <h2 className="section-title mb-4">
                Louvered system vs. traditional wood
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Homeowners usually compare louvered aluminum systems against a
                fixed wood pergola. The real decision is whether the space needs
                shade only, or controlled weather protection and accessories.
              </p>
            </div>

            <div className="border-border overflow-x-auto border bg-white">
              <table className="w-full min-w-[720px] text-left">
                <thead className="bg-edg-dark text-white">
                  <tr>
                    <th className="p-5 font-bold">Feature</th>
                    <th className="text-edg-brand p-5 font-bold">
                      Louvered aluminum
                    </th>
                    <th className="p-5 font-bold text-zinc-300">
                      Traditional wood
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td className="p-5 font-bold">{row.feature}</td>
                      <td className="text-edg-brand-dark p-5 font-medium">
                        {row.louvered}
                      </td>
                      <td className="text-text-secondary p-5">
                        {row.traditional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial text-edg-brand mb-4">
                Transparent Pricing
              </div>
              <h2 className="section-title mb-4 text-white">
                Real-world planning bands for Chicago-area projects
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
                Motorized louvered roofs are best discussed in planning bands
                until the site is reviewed. Size, attachment, electrical,
                drainage, screens, heaters, finish, and permit path can all move
                the final scope.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {budgetBands.map((band) => (
                <div key={band.label} className="border border-white/10 p-6">
                  <div className="mb-2 text-sm text-zinc-300">{band.label}</div>
                  <div className="mb-4 text-4xl font-bold">{band.range}</div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {band.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-400">
              Planning bands are not quotes. EDG reviews photos, dimensions,
              structure, access, and desired features before recommending a
              system.
            </p>

            <div className="mt-8 text-center">
              <Link href="/guides/pergola-system-fit-review?source=louvered_pergolas_pricing">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Frequently asked questions
            </h2>

            <div className="space-y-5">
              {faqs.map((item) => (
                <Card key={item.question} variant="outline" padding="lg">
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-bold">
                    <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-text-secondary pl-8 leading-relaxed">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Next Steps</div>
            <h2 className="section-title mb-4">
              Use the guide to start a better first conversation
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A louvered roof is only one part of the decision. These next steps
              keep the path connected to system fit, cost planning, and
              EDG&apos;s pergola product pages.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link key={step.title} href={step.href} className="group">
                <Card
                  variant="outline"
                  padding="lg"
                  className="group-hover:border-edg-brand h-full transition-colors"
                >
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-edg-brand-dark inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-text-inverse mb-6 text-3xl font-bold md:text-4xl">
              Ready to design yours?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
              Stop guessing and start with the site details that determine which
              system actually fits the job.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?source=louvered_pergolas_bottom">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button size="lg" variant="outline">
                  Design in 3D
                </Button>
              </Link>
              <Link href="/systems/pergolas">
                <Button size="lg" variant="outline">
                  View Pergola Systems
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
