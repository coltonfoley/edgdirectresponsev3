import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Thermometer,
  Zap,
  Settings,
  Droplets,
  Grid3X3,
  Phone,
  ChevronRight,
  MessageSquare,
  Ruler,
  Wrench,
  Home,
  Building2,
} from 'lucide-react';
import type { Metadata } from 'next';
import {
  generateServiceSchema,
  generateProductSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Outdoor Heating Systems | Infrared Heaters & Fire Features | EDG',
  description:
    'Extend your outdoor season with premium infrared heaters and fire features. Professional installation integrated with pergolas and enclosures. Serving Chicago & Milwaukee.',
  alternates: {
    canonical: '/systems/heating',
  },
  keywords: ['outdoor heating', 'infrared heaters', 'patio heaters', 'fire features', 'outdoor fire pits', 'pergola heating'],
  openGraph: {
    title: 'Outdoor Heating Systems | EDG Outdoor Living',
    description:
      'Infrared radiant heating and fire features for year-round outdoor comfort.',
  },
};

// Gallery images using brand image set
const galleryImages = images.galleries.heating.map((src, index) => ({
  type: 'image' as const,
  src,
  alt: [
    'Family enjoying heated outdoor living space',
    'Infrared heater detail installation',
    'Outdoor living in winter with heating system',
  ][index] || 'Outdoor heating system installation',
}));

const features = [
  {
    icon: Thermometer,
    title: 'Infrared Radiant Heat',
    description:
      'Unlike conventional heaters that warm the air, infrared heaters transfer heat directly to people and objects. This creates patio-style warmth that is not lost to wind, making it significantly more efficient and effective for outdoor spaces. The radiant heat feels natural and comfortable, similar to the warmth of the sun.',
  },
  {
    icon: Settings,
    title: 'Smart Controls',
    description:
      'Modern heating systems integrate with your smart home ecosystem. Control temperature, set timers, and create schedules from your smartphone or voice assistant. Program different zones to heat only the areas in use, maximizing efficiency while maintaining comfort where you need it.',
  },
  {
    icon: Zap,
    title: 'Pergola Integration',
    description:
      'Our heating systems are designed for seamless integration with louvered pergolas. Recessed mounting options preserve clean sightlines while directing heat exactly where needed. The heaters work in harmony with your pergola structure, becoming part of the design rather than an afterthought.',
  },
  {
    icon: Flame,
    title: 'Fuel Options',
    description:
      'Choose from electric infrared, natural gas, or propane heating systems. Electric units offer precise control and easy installation. Gas systems provide higher heat output for larger spaces. We specify the right fuel type based on your space, utility access, and heating requirements.',
  },
  {
    icon: Droplets,
    title: 'Weather Resistance',
    description:
      'All heating systems carry IP65+ ratings, ensuring protection against dust and water jets. Marine-grade aluminum housings resist corrosion from humidity and salt air. These units are built to withstand Midwest winters, coastal conditions, and everything in between.',
  },
  {
    icon: Grid3X3,
    title: 'Zoned Heating',
    description:
      'Divide your outdoor space into independent heating zones. Heat the dining area for dinner, then shift warmth to the lounge area afterward. Each zone operates independently with its own controls, allowing you to customize comfort while managing energy consumption efficiently.',
  },
];

const specs = [
  { label: 'Heat Output', value: '3,000 - 6,000+ watts' },
  { label: 'Coverage Area', value: '10x10 ft to 20x20 ft per unit' },
  { label: 'Mounting Options', value: 'Wall, ceiling, freestanding' },
  { label: 'Control Types', value: 'Remote, smart home, manual' },
  { label: 'Fuel Types', value: 'Electric, natural gas, propane' },
  { label: 'Weather Rating', value: 'IP65+ for outdoor use' },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We discuss how you use your outdoor space, your heating goals, and budget considerations. Our team evaluates your existing structure and utility access.',
  },
  {
    icon: Ruler,
    title: 'Site Assessment',
    description:
      'Our technicians measure your space, assess mounting locations, and determine optimal heater placement for maximum coverage and efficiency.',
  },
  {
    icon: Settings,
    title: 'System Design',
    description:
      'We specify the right heaters, controls, and fuel type for your specific application. Design includes electrical and gas requirements.',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Licensed technicians handle all electrical and gas connections. We mount, wire, and test your system for safe, reliable operation.',
  },
];

const residentialApps = [
  'Patios and decks',
  'Outdoor kitchens',
  'Poolside lounges',
  'Covered dining areas',
  'Screened porches',
];

const commercialApps = [
  'Restaurant patios',
  'Hotel terraces',
  'Rooftop bars',
  'Event venues',
  'Country clubs',
];

const upgradeOptions = [
  {
    title: 'Fire Tables & Fire Pits',
    description:
      'Gas-powered fire features add ambiance and supplemental heat. Available in various sizes and styles to complement your space.',
  },
  {
    title: 'Smart Home Integration',
    description:
      'Connect heating controls to your existing home automation system. Voice control, geofencing, and automated schedules available.',
  },
  {
    title: 'Wind Sensors',
    description:
      'Automatic shutoff sensors detect unsafe wind conditions and disable heaters until conditions improve. Adds safety and peace of mind.',
  },
  {
    title: 'Custom Mounting Brackets',
    description:
      'Specialized brackets for unique installation scenarios. Beam mounts, post attachments, and freestanding options available.',
  },
];

const faqs = [
  {
    question: 'How much does outdoor heating cost?',
    answer:
      'Outdoor heating costs vary based on the scope and fuel type. A basic single electric heater installation typically ranges from $1,500 to $3,500. Multi-zone electric systems for larger spaces generally run $5,000 to $12,000. Gas-fired systems with higher BTU output range from $8,000 to $20,000 depending on the number of units and gas line requirements. During your consultation, we provide detailed estimates based on your specific space and heating requirements.',
  },
  {
    question: "What's better: infrared heaters or fire features?",
    answer:
      'Both serve different purposes. Infrared heaters provide efficient, controllable heat that warms people directly without heating the air. They are ideal for consistent comfort in dining and seating areas. Fire features add ambiance and supplemental heat but are less efficient for space heating. Many clients choose both—infrared heaters for functional warmth and a fire table for atmosphere. We help you determine the right combination for your space and usage patterns.',
  },
  {
    question: 'Can heaters be added to an existing pergola?',
    answer:
      'Yes, heating systems can be retrofitted to existing pergolas, provided there is adequate structural support and utility access. Our team assesses your current structure for mounting locations and weight capacity. We also evaluate electrical or gas line access. In many cases, heaters integrate cleanly with existing louvered pergolas, extending their usable season by several months.',
  },
  {
    question: 'How much does it cost to run outdoor heaters?',
    answer:
      'Operating costs depend on fuel type and usage. Electric infrared heaters typically cost $0.50 to $2.00 per hour to operate, depending on local electricity rates and heater wattage. Natural gas systems generally cost $1.50 to $4.00 per hour. Propane costs vary with market prices but typically fall between electric and natural gas. Smart controls and zoning help minimize costs by heating only occupied areas.',
  },
  {
    question: 'Are electric or gas heaters better?',
    answer:
      'The best choice depends on your specific situation. Electric heaters offer precise control, lower upfront costs, and simpler installation—ideal when electrical access is readily available. Gas heaters provide higher heat output for larger spaces and operate more economically for extended use—better when heating large commercial spaces or when gas is already available. We assess your space, utility access, and usage patterns to recommend the optimal solution.',
  },
  {
    question: 'How long do outdoor heaters last?',
    answer:
      'Quality outdoor heating systems typically last 10 to 15 years with proper maintenance. Infrared elements in electric heaters may need replacement after 5,000 to 10,000 hours of operation. Gas heaters require periodic inspection of burners and ignition systems. We specify commercial-grade equipment with robust warranties and provide maintenance recommendations to maximize system lifespan.',
  },
];

const relatedProducts = [
  {
    title: 'Louvered Pergolas',
    description:
      'Motorized roof systems that provide shade and shelter for your outdoor space.',
    href: '/systems/pergolas',
  },
  {
    title: 'Glass Enclosures',
    description:
      'Create a true four-season outdoor room with motorized glass wall systems.',
    href: '/systems/enclosures',
  },
  {
    title: 'Outdoor Kitchens',
    description:
      'Complete your outdoor living space with grills, appliances, and cabinetry.',
    href: '/systems/appliances',
  },
];

export default function HeatingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Outdoor Heating Systems',
    description:
      'Infrared heating and fire feature installation for outdoor living spaces.',
    url: 'https://www.edgpatioshade.com/systems/heating',
    image: `https://www.edgpatioshade.com${images.brand.detail.heater}`,
  });

  const productSchema = generateProductSchema({
    name: 'Outdoor Heating Systems',
    description:
      'Premium infrared heaters and fire features for extending outdoor living seasons.',
    category: 'Outdoor Heating',
    image: `https://www.edgpatioshade.com${images.brand.detail.heater}`,
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="min-h-screen">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO WITH GALLERY ========== */}
      <section className="bg-surface pt-8 pb-16 dark:bg-surface-dark">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery items={galleryImages} />

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="label-editorial-brand mb-2">Complete Your Space</p>
                <h1 className="page-title mb-4">Outdoor Heating Systems</h1>
                <p className="text-text-secondary text-xl leading-relaxed">
                  Extend your outdoor season with premium infrared heaters and
                  fire features. Integrated solutions designed to work
                  seamlessly with your pergola or enclosure.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Infrared radiant heat',
                  'Smart home controls',
                  'Pergola integration',
                  'Multiple fuel options',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row">
                <Link
                  href="/contact?type=price&product=heating"
                  className="flex-1"
                >
                  <Button size="lg" className="h-full w-full rounded-none">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138" className="flex-1">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-full w-full rounded-none"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Button>
                </a>
              </div>

              <p className="text-text-muted text-sm">
                Professional design, supply, and installation for residential and
                commercial projects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-surface-muted section-md dark:bg-surface-dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Outdoor heating systems transform covered patios and pergolas into
              year-round living spaces. While our core expertise is motorized
              pergolas, retractable screens, and glass enclosures, we understand
              that the true value of these structures emerges when they can be
              comfortably used regardless of temperature. A louvered pergola
              protects from sun and rain, but integrated heating extends its
              utility from early spring through late fall.
            </p>
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              We specify and install two categories of outdoor heating:
              infrared radiant heaters and fire features. Infrared systems use
              electromagnetic radiation to warm people and objects directly,
              rather than heating the air. This makes them remarkably efficient
              for outdoor applications where wind would otherwise dissipate
              conventional heat. Fire features—tables, pits, and linear
              burners—provide both warmth and ambiance, creating focal points
              that draw people together.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our heating solutions are designed as complementary systems that
              integrate seamlessly with your primary outdoor structure. We
              specify heaters with mounting options suited to your pergola
              design, controls that work with your smart home ecosystem, and
              fuel types that match your utility access and usage patterns.
              Whether you need a single heater for a residential patio or a
              zoned system for a commercial restaurant, we handle the design,
              installation, and commissioning.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES ========== */}
      <Section className="bg-surface-dark section-md text-text-inverse">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Built for Outdoor Living</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-inverse-muted">
              Technical specifications and features that deliver reliable
              comfort in real outdoor conditions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} variant="dark" padding="lg">
                <div className="mb-4">
                  <IconWrapper icon={feature.icon} variant="dark" size="lg" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-text-inverse-muted">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS TABLE ========== */}
      <Section className="bg-surface section-md dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Specification Highlights</h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Technical specifications vary by model and fuel type. We specify
                the right system for your specific application.
              </p>
            </div>

            <div className="overflow-hidden rounded-none border border-border bg-surface-muted dark:border-border-inverse dark:bg-surface-dark-elevated">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specs.length - 1
                      ? 'border-b border-border dark:border-border-inverse'
                      : ''
                  }`}
                >
                  <span className="text-text-muted">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== APPLICATIONS/USE CASES ========== */}
      <Section className="bg-surface-muted section-md dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <p className="label-editorial-brand mb-2">Applications</p>
            <h2 className="section-title mb-4">Designed For Your Space</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Residential */}
            <Card variant="default" padding="lg">
              <div className="mb-6 flex items-center gap-4">
                <IconWrapper icon={Home} variant="brand" size="lg" />
                <div>
                  <h3 className="text-xl font-bold">Residential</h3>
                  <p className="text-text-secondary text-sm">
                    Home patios and outdoor living spaces
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {residentialApps.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Commercial */}
            <Card variant="default" padding="lg">
              <div className="mb-6 flex items-center gap-4">
                <IconWrapper icon={Building2} variant="brand" size="lg" />
                <div>
                  <h3 className="text-xl font-bold">Commercial</h3>
                  <p className="text-text-secondary text-sm">
                    Hospitality and venue applications
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {commercialApps.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="bg-surface section-md dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <p className="label-editorial-brand mb-2">Options</p>
            <h2 className="section-title mb-4">Upgrades & Accessories</h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Enhance your heating system with these additional options.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {upgradeOptions.map((option) => (
              <Card key={option.title} variant="muted" padding="lg">
                <h3 className="mb-2 text-lg font-bold">{option.title}</h3>
                <p className="text-text-secondary">{option.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== PROCESS OVERVIEW ========== */}
      <Section className="bg-surface-muted section-md dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <p className="label-editorial-brand mb-2">Our Process</p>
            <h2 className="section-title mb-4">From Consultation to Comfort</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="bg-edg-brand/10 mb-6 flex h-16 w-16 items-center justify-center rounded-none">
                  <step.icon className="text-edg-brand-text dark:text-edg-brand h-8 w-8" />
                </div>
                <div className="bg-surface-dark mb-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white dark:bg-white dark:text-black">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-surface section-md dark:bg-black">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
              <p className="text-text-secondary">
                Common questions about outdoor heating systems.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-border pb-6 dark:border-border-inverse"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="bg-surface-muted section-md dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Complete Your Outdoor Space</h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Pair your heating system with these primary products for the
              ultimate outdoor living experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block rounded-none border border-border bg-surface p-6 transition-colors hover:border-edg-brand dark:border-border-inverse dark:bg-surface-dark-elevated"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">
                  {product.title}
                </h3>
                <p className="text-text-secondary mb-4">{product.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-edg-brand-text dark:text-edg-brand">
                  Learn more{' '}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="bg-surface-dark relative overflow-hidden section-md text-text-inverse">
        <div className="from-edg-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Extend Your Outdoor Season
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-text-inverse-muted">
              Let's design the perfect heating solution for your outdoor space.
              Visit our Spring Grove showroom to experience infrared heating
              firsthand, or schedule a consultation for your project.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?type=price&product=heating">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-none px-10 text-lg transition-all hover:scale-105"
                >
                  Request Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none px-10 text-lg text-white hover:bg-white/10"
                >
                  Visit Showroom <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
