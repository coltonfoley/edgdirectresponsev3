import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
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

export const metadata: Metadata = {
  title: 'Frameless Glass Enclosures | Retractable Glass Walls | EDG',
  description: 'Frameless retractable glass wall systems for year-round outdoor living. Slide & turn operation, 10mm tempered safety glass. Design & supply nationwide.',
  keywords: ['glass enclosures', 'frameless glass walls', 'retractable glass', 'patio enclosures', 'glass patio walls'],
  openGraph: {
    title: 'Frameless Glass Enclosures | Retractable Glass Walls | EDG',
    description: 'Frameless retractable glass wall systems for year-round outdoor living. Slide & turn operation, 10mm tempered safety glass.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Outdoor Living',
  },
  alternates: { canonical: '/systems/enclosures' },
};

// Gallery images for the client component
const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
    alt: 'Commercial glass enclosure at night with outdoor dining',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg',
    alt: 'Retractable glass panels open on commercial patio during the day',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg',
    alt: 'Glass wall system with elegant hanging lights',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-glass-enclosure-interior-wood-deck-01.jpg',
    alt: 'Interior view of glass enclosure on wood deck',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/glass-enclosure-closed-exterior.jpg',
    alt: 'Frameless glass enclosure closed showing weather seal',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/glass-enclosure-partial-open.jpg',
    alt: 'Glass enclosure panels partially open for ventilation',
  },
];

// Quick specs for hero section
const specs = [
  { label: 'Maximum Height', value: '118 inches' },
  { label: 'Glass Thickness', value: '10mm Tempered' },
  { label: 'Operation', value: 'Slide & Turn' },
  { label: 'Profile Style', value: 'Frameless' },
];

// Detailed specifications table
const specifications = [
  { label: 'Maximum Height', value: '118 inches (9.8 feet)' },
  { label: 'Glass Thickness', value: '10mm tempered safety glass' },
  { label: 'Operation Type', value: 'Slide & Turn / Frameless Sliding' },
  { label: 'Profile Style', value: 'Frameless (no vertical mullions)' },
  { label: 'Wind Rating', value: 'High wind load rated' },
  { label: 'Track Options', value: 'Recessed Floor or Surface Mounted' },
  { label: 'Opening Style', value: 'Individual panel rotation' },
];

// Key features with detailed descriptions
const features = [
  {
    icon: Maximize2,
    title: 'True Frameless Design',
    description: 'No vertical mullions interrupt your view. Our system uses individual glass panels that stack completely against the wall when open, giving you 100% of your opening. When closed, the seamless glass wall creates an unobstructed connection to the outdoors.',
  },
  {
    icon: Sparkles,
    title: 'Slide & Turn Operation',
    description: 'Each panel slides independently along the top track and pivots open against the wall. This innovative mechanism allows for curved configurations and corner openings without fixed posts—perfect for architectural spaces that demand flexibility.',
  },
  {
    icon: Shield,
    title: '10mm Tempered Safety Glass',
    description: 'Premium tempered safety glass provides impact resistance and thermal stability. Engineered to withstand high wind loads and temperature fluctuations, it meets or exceeds all building code requirements for structural glazing applications.',
  },
  {
    icon: Droplets,
    title: 'Weather Protection',
    description: 'Precision-engineered gaskets and weather strips seal out rain, wind, and drafts. The bottom track includes a water management system that channels moisture away from your interior space, keeping your enclosure dry in any weather.',
  },
  {
    icon: Wind,
    title: 'Impact Rated Options',
    description: 'Available with impact-rated glass for coastal and high-wind zones. These systems meet Florida building code requirements and provide additional security without sacrificing the frameless aesthetic.',
  },
  {
    icon: Plus,
    title: 'Easy Cleaning Access',
    description: 'The slide & turn mechanism allows each panel to pivot inward for cleaning both sides from inside your space. No need for ladders or exterior access—maintenance is simple and safe.',
  },
];

// Configuration options
const configurations = [
  {
    name: 'Slide & Turn',
    description: 'Panels slide individually and pivot open against the wall. Best for corners, curves, and spaces where you want maximum opening flexibility.',
  },
  {
    name: 'Frameless Sliding',
    description: 'Multi-track system where panels slide behind each other. Lower profile threshold option ideal for seamless indoor-outdoor transitions.',
  },
];

// Install options
const installOptions = [
  'Recessed Floor Track',
  'Surface Mounted Track',
  'Corner Opening (No Post)',
  'Keyed Cylinder Lock',
];

// Upgrade options
const upgradeOptions = [
  { name: 'Track Mounting', value: 'Recessed or Surface Mounted' },
  { name: 'Glass Tint', value: 'Clear, Bronze, or Gray Options' },
  { name: 'Screen Integration', value: 'Retractable Insect Screens' },
  { name: 'Locking Mechanisms', value: 'Standard or Keyed Cylinder' },
];

// Related products
const relatedProducts = [
  { name: 'Louvered Pergolas', href: '/systems/pergolas', description: 'Motorized adjustable roof systems' },
  { name: 'Retractable Screens', href: '/systems/screens', description: 'Motorized insect and sun screens' },
  { name: 'Outdoor Heating', href: '/systems/heating', description: 'Infrared heaters and fire features' },
];

// FAQ data for schema
const faqs = [
  {
    question: 'How much do glass enclosures cost?',
    answer: 'Glass enclosure costs vary based on size, configuration, and installation complexity. A typical residential installation ranges from $800-$1,200 per linear foot, including frameless glass panels, track system, and professional installation. Commercial projects may have different pricing based on scale and engineering requirements. Contact us for a detailed quote based on your specific project.',
  },
  {
    question: 'What is the difference between glass enclosures and sunrooms?',
    answer: 'Glass enclosures use frameless, retractable glass panels that open completely, giving you 100% of your opening when desired. Sunrooms are typically fixed structures with windows and doors. Our glass enclosures provide the weather protection of a sunroom with the flexibility of an open patio—you control the environment based on the season and occasion.',
  },
  {
    question: 'Can glass enclosures be installed on existing patios?',
    answer: 'Yes, glass enclosures can be retrofitted to most existing covered patios, decks, and pergolas. The structure must have adequate support and a level mounting surface. Our team conducts a thorough site survey to assess your existing space and determine the best mounting approach for your specific application.',
  },
  {
    question: 'How do you clean frameless glass walls?',
    answer: 'The slide & turn operation makes cleaning simple. Each panel pivots inward, allowing you to clean both sides from inside your space. Use standard glass cleaner and a microfiber cloth. The frameless design means no tracks or frames to collect debris—just smooth glass surfaces that are easy to maintain.',
  },
  {
    question: 'Are glass enclosures energy efficient?',
    answer: 'Our 10mm tempered glass provides excellent thermal performance. Optional low-E coatings can further improve energy efficiency by reflecting heat while allowing light through. When combined with weather stripping and proper seals, glass enclosures create a thermally efficient barrier that extends your outdoor season without major heating or cooling costs.',
  },
];

// Generate schemas
const serviceSchema = generateServiceSchema({
  name: 'Frameless Glass Enclosure Installation',
  description: 'Professional installation of frameless retractable glass wall systems for year-round outdoor living. Design and supply services nationwide.',
  url: 'https://www.edgpatioshade.com/systems/enclosures',
  image: 'https://www.edgpatioshade.com/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
});

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Frameless Glass Enclosure System',
  description: 'Retractable frameless glass wall system with slide & turn operation. 10mm tempered safety glass, no vertical mullions, weather sealed.',
  brand: { '@type': 'Brand', name: 'EDG Patio & Shade' },
  category: 'Glass Enclosures',
  material: '10mm Tempered Safety Glass',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: 'https://www.edgpatioshade.com/systems/enclosures',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Operate Slide & Turn Glass Enclosure Panels',
  description: 'Learn how to operate frameless glass enclosure panels with the slide & turn mechanism.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Unlock the Panel',
      text: 'Release the locking mechanism at the handle location to free the panel for movement.',
    },
    {
      '@type': 'HowToStep',
      name: 'Slide the Panel',
      text: 'Gently slide the panel along the top track to your desired position.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pivot Open',
      text: 'Rotate the panel inward or outward (depending on configuration) to pivot it open against the wall.',
    },
    {
      '@type': 'HowToStep',
      name: 'Stack Panels',
      text: 'Repeat for each panel, stacking them neatly against the wall to open your entire space.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Year-Round Living
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-primary leading-[0.9]">
                Glass <br /> Enclosures.
              </h1>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-md">
                Frameless retractable glass walls that stack completely open. Add protected square footage without the construction costs of a traditional addition.
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
            <h2 className="section-title mb-6">Frameless Glass Enclosures for Year-Round Outdoor Living</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Frameless glass enclosures represent the pinnacle of outdoor living technology. Unlike traditional sunrooms or patio enclosures, 
              these systems use individual tempered glass panels that slide and pivot independently, giving you complete control over your space. 
              When closed, you have a weather-protected room with unobstructed views. When open, the panels stack neatly against the wall, 
              restoring your full opening to the outdoors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">Slide & Turn vs Traditional Systems</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Traditional sliding glass doors always block at least 50% of your opening. Our slide & turn system eliminates this limitation. 
                Each panel operates independently, sliding along a top track and pivoting open against the wall. This means you can open 
                your entire space—or just a single panel for ventilation. The frameless design eliminates vertical mullions, creating 
                a seamless glass wall that maximizes natural light and views.
              </p>
              <p className="text-text-secondary leading-relaxed">
                As a system-agnostic design and supply partner, we specify the right glass enclosure system for your project—not what we are 
                contractually obligated to sell. Our Spring Grove showroom features operating systems so you can experience the 
                slide & turn mechanism firsthand.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Who Are Glass Enclosures For?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Home} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Homeowners</span>
                    <p className="text-text-secondary text-sm">Extend your outdoor season with a 3-season room that opens completely when weather permits.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Building2} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Commercial Venues</span>
                    <p className="text-text-secondary text-sm">Restaurants, hotels, and rooftop bars maximize revenue with year-round patio seating.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <IconWrapper icon={Ruler} variant="brand" size="sm" />
                  <div>
                    <span className="font-bold text-text-primary">Architects & Builders</span>
                    <p className="text-text-secondary text-sm">Specify frameless systems for modern residential and commercial projects nationwide.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES ========== */}
      <Section className="section-lg border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Key Features</div>
            <h2 className="section-title mb-4">Engineered for Performance</h2>
            <p className="text-text-secondary">
              Every component is designed for durability, ease of use, and seamless integration with your architecture.
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
      <Section className="section-md bg-surface-muted border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="label-editorial-brand mb-4">Technical Specifications</div>
              <h2 className="section-title mb-6">Built to Perform</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Our frameless glass enclosure systems are engineered to meet demanding commercial and residential requirements. 
                From high wind loads to precision weather sealing, every specification is designed for long-term performance.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold text-text-primary">Configuration Options</h3>
                {configurations.map((config) => (
                  <Card key={config.name} variant="default" padding="md" className="mb-4">
                    <div className="font-bold text-text-primary mb-1">{config.name}</div>
                    <p className="text-text-secondary text-sm">{config.description}</p>
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
              From residential patios to commercial rooftops, frameless glass enclosures transform how spaces are used.
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
                  <span><strong>Sunrooms:</strong> Create a bright, open space that connects to your landscape year-round.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Patio Enclosures:</strong> Protect existing outdoor living areas from wind and weather.</span>
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
                  <span><strong>Restaurant Patios:</strong> Extend outdoor dining season and maximize seating revenue.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-edg-brand shrink-0" />
                  <span><strong>Hotel Terraces:</strong> Create premium guest amenities with stunning views.</span>
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
              <h2 className="section-title mb-6">Options & Upgrades</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Tailor your glass enclosure system to match your aesthetic and functional requirements. 
                From track mounting to glass tint, every detail can be customized.
              </p>
              
              <div className="space-y-4">
                {upgradeOptions.map((option) => (
                  <div key={option.name} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="font-bold text-text-primary">{option.name}</span>
                    <span className="text-text-secondary text-sm">{option.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square bg-surface-dark overflow-hidden">
                <Image
                  src="/images/enclosures/glass-detail.jpg"
                  alt="Frameless glass detail showing edge seal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square bg-surface-dark overflow-hidden">
                <Image
                  src="/images/enclosures/glass-closed.jpg"
                  alt="Glass enclosure panels closed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square bg-surface-dark overflow-hidden col-span-2">
                <Image
                  src="/images/enclosures/commercial-glass-enclosure-day-exterior-01.jpg"
                  alt="Commercial glass enclosure exterior view"
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
              { step: '01', title: 'Consultation', desc: 'Discuss your vision, requirements, and budget with our design team.' },
              { step: '02', title: 'Site Survey', desc: 'Precise measurements and structural assessment of your space.' },
              { step: '03', title: 'Engineering', desc: 'Custom system design with permit-ready documentation.' },
              { step: '04', title: 'Installation', desc: 'Professional installation by our certified crews.' },
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
              <Link href="/service-areas/lake-forest-il" className="text-edg-brand-text hover:underline">Lake Forest</Link>
              <Link href="/service-areas/wilmette-il" className="text-edg-brand-text hover:underline">Wilmette</Link>
              <Link href="/service-areas/highland-park-il" className="text-edg-brand-text hover:underline">Highland Park</Link>
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
                Extends your season.
              </h2>
              <p className="text-xl text-text-inverse-muted mb-8 max-w-md">
                Turn your covered patio into a 3-season room instantly. Visit our Spring Grove showroom to see operating systems.
              </p>
              <TrackedLink href="/contact?type=price&product=enclosure">
                <Button size="lg">
                  Start Quote
                </Button>
              </TrackedLink>
              <p className="mt-6 text-sm text-text-inverse-muted">
                Design & supply partner for architects, builders, and dealers nationwide. 
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
