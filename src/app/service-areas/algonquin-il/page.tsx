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
  Phone,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';

export const metadata: Metadata = {
  title: 'Algonquin IL Pergolas & Outdoor Living | EDG Patio & Shade',
  description:
    'Motorized pergolas and outdoor living systems for Algonquin, IL homes. Local planning for Fox River lots, Randall Road neighborhoods, permits, and Midwest weather.',
  alternates: {
    canonical: '/service-areas/algonquin-il',
  },
  keywords: [
    'pergola Algonquin IL',
    'Algonquin pergola installer',
    'motorized pergola Algonquin',
    'louvered pergola Algonquin IL',
    'outdoor living Algonquin IL',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Algonquin IL Pergolas & Outdoor Living | EDG Patio & Shade',
    description:
      'Engineered motorized pergolas, screens, and outdoor living systems for Algonquin homeowners near the Fox River, Randall Road, and surrounding neighborhoods.',
  },
};

const localProof = [
  'Spring Grove showroom within easy reach of Algonquin',
  'Permit-aware pergola planning for Village of Algonquin requirements',
  'Motorized louvered roofs built for Northern Illinois wind, rain, and snow',
  'Design, supply, installation, electrical coordination, and service under one roof',
];

const neighborhoods = [
  {
    name: 'Old Town and Fox River homes',
    description:
      'Homes near Main Street, Riverfront Park, Cornish Park, and the Fox River often need outdoor rooms that preserve views while handling bugs, wind, and evening humidity. A motorized pergola with integrated screens can create useful shade without turning a river-facing patio into a closed-in room.',
  },
  {
    name: 'High Hill Farms and west-side neighborhoods',
    description:
      'Many High Hill Farms properties have established yards, two-story homes, and patios that need shade without overpowering the house. We plan column locations, drainage, heater placement, and louver direction so the pergola feels intentional instead of added after the fact.',
  },
  {
    name: 'Randall Road and Algonquin Commons corridor',
    description:
      'The west side of Algonquin around Randall Road, Algonquin Commons, and nearby subdivisions often includes newer homes, larger patios, and HOA expectations. We create finish packages, drawings, and product selections that make architectural review easier for homeowners.',
  },
  {
    name: 'Willoughby Farms, Tunbridge, and Lake in the Hills edge',
    description:
      'Neighborhoods near Willoughby Farms, County Line Road, and the Lake in the Hills border often need privacy from nearby homes as much as overhead shade. These projects are strong fits for a louvered roof, side screens, low-glare lighting, and heaters planned as one system.',
  },
];

const services = [
  {
    title: 'Motorized louvered pergolas',
    description:
      'Adjustable roof systems for shade, rain control, lighting, and a cleaner architectural look than a wood kit or fabric canopy.',
    icon: CloudSun,
  },
  {
    title: 'Retractable screens and shades',
    description:
      'Side protection for bugs, privacy, low sun, and wind along the Fox River and open suburban lots.',
    icon: Wind,
  },
  {
    title: 'Permit and planning support',
    description:
      'Algonquin pergola projects need the right survey, plans, pier/foundation detail, easement review, and inspection path.',
    icon: FileText,
  },
  {
    title: 'Complete outdoor room packages',
    description:
      'We can coordinate pergola, screens, heaters, lighting, controls, and finish selection instead of treating each item separately.',
    icon: Home,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Algonquin, IL?',
    answer:
      'Usually yes for a permanent pergola. The Village of Algonquin publishes a pergola permit checklist that calls for a building permit application, plat of survey, plans, and construction requirements. Temporary pergolas or kits may not require a permit, but the safe move is to verify before buying or building.',
  },
  {
    question: 'What makes EDG different from a deck builder or landscaper?',
    answer:
      'Deck builders and landscapers may add a basic pergola as one part of a larger outdoor project. EDG specializes in engineered motorized pergolas, screens, glass, heat, lighting, controls, and long-term service. That matters when the goal is a premium outdoor room, not just a decorative shade frame.',
  },
  {
    question: 'How much does a motorized pergola cost in Algonquin?',
    answer:
      'The final price depends on size, mounting conditions, finish, screens, heaters, lighting, controls, engineering, and permit requirements. For most Algonquin homeowners, we recommend starting with a quote request before committing to a full design package.',
  },
  {
    question: 'How long does an Algonquin pergola project usually take?',
    answer:
      'A simple project can move faster, but a realistic custom motorized pergola timeline is often 8 to 12 weeks after design approval. Permits, HOA review, custom fabrication, electrical coordination, and weather can affect the schedule.',
  },
];

const heroContactHref = buildContactHref({
  area: 'algonquin',
  product: 'pergola',
  source: 'algonquin_hub',
});

const bottomContactHref = buildContactHref({
  area: 'algonquin',
  product: 'pergola',
  source: 'algonquin_hub_bottom',
});

export default function AlgonquinServiceAreaPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Algonquin IL Pergolas and Outdoor Living Systems',
            description:
              'Motorized pergolas, retractable screens, and outdoor living planning for Algonquin, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Algonquin',
              addressRegion: 'IL',
            },
            url: 'https://www.edgpatioshade.com/service-areas/algonquin-il',
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

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="Motorized louvered pergola for an Algonquin Illinois outdoor living space"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Algonquin, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Algonquin, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Algonquin IL Pergolas
                <span className="text-edg-brand block">
                  Built for Fox River Valley Weather
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                EDG designs and installs motorized pergolas, retractable
                screens, heaters, lighting, and complete outdoor room systems
                for Algonquin homes from Old Town to Randall Road.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg" className="px-8 text-lg">
                    Plan an Algonquin Pergola{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/service-areas/algonquin-il/motorized-pergolas">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-white/40 bg-white/10 px-8 text-lg text-white hover:bg-white/20"
                  >
                    See Pergola Options
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localProof.map((item) => (
                <span
                  key={item}
                  className="text-text-inverse-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Local pergola planning
              </div>
              <h2 className="section-title mb-4">
                A better answer than a basic wood pergola
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Algonquin homeowners usually do not just need shade. They need a
                space that handles summer bugs, sudden rain, privacy from
                neighboring lots, evening use, and Northern Illinois winter
                conditions. That is why our first recommendation is usually a
                motorized louvered roof system planned with screens, heaters,
                lighting, drainage, and controls from the beginning.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} variant="muted" padding="lg">
                  <IconWrapper
                    icon={service.icon}
                    variant="brand"
                    size="md"
                    className="mb-5"
                  />
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/algonquin-il/retractable-screens">
                <Button variant="secondary">
                  Explore Algonquin screens
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/service-areas/algonquin-il/motorized-pergolas">
                <Button variant="secondary">
                  Compare pergola options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">
                Algonquin neighborhoods
              </div>
              <h2 className="section-title mb-4">
                Outdoor rooms planned around the actual lot
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A pergola near the Fox River has different design constraints
                than a patio west of Randall Road. We look at exposure, house
                orientation, drainage, privacy, easements, and how the space
                will actually be used before recommending a system.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood) => (
                <Card key={neighborhood.name} variant="default" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">
                    {neighborhood.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {neighborhood.description}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <FadeIn>
              <div>
                <div className="label-editorial-brand mb-4">
                  Why EDG for Algonquin
                </div>
                <h2 className="section-title mb-6">
                  Specialist-level pergola design near your home
                </h2>
                <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                  <p>
                    EDG Patio & Shade is based in Spring Grove, so Algonquin is
                    close enough for practical site visits, showroom planning,
                    installation coordination, and long-term service. That
                    proximity matters after the sale. A motorized pergola is not
                    a one-day decorative install. It is a structure with moving
                    parts, electrical planning, water management, accessories,
                    and a local permit path.
                  </p>
                  <p>
                    Algonquin homeowners often encounter general contractors,
                    deck builders, and landscape companies that treat a
                    motorized pergola as one item in a much broader catalog. EDG
                    focuses specifically on premium shade, pergola, screen,
                    glass, and outdoor room systems.
                  </p>
                  <p>
                    If your project is still early, start with the local permit
                    guide. If you already know you want a louvered roof, use the
                    pergola page and send us patio photos, rough dimensions, and
                    the address so we can check the likely planning path.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <Card variant="muted" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
                <h3 className="mb-4 text-2xl font-bold">
                  Start with the permit reality
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Algonquin's published pergola checklist calls for a permit
                  application, plat of survey, plans, rear-yard placement,
                  5-foot property-line separation, easement review, proper
                  foundations or piers, inspections, and JULIE before digging.
                </p>
                <Link href="/service-areas/algonquin-il/zoning-guide">
                  <Button variant="secondary" className="w-full justify-center">
                    Read the Algonquin permit guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Algonquin pergola questions
              </div>
              <h2 className="section-title">What homeowners ask first</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to plan an Algonquin pergola?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Send photos, rough dimensions, and what you want the space to do:
              shade, rain coverage, bugs, privacy, heat, lighting, or a full
              outdoor room.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button size="lg" variant="secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
