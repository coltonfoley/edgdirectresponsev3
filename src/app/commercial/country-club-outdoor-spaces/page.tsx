import type { Metadata } from 'next';
import Image from 'next/image';
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
  Trophy,
  Wine,
  Users,
  Umbrella,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Country Club Outdoor Living | Chicago IL | EDG',
  description:
    'Upgrade your country club amenities with premium patio covers. Create deeper member engagement with shaded dining, pool decks, and event spaces.',
  alternates: {
    canonical: '/commercial/country-club-outdoor-spaces',
  },
  openGraph: {
    title: 'Country Club Outdoor Spaces | EDG Commercial',
    description:
      'Premium shade and shelter for discerning members. Country club patio covers.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'How do louvered pergolas enhance the 19th hole experience?',
    answer:
      'Our motorized pergolas allow members to enjoy post-round drinks and dining in complete comfort. Adjust louvers to block harsh afternoon sun while maintaining airflow, or close them completely during unexpected rain. Integrated heating and lighting options extend the usability into cooler evenings, encouraging members to linger longer.',
  },
  {
    question: 'Are your systems suitable for pool decks and cabanas?',
    answer:
      'Absolutely. Our aluminum pergolas are ideal for pool environments—they resist corrosion, require minimal maintenance, and provide essential UV protection for families. The motorized louvers allow poolside guests to control their sun exposure, and optional side screens add privacy for premium cabana experiences.',
  },
  {
    question: 'Can you help us host more events outdoors?',
    answer:
      'Yes. Our weatherproof systems transform outdoor terraces into reliable event venues. Rain sensors automatically close louvers at the first drop, integrated gutter systems manage heavy downpours, and wind sensors ensure safety during gusty conditions. This means no more last-minute event cancellations or tent rentals.',
  },
  {
    question: 'What member amenities work best with your systems?',
    answer:
      'Country clubs see excellent results with dining terraces, poolside cabanas, outdoor bars, wedding venues, and tournament viewing areas. Any space where members gather outdoors benefits from climate control—keeping them comfortable, protecting them from UV exposure, and encouraging longer visits.',
  },
];

const keyFeatures = [
  {
    icon: Trophy,
    title: 'Championship Comfort',
    description:
      'Create resort-quality outdoor spaces that match the prestige of your club with premium finishes and elegant design.',
  },
  {
    icon: Wine,
    title: '19th Hole Excellence',
    description:
      'Keep members comfortable at the bar and dining terrace with adjustable shade and protection from sudden weather changes.',
  },
  {
    icon: Users,
    title: 'Event Flexibility',
    description:
      'Host weddings, tournaments, and member events with confidence—rain or shine. Expand your venue capacity year-round.',
  },
  {
    icon: Umbrella,
    title: 'Poolside Luxury',
    description:
      'Provide UV protection for families while maintaining a premium resort aesthetic that elevates your pool deck experience.',
  },
];

const amenityAreas = [
  {
    title: 'The 19th Hole & Dining Terrace',
    description:
      'Members want to linger after a round, but not if they&apos;re baking in the sun. Our Commercial Patio Enclosures allow you to host events and dining in any weather.',
    benefits: ['Expand event capacity without new construction', 'Protect wedding bookings from rain'],
  },
  {
    title: 'Pool Deck & Cabanas',
    description:
      'Upgrade your poolside experience with motorized commercial outdoor shades that give members control over their environment.',
    benefits: ['UV protection for families', 'Premium cabana aesthetic'],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Country Club Outdoor Living Solutions',
  description: 'Premium motorized pergolas and shade systems for country club amenities',
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
export default function CountryClubPage() {
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
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.lifestyle}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Content */}
        <Container className="relative z-10">
          {/* Breadcrumb - Left Aligned */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Commercial', href: '/commercial' },
                { label: 'Country Clubs' },
              ]}
              className="text-zinc-300"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Club & Member Amenities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Member Experience with{' '}
              <span className="text-edg-brand">Country Club Patio Covers</span>.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From the 19th hole to the pool deck, provide the premium comfort
              your members expect. Shade, shelter, and style.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                Discuss Club Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AMENITY AREAS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {amenityAreas.map((area) => (
              <div key={area.title}>
                <h2 className="text-3xl font-bold mb-6">{area.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-edg-brand h-5 w-5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative mt-16 h-[400px] overflow-hidden rounded-3xl">
            <Image
              src={images.brand.context.pool}
              alt="Country Club Pool Deck Pergola"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute right-8 bottom-8 left-8 text-white">
              <p className="mb-2 text-sm font-bold tracking-widest uppercase">
                Member Amenities
              </p>
              <h3 className="text-3xl font-bold">Resort-Style Pool Decks</h3>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Elevate Every Member Experience
            </h2>
            <p className="text-lg text-gray-600">
              Premium outdoor living systems designed for the discerning expectations of private club members.
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
      <Section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Country Club Outdoor Living FAQs
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
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Hotel Solutions <ChevronRight className="h-4 w-4" />
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
              Plan Your 2026 Club Improvements
            </h2>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
