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
  Crown,
  TreeDeciduous,
  Eye,
  Wind,
  FileCheck,
  Droplets,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living in Winnetka, IL | Pergolas & Shades | EDG',
  description:
    'Motorized pergolas, exterior shades, and outdoor room planning for Winnetka homes. Review support for historic districts, lakefront lots, and larger patios.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Winnetka Outdoor Living | Pergolas & Shades | EDG',
    description:
      'Outdoor living systems for Winnetka homes. Pergolas, screens, and enclosures planned for North Shore properties.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/winnetka-il',
  },
  keywords: [
    'winnetka pergolas',
    'winnetka outdoor living',
    'winnetka il patio',
    'pergola installation winnetka',
    'north shore outdoor',
  ],
};

const localBenefits = [
  'Large-lot installation planning',
  'Historic district review support',
  'Architectural review packet support',
  'Licensed for New Trier Township',
];

const neighborhoods = [
  {
    name: 'East Winnetka (Lakefront Estates)',
    description:
      'Lakefront properties in East Winnetka often need to preserve Lake Michigan views while solving shade, glare, wind, and mounting questions. Our planning emphasizes span, placement, exposure, and site-specific engineering near the water.',
  },
  {
    name: 'Hubbard Woods',
    description:
      'Hubbard Woods includes generous lots, mature architecture, and patios that often serve as serious entertaining spaces. We plan systems that feel intentional to the home rather than added as a generic patio cover.',
  },
  {
    name: 'Woodley Road Area',
    description:
      'The Woodley Road corridor mixes traditional and transitional architecture. Finish selection, placement, and scale matter when a pergola, screen, or enclosure needs to sit cleanly against limestone, brick, or stucco.',
  },
  {
    name: 'Indian Hill',
    description:
      "Indian Hill's winding roads and mature trees create design constraints worth respecting. We review root zones, column placement, drainage, and sightlines before recommending a structure.",
  },
];

const projectFeatures = [
  {
    title: 'Unobstructed Views',
    description:
      'Large Winnetka patios can lose their value when posts interrupt views to the garden or lake. We review span options, attachment points, and column placement before settling on the system.',
    icon: Eye,
  },
  {
    title: 'Architectural Fit',
    description:
      'Historic and traditional homes need careful finish choices. Matte powder coat, darker bronze tones, and restrained details can help a motorized system sit more naturally with the house.',
    icon: Crown,
  },
  {
    title: 'Ravine & Tree Preservation',
    description:
      'Ravine-adjacent and tree-heavy properties require more planning. We account for setbacks, drainage, root zones, and foundation strategy before recommending placement.',
    icon: TreeDeciduous,
  },
  {
    title: 'Lakefront Wind Ratings',
    description:
      'Wind off Lake Michigan can be fierce, especially on open lakefront lots and elevated patios. We review exposure, attachment points, drainage, and engineering requirements before recommending a roof or screen configuration.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: "What makes Winnetka's permitting process different?",
    answer:
      'Winnetka review can involve architecture, neighborhood character, lot coverage, setbacks, and drainage. We prepare the drawings, finish information, product details, and site context needed for a clearer review path.',
  },
  {
    question: 'Can you work with ravine protection requirements?',
    answer:
      'Yes. Ravine-adjacent properties require careful planning around setbacks, drainage, foundation placement, and runoff. We treat those constraints as part of the design instead of forcing a standard pergola layout.',
  },
  {
    question: 'How do you handle larger Winnetka projects?',
    answer:
      'Larger Winnetka projects often need engineering documentation, thoughtful span planning, and coordination across architecture, electrical, drainage, and installation access. EDG helps organize those details before the project is submitted.',
  },
  {
    question: "What's the typical timeline for a Winnetka project?",
    answer:
      'Winnetka projects typically take 10-14 weeks from consultation to completion due to the thorough permit process. ARB review adds 2-4 weeks compared to other communities. We recommend starting the design process in fall or winter for spring installation.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Winnetka, IL',
  source: 'winnetka_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Winnetka, IL',
  source: 'winnetka_hub_bottom',
});
const resourceContactHref = buildContactHref({
  type: 'consultation',
  product: 'permitting',
  location: 'Winnetka, IL',
  source: 'winnetka_hub_resources',
});

export default function WinnetkaHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Winnetka',
            description:
              'Motorized pergolas, exterior shades, and outdoor room planning for Winnetka homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Winnetka',
            },
            url: 'https://www.edgpatioshade.com/service-areas/winnetka-il',
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
            alt="Dark gray louvered pergola with LED lighting"
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
                { label: 'Winnetka, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Winnetka, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Architectural Outdoor Living
                <span className="text-edg-brand block">for Winnetka</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                In Winnetka, outdoor living often has to respect the home, the
                lot, the review path, and the lakefront climate. EDG plans
                pergolas, screens, glass, heat, lighting, and controls around
                those constraints.
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
                Serving Winnetka Neighborhoods
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Each Winnetka area has unique characteristics we design for.
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

      {/* ========== ESTATE FEATURES ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Engineering for Larger North Shore Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Bigger lots, lake exposure, mature trees, and traditional
                architecture make product fit and documentation especially
                important.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projectFeatures.map((feature, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper
                    icon={feature.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
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
                Winnetka Design Guide: Zoning & Building Beyond the Patio
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Winnetka&apos;s beauty comes from strict preservation. Whether
                you are on the lake, near a ravine, or in a historic district,
                here&apos;s what to expect.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-6">
              {/* Ravine Protection */}
              <Card variant="muted" padding="lg" className="flex gap-6">
                <IconWrapper icon={TreeDeciduous} variant="brand" size="lg" />
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Ravine Protection Ordinance
                  </h3>
                  <p className="text-text-secondary mb-4">
                    If your property touches a ravine, construction is heavily
                    regulated.
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm">
                    <li>
                      <strong>Setbacks:</strong> Structures often must be set
                      back significantly from the &quot;tableland&quot; edge of
                      the ravine.
                    </li>
                    <li>
                      <strong>Drainage:</strong> You cannot increase runoff into
                      the ravine. Our louvered systems with integrated gutters
                      can be piped into stormwater management systems to comply.
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Impervious Surface */}
              <Card variant="muted" padding="lg" className="flex gap-6">
                <IconWrapper icon={Droplets} variant="brand" size="lg" />
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Impervious Surface Limits
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Like much of the North Shore, Winnetka limits how much of
                    your lot can be covered by impermeable surfaces.
                  </p>
                  <div className="bg-edg-brand/5 border-edg-brand border-l-4 p-4">
                    <Quote className="text-edg-brand-dark mb-2 h-4 w-4" />
                    <p className="text-text-secondary text-sm italic">
                      A louvered roof may be reviewed differently than a solid
                      roof in some situations, but the address, drainage plan,
                      and final design decide the real path.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Architectural Review */}
              <Card variant="muted" padding="lg" className="flex gap-6">
                <IconWrapper icon={FileCheck} variant="brand" size="lg" />
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Architectural Review Committee (ARC)
                  </h3>
                  <p className="text-text-secondary mb-4">
                    For historic districts, the Village wants to ensure new
                    structures blend with the existing home. We support your
                    application with:
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm">
                    <li>
                      • 3D renderings matching your home&apos;s siding/brick
                      textures
                    </li>
                    <li>• Color samples (custom powder coating)</li>
                    <li>• Detailed elevation drawings showing sightlines</li>
                  </ul>
                </div>
              </Card>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-400 italic">
              Disclaimer: This page is a general guide. EDG manages the specific
              permit application and architectural review board presentation for
              our clients.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Winnetka Project Questions</h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                What Winnetka homeowners ask about larger outdoor room projects.
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
                Winnetka Homeowner Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/winnetka-il/louvered-pergolas"
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
                    Louvered Roofs for Larger Patios
                  </h3>
                  <p className="text-text-secondary mb-6">
                    How span planning, column placement, and roof selection
                    shape larger bluestone patios.
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
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Plan Your Winnetka Outdoor Room?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Review the property, review path, and system fit with EDG.
              </p>
              <Link href={bottomContactHref}>
                <Button size="lg" variant="dark" className="px-8 text-lg">
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
