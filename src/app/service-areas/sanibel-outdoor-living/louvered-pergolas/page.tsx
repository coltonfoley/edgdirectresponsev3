import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Wind,
  ShieldCheck,
  Sun,
  Layers,
  Droplets,
  Thermometer,
  Zap,
  Home,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Phone,
  Info,
} from 'lucide-react';
import type { Metadata } from 'next';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Louvered Pergolas Sanibel | Coastal Outdoor Living | EDG',
  description:
    'Motorized louvered pergolas for Sanibel and Captiva homes, planned around coastal wind documentation, salt-air materials, modern lanai alternatives, and permits.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Louvered Pergolas Sanibel | Coastal Outdoor Living | EDG',
    description:
      'Motorized louvered roof systems for Sanibel with coastal materials, rain control, and permit planning.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  },
  keywords: [
    'hurricane rated pergolas sanibel',
    'louvered roof systems sanibel',
    'motorized pergolas florida',
    'sanibel island outdoor living',
    'high velocity hurricane zone pergola',
    'miami-dade rated pergola',
    'coastal outdoor structures',
    'modern lanai alternative',
  ],
};

const keyBenefits = [
  'Coastal wind documentation',
  'Marine-grade coastal aluminum',
  'Integrated rain management',
  'Smart weather sensing',
];

const engineeringFeatures = [
  {
    title: 'Wind Documentation',
    description:
      'Selected systems can be specified with wind-load engineering, Florida Product Approval, or Miami-Dade NOA documentation where applicable. Final acceptance depends on Sanibel review and the actual installation.',
    icon: Wind,
  },
  {
    title: 'Salt-Air Corrosion Defense',
    description:
      'Coastal aluminum, protective finishes, stainless hardware, drainage, and routine cleaning help the system handle Sanibel salt air better than standard inland patio materials.',
    icon: ShieldCheck,
  },
  {
    title: 'Intelligent Rain Management',
    description:
      'Integrated gutter system channels rainwater through the beam structure when louvers are closed. No exposed downspouts, no waterfall effect—just dry outdoor living even in tropical downpours.',
    icon: Droplets,
  },
  {
    title: 'Precision Climate Control',
    description:
      'Louvers rotate 0°-150° to track the sun or seal against rain. Open for starlight and seabreezes, angled for afternoon shade, or closed as part of the storm-preparation plan for the selected system.',
    icon: Sun,
  },
];

const vsTraditional = [
  {
    aspect: 'Weather Adaptability',
    traditional: 'Fixed roof—no adjustment possible',
    louvered: 'Motorized louvers adapt to sun, rain, and wind in seconds',
    advantage: 'louvered',
  },
  {
    aspect: 'Wind Documentation',
    traditional: 'Older screen enclosures may have limited documentation',
    louvered: 'Can be specified with stronger wind and anchoring documentation',
    advantage: 'louvered',
  },
  {
    aspect: 'Temperature Control',
    traditional: 'Traps heat, blocks airflow',
    louvered: 'Ventilated design supports shade, airflow, and heat relief',
    advantage: 'louvered',
  },
  {
    aspect: 'Impermeable Surface',
    traditional: 'Must be reviewed as part of developed area',
    louvered: 'Also requires Sanibel developed-area review',
    advantage: 'louvered',
  },
  {
    aspect: 'Maintenance (20 years)',
    traditional: '$3,000-6,000 (rescreening, painting, repairs)',
    louvered: 'Reduced fixed-screen maintenance, plus routine cleaning',
    advantage: 'louvered',
  },
  {
    aspect: 'Aesthetic',
    traditional: 'Dated, boxy appearance',
    louvered: 'Sleek architectural statement',
    advantage: 'louvered',
  },
];

const smartFeatures = [
  {
    title: 'Automated Weather Response',
    description:
      'Built-in sensors detect rain and high winds, automatically closing louvers to protect your outdoor furniture—even when you are not home. When the weather clears, louvers can reopen automatically.',
    icon: Zap,
  },
  {
    title: 'Precision Temperature Management',
    description:
      "Unlike fixed roofs that trap heat, louvered systems vent hot air upward while providing adjustable shade. Stay comfortable outdoors even during Sanibel's peak summer heat.",
    icon: Thermometer,
  },
  {
    title: 'Integrated Lighting & Climate',
    description:
      'LED strip lighting integrated into the beam structure creates ambient evening atmosphere. Infrared heaters can support cooler winter evenings when the layout and electrical plan allow.',
    icon: Layers,
  },
  {
    title: 'Optional Retractable Screens',
    description:
      'Deploy motorized screens when you need bug protection or privacy, then retract them when the priority is open air and Gulf views.',
    icon: Home,
  },
];

const sanibelApplications = [
  {
    location: 'Gulf-Front Estates',
    description:
      'West Gulf Drive and East Gulf Drive homes face intense afternoon sun and salt spray. Louvered systems let you control glare while maximizing panoramic water views.',
  },
  {
    location: 'Poolside Living',
    description:
      'Fixed screened pool areas can feel hot and static. Open louvers allow ventilation while providing shade, creating a more comfortable poolside experience.',
  },
  {
    location: 'Canal Homes',
    description:
      'Properties along the Sanibel River rely on seabreezes for cooling. Adjustable louvers capture crosswinds while blocking harsh afternoon sun.',
  },
  {
    location: 'Post-Hurricane Rebuilds',
    description:
      'If storm damage changed the outdoor room, the 50% rule may affect the rebuild path. Use that review point to compare a modern louvered system before automatically rebuilding the same layout.',
  },
];

const faqs = [
  {
    question:
      'How do louvered pergolas compare to traditional lanais for Sanibel homes?',
    answer:
      'Traditional lanais are static structures with fixed roofs and screens. Louvered pergolas offer adaptable shade, airflow, and rain protection with motorized louvers. For Sanibel, the real comparison should include wind documentation, anchoring, floodplain review, screens, drainage, and developed-area treatment.',
  },
  {
    question: 'Is a louvered pergola a stronger option than my old lanai?',
    answer:
      'It can be a stronger and better-documented option, depending on the selected system and installation. EDG compares engineering, product approvals, anchoring, exposure, and Sanibel permit requirements before making that recommendation.',
  },
  {
    question: 'How does the integrated rain management work?',
    answer:
      'On systems designed for rain management, closed louvers route water through integrated gutters and posts. Performance depends on the selected system, pitch, drainage design, installation, maintenance, and weather conditions. EDG confirms those details for the project.',
  },
  {
    question: 'Can I add screens or other features to a louvered pergola?',
    answer:
      'Absolutely. Motorized retractable screens can be integrated for bug protection and privacy. LED lighting strips install within the beams for ambient evening illumination. Infrared heaters extend usability into cooler months. These integrate seamlessly without compromising the clean architectural lines.',
  },
  {
    question: 'What is the cost compared to rebuilding a traditional lanai?',
    answer:
      'Motorized louvered systems are usually a higher-spec option than basic screen enclosure work. The useful comparison is full scope: demolition, slab or footing work, engineering, screens, drainage, electrical, permits, and long-term maintenance.',
  },
  {
    question: 'How long does installation take in Sanibel?',
    answer:
      'Timeline depends on measurements, engineering, product lead time, Sanibel permit review, HOA review, electrical work, screens, and site prep. EDG must confirm the site conditions before giving a realistic schedule.',
  },
];

const pergolaContactHref = buildContactHref({
  type: 'fit-review',
  product: 'pergola',
  area: 'sanibel',
  source: 'leads-sanibel-pergolas',
});

export default function SanibelPergolaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: 'Louvered Pergolas - Sanibel',
              description:
                'Motorized louvered roof systems planned around Sanibel Island coastal climate, wind documentation, and permit review.',
              url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living/louvered-pergolas',
              image: `https://www.edgpatioshade.com${images.pages.serviceAreas.sanibelShopros02}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero Section */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16 text-white md:pt-32 lg:min-h-[75vh]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.sanibelShopros02}
            alt="Gray and white louvered pergola system for Sanibel Island coastal home"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <Container className="relative z-20">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                {
                  label: 'Sanibel, FL',
                  href: '/service-areas/sanibel-outdoor-living',
                },
                { label: 'Louvered Pergolas' },
              ]}
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-edg-brand/10 border-edg-brand/20 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3 w-3" /> Sanibel coastal planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Louvered Pergolas{' '}
              <span className="text-edg-brand block">for Sanibel Island</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              The evolution of outdoor living in Southwest Florida. Motorized
              louvered roof systems planned around coastal wind documentation,
              adjustable shade, ventilation, rain protection, and Sanibel permit
              review.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {keyBenefits.map((benefit, i) => (
                <span
                  key={i}
                  className="text-text-inverse-muted flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />{' '}
                  {benefit}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={pergolaContactHref}>
                <Button size="lg" className="px-10 font-bold">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-none border-white/20 px-10 text-white hover:bg-white/10"
                >
                  Design in 3D <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-none border-white/20 px-10 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Features */}
      <Section className="bg-surface py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="section-title mb-4">
                Engineered for Extreme Coastal Conditions
              </h2>
              <p className="text-text-secondary text-lg">
                Every component selected to withstand Sanibel\'s unique
                challenges: coastal wind exposure, corrosive salt air, and
                intense subtropical sun.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {engineeringFeatures.map((feature) => (
                <Card key={feature.title} variant="muted" padding="lg">
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

      {/* Comparison Table */}
      <Section className="bg-surface-muted py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="section-title mb-4">
                Louvered Pergolas vs. Traditional Lanais
              </h2>
              <p className="text-text-secondary">
                See why Sanibel homeowners are upgrading from static screen
                enclosures to intelligent louvered systems.
              </p>
            </div>

            <div className="overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-12 gap-4 bg-zinc-100 p-4 text-sm font-bold dark:bg-zinc-900">
                <div className="col-span-3">Feature</div>
                <div className="col-span-4">Traditional Lanai</div>
                <div className="text-edg-brand-text col-span-5">
                  Louvered Pergola
                </div>
              </div>
              {vsTraditional.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 border-t border-zinc-200 p-4 text-sm dark:border-zinc-800"
                >
                  <div className="col-span-3 font-semibold">{row.aspect}</div>
                  <div className="text-text-secondary col-span-4">
                    {row.traditional}
                  </div>
                  <div className="text-edg-brand-text col-span-5 font-medium">
                    {row.louvered}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/service-areas/sanibel-outdoor-living/modern-lanai">
                <Button className="px-8">
                  Learn More: The Modern Lanai{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Smart Features */}
      <Section className="bg-surface py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="section-title mb-4">Intelligent Outdoor Living</h2>
              <p className="text-text-secondary text-lg">
                Smart features that adapt to Sanibel\'s changing
                weather—automatically.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {smartFeatures.map((feature) => (
                <Card key={feature.title} variant="muted" padding="lg">
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

      {/* Visual Feature Section */}
      <Section className="overflow-hidden border-y border-zinc-100 bg-white py-24 dark:border-zinc-800 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="border-border relative h-[500px] overflow-hidden border">
              <Image
                src={images.pages.serviceAreas.sanibelShade}
                alt="Motorized screens deployed on louvered pergola for Sanibel coastal patio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <FadeIn>
              <div className="space-y-8">
                <h2 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                  Adaptable Protection for
                  <span className="text-edg-brand-text"> Every Season</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Sanibel weather demands flexibility. Open louvers to capture
                  cooling seabreezes during the day. Angle them to block harsh
                  afternoon sun without losing airflow. Close them completely
                  when afternoon storms blow through—or let the automated
                  sensors handle it for you.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Custom RAL color matching',
                    'Integrated LED lighting',
                    'Infrared heating options',
                    'Professional installation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-edg-brand-dark h-5 w-5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href={pergolaContactHref}>
                    <Button className="px-10 py-6 text-lg font-bold">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Sanibel Applications */}
      <Section className="bg-surface-muted py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="section-title mb-4">
                Designed for Sanibel Living
              </h2>
              <p className="text-text-secondary">
                From Gulf-front estates to canal homes, see how louvered systems
                enhance outdoor living throughout the island.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {sanibelApplications.map((app, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{app.location}</h3>
                  <p className="text-text-secondary">{app.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Cost/Value Section */}
      <Section className="bg-surface py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="border border-zinc-200 bg-white p-8 md:p-12 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-8 text-center">
                  <h2 className="section-title mb-4">Investment & Value</h2>
                  <p className="text-text-secondary">
                    Understand the full scope behind coastal outdoor living.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-edg-brand-dark mb-2 text-4xl font-bold">
                      $120-200
                    </div>
                    <div className="text-sm font-semibold">Budget Range</div>
                    <p className="text-text-secondary mt-2 text-sm">
                      Varies by size, engineering, screens, drainage, and site
                      conditions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-edg-brand-dark mb-2 text-4xl font-bold">
                      System
                    </div>
                    <div className="text-sm font-semibold">Warranty Review</div>
                    <p className="text-text-secondary mt-2 text-sm">
                      Warranty, maintenance, and coastal exclusions depend on
                      the selected system
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-edg-brand-dark mb-2 text-4xl font-bold">
                      Fit
                    </div>
                    <div className="text-sm font-semibold">
                      Design Differentiator
                    </div>
                    <p className="text-text-secondary mt-2 text-sm">
                      A clean, documented outdoor room can support a stronger
                      property story
                    </p>
                  </div>
                </div>

                <div className="border-border mt-8 border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="flex items-start gap-3">
                    <Info className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary dark:text-text-inverse-muted text-sm">
                      <strong>Post-Ian Opportunity:</strong> If storm damage
                      changed the outdoor room, the 50% rule may require full
                      reconstruction. This is your chance to compare a
                      better-documented modern system before automatically
                      rebuilding the same layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-surface-muted py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="section-title mb-4">
                Common Questions About Louvered Systems
              </h2>
              <p className="text-text-secondary">
                Everything you need to know about louvered pergolas for Sanibel
                Island.
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

      {/* Cross-Link to Related Pages */}
      <Section className="bg-surface py-24">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Explore More Sanibel Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <Link
                href="/service-areas/sanibel-outdoor-living/modern-lanai"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <IconWrapper
                    icon={Home}
                    variant="default"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    The Modern Lanai
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Learn why Sanibel homeowners are choosing louvered systems
                    as the evolution of traditional outdoor living.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
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
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <IconWrapper
                    icon={AlertTriangle}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Lanai Replacement Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Replacing a damaged lanai after Hurricane Ian? Navigate the
                    50% rule and rebuild smarter.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    View Guide <ArrowRight className="h-4 w-4" />
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
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <IconWrapper
                    icon={Info}
                    variant="default"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Sanibel Permit Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Review Sanibel floodplain, 50% rule, product approval, and
                    screen enclosure questions before choosing a structure.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read Permit Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-text-inverse mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready for Coastal Outdoor Living?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Send the site conditions and review whether a louvered system is
                the right starting point for the Sanibel property.
              </p>
              <Link href={pergolaContactHref}>
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
