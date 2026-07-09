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
  CheckCircle2,
  CloudSun,
  Wind,
  ShieldCheck,
  Clock,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in North Shore Chicago | Pergolas | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and glass enclosures for North Shore Chicago homes. Expert design and installation in Winnetka, Wilmette, and Glencoe.',
  openGraph: {
    title: 'North Shore Chicago Outdoor Living | EDG Patio & Shade',
    description:
      'Outdoor living systems for the North Shore. Motorized pergolas and screens planned for lakefront weather and historic districts.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/north-shore-chicago',
  },
  keywords: ['north shore pergolas', 'north shore outdoor living', 'winnetka patio', 'pergola installation north shore', 'wilmette pergolas', 'glencoe outoor shading'],
};

const localBenefits = [
  'Planning support for village, HOA, and architectural review packages',
  'Design guidance for lakefront, ravine, historic, and tight-lot properties',
  'Pergola, screen, glass, heat, lighting, and controls coordinated together',
  'Powder-coated aluminum finishes to match any classic architecture',
];

const neighborhoods = [
  {
    name: 'Winnetka & Glencoe',
    description:
      'Historic districts and century-old homes need careful documentation and restrained detailing. We plan louvered pergolas so the structure feels intentional next to the home instead of added after the fact.',
  },
  {
    name: 'Wilmette & Kenilworth',
    description:
      "Brick patios and traditional homes need systems that respect the existing architecture. Motorized screens can soften lake-effect wind while keeping the outdoor room visually connected to the house.",
  },
  {
    name: 'Highland Park & Lake Forest',
    description:
      'Ravine and lakefront lots need careful shade, wind, and view planning. We review spans, sightlines, and side protection so the system supports the property instead of competing with it.',
  },
  {
    name: 'Evanston',
    description:
      'Urban lot sizes require precise engineering. We design compact, zoning-compliant systems that maximize every square foot of your available outdoor space.',
  },
];

const weatherConsiderations = [
  {
    title: 'Lake Michigan Winds',
    description:
      'North Shore properties can feel wind differently depending on distance from the lake, ravine exposure, and nearby structures. We review site exposure before recommending screen widths, louver orientation, and side protection.',
    icon: Wind,
  },
  {
    title: 'Heavy Winter Snow Loads',
    description:
      'Winter planning affects drainage, controls, mounting, and maintenance. A permanent louvered roof should be selected around the site rather than treated as a seasonal shade product.',
    icon: CloudSun,
  },
  {
    title: 'Summer Humidity & Bugs',
    description:
      'Retractable screens help reduce mosquitoes, glare, and privacy issues while keeping North Shore patios open to daylight and views.',
    icon: CloudSun,
  },
];

const planningNotes = [
  {
    title: 'Architecture before accessories',
    description:
      'A North Shore project can fail visually even when the shade works. We start with the home style, sightlines, masonry, trim, window rhythm, and where the structure will be visible from the street or neighboring properties.',
    icon: ShieldCheck,
  },
  {
    title: 'Review path by village and address',
    description:
      'Winnetka, Wilmette, Glencoe, Highland Park, Lake Forest, and Evanston do not all behave the same. Some projects are straightforward, while others need more drawings, survey detail, or architectural documentation before review.',
    icon: FileText,
  },
  {
    title: 'Lake comfort is often side protection',
    description:
      'North Shore homeowners often think overhead shade first, but wind, bugs, privacy, and low-angle lake glare can be the real issues. Screens, heaters, and glass should be considered alongside the pergola.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: 'How do you handle strict North Shore permeable surface limits?',
    answer:
      'Many North Shore villages care about lot coverage, drainage, setbacks, and how exterior improvements affect the property. A louvered system may be reviewed differently than a solid roof in some situations, but the correct answer depends on the address and project details. We help verify the path before design is finalized.',
  },
  {
    question: 'Can you work with historic districts?',
    answer:
      'Yes, when the project is planned carefully. Historic or architecturally sensitive homes usually need more than a product brochure. We help prepare renderings, finish information, structure placement, and product documentation so reviewers can see how the outdoor room fits the home.',
  },
  {
    question: 'Do I need a permit for an automated pergola?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the village, attachment method, structure size, setbacks, and whether the property has historic, HOA, or lake-adjacent considerations. We help assemble the right documentation for that review.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A custom North Shore project can take several weeks for design, review, fabrication, and installation. Village review, HOA review, architectural documentation, electrical planning, and weather can change the schedule, so we set expectations after the address and scope are known.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'North Shore Chicago',
  source: 'north_shore_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'North Shore Chicago',
  source: 'north_shore_hub_bottom',
});

export default function NorthShoreHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - North Shore Chicago',
            description:
              'Custom motorized pergolas, shades, and enclosures for North Shore Chicago homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'North Shore',
            },
            url: 'https://www.edgpatioshade.com/service-areas/north-shore-chicago',
            image: `https://www.edgpatioshade.com${images.brand.hero.lifestyle}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.lifestyle}
            alt="Motorized Louvered Pergola in North Shore Chicago"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'North Shore Chicago' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: North Shore Chicago
              </span>
              <h1 className="hero-title mb-6 text-white">
                Motorized Outdoor Living Systems on the
                {' '}
                <span className="text-edg-brand block">
                  North Shore
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We design engineered shade systems that respect your home&apos;s architectural heritage while handling heavy lakefront weather. From Winnetka to Lake Forest.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request a Site Review{' '}
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

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving the Entire North Shore Strip
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                North Shore outdoor rooms need to respect architecture first:
                lake exposure, mature neighborhoods, historic homes, ravine lots,
                and village review all shape the right system.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-text-secondary">{neighborhood.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/service-areas/deerfield-il/retractable-screens"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text transition-colors hover:text-edg-brand"
              >
                Deerfield homeowners: see motorized retractable patio screens
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NORTH SHORE PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                North Shore planning notes
              </div>
              <h2 className="section-title mb-4">
                A North Shore outdoor room has to pass the eye test.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                These homes do not need a generic patio cover. They need systems
                that make sense next to brick, stone, slate, stucco, mature
                landscaping, lake views, ravines, and the review expectations
                that come with high-value neighborhoods.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningNotes.map((note) => (
                <Card key={note.title} variant="muted" padding="lg">
                  <IconWrapper icon={note.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{note.title}</h3>
                  <p className="text-text-secondary">{note.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WEATHER CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Planned for Lake-Effect Climate
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weatherConsiderations.map((item, i) => (
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
                Historic Commissions & Zoning Approvals
              </h2>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Timeline */}
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  Approval Documentation Matters
                </h3>
                <div className="mb-6 flex items-center gap-3 border border-border bg-surface p-4">
                  <Clock className="text-edg-brand-text h-5 w-5 shrink-0" />
                  <p className="font-medium text-text-primary">
                    We help prepare the documentation North Shore reviewers
                    need to understand the project.
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Impervious surface calculations',
                    'Snow/Wind structural engineering stamps',
                    'Historic Preservation packets',
                    'Village meeting attendance (if needed)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <FileText className="h-4 w-4 text-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
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
                Common Questions in North Shore
              </h2>
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

      {/* ========== CTA ========== */}
      <section className="section-md bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to plan your North Shore project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Send the address, a few photos, and any village or HOA context.
                We will help you decide what the review package needs before
                the system is specified.
              </p>
              <Link href={bottomContactHref}>
                <Button
                  size="lg"
                  className="px-8 text-lg"
                >
                  Start North Shore Review{' '}
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
