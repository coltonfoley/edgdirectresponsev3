import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Home,
  Building2,
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react';
import type { Metadata } from 'next';
import * as images from '@/lib/images';


export const metadata: Metadata = {
  title: 'Outdoor Living Systems | Pergolas, Shades & Enclosures | EDG',
  description:
    'Complete outdoor living systems for the Chicago climate. Motorized pergolas, retractable screens, glass enclosures, and outdoor kitchens. Design & supply nationwide, installation in Chicago-Milwaukee corridor.',
  keywords: [
    'outdoor living systems',
    'motorized pergolas',
    'retractable screens',
    'glass enclosures',
    'outdoor kitchens',
    'patio covers',
    'backyard shade',
    'chicago outdoor living',
  ],
  alternates: {
    canonical: '/systems',
  },
  openGraph: {
    title: 'Outdoor Living Systems | EDG Outdoor Living',
    description:
      'Complete outdoor living solutions: pergolas, screens, enclosures, and kitchens. Built for the Midwest climate.',
  },
};

// System categories with enhanced data
const systems = [
  {
    id: 'pergolas',
    href: '/systems/pergolas',
    title: 'Motorized Pergolas',
    shortTitle: 'Pergolas',
    description:
      'Architectural aluminum structures with rotating louvers for complete climate control. Sun when you want it, watertight seal when you do not.',
    image: images.pages.serviceAreas.barringtonPergola1,
    features: ['135° adjustable louvers', 'Wind-rated to 120 mph', 'Smart home integration', 'LED lighting options'],
    bestFor: ['Patios & terraces', 'Poolside lounges', 'Outdoor kitchens', 'Decks'],
    priceRange: 'From $25,000',
    icon: Sun,
  },
  {
    id: 'shades',
    href: '/systems/shades',
    title: 'Retractable Screens',
    shortTitle: 'Screens',
    description:
      'Wind-rated exterior screens with MagnaTrack self-correcting technology. Block 97% of UV rays while keeping your view.',
    image: images.pages.serviceAreas.sanibelShade,
    features: ['MagnaTrack technology', '97% UV blockage', 'Up to 35 mph wind rated', 'Insect protection'],
    bestFor: ['Existing porches', 'Pergola sides', 'Patio enclosures', 'Bug protection'],
    priceRange: 'From $3,500',
    icon: CloudRain,
  },
  {
    id: 'enclosures',
    href: '/systems/enclosures',
    title: 'Glass Enclosures',
    shortTitle: 'Enclosures',
    description:
      'Frameless retractable glass walls that transform outdoor spaces into year-round rooms. Weatherproof square footage added to your home.',
    image: '/images/enclosures/glass-system-03.jpg',
    features: ['Frameless design', 'Retractable panels', 'Weather sealing', 'Year-round use'],
    bestFor: ['Three-season rooms', 'Restaurant patios', 'Event venues', 'Home additions'],
    priceRange: 'From $15,000',
    icon: Home,
  },
  {
    id: 'appliances',
    href: '/systems/appliances',
    title: 'Outdoor Kitchens',
    shortTitle: 'Kitchens',
    description:
      'Premium built-in grills, appliances, and cabinetry designed for outdoor use. Create the ultimate outdoor cooking and entertaining space.',
    image: '/images/appliances/outdoor-kitchen-hero.png',
    features: ['Built-in grills', 'Refrigeration', 'Storage solutions', 'Weather-resistant'],
    bestFor: ['Outdoor cooking', 'Entertaining', 'Complete kitchens', 'Grill islands'],
    priceRange: 'From $8,000',
    icon: Thermometer,
  },
];

// Secondary systems
const secondarySystems = [
  {
    href: '/systems/heating',
    title: 'Heating Systems',
    description: 'Infrared heaters and fire features to extend your outdoor season.',
    icon: Thermometer,
  },
  {
    href: '/systems/furniture',
    title: 'Outdoor Furniture',
    description: 'Premium outdoor furniture lines designed for comfort and durability.',
    icon: Home,
  },
  {
    href: '/systems/umbrellas',
    title: 'Umbrella Systems',
    description: 'Commercial-grade shade umbrellas for flexible coverage.',
    icon: Sun,
  },
];

// Comparison table data
const comparisonData = [
  {
    feature: 'Weather Protection',
    pergolas: 'Rain, sun, light wind',
    shades: 'Sun, UV, insects, wind',
    enclosures: 'All weather, year-round',
  },
  {
    feature: 'Best For',
    pergolas: 'Open-air spaces',
    shades: 'Existing structures',
    enclosures: 'Fully enclosed rooms',
  },
  {
    feature: 'Climate Control',
    pergolas: 'Adjustable louvers',
    shades: 'Deployable screens',
    enclosures: 'Full enclosure',
  },
  {
    feature: 'Installation Time',
    pergolas: '2-3 days',
    shades: '1 day',
    enclosures: '3-5 days',
  },
];

// FAQ data
const faqs = [
  {
    question: 'Which outdoor living system is right for me?',
    answer:
      'The right system depends on your space and goals. Motorized pergolas are ideal for open patios where you want adjustable shade and rain protection. Retractable screens work best for existing covered porches or as additions to pergolas. Glass enclosures transform spaces into year-round rooms. During our consultation, we assess your space, understand how you plan to use it, and recommend the best solution for your needs and budget.',
  },
  {
    question: 'Can these systems handle Chicago winters?',
    answer:
      'Absolutely. Our systems are specifically engineered for the demanding Chicago climate. Pergolas are rated for snow loads up to 40 psf and winds to 120 mph. Screens feature MagnaTrack technology that withstands gusts up to 35 mph. Glass enclosures provide true four-season protection. We also offer winterization services and can recommend the best configurations for lakefront and exposed locations.',
  },
  {
    question: 'Can I combine multiple systems?',
    answer:
      'Yes—and we often recommend it. Many homeowners start with a motorized pergola, then add retractable screens to the sides for wind and insect protection. Others integrate heating systems and outdoor kitchens to create complete outdoor living spaces. Our design team specializes in creating integrated systems where all components work together seamlessly, both functionally and aesthetically.',
  },
  {
    question: 'Do you work with homeowners or just contractors?',
    answer:
      'We work with both. For homeowners in the Chicago-Milwaukee corridor, we provide complete turnkey service—from design through installation. For homeowners outside our service area, we can supply systems through our network of certified installers. For contractors, architects, and designers nationwide, we serve as a design and supply partner, providing engineering, specifications, and shipping to your job site.',
  },
];

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark pt-32 pb-16 text-white md:pt-40 md:pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Systems' }]} className="text-gray-400" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-edg-brand text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="h-px w-8 bg-edg-brand" />
                Outdoor Living Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Complete Outdoor Living Systems
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                Motorized pergolas, retractable screens, glass enclosures, and outdoor kitchens—engineered for the Midwest climate and designed for how you actually live.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#systems">
                  <Button size="lg">Explore Systems</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black">
                    Get Expert Advice
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
                alt="Complete outdoor living system with motorized pergola and outdoor kitchen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHAT ARE OUTDOOR SYSTEMS ========== */}
      <Section className="bg-white dark:bg-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-edg-brand-text text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="h-px w-8 bg-edg-brand-text" />
              Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              What Are Outdoor Living Systems?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Outdoor living systems are integrated architectural solutions that extend your home&apos;s usable space into the outdoors. Unlike simple patio furniture or standalone awnings, these are engineered systems designed to work together—providing shade, weather protection, climate control, and functional outdoor kitchens that transform how you use your backyard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="muted" padding="lg">
              <IconWrapper icon={Sun} variant="brand" size="lg" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Climate Control</h3>
              <p className="text-text-secondary">
                Adjust sun, shade, and airflow on demand. Motorized louvers, retractable screens, and integrated heating extend your outdoor season from early spring through late fall.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <IconWrapper icon={CloudRain} variant="brand" size="lg" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Protection</h3>
              <p className="text-text-secondary">
                Engineered for Chicago&apos;s demanding climate—wind-rated structures, integrated rain management, and snow-load engineering that stands up to Midwest winters.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <IconWrapper icon={Building2} variant="brand" size="lg" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrated Design</h3>
              <p className="text-text-secondary">
                Systems designed to work together. Pergolas with integrated screens. Outdoor kitchens under protective covers. Everything connected, everything coordinated.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== MAIN SYSTEMS GRID ========== */}
      <Section id="systems" className="bg-surface-muted border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-edg-brand-text text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="h-px w-8 bg-edg-brand-text" />
              Core Systems
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Choose Your System
            </h2>
            <p className="text-lg text-text-secondary">
              Four primary systems, each engineered for specific use cases. Many homeowners combine multiple systems for complete outdoor living.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {systems.map((system) => (
              <div
                key={system.id}
                className="group bg-white dark:bg-surface overflow-hidden border border-border hover:border-edg-brand transition-colors"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-edg-brand text-edg-dark text-xs font-bold uppercase tracking-wider px-3 py-1">
                    {system.priceRange}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <IconWrapper icon={system.icon} variant="brand" size="sm" />
                    <h3 className="text-2xl font-bold">{system.title}</h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {system.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {system.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-edg-brand-text shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        Best For
                      </h4>
                      <ul className="space-y-2">
                        {system.bestFor.map((use) => (
                          <li key={use} className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="h-1.5 w-1.5 rounded-full bg-edg-brand-text shrink-0" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={system.href}>
                    <Button className="w-full">
                      Explore {system.shortTitle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SECONDARY SYSTEMS ========== */}
      <Section className="bg-white dark:bg-black border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Complete Your Space
            </h2>
            <p className="text-text-secondary">
              Add the finishing touches to your outdoor living area with these complementary systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {secondarySystems.map((system) => (
              <Card key={system.href} variant="outline" padding="lg" className="group">
                <div className="flex items-center gap-3 mb-4">
                  <IconWrapper icon={system.icon} variant="default" size="md" />
                  <h3 className="text-lg font-bold">{system.title}</h3>
                </div>
                <p className="text-text-secondary text-sm mb-6">{system.description}</p>
                <Link
                  href={system.href}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-edg-brand-text transition-colors"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== COMPARISON TABLE ========== */}
      <Section className="bg-surface-muted border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Compare Systems
            </h2>
            <p className="text-text-secondary">
              Quick comparison of our three primary outdoor living systems.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-surface border border-border">
              <thead>
                <tr className="border-b border-border bg-surface-muted dark:bg-surface-dark">
                  <th className="text-left p-6 font-bold">Feature</th>
                  <th className="text-left p-6 font-bold text-edg-brand-text">Pergolas</th>
                  <th className="text-left p-6 font-bold text-edg-brand-text">Screens</th>
                  <th className="text-left p-6 font-bold text-edg-brand-text">Enclosures</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index !== comparisonData.length - 1 ? 'border-b border-border' : ''}>
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-text-secondary">{row.pergolas}</td>
                    <td className="p-6 text-text-secondary">{row.shades}</td>
                    <td className="p-6 text-text-secondary">{row.enclosures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ========== CHICAGO CLIMATE SECTION ========== */}
      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-edg-brand text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <Wind className="h-4 w-4" />
                Midwest Engineered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Built for the Chicago Climate
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our systems are specifically engineered to handle the demanding conditions of the upper Midwest—from summer storms and high winds to heavy snow loads and subzero temperatures.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-none bg-white/10 flex items-center justify-center shrink-0">
                    <Wind className="h-6 w-6 text-edg-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Wind Rated</h3>
                    <p className="text-gray-400 text-sm">
                      Pergolas withstand 120 mph winds. Screens handle 35 mph gusts with MagnaTrack self-correcting technology.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-none bg-white/10 flex items-center justify-center shrink-0">
                    <CloudRain className="h-6 w-6 text-edg-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Snow Load Engineered</h3>
                    <p className="text-gray-400 text-sm">
                      Structural engineering for up to 40 psf snow loads—handling the heaviest Midwest winters without deflection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-none bg-white/10 flex items-center justify-center shrink-0">
                    <Thermometer className="h-6 w-6 text-edg-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Year-Round Use</h3>
                    <p className="text-gray-400 text-sm">
                      Integrated heating, weather sealing, and insulation options extend your outdoor season into the colder months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg"
                alt="Pergola engineered for Chicago climate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM CTA ========== */}
      <Section className="bg-surface-muted border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-edg-brand-text text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <MapPin className="h-4 w-4" />
                Visit Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                See Systems in Action
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Our Spring Grove showroom features working displays of multiple pergola systems, retractable screens, and outdoor kitchen setups. Experience the smooth operation, test the controls, and see color samples in natural light.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">1802 Holian Drive</div>
                    <div className="text-text-secondary">Spring Grove, IL 60081</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-edg-brand-text shrink-0" />
                  <a href="tel:+18155810138" className="font-bold hover:text-edg-brand-text transition-colors">
                    (815) 581-0138
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/showroom">
                  <Button>Plan Your Visit</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Schedule Consultation</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/pergolas/residential-white-r-blade-led-strip.jpg"
                alt="EDG Outdoor Living showroom displays"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-white dark:bg-black border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Common Questions
              </h2>
              <p className="text-text-secondary">
                Everything you need to know about outdoor living systems.
              </p>
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

      {/* ========== FINAL CTA ========== */}
      <section className="bg-edg-dark text-white py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start with a free consultation. We&apos;ll assess your space, understand your goals, and recommend the right systems for your needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Start Your Project</Button>
              </Link>
              <Link href="/guides/planning-guide">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black">
                  Get Planning Guide
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
