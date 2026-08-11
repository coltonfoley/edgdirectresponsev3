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
  CheckCircle2,
  CloudSun,
  Wind,
  ShieldCheck,
  AlertTriangle,
  Clock,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Wilmette, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Wilmette homes. Serving the Cage neighborhood to Lake Michigan. Zoning-compliant designs for historic districts.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Wilmette Outdoor Living | North Shore Pergolas | EDG',
    description:
      'Outdoor living systems for Wilmette homes. Motorized pergolas and screens planned for North Shore architecture.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/wilmette-il',
  },
  keywords: [
    'wilmette pergolas',
    'wilmette outdoor living',
    'wilmette il patio',
    'pergola installation wilmette',
    'north shore pergolas',
  ],
};

const localBenefits = [
  'Planning support for village, HOA, and historic-area review packages',
  'Historic and lake-adjacent outdoor room planning',
  'North Shore-appropriate pergola, screen, glass, heat, and lighting designs',
  'Licensed & insured for Cook County',
];

const neighborhoods = [
  {
    name: 'The Cage (Historic District)',
    description:
      'Wilmette\'s historic "Cage" district features beautiful brick homes from the early 1900s. We specialize in designing outdoor living systems that complement these historic properties while meeting strict preservation guidelines. Our powder-coated aluminum systems can match existing trim and architectural details.',
  },
  {
    name: 'East Wilmette (Lakefront)',
    description:
      'Properties near Lake Michigan can experience quick weather shifts, wind, glare, and privacy needs. We plan louvered pergolas, screens, and glass so the outdoor room protects comfort without feeling closed off from the lakefront setting.',
  },
  {
    name: 'Indian Hill Estates',
    description:
      'Indian Hill Estates includes larger lots where span, column placement, and sightlines matter. We plan the structure around how the patio, landscape, and home work together.',
  },
  {
    name: 'McKenzie Neighborhood',
    description:
      "The McKenzie area's mix of traditional and contemporary homes benefits from our custom design approach. Whether you have a classic colonial or modern architecture, we create systems that feel like they were built with your home.",
  },
];

const weatherConsiderations = [
  {
    title: 'Lake Effect Weather',
    description:
      "Wilmette's proximity to Lake Michigan creates quick changes in wind, temperature, and glare. We plan louver direction, side protection, and controls around the way the patio actually feels.",
    icon: Wind,
  },
  {
    title: 'Winter Snow Loads',
    description:
      'North Shore winters make drainage, louver operation, mounting, electrical routing, and seasonal maintenance part of the design conversation before a permanent structure is selected.',
    icon: CloudSun,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'Wilmette summers can bring direct sun, glare, and afternoon heat. Exterior shades can cut glare and heat while preserving airflow when fabric, track path, and controls are planned around the opening.',
    icon: CloudSun,
  },
];

const planningNotes = [
  {
    title: 'Historic context changes the submission',
    description:
      'A Wilmette project may need more than a catalog page. Renderings, finish samples, structure placement, and sightline notes help show how the outdoor room relates to the home and neighborhood.',
    icon: FileText,
  },
  {
    title: 'Impervious surface questions are address-specific',
    description:
      'Lot coverage, drainage, and whether a louvered roof is evaluated differently from a solid roof should be confirmed for the actual property. We treat those as review questions, not generic promises.',
    icon: AlertTriangle,
  },
  {
    title: 'Screens can matter as much as the roof',
    description:
      'Near the lake, side protection can solve wind, bugs, glare, and privacy. The strongest Wilmette outdoor rooms plan screens, heat, lighting, and controls with the pergola from the beginning.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Wilmette?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the address, structure size, attachment method, lot coverage, setbacks, and whether the property has historic, HOA, or lake-adjacent considerations. We help verify the correct path before design is finalized.',
  },
  {
    question:
      "How do louvered pergolas help with Wilmette's impermeable surface limits?",
    answer:
      'Coverage and drainage questions should be reviewed for the specific address. A louvered pergola may be evaluated differently than a solid roof in some situations, but that is a local review question, not something to assume before the site and design are known.',
  },
  {
    question: 'Can you work with historic district requirements?',
    answer:
      'Yes, when the project is planned carefully. Historic or architecturally sensitive homes usually need better documentation: renderings, finish samples, placement notes, and product information that show how the outdoor room relates to the existing structure.',
  },
  {
    question: "What's the typical timeline for a Wilmette project?",
    answer:
      'A custom Wilmette project can take several weeks for design, review, fabrication, and installation. Historic-area review, HOA input, electrical coordination, custom finishes, and weather can change the schedule, so we set expectations after the site and approval path are clear.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Wilmette, IL',
  source: 'wilmette_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Wilmette, IL',
  source: 'wilmette_hub_bottom',
});
const resourceContactHref = buildContactHref({
  type: 'consultation',
  product: 'permitting',
  location: 'Wilmette, IL',
  source: 'wilmette_hub_resources',
});

export default function WilmetteHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Wilmette',
            description:
              'Custom motorized pergolas and exterior shades for Wilmette homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Wilmette',
            },
            url: 'https://www.edgpatioshade.com/service-areas/wilmette-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
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
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Wilmette, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Wilmette, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Plan Your Wilmette Home With
                <span className="text-edg-brand block">
                  Motorized Outdoor Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the brick streets of the Cage to the shores of Lake
                Michigan, we design engineered shade systems that respect
                Wilmette&apos;s architectural heritage and handle its unique
                weather.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                <span
                  key={i}
                  className="text-text-inverse-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />{' '}
                  {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section id="zoning" className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Every Wilmette Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Wilmette outdoor rooms need more than shade. Historic homes,
                lake-adjacent lots, larger properties, and close neighborhood
                sightlines each create different planning decisions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">
                    {neighborhood.name}
                  </h3>
                  <p className="text-text-secondary">
                    {neighborhood.description}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WILMETTE PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Wilmette planning notes
              </div>
              <h2 className="section-title mb-4">
                The design needs to satisfy the home, the weather, and the
                review path.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A Wilmette pergola or screen project can involve architecture,
                lake comfort, drainage, lot coverage, and neighborhood
                visibility at the same time. We sort those constraints before
                recommending a system.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningNotes.map((note) => (
                <Card key={note.title} variant="muted" padding="lg">
                  <IconWrapper
                    icon={note.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
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
                Built for Wilmette&apos;s Lakefront Weather
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are planned around North Shore wind, snow, lake
                exposure, sun, and review expectations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weatherConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper
                    icon={item.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
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
                Wilmette Zoning & Building Guide
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Wilmette review questions can be address-specific. Use this as
                planning context before requesting a quote, not as a final
                permit determination.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Impermeable Surface Challenge */}
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  The &quot;Impermeable Surface&quot; Challenge
                </h3>
                <p className="text-text-secondary mb-6">
                  Many North Shore properties need careful review of lot
                  coverage, drainage, hardscape, and whether an outdoor
                  structure changes stormwater assumptions. A driveway, patio,
                  garage, and new roof structure should be reviewed together
                  instead of guessed from a generic rule.
                </p>
                <div className="bg-edg-brand/5 border-edg-brand/20 border p-6">
                  <div className="flex items-start gap-4">
                    <IconWrapper
                      icon={CheckCircle2}
                      variant="brand"
                      size="md"
                    />
                    <div>
                      <h4 className="mb-2 text-lg font-bold">
                        The Louvered Advantage
                      </h4>
                      <p className="text-text-secondary">
                        A <strong>louvered pergola</strong> may be reviewed
                        differently than a solid roof in some situations, but
                        the correct answer depends on the address, design,
                        drainage, and reviewer. We help homeowners prepare the
                        right documentation before assuming the outcome.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Setbacks */}
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <AlertTriangle className="text-edg-brand-dark h-6 w-6" />
                  Setback Requirements
                </h3>
                <p className="text-text-secondary mb-4">
                  Detached accessory structures typically must be:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 border border-zinc-200 bg-white p-4">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>
                      Reviewed against the property survey, zoning district, and
                      whether the structure is attached or freestanding.
                    </span>
                  </li>
                  <li className="flex items-center gap-3 border border-zinc-200 bg-white p-4">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>
                      Checked for easements, drainage paths, utilities, and any
                      HOA or historic-area requirements.
                    </span>
                  </li>
                  <li className="flex items-center gap-3 border border-zinc-200 bg-white p-4">
                    <AlertTriangle className="text-edg-brand-dark h-5 w-5 shrink-0" />
                    <span>Often cannot be in the required front yard.</span>
                  </li>
                </ul>
              </Card>

              {/* Timeline */}
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <Clock className="text-edg-brand-dark h-6 w-6" />
                  Review Package
                </h3>
                <div className="border-border mb-6 flex items-center gap-3 border bg-white p-4">
                  <Clock className="text-edg-brand-dark h-5 w-5 shrink-0" />
                  <p className="text-text-primary font-medium">
                    The cleaner the submission, the easier it is for everyone to
                    understand the proposed outdoor room.
                  </p>
                </div>
                <p className="text-text-secondary mb-4">We handle:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Plat of survey markup',
                    'Structural engineering stamps',
                    'HOA approval packets (if applicable)',
                    'Village or HOA review support documents',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <FileText className="h-4 w-4 text-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <p className="text-center text-sm text-zinc-400 italic">
                Disclaimer: Zoning codes change. This guide is for informational
                purposes. EDG verifies the current review path during site
                assessment and design.
              </p>
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
                Common Questions About Wilmette Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Wilmette.
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
                From Wilmette Planning to a Louvered Pergola Specification
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Use this hub for the overall property, weather, and review
                context. The louvered pergola page owns the product-specific
                questions about roof control, structure, drainage, finishes,
                and side protection.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/wilmette-il/louvered-pergolas"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-all duration-200"
                >
                  <IconWrapper
                    icon={Home}
                    variant="default"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Louvered Pergolas in Wilmette
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Why aluminum louvered roofs are the preferred choice for
                    North Shore winters over traditional wood structures.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link href={resourceContactHref} className="group block">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-all duration-200"
                >
                  <IconWrapper
                    icon={ShieldCheck}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Get Permit Assistance
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Get help preparing drawings, product information, finish
                    notes, and site context for the correct review path.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Request a Quote <ArrowRight className="h-4 w-4" />
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
                Ready to plan your Wilmette project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Review the address, constraints, and right system path with our
                local design team.
              </p>
              <Link href={bottomContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
