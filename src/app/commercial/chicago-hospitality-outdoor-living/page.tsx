import type { Metadata } from 'next';
import * as images from '@/lib/images';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Building2,
  Wind,
  TrendingUp,
  FileCheck,
  Utensils,
  Hotel,
  GlassWater,
  Phone,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chicago Hospitality Outdoor Living | Restaurant & Hotel Pergolas',
  description:
    'Maximize your Chicago hospitality revenue with all-weather outdoor living systems. Custom pergolas and enclosures for restaurants, hotels, and clubs.',
  alternates: {
    canonical: '/commercial/chicago-hospitality-outdoor-living',
  },
  openGraph: {
    title: 'Chicago Hospitality Outdoor Living | EDG',
    description:
      'Turn your Chicago patio into a year-round profit center. Commercial pergolas and enclosures.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'Do Chicago restaurants need permits for outdoor patio enclosures?',
    answer:
      'Yes, most Chicago hospitality venues require permits for permanent patio structures. We handle the entire permitting process including zoning reviews, structural engineering, and City of Chicago building department approvals. Our team knows the specific requirements for commercial outdoor dining structures in the West Loop, North Shore, and downtown districts.',
  },
  {
    question: 'How do your systems handle Chicago\'s extreme weather and lake effect snow?',
    answer:
      'Our commercial pergolas are engineered specifically for Midwest conditions with snow load ratings up to 40 psf and wind ratings to 120 mph. The motorized louvers automatically open during high winds to prevent damage, and our integrated heating systems extend outdoor dining season to 8-9 months, even through Chicago\'s unpredictable lake effect weather.',
  },
  {
    question: 'What is the typical ROI for a Chicago restaurant patio enclosure?',
    answer:
      'Most Chicago hospitality venues see a complete return on investment within one season. A typical 1,500 sq ft enclosed patio generates $150,000-$300,000 in additional annual revenue by eliminating weather-related cancellations and extending the outdoor dining season from 4 months to year-round operation.',
  },
  {
    question: 'How long does installation take for a commercial hospitality project?',
    answer:
      'Most Chicago hospitality installations are completed in 2-4 weeks, depending on permitting and customization. We work around your service hours to minimize disruption—often installing during closed hours or maintenance windows. Our team coordinates closely with your operations to ensure zero downtime for your venue.',
  },
];

const keyFeatures = [
  {
    icon: Building2,
    title: 'Chicago Code Compliant',
    description:
      'Full permitting support for City of Chicago, North Shore, and suburban municipalities. We know what gets approved.',
  },
  {
    icon: Wind,
    title: 'Lake Effect Rated',
    description:
      'Engineered for Chicago\'s harsh winters and severe storms with 120 mph wind ratings and 40 psf snow load capacity.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description:
      'Transform seasonal patio space into year-round profit centers. Typical ROI is achieved in a single season.',
  },
  {
    icon: FileCheck,
    title: 'Turnkey Installation',
    description:
      'Low-disruption installation coordinated around your service hours. We handle everything from permits to final inspection.',
  },
];

const industrySolutions = [
  {
    icon: Utensils,
    title: 'Restaurant Patios',
    description:
      'Maximize cover counts and eliminate reservation cancellations. See how leading Chicago restaurants protect their revenue.',
    href: '/commercial/restaurant-patio-enclosures',
    cta: 'Restaurant Solutions',
    image: images.brand.context.commercial,
  },
  {
    icon: GlassWater,
    title: 'Country Clubs',
    description:
      'Enhance member amenities with premium outdoor dining and event spaces. Create the perfect 19th hole environment.',
    href: '/commercial/country-club-outdoor-spaces',
    cta: 'Club Solutions',
    image: images.brand.hero.pergola,
  },
  {
    icon: Hotel,
    title: 'Hotels & Rooftops',
    description:
      'Transform underutilized rooftops and terraces into year-round event venues and bars.',
    href: '/commercial/hotel-roof-deck-systems',
    cta: 'Hotel Solutions',
    image: images.brand.hero.glass,
  },
];

const localBenefits = [
  {
    title: 'Local Code Expertise',
    description:
      'We handle permitting for City of Chicago, North Shore, and suburbs. We know what gets approved.',
  },
  {
    title: 'Midwest Weather Rated',
    description:
      'Our systems are engineered for Chicago winters (heavy snow load) and severe storms (high wind rating).',
  },
  {
    title: 'Rapid, Low-Disruption Install',
    description:
      'We work around your service hours to get your new revenue-generating space up and running fast.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chicago Hospitality Outdoor Living Design',
  description: 'Commercial pergolas and outdoor living systems for Chicago restaurants, hotels, and hospitality venues',
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
export default function ChicagoHospitalityPage() {
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
            backgroundImage: "url(${images.brand.context.commercial})",
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
                { label: 'Chicago Hospitality' },
              ]}
              className="text-zinc-300"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Chicago&apos;s Premier{' '}
              <span className="text-edg-brand">Hospitality Outdoor Design</span>{' '}
              Experts.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From the West Loop to the North Shore, we specialize in Restaurant
              Patio Design and high-ROI outdoor spaces for Chicago&apos;s top hotels
              and country clubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-none">
                  Get a Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-none"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRY SOLUTIONS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tailored Solutions for Your Venue
            </h2>
            <p className="text-lg text-gray-600">
              Every hospitality space has unique needs. Explore our specialized
              solutions designed for your specific business model.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {industrySolutions.map((solution) => (
              <Card
                key={solution.title}
                variant="default"
                padding="none"
                className="group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${solution.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                </div>
                <div className="p-8">
                  <IconWrapper
                    icon={solution.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Link
                    href={solution.href}
                    className="text-edg-brand-text inline-flex items-center font-bold hover:underline"
                  >
                    {solution.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
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
              Built for Chicago Hospitality
            </h2>
            <p className="text-lg text-gray-600">
              Commercial-grade systems engineered for the unique demands of Chicago&apos;s hospitality industry.
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
          LOCAL EXPERTISE SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                We Understand Chicago Hospitality.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Operating a hospitality venue in Chicago is unique. We know the
                challenges of the &quot;patio season&quot; scramble, the unpredictable
                lake effect weather, and the strict City of Chicago and suburban
                building codes.
              </p>

              <div className="space-y-6">
                {localBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-edg-brand-text h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-zinc-800">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(images.brand.context.commercial)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute right-0 bottom-0 left-0 p-10">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Serving the Greater Chicago Area
                </h3>
                <p className="text-gray-300">
                  Downtown • West Loop • North Shore • Lake Geneva
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i} variant="outline" padding="lg">
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
      <Section className="py-16 bg-zinc-100 border-t border-gray-200">
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
                href="/commercial/west-loop"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                West Loop <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Hotel Pergolas <ChevronRight className="h-4 w-4" />
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
              Start Planning Your 4-Season Space
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Don&apos;t let another season of revenue wash away. Schedule a
              consultation with our commercial design team today.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Book Site Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
