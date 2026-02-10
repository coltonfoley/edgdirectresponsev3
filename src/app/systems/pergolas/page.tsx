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
    'Premium motorized pergolas with 135° adjustable louvers. System-agnostic design & supply partner for professionals nationwide. Installation in Chicago-Milwaukee corridor.',
  keywords: ['motorized pergolas', 'louvered pergolas', 'adjustable pergola', 'pergola chicago', 'pergola installation', 'outdoor pergola'],
  alternates: { canonical: '/systems/pergolas' },
  openGraph: {
    title: 'Motorized Louvered Pergolas | EDG Outdoor Living',
    description:
      'Architectural shade control with 135° of rotation. Sun when you want it, watertight seal when you do not.',
  },
};

// Gallery images for the hero - uses brand image set
const galleryImages = images.galleries.pergolas.map((src, index) => ({
  type: 'image' as const,
  src,
  alt: [
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
      'Yes, we regularly install pergolas on existing decks, but the deck must be structurally capable of supporting the additional load. Our engineering team will evaluate your deck\'s framing, footings, and overall condition. In some cases, we may need to reinforce the deck structure or add additional support posts through the deck to the ground below. We handle all structural assessments as part of our consultation process.',
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
      'No—we are a system-agnostic design and supply partner. Unlike many competitors who only sell one brand, we work with multiple leading manufacturers including Renson, Brustor, and others. This allows us to recommend the right system for your specific project, budget, and performance requirements rather than pushing a single product line.',
  },
];

// Related products
const relatedProducts = [
  {
    title: 'Retractable Screens',
    description: 'Add privacy and wind protection with motorized zip screens that integrate seamlessly with your pergola.',
    href: '/systems/screens',
  },
  {
    title: 'Glass Enclosures',
    description: 'Transform your outdoor space into a year-round room with motorized glass wall systems.',
    href: '/systems/glass-enclosures',
  },
  {
    title: 'Outdoor Heating',
    description: 'Extend your outdoor season with infrared heaters and fire features integrated into your pergola design.',
    href: '/systems/appliances',
  },
];

export default function PergolasPage() {
  // Generate schemas
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Louvered Pergola Installation',
    description:
      'Premium motorized pergolas with adjustable louvers for sun, shade, and rain control. System-agnostic recommendations for residential and commercial projects.',
    url: 'https://www.edgpatioshade.com/systems/pergolas',
    image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`, 
  });

  const productSchema = generateProductSchema({
    name: 'Motorized Louvered Pergola',
    description:
      'Architectural aluminum pergola with 135° rotating louvers, integrated rain management, and smart home compatibility.',
    image: 'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-01.jpg',
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
      <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-edg-brand" />
                Core System
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-primary leading-[0.9]">
                The Motorized <br /> Pergola.
              </h1>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-md">
                Architectural shade control. 135° of rotation gives you sun when you want it, 
                and a watertight seal when you do not. Built for the Chicago climate by the 
                specialists who know it best.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <TrackedLink href="/contact?type=price&product=pergola">
                  <Button size="lg" className="w-full sm:w-auto">
                    Configure Your System
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-edg-brand-text transition-colors">
                    <span className="h-px w-8 bg-border-strong" />
                    Speak to a Designer
                  </div>
                </TrackedPhoneLink>
              </div>

              {/* Quick Specs */}
              <div className="border-t border-border pt-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specifications.slice(0, 4).map((spec) => (
                    <div key={spec.label}>
                      <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">
                        {spec.label}
                      </span>
                      <span className="font-bold text-text-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[4/5] bg-surface-muted overflow-hidden">
                <ProductGallery items={galleryImages} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW SECTION ========== */}
      <Section className="section-md border-t border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
              <h2 className="section-title mb-6">A Louvered Roof That Adapts to Your Day</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  A motorized louvered pergola is an architectural outdoor structure with a roof 
                  made of rotating aluminum blades. Unlike traditional pergolas with fixed slats 
                  or fabric canopies, the louvers rotate up to 135 degrees to control sunlight, 
                  ventilation, and rain protection on demand.
                </p>
                <p>
                  When open, the louvers allow filtered sunlight and natural airflow, creating 
                  a cooling updraft effect. When closed, they form a solid, watertight roof that 
                  channels rain through internal gutters and down the posts. All controlled with 
                  the touch of a button, voice command, or automated sensors.
                </p>
                <p>
                  For homeowners across the Chicago-Milwaukee corridor, this means finally 
                  having an outdoor space that works as hard as your indoor spaces—usable in 
                  bright sun, light rain, or that perfect summer evening. For builders and 
                  architects nationwide, it means specifying a system your clients will love, 
                  backed by a partner who handles the complexity.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-edg-brand-text" />
                  <span>System-agnostic recommendations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-edg-brand-text" />
                  <span>Nationwide design & supply</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-edg-brand-text" />
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4 text-edg-brand">Features</div>
            <h2 className="section-title mb-6">Engineered for Performance</h2>
            <p className="text-text-inverse-muted text-lg">
              Every component is designed to work together, creating an outdoor structure 
              that outperforms and outlasts conventional alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => (
              <Card key={feature.title} variant="dark" padding="lg">
                <IconWrapper icon={feature.icon} variant="dark" size="lg" className="mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="label-editorial-brand mb-4">Technical Details</div>
              <h2 className="section-title">Specifications</h2>
            </div>

            <Card variant="default" padding="none" className="overflow-hidden">
              {specifications.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specifications.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <span className="text-text-secondary">{spec.label}</span>
                  <span className="font-semibold text-text-primary">{spec.value}</span>
                </div>
              ))}
            </Card>

            <p className="text-center text-text-muted text-sm mt-6">
              Custom specifications available for commercial projects and unique architectural requirements.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== APPLICATIONS SECTION ========== */}
      <Section className="section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Use Cases</div>
            <h2 className="section-title">Designed for How You Live</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <Card variant="muted" padding="lg" className="relative overflow-hidden">
              <div className="relative h-64 mb-6 -m-8 mb-6">
                <Image
                  src={images.brand.context.pool}
                  alt="Residential pergola with outdoor dining area by the pool"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-5 w-5 text-edg-brand-text" />
                <span className="label-editorial">Residential</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Backyard, Elevated</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Patios and terraces with precise shade control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Poolside lounges that stay cool and dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Decks and outdoor kitchens protected from the elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Spa enclosures for year-round hydrotherapy</span>
                </li>
              </ul>
            </Card>

            {/* Commercial */}
            <Card variant="muted" padding="lg" className="relative overflow-hidden">
              <div className="relative h-64 mb-6 -m-8 mb-6">
                <Image
                  src={images.brand.context.lake}
                  alt="Commercial pergola installation with lounge seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-edg-brand-text" />
                <span className="label-editorial">Commercial</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Spaces That Drive Revenue</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Restaurant patios that operate rain or shine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Hotel pool decks with automated comfort control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <span>Country club terraces for member events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4 text-edg-brand">Enhancements</div>
              <h2 className="section-title mb-6">Options & Upgrades</h2>
              <p className="text-text-inverse-muted mb-8 leading-relaxed">
                Customize your pergola with integrated systems that extend functionality 
                and create a truly personalized outdoor environment.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <IconWrapper icon={Wind} variant="dark" size="md" />
                  <div>
                    <h4 className="font-bold mb-1">Retractable Screens</h4>
                    <p className="text-sm text-text-inverse-muted">
                      Zip-track motorized screens for wind, privacy, and insect protection 
                      that integrates seamlessly with your pergola frame.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <IconWrapper icon={Sun} variant="dark" size="md" />
                  <div>
                    <h4 className="font-bold mb-1">Heating Systems</h4>
                    <p className="text-sm text-text-inverse-muted">
                      Infrared heaters mounted to the frame provide warmth without the 
                      orange glow, extending your outdoor season by months.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <IconWrapper icon={Shield} variant="dark" size="md" />
                  <div>
                    <h4 className="font-bold mb-1">Sensor Packages</h4>
                    <p className="text-sm text-text-inverse-muted">
                      Wind and rain sensors automatically adjust louvers and retract 
                      screens to protect your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src={images.brand.detail.louver}
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Customize</div>
            <h2 className="section-title mb-4">Make It Yours</h2>
            <p className="text-text-secondary">
              Every project is custom-configured to your specifications. Start with the 
              fundamentals and build from there.
            </p>
          </div>
          <PergolaConfiguratorClient />
        </Container>
      </Section>

      {/* ========== PROCESS SECTION ========== */}
      <Section className="section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">How We Work</div>
            <h2 className="section-title">From Vision to Reality</h2>
            <p className="text-text-secondary mt-4">
              A proven process refined over hundreds of installations. We handle the complexity 
              so you can enjoy the results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-surface-muted mb-4">{step.number}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM CTA ========== */}
      <Section className="section-md bg-surface-muted border-y border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4">Visit Us</div>
              <h2 className="section-title mb-6">See It in Person</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our Spring Grove showroom features working displays of multiple pergola systems. 
                Experience the smooth operation, test the controls, and see color samples in natural light. 
                Most competitors do not have a showroom—this is one way we are different.
              </p>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-edg-brand-text shrink-0" />
                <div>
                  <div className="font-bold">1802 Holian Drive</div>
                  <div className="text-text-secondary">Spring Grove, IL 60081</div>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 border border-border">
              <h3 className="font-bold text-lg mb-4">Schedule a Showroom Visit</h3>
              <p className="text-text-secondary text-sm mb-6">
                See the products, meet the team, and get your questions answered. 
                Perfect for homeowners and trade partners alike.
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="text-center mb-12">
            <div className="label-editorial-brand mb-4">Complete Your Space</div>
            <h2 className="section-title">Related Products</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.title} variant="default" padding="lg" className="group">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  {product.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6">{product.description}</p>
                <TrackedLink href={product.href}>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider cursor-pointer">
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
      <Section className="bg-surface-muted border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-edg-brand-text transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to All Systems</span>
            </Link>
            <div className="flex gap-4">
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready for a Quote?
              </h2>
              <p className="text-xl text-text-inverse-muted mb-8 max-w-md">
                We can provide a preliminary price range with just a photo of your space 
                and rough dimensions. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink href="/contact?type=price&product=pergola">
                  <Button size="lg">Start Your Quote</Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" /> Call (815) 581-0138
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="border-l border-border-inverse pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide">
                  Why Work With EDG?
                </h4>
                <ul className="space-y-4 text-text-inverse-muted">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-edg-brand" />
                    System-agnostic recommendations
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-edg-brand" />
                    Nationwide design & supply
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-edg-brand" />
                    Local installation crews
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-edg-brand" />
                    Physical showroom in Spring Grove
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-edg-brand" />
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
