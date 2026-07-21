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
  Wind,
  Snowflake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Barrington Outdoor Living | Estate Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Barrington area estates. Serving Barrington Hills, South Barrington, Lake Barrington. Zoning-compliant designs for estate properties.',
  alternates: {
    canonical: '/service-areas/barrington-il',
  },
  keywords: [
    'barrington pergolas',
    'barrington outdoor living',
    'barrington il patio',
    'pergola installation barrington',
    'barrington estate outdoor',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Barrington Outdoor Living | Estate Planning | EDG',
    description:
      'Plan a Barrington estate outdoor room with motorized pergolas, screens, glass, and support for Village and Hills review paths.',
  },
};

const localBenefits = [
  'Familiar with Village of Barrington & Barrington Hills zoning',
  'Estate property experience (5+ acre lots)',
  'Address-specific lot-coverage, setback, drainage, and review planning',
  'Licensed & insured for Cook, Lake & McHenry Counties',
];

const neighborhoods = [
  {
    name: 'Barrington Hills',
    description:
      "The heart of Barrington's equestrian country, featuring expansive 5+ acre estates with traditional architecture and mature landscapes. Our large-span pergola engineering minimizes support columns, preserving the sweeping views and open character that make Barrington Hills properties distinctive.",
  },
  {
    name: 'South Barrington',
    description:
      'Home to gated communities like The Woods of South Barrington and Wynstone Golf Club. We design outdoor living systems that complement larger estate homes while navigating HOA guidelines and architectural review requirements.',
  },
  {
    name: 'Lake Barrington & North Barrington',
    description:
      'Properties around Lake Barrington and in North Barrington blend lakefront living with estate privacy. Our weather-resistant systems handle lakeside winds while providing shelter for enjoying sunsets over the water. We understand the unique drainage and setback requirements of lake-adjacent properties.',
  },
  {
    name: 'Inverness & Deer Park',
    description:
      "These neighboring communities share Barrington's commitment to spacious lots and architectural care. From Inverness golf-course estates to Deer Park custom homes, we plan outdoor rooms around the area's blend of traditional and contemporary architecture.",
  },
];

const localConsiderations = [
  {
    title: 'Estate Zoning Expert',
    description:
      "We navigate strict setbacks (5' accessory separation) and impermeable coverage limits (50%) in the Village and Hills.",
    icon: ShieldCheck,
  },
  {
    title: 'Snow Load Engineered',
    description:
      'Barrington projects need snow-load, drainage, mounting, and seasonal maintenance planning before a permanent outdoor structure is finalized.',
    icon: CloudSun,
  },
  {
    title: 'Architectural Harmony',
    description:
      "From Queen Anne conventions to Modernist estates, our designs integrate seamlessly with Barrington's diverse architectural styles.",
    icon: Home,
  },
  {
    title: 'The 3-Season Room',
    description:
      'Screens, heaters, lighting, and controls can extend patio use when they are planned with the pergola from the beginning.',
    icon: Wind,
  },
];

const faqs = [
  {
    question:
      'Do I need a permit for a pergola in Barrington or Barrington Hills?',
    answer:
      'Most covered outdoor structures in the Barrington area need some level of village, county, or association review. We start by checking the exact address, survey, lot coverage, setbacks, and subdivision requirements so the design is shaped around the approval path before pricing is finalized.',
  },
  {
    question:
      'How do louvered pergolas affect impermeable surface calculations?',
    answer:
      'Coverage rules depend on the municipality, drainage pattern, foundation design, and how the structure is interpreted by the reviewer. We do not assume a louvered roof is exempt. We review the survey and help compare open-louver, drainage, footing, and patio-surface options before the plan is submitted.',
  },
  {
    question: 'What is the typical timeline for a Barrington estate project?',
    answer:
      'The timeline depends on survey readiness, association review, permit scope, engineering needs, product lead time, and site access. Estate properties can require additional coordination for architectural review committees, gated-community rules, utility planning, and landscape preservation.',
  },
  {
    question:
      'Can you work with HOA requirements in Wynstone and gated communities?',
    answer:
      'For properties in Wynstone, The Woods of South Barrington, and other gated communities, EDG can prepare renderings, finish samples, product information, and site details for the applicable architectural review. Final requirements depend on the community and project.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Barrington, IL',
  source: 'barrington_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Barrington, IL',
  source: 'barrington_hub_bottom',
});

export default function BarringtonHubPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Barrington',
            description:
              'Motorized pergolas, exterior shades, and glass enclosures for Barrington area estates.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Barrington',
            },
            url: 'https://www.edgpatioshade.com/service-areas/barrington-il',
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
            alt="Black louvered pergola for Barrington estate"
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
                { label: 'Barrington, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Barrington, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Outdoor Living Systems for
                <span className="text-edg-brand block">
                  Barrington & The Hills
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Motorized pergolas, screens, and glass systems planned for
                Barrington&apos;s estate zoning, from Barrington Hills to South
                Barrington. We navigate 5-acre lot requirements while maximizing
                your outdoor living space.
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
      <section className="bg-edg-dark text-text-inverse-muted border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span
                  key={i}
                  className="text-text-inverse-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> {benefit}
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
                Serving Every Barrington Area Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                From equestrian estates to gated communities, we understand the
                unique character and requirements of Barrington&apos;s distinct
                areas.
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

      {/* ========== ZONING & PERMITS ========== */}
      <Section id="zoning" className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <h2 className="section-title mb-4">
              Zoning & Permits in Barrington
            </h2>
            <p className="text-text-secondary max-w-3xl">
              Barrington-area approvals can change quickly from one address to
              the next, especially where village limits, township rules, estate
              lots, HOA standards, and drainage requirements overlap.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="mb-2 font-bold">Coverage Review</h3>
                <p className="text-text-secondary text-sm">
                  We review the survey, existing hardscape, proposed roof
                  footprint, drainage path, and any prior patio or pool
                  improvements before assuming how coverage will be treated.
                </p>
              </Card>
              <Card>
                <h3 className="mb-2 font-bold">Setback Coordination</h3>
                <p className="text-text-secondary text-sm">
                  Setbacks, easements, septic or well locations, utility routes,
                  and association rules are checked address by address so the
                  pergola layout is buildable.
                </p>
              </Card>
            </div>

            <div className="border-edg-brand-dark mt-8 border-l-4 bg-white p-6">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Snowflake className="text-edg-brand-dark h-5 w-5" />
                Snow Load Engineering
              </h4>
              <p className="text-text-secondary">
                Barrington&apos;s primary engineering challenge is snow load.
                Our systems are engineered for heavy, wet Chicagoland snow
                without buckling.
              </p>
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
                Built for the Barrington Estate Lifestyle
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are planned around Barrington&apos;s zoning
                requirements, estate architecture, snow exposure, and seasonal
                comfort needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localConsiderations.map((item, i) => (
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

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Barrington Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Barrington
                and surrounding areas.
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
                Local Resources for Barrington Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/barrington-il/motorized-pergolas"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-all duration-200"
                >
                  <IconWrapper
                    icon={Wind}
                    variant="default"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Snow-Load Rated Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore louvered roof planning for Chicagoland winters,
                    estate-scale patios, review requirements, and site exposure.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Explore Systems <ArrowRight className="h-4 w-4" />
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
                Ready to plan your Barrington project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Review the address, estate review path, snow exposure, and right
                product recommendation with our local team.
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
