import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Waves,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Hotel Patio Shading & Roof Deck Systems | Chicago Hospitality',
  description:
    'Hotel roof deck and terrace planning for commercial shade, pergolas, screens, heat, controls, wind exposure, guest comfort, and operations.',
  alternates: {
    canonical: '/commercial/hotel-roof-deck-systems',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Hotel Patio Shading | EDG Commercial',
    description:
      'Commercial roof deck planning for Chicago hotel terraces, guest comfort, wind exposure, shade, screens, and controls.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'hotel-roof-deck-systems',
  location: 'chicago',
  source: 'hotel_roof_deck_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'hotel-roof-deck-systems',
  location: 'chicago',
  source: 'hotel_roof_deck_bottom',
});

const faqs = [
  {
    question: 'What wind ratings do hotel roof deck systems require?',
    answer:
      'Wind requirements depend on the building, elevation, exposure, selected system, mounting method, and local code review. EDG helps coordinate product documentation, structural inputs, and wind-load planning before a rooftop or terrace system is specified.',
  },
  {
    question: 'Do you handle permitting for hotel rooftop installations?',
    answer:
      'EDG can help organize the commercial planning package: system specifications, drawings, structural coordination, product documentation, and permit support for the project team. Rooftop and terrace work should be reviewed early because structure, fire safety, egress, electrical, and building operations can all affect the final scope.',
  },
  {
    question: 'How are the shading controls managed for hotel guests?',
    answer:
      'Controls can be planned around the operating model. Some hotels keep staff-only control for louvers, screens, heat, and sensors; others use limited guest-facing controls for specific zones. The right setup depends on staffing, guest access, weather exposure, and the selected product package.',
  },
  {
    question: 'What maintenance is required for hotel roof deck systems?',
    answer:
      'Powder-coated aluminum pergolas, exterior shades, and glass systems are designed for commercial use, but they still need periodic cleaning, inspection, and service checks. EDG can review maintenance expectations with the hotel team based on the selected systems and exposure.',
  },
];

const planningSteps = [
  {
    icon: ClipboardCheck,
    title: 'Amenity and operations review',
    description:
      'Guest seating, staff access, food and beverage flow, pool use, noise, hours, and weather interruptions should be reviewed before products are selected.',
  },
  {
    icon: Building2,
    title: 'Structure and code coordination',
    description:
      'Rooftop projects need early alignment around mounting, wind exposure, egress, power, drainage, fire-safety concerns, and owner or brand approvals.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controls and handoff',
    description:
      'Staff controls, guest zones, sensors, heat, lighting, and maintenance expectations should be simple enough for hotel teams to operate consistently.',
  },
];

const systemOptions = [
  {
    icon: Wind,
    title: 'Wind-aware shade planning',
    description:
      'Exterior shades can help with sun, glare, privacy, and guest comfort when the opening, wind exposure, and staff control plan are specified together.',
  },
  {
    icon: Waves,
    title: 'Pool and terrace comfort',
    description:
      'Pergolas, screens, and heaters can make pool decks and terraces easier to use through changing sun, wind, and shoulder-season conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial durability',
    description:
      'Aluminum structures, commercial motors, serviceable controls, and clear maintenance planning reduce downtime for engineering and operations teams.',
  },
  {
    icon: Thermometer,
    title: 'Heat, light, and sensors',
    description:
      'Infrared heat, integrated lighting, rain and wind sensors, remotes, and staff-only control zones should be planned as one operating package.',
  },
];

const operationalChecks = [
  'Rooftop exposure, wind direction, mounting surface, and structural review',
  'Guest seating, pool access, staff path, service zones, and ADA clearance',
  'Drainage, power, control locations, sensor behavior, and emergency procedures',
  'Hotel brand standards, owner approvals, product documentation, and maintenance handoff',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hotel Roof Deck Systems',
  description:
    'Commercial outdoor shades and heavy-duty pergolas for hotel rooftops and terraces',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

export default function HotelRoofDeckPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-edg-dark relative flex min-h-[68vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.enclosures.commercialDayExterior}
            alt="Commercial glass and roof system used for hotel terrace planning"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Commercial', href: '/commercial' },
              { label: 'Hotel Roof Deck Systems' },
            ]}
            className="mb-6 text-zinc-300"
          />
          <Link
            href="/commercial"
            className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to commercial
          </Link>

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-6">
              Hotel Roof Deck Systems
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Hotel Patio Shading and Roof Deck Planning
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Commercial shade, pergola, glass, heat, and control planning for
              rooftops, terraces, pool decks, and amenity spaces where guest
              comfort has to work with operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {planningSteps.map((step) => (
              <div key={step.title} className="border border-white/10 p-6">
                <IconWrapper
                  icon={step.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h2 className="mb-3 text-xl font-bold">{step.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial text-edg-brand mb-4">
                Commercial Planning Standard
              </div>
              <h2 className="section-title mb-6">
                A hotel terrace is an operations project before it is a product
                choice
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                A useful roof deck plan starts with the property: where guests
                sit, how staff access the space, how the hotel handles weather,
                what brand standards apply, and which building constraints shape
                the system.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                EDG is system-agnostic, so the recommendation can combine
                louvered pergolas, exterior screens, glass walls, heaters,
                lighting, and controls only where they support the hotel&apos;s
                operating model.
              </p>
              <div className="grid gap-3">
                {operationalChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.progressiveCommercialPatio}
                alt="Commercial patio with retractable screens and guest seating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">System Options</div>
            <h2 className="section-title mb-4">
              Components selected around the hotel, not the other way around
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A roof deck or pool terrace may need one system or a layered
              package. EDG compares the use case, exposure, controls, and
              service expectations before recommending the final mix.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {systemOptions.map((option) => (
              <Card key={option.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={option.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">Proof Standard</div>
              <h2 className="section-title mb-6 text-white">
                Keep the business case tied to the actual amenity space
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                EDG does not need to promise a generic financial outcome to make
                a hotel roof deck project worth reviewing. The useful question
                is how weather protection, comfort, maintenance, staffing, and
                guest experience change for the specific property.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  'Inputs',
                  'Use case, exposure, seating, hours, staff control, and maintenance',
                ],
                [
                  'System',
                  'Pergola, screens, glass, heat, lighting, sensors, and controls',
                ],
                [
                  'Output',
                  'A qualified recommendation instead of a generic package',
                ],
              ].map(([label, description]) => (
                <div key={label} className="border border-white/10 p-6">
                  <div className="text-edg-brand mb-3 text-xs font-bold tracking-[0.18em] uppercase">
                    {label}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Hotel Roof Deck Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="outline" padding="lg">
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

      <Section className="bg-surface border-t border-black/10 py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link
              href="/commercial"
              className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Commercial Pages
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/commercial/hotel-pergolas"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Hotel Pergolas
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/restaurant-patio-solutions"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Restaurant Solutions
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Review the roof deck before choosing the system
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the terrace use case, exposure, guest comfort goals, and
              operational constraints. We will help narrow the system and
              planning path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call EDG
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
