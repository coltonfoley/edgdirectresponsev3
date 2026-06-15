import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import {
  CheckCircle2,
  Info,
  ArrowRight,
  Sun,
  CloudRain,
  Star,
  Clock,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'The Complete Guide to Louvered Pergolas | 2026 Edition',
  description:
    'Everything Chicago homeowners need to know about motorized louvered pergolas: costs ($120-180/sqft), permits, winter performance, and ROI. Updated for 2026.',
  alternates: {
    canonical: '/guides/louvered-pergolas',
  },
};

const guideData = {
  title: 'The Complete Guide to Motorized Louvered Pergolas',
  subtitle: '2026 Edition',
  publishedDate: '2026-02-03',
  author: 'Colton Foley',
  intro:
    'Everything Chicago homeowners need to know about louvered roof systems: costs, permits, system fit, and ROI.',
};

const comparisonData = [
  {
    feature: 'Rain Protection',
    louvered: 'Rain management when closed',
    traditional: 'None / Minimal',
  },
  {
    feature: 'Sun Control',
    louvered: 'Adjustable (0-135°)',
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
      'Yes. In almost every municipality from Wilmette to Lake Forest, a louvered pergola is considered a permanent structure. It requires zoning approval (setbacks/coverage) and a building permit. We handle this entire process.',
  },
  {
    question: 'Can it handle Chicago winters?',
    answer:
      "Often, yes, when the selected system and installation are specified for the site. EDG reviews exposure, snow, drainage, attachment, controls, and the manufacturer's winter protocol before recommending a final direction.",
  },
  {
    question: 'Does it add value to my home?',
    answer:
      'Yes. Unlike a fast-depreciating awning, a permanent aluminum structure is appraised similarly to a sunroom or high-end deck. It expands usable square footage, which is a key value driver.',
  },
];

export default function LouveredPergolaGuide() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Complete Guide to Louvered Pergolas' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                Pillar Guide
              </span>
              <h1 className="mb-4 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {guideData.title}
              </h1>
              <p className="text-edg-brand mb-6 text-xl font-medium md:text-2xl">
                {guideData.subtitle}
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                {guideData.intro}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-zinc-300">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" /> {guideData.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 12 min read
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" /> Updated{' '}
                  {guideData.publishedDate}
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== WHAT IS IT ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                What Exactly Is a Louvered Pergola?
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Unlike a traditional wooden pergola with fixed slats that only
                provide partial shade, a <strong>louvered pergola</strong>{' '}
                features a motorized roof made of aluminum blades. These blades
                rotate up to 135 degrees, giving you complete control over your
                outdoor environment.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                    <Sun className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Open Mode</h3>
                  <p className="text-muted-foreground text-sm">
                    Let in full winter sun or circulate air on mild days.
                  </p>
                </div>

                <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    <Info className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Angled Mode</h3>
                  <p className="text-muted-foreground text-sm">
                    Block direct sun while keeping ventilation flowing.
                  </p>
                </div>

                <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <CloudRain className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Closed Mode</h3>
                  <p className="text-muted-foreground text-sm">
                    100% waterproof roof for rain and snow protection.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== COMPARISON TABLE ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Louvered System vs. Traditional Wood
              </h2>
              <p className="text-muted-foreground mb-10 text-center text-lg">
                See why homeowners are choosing motorized aluminum over fixed
                wood structures.
              </p>

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <table className="w-full text-left">
                  <thead className="bg-edg-dark text-white">
                    <tr>
                      <th className="p-5 font-bold">Feature</th>
                      <th className="text-edg-brand p-5 font-bold">
                        Louvered (Aluminum)
                      </th>
                      <th className="p-5 font-bold text-zinc-300">
                        Traditional (Wood)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {comparisonData.map((row, i) => (
                      <tr
                        key={i}
                        className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                      >
                        <td className="p-5 font-medium">{row.feature}</td>
                        <td className="text-edg-brand-text dark:text-edg-brand p-5 font-medium">
                          {row.louvered}
                        </td>
                        <td className="text-muted-foreground p-5">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== PRICING SECTION ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <span className="text-edg-brand mb-2 block text-sm font-bold tracking-wider uppercase">
                  Transparent Pricing
                </span>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Real World Pricing for Chicago
                </h2>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                <p className="mb-8 text-center text-gray-300">
                  We believe in transparency, but premium motorized louvered
                  roofs are best discussed in planning bands until the site is
                  reviewed. Size, attachment, electrical, drainage, screens,
                  heaters, finish, and permit path can all move the final
                  scope.
                </p>

                <div className="mb-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <p className="mb-2 text-sm text-zinc-300">
                      Compact patio
                    </p>
                    <p className="text-3xl font-bold">$25k+</p>
                  </div>
                  <div className="bg-edg-brand/10 border-edg-brand/20 rounded-2xl border p-6 text-center">
                    <p className="text-edg-brand mb-2 text-sm">
                      Common residential
                    </p>
                    <p className="text-3xl font-bold">$45k+</p>
                    <span className="text-edg-brand mt-1 block text-xs">
                      Often includes more coordination
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <p className="mb-2 text-sm text-zinc-300">
                      Outdoor room / multi-zone
                    </p>
                    <p className="text-3xl font-bold">$75k+</p>
                  </div>
                </div>

                <p className="mb-6 text-center text-sm text-gray-500">
                  *Planning bands are not quotes. EDG reviews photos,
                  dimensions, structure, access, and desired features before
                  recommending a system direction.
                </p>

                <div className="text-center">
                  <Link href="/guides/pergola-system-fit-review">
                    <Button size="lg" className="rounded-full">
                      Get a System Fit Review{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-12 text-center text-lg">
                Get answers to the most common questions about louvered
                pergolas.
              </p>

              <div className="space-y-6">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <h3 className="mb-3 flex items-start gap-3 text-lg font-bold">
                      <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground pl-8">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Design Yours?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Stop guessing and start with the site details that determine
                which system actually fits the job.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/guides/pergola-system-fit-review">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                  >
                    Request System Fit Review{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-edg-dark hover:bg-edg-dark/10 border-edg-dark/20 rounded-full border px-8 text-lg"
                  >
                    Design in 3D <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-edg-dark hover:bg-edg-dark/10 rounded-full px-8 text-lg"
                  >
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </article>
  );
}
