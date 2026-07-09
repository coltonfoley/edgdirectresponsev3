import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Home,
  Layers,
  Building2,
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react';
import type { Metadata } from 'next';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems | Pergolas, Shades & Enclosures | EDG',
  description:
    'Complete outdoor living systems for the Chicago climate. Motorized pergolas, retractable screens, glass enclosures, and outdoor kitchens. Design & supply nationwide, installation in Chicago-Milwaukee corridor.',
  keywords: [
    'outdoor living systems',
    'motorized pergolas',
    'retractable screens',
    'glass enclosures',
    'outdoor kitchens',
    'patio covers',
    'backyard shade',
    'chicago outdoor living',
  ],
  alternates: {
    canonical: '/systems',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Outdoor Living Systems | EDG Patio & Shade',
    description:
      'Complete outdoor living solutions: pergolas, screens, enclosures, and kitchens. Built for the Midwest climate.',
  },
};

// System categories with enhanced data
const systems = [
  {
    id: 'pergolas',
    href: '/systems/pergolas',
    title: 'Motorized Pergolas',
    shortTitle: 'Pergolas',
    description:
      'Architectural aluminum structures with rotating louvers for complete climate control. Sun when you want it, watertight seal when you do not.',
    image: images.pages.serviceAreas.barringtonPergola1,
    features: [
      '135° adjustable louvers',
      'Wind-rated to 120 mph',
      'Smart home integration',
      'LED lighting options',
    ],
    bestFor: [
      'Patios & terraces',
      'Poolside lounges',
      'Outdoor kitchens',
      'Decks',
    ],
    priceRange: 'From $25,000',
    icon: Sun,
  },
  {
    id: 'shades',
    href: '/systems/shades',
    title: 'Motorized Screens',
    shortTitle: 'Screens',
    description:
      'Motorized patio screens with MagnaTrack by Progressive Screens as a featured premium partner. Plan insects, sun, privacy, and everyday wind comfort around the opening.',
    image: images.pages.serviceAreas.sanibelShade,
    features: [
      'MagnaTrack partner',
      'Insect and solar fabrics',
      'Track-guided comfort',
      'Retrofit or new openings',
    ],
    bestFor: [
      'Existing porches',
      'Pergola sides',
      'Patio enclosures',
      'Bug protection',
    ],
    priceRange: 'From $3,500',
    icon: CloudRain,
  },
  {
    id: 'enclosures',
    href: '/systems/enclosures',
    title: 'Glass Enclosures',
    shortTitle: 'Enclosures',
    description:
      'Lumon and other frameless retractable glass wall systems that turn patios, pergolas, and restaurant spaces into flexible 3-season rooms.',
    image: '/images/enclosures/frameless-sliding-glass-walls.jpg',
    features: [
      'Lumon LGR + LGS',
      'Frameless design',
      'Retractable panels',
      'Wind and rain control',
    ],
    bestFor: [
      'Three-season rooms',
      'Restaurant patios',
      'Event venues',
      'Patio conversions',
    ],
    priceRange: 'From $15,000',
    icon: Home,
  },
  {
    id: 'appliances',
    href: '/systems/appliances',
    title: 'Outdoor Kitchens',
    shortTitle: 'Kitchens',
    description:
      'Premium built-in grills, appliances, and cabinetry designed for outdoor use. Create the ultimate outdoor cooking and entertaining space.',
    image: images.systems.appliances.kitchen,
    features: [
      'Built-in grills',
      'Refrigeration',
      'Storage solutions',
      'Weather-resistant',
    ],
    bestFor: [
      'Outdoor cooking',
      'Entertaining',
      'Complete kitchens',
      'Grill islands',
    ],
    priceRange: 'From $8,000',
    icon: Thermometer,
  },
];

// Secondary systems
const secondarySystems = [
  {
    href: '/outdoor-rooms',
    title: 'Outdoor Room Plans',
    description:
      'Finished-room concepts that combine pergolas, glass, screens, heat, lighting, and outdoor kitchens around one complete space.',
    icon: Layers,
  },
  {
    href: '/systems/saunas',
    title: 'Custom Saunas',
    description:
      'Premium outdoor wood-fired and electric saunas for cold-weather wellness.',
    icon: Thermometer,
  },
];

const heroContactHref = buildContactHref({
  type: 'fit-review',
  product: 'multiple',
  source: 'systems_hero',
});

const showroomContactHref = buildContactHref({
  type: 'showroom',
  product: 'multiple',
  source: 'systems_showroom',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'multiple',
  source: 'systems_bottom',
});

// Comparison table data
const comparisonData = [
  {
    feature: 'Weather Protection',
    pergolas: 'Rain, sun, light wind',
    shades: 'Sun, UV, insects, wind',
    enclosures: 'Wind, rain, noise, glare',
  },
  {
    feature: 'Best For',
    pergolas: 'Open-air spaces',
    shades: 'Existing structures',
    enclosures: '3-season rooms',
  },
  {
    feature: 'Climate Control',
    pergolas: 'Adjustable louvers',
    shades: 'Deployable screens',
    enclosures: 'Full enclosure',
  },
  {
    feature: 'Installation Time',
    pergolas: '2-3 days',
    shades: '1 day',
    enclosures: '3-5 days',
  },
];

// FAQ data
const faqs = [
  {
    question: 'Which outdoor living system is right for me?',
    answer:
      'The right system depends on your space and goals. Motorized pergolas are ideal for open patios where you want adjustable shade and rain protection. Retractable screens work best for existing covered porches or as additions to pergolas. Glass enclosures are strongest for flexible 3-season comfort, wind control, and clear views. During our consultation, we assess your space, understand how you plan to use it, and recommend the best solution for your needs and budget.',
  },
  {
    question: 'Can these systems handle Chicago winters?',
    answer:
      'Yes, when the selected system is matched to the site. Pergolas need the right wind and snow-load engineering. Screens need the right track strategy, fabric, sensors, and operating expectations for the opening. Glass enclosures help control wind, rain, and shoulder-season comfort, but they are not the same as a fully insulated four-season addition. We can recommend the best configurations for lakefront and exposed locations.',
  },
  {
    question: 'Can I combine multiple systems?',
    answer:
      'Yes, and we often recommend it. Many homeowners start with a motorized pergola, then add retractable screens to the sides for wind and insect protection. Others integrate heating systems and outdoor kitchens to create complete outdoor living spaces. Our design team specializes in creating integrated systems where all components work together seamlessly, both functionally and aesthetically.',
  },
  {
    question: 'Do you work with homeowners or just contractors?',
    answer:
      'We work with both. For homeowners in the Chicago-Milwaukee corridor, we provide complete turnkey service, from design through installation. For homeowners outside our service area, we can supply systems through our network of certified installers. For contractors, architects, and designers nationwide, we serve as a design and supply partner, providing engineering, specifications, and shipping to your job site.',
  },
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-surface text-text-primary">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-surface-dark pt-28 pb-20 text-white md:pt-32 md:pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[{ label: 'Systems' }]}
              className="text-zinc-400"
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial mb-6 inline-flex items-center gap-3 text-edg-brand">
                <span className="bg-edg-brand h-px w-8" />
                Outdoor Living Solutions
              </div>
              <h1 className="mb-6 max-w-4xl text-5xl leading-none font-bold md:text-7xl">
                Complete outdoor systems, planned around the site.
              </h1>
              <p className="mb-8 max-w-xl text-xl leading-relaxed text-gray-300">
                Motorized pergolas, retractable screens, glass enclosures, and
                outdoor kitchens, matched to the exposure, structure, comfort
                goals, and way the space needs to work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#systems">
                  <Button size="lg">Explore Systems</Button>
                </Link>
                <TrackedLink href={heroContactHref}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    Request Fit Review
                  </Button>
                </TrackedLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 lg:aspect-square">
              <Image
                src={images.pages.systems.blackBladePool}
                alt="Complete outdoor living system with motorized pergola and outdoor kitchen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHAT ARE OUTDOOR SYSTEMS ========== */}
      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4 inline-flex items-center gap-2">
              <span className="bg-edg-brand-text h-px w-8" />
              Overview
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What Are Outdoor Living Systems?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Outdoor living systems are integrated architectural solutions that
              extend your home&apos;s usable space into the outdoors. Unlike
              simple patio furniture or standalone awnings, these are engineered
              systems designed to work together, providing shade, weather
              protection, climate control, and functional outdoor kitchens that
              help the space work as a usable outdoor room.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card variant="muted" padding="lg">
              <IconWrapper
                icon={Sun}
                variant="brand"
                size="lg"
                className="mb-4"
              />
              <h3 className="mb-2 text-xl font-bold">Climate Control</h3>
              <p className="text-text-secondary">
                Adjust sun, shade, and airflow on demand. Motorized louvers,
                retractable screens, and integrated heating extend your outdoor
                season when the site and system mix support it.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <IconWrapper
                icon={CloudRain}
                variant="brand"
                size="lg"
                className="mb-4"
              />
              <h3 className="mb-2 text-xl font-bold">Weather Protection</h3>
              <p className="text-text-secondary">
                Engineered for Chicago&apos;s demanding climate: wind-rated
                structures, integrated rain management, and snow-load
                engineering that stands up to Midwest winters.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <IconWrapper
                icon={Building2}
                variant="brand"
                size="lg"
                className="mb-4"
              />
              <h3 className="mb-2 text-xl font-bold">Integrated Design</h3>
              <p className="text-text-secondary">
                Systems designed to work together. Pergolas with integrated
                screens. Outdoor kitchens under protective covers. Everything
                connected, everything coordinated.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== MAIN SYSTEMS GRID ========== */}
      <Section id="systems" className="bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4 inline-flex items-center gap-2">
              <span className="bg-edg-brand-text h-px w-8" />
              Core Systems
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Choose Your System
            </h2>
            <p className="text-text-secondary text-lg">
              Four primary systems, each engineered for specific use cases. Many
              homeowners combine multiple systems for complete outdoor living.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system.id}
                className="group overflow-hidden border border-border bg-white transition-colors hover:border-edg-brand"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="bg-edg-brand text-edg-dark absolute top-4 right-4 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                    {system.priceRange}
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <IconWrapper icon={system.icon} variant="brand" size="sm" />
                    <h3 className="text-2xl font-bold">{system.title}</h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {system.description}
                  </p>

                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-text-muted mb-3 text-xs font-bold tracking-wider uppercase">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {system.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-text-secondary flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="text-edg-brand-text h-4 w-4 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-text-muted mb-3 text-xs font-bold tracking-wider uppercase">
                        Best For
                      </h4>
                      <ul className="space-y-2">
                        {system.bestFor.map((use) => (
                          <li
                            key={use}
                            className="text-text-secondary flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="text-edg-brand-text h-4 w-4 shrink-0" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={system.href}>
                    <Button className="w-full">
                      Explore {system.shortTitle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SECONDARY SYSTEMS ========== */}
      <Section className="border-border border-t bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Complete Your Space
            </h2>
            <p className="text-text-secondary">
              Add the finishing touches to your outdoor living area with these
              complementary systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {secondarySystems.map((system) => (
              <Card
                key={system.href}
                variant="outline"
                padding="lg"
                className="group"
              >
                <div className="mb-4 flex items-center gap-3">
                  <IconWrapper icon={system.icon} variant="default" size="md" />
                  <h3 className="text-lg font-bold">{system.title}</h3>
                </div>
                <p className="text-text-secondary mb-6 text-sm">
                  {system.description}
                </p>
                <Link
                  href={system.href}
                  className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== COMPARISON TABLE ========== */}
      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Compare Systems
            </h2>
            <p className="text-text-secondary">
              Quick comparison of our three primary outdoor living systems.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-border bg-white">
              <thead>
                <tr className="border-border border-b bg-surface-muted">
                  <th className="p-6 text-left font-bold">Feature</th>
                  <th className="text-edg-brand-text p-6 text-left font-bold">
                    Pergolas
                  </th>
                  <th className="text-edg-brand-text p-6 text-left font-bold">
                    Screens
                  </th>
                  <th className="text-edg-brand-text p-6 text-left font-bold">
                    Enclosures
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index !== comparisonData.length - 1
                        ? 'border-border border-b'
                        : ''
                    }
                  >
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="text-text-secondary p-6">{row.pergolas}</td>
                    <td className="text-text-secondary p-6">{row.shades}</td>
                    <td className="text-text-secondary p-6">
                      {row.enclosures}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ========== CHICAGO CLIMATE SECTION ========== */}
      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-edg-brand mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <Wind className="h-4 w-4" />
                Midwest Engineered
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Built for the Chicago Climate
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Our systems are specifically engineered to handle the demanding
                conditions of the upper Midwest, from summer rain and high winds
                to snow loads, freeze-thaw cycles, and cold-weather operation.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-white/10">
                    <Wind className="text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Wind Rated</h3>
                    <p className="text-sm text-zinc-300">
                      Pergolas and screens are specified around the site
                      exposure, opening size, selected system, sensors, and
                      expected operating conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-white/10">
                    <CloudRain className="text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Snow Load Engineered</h3>
                    <p className="text-sm text-zinc-300">
                      Structural engineering is matched to local snow-load
                      requirements, mounting conditions, and the specific
                      system selected for the site.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-white/10">
                    <Thermometer className="text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Season-Extending Comfort</h3>
                    <p className="text-sm text-zinc-300">
                      Heating, glass, screens, and selected comfort details can
                      extend the outdoor season when the site supports them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={images.pages.systems.grayBladeWhite}
                alt="Pergola engineered for Chicago climate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM CTA ========== */}
      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-edg-brand-text mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="h-4 w-4" />
                Visit Us
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                See Systems in Action
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Our Spring Grove showroom features working displays of multiple
                pergola systems, retractable screens, and outdoor kitchen
                setups. Experience the smooth operation, test the controls, and
                see color samples in natural light.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-bold">1802 Holian Drive</div>
                    <div className="text-text-secondary">
                      Spring Grove, IL 60081
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-edg-brand-text h-5 w-5 shrink-0" />
                  <TrackedPhoneLink
                    href="tel:+18155810138"
                    className="hover:text-edg-brand-text font-bold transition-colors"
                  >
                    (815) 581-0138
                  </TrackedPhoneLink>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/showroom">
                  <Button>Plan Your Visit</Button>
                </Link>
                <TrackedLink href={showroomContactHref}>
                  <Button variant="outline">Schedule Consultation</Button>
                </TrackedLink>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={images.pages.systems.whiteLedStrip}
                alt="EDG Patio & Shade showroom displays"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="border-border border-t bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Common Questions
              </h2>
              <p className="text-text-secondary">
                Everything you need to know about outdoor living systems.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
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

      {/* ========== FINAL CTA ========== */}
      <section className="bg-edg-dark py-24 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to choose the right system path?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Start with a fit review. EDG will compare the site, exposure,
              structure, comfort goals, and system mix before recommending the
              next step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">Start a Fit Review</Button>
              </TrackedLink>
              <Link href="/guides/planning-guide">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                >
                  Get Planning Guide
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
