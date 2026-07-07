import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Card } from '@/components/ui/Card';
import { EnclosuresGallery } from './EnclosuresGallery';
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
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Lumon Glass Enclosures | Retractable Glass Walls | EDG',
  description: 'Lumon glass enclosures and frameless retractable glass wall systems for patios, pergolas, balconies, roof decks, and restaurant spaces. Designed and installed by EDG.',
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
    title: 'Lumon Glass Enclosures | Retractable Glass Walls | EDG',
    description: 'Featured Lumon LGR and LGS glass enclosure systems for patios, pergolas, roof decks, and restaurant spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: { canonical: '/systems/enclosures' },
};

// Gallery images for the client component - ALL SHOW REAL GLASS
const galleryImages = [
  { type: 'image' as const, src: images.systems.enclosures.lumonPatio, alt: 'Lumon retractable glass patio enclosure with frameless panels' },
  { type: 'image' as const, src: images.systems.enclosures.framelessGlass, alt: 'Frameless sliding glass walls residential' },
  { type: 'image' as const, src: images.systems.enclosures.lumonDetail, alt: 'Lumon sliding glass wall detail with frameless tempered glass panels' },
  { type: 'image' as const, src: images.systems.enclosures.partialOpen, alt: 'Sliding glass panels partially open' },
  { type: 'image' as const, src: images.systems.enclosures.closedExterior, alt: 'Glass enclosure with closed panels' },
  { type: 'image' as const, src: images.systems.enclosures.commercialDayExterior, alt: 'Commercial glass enclosure for restaurant patio seating' },
];

// Quick specs for hero section
const specs = [
  { label: 'Featured Brand', value: 'Lumon LGR + LGS' },
  { label: 'Glass Type', value: 'Tempered Panels' },
  { label: 'Best Fit', value: 'Patios + Pergolas' },
  { label: 'Season Goal', value: '3-Season Comfort' },
];

// Detailed specifications table
const specifications = [
  { label: 'Featured Systems', value: 'Lumon LGR retractable + LGS sliding' },
  { label: 'Glass Options', value: 'Tempered safety glass, project-specific thickness' },
  { label: 'Profile Style', value: 'Frameless sightlines with aluminum tracks' },
  { label: 'Opening Style', value: 'Fully open, partial ventilation, or closed windbreak' },
  { label: 'Structure Fit', value: 'Existing roof, beam, deck, and drainage reviewed' },
  { label: 'Applications', value: 'Patios, pergolas, balconies, roof decks, restaurants' },
  { label: 'Comfort Add-Ons', value: 'Screens, heaters, blinds, locks, and tinted glass' },
];

// Key features with detailed descriptions
const features = [
  {
    icon: Maximize2,
    title: 'Frameless Views',
    description: 'Lumon glass wall systems use frameless tempered panels, so the enclosure protects the space without turning the view into a grid of bulky window frames.',
  },
  {
    icon: Sparkles,
    title: 'Retractable or Sliding Operation',
    description: 'EDG helps choose between Lumon LGR retractable panels that stack open at the side and Lumon LGS sliding panels that move together along a lower track.',
  },
  {
    icon: Shield,
    title: 'Tempered Safety Glass',
    description: 'Panel thickness, color, and hardware are selected around the opening, exposure, and structure. Clear and tinted glass options can tune the balance of view, glare, and privacy.',
  },
  {
    icon: Droplets,
    title: 'Wind and Rain Control',
    description: 'A glass enclosure helps block wind-driven rain, drafts, outdoor noise, and shoulder-season chill while keeping the space ventilated and openable when the weather improves.',
  },
  {
    icon: Wind,
    title: 'Outdoor-Air Flexibility',
    description: 'Open one panel for airflow, stack the system for a fully open patio, or close the wall to protect dining, lounge, and entertainment areas from changing weather.',
  },
  {
    icon: Plus,
    title: 'EDG Fit Check',
    description: 'We evaluate the roof/header, deck, drainage, layout, screens, heaters, and permit path before recommending Lumon or another glass enclosure system.',
  },
];

// Featured Lumon systems
const lumonSystems = [
  {
    name: 'Lumon LGR Retractable Glazing',
    bestFor: 'Best when the goal is a clear, fully open wall.',
    description: 'Panels move independently, retract inward or outward at the end of the track, and stack together. LGR is strong for patios, pergolas, and restaurant spaces where full opening flexibility matters.',
  },
  {
    name: 'Lumon LGS Sliding Glazing',
    bestFor: 'Best when space is tight or a one-motion sliding wall is preferred.',
    description: 'Panels slide along the lower track and follow one another to the stack point. LGS can be a better fit where furniture, traffic flow, or roof structure makes retractable stacking less practical.',
  },
];

// Install options
const installOptions = [
  'Existing roof and beam review',
  'Deck, slab, and drainage check',
  'LGR/LGS operation recommendation',
  'Permit and engineering coordination',
];

// Upgrade options
const upgradeOptions = [
  { name: 'Operation', value: 'Lumon LGR retractable or LGS sliding' },
  { name: 'Glass', value: 'Clear, tinted, and thickness options by project' },
  { name: 'Comfort', value: 'Infrared heaters, screens, blinds, and ventilation planning' },
  { name: 'Hardware', value: 'Locks, handles, colors, and pet-safe ventilation options' },
];

// Related products
const relatedProducts = [
  { name: 'Louvered Pergolas', href: '/systems/pergolas', description: 'Motorized adjustable roof systems' },
  { name: 'Retractable Screens', href: '/systems/shades', description: 'Motorized insect and sun screens' },
  { name: 'Pergola + Glass Outdoor Room', href: '/outdoor-rooms/pergola-glass-outdoor-room', description: 'A protected patio plan with roof, glass, and comfort options' },
  { name: 'Outdoor Heating', href: '/systems/appliances', description: 'Infrared heaters and fire features' },
];

// FAQ data for schema
const faqs = [
  {
    question: 'What is a Lumon glass enclosure?',
    answer: 'A Lumon glass enclosure is a frameless tempered-glass wall system for patios, pergolas, balconies, roof decks, and restaurant spaces. Panels can slide, retract, or stack so the space can be open, partially ventilated, or protected from wind and rain.',
  },
  {
    question: 'Should I choose Lumon LGR or Lumon LGS?',
    answer: 'Lumon LGR is the retractable system, with panels that operate independently and stack open at the side. Lumon LGS is the sliding system, with panels that move together along a lower track. EDG recommends the system after reviewing your opening size, roof strength, furniture layout, and how much clear opening you want.',
  },
  {
    question: 'Is a Lumon glass enclosure the same as a four-season room?',
    answer: 'No. Lumon glass enclosures are best understood as premium 3-season or season-extending systems. They help control wind, rain, noise, glare, and comfort, but they are not the same as a fully insulated, conditioned room addition unless the project is designed that way from the start.',
  },
  {
    question: 'Can Lumon glass be installed on an existing patio or pergola?',
    answer: 'Often, yes. The opening needs a suitable roof or header, a sound deck or slab, and a plan for drainage and movement. EDG measures the site and checks structure before recommending Lumon LGR, Lumon LGS, or another enclosure approach.',
  },
  {
    question: 'How much do Lumon glass enclosures cost?',
    answer: 'Pricing is project-specific. The system choice, opening size, glass options, structural prep, freight, installation, screens, heaters, and permits all affect the final number. EDG prices the complete installed project after a site review rather than quoting material-only numbers out of context.',
  },
  {
    question: 'Can a Lumon enclosure work with screens, heaters, or shades?',
    answer: 'Yes, when the site allows it. Many glass enclosure projects pair with retractable insect screens, infrared heaters, blinds, motorized shades, or a pergola roof. EDG plans those pieces together so the finished space works as one outdoor living system.',
  },
];

// Generate schemas
const serviceSchema = {
  ...generateServiceSchema({
    name: 'Lumon Glass Enclosure Design and Installation',
    description: 'Design and installation of Lumon LGR and LGS frameless glass enclosure systems for patios, pergolas, roof decks, balconies, and commercial outdoor spaces.',
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
  name: 'How EDG Plans a Lumon Glass Enclosure',
  description: 'The planning steps EDG uses before recommending a Lumon LGR or LGS glass enclosure system.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Review the Structure',
      text: 'Measure the opening and review the roof, header, slab, deck, drainage, and exposure.',
    },
    {
      '@type': 'HowToStep',
      name: 'Choose LGR or LGS',
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
    <main className="bg-surface min-h-screen">
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
      <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Featured Lumon Glass Systems
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-primary leading-[0.9]">
                Lumon Glass <br /> Enclosures.
              </h1>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-md">
                Retractable and sliding frameless glass walls for patios, pergolas, balconies, roof decks, and restaurant spaces. EDG designs the right Lumon enclosure around your structure, weather exposure, and budget.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <TrackedLink href="/contact?type=price&product=enclosure">
                  <Button size="lg" className="w-full sm:w-auto">
                    Configure System
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-edg-brand-text transition-colors">
                    <span className="h-px w-8 bg-black/20"></span>
                    Speak to a designer
                  </div>
                </TrackedPhoneLink>
                <Link
                  href="/service-areas/chicago-il/glass-enclosures"
                  className="text-sm font-medium text-edg-brand-text transition-colors hover:text-edg-brand"
                >
                  Planning in the city? See our Chicago glass enclosure page.
                </Link>
                <Link
                  href="/service-areas/southwest-florida"
                  className="text-sm font-medium text-edg-brand-text transition-colors hover:text-edg-brand"
                >
                  Planning for coastal wind? See Southwest Florida outdoor living systems.
                </Link>
              </div>

              {/* Quick Specs */}
              <div className="border-t border-border pt-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specs.map((s) => (
                    <div key={s.label}>
                      <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{s.label}</span>
                      <span className="font-bold text-text-primary">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[4/5] bg-surface-muted overflow-hidden">
                <EnclosuresGallery items={galleryImages} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="section-md bg-surface-muted border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="label-editorial-brand mb-4">System Overview</div>
            <h2 className="section-title mb-6">Premium Frameless Glass Enclosures for Outdoor Living</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Lumon is one of EDG&apos;s featured premium glass enclosure systems. It gives homeowners, architects, builders, and commercial operators
              a cleaner way to add wind, rain, noise, and shoulder-season comfort without making a patio feel like a boxed-in addition. EDG uses Lumon
              where the system fits, and compares it against screens, fixed glass, sliding doors, and pergola integrations when another route would serve the project better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">Lumon vs Traditional Patio Enclosures</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Traditional patio enclosures usually behave like fixed rooms or standard sliding doors. Lumon glass walls are built around movement:
                panels can be opened, partially ventilated, or closed as a windbreak. That makes the category a strong fit for covered patios,
                pergolas, restaurant patios, and roof decks where the view and open-air feeling still matter.
              </p>
              <p className="text-text-secondary leading-relaxed">
                As a system-agnostic design and supply partner, EDG specifies the right glass enclosure system for your project rather than forcing
                one product into every opening. Our Spring Grove showroom gives you a place to compare enclosure strategies before committing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Where Lumon Belongs</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Home} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Homeowners</span>
                    <p className="text-text-secondary text-sm">Turn a covered patio, balcony, or pergola bay into a cleaner 3-season space that can still open when the weather is good.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Building2} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Commercial Venues</span>
                    <p className="text-text-secondary text-sm">Help restaurants, hotels, clubs, and rooftops protect high-value outdoor seating without hiding the atmosphere guests came for.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Ruler} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Architects & Builders</span>
                    <p className="text-text-secondary text-sm">Specify a premium frameless glazing system with EDG support for measurements, system fit, and installation coordination.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FEATURED LUMON SYSTEMS ========== */}
      <Section className="section-lg border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4">Lumon LGR + LGS</div>
              <h2 className="section-title mb-6">Two Ways to Open a Frameless Glass Wall</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                The core Lumon choice is not just glass or no glass. It is how the wall should move. EDG compares Lumon retractable glass walls
                against Lumon sliding glass walls so the finished enclosure works with your furniture, roof structure, traffic flow, and view.
              </p>

              <div className="space-y-4">
                {lumonSystems.map((system) => (
                  <Card key={system.name} variant="muted" padding="lg">
                    <div className="text-xs font-bold uppercase tracking-wider text-edg-brand-text mb-2">
                      {system.bestFor}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-text-primary">{system.name}</h3>
                    <p className="text-text-secondary leading-relaxed">{system.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-[16/9] bg-surface-dark overflow-hidden">
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
                  <div className="font-bold text-text-primary mb-1">LGR</div>
                  <p className="text-text-secondary text-sm">Independent retractable panels for maximum open-wall flexibility.</p>
                </Card>
                <Card variant="default" padding="md">
                  <div className="font-bold text-text-primary mb-1">LGS</div>
                  <p className="text-text-secondary text-sm">Sliding panels that stack together when the space needs a compact motion path.</p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES ========== */}
      <Section className="section-lg border-t border-border bg-surface-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Key Features</div>
            <h2 className="section-title mb-4">What Lumon Adds to the Category</h2>
            <p className="text-text-secondary">
              The best glass enclosure is not just a wall of glass. It is a complete plan for views, weather control, ventilation, structure, and daily use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} variant="muted" padding="lg" className="group hover:border-edg-brand/20 transition-colors">
                <IconWrapper icon={feature.icon} variant="brand" size="lg" className="mb-4" />
                <h3 className="text-lg font-bold mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS TABLE ========== */}
      <Section className="section-md border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="label-editorial-brand mb-4">Fit + Specification</div>
              <h2 className="section-title mb-6">Designed Around the Opening</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Lumon glass enclosures are custom-measured systems. Before EDG recommends LGR, LGS, or another enclosure strategy, we look at
                the existing structure, roof strength, deck or slab condition, drainage, wind exposure, and how the space will be used.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold text-text-primary">What EDG Checks First</h3>
                {[
                  {
                    name: 'Opening and Structure',
                    description: 'Roof/header strength, deck or slab condition, plumb openings, drainage, and weather exposure.',
                  },
                  {
                    name: 'Use Case',
                    description: 'Daily seating, restaurant service, hot tub area, outdoor kitchen, roof deck, balcony, or quiet lounge space.',
                  },
                  {
                    name: 'Comfort Plan',
                    description: 'Screens, heaters, ventilation gaps, tinted glass, blinds, locks, and how the enclosure pairs with a pergola roof.',
                  },
                ].map((item) => (
                  <Card key={item.name} variant="default" padding="md" className="mb-4">
                    <div className="font-bold text-text-primary mb-1">{item.name}</div>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card variant="dark" padding="lg">
                <h3 className="text-xl font-bold mb-6 text-text-inverse">System Specifications</h3>
                <div className="space-y-0 divide-y divide-border-inverse">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-4">
                      <span className="text-text-inverse-muted text-sm">{spec.label}</span>
                      <span className="font-bold text-text-inverse text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="mt-8">
                <h3 className="font-bold text-text-primary mb-4">Installation Options</h3>
                <ul className="space-y-3">
                  {installOptions.map((option) => (
                    <li key={option} className="flex items-center gap-3 text-text-secondary">
                      <Plus className="h-4 w-4 text-edg-brand shrink-0" />
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
      <Section className="section-lg border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Applications</div>
            <h2 className="section-title mb-4">Where Glass Enclosures Excel</h2>
            <p className="text-text-secondary">
              Lumon glass enclosures are strongest when the space needs protection, views, and the option to open back up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="muted" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <IconWrapper icon={Home} variant="brand" size="md" />
                <h3 className="text-xl font-bold text-text-primary">Residential</h3>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>3-Season Rooms:</strong> Convert covered patios into usable space for spring, summer, and fall.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Pergola Enclosures:</strong> Pair glass walls with a pergola roof for a protected outdoor room that still opens.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Patio Enclosures:</strong> Reduce wind, rain, and glare around outdoor lounges, hot tubs, and dining areas.</span>
                </li>
              </ul>
            </Card>

            <Card variant="muted" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <IconWrapper icon={Building2} variant="brand" size="md" />
                <h3 className="text-xl font-bold text-text-primary">Commercial</h3>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Restaurant Patios:</strong> Protect premium outdoor seats from shoulder-season weather and sudden wind.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Hotel Terraces:</strong> Create premium guest amenities with clean views and flexible opening control.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Rooftop Bars:</strong> Weatherproof rooftop venues without sacrificing the open-air experience.</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="section-md bg-surface-muted border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4">Customization</div>
              <h2 className="section-title mb-6">Glass, Hardware, and Comfort Options</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                A good glass enclosure is not just panel sizing. EDG plans the Lumon system around how the room should feel on a cool evening,
                a buggy summer night, a windy dinner service, or a bright afternoon with glare coming through the glass.
              </p>
              
              <div className="space-y-4">
                {upgradeOptions.map((option) => (
                  <div key={option.name} className="flex flex-col gap-1 py-3 border-b border-border sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-bold text-text-primary">{option.name}</span>
                    <span className="text-text-secondary text-sm sm:text-right">{option.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square bg-surface-dark overflow-hidden">
                <Image
                  src={images.systems.enclosures.lumonDetail}
                  alt="Close-up of Lumon frameless sliding glass panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square bg-surface-dark overflow-hidden">
                <Image
                  src={images.systems.enclosures.closedExterior}
                  alt="Glass enclosure with closed panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square bg-surface-dark overflow-hidden col-span-2">
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
      <Section className="section-lg border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Our Process</div>
            <h2 className="section-title mb-4">From Concept to Completion</h2>
            <p className="text-text-secondary">
              Our streamlined process ensures your glass enclosure project is handled professionally from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Compare Lumon glass, screens, pergolas, and other enclosure routes around your goals.' },
              { step: '02', title: 'Site Survey', desc: 'Measure the opening and review roof strength, deck condition, drainage, and exposure.' },
              { step: '03', title: 'System Design', desc: 'Select LGR, LGS, glass, hardware, comfort add-ons, and permit-ready details.' },
              { step: '04', title: 'Installation', desc: 'Coordinate delivery, installation, final adjustment, and owner training.' },
            ].map((item) => (
              <Card key={item.step} variant="outline" padding="lg" className="text-center">
                <div className="text-edg-brand font-bold text-3xl mb-4">{item.step}</div>
                <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="section-md bg-surface-muted border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title mb-4">Common Questions</h2>
              <p className="text-text-secondary">
                Everything you need to know about frameless glass enclosures.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <h3 className="font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="section-md border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <div className="label-editorial-brand mb-4">Complete Your Space</div>
            <h2 className="section-title mb-4">Related Products</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.name} href={product.href}>
                <Card variant="muted" padding="lg" className="h-full group hover:border-edg-brand/20 transition-colors">
                  <h3 className="font-bold text-text-primary mb-2 group-hover:text-edg-brand-text transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">{product.description}</p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-text-primary group-hover:text-edg-brand-text transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SERVICE AREA LINKS ========== */}
      <Section className="section-sm bg-surface-muted border-t border-border">
        <Container>
          <div className="text-center">
            <p className="text-text-secondary mb-4">Looking for glass enclosure installation in your area?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/service-areas/chicago-il/glass-enclosures" className="text-edg-brand-text hover:underline">Chicago glass enclosures</Link>
              <Link href="/service-areas/lake-county-il" className="text-edg-brand-text hover:underline">Lake Forest</Link>
              <Link href="/service-areas/wilmette-il" className="text-edg-brand-text hover:underline">Wilmette</Link>
              <Link href="/service-areas/lake-county-il" className="text-edg-brand-text hover:underline">Highland Park</Link>
              <Link href="/service-areas/lake-geneva-wi" className="text-edg-brand-text hover:underline">Lake Geneva</Link>
              <Link href="/service-areas/barrington-il" className="text-edg-brand-text hover:underline">Barrington</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-surface-dark text-text-inverse py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Plan the glass before the weather decides.
              </h2>
              <p className="text-xl text-text-inverse-muted mb-8 max-w-md">
                Explore Lumon glass enclosures with EDG and decide whether LGR, LGS, screens, heaters, or another enclosure strategy is the right fit for your space.
              </p>
              <TrackedLink href="/contact?type=price&product=enclosure">
                <Button size="lg">
                  Start Quote
                </Button>
              </TrackedLink>
              <p className="mt-6 text-sm text-text-inverse-muted">
                Featured Lumon glass enclosure planning for homeowners, architects, builders, and commercial patios.
                Local installation available in the Chicago-Milwaukee corridor.
              </p>
            </div>
            <div className="border-l border-border-inverse pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide text-text-inverse">Included in every project</h4>
                <ul className="space-y-4 text-text-inverse-muted">
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand shrink-0" />
                    Site Survey & Laser Measure
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand shrink-0" />
                    Engineering & Permit Support
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand shrink-0" />
                    Professional Installation
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand shrink-0" />
                    System Training & Documentation
                  </li>
                </ul>
                
                <div className="pt-6 border-t border-border-inverse">
                  <TrackedPhoneLink href="tel:+18155810138">
                    <div className="flex items-center gap-3 text-text-inverse hover:text-edg-brand transition-colors cursor-pointer">
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
    </main>
  );
}
