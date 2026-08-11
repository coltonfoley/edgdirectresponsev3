import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileText,
  MapPin,
  ShieldCheck,
  Sun,
  Wind,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motorized Screens & Pergolas Southwest Florida | EDG',
  description:
    'Motorized lanai screens, patio screens, louvered pergolas, and coastal outdoor living planning for Southwest Florida homes in Sanibel, Captiva, Naples, Marco Island, and Fort Myers.',
  alternates: {
    canonical: '/service-areas/southwest-florida',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Screens & Pergolas Southwest Florida | EDG',
    description:
      'Motorized screens, coastal-grade louvered roof systems, and covered-lanai comfort planning for Southwest Florida homes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'hurricane rated pergola south florida',
    'southwest florida pergolas',
    'motorized screens southwest florida',
    'motorized lanai screens florida',
    'motorized patio screens fort myers',
    'motorized screens cape coral',
    'sanibel pergolas',
    'naples louvered pergola',
    'marco island pergola',
    'fort myers motorized screens',
    'modern lanai florida',
  ],
};

const naplesMarcoContactHref = buildContactHref({
  type: 'fit-review',
  product: 'multiple',
  area: 'southwest-florida',
  location: 'Naples and Marco Island',
  source: 'swfl-hub',
});

const inputContactHref = buildContactHref({
  type: 'fit-review',
  product: 'multiple',
  area: 'southwest-florida',
  source: 'swfl-inputs',
});

const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  area: 'southwest-florida',
  source: 'swfl-bottom',
});

const markets = [
  {
    name: 'Sanibel & Captiva',
    description:
      'The primary Florida focus for EDG: motorized screens, louvered roofs, salt-air materials, and planning around Sanibel permit constraints.',
    href: '/service-areas/sanibel-outdoor-living',
  },
  {
    name: 'Naples & Marco Island',
    description:
      'Gulf Coast homes often need shade, rain control, and wind-rated outdoor rooms that preserve views instead of closing the patio off.',
    href: naplesMarcoContactHref,
    action: 'Request a Quote',
  },
  {
    name: 'Fort Myers & Cape Coral',
    description:
      'Canal homes, pool patios, and outdoor kitchens benefit from motorized screens, louvered roof systems, and weather protection that still feels open.',
    href: '/service-areas/southwest-florida/motorized-screens',
  },
  {
    name: 'South Florida Design Support',
    description:
      'For builders and owners outside the immediate Sanibel/Captiva path, EDG can help evaluate system fit, specifications, and project feasibility before a full quote.',
    href: '/trade-partners',
  },
];

const buyingSignals = [
  {
    title: 'Coastal Wind Documentation',
    description:
      'Gulf Coast projects need systems selected around real wind exposure, product documentation, anchoring details, and permit-ready engineering.',
    icon: ShieldCheck,
  },
  {
    title: 'Motorized Lanai Screens',
    description:
      'Many Florida homeowners are not just buying shade. They want a covered lanai, patio, or outdoor kitchen to feel cooler, calmer, and more usable without losing the open-air feel.',
    icon: Sun,
  },
  {
    title: 'Salt-Air Materials',
    description:
      'Coastal aluminum, marine-grade finishes, stainless fasteners, and proper drainage matter more on the Gulf Coast than they do on a typical inland patio.',
    icon: Droplets,
  },
  {
    title: 'Permit and Code Pressure',
    description:
      'Wind ratings, setbacks, flood elevation, impermeable coverage, and local review can shape the project before the first product decision is made.',
    icon: FileText,
  },
];

const floridaPages = [
  {
    title: 'Sanibel Outdoor Living',
    description:
      'Start here for Sanibel and Captiva motorized screens, pergolas, and coastal outdoor living planning.',
    href: '/service-areas/sanibel-outdoor-living',
  },
  {
    title: 'Southwest Florida Motorized Screens',
    description:
      'Motorized screen layouts for covered lanais, pool patios, outdoor kitchens, and pergola openings.',
    href: '/service-areas/southwest-florida/motorized-screens',
  },
  {
    title: 'Sanibel Louvered Pergolas',
    description:
      'Louvered roof systems built around Sanibel wind, salt air, and code requirements.',
    href: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  },
  {
    title: 'Lanai Replacement Sanibel',
    description:
      'Evaluate a damaged lanai or pool cage before choosing like-for-like replacement or a different outdoor living system.',
    href: '/service-areas/sanibel-outdoor-living/lanai-replacement',
  },
  {
    title: 'Sanibel Permit Guide',
    description:
      'A cautious permit, floodplain, 50% rule, and product approval guide for Sanibel outdoor living projects.',
    href: '/service-areas/sanibel-outdoor-living/zoning-guide',
  },
];

const faqs = [
  {
    question: 'Does EDG serve all of Southwest Florida?',
    answer:
      'EDG has a focused Florida presence around Sanibel and Captiva, and can evaluate larger or specialty projects in nearby Southwest Florida markets. The best next step is to send the project location, photos, approximate dimensions, and whether you need a pergola, motorized screens, glass, or a modern lanai replacement.',
  },
  {
    question: 'What makes a pergola Florida-ready?',
    answer:
      'A Florida-ready pergola needs more than a standard aluminum frame. It should have wind-rated engineering, appropriate product approvals or documentation, coastal-grade finishes, integrated drainage, and a design that accounts for local permitting, setbacks, flood zones, and salt-air exposure.',
  },
  {
    question: 'Can a louvered pergola replace a lanai?',
    answer:
      'In some projects, yes. A motorized louvered roof can create shade, rain protection, airflow, and a cleaner open-air feel than a fixed screen enclosure. The right answer depends on the existing structure, local code, screen or glass needs, and whether the space must be bug-proof, storm-ready, or fully enclosed.',
  },
  {
    question: 'Should I start with a product or request a quote?',
    answer:
      'Start with a quote request. In Southwest Florida, wind exposure, flood elevation, attachment details, and local permitting can decide which system is viable before brand or color decisions matter.',
  },
];

export default function SouthwestFloridaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Modern Lanai and Outdoor Living Systems - Southwest Florida',
    description:
      'Motorized screens, coastal-grade louvered pergolas, and covered-lanai comfort planning for Southwest Florida homes.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: [
      { '@type': 'City', name: 'Sanibel' },
      { '@type': 'City', name: 'Captiva' },
      { '@type': 'City', name: 'Naples' },
      { '@type': 'City', name: 'Marco Island' },
      { '@type': 'City', name: 'Fort Myers' },
    ],
    url: 'https://www.edgpatioshade.com/service-areas/southwest-florida',
    image: `https://www.edgpatioshade.com${images.pages.serviceAreas.sanibelShopros02}`,
  };

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[70vh] items-center overflow-hidden pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.sanibelShopros02}
            alt="Louvered pergola for Southwest Florida coastal patio"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Southwest Florida' },
              ]}
            />
          </div>
          <div className="max-w-4xl">
            <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Sanibel, Captiva, Naples, Marco Island, Fort Myers
            </div>
            <h1 className="hero-title mb-6 text-white">
              Motorized Screens & Pergolas for Southwest Florida
            </h1>
            <p className="text-text-inverse-muted mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
              Coastal outdoor living is not a generic patio project. EDG helps
              Florida homeowners and project teams plan motorized screens,
              louvered roof systems, and covered-lanai comfort upgrades around
              wind, salt air, rain, code, and daily use.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/service-areas/southwest-florida/motorized-screens">
                <Button size="lg">
                  Plan Motorized Screens
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/service-areas/sanibel-outdoor-living/louvered-pergolas">
                <Button size="lg" variant="outline">
                  Sanibel Pergola Guide
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buyingSignals.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <IconWrapper
                  icon={item.icon}
                  variant="brand"
                  size="lg"
                  className="mb-4"
                />
                <h2 className="mb-3 text-xl font-bold">{item.title}</h2>
                <p className="text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Florida Project Fit
            </div>
            <h2 className="section-title mb-4">
              Choose the right starting point for your Gulf Coast home
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A Sanibel lanai, a Fort Myers pool patio, and a Naples outdoor
              kitchen can all need different answers. Some projects start with
              motorized screens for bugs, glare, privacy, and daily comfort.
              Others need a louvered roof first so shade, drainage, and future
              screen openings are planned together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {markets.map((market) => (
              <Link key={market.name} href={market.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="group-hover:text-edg-brand-text text-xl font-bold transition-colors">
                      {market.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-text-secondary">{market.description}</p>
                  {'action' in market && market.action && (
                    <span className="text-edg-brand-text mt-5 inline-flex items-center gap-2 font-bold">
                      {market.action}
                    </span>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Why Gulf Coast Planning Is Different
              </div>
              <h2 className="section-title mb-6">
                Salt air, wind, rain, and permitting shape the project early
              </h2>
              <div className="text-text-secondary space-y-4 text-lg leading-relaxed">
                <p>
                  Southwest Florida outdoor rooms have to work harder than a
                  typical inland patio. The system should be reviewed around
                  coastal wind exposure, salt-air finishes, drainage, attachment
                  surfaces, electrical paths, and the way the space is used day
                  to day.
                </p>
                <p>
                  The safest plan starts with the real site conditions. Send the
                  address, photos, rough dimensions, and the main comfort issue,
                  then EDG can help determine whether screens, a louvered roof,
                  or a combined pergola-and-screen layout should come first.
                </p>
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <h3 className="mb-5 text-xl font-bold">Best project inputs</h3>
              <ul className="space-y-4">
                {[
                  'Project address or closest city',
                  'Photos of the patio, lanai, pool deck, or outdoor kitchen',
                  'Approximate dimensions and desired covered area',
                  'Whether the priority is shade, rain protection, bugs, wind, or full enclosure',
                  'Any known HOA, flood-zone, or permit constraints',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={inputContactHref} className="mt-8 inline-flex">
                <Button>
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Florida Planning Guides
            </div>
            <h2 className="section-title mb-4">
              Compare the Sanibel paths before you choose a system
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Use these guides to compare louvered pergolas, motorized screens,
              lanai replacement options, storm-damage rebuild decisions, and the
              permit questions that can affect a Sanibel outdoor room. If an
              enclosure or pool cage is damaged, start with the{' '}
              <Link
                href="/service-areas/sanibel-outdoor-living/lanai-replacement"
                className="text-edg-brand-text font-semibold underline underline-offset-4"
              >
                Sanibel lanai replacement evaluation
              </Link>{' '}
              before choosing a system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {floridaPages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-lg font-bold transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                    Open guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Wind className="text-edg-brand mx-auto mb-5 h-10 w-10" />
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Planning a Gulf Coast outdoor living project?
            </h2>
            <p className="text-text-inverse-muted mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
              Send the address, photos, and the main problem you are trying to
              solve. EDG will help determine whether motorized screens, a
              louvered pergola, or both should be the right starting point.
            </p>
            <Link href={bottomContactHref}>
              <Button size="lg">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
