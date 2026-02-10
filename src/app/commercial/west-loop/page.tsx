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
  Building,
  MapPin,
  FileCheck,
  TrendingUp,
  Users,
  Wine,
  Briefcase,
  PartyPopper,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'West Loop Commercial Outdoor Living | EDG',
  description:
    'Commercial outdoor living systems for Chicago West Loop restaurants, hotels, and hospitality venues in Fulton Market and surrounding areas.',
  alternates: {
    canonical: '/commercial/west-loop',
  },
  openGraph: {
    title: 'West Loop Commercial Outdoor Living | EDG',
    description:
      'Commercial outdoor living systems for Chicago West Loop restaurants, hotels, and hospitality venues in Fulton Market and surrounding areas.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'What permits are required for West Loop rooftop installations?',
    answer:
      'West Loop falls under Chicago Ward 27. Most rooftop installations require CDOT permits and structural engineering review. We handle all permit applications and coordinate with city departments on your behalf.',
  },
  {
    question: 'How long does installation typically take?',
    answer:
      'Most West Loop commercial installations take 2-3 weeks from permit approval. We coordinate with your operations team to minimize disruption during installation.',
  },
  {
    question: 'Do you work with historic buildings in Fulton Market?',
    answer:
      'Yes, we have experience with historic building requirements. Fulton Market\'s historic district may have additional design guidelines. We\'ll coordinate with the Commission on Chicago Landmarks if required.',
  },
  {
    question: 'What about Chicago\'s seasonal weather?',
    answer:
      'Our systems include integrated heating and weather sensors. Louvers close automatically in rain and snow. We design systems specifically for Chicago\'s climate extremes.',
  },
];

const keyFeatures = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'Deep knowledge of Chicago permitting, ward requirements, and Fulton Market district regulations.',
  },
  {
    icon: FileCheck,
    title: 'Permit Handling',
    description:
      'We manage all CDOT permits, structural engineering, and city inspections from start to finish.',
  },
  {
    icon: Building,
    title: 'Rooftop Ready',
    description:
      'Engineered for Chicago rooftops with wind ratings up to 90 mph and integrated drainage systems.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description:
      'Transform seasonal patios into year-round dining spaces that generate revenue in any weather.',
  },
];

const amenityAreas = [
  {
    icon: Wine,
    title: 'Rooftop Dining',
    description:
      'Create weather-protected rooftop dining experiences with motorized louvers and integrated heating.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description:
      'Bookable event spaces for corporate functions with guaranteed weather protection.',
  },
  {
    icon: PartyPopper,
    title: 'Private Functions',
    description:
      'Private dining areas and event spaces that remain comfortable in any Chicago weather.',
  },
  {
    icon: Users,
    title: 'Guest Lounges',
    description:
      'Comfortable outdoor lounge areas for hotel guests and restaurant patrons.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'West Loop Commercial Outdoor Living',
  description:
    'Commercial outdoor living systems for Chicago West Loop restaurants, hotels, and hospitality venues in Fulton Market and surrounding areas.',
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
    containsPlace: {
      '@type': 'Neighborhood',
      name: 'West Loop',
    },
  },
};

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function WestLoopPage() {
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
              "url('/images/commercial/hotel-rooftop-restaurant.jpg')",
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
                { label: 'West Loop' },
              ]}
              className="text-gray-400"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Chicago Commercial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              West Loop & Fulton Market
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Commercial outdoor living systems designed for Chicago West Loop restaurants, 
              hotels, and hospitality venues. From Randolph Street to Fulton Market, 
              we understand the unique requirements of this premier dining and entertainment district.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                Request West Loop Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTRO SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white dark:bg-zinc-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Built for Chicago West Loop
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The West Loop and Fulton Market district has transformed into one of 
                Chicago&apos;s premier dining and entertainment destinations. From 
                Randolph Street&apos;s restaurant row to the hotel rooftops along 
                Halsted, outdoor space is at a premium.
              </p>
              <p className="text-lg text-gray-600">
                Our commercial outdoor living systems are engineered for the specific 
                challenges of Chicago&apos;s climate and West Loop building requirements. 
                We handle everything from permits to installation.
              </p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Service Area Coverage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-edg-brand-text" />
                  Fulton Market District
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-edg-brand-text" />
                  Randolph Street Corridor
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-edg-brand-text" />
                  Greektown & University Village
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-edg-brand-text" />
                  Medical District
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-edg-brand-text" />
                  East Garfield Park
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why West Loop Businesses Choose EDG
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise combined with commercial-grade engineering for West Loop hospitality.
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
          AMENITY AREAS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white dark:bg-zinc-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Common West Loop Installations
            </h2>
            <p className="text-lg text-gray-600">
              Outdoor living systems tailored for the West Loop hospitality market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {amenityAreas.map((area) => (
              <Card
                key={area.title}
                variant="outline"
                padding="lg"
                className="group"
              >
                <div className="flex items-start gap-4">
                  <IconWrapper
                    icon={area.icon}
                    variant="brand"
                    size="lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100 dark:bg-zinc-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              West Loop Installation Questions
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
      <Section className="py-16 bg-white border-t border-gray-200 dark:border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-edg-brand-text transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">All Commercial Solutions</span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="/commercial/chicago-hospitality-outdoor-living"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Chicago Hospitality <ChevronRight className="h-4 w-4" />
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
              Transform Your West Loop Space
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Schedule a consultation to discuss your West Loop commercial outdoor living project.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Request West Loop Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
