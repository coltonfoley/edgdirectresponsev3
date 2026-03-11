import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Thermometer,
  ChefHat,
  UtensilsCrossed,
  Zap,
  Shield,
  Phone,
  ChevronRight,
  MessageSquare,
  Ruler,
  Wrench,
} from 'lucide-react';
import type { Metadata } from 'next';
import {
  generateServiceSchema,
  generateProductSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Premium Outdoor Appliances | Grills, Pizza Ovens & Heaters',
  description:
    'Upgrade your outdoor kitchen with premium grills, high-performance heaters, and artisan pizza ovens. Professional installation available in Chicago & Milwaukee.',
  alternates: {
    canonical: '/systems/appliances',
  },
  keywords: ['outdoor kitchen appliances', 'built-in grills', 'outdoor heating', 'pizza ovens', 'outdoor refrigeration'],
  openGraph: {
    title: 'Premium Outdoor Appliances | EDG Outdoor Living',
    description:
      'Chef-grade outdoor kitchens and heating solutions for sophisticated outdoor living.',
  },
};

const galleryImages = [
  {
    type: 'image' as const,
    src: images.galleries.appliances[0],
    alt: 'Luxury outdoor kitchen with stainless steel grill and pizza oven',
  },
  {
    type: 'image' as const,
    src: images.galleries.appliances[1],
    alt: 'Modern outdoor patio heater next to lounge seating',
  },
  {
    type: 'image' as const,
    src: images.galleries.appliances[2],
    alt: 'Outdoor living space with integrated appliances',
  },
];

const features = [
  {
    icon: Flame,
    title: 'High-Performance Grills',
    description:
      'Chef-grade stainless steel grills with precision heat control for the perfect sear every time.',
  },
  {
    icon: Thermometer,
    title: 'Market-Leading Heating',
    description:
      'Infrared heaters that warm people, not just the air, extending your patio season by months.',
  },
  {
    icon: ChefHat,
    title: 'Artisan Pizza Ovens',
    description:
      'Wood-fired or gas-powered ovens that reach 900°F for authentic Neapolitan-style pizza.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Complete Kitchens',
    description:
      'From refrigeration to beverage centers, we design fully functional outdoor culinary spaces.',
  },
  {
    icon: Zap,
    title: 'Smart Integration',
    description:
      'Control lighting, heating, and even some cooking elements directly from your smart home system.',
  },
  {
    icon: Shield,
    title: 'Weather-Resistant',
    description:
      'Appliances built with marine-grade stainless steel to withstand harsh Midwest winters.',
  },
];

const specs = [
  { label: 'Grill Materials', value: '304 Stainless Steel' },
  { label: 'Heater Power', value: 'Up to 6000W / 50,000 BTU' },
  { label: 'Pizza Oven Temps', value: 'Up to 900°F+' },
  { label: 'Fuel Types', value: 'Natural Gas, Propane, Wood' },
  { label: 'Warranty', value: 'Lifetime on many burners/bodies' },
  { label: 'Installation', value: 'Professional Gas & Electric Connect' },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We discuss your vision, cooking habits, and how you want to use your outdoor space.',
  },
  {
    icon: Ruler,
    title: 'Design',
    description:
      'Custom layouts integrating appliances, utilities, and workflow for optimal functionality.',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Professional gas, electric, and plumbing connections by licensed technicians.',
  },
];

const faqs = [
  {
    question: 'Can you add an outdoor kitchen to an existing patio?',
    answer:
      'Yes, we can integrate outdoor kitchens into existing patios and outdoor spaces. Our team assesses your current setup for utility access (gas, electric, water) and structural considerations. We design kitchens that complement your existing space while ensuring proper ventilation and safe equipment placement.',
  },
  {
    question: 'What appliances work best outdoors?',
    answer:
      'The best outdoor appliances are specifically rated for exterior use. We recommend marine-grade stainless steel grills, infrared heaters, and weather-rated refrigeration. Pizza ovens—both wood-fired and gas—are popular additions. All appliances we supply are designed to withstand temperature fluctuations, moisture, and UV exposure.',
  },
  {
    question: 'How do you protect outdoor appliances from weather?',
    answer:
      'Protection starts with proper selection—appliances built for outdoor use with weather-resistant materials. We also recommend placement under covered structures like pergolas or enclosures for additional protection. Many clients pair their kitchens with louvered pergolas that close during storms, or we can design custom appliance covers for seasonal storage.',
  },
  {
    question: "What's the typical cost for an outdoor kitchen?",
    answer:
      'Outdoor kitchen costs vary widely based on scope. A basic grill station might start around $8,000-$12,000, while fully equipped custom kitchens with multiple appliances, cabinetry, and countertops typically range from $25,000 to $75,000+. During your consultation, we provide detailed estimates based on your specific requirements and appliance selections.',
  },
  {
    question: 'Do you provide appliance-only installation?',
    answer:
      'Yes, we can install individual appliances or complete kitchen packages. Many clients start with a grill or heater under an existing structure and expand over time. We handle all gas, electric, and plumbing connections, ensuring everything meets local codes and manufacturer specifications.',
  },
];

const relatedProducts = [
  {
    title: 'Motorized Pergolas',
    description:
      'Louvered roof systems that provide shade and shelter for your outdoor kitchen.',
    href: '/systems/pergolas',
  },
  {
    title: 'Retractable Screens',
    description:
      'Keep bugs out and control glare while cooking and entertaining outdoors.',
    href: '/systems/shades',
  },
  {
    title: 'Glass Enclosures',
    description:
      'Create a true four-season outdoor room with motorized glass wall systems.',
    href: '/systems/enclosures',
  },
];

export default function AppliancesPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Outdoor Kitchen Appliances',
    description:
      'Premium outdoor grills, pizza ovens, and heating solutions for sophisticated outdoor living.',
    url: 'https://www.edgpatioshade.com/systems/appliances',
    image: `https://www.edgpatioshade.com${images.galleries.appliances[0]}`,
  });

  const productSchema = generateProductSchema({
    name: 'Outdoor Kitchen Appliances',
    description:
      'Premium outdoor kitchen appliances, grills, and heating systems for outdoor living spaces.',
    image: `https://www.edgpatioshade.com${images.galleries.appliances[0]}`,
  });

  const faqSchema = generateFAQSchema(faqs);

  // Combine schemas
  const schemas = [serviceSchema, productSchema, faqSchema];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      {/* ========== HERO WITH GALLERY ========== */}
      <section className="bg-white pt-8 pb-16 dark:bg-black">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8 pt-16">
            <Breadcrumb
              items={[
                { label: 'Systems', href: '/systems' },
                { label: 'Outdoor Appliances' },
              ]}
            />
          </div>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery items={galleryImages} />

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">
                  Complete Your Space
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Premium Appliances
                </h1>
                <p className="text-edg-gray-text text-xl leading-relaxed dark:text-zinc-300">
                  The finishing touches for your outdoor space. Kitchens,
                  heating, and appliances that complete your pergola or screen
                  system.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Professional-grade grills',
                  'Infrared patio heating',
                  'Outdoor pizza ovens',
                  'Custom outdoor kitchens',
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
                  href="/contact?type=price&product=appliances"
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
                We design, supply, and install complete outdoor kitchen
                packages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Outdoor kitchens and heating systems are the elements that turn a
              covered patio into a true living space. While our core expertise
              lies in motorized pergolas, retractable screens, and glass
              enclosures, we understand that the real value of these structures
              comes from how you use them. A beautiful pergola becomes a
              destination when there is a grill sizzling beneath it. A screen
              room becomes a year-round retreat when infrared heaters take the
              chill off autumn evenings.
            </p>
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              We approach outdoor kitchens and heating as complementary systems
              designed to integrate seamlessly with your primary structure. Our
              team specifies appliances that match the quality and durability of
              our pergolas and screens—marine-grade stainless steel, weather
              ratings for Midwest winters, and smart controls that work with
              your home automation. From a simple grill station under a
              louvered roof to a complete outdoor culinary space with
              refrigeration and pizza ovens, we handle the design, utility
              connections, and installation.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Heating systems extend the usable season of your outdoor space by
              months. Infrared heaters warm people, not the air, making them
              efficient and effective even on cooler evenings. We specify and
              install heating solutions that integrate cleanly with your pergola
              structure, providing comfort without compromising aesthetics.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== USE CASES ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Designed for Outdoor Living
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'The Outdoor Chef',
                desc: 'Everything you need to cook gourmet meals outside: grills, side burners, and refrigeration.',
                image: images.brand.hero.lifestyle,
              },
              {
                title: 'Year-Round Comfort',
                desc: "Don't let the chill drive you inside. Powerful heaters keep your space usable well into autumn.",
                image: images.brand.context.commercial,
              },
              {
                title: 'Pizza Night',
                desc: 'Create memories with family and friends around a wood-fired or gas pizza oven.',
                image: images.brand.hero.showroom,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-none bg-white shadow-sm dark:bg-surface-dark-elevated"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text dark:text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FEATURES ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built for the Outdoors
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-inverse-muted">
              We select appliances that combine stunning aesthetics with rugged
              durability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="bg-edg-brand/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-none">
                  <feature.icon className="text-edg-brand h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-text-inverse-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Specification Highlights
              </h2>
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

      {/* ========== PROCESS OVERVIEW ========== */}
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">
              Our Process
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              From Vision to Reality
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>
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
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Complete Your Outdoor Space
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary">
              Pair your appliances with these primary systems for the ultimate
              outdoor living experience.
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
                  Learn more{' '}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-dark relative overflow-hidden py-24 text-white">
        <div className="from-edg-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Complete Your Outdoor Oasis
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-text-inverse-muted">
              Let's design the perfect outdoor kitchen and heating package for
              your home. Our team handles everything from design to professional
              installation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?type=price&product=appliances">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-none px-10 text-lg transition-all hover:scale-105"
                >
                  Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none px-10 text-lg text-white hover:bg-white/10"
                >
                  View Gallery <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
