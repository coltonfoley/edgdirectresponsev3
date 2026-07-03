import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { PergolaConfiguratorClient } from './PergolaConfiguratorClient';
import {
  generateServiceSchema,
  generateProductSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';
import {
  Sun,
  CloudRain,
  Wifi,
  Lightbulb,
  Wind,
  Phone,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Home,
  Building2,
  Settings,
  Shield,
  ArrowLeft,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motorized Louvered Pergolas | Adjustable Roof Systems | EDG',
  description:
    'Premium motorized pergolas with 135° adjustable louvers. Manufacturer-flexible design and supply partner for professionals nationwide. Installation in the Chicago-Milwaukee corridor.',
  keywords: [
    'motorized pergolas',
    'louvered pergolas',
    'adjustable pergola',
    'pergola chicago',
    'pergola installation',
    'outdoor pergola',
  ],
  alternates: { canonical: '/systems/pergolas' },
  openGraph: {
    title: 'Motorized Louvered Pergolas | EDG Patio & Shade',
    description:
      'Architectural shade control with 135° of rotation. Sun when you want it, watertight seal when you do not.',
  },
};

// Gallery images for the hero - uses brand image set
const galleryImages = images.galleries.pergolas.map((src, index) => ({
  type: 'image' as const,
  src,
  alt:
    [
      'Precision-engineered aluminum louver detail',
      'Luxury poolside pergola installation',
      'Pergola with integrated LED lighting at dusk',
      'Smart home integration with motorized controls',
    ][index] || 'Motorized pergola installation',
}));

// Specifications data
const specifications = [
  { label: 'Maximum Span', value: 'Up to 24 feet' },
  { label: 'Post Options', value: '4-post, 2-post wall mount, cantilever' },
  { label: 'Material', value: 'Extruded aluminum alloy' },
  { label: 'Finish', value: 'Powder-coated, 15+ colors' },
  { label: 'Wind Rating', value: 'Up to 120 mph' },
  { label: 'Snow Load', value: 'Up to 40 psf' },
  { label: 'Louver Rotation', value: '135° (0-135°)' },
  { label: 'Control Options', value: 'Remote, smartphone, voice, sensors' },
];

// Key features
const keyFeatures = [
  {
    icon: Sun,
    title: 'Adjustable Louvers',
    description:
      'Our motorized pergolas feature louvers that rotate a full 135 degrees, giving you complete control over sunlight and shade. Open them partially for gentle filtered light and natural ventilation, or close them completely for full shade and rain protection. The precision-engineered louvers create an airtight seal when closed, keeping your outdoor space dry even during heavy rain.',
  },
  {
    icon: CloudRain,
    title: 'Integrated Rain Management',
    description:
      'Unlike traditional pergolas that let rain through, our systems feature a sophisticated internal gutter system hidden within the beams. When louvers close, rainwater is channeled through the frame and down the posts, directed away from your patio and outdoor furniture. No external gutters needed—just clean architectural lines that perform as beautifully as they look.',
  },
  {
    icon: Settings,
    title: 'Motorized Operation',
    description:
      'Control your pergola with the touch of a button. Our systems use whisper-quiet Somfy motors—the industry standard for reliability and performance. Adjust your louvers instantly from a handheld remote, wall switch, or smartphone app. Program favorite positions for one-touch recall of your preferred settings throughout the day.',
  },
  {
    icon: Wifi,
    title: 'Smart Home Integration',
    description:
      'Seamlessly integrate your pergola with your smart home ecosystem. Our systems work with Alexa, Google Home, and major home automation platforms. Create scenes that adjust lighting and louver position together, or schedule automatic adjustments based on time of day. Voice control means you can adjust your shade without putting down your drink.',
  },
  {
    icon: Lightbulb,
    title: 'LED Lighting Systems',
    description:
      'Extend your outdoor enjoyment into the evening with integrated LED lighting. Our lighting packages include perimeter strip lighting for ambient glow, recessed spotlights for task lighting over dining areas, and dimmable controls to set the perfect mood. All lighting is fully integrated into the frame—no visible wires or external fixtures.',
  },
  {
    icon: Wind,
    title: 'Wind & Snow Load Engineering',
    description:
      'Engineered for the demanding Chicago climate, our pergolas withstand wind speeds up to 120 mph and snow loads up to 40 pounds per square foot. Integrated wind sensors automatically open louvers during high winds to prevent damage, while the robust aluminum construction handles our heaviest snowfalls without deflection or stress.',
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We visit your site to understand your space, how you plan to use it, and your aesthetic preferences. We bring samples and discuss options tailored to your specific needs.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our team creates detailed 3D renderings of your pergola, showing exactly how it will look from every angle. We finalize dimensions, colors, and integrated features.',
  },
  {
    number: '03',
    title: 'Engineering',
    description:
      'Every project receives structural engineering review and permit-ready drawings. We handle all documentation required for your municipality.',
  },
  {
    number: '04',
    title: 'Installation',
    description:
      'Our certified installation crews handle every aspect of the build, from foundation preparation to final electrical connections. Most residential projects complete in 2-3 days.',
  },
  {
    number: '05',
    title: 'Care',
    description:
      'Optional care plans keep your pergola operating perfectly for years to come. Annual inspections, cleaning, and preventive maintenance ensure lasting performance.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How much does a motorized pergola cost?',
    answer:
      'Motorized pergola pricing depends on size, configuration, and features. Entry-level systems for small patios typically start around $25,000, while larger custom installations with integrated lighting, heating, and screens can range from $50,000 to $100,000+. We provide detailed quotes after an on-site consultation to ensure accuracy. Financing options are available for qualified buyers.',
  },
  {
    question: 'What is the installation timeline?',
    answer:
      'From contract signing to completion, most residential pergola projects take 8-12 weeks. This includes 2-3 weeks for engineering and permits, 4-6 weeks for manufacturing (depending on customization), and 2-3 days for on-site installation. Commercial projects or those requiring extensive site preparation may take longer. We provide a detailed timeline with every proposal.',
  },
  {
    question: 'Can you install a pergola on an existing deck?',
    answer:
      "Yes, we regularly install pergolas on existing decks, but the deck must be structurally capable of supporting the additional load. Our engineering team will evaluate your deck's framing, footings, and overall condition. In some cases, we may need to reinforce the deck structure or add additional support posts through the deck to the ground below. We handle all structural assessments as part of our consultation process.",
  },
  {
    question: 'Do motorized pergolas require maintenance?',
    answer:
      'Motorized pergolas are designed to be low-maintenance, but some care helps ensure optimal performance. We recommend rinsing the louvers and frame with a garden hose every few months to remove dirt and debris. The motor and tracks require no lubrication. Our optional care plans include annual professional cleaning, inspection, and preventive maintenance to catch any issues before they become problems.',
  },
  {
    question: 'What warranty do you offer?',
    answer:
      'Our motorized pergolas come with comprehensive warranty coverage: 10 years on the aluminum structure and powder-coat finish, 5 years on motors and electrical components, and 2 years on labor. We stand behind our installations and respond quickly to any warranty concerns. Extended warranty options are available for added peace of mind.',
  },
  {
    question: 'Are you locked into one manufacturer?',
    answer:
      'No. EDG is manufacturer-flexible. We are a dealer for proven pergola systems including Brustor, Azenco, and Sundance, but we start with the project: site exposure, mounting, drainage, controls, budget, and performance needs. The manufacturer is part of the toolkit after the job is understood.',
  },
];

// Related products
const relatedProducts = [
  {
    title: 'Retractable Screens',
    description:
      'Add privacy and wind protection with motorized zip screens that integrate seamlessly with your pergola.',
    href: '/systems/shades',
  },
  {
    title: 'Glass Enclosures',
    description:
      'Transform your outdoor space into a year-round room with motorized glass wall systems.',
    href: '/systems/enclosures',
  },
  {
    title: 'Outdoor Heating',
    description:
      'Extend your outdoor season with infrared heaters and fire features integrated into your pergola design.',
    href: '/systems/appliances',
  },
  {
    title: 'Lake Forest Pergola Planning',
    description:
      'Permit-aware North Shore guidance for premium patios, terraces, and outdoor kitchens.',
    href: '/service-areas/lake-forest-il/motorized-pergolas',
  },
  {
    title: 'Lake Geneva Pergola Planning',
    description:
      'Lakefront louvered roof guidance for wind, views, outdoor dining, screens, and permit review.',
    href: '/service-areas/lake-geneva-wi/motorized-pergolas',
  },
];

export default function PergolasPage() {
  // Generate schemas
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Louvered Pergola Installation',
    description:
      'Premium motorized pergolas with adjustable louvers for sun, shade, and rain control. Manufacturer-flexible recommendations for residential and commercial projects.',
    url: 'https://www.edgpatioshade.com/systems/pergolas',
    image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
  });

  const productSchema = generateProductSchema({
    name: 'Motorized Louvered Pergola',
    description:
      'Architectural aluminum pergola with 135° rotating louvers, integrated rain management, and smart home compatibility.',
    image: `https://www.edgpatioshade.com${images.pages.serviceAreas.barringtonPergola1}`,
  });

  const faqSchema = generateFAQSchema(faqs);

  // Combine schemas
  const schemas = [serviceSchema, productSchema, faqSchema];

  return (
    <main className="bg-surface min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="flex flex-col justify-center pt-32 pb-12 lg:min-h-screen">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Systems', href: '/systems' },
                { label: 'Motorized Pergolas' },
              ]}
            />
          </div>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
            {/* Content */}
            <div className="order-1 flex flex-col justify-center lg:col-span-5">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Core System
              </div>
              <h1 className="text-text-primary mb-8 text-5xl leading-[0.9] font-bold tracking-tighter md:text-7xl">
                The Motorized <br /> Pergola.
              </h1>
              <p className="text-text-secondary mb-10 max-w-md text-xl leading-relaxed">
                Architectural shade control. 135° of rotation gives you sun when
                you want it, and a watertight seal when you do not. Built for
                the Chicago climate by the specialists who know it best.
              </p>

              <div className="mb-12 flex flex-col gap-4">
                <TrackedLink href="/guides/pergola-system-fit-review?source=pergolas_hero">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a System Fit Review
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="hover:text-edg-brand-text flex cursor-pointer items-center gap-3 text-sm font-bold tracking-wider uppercase transition-colors">
                    <span className="bg-border-strong h-px w-8" />
                    Speak to a Designer
                  </div>
                </TrackedPhoneLink>
                <Link
                  href="/guides/motorized-pergola-planning"
                  className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                >
                  Planning a premium pergola? Start with the complete planning
                  guide.
                </Link>
                <Link
                  href="/service-areas/chicago-il/motorized-pergolas"
                  className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                >
                  Looking for a city-specific option? View our Chicago pergola
                  page.
                </Link>
                <Link
                  href="/service-areas/southwest-florida"
                  className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                >
                  Planning on the Gulf Coast? Review hurricane-rated Southwest
                  Florida pergolas.
                </Link>
              </div>

              {/* Quick Specs */}
              <div className="border-border border-t pt-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specifications.slice(0, 4).map((spec) => (
                    <div key={spec.label}>
                      <span className="text-text-muted mb-1 block text-xs tracking-wider uppercase">
                        {spec.label}
                      </span>
                      <span className="text-text-primary font-bold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="order-2 lg:col-span-7">
              <ProductGallery items={galleryImages} />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW SECTION ========== */}
      <Section className="section-md border-border border-t">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src={images.brand.hero.lifestyle}
                alt="Family enjoying outdoor living space under motorized pergola"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">What Is It?</div>
              <h2 className="section-title mb-6">
                A Louvered Roof That Adapts to Your Day
              </h2>
              <div className="text-text-secondary space-y-4 leading-relaxed">
                <p>
                  A motorized louvered pergola is an architectural outdoor
                  structure with a roof made of rotating aluminum blades. Unlike
                  traditional pergolas with fixed slats or fabric canopies, the
                  louvers rotate up to 135 degrees to control sunlight,
                  ventilation, and rain protection on demand.
                </p>
                <p>
                  When open, the louvers allow filtered sunlight and natural
                  airflow, creating a cooling updraft effect. When closed, they
                  form a solid, watertight roof that channels rain through
                  internal gutters and down the posts. All controlled with the
                  touch of a button, voice command, or automated sensors.
                </p>
                <p>
                  For homeowners across the Chicago-Milwaukee corridor, this
                  means finally having an outdoor space that works as hard as
                  your indoor spaces—usable in bright sun, light rain, or that
                  perfect summer evening. For builders and architects
                  nationwide, it means specifying a system your clients will
                  love, backed by a partner who handles the complexity.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="text-edg-brand-text h-4 w-4" />
                  <span>Manufacturer-flexible specification</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="text-edg-brand-text h-4 w-4" />
                  <span>Nationwide design & supply</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="text-edg-brand-text h-4 w-4" />
                  <span>Local installation crews</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES SECTION ========== */}
      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand text-edg-brand mb-4">
              Features
            </div>
            <h2 className="section-title mb-6">Engineered for Performance</h2>
            <p className="text-text-inverse-muted text-lg">
              Every component is designed to work together, creating an outdoor
              structure that outperforms and outlasts conventional alternatives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <Card key={feature.title} variant="dark" padding="lg">
                <IconWrapper
                  icon={feature.icon}
                  variant="dark"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-text-inverse-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS TABLE ========== */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">
                Technical Details
              </div>
              <h2 className="section-title">Specifications</h2>
            </div>

            <Card variant="default" padding="none" className="overflow-hidden">
              {specifications.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specifications.length - 1
                      ? 'border-border border-b'
                      : ''
                  }`}
                >
                  <span className="text-text-secondary">{spec.label}</span>
                  <span className="text-text-primary font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </Card>

            <p className="text-text-muted mt-6 text-center text-sm">
              Custom specifications available for commercial projects and unique
              architectural requirements.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== APPLICATIONS SECTION ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Use Cases</div>
            <h2 className="section-title">Designed for How You Live</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Residential */}
            <Card
              variant="muted"
              padding="lg"
              className="relative overflow-hidden"
            >
              <div className="relative -m-8 mb-6 h-64">
                <Image
                  src={images.brand.context.pool}
                  alt="Residential pergola with outdoor dining area by the pool"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Home className="text-edg-brand-text h-5 w-5" />
                <span className="label-editorial">Residential</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                Your Backyard, Elevated
              </h3>
              <ul className="text-text-secondary space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Patios and terraces with precise shade control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Poolside lounges that stay cool and dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    Decks and outdoor kitchens protected from the elements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Spa enclosures for year-round hydrotherapy</span>
                </li>
              </ul>
            </Card>

            {/* Commercial */}
            <Card
              variant="muted"
              padding="lg"
              className="relative overflow-hidden"
            >
              <div className="relative -m-8 mb-6 h-64">
                <Image
                  src={images.brand.context.lake}
                  alt="Commercial pergola installation with lounge seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="text-edg-brand-text h-5 w-5" />
                <span className="label-editorial">Commercial</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                Spaces That Drive Revenue
              </h3>
              <ul className="text-text-secondary space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Restaurant patios that operate rain or shine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Hotel pool decks with automated comfort control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Country club terraces for member events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span>Corporate campuses with outdoor meeting spaces</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="section-md bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Enhancements
              </div>
              <h2 className="section-title mb-6">Options & Upgrades</h2>
              <p className="text-text-inverse-muted mb-8 leading-relaxed">
                Customize your pergola with integrated systems that extend
                functionality and create a truly personalized outdoor
                environment.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <IconWrapper icon={Wind} variant="dark" size="md" />
                  <div>
                    <h4 className="mb-1 font-bold">Retractable Screens</h4>
                    <p className="text-text-inverse-muted text-sm">
                      Zip-track motorized screens for wind, privacy, and insect
                      protection that integrates seamlessly with your pergola
                      frame.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <IconWrapper icon={Sun} variant="dark" size="md" />
                  <div>
                    <h4 className="mb-1 font-bold">Heating Systems</h4>
                    <p className="text-text-inverse-muted text-sm">
                      Infrared heaters mounted to the frame provide warmth
                      without the orange glow, extending your outdoor season by
                      months.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <IconWrapper icon={Shield} variant="dark" size="md" />
                  <div>
                    <h4 className="mb-1 font-bold">Sensor Packages</h4>
                    <p className="text-text-inverse-muted text-sm">
                      Wind and rain sensors automatically adjust louvers and
                      retract screens to protect your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/pergolas/pergola-hero.jpg"
                alt="Pergola with integrated privacy screens and poolside location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CONFIGURATOR SECTION ========== */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="label-editorial-brand mb-4">Customize</div>
            <h2 className="section-title mb-4">Make It Yours</h2>
            <p className="text-text-secondary">
              Every project is custom-configured to your specifications. Start
              with the fundamentals and build from there.
            </p>
          </div>
          <PergolaConfiguratorClient />
        </Container>
      </Section>

      {/* ========== PROCESS SECTION ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">How We Work</div>
            <h2 className="section-title">From Vision to Reality</h2>
            <p className="text-text-secondary mt-4">
              A proven process refined over hundreds of installations. We handle
              the complexity so you can enjoy the results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-surface-muted mb-4 text-5xl font-bold">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="bg-border absolute top-12 -right-3 hidden h-px w-6 md:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM CTA ========== */}
      <Section className="section-md bg-surface-muted border-border border-y">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">Visit Us</div>
              <h2 className="section-title mb-6">See It in Person</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our Spring Grove showroom features working displays of multiple
                pergola systems. Experience the smooth operation, test the
                controls, and see color samples in natural light. Most
                competitors do not have a showroom—this is one way we are
                different.
              </p>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="text-edg-brand-text h-5 w-5 shrink-0" />
                <div>
                  <div className="font-bold">1802 Holian Drive</div>
                  <div className="text-text-secondary">
                    Spring Grove, IL 60081
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface border-border border p-8">
              <h3 className="mb-4 text-lg font-bold">
                Schedule a Showroom Visit
              </h3>
              <p className="text-text-secondary mb-6 text-sm">
                See the products, meet the team, and get your questions
                answered. Perfect for homeowners and trade partners alike.
              </p>
              <TrackedLink href="/contact?type=showroom">
                <Button className="w-full">Book Appointment</Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
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

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">
              Complete Your Space
            </div>
            <h2 className="section-title">Related Products</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Card
                key={product.title}
                variant="default"
                padding="lg"
                className="group"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                  {product.title}
                </h3>
                <p className="text-text-secondary mb-6 text-sm">
                  {product.description}
                </p>
                <TrackedLink href={product.href}>
                  <div className="flex cursor-pointer items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </TrackedLink>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== BACK TO SYSTEMS ========== */}
      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link
              href="/systems"
              className="text-text-secondary hover:text-edg-brand-text inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to All Systems</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/service-areas/chicago-il/motorized-pergolas">
                <Button variant="outline" size="sm">
                  Chicago Pergolas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/service-areas/lake-forest-il/motorized-pergolas">
                <Button variant="outline" size="sm">
                  Lake Forest Pergolas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/service-areas/lake-geneva-wi/motorized-pergolas">
                <Button variant="outline" size="sm">
                  Lake Geneva Pergolas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/systems/shades">
                <Button variant="outline" size="sm">
                  Explore Screens
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/systems/enclosures">
                <Button variant="outline" size="sm">
                  Explore Enclosures
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-surface-dark text-text-inverse section-lg">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to check system fit?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-md text-xl">
                Send photos, rough dimensions, location, budget, and what the
                space needs to do. EDG will help narrow the system direction
                before you chase the wrong quote.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href="/guides/pergola-system-fit-review?source=pergolas_bottom">
                  <Button size="lg">Get a System Fit Review</Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" /> Call (815) 581-0138
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Why Work With EDG?
                </h4>
                <ul className="text-text-inverse-muted space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    Manufacturer-flexible specification
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    Nationwide design & supply
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    Local installation crews
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    Physical showroom in Spring Grove
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    Trade partner programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
