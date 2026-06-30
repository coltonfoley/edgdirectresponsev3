import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as images from '@/lib/images';
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
      'Premium Gulf Coast homes often need shade, rain control, and wind-rated outdoor rooms that preserve views instead of closing the patio off.',
    href: '/contact?area=southwest-florida&market=naples-marco&source=swfl-hub',
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
      'Florida buyers search for systems that can handle real wind exposure. The strongest fit is a Miami-Dade rated louvered roof system with permit-ready engineering.',
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
      'The Florida hub page for Sanibel and Captiva motorized screens, pergolas, and outdoor living systems.',
    href: '/service-areas/sanibel-outdoor-living',
  },
  {
    title: 'Southwest Florida Motorized Screens',
    description:
      'Screen-first planning for covered lanais, pool patios, outdoor kitchens, and pergola openings.',
    href: '/service-areas/southwest-florida/motorized-screens',
  },
  {
    title: 'Sanibel Louvered Pergolas',
    description:
      'Louvered roof systems built around Sanibel wind, salt air, and code requirements.',
    href: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  },
  {
    title: 'Modern Lanai Sanibel',
    description:
      'A buyer-friendly explanation of motorized pergolas and screens for covered lanai-style outdoor rooms.',
    href: '/service-areas/sanibel-outdoor-living/modern-lanai',
  },
  {
    title: 'Lanai Replacement Sanibel',
    description:
      'Guidance for upgrading damaged or outdated outdoor rooms with motorized screens and pergola systems.',
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
    question: 'Should I start with a product or a site review?',
    answer:
      'Start with a site review. In Southwest Florida, wind exposure, flood elevation, attachment details, and local permitting can decide which system is viable before brand or color decisions matter.',
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
    <main className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
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
            <div className="mb-6 inline-flex items-center gap-2 border border-edg-brand/30 bg-edg-brand/10 px-4 py-2 text-xs font-bold tracking-widest text-edg-brand-dark uppercase">
              <MapPin className="h-4 w-4" />
              Sanibel, Captiva, Naples, Marco Island, Fort Myers
            </div>
            <h1 className="hero-title mb-6 text-white">
              Motorized Screens & Pergolas for Southwest Florida
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-text-inverse-muted md:text-xl">
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
                <Button size="lg" variant="secondary">
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
              Start with the market, then the system
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Southwest Florida has several different buyer intents hiding under
              the same words. Some people need a coastal pergola. Some
              need a motorized screen layout for a covered lanai. Some are
              trying to keep a pool patio usable through heat, rain, glare, and
              insects. This page routes those searches into the right EDG
              planning path.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {markets.map((market) => (
              <Link key={market.name} href={market.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold transition-colors group-hover:text-edg-brand-text">
                      {market.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-text-secondary">{market.description}</p>
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
                Why Florida Leads Need Different Pages
              </div>
              <h2 className="section-title mb-6">
                Search intent is coastal, not Midwest
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  A Chicago buyer may search for a pergola installer, roof deck
                  shade, or retractable screens. A Florida buyer is more likely
                  to think in terms of motorized lanai screens, salt air, storm
                  repairs, and whether a system has the right
                  documentation for coastal wind exposure.
                </p>
                <p>
                  That is why this page deliberately links the regional Florida
                  search terms to the Sanibel product pages below. The goal is
                  to help Google understand that EDG has a Florida cluster, not
                  just one isolated Sanibel page buried under the service-area
                  menu.
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
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand-text" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?area=southwest-florida&source=swfl-inputs"
                className="mt-8 inline-flex"
              >
                <Button>
                  Send Project Details
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
              Florida Planning Pages
            </div>
            <h2 className="section-title mb-4">
              Go deeper into the Sanibel cluster
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These pages answer the more specific searches that should turn
              into Florida leads: louvered pergolas, modern lanai
              alternatives, and rebuild decisions after storm damage.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {floridaPages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <h3 className="mb-3 text-lg font-bold transition-colors group-hover:text-edg-brand-text">
                    {page.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                    View page
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
            <Wind className="mx-auto mb-5 h-10 w-10 text-edg-brand" />
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Planning a Gulf Coast outdoor living project?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-inverse-muted">
              Send the address, photos, and the main problem you are trying to
                  solve. EDG will help determine whether motorized screens, a
              louvered pergola, or both should be the right starting point.
            </p>
            <Link href="/contact?area=southwest-florida&source=swfl-bottom">
              <Button size="lg">
                Request Florida Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
