import type { Metadata } from 'next';
import Image from 'next/image';
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
  ShieldCheck,
  CheckCircle2,
  CloudSun,
  Building,
  Wind,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Wilmette, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Wilmette homes. Serving the Cage neighborhood to Lake Michigan. Zoning-compliant designs for historic districts.',
  alternates: {
    canonical: '/service-areas/wilmette-il',
  },
};

const localBenefits = [
  'Familiar with Village of Wilmette zoning codes',
  'Historic district experience',
  'North Shore-appropriate designs',
  'Licensed & insured for Cook County',
];

const neighborhoods = [
  {
    name: 'The Cage (Historic District)',
    description:
      'Wilmette\'s historic "Cage" district features beautiful brick homes from the early 1900s. We specialize in designing outdoor living systems that complement these historic properties while meeting strict preservation guidelines. Our powder-coated aluminum systems can match existing trim and architectural details.',
  },
  {
    name: 'East Wilmette (Lakefront)',
    description:
      'Properties near Lake Michigan experience unique weather conditions including strong winds and sudden temperature changes. Our hurricane-rated louvered pergolas are engineered to withstand these conditions while providing shelter from lake-effect weather.',
  },
  {
    name: 'Indian Hill Estates',
    description:
      'This prestigious neighborhood features larger lots perfect for expansive outdoor living spaces. Our large-span engineering minimizes support columns, preserving sightlines across your property while maximizing usable covered area.',
  },
  {
    name: 'McKenzie Neighborhood',
    description:
      'The McKenzie area\'s mix of traditional and contemporary homes benefits from our custom design approach. Whether you have a classic colonial or modern architecture, we create systems that feel like they were built with your home.',
  },
];

const weatherConsiderations = [
  {
    title: 'Lake Effect Weather',
    description:
      'Wilmette\'s proximity to Lake Michigan creates sudden weather changes. Our motorized systems adapt instantly—close louvers when wind shifts off the lake, open them to capture cooling breezes.',
    icon: Wind,
  },
  {
    title: 'Winter Snow Loads',
    description:
      'North Shore winters bring heavy snow. Our louvers open automatically under snow load, preventing accumulation and protecting your investment. Rated for 30psf snow loads.',
    icon: CloudSun,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'Wilmette summers can be intense. Our exterior shades block 95% of UV rays while maintaining airflow, keeping your outdoor space comfortable even in July.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Wilmette?',
    answer:
      'Yes, most outdoor structures require permits in Wilmette. The Village has strict guidelines regarding impermeable surface ratios (typically 30-40% max) and setbacks. Our team handles the entire permit process, including navigating the impermeable surface calculations that often challenge North Shore properties.',
  },
  {
    question: 'How do louvered pergolas help with Wilmette\'s impermeable surface limits?',
    answer:
      'Wilmette\'s zoning codes limit how much of your lot can be covered by impermeable surfaces. Because our louvered pergolas are considered "permeable" when open, they often don\'t count toward your maximum coverage—unlike solid roof structures. We\'ve successfully helped many Wilmette homeowners add covered outdoor space without exceeding their limits.',
  },
  {
    question: 'Can you work with historic district requirements?',
    answer:
      'Absolutely. We have extensive experience with Wilmette\'s Historic Preservation Commission. Our systems can be powder-coated to match historic color palettes, and we design with sightlines and architectural character in mind. We\'ve completed projects in the Cage historic district that received HPC approval.',
  },
  {
    question: 'What\'s the typical timeline for a Wilmette project?',
    answer:
      'From consultation to completion, most Wilmette projects take 8-12 weeks. Permit approval typically takes 4-6 weeks. We handle all village interactions, including any Historic Preservation Commission reviews if required.',
  },
];

export default function WilmetteHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Wilmette',
            description:
              'Custom motorized pergolas and exterior shades for Wilmette homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Wilmette',
            },
            url: 'https://www.edgpatioshade.com/service-areas/wilmette-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-white-r-blade-led-strip.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pergolas/residential-white-r-blade-led-strip.jpg"
            alt="White louvered pergola with LED lighting"
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
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Wilmette, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Wilmette Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the brick streets of the Cage to the shores of Lake
                Michigan, we design engineered shade systems that respect
                Wilmette&apos;s architectural heritage and handle its unique weather.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Wilmette Site Visit{' '}
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
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> {benefit}
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
                Serving Every Wilmette Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of Wilmette&apos;s distinct areas.
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

      {/* ========== WEATHER CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Wilmette&apos;s Lakefront Weather
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for North Shore climate challenges.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weatherConsiderations.map((item, i) => (
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
                Common Questions About Wilmette Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Wilmette.
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

      {/* ========== CLUSTER LINKS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Local Resources for Wilmette Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/wilmette-il/zoning-guide"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Wilmette Building & Zoning Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Before you build, understand the &quot;Impermeable Surface&quot; limits
                    and setbacks specific to Wilmette village codes.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read the Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/wilmette-il/louvered-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Louvered Pergolas in Wilmette
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Why aluminum louvered roofs are the preferred choice for North
                    Shore winters over traditional wood structures.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
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
                Ready to Start Your Wilmette Project?
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
