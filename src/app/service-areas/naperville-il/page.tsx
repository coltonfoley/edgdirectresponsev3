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
  CloudSun,
  Building,
  Wind,
  FileText,
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Naperville, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Naperville homes. Serving Downtown, South Naperville, East Ogden corridor, and Ranchlands. Zoning-compliant designs for DuPage County.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Naperville Outdoor Living | Pergolas & Shades | EDG',
    description: 'Motorized pergolas and retractable screens for Naperville homes. Professional design and installation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/naperville-il',
  },
  keywords: ['naperville pergolas', 'naperville outdoor living', 'naperville il patio', 'pergola installation naperville', 'naperville backyard'],
};

const localBenefits = [
  'Planning support for city, HOA, and subdivision review packages',
  'Outdoor room design for patios, pools, decks, and newer subdivisions',
  'Pergola, screen, glass, heat, lighting, and control systems under one plan',
  'Site-specific planning for DuPage and Will County Naperville addresses',
];

const neighborhoods = [
  {
    name: 'Downtown Naperville',
    description:
      'Downtown Naperville features a mix of historic homes and modern renovations. We design outdoor living systems that complement the area\'s architectural diversity while maximizing limited backyard space common in the historic district. Our compact footprint designs work well with smaller lots.',
  },
  {
    name: 'South Naperville',
    description:
      'South Naperville\'s newer developments often include expansive homes with large outdoor spaces. We plan multi-zone outdoor rooms that can support quiet family use, larger gatherings, and future screens, heat, lighting, or controls.',
  },
  {
    name: 'East Ogden Corridor',
    description:
      'Properties along the East Ogden corridor benefit from easy access while maintaining suburban privacy. Our motorized shade systems help create secluded backyard retreats that block views from the busy corridor while maintaining airflow and natural light.',
  },
  {
    name: 'Ranchlands',
    description:
      'The Ranchlands area features spacious single-story homes with generous lots ideal for outdoor living expansions. We design low-profile systems that complement ranch architecture while creating defined outdoor rooms for dining, lounging, and entertaining.',
  },
];

const localConsiderations = [
  {
    title: 'DuPage County Snow Loads',
    description:
      'Naperville winters make drainage, louver operation, electrical routing, and seasonal maintenance part of the design conversation. We review the site before recommending a permanent structure.',
    icon: CloudSun,
  },
  {
    title: 'HOA Design Standards',
    description:
      'Naperville\'s many HOA communities have strict architectural guidelines. We provide detailed renderings, material samples, and spec sheets to streamline your approval process with neighborhood associations.',
    icon: Building,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'Naperville summers can bring direct sun and afternoon glare. Exterior shades can cut heat and glare while preserving airflow when the fabric, track path, and controls are planned around the opening.',
    icon: Wind,
  },
  {
    title: 'Suburban Privacy',
    description:
      'Many Naperville neighborhoods feature homes with close setbacks. Our motorized screens and louvered walls create instant privacy from neighbors while maintaining the open feel of your outdoor space.',
    icon: ShieldCheck,
  },
];

const planningNotes = [
  {
    title: 'HOA expectations are often the first gate',
    description:
      'Many Naperville neighborhoods care about color, height, visibility, attachments, and architectural consistency. Renderings, finish notes, and a clear site plan can make review much smoother.',
    icon: Building,
  },
  {
    title: 'The problem may be privacy, not shade',
    description:
      'Naperville patios often sit close to neighboring yards. Screens, side panels, planting coordination, and louver direction can matter more than simply making the roof larger.',
    icon: ShieldCheck,
  },
  {
    title: 'Permitting depends on address and scope',
    description:
      'A downtown patio, a newer subdivision, and a South Naperville estate can involve different review details. We verify the municipality, county, survey, easements, and project type before finalizing the plan.',
    icon: FileText,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Naperville?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the address, county, attachment method, structure size, easements, and whether the property has HOA or subdivision requirements. We help verify the correct path before design is finalized.',
  },
  {
    question: 'How do HOA restrictions affect outdoor living projects in Naperville?',
    answer:
      'Many Naperville neighborhoods are governed by HOAs with architectural guidelines. Color, placement, roofline visibility, lighting, and structure size can all matter. We help assemble documentation so the HOA can review the actual design instead of guessing from a product brochure.',
  },
  {
    question: 'Are there historic district considerations in Naperville?',
    answer:
      'While Naperville\'s historic district requirements are less stringent than some North Shore communities, downtown historic properties may have additional review requirements. We design systems that respect historic architectural character while providing modern outdoor living functionality. Our powder-coated finishes can match existing trim and color schemes.',
  },
  {
    question: 'What\'s the typical timeline for a Naperville project?',
    answer:
      'A custom Naperville project can take several weeks for design, review, fabrication, and installation. HOA review, municipal review, electrical coordination, custom finishes, and weather can change the schedule, so we set expectations after the site and scope are clear.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Naperville, IL',
  source: 'naperville_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Naperville, IL',
  source: 'naperville_hub_bottom',
});

export default function NapervilleHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Naperville',
            description:
              'Custom motorized pergolas and exterior shades for Naperville homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Naperville',
            },
            url: 'https://www.edgpatioshade.com/service-areas/naperville-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="White louvered pergola with LED lighting"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Naperville, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Naperville, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Plan Your Naperville Backyard With
                <span className="text-edg-brand block">
                  Motorized Outdoor Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From Downtown Naperville to South Naperville and the East Ogden
                corridor, we design engineered shade systems that enhance your
                suburban lifestyle and handle DuPage County weather.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request Naperville Site Visit{' '}
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
                Serving Every Naperville Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Naperville projects range from compact historic-district patios
                to newer subdivision outdoor rooms. HOA review, privacy, sun,
                and how the family uses the backyard all shape the answer.
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
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NAPERVILLE PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Naperville planning notes
              </div>
              <h2 className="section-title mb-4">
                Most Naperville patios need comfort, privacy, and approval planning together.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A useful Naperville outdoor-room plan starts with how the patio
                fails today: afternoon sun, bugs, neighbor views, rain, or a
                subdivision review process that needs clear documentation.
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

      {/* ========== ZONING & PERMITS ========== */}
      <Section id="zoning" className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <h2 className="section-title mb-4">Zoning & Permits in Naperville</h2>
            <p className="text-text-secondary max-w-3xl">
              Naperville&apos;s city, county, subdivision, and HOA requirements
              can vary by address. Treat this as planning context, not a final
              permit determination.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-edg-brand-dark h-4 w-4" />
                  Subdivision/PUD Factor
                </h3>
                <p className="text-sm text-text-secondary">
                  Many Naperville homes are part of Planned Unit Developments (PUDs) or have strict HOA covenants that may impose additional restrictions beyond city codes.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Standard Setbacks</h3>
                <p className="text-sm text-text-secondary">
                  Setbacks depend on the property, zoning district, structure
                  type, easements, and whether the pergola is attached or
                  freestanding.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Impervious Surface Limits</h3>
                <p className="text-sm text-text-secondary">
                  New hardscape, drainage, and coverage questions should be
                  reviewed before a pergola, screen, or enclosure layout is
                  treated as final.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-edg-brand-dark" />
                  TED Permitting
                </h3>
                <p className="text-sm text-text-secondary">
                  We help prepare the drawings, product information, survey
                  notes, and support documents needed for the correct local
                  review path.
                </p>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Naperville&apos;s Suburban Climate
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are selected around suburban privacy, late-day sun,
                winter exposure, and how the patio should function day to day.
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

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Naperville Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Naperville.
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
                Local Resources for Naperville Homeowners
              </h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <Link
                href="/service-areas/naperville-il/motorized-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Motorized Pergolas in Naperville
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore louvered roof systems engineered for Naperville&apos;s
                    specific suburban climate and HOA requirements.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-text-inverse mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to plan your Naperville project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Review the address, HOA path, privacy needs, and right system direction with our local design team.
              </p>
              <Link href={bottomContactHref}>
                <Button
                  size="lg"
                  className="px-8 text-lg"
                >
                  Start Naperville Review{' '}
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
