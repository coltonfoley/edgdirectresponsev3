import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudSun,
  FileText,
  Home,
  MapPin,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Deerfield, IL | Screens & Pergolas | EDG',
  description:
    'Motorized patio screens, pergolas, and glass enclosures for Deerfield, IL homes. Built for North Shore wind, shade, privacy, and HOA review.',
  alternates: {
    canonical: '/service-areas/deerfield-il',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Deerfield Outdoor Living Systems | EDG Patio & Shade',
    description:
      'Motorized patio screens, pergolas, and enclosure systems for Deerfield homes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'deerfield il motorized screens',
    'deerfield retractable patio screens',
    'deerfield pergolas',
    'deerfield outdoor living',
    'north shore patio screens',
  ],
};

const neighborhoods = [
  {
    title: 'Central Deerfield',
    description:
      'Homes near Deerfield Road, Waukegan Road, and the Metra corridor often need outdoor rooms that feel calm without blocking daylight into the kitchen or family room.',
  },
  {
    title: 'South Deerfield',
    description:
      'Properties closer to Lake Cook Road frequently have patios that face neighboring yards, making motorized screens useful for privacy, glare control, and evening bug protection.',
  },
  {
    title: 'Woodland Park and Briarwood Vista',
    description:
      'Backyards near Woodland Park and Briarwood Vista usually benefit from flexible shade and screen layouts that support family dinners, play areas, and weekend entertaining.',
  },
  {
    title: 'East Deerfield',
    description:
      'Lots east toward Highland Park can feel more exposed to North Shore weather, so we plan around wind, drainage, and seasonal comfort before choosing accessories.',
  },
];

const faqs = [
  {
    question:
      'Do Deerfield homeowners usually need permits for pergolas or enclosures?',
    answer:
      'Permanent outdoor structures often require review, and some projects also need HOA approval. We help assemble drawings, product information, and engineering details so the project can move through review with fewer surprises.',
  },
  {
    question: 'Are motorized screens useful in Deerfield?',
    answer:
      'Yes. Deerfield patios often need more than shade. Screens can reduce bugs, glare, wind, and neighbor sightlines while still letting the space feel open when conditions are good.',
  },
  {
    question: 'Can EDG work with an existing patio or pergola?',
    answer:
      'Often, yes. We review the structure, opening sizes, electrical needs, and exposure before recommending whether screens, a pergola, or a glass enclosure should be part of the plan.',
  },
  {
    question: 'How should I start a Deerfield project?',
    answer:
      'Send photos, rough dimensions, and the main issue you want solved first. If the problem is wind, privacy, bugs, or low sun, screens may be the best first step. If you need overhead control, a pergola may anchor the project.',
  },
];

const heroContactHref = buildContactHref({
  source: 'deerfield_hub',
});

const bottomContactHref = buildContactHref({
  source: 'deerfield_hub_bottom',
});

export default function DeerfieldServiceAreaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outdoor Living Design & Installation - Deerfield, IL',
    description:
      'Motorized patio screens, pergolas, and enclosure systems for Deerfield, IL homes.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Deerfield',
    },
    url: 'https://www.edgpatioshade.com/service-areas/deerfield-il',
    image: `https://www.edgpatioshade.com${images.brand.hero.screens}`,
  };

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.screens}
            alt="Motorized patio screens for Deerfield Illinois outdoor living"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Deerfield, IL' },
            ]}
            className="mb-6"
          />
          <div className="mx-auto max-w-4xl text-center">
            <span className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" /> Service Area: Deerfield, IL
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Outdoor Living Systems for Deerfield Homes
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-200">
              Motorized patio screens, pergolas, and glass enclosures planned
              for North Shore weather, close lot lines, and everyday family use.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/deerfield-il/retractable-screens">
                <Button size="lg">Explore Deerfield Screens</Button>
              </Link>
              <Link href={heroContactHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <div className="text-text-inverse-muted flex flex-wrap justify-center gap-6 text-sm">
            {[
              'Motorized patio screens',
              'Louvered pergolas',
              'Glass enclosure planning',
              'HOA and permit support',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Why Deerfield Is a Good Fit
              </div>
              <h2 className="section-title mb-6">
                Most Deerfield patios need comfort control, not just another
                structure.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Deerfield homes often have outdoor spaces that are already close
                to being useful. The patio exists, the grill is in place, and
                the family wants to be outside more often. The problem is
                usually comfort: low-angle sun, mosquitoes, wind moving through
                the yard, or the feeling that neighboring windows are too close.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                That is why our planning starts with how the space fails today.
                A motorized screen may solve the problem faster than a full
                rebuild. A pergola may be right when you need overhead shade and
                rain control. A glass enclosure makes sense when the goal is a
                more protected outdoor room. The best answer depends on the
                site, not a one-size product.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.deployed}
                alt="Deployed motorized patio screen creating shade and privacy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Neighborhood Fit</div>
            <h2 className="section-title mb-4">
              Planned around Deerfield lot conditions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.title} variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{neighborhood.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {neighborhood.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">
              Common Project Paths
            </div>
            <h2 className="section-title mb-4">
              Start with the issue you want fixed
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Wind,
                title: 'Wind and Bugs',
                text: 'Start with retractable screens when the patio already has cover but needs better comfort and insect control.',
                href: '/service-areas/deerfield-il/retractable-screens',
              },
              {
                icon: CloudSun,
                title: 'Sun and Rain',
                text: 'Start with a motorized pergola when overhead shade, rain management, and lighting need to be built into one structure.',
                href: '/systems/pergolas',
              },
              {
                icon: ShieldCheck,
                title: 'More Season',
                text: 'Consider glass enclosures when the goal is a calmer outdoor room that still keeps daylight and views.',
                href: '/systems/enclosures',
              },
            ].map((item) => (
              <Card key={item.title} variant="default" padding="lg">
                <item.icon className="text-edg-brand-text mb-4 h-6 w-6" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Deerfield outdoor living questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to improve a Deerfield patio?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                Send a few photos and tell us whether the main problem is wind,
                bugs, sun, privacy, or rain. We will help you choose the
                cleanest first step.
              </p>
              <Link href={bottomContactHref}>
                <Button size="lg">Request a Quote</Button>
              </Link>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="text-text-inverse-muted space-y-4">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Popular next steps
                </h4>
                <Link
                  href="/service-areas/deerfield-il/retractable-screens"
                  className="flex items-center gap-3"
                >
                  <Home className="text-edg-brand h-4 w-4" />
                  Deerfield retractable screens
                </Link>
                <Link
                  href="/guides/magnatrack-screens-cost"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  MagnaTrack screens cost guide
                </Link>
                <Link
                  href="/service-areas/north-shore-chicago"
                  className="flex items-center gap-3"
                >
                  <FileText className="text-edg-brand h-4 w-4" />
                  North Shore service area
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
