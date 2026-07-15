import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Home,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Droplets,
  Sun,
  FileText,
  AlertTriangle,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sanibel Motorized Screens & Pergolas | EDG',
  description:
    'Motorized lanai screens, louvered pergolas, and coastal outdoor living planning for Sanibel homes, with careful permit and floodplain review.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Sanibel Motorized Screens & Pergolas | EDG',
    description:
      'Motorized screen, pergola, and covered outdoor living planning for Sanibel Island homes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living',
  },
  keywords: [
    'sanibel outdoor living',
    'sanibel pergolas',
    'motorized screens sanibel',
    'motorized lanai screens sanibel',
    'retractable screens sanibel',
    'florida outdoor living',
    'modern lanai sanibel',
    'lanai replacement sanibel',
  ],
};

const localBenefits = [
  'Motorized screen planning',
  'Coastal-rated pergola systems',
  'Sanibel permit review support',
  'Salt-air corrosion resistant materials',
];

const areas = [
  {
    name: 'Sanibel Island (Gulf Coast)',
    description:
      'From beachfront homes to canal properties, we plan outdoor living systems around Gulf views, salt air, Sanibel developed-area questions, vegetation review, and the comfort problems that show up on the actual patio.',
  },
  {
    name: 'Captiva Island',
    description:
      'Captiva\'s narrow geography creates unique microclimates and higher wind exposure. We plan louvered pergolas around coastal wind documentation, salt air, sun, and the way the outdoor room should feel day to day.',
  },
  {
    name: 'Wulfert & The Dunes',
    description:
      'Gulf-front and golf-course homes need outdoor rooms that respect architecture, sightlines, support-column placement, and the island\'s sensitive dune and habitat context.',
  },
  {
    name: 'Roosevelt Channel & Blind Pass',
    description:
      'Properties near these waterways face salt-air exposure, changing wind, and boat-dock lifestyle needs. Materials, finishes, anchoring, drainage, and service access should all be reviewed early.',
  },
];

const localConsiderations = [
  {
    title: 'Wind Documentation',
    description:
      'Sanibel projects need wind-load documentation, product approvals where applicable, and site-specific engineering review. EDG helps package those questions before a homeowner commits to a system.',
    icon: Wind,
  },
  {
    title: 'Salt-Air Corrosion Resistance',
    description:
      'Coastal projects require system-specific aluminum, coatings, hardware, maintenance, and product documentation. EDG verifies the selected finish package against the property\'s salt-air exposure.',
    icon: Droplets,
  },
  {
    title: 'Coastal Wind Engineering',
    description:
      'Wind performance depends on the selected system, engineering, anchoring, site exposure, and approved installation details. EDG confirms those requirements before recommending a system.',
    icon: Sun,
  },
  {
    title: 'Sanctuary Zoning Navigation',
    description:
      'Sanibel\'s developable-area, vegetation, wildlife, floodplain, and drainage reviews can affect outdoor structures. We design around the local review path instead of treating it as an afterthought.',
    icon: FileText,
  },
];

const zoningConsiderations = [
  {
    title: 'Impermeable Coverage Limits',
    description:
      'Sanibel limits developed area based on property conditions and ecological review. Existing house, pool, lanai, paving, and new outdoor structures should be evaluated together.',
    icon: ShieldCheck,
  },
  {
    title: 'Post-Ian Rebuild Review',
    description:
      'Repairs and improvements may be reviewed for substantial damage or substantial improvement. If the cost exceeds 50% of the market value of a noncompliant building, current floodplain standards may apply. The City of Sanibel makes the final determination.',
    icon: AlertTriangle,
  },
  {
    title: 'Product Approval Review',
    description:
      'Selected systems can be specified with Florida Product Approval or Miami-Dade NOA documentation where applicable, but Sanibel reviews the actual project and installation details.',
    icon: Wind,
  },
  {
    title: 'Ecological Considerations',
    description:
      'Sanibel\'s "Sanctuary" ethos means strict vegetation protection and habitat preservation. We design structures that work within these constraints while maximizing your outdoor living space.',
    icon: Info,
  },
];

const faqs = [
  {
    question: 'Do your pergolas meet Florida\'s hurricane building codes?',
    answer:
      'EDG can specify louvered roof systems with wind-load engineering, Florida Product Approval, or Miami-Dade NOA documentation where applicable. Final acceptance depends on the selected system, the property, the installation details, and Sanibel building review.',
  },
  {
    question: 'How do you handle Sanibel\'s impermeable surface limits?',
    answer:
      'We start by reviewing the survey, existing developed area, drainage, flood-zone context, and the exact system being considered. Louvered systems may be reviewed differently than solid roofs in some situations, but Sanibel is the final authority on how coverage is counted.',
  },
  {
    question: 'Will salt air damage the aluminum structure?',
    answer:
      'Coastal aluminum, protective finishes, stainless hardware, drainage, and routine cleaning all matter in Sanibel salt air. We help match the system and finish package to the exposure instead of treating island conditions like an inland patio.',
  },
  {
    question: 'What\'s the typical timeline for a Sanibel project?',
    answer:
      'Timelines depend on scope, engineering, product lead times, HOA review, Sanibel permit review, and whether floodplain, vegetation, wildlife, electrical, or screen-enclosure details are involved. A site review is the right first step.',
  },
];

const heroContactHref = buildContactHref({
  type: 'fit-review',
  product: 'shades',
  area: 'sanibel',
  source: 'sanibel_hub_hero',
});

const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'shades',
  area: 'sanibel',
  source: 'sanibel_hub_bottom',
});

export default function SanibelHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Sanibel',
            description:
              'Louvered roof systems and motorized screens planned around Sanibel Island\'s sanctuary codes and coastal climate.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Sanibel',
            },
            url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16 lg:min-h-[75vh]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.sanibelShopros02}
            alt="Gray and white louvered roof system for Sanibel Island outdoor living"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Sanibel Outdoor Living' },
              ]}
            />
          </div>
          
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Sanibel & Captiva
              </span>
              <h1 className="hero-title mb-6 text-white">
                Modern Outdoor Living{' '}
                <span className="text-edg-brand block">for Sanibel Island</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Motorized lanai screens, louvered pergolas, and coastal
                outdoor living plans for Sanibel homes. Built around salt air,
                floodplain review, product documentation, and local permit
                questions.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request Sanibel Screen Review{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== AREAS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving All Sanibel & Captiva Communities
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                From Gulf-front estates to canal homes, we understand the unique
                requirements of Southwest Florida&apos;s barrier islands.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {areas.map((area, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{area.name}</h3>
                  <p className="text-text-secondary">{area.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Gulf Coast Conditions
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                System choice, finish, anchoring, screens, and drainage should
                all be reviewed against Florida coastal conditions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== ZONING & CODES SECTION ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Navigating Sanibel&apos;s Zoning & Building Codes
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Post-Hurricane Ian regulations are complex. Here&apos;s what you need to know about Sanibel&apos;s strict sanctuary codes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {zoningConsiderations.map((item, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h4 className="mb-4 flex items-center gap-2 font-bold">
                <Info className="text-edg-brand-dark h-5 w-5" />
                What Counts as Impermeable?
              </h4>
              <ul className="grid gap-3 text-sm text-zinc-600 sm:grid-cols-2 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  Screen Enclosures & Lanais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  Concrete Pads & Decks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  Stairs & Walkways
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  Standard Non-Permeable Pavers
                </li>
              </ul>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Planning note:</strong> We compare the existing
                structure, survey, drainage, and product documentation before
                assuming a new system can fit within coverage limits.
              </p>
            </div>
            <div className="mt-6 border border-border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                <p className="text-text-secondary text-sm">
                  <strong>50% rule note:</strong> If repair or improvement
                  costs trigger substantial-improvement review, current
                  floodplain standards may apply. Use that review point to
                  compare the old outdoor room against a better-documented
                  modern plan.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Sanibel Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living on Sanibel Island.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CLUSTER LINKS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Local Resources for Sanibel Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    Louvered Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm">
                    Explore louvered roof systems for Sanibel homes, including
                    wind documentation, salt-air material planning, and
                    screen-ready outdoor room layouts.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/southwest-florida/motorized-screens"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper
                    icon={Wind}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    Motorized Screens
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm">
                    Plan motorized screens for covered lanais, pool patios,
                    outdoor kitchens, and pergola openings in Southwest Florida.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3">
                    Plan Screens <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/modern-lanai"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={Sun} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    The Modern Lanai
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm">
                    Discover the evolution of outdoor living: motorized
                    pergolas and screens for covered lanai-style spaces.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3">
                    Explore Modern Lanais <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/lanai-replacement"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={AlertTriangle} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    Lanai Replacement
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm">
                    Reviewing a damaged or outdated lanai? Compare a modern
                    screen and pergola plan before defaulting to the old layout.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3">
                    View Replacement Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/zoning-guide"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    Permit Guide
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm">
                    Review the permit, floodplain, 50% rule, and product
                    documentation questions before choosing a lanai replacement
                    or new covered outdoor living system.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3">
                    Read Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Start Your Sanibel Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Send the address, photos, and the outdoor comfort problem you
                want solved first.
              </p>
              <Link href={bottomContactHref}>
                <Button
                  size="lg"
                  variant="dark"
                  className="px-8 text-lg"
                >
                  Start Sanibel Screen Planning{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
