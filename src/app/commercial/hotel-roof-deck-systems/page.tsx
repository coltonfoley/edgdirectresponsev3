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
  Waves,
  Wind,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hotel Patio Shading & Roof Deck Systems | Chicago Hospitality',
  description:
    'Activate your hotel rooftop or terrace. Commercial outdoor shades and heavy-duty pergolas designed for high-wind hotel environments.',
  alternates: {
    canonical: '/commercial/hotel-roof-deck-systems',
  },
  openGraph: {
    title: 'Hotel Patio Shading | EDG Commercial',
    description:
      'Chicago hotel outdoor amenities. Wind-rated protection for guests.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'What wind ratings do hotel roof deck systems require?',
    answer:
      'Hotel rooftop systems in Chicago must withstand wind loads up to 120 mph. Our commercial-grade pergolas and exterior shades are engineered with reinforced mounting systems specifically for elevated installations. Louvers automatically open in high winds to prevent damage, and we conduct structural engineering reviews to ensure attachment points can handle wind uplift forces.',
  },
  {
    question: 'Do you handle permitting for hotel rooftop installations?',
    answer:
      'Yes, we manage the entire permitting process for hotel roof deck systems including structural engineering, wind load calculations, and city approvals. Chicago requires specific permits for rooftop structures on commercial properties, and we have extensive experience navigating CDOT and building department requirements for hospitality venues.',
  },
  {
    question: 'How are the shading controls managed for hotel guests?',
    answer:
      'Our hotel roof deck systems offer flexible control options. Staff can manage the entire system remotely via smartphone app, or guests can have direct control through intuitive wall switches or tabletop remotes. Controls can be limited to staff-only during certain hours, or guests can have full control to adjust sun and shade as needed.',
  },
  {
    question: 'What maintenance is required for hotel roof deck systems?',
    answer:
      'Our aluminum pergolas and shade systems require minimal maintenance—just occasional cleaning with soap and water. The powder-coat finish never needs painting, and motors are sealed against weather. We offer annual service plans that include inspection, lubrication, and preventive maintenance to keep your hotel amenities operating flawlessly for guests.',
  },
];

const keyFeatures = [
  {
    icon: Wind,
    title: 'High Wind Ratings',
    description:
      'Rooftops in Chicago face extreme wind loads. Our Commercial Outdoor Shades and pergolas are engineered to withstand these forces without consistent noise or damage.',
  },
  {
    icon: Waves,
    title: 'Pool Deck Comfort',
    description:
      'Offer guests refuge from the sun. Automated systems can track the sun or be controlled by staff to optimize comfort throughout the day.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial Durability',
    description:
      'Low maintenance aluminum construction means no rust, no painting, and minimal downtime for your engineering team.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hotel Roof Deck Systems',
  description: 'Commercial outdoor shades and heavy-duty pergolas for hotel rooftops and terraces',
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
export default function HotelRoofDeckPage() {
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
            backgroundImage: "url(/images/enclosures/frameless-sliding-glass-walls.jpg)",
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
                { label: 'Roof Deck Systems' },
              ]}
              className="text-zinc-300"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Hotel & Resort Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium{' '}
              <span className="text-edg-brand">Hotel Patio Shading</span> &
              Rooftop Systems.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Create memorable guest experiences on rooftops, terraces, and pool
              decks. Wind-rated systems built for the Chicago skyline.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                Hotel Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {keyFeatures.map((feature) => (
              <Card key={feature.title} variant="outline" padding="lg" className="group">
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

          {/* Feature Image */}
          <div className="relative mt-16 h-[500px] overflow-hidden rounded-3xl">
            <img
              src={images.brand.hero.screensOld}
              alt="Hotel Terrace Amenities"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="max-w-2xl">
                <h3 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                  Activate Every Square Foot
                </h3>
                <p className="text-xl text-gray-200">
                  Turn your hotel terrace into a premium revenue generator, day
                  or night, rain or shine.
                </p>
              </div>
            </div>
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
              Hotel Roof Deck FAQs
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
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Hotel Pergolas <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/restaurant-patio-solutions"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Restaurant Solutions <ChevronRight className="h-4 w-4" />
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
              Upgrade Your Guest Experience
            </h2>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
