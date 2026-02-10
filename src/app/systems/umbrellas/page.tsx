import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateServiceSchema, generateFAQSchema, generateProductSchema } from '@/lib/schema';
import { brandImages, pageGalleries } from '@/lib/brand-images';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight,
  Wind,
  Sun,
  RotateCw,
  Zap,
  Shield,
  Anchor,
  MessageSquare,
  Ruler,
  Wrench,
  MapPin,
  Building2,
  Home,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Grade Umbrellas | Cantilever & Center Pole | EDG',
  description:
    'Heavy-duty outdoor umbrellas for residential and commercial applications. Wind-stable cantilever and center pole designs with marine-grade materials.',
  alternates: {
    canonical: '/systems/umbrellas',
  },
  keywords: ['outdoor umbrellas', 'cantilever umbrellas', 'commercial umbrellas', 'marine grade umbrellas', 'pool umbrellas'],
  openGraph: {
    title: 'Architectural Umbrella Systems | EDG Outdoor Living',
    description:
      'Commercial-grade cantilever and center pole umbrellas engineered for 35+ mph winds.',
  },
};

const galleryImages = pageGalleries.umbrellas.map((src, index) => ({
  type: 'image' as const,
  src,
  alt: index === 0
    ? 'Poolside umbrella shading outdoor lounging area'
    : index === 1
      ? 'Pergola with umbrella shade solution'
      : 'Commercial umbrella system',
}));

const features = [
  {
    icon: Anchor,
    title: 'Cantilever Design',
    description:
      'Offset pole architecture creates unobstructed space beneath the canopy—perfect for dining tables, lounge seating, and poolside areas. No center pole means no interference with furniture arrangement or sightlines.',
  },
  {
    icon: Wind,
    title: 'Wind Stability',
    description:
      'Engineered to withstand sustained winds up to 35 mph when retracted. Precision-engineered frames with reinforced joints and balanced weight distribution provide stability that outperforms typical consumer umbrellas.',
  },
  {
    icon: Shield,
    title: 'Marine-Grade Materials',
    description:
      'Frames constructed from 316 stainless steel and heavy-gauge aluminum resist corrosion in coastal and poolside environments. Sunbrella canopy fabrics are solution-dyed for UV resistance and backed by industry-leading warranties.',
  },
  {
    icon: RotateCw,
    title: '360° Rotation',
    description:
      'Cantilever models feature smooth rotation mechanisms that let you track the sun throughout the day. A single umbrella can provide morning coffee shade on the east patio and afternoon coverage by the pool.',
  },
  {
    icon: Zap,
    title: 'Integrated Lighting',
    description:
      'Optional LED lighting packages mount discreetly within the frame, extending the usability of your outdoor space into the evening. Dimmable options create ambiance for dining and entertaining without additional fixtures.',
  },
  {
    icon: Sun,
    title: 'Retractable Canopies',
    description:
      'Manual and motorized retract options let you close canopies quickly when storms approach. Protect your investment and extend fabric life by keeping canopies stowed during severe weather.',
  },
];

const specs = [
  { label: 'Canopy Sizes', value: '10ft to 16ft square or octagonal' },
  { label: 'Pole Materials', value: 'Aluminum, stainless steel' },
  { label: 'Base Options', value: 'In-ground, surface plate, mobile' },
  { label: 'Fabric Options', value: 'Sunbrella (50+ colors/patterns)' },
  { label: 'Wind Rating', value: 'Up to 35 mph (retractable)' },
  { label: 'Frame Warranty', value: '5-10 years' },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We discuss your space, usage patterns, and design preferences to determine the right umbrella type and configuration.',
  },
  {
    icon: Ruler,
    title: 'Site Assessment',
    description:
      'Our team evaluates wind exposure, foundation requirements, and placement options to ensure proper anchoring and stability.',
  },
  {
    icon: MapPin,
    title: 'Selection',
    description:
      'Choose from our curated selection of commercial-grade umbrellas with guidance on size, base type, fabric, and accessories.',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Professional installation with proper anchoring, leveling, and operational testing. We handle everything from concrete footings to final adjustments.',
  },
];

const faqs = [
  {
    question: "What's the difference between cantilever and center pole umbrellas?",
    answer:
      'Cantilever umbrellas feature an offset pole that supports the canopy from the side, leaving the entire shaded area unobstructed—ideal for dining tables and conversation areas. Center pole umbrellas have the support pole in the middle of the canopy, which is more traditional and often more cost-effective. Cantilever designs generally offer more flexibility in placement and furniture arrangement, while center pole models excel in high-wind environments and are easier to deploy.',
  },
  {
    question: 'How do umbrellas handle wind?',
    answer:
      'Our commercial-grade umbrellas are engineered for wind resistance with reinforced frames, balanced weight distribution, and secure anchoring systems. Cantilever models should be retracted when winds exceed 20-25 mph, while some center pole designs can handle higher winds when properly anchored. We assess your specific wind exposure during site evaluation and recommend appropriate models and anchoring methods. All umbrellas include wind vents in the canopy to allow air passage and reduce uplift forces.',
  },
  {
    question: 'Can umbrellas be used with pergolas?',
    answer:
      'Absolutely. Umbrellas complement pergolas beautifully, filling gaps where fixed shade structures leave areas exposed. Many clients use umbrellas to shade adjacent pool areas, dining spaces beyond the pergola footprint, or portable seating areas. For spaces where a full pergola installation is not feasible due to budget, permitting, or structural considerations, umbrellas provide flexible shade coverage that can be repositioned as needed.',
  },
  {
    question: "What's the installation process?",
    answer:
      'Installation begins with a site assessment to determine the optimal placement and anchoring method. In-ground bases require concrete footings—typically 3-4 feet deep depending on soil conditions and umbrella size. Surface plate bases bolt to existing concrete pads, while mobile bases with weighted plates allow for seasonal repositioning. Installation typically takes 2-4 hours for most residential applications. We handle everything from utility marking to final operational testing and owner orientation.',
  },
  {
    question: 'How long do outdoor umbrellas last?',
    answer:
      'With proper care, commercial-grade umbrella frames last 10-15 years or more. Canopy fabrics typically need replacement every 5-7 years depending on UV exposure and maintenance. Our marine-grade aluminum and stainless steel frames resist corrosion in harsh environments. Sunbrella fabrics carry a 5-year warranty against fading and degradation. We recommend seasonal cleaning, proper retraction during severe weather, and protective covers during winter months to maximize lifespan.',
  },
  {
    question: 'When should I choose an umbrella over a pergola?',
    answer:
      'Umbrellas excel in situations requiring flexibility: seasonal use, rental properties, spaces where permanent structures are restricted, or areas where shade needs change throughout the day. They are also more budget-friendly for immediate needs. Pergolas become the better choice when you want a permanent architectural element, need rain protection, want integrated lighting and heating, or are creating a defined outdoor room. Many clients start with umbrellas and upgrade to pergolas as their outdoor living vision expands.',
  },
];

const relatedProducts = [
  {
    title: 'Louvered Pergolas',
    description:
      'When you are ready for permanent shade and rain protection, explore our motorized louvered roof systems.',
    href: '/systems/pergolas',
  },
  {
    title: 'Outdoor Heating',
    description:
      'Extend your season with infrared heaters that integrate cleanly with umbrella and pergola structures.',
    href: '/systems/appliances',
  },
  {
    title: 'Outdoor Furniture',
    description:
      'Complete your space with premium outdoor seating and dining collections designed for the elements.',
    href: '/systems/furniture',
  },
];

export default function UmbrellasPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Architectural Umbrella Systems',
    description:
      'Commercial-grade cantilever and center pole umbrellas with marine-grade construction and wind stability engineering.',
    url: 'https://www.edgpatioshade.com/systems/umbrellas',
    image: `https://www.edgpatioshade.com${brandImages.context.pool}`,
  });

  const productSchema = generateProductSchema({
    name: 'Architectural Umbrella System',
    description:
      'Commercial-grade outdoor umbrellas with cantilever or center pole designs, marine-grade materials, and wind ratings up to 35 mph.',
    image: `https://www.edgpatioshade.com${brandImages.context.pool}`,
    category: 'Outdoor Shade',
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

      {/* ========== HERO SECTION ========== */}
      <Section className="bg-white pt-8 pb-16 dark:bg-black">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-none">
              <Image
                src={brandImages.context.pool}
                alt="Commercial-grade cantilever umbrella shading outdoor dining area"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="label-editorial-brand mb-2">Complete Your Space</p>
                <h1 className="page-title mb-4">Architectural Umbrella Systems</h1>
                <p className="text-text-secondary text-xl leading-relaxed">
                  Flexible shade solutions for pools, dining areas, and patios. Our
                  marine-grade umbrellas are built to withstand wind and sun without
                  wobbling or fading.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Cantilever & center pole',
                  'Wind-rated to 35 mph',
                  'Marine-grade materials',
                  '360° rotation available',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row">
                <Link
                  href="/contact?type=price&product=umbrellas"
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
                We design, supply, and install commercial-grade umbrella systems
                nationwide.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-surface-muted section-md dark:bg-surface-dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Architectural umbrella systems represent the flexible side of outdoor
              shade—providing coverage where permanent structures are not practical
              or desired. While our core expertise lies in motorized pergolas and
              glass enclosures, we understand that not every space requires a fixed
              installation. Sometimes you need shade that moves with the sun, packs
              away for winter, or accommodates rental properties and seasonal
              businesses.
            </p>
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              We specify two primary umbrella architectures: cantilever designs with
              offset poles that leave the shaded area completely unobstructed, and
              center pole models that deliver traditional stability with modern
              engineering. Both configurations use marine-grade materials—316
              stainless steel hardware, heavy-gauge aluminum extrusions, and
              solution-dyed acrylic fabrics that resist fading, mildew, and UV
              degradation. These are not consumer-grade patio umbrellas; they are
              commercial systems engineered for hotels, restaurants, and discerning
              homeowners who expect equipment that performs year after year.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              The decision between umbrellas and pergolas often comes down to
              permanence versus flexibility. Umbrellas excel when you need
              repositionable shade, have budget constraints, or face restrictions
              on permanent structures. When you are ready for a fixed architectural
              element with rain protection and integrated utilities, our louvered
              pergola systems provide the next level of outdoor living. Our Spring
              Grove showroom displays both options so you can compare quality and
              functionality firsthand.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== KEY FEATURES ========== */}
      <Section className="bg-edg-dark section-md text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Engineered for Performance</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-inverse-muted">
              Commercial-grade construction that outperforms consumer umbrellas in
              every measurable category.
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

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-white section-md dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Specification Highlights</h2>
            </div>

            <div className="overflow-hidden rounded-none border border-border bg-surface-muted dark:border-border-inverse dark:bg-surface-dark-elevated">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specs.length - 1
                      ? 'border-b border-black/5 dark:border-white/5'
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
            <h2 className="section-title mb-4">Applications</h2>
            <p className="mx-auto max-w-2xl text-text-secondary">
              From residential pools to commercial hospitality, umbrella systems
              adapt to diverse environments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Residential */}
            <Card variant="default" padding="lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-edg-brand/10">
                <Home className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Residential</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Poolside lounges and cabanas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Outdoor dining areas and kitchens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Conversation pits and fire pit seating</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Garden terraces and courtyards</span>
                </li>
              </ul>
            </Card>

            {/* Commercial */}
            <Card variant="default" padding="lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-edg-brand/10">
                <Building2 className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Commercial</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Restaurant patios and sidewalk dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Hotel pool decks and cabanas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Resort lounging areas and beach clubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-edg-brand-text dark:text-edg-brand" />
                  <span>Event venues and country clubs</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="bg-white section-md dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Options & Upgrades</h2>
            <p className="mx-auto max-w-2xl text-text-secondary">
              Customize your umbrella system with premium accessories and finishes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Lighting Packages',
                description:
                  'Integrated LED fixtures with dimming controls for evening ambiance.',
              },
              {
                title: 'Heating Integration',
                description:
                  'Mounting systems for infrared heaters to extend seasonal use.',
              },
              {
                title: 'Custom Branding',
                description:
                  'Commercial clients can add logos and custom colors to canopies.',
              },
              {
                title: 'Protective Covers',
                description:
                  'Weather-resistant covers for offseason storage and protection.',
              },
            ].map((option) => (
              <Card key={option.title} variant="muted" padding="md">
                <h3 className="mb-2 font-bold">{option.title}</h3>
                <p className="text-sm text-text-secondary">{option.description}</p>
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
            <h2 className="section-title mb-4">From Consultation to Installation</h2>
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
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white dark:bg-white dark:text-black">
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
      <Section className="bg-white section-md dark:bg-black">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-border pb-6 dark:border-border-inverse"
                >
                  <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
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
            <p className="mx-auto max-w-2xl text-text-secondary">
              Pair your umbrella system with these complementary products for the
              ultimate outdoor living experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block rounded-none border border-border bg-white p-6 transition-colors hover:border-edg-brand dark:border-border-inverse dark:bg-surface-dark-elevated"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">
                  {product.title}
                </h3>
                <p className="text-text-secondary mb-4">{product.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-edg-brand-text dark:text-edg-brand">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="bg-edg-dark relative overflow-hidden py-24 text-white">
        <div className="from-edg-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Request Umbrella Information
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-text-inverse-muted">
              Not sure whether an umbrella or pergola is right for your space? Our
              team helps you compare options and find the shade solution that fits
              your needs and budget.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?type=price&product=umbrellas">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-none px-10 text-lg transition-all hover:scale-105"
                >
                  Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none px-10 text-lg text-white hover:bg-white/10"
                >
                  Compare to Pergolas <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
