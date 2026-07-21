import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  Flame,
  Phone,
  Ruler,
  Shield,
  Thermometer,
  UtensilsCrossed,
  Wrench,
  Zap,
} from 'lucide-react';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Premium Outdoor Appliances | Grills, Pizza Ovens & Heaters',
  description:
    'Upgrade your outdoor kitchen with premium grills, high-performance heaters, and artisan pizza ovens. Professional installation available in Chicago & Milwaukee.',
  alternates: {
    canonical: '/systems/appliances',
  },
  keywords: [
    'outdoor kitchen appliances',
    'built-in grills',
    'outdoor heating',
    'pizza ovens',
    'outdoor refrigeration',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Premium Outdoor Appliances | EDG Patio & Shade',
    description:
      'Chef-grade outdoor kitchens and heating solutions for sophisticated outdoor living.',
  },
};

const galleryImages = [
  {
    type: 'image' as const,
    src: images.galleries.appliances[0],
    alt: 'Outdoor kitchen with built-in grill and cooking counter',
  },
  {
    type: 'image' as const,
    src: images.galleries.appliances[1],
    alt: 'Outdoor patio heater beside lounge seating',
  },
  {
    type: 'image' as const,
    src: images.galleries.appliances[2],
    alt: 'Built-in outdoor grill station',
  },
  {
    type: 'image' as const,
    src: images.galleries.appliances[3],
    alt: 'Outdoor kitchen and pizza night setup',
  },
];

const quickFeatures = [
  'Outdoor kitchens',
  'Infrared heating',
  'Pizza ovens',
  'Utility coordination',
];

const features = [
  {
    icon: Flame,
    title: 'High-Performance Grills',
    description:
      'Outdoor-rated grill stations selected around the cooking style, counter layout, ventilation, and fuel path.',
  },
  {
    icon: Thermometer,
    title: 'Infrared Patio Heating',
    description:
      'Heaters are planned around where people sit, how the structure is wired, and how the space is used in cooler weather.',
  },
  {
    icon: ChefHat,
    title: 'Pizza Ovens',
    description:
      'Gas or wood-fired ovens can be integrated into a larger outdoor kitchen plan when the site and clearances fit.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Packages',
    description:
      'EDG coordinates grills, refrigeration, counters, storage, lighting, and the surrounding shade or screen system.',
  },
  {
    icon: Zap,
    title: 'Controls and Power',
    description:
      'Lighting, heat, outlets, controls, and appliance power are reviewed before the plan turns into a quote.',
  },
  {
    icon: Shield,
    title: 'Weather-Rated Materials',
    description:
      'Outdoor appliances should be specified for exterior exposure, local weather, service access, and seasonal care.',
  },
];

const specs = [
  { label: 'Common Materials', value: 'Outdoor-rated stainless steel' },
  { label: 'Heating Options', value: 'Infrared electric or gas systems' },
  { label: 'Cooking Options', value: 'Grills, side burners, pizza ovens' },
  { label: 'Fuel Types', value: 'Natural gas, propane, electric, wood' },
  { label: 'Planning Needs', value: 'Power, gas, ventilation, clearances' },
  {
    label: 'Installation',
    value: 'Design, supply, utility coordination, and install',
  },
];

const useCases = [
  {
    title: 'Cooking Under Cover',
    description:
      'Pergolas, screens, and glass can frame the kitchen, but appliance placement still has to respect heat, smoke, power, and workflow.',
    image: images.systems.appliances.kitchenComplete,
  },
  {
    title: 'Cool-Weather Seating',
    description:
      'Heaters work best when they are planned with the roof structure, seating layout, controls, and wind exposure.',
    image: images.systems.appliances.heater,
  },
  {
    title: 'Entertaining Zones',
    description:
      'Pizza ovens, counters, refrigeration, and serving space can turn the patio into a real hosting area without overbuilding it.',
    image: images.systems.appliances.kitchenPizza,
  },
];

const planningChecks = [
  {
    icon: Ruler,
    title: 'Space and Workflow',
    description:
      'Counter runs, door swings, seating clearances, service access, smoke path, and how people move through the patio.',
  },
  {
    icon: Zap,
    title: 'Utilities',
    description:
      'Gas, electric, lighting, drainage, outlets, controls, and any licensed trade coordination needed before installation.',
  },
  {
    icon: Wrench,
    title: 'System Integration',
    description:
      'How the kitchen or heat package connects to pergolas, screens, glass, furniture, and the rest of the outdoor room plan.',
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
      'The best outdoor appliances are specifically rated for exterior use. We recommend marine-grade stainless steel grills, infrared heaters, and weather-rated refrigeration. Pizza ovens, both wood-fired and gas, are popular additions. All appliances we supply are designed to withstand temperature fluctuations, moisture, and UV exposure.',
  },
  {
    question: 'How do you protect outdoor appliances from weather?',
    answer:
      'Protection starts with proper selection: appliances built for outdoor use with weather-resistant materials. We also recommend placement under covered structures like pergolas or enclosures for additional protection. Many clients pair their kitchens with louvered pergolas that close during storms, or we can design custom appliance covers for seasonal storage.',
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

const relatedLinks = [
  {
    label: 'Motorized Pergolas',
    href: '/systems/pergolas',
    description:
      'Adjustable roof systems that can shelter cooking and seating zones.',
  },
  {
    label: 'Retractable Screens',
    href: '/systems/shades',
    description:
      'Bug, glare, wind, and privacy control for outdoor dining spaces.',
  },
  {
    label: 'Glass Enclosures',
    href: '/systems/enclosures',
    description: 'Sliding glass walls for more protected outdoor-room layouts.',
  },
  {
    label: 'Outdoor Room Plans',
    href: '/outdoor-rooms',
    description:
      'Outcome-led packages that combine shade, glass, screens, heat, and cooking.',
  },
];

export default function AppliancesPage() {
  const heroContactHref = buildContactHref({
    type: 'price',
    product: 'appliances',
    source: 'appliances_hero',
  });
  const bottomContactHref = buildContactHref({
    type: 'price',
    product: 'appliances',
    source: 'appliances_bottom',
  });

  const serviceSchema = generateServiceSchema({
    name: 'Outdoor Kitchen Appliances',
    description:
      'Premium outdoor grills, pizza ovens, and heating solutions for sophisticated outdoor living.',
    url: 'https://www.edgpatioshade.com/systems/appliances',
    image: `https://www.edgpatioshade.com${images.galleries.appliances[0]}`,
  });

  const faqSchema = generateFAQSchema(faqs);
  const schemas = [serviceSchema, faqSchema];

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Systems', href: '/systems' },
                { label: 'Outdoor Appliances' },
              ]}
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="order-1 min-w-0 lg:col-span-5">
              <div className="label-editorial-brand mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-black" />
                Complete Your Space
              </div>
              <h1 className="text-text-primary mb-8 text-5xl leading-[0.92] font-bold tracking-tighter md:text-7xl">
                Outdoor Kitchens + Heat.
              </h1>
              <p className="text-text-secondary mb-10 max-w-xl text-xl leading-relaxed">
                Grills, heaters, pizza ovens, counters, and appliance packages
                planned around the same outdoor-room system as your pergola,
                screens, or glass.
              </p>

              <div className="border-border mb-10 grid grid-cols-2 gap-4 border-y py-6 text-sm">
                {quickFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="text-edg-brand-text mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-text-primary font-bold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href={heroContactHref}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call EDG
                  </Button>
                </TrackedPhoneLink>
              </div>

              <p className="text-text-muted mt-5 text-sm">
                EDG designs, supplies, and installs appliance packages as part
                of complete outdoor living plans.
              </p>
            </div>

            <div className="order-2 min-w-0 lg:col-span-7">
              <ProductGallery items={galleryImages} />
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md border-border bg-surface-muted border-t">
        <Container>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="label-editorial-brand mb-4">System Overview</div>
            <h2 className="section-title mb-6">
              Appliances Should Fit the Outdoor Room, Not Just the Catalog
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Outdoor kitchens and heating work best when they are planned with
              the structure around them. EDG reviews the kitchen, heat, shade,
              screens, glass, furniture, utilities, and daily use together so
              the finished patio feels intentional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <Card
                key={item.title}
                variant="default"
                padding="none"
                className="overflow-hidden"
              >
                <div className="bg-surface-dark relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-text-primary mb-3 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand text-edg-brand mb-4">
              Appliance + Comfort Details
            </div>
            <h2 className="section-title mb-6">
              Built for Outdoor Use and Daily Workflow
            </h2>
            <p className="text-text-inverse-muted text-lg leading-relaxed">
              The right package depends on how the patio will cook, host, heat,
              clean up, and connect to the rest of the house.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} variant="dark" padding="lg">
                <IconWrapper
                  icon={feature.icon}
                  variant="dark"
                  size="lg"
                  className="mb-4"
                />
                <h3 className="text-text-inverse mb-3 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-text-inverse-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md border-border border-t">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Fit + Specification
              </div>
              <h2 className="section-title mb-6">
                What EDG Reviews Before Quoting
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Appliance pricing depends on equipment selection, utility path,
                cabinetry, counters, heat coverage, roof or wall integration,
                and whether the work is part of a broader outdoor room.
              </p>

              <div className="space-y-4">
                {planningChecks.map((item) => (
                  <Card key={item.title} variant="muted" padding="lg">
                    <IconWrapper
                      icon={item.icon}
                      variant="brand"
                      size="md"
                      className="mb-4"
                    />
                    <h3 className="text-text-primary mb-2 text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="dark" padding="lg">
              <h3 className="text-text-inverse mb-6 text-xl font-bold">
                Specification Highlights
              </h3>
              <div className="divide-border-inverse divide-y">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-2 py-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-center"
                  >
                    <span className="text-text-inverse-muted text-sm">
                      {spec.label}
                    </span>
                    <span className="text-text-inverse font-bold sm:text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md border-border bg-surface-muted border-t">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">FAQ</div>
            <h2 className="section-title mb-6">
              Outdoor Appliance Planning Questions
            </h2>
          </div>

          <div className="divide-border mx-auto max-w-3xl divide-y">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-text-primary mb-3 text-lg font-bold">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md border-border border-t">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                Complete the Space
              </div>
              <h2 className="section-title mb-6">
                Plan Appliances Around the Primary System
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Appliances usually work best when the roof, shade, screen,
                glass, seating, lighting, and heat plan are considered together.
                These pages are the most useful next planning stops.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card
                    variant="default"
                    padding="lg"
                    className="group hover:border-edg-brand/30 h-full"
                  >
                    <h3 className="text-text-primary group-hover:text-edg-brand-text mb-2 font-bold transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-text-primary group-hover:text-edg-brand-text inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors">
                      View page
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Next Step
              </div>
              <h2 className="section-title mb-6">
                Ready to Price the Cooking and Comfort Layer?
              </h2>
              <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
                Send EDG the rough patio layout, cooking goals, heat needs, and
                primary system plan. We will help sort the appliance path and
                what needs to happen before installation.
              </p>
            </div>
            <div className="space-y-4">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg" className="w-full">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="w-full">
                  View Gallery
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-text-inverse-muted text-center text-sm">
                Spring Grove showroom available by appointment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
