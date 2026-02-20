import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Home,
  CheckCircle2,
  Wind,
  Building,
  Trees,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Oak Brook, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Oak Brook estates. Serving Hinsdale, Burr Ridge, and Elmhurst. Zoning-compliant designs for luxury homes.',
  openGraph: {
    title: 'Oak Brook Outdoor Living | Pergolas & Shades | EDG',
    description: 'Custom outdoor living systems for Oak Brook. Motorized pergolas, retractable screens, and professional installation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Outdoor Living',
  },
  alternates: {
    canonical: '/service-areas/oak-brook-il',
  },
  keywords: ['oak brook pergolas', 'oak brook outdoor living', 'oak brook il patio', 'pergola installation oak brook', 'oak brook backyard'],
};

const localBenefits = [
  'Familiar with Village of Oak Brook zoning codes',
  'Estate property experience',
  'Tudor & Georgian architecture expertise',
  'Licensed & insured for DuPage County',
];

const neighborhoods = [
  {
    name: 'Oak Brook',
    description:
      'Home to some of the most prestigious estates in the Chicago area, Oak Brook features expansive properties with diverse architectural styles. We specialize in creating outdoor living spaces that complement the grandeur of Oak Brook homes, from sprawling poolside pergolas to sophisticated outdoor kitchens that match your estate\'s character.',
  },
  {
    name: 'Hinsdale',
    description:
      'Hinsdale\'s historic charm and tree-lined streets require thoughtful outdoor design. Our systems respect the village\'s architectural heritage while adding modern functionality. We navigate Hinsdale\'s strict building codes to create outdoor spaces that enhance property values in this coveted community.',
  },
  {
    name: 'Burr Ridge',
    description:
      'Burr Ridge properties often feature rolling terrain and wooded lots with unique views. Our custom engineering adapts to sloped yards and natural landscapes, creating level outdoor living areas that maximize your property\'s potential while preserving its natural beauty.',
  },
  {
    name: 'Elmhurst',
    description:
      'Elmhurst\'s mix of historic and contemporary homes calls for versatile design approaches. Whether you own a vintage Victorian or a modern new construction, we create outdoor systems that feel architecturally integrated and enhance your home\'s unique character.',
  },
];

const localConsiderations = [
  {
    title: 'Estate Architecture',
    description:
      'From Tudor Revival to Contemporary, we design systems that respect the architectural integrity of your Oak Brook estate. Custom powder-coating matches existing trim and materials.',
    icon: Building,
  },
  {
    title: 'Zoning Expertise',
    description:
      'We work directly with the Village of Oak Brook Development Services Department to navigate setbacks and impervious surface requirements for your project.',
    icon: FileText,
  },
  {
    title: 'Natural Settings',
    description:
      'Whether you overlook Salt Creek or the golf course fairways, our glass systems protect your view while keeping the elements at bay year-round.',
    icon: Trees,
  },
  {
    title: 'Western Suburbs Weather',
    description:
      'DuPage County experiences intense summer storms and heavy winter snow. Our louvered pergolas automatically open under snow load and withstand high winds.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Oak Brook?',
    answer:
      'Yes, most outdoor structures require permits in Oak Brook. The Village has specific guidelines regarding setbacks, impervious surface ratios, and height restrictions. Our team handles the entire permit process, including working with the Development Services Department to ensure your project meets all local requirements.',
  },
  {
    question: 'How do your systems handle Oak Brook\'s impervious surface limits?',
    answer:
      'Oak Brook\'s zoning codes limit impervious surface coverage on residential lots. Because our louvered pergolas are considered permeable when open, they often don\'t count toward your maximum coverage—unlike solid roof structures. We\'ve helped many Oak Brook and Hinsdale homeowners add covered outdoor space without exceeding their limits.',
  },
  {
    question: 'Can you match my home\'s existing architecture?',
    answer:
      'Absolutely. Our aluminum systems can be powder-coated to match any color palette, from traditional earth tones found in Hinsdale historic districts to contemporary whites and grays popular in Oak Brook new construction. We design with sightlines and architectural character in mind.',
  },
  {
    question: 'What\'s the typical timeline for an Oak Brook project?',
    answer:
      'From consultation to completion, most Oak Brook area projects take 10-14 weeks. Permit approval in DuPage County typically takes 4-6 weeks. We handle all village interactions and inspections throughout the process.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function OakBrookHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Oak Brook',
            description:
              'Custom motorized pergolas and exterior shades for Oak Brook estates.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Oak Brook',
            },
            url: 'https://www.edgpatioshade.com/service-areas/oak-brook-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="White louvered pergola with glass doors on estate"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Oak Brook, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Oak Brook Estate with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the fairways of Oak Brook to the historic streets of
                Hinsdale, we design engineered shade systems that complement
                western suburb architecture and handle Illinois weather.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Oak Brook Site Visit{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Oak Brook & Western Suburbs
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of DuPage County&apos;s finest communities.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-text-secondary">{neighborhood.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Western Suburbs Estates
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for Oak Brook area climate and architectural requirements.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Oak Brook Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in the western suburbs.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Start Your Oak Brook Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation with our local design team.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="dark"
                  className="px-8 text-lg"
                >
                  Schedule Free Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
