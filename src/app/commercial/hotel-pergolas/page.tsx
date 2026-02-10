import type { Metadata } from 'next';
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
  Sun,
  Calendar,
  TrendingUp,
  Wine,
  PartyPopper,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Hotel Pergola Systems | EDG',
  description:
    'Professional hotel pergola systems for Chicago and Milwaukee hotels. Motorized louvers, integrated rain sensors, and year-round revenue optimization.',
  alternates: {
    canonical: '/commercial/hotel-pergolas',
  },
  openGraph: {
    title: 'Commercial Hotel Pergola Systems | EDG',
    description:
      'Professional hotel pergola systems for Chicago and Milwaukee hotels. Motorized louvers, integrated rain sensors, and year-round revenue optimization.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'How quickly can hotel pergola systems respond to weather changes?',
    answer:
      'Our commercial-grade motors close louvers in 60-90 seconds when rain sensors detect precipitation. Wind sensors automatically open louvers when speeds exceed 25 mph, protecting the structure from damage.',
  },
  {
    question: 'What permit requirements apply for Chicago hotel rooftop installations?',
    answer:
      'Most installations require structural engineering review and Chicago Department of Buildings permits. We handle all permit applications, provide stamped engineering drawings, and coordinate inspections.',
  },
  {
    question: 'How do you handle the structural load on existing rooftops?',
    answer:
      'We perform structural analysis to verify existing roof capacity. For buildings requiring reinforcement, we design and install structural steel support columns, spread footings, or connections to existing structural elements.',
  },
  {
    question: 'What operational training do you provide hotel staff?',
    answer:
      'We provide comprehensive training including daily operation, seasonal maintenance, troubleshooting common issues, and emergency procedures. Written operation manuals and 24/7 technical support are included.',
  },
];

const keyFeatures = [
  {
    icon: Sun,
    title: 'Motorized Louvers',
    description:
      'Adjustable aluminum louvers open and close at the touch of a button, providing instant sun or rain protection.',
  },
  {
    icon: Calendar,
    title: 'Year-Round Use',
    description:
      'Integrated heating, lighting, and side enclosures transform seasonal spaces into year-round revenue generators.',
  },
  {
    icon: Building,
    title: 'Commercial Grade',
    description:
      'Engineered for high-traffic hospitality use with powder-coated aluminum and commercial-rated components.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description:
      'Convert underutilized rooftop and patio areas into bookable event spaces that generate revenue in any weather.',
  },
];

const useCases = [
  {
    icon: Wine,
    title: 'Rooftop Bars',
    description:
      'Create weather-protected rooftop bar experiences that stay open through Chicago\'s unpredictable weather.',
  },
  {
    icon: PartyPopper,
    title: 'Event Spaces',
    description:
      'Transform rooftops into bookable wedding and corporate event venues with guaranteed weather protection.',
  },
  {
    icon: Sun,
    title: 'Pool Decks',
    description:
      'Provide shade for pool areas during peak sun hours while allowing airflow and views.',
  },
];

const relatedPages = [
  { name: 'Hotel Roof Deck Systems', href: '/commercial/hotel-roof-deck-systems' },
  { name: 'Chicago Hospitality', href: '/commercial/chicago-hospitality-outdoor-living' },
  { name: 'West Loop', href: '/commercial/west-loop' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Hotel Pergola Systems',
  description:
    'Professional hotel pergola systems for Chicago and Milwaukee hotels with motorized louvers, integrated rain sensors, and year-round revenue optimization.',
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
  areaServed: [
    { '@type': 'City', name: 'Chicago' },
    { '@type': 'City', name: 'Milwaukee' },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function HotelPergolasPage() {
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
              "url('/images/commercial/hotel-rooftop-wedding-guests.png')",
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
                { label: 'Hotel Pergolas' },
              ]}
              className="text-gray-400"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Commercial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hotel Pergola Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional-grade motorized pergolas designed for hospitality. 
              Weather-responsive louvers, integrated climate control, and commercial 
              durability for Chicago and Milwaukee hotel rooftops.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                Request Hotel Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-16 bg-zinc-900 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-edg-brand mb-2">60s</div>
              <p className="text-gray-400">Rain Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-edg-brand mb-2">50+</div>
              <p className="text-gray-400">Hotel Installations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-edg-brand mb-2">100k+</div>
              <p className="text-gray-400">Guest Hours Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-edg-brand mb-2">10yr</div>
              <p className="text-gray-400">Warranty</p>
            </div>
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
              Engineered for Hospitality
            </h2>
            <p className="text-lg text-gray-600">
              Commercial-grade features designed for the demands of hotel operations.
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
          USE CASES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Hotel Applications
            </h2>
            <p className="text-lg text-gray-600">
              Common installations that transform underutilized spaces into revenue drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card
                key={useCase.title}
                variant="default"
                padding="lg"
                className="text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <IconWrapper
                  icon={useCase.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
              Common Questions
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
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
                >
                  {page.name} <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
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
              Ready to Transform Your Hotel Rooftop?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Schedule a consultation with our commercial team to discuss your hotel pergola project.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
