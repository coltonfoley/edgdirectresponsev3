import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import * as images from '@/lib/images';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChefHat,
  Snowflake,
  Building2,
  Leaf,
  Utensils,
  Check,
  Quote,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restaurant Patio Solutions | Four-Season Outdoor Dining | EDG',
  description:
    'Turn weather-dependent patios into year-round profit centers. Add 30% more capacity with fully enclosed, heated outdoor dining spaces for Chicago restaurants.',
  alternates: {
    canonical: '/commercial/restaurant-patio-solutions',
  },
  openGraph: {
    title: 'Restaurant Patio Solutions | EDG Commercial',
    description:
      'Turn weather-dependent patios into year-round profit centers. Motorized pergolas for Chicago restaurants.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'How quickly can a restaurant patio system be installed?',
    answer:
      'Most restaurant installations take 3-5 days. We work around your operating hours—installing during closed days, early mornings, or late nights—to minimize disruption to your service. Permitting typically takes 2-4 weeks depending on your municipality.',
  },
  {
    question: 'Do these systems require a lot of maintenance?',
    answer:
      'No. Our aluminum pergolas require minimal maintenance—just occasional cleaning with soap and water. The powder-coat finish never needs painting, and the motors are sealed against weather. We offer annual service plans that include inspection, lubrication, and preventive maintenance.',
  },
  {
    question: 'Can guests operate the roof controls?',
    answer:
      'Yes, controls can be configured for guest or staff-only operation. Many restaurants provide tabletop remotes or wall switches that guests can use to adjust sun shade. Staff can also control the entire system from a central location or smartphone app.',
  },
  {
    question: 'What happens in heavy wind or snow?',
    answer:
      'Our systems are engineered for Chicago weather—rated for 120 mph winds and 40 psf snow loads. Wind sensors automatically open louvers in high winds to prevent damage. Snow loads are handled by the structural engineering, and integrated heating options keep the space usable in winter.',
  },
];

const keyFeatures = [
  {
    icon: Snowflake,
    title: 'Snow Load Rated',
    description:
      'Engineered for 40 psf snow loads. Our systems handle Chicago winters without structural concerns.',
  },
  {
    icon: Building2,
    title: 'City Permit Ready',
    description:
      'We handle all permitting and city approvals. Our designs meet Chicago building codes for commercial structures.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    description:
      'Adjustable louvers provide natural cooling in summer and retain heat in winter, reducing HVAC costs.',
  },
  {
    icon: ChefHat,
    title: 'Staff Friendly',
    description:
      'Simple controls that staff can master in minutes. Remote monitoring and automatic weather response.',
  },
];

const solutionTypes = [
  {
    title: 'Retractable Roofs',
    description:
      'Best for maximizing "al fresco" vibes. The roof completely retracts to open the sky on perfect days.',
    features: ['100% Sky visibility', 'Integrated water drainage'],
  },
  {
    title: 'Louvered Systems',
    description:
      'Best for precise control. Tilt louvers to block blinding sunset glare while keeping airflow moving.',
    features: ['Bioclimatic cooling', 'Heavy snow load capacity'],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Patio Solutions',
  description: 'Motorized pergolas and enclosures for restaurant outdoor dining',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function RestaurantPatioSolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(images.brand.context.commercial)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Content */}
        <Container className="relative z-10">
          {/* Breadcrumb - Left Aligned */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Commercial', href: '/commercial' },
                { label: 'Restaurant Solutions' },
              ]}
              className="text-zinc-300"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              <Utensils className="h-4 w-4" /> Restaurant Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Four-Season
              <span className="text-edg-brand block">Dining Revenue</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Don&apos;t let Chicago weather dictate your profits. Add 30% more
              capacity with fully enclosed, heated outdoor dining spaces.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                Get a Commercial Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROBLEM/SOLUTION SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-edg-brand-text mb-2 block text-sm font-bold tracking-wider uppercase">
                The Problem We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                From &quot;Weather Permitting&quot; to{' '}
                <span className="text-edg-brand">&quot;Always Open&quot;</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every rainy Friday night costs you thousands in lost covers.
                Our systems aren&apos;t just umbrellas; they are engineered
                structures that seal out rain, wind, and snow, keeping your
                guests (and their food) warm.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {keyFeatures.slice(0, 4).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
                    <IconWrapper icon={f.icon} variant="brand" size="sm" />
                    <span className="font-medium text-sm">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <Card variant="default" padding="lg" className="bg-zinc-900 text-white">
              <div className="absolute top-0 right-0 bg-edg-brand text-black flex items-center gap-1 px-3 py-1 text-xs font-bold">
                <Star className="h-3 w-3 fill-current" /> Case Study
              </div>
              <Quote className="text-edg-brand/30 mb-4 h-8 w-8" />
              <h3 className="mb-4 text-2xl font-bold">West Loop Italian Concept</h3>
              <p className="mb-8 text-lg text-gray-300 italic">
                &quot;We added 40 seats with the EDG system. It paid for itself in
                4 months during the winter season alone. Guests actually
                request the &apos;outdoor&apos; tables now.&quot;
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div>
                  <span className="text-edg-brand block text-4xl font-bold">40</span>
                  <span className="text-sm text-zinc-300">New Seats Added</span>
                </div>
                <div>
                  <span className="text-edg-brand block text-4xl font-bold">4mo</span>
                  <span className="text-sm text-zinc-300">ROI Payback</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          SOLUTION TYPES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tailored for Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              We know the hospitality industry. Fast installs, durable
              materials, and designs that impress.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {solutionTypes.map((solution) => (
              <Card key={solution.title} variant="outline" padding="lg">
                <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="bg-edg-brand/10 flex h-6 w-6 items-center justify-center rounded-full">
                        <Check className="text-edg-brand-text h-3 w-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built for Restaurant Operations
            </h2>
            <p className="text-lg text-gray-600">
              Commercial-grade features designed for the demands of the hospitality industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
                variant="outline"
                padding="lg"
                className="group"
              >
                <IconWrapper
                  icon={feature.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Restaurant Patio FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i} variant="default" padding="lg">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          RELATED SOLUTIONS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-16 bg-white border-t border-gray-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-edg-brand-text transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">All Commercial Solutions</span>
            </Link>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/commercial/restaurant-patio-enclosures"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Patio Enclosures <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Hotel Solutions <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-edg-brand py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Let&apos;s Calculate Your ROI
            </h2>
            <p className="text-xl text-black/80 mb-8">
              See how quickly a four-season patio pays for itself.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-900"
                >
                  Request Site Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/commercial/restaurant-patio-enclosures">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black/10"
                >
                  View Enclosure Options
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
