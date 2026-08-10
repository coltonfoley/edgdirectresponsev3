import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Card } from '@/components/ui/Card';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import {
  ArrowRight,
  Maximize2,
  Droplets,
  Wind,
  Shield,
  Sparkles,
  Plus,
  Phone,
  Check,
  Home,
  Building2,
  Ruler,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Retractable Glass Patio Enclosures & Walls | EDG',
  description:
    'Explore retractable glass patio enclosures and frameless outdoor glass walls for homes, pergolas, restaurants, hotels, and hospitality spaces.',
  keywords: [
    'Lumon glass enclosures',
    'Lumon glass walls',
    'Lumon patio enclosures',
    'retractable glass walls',
    'sliding glass walls',
    'frameless glass enclosures',
    'glass patio enclosures',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Retractable Glass Patio Enclosures & Walls | EDG',
    description:
      'Retractable and sliding glass walls for residential patios and hospitality outdoor spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: { canonical: '/systems/enclosures' },
};

const heroContactHref = buildContactHref({
  type: 'price',
  product: 'enclosure',
  source: 'enclosures_hero',
});
const bottomContactHref = buildContactHref({
  type: 'price',
  product: 'enclosure',
  source: 'enclosures_bottom',
});

// Gallery images for the client component - ALL SHOW REAL GLASS
const galleryImages = [
  {
    type: 'image' as const,
    src: images.systems.enclosures.lumonPatio,
    alt: 'Lumon retractable glass patio enclosure with frameless panels',
  },
  {
    type: 'image' as const,
    src: images.systems.enclosures.framelessGlass,
    alt: 'Frameless sliding glass walls residential',
  },
  {
    type: 'image' as const,
    src: images.systems.enclosures.lumonDetail,
    alt: 'Lumon sliding glass wall detail with frameless tempered glass panels',
  },
  {
    type: 'image' as const,
    src: images.systems.enclosures.partialOpen,
    alt: 'Sliding glass panels partially open',
  },
  {
    type: 'image' as const,
    src: images.systems.enclosures.closedExterior,
    alt: 'Glass enclosure with closed panels',
  },
  {
    type: 'image' as const,
    src: images.systems.enclosures.commercialDayExterior,
    alt: 'Commercial glass enclosure for restaurant patio seating',
  },
];

// Quick specs for hero section
const specs = [
  { label: 'Featured Brand', value: 'Lumon Glazing' },
  { label: 'Glass Type', value: 'Tempered Panels' },
  { label: 'Best Fit', value: 'Patios + Pergolas' },
  { label: 'Season Goal', value: '3-Season Comfort' },
];

// Detailed specifications table
const specifications = [
  { label: 'Featured Systems', value: 'Retractable + sliding glazing' },
  {
    label: 'Glass Options',
    value: 'Tempered safety glass, project-specific thickness',
  },
  {
    label: 'Profile Style',
    value: 'Frameless sightlines with aluminum tracks',
  },
  {
    label: 'Opening Style',
    value: 'Fully open, partial ventilation, or closed windbreak',
  },
  {
    label: 'Structure Fit',
    value: 'Existing roof, beam, deck, and drainage reviewed',
  },
  {
    label: 'Applications',
    value: 'Patios, pergolas, balconies, roof decks, restaurants',
  },
  {
    label: 'Comfort Add-Ons',
    value: 'Screens, heaters, blinds, locks, and tinted glass',
  },
];

// Key features with detailed descriptions
const features = [
  {
    icon: Maximize2,
    title: 'Frameless Views',
    description:
      'Lumon glass wall systems use frameless tempered panels, so the enclosure protects the space without turning the view into a grid of bulky window frames.',
  },
  {
    icon: Sparkles,
    title: 'Retractable or Sliding Operation',
    description:
      'EDG helps choose between retractable panels that slide and fold to the side and sliding panels that move sideways along the track.',
  },
  {
    icon: Shield,
    title: 'Tempered Safety Glass',
    description:
      'Panel thickness, color, and hardware are selected around the opening, exposure, and structure. Clear and tinted glass options can tune the balance of view, glare, and privacy.',
  },
  {
    icon: Droplets,
    title: 'Wind and Rain Control',
    description:
      'A glass enclosure helps reduce exposure to wind, rain, outdoor noise, and shoulder-season chill while retaining the ventilation gaps required by the system.',
  },
  {
    icon: Wind,
    title: 'Outdoor-Air Flexibility',
    description:
      'Open one panel for airflow, stack the system for a fully open patio, or close the wall to protect dining, lounge, and entertainment areas from changing weather.',
  },
  {
    icon: Plus,
    title: 'EDG Fit Check',
    description:
      'We evaluate the roof/header, deck, drainage, layout, screens, heaters, and permit path before recommending Lumon or another glass enclosure system.',
  },
];

// Featured Lumon systems
const lumonSystems = [
  {
    name: 'Lumon Retractable Glazing',
    bestFor: 'Best when the goal is a clear, fully open wall.',
    description:
      'Panels slide and fold to the side of the opening. Retractable glazing is a strong fit for patios, pergolas, and hospitality spaces where full-opening flexibility matters.',
  },
  {
    name: 'Lumon Sliding Glazing',
    bestFor:
      'Best when space is tight or a one-motion sliding wall is preferred.',
    description:
      'Panels slide sideways along the track. Sliding glazing can be a better fit where furniture, traffic flow, or roof structure makes folding panels less practical.',
  },
];

// Install options
const installOptions = [
  'Existing roof and beam review',
  'Deck, slab, and drainage check',
  'Retractable/sliding operation recommendation',
  'Permit and engineering coordination',
];

// Upgrade options
const upgradeOptions = [
  { name: 'Operation', value: 'Lumon retractable or sliding glazing' },
  { name: 'Glass', value: 'Clear, tinted, and thickness options by project' },
  {
    name: 'Comfort',
    value: 'Infrared heaters, screens, blinds, and ventilation planning',
  },
  {
    name: 'Hardware',
    value: 'Locks, handles, profile colors, and ventilation details',
  },
];

// Related products
const relatedProducts = [
  {
    name: 'Louvered Pergolas',
    href: '/systems/pergolas',
    description: 'Motorized adjustable roof systems',
  },
  {
    name: 'Retractable Screens',
    href: '/systems/shades',
    description: 'Motorized insect and sun screens',
  },
  {
    name: 'Outdoor Room Plans',
    href: '/outdoor-rooms',
    description:
      'Outcome-led patio plans that combine roof, glass, screens, lighting, heat, and cooking paths',
  },
  {
    name: 'Pergola + Glass Outdoor Room',
    href: '/outdoor-rooms/pergola-glass-outdoor-room',
    description: 'A protected patio plan with roof, glass, and comfort options',
  },
  {
    name: 'Outdoor Heating',
    href: '/systems/appliances',
    description: 'Infrared heaters and fire features',
  },
];

// FAQ data for schema
const faqs = [
  {
    question: 'What is a retractable glass patio enclosure?',
    answer:
      'A retractable glass patio enclosure uses movable tempered-glass panels around a covered outdoor space. The panels can open, partially ventilate the space, or close to reduce exposure to wind and rain while preserving outdoor views.',
  },
  {
    question: 'Should I choose retractable or sliding glass panels?',
    answer:
      'Retractable glazing can fold to the side for a more fully open wall. Sliding glazing moves sideways and can suit openings where a simpler motion path is preferred. EDG reviews opening size, structure, furniture, traffic flow, and the desired clear opening before recommending either approach.',
  },
  {
    question: 'Is a Lumon glass enclosure the same as a four-season room?',
    answer:
      'No. Lumon glass enclosures are best understood as premium 3-season or season-extending systems. They help control wind, rain, noise, glare, and comfort, but they are not the same as a fully insulated, conditioned room addition unless the project is designed that way from the start.',
  },
  {
    question: 'Can Lumon glass be installed on an existing patio or pergola?',
    answer:
      'Often, yes. The opening needs a suitable roof or header, a sound deck or slab, and a plan for drainage and movement. EDG measures the site and checks structure before recommending retractable, sliding, or another enclosure approach.',
  },
  {
    question: 'How much do Lumon glass enclosures cost?',
    answer:
      'Pricing is project-specific. The system choice, opening size, glass options, structural prep, freight, installation, screens, heaters, and permits all affect the final number. EDG confirms the site details before pricing the complete installed project rather than quoting material-only numbers out of context.',
  },
  {
    question: 'Can a Lumon enclosure work with screens, heaters, or shades?',
    answer:
      'Yes, when the site allows it. Many glass enclosure projects pair with retractable insect screens, infrared heaters, blinds, motorized shades, or a pergola roof. EDG plans those pieces together so the finished space works as one outdoor living system.',
  },
];

// Generate schemas
const serviceSchema = {
  ...generateServiceSchema({
    name: 'Retractable Glass Patio Enclosure Design and Installation',
    description:
      'Design and installation of retractable and sliding frameless glass enclosure systems for residential patios, pergolas, roof decks, balconies, restaurants, and hospitality spaces.',
    url: 'https://www.edgpatioshade.com/systems/enclosures',
    image: `https://www.edgpatioshade.com${images.systems.enclosures.lumonPatio}`,
  }),
  serviceType: 'Glass enclosure design and installation',
  category: 'Frameless glass enclosures',
  brand: { '@type': 'Brand', name: 'Lumon' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How EDG Plans a Retractable Glass Patio Enclosure',
  description:
    'The planning steps EDG uses before recommending a retractable or sliding glass enclosure system.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Review the Structure',
      text: 'Measure the opening and review the roof, header, slab, deck, drainage, and exposure.',
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Retractable or Sliding Glazing',
      text: 'Compare retractable and sliding operation based on opening size, furniture layout, and roof conditions.',
    },
    {
      '@type': 'HowToStep',
      name: 'Select Comfort Options',
      text: 'Plan glass, color, screens, heaters, blinds, locks, and ventilation details around how the space will be used.',
    },
    {
      '@type': 'HowToStep',
      name: 'Install and Train',
      text: 'Coordinate ordering, installation, final adjustment, and owner training for the finished glass enclosure.',
    },
  ],
};

const faqSchema = generateFAQSchema(faqs);

export default function EnclosuresPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO: SPLIT SCREEN PRODUCT ========== */}
      <section className="flex flex-col justify-center pt-32 pb-12 lg:min-h-screen">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Systems', href: '/systems' },
                { label: 'Glass Enclosures' },
              ]}
            />
          </div>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="order-1 flex min-w-0 flex-col justify-center lg:col-span-5">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Retractable Glass Patio Enclosures
              </div>
              <h1 className="text-text-primary mb-8 text-5xl leading-[0.9] font-bold tracking-tighter md:text-7xl">
                Glass Patio <br /> Enclosures.
              </h1>
              <p className="text-text-secondary mb-10 max-w-md text-xl leading-relaxed">
                Retractable and sliding outdoor glass walls for residential
                patios and hospitality spaces. EDG plans the enclosure around
                the structure, opening pattern, weather exposure, and intended
                daily use.
              </p>

              <div className="mb-12 flex flex-col gap-4">
                <TrackedLink href={heroContactHref}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="hover:text-edg-brand-text flex cursor-pointer items-center gap-3 text-sm font-bold tracking-wider uppercase transition-colors">
                    <span className="h-px w-8 bg-black/20"></span>
                    Speak to a designer
                  </div>
                </TrackedPhoneLink>
                <Link
                  href="/service-areas/chicago-il/glass-enclosures"
                  className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                >
                  Planning in the city? See our Chicago glass enclosure page.
                </Link>
                <Link
                  href="/service-areas/southwest-florida"
                  className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                >
                  Planning for coastal wind? See Southwest Florida outdoor
                  living systems.
                </Link>
              </div>

              {/* Quick Specs */}
              <div className="border-border border-t pt-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specs.map((s) => (
                    <div key={s.label}>
                      <span className="text-text-muted mb-1 block text-xs tracking-wider uppercase">
                        {s.label}
                      </span>
                      <span className="text-text-primary font-bold">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-2 min-w-0 lg:col-span-7">
              <ProductGallery items={galleryImages} />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="section-md bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="label-editorial-brand mb-4">System Overview</div>
            <h2 className="section-title mb-6">
              Premium Frameless Glass Enclosures for Outdoor Living
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Lumon is one of EDG&apos;s featured premium glass enclosure
              systems. It gives homeowners, architects, builders, and commercial
              operators a cleaner way to add wind, rain, noise, and
              shoulder-season comfort without making a patio feel like a
              boxed-in addition. EDG uses Lumon where the system fits, and
              compares it against screens, fixed glass, sliding doors, and
              pergola integrations when another route would serve the project
              better.
            </p>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">
                Retractable Glass vs. a Fixed Room Addition
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                A fixed room addition is built to remain enclosed. Retractable
                glass walls are built around movement: panels can open, provide
                partial ventilation, or close when more weather protection is
                useful. They are uninsulated, single-glazed outdoor systems—not
                a substitute for a conditioned four-season room.
              </p>
              <p className="text-text-secondary leading-relaxed">
                As a system-agnostic design and supply partner, EDG specifies
                the right glass enclosure system for your project rather than
                forcing one product into every opening. Our Spring Grove
                showroom gives you a place to compare enclosure strategies
                before committing.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Where Lumon Belongs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <IconWrapper icon={Home} variant="brand" size="sm" />
                  <div>
                    <span className="text-text-primary font-bold">
                      Homeowners
                    </span>
                    <p className="text-text-secondary text-sm">
                      Turn a covered patio, balcony, or pergola bay into a
                      cleaner 3-season space that can still open when the
                      weather is good.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconWrapper icon={Building2} variant="brand" size="sm" />
                  <div>
                    <span className="text-text-primary font-bold">
                      Commercial Venues
                    </span>
                    <p className="text-text-secondary text-sm">
                      Help restaurants, hotels, clubs, and rooftops protect
                      high-value outdoor seating without hiding the atmosphere
                      guests came for.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconWrapper icon={Ruler} variant="brand" size="sm" />
                  <div>
                    <span className="text-text-primary font-bold">
                      Architects & Builders
                    </span>
                    <p className="text-text-secondary text-sm">
                      Specify a premium frameless glazing system with EDG
                      support for measurements, system fit, and installation
                      coordination.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FEATURED LUMON SYSTEMS ========== */}
      <Section className="section-lg border-border border-t">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Retractable + Sliding Glazing
              </div>
              <h2 className="section-title mb-6">
                Two Ways to Open a Frameless Glass Wall
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                The core choice is not just glass or no glass. It is how the
                wall should move. EDG compares retractable glass walls against
                sliding glass walls so the finished enclosure works with your
                furniture, roof structure, traffic flow, and view.
              </p>

              <div className="space-y-4">
                {lumonSystems.map((system) => (
                  <Card key={system.name} variant="muted" padding="lg">
                    <div className="text-edg-brand-text mb-2 text-xs font-bold tracking-wider uppercase">
                      {system.bestFor}
                    </div>
                    <h3 className="text-text-primary mb-3 text-xl font-bold">
                      {system.name}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {system.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-surface-dark relative aspect-[16/9] overflow-hidden">
                <Image
                  src={images.systems.enclosures.lumonPatio}
                  alt="Lumon retractable glass enclosure around a covered patio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card variant="default" padding="md">
                  <div className="text-text-primary mb-1 font-bold">
                    Retractable
                  </div>
                  <p className="text-text-secondary text-sm">
                    Independent retractable panels for maximum open-wall
                    flexibility.
                  </p>
                </Card>
                <Card variant="default" padding="md">
                  <div className="text-text-primary mb-1 font-bold">
                    Sliding
                  </div>
                  <p className="text-text-secondary text-sm">
                    Sliding panels that stack together when the space needs a
                    compact motion path.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES ========== */}
      <Section className="section-lg border-border bg-surface-muted border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Key Features</div>
            <h2 className="section-title mb-4">
              What Lumon Adds to the Category
            </h2>
            <p className="text-text-secondary">
              The best glass enclosure is not just a wall of glass. It is a
              complete plan for views, weather control, ventilation, structure,
              and daily use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="muted"
                padding="lg"
                className="group hover:border-edg-brand/20 transition-colors"
              >
                <IconWrapper
                  icon={feature.icon}
                  variant="brand"
                  size="lg"
                  className="mb-4"
                />
                <h3 className="text-text-primary mb-2 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS TABLE ========== */}
      <Section className="section-md border-border border-t">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Fit + Specification
              </div>
              <h2 className="section-title mb-6">
                Designed Around the Opening
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Glass enclosures are custom-measured systems. Before EDG
                recommends retractable, sliding, or another enclosure strategy,
                we look at the existing structure, roof strength, deck or slab
                condition, drainage, wind exposure, and how the space will be
                used.
              </p>

              <div className="space-y-4">
                <h3 className="text-text-primary font-bold">
                  What EDG Checks First
                </h3>
                {[
                  {
                    name: 'Opening and Structure',
                    description:
                      'Roof/header strength, deck or slab condition, plumb openings, drainage, and weather exposure.',
                  },
                  {
                    name: 'Use Case',
                    description:
                      'Daily seating, restaurant service, hot tub area, outdoor kitchen, roof deck, balcony, or quiet lounge space.',
                  },
                  {
                    name: 'Comfort Plan',
                    description:
                      'Screens, heaters, ventilation gaps, tinted glass, blinds, locks, and how the enclosure pairs with a pergola roof.',
                  },
                ].map((item) => (
                  <Card
                    key={item.name}
                    variant="default"
                    padding="md"
                    className="mb-4"
                  >
                    <div className="text-text-primary mb-1 font-bold">
                      {item.name}
                    </div>
                    <p className="text-text-secondary text-sm">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card variant="dark" padding="lg">
                <h3 className="text-text-inverse mb-6 text-xl font-bold">
                  System Specifications
                </h3>
                <div className="divide-border-inverse space-y-0 divide-y">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="text-text-inverse-muted text-sm">
                        {spec.label}
                      </span>
                      <span className="text-text-inverse text-right font-bold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="mt-8">
                <h3 className="text-text-primary mb-4 font-bold">
                  Installation Options
                </h3>
                <ul className="space-y-3">
                  {installOptions.map((option) => (
                    <li
                      key={option}
                      className="text-text-secondary flex items-center gap-3"
                    >
                      <Plus className="text-edg-brand h-4 w-4 shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== APPLICATIONS ========== */}
      <Section className="section-lg border-border border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Applications</div>
            <h2 className="section-title mb-4">Where Glass Enclosures Excel</h2>
            <p className="text-text-secondary">
              Lumon glass enclosures are strongest when the space needs
              protection, views, and the option to open back up.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card variant="muted" padding="lg">
              <div className="mb-4 flex items-center gap-3">
                <IconWrapper icon={Home} variant="brand" size="md" />
                <h3 className="text-text-primary text-xl font-bold">
                  Residential
                </h3>
              </div>
              <ul className="text-text-secondary space-y-3">
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>3-Season Rooms:</strong> Convert covered patios into
                    usable space for spring, summer, and fall.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>Pergola Enclosures:</strong> Pair glass walls with a
                    pergola roof for a protected outdoor room that still opens.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>Patio Enclosures:</strong> Reduce wind, rain, and
                    glare around outdoor lounges, hot tubs, and dining areas.
                  </span>
                </li>
              </ul>
              <Link
                href="/outdoor-rooms/pergola-glass-outdoor-room"
                className="text-edg-brand-text mt-6 inline-flex items-center text-sm font-bold tracking-wider uppercase"
              >
                Explore a residential pergola + glass room
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>

            <Card variant="muted" padding="lg">
              <div className="mb-4 flex items-center gap-3">
                <IconWrapper icon={Building2} variant="brand" size="md" />
                <h3 className="text-text-primary text-xl font-bold">
                  Hospitality
                </h3>
              </div>
              <ul className="text-text-secondary space-y-3">
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>Restaurant Patios:</strong> Protect premium outdoor
                    seats from shoulder-season weather and sudden wind.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>Hotel Terraces:</strong> Create premium guest
                    amenities with clean views and flexible opening control.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-edg-brand h-5 w-5 shrink-0" />
                  <span>
                    <strong>Rooftop Bars:</strong> Create more protected rooftop
                    venues without sacrificing the open-air experience.
                  </span>
                </li>
              </ul>
              <Link
                href="/commercial/restaurant-patio-enclosures"
                className="text-edg-brand-text mt-6 inline-flex items-center text-sm font-bold tracking-wider uppercase"
              >
                Plan a restaurant patio enclosure
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="section-md bg-surface-muted border-border border-t">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">Customization</div>
              <h2 className="section-title mb-6">
                Glass, Hardware, and Comfort Options
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                A good glass enclosure is not just panel sizing. EDG plans the
                Lumon system around how the room should feel on a cool evening,
                a buggy summer night, a windy dinner service, or a bright
                afternoon with glare coming through the glass.
              </p>

              <div className="space-y-4">
                {upgradeOptions.map((option) => (
                  <div
                    key={option.name}
                    className="border-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-text-primary font-bold">
                      {option.name}
                    </span>
                    <span className="text-text-secondary text-sm sm:text-right">
                      {option.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark relative aspect-square overflow-hidden">
                <Image
                  src={images.systems.enclosures.lumonDetail}
                  alt="Close-up of Lumon frameless sliding glass panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="bg-surface-dark relative aspect-square overflow-hidden">
                <Image
                  src={images.systems.enclosures.closedExterior}
                  alt="Glass enclosure with closed panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="bg-surface-dark relative col-span-2 aspect-square overflow-hidden">
                <Image
                  src={images.systems.enclosures.commercialNightExterior}
                  alt="Commercial glass enclosure at night"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PROCESS OVERVIEW ========== */}
      <Section className="section-lg border-border border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Our Process</div>
            <h2 className="section-title mb-4">From Concept to Completion</h2>
            <p className="text-text-secondary">
              Our streamlined process ensures your glass enclosure project is
              handled professionally from start to finish.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Compare Lumon glass, screens, pergolas, and other enclosure routes around your goals.',
              },
              {
                step: '02',
                title: 'Site Survey',
                desc: 'Measure the opening and review roof strength, deck condition, drainage, and exposure.',
              },
              {
                step: '03',
                title: 'System Design',
                desc: 'Select the opening style, glass, hardware, comfort add-ons, and permit-ready details.',
              },
              {
                step: '04',
                title: 'Installation',
                desc: 'Coordinate delivery, installation, final adjustment, and owner training.',
              },
            ].map((item) => (
              <Card
                key={item.step}
                variant="outline"
                padding="lg"
                className="text-center"
              >
                <div className="text-edg-brand mb-4 text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-text-primary mb-2 font-bold">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="section-md bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title mb-4">Common Questions</h2>
              <p className="text-text-secondary">
                Everything you need to know about frameless glass enclosures.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <h3 className="text-text-primary mb-3 font-bold">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="section-md border-border border-t">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">
              Complete Your Space
            </div>
            <h2 className="section-title mb-4">Related Products</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link key={product.name} href={product.href}>
                <Card
                  variant="muted"
                  padding="lg"
                  className="group hover:border-edg-brand/20 h-full transition-colors"
                >
                  <h3 className="text-text-primary group-hover:text-edg-brand-text mb-2 font-bold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="text-text-primary group-hover:text-edg-brand-text flex items-center text-sm font-bold tracking-wider uppercase transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SERVICE AREA LINKS ========== */}
      <Section className="section-sm bg-surface-muted border-border border-t">
        <Container>
          <div className="text-center">
            <p className="text-text-secondary mb-4">
              Looking for glass enclosure installation in your area?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/service-areas/chicago-il/glass-enclosures"
                className="text-edg-brand-text hover:underline"
              >
                Chicago glass enclosures
              </Link>
              <Link
                href="/service-areas/lake-county-il"
                className="text-edg-brand-text hover:underline"
              >
                Lake Forest
              </Link>
              <Link
                href="/service-areas/wilmette-il"
                className="text-edg-brand-text hover:underline"
              >
                Wilmette
              </Link>
              <Link
                href="/service-areas/lake-county-il"
                className="text-edg-brand-text hover:underline"
              >
                Highland Park
              </Link>
              <Link
                href="/service-areas/lake-geneva-wi"
                className="text-edg-brand-text hover:underline"
              >
                Lake Geneva
              </Link>
              <Link
                href="/service-areas/barrington-il"
                className="text-edg-brand-text hover:underline"
              >
                Barrington
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-surface-dark text-text-inverse py-32">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Plan the glass before the weather decides.
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-md text-xl">
                Explore Lumon glass enclosures with EDG and decide whether
                retractable glazing, sliding glazing, screens, heaters, or
                another enclosure strategy is the right fit for your space.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">Request a Quote</Button>
              </TrackedLink>
              <p className="text-text-inverse-muted mt-6 text-sm">
                Featured Lumon glass enclosure planning for homeowners,
                architects, builders, and commercial patios. Local installation
                available in the Chicago-Milwaukee corridor.
              </p>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="space-y-6">
                <h4 className="text-text-inverse text-lg font-bold tracking-wide uppercase">
                  Included in every project
                </h4>
                <ul className="text-text-inverse-muted space-y-4">
                  <li className="flex items-center gap-3">
                    <Plus className="text-edg-brand h-4 w-4 shrink-0" />
                    Site Survey & Laser Measure
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="text-edg-brand h-4 w-4 shrink-0" />
                    Engineering & Permit Support
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="text-edg-brand h-4 w-4 shrink-0" />
                    Professional Installation
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="text-edg-brand h-4 w-4 shrink-0" />
                    System Training & Documentation
                  </li>
                </ul>

                <div className="border-border-inverse border-t pt-6">
                  <TrackedPhoneLink href="tel:+18155810138">
                    <div className="text-text-inverse hover:text-edg-brand flex cursor-pointer items-center gap-3 transition-colors">
                      <Phone className="h-5 w-5" />
                      <span className="font-bold">(815) 581-0138</span>
                    </div>
                  </TrackedPhoneLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
