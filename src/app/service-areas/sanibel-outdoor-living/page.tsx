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
  Wind,
  Droplets,
  Sun,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sanibel Outdoor Living: Hurricane-Rated Pergolas & Lanais | EDG',
  description:
    'Premium louvered roof systems and motorized screens designed for Sanibel Island\'s strict sanctuary codes and coastal climate. Miami-Dade rated for hurricane protection.',
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living',
  },
};

const localBenefits = [
  'Miami-Dade Hurricane Rated systems',
  'Sanibel sanctuary code expertise',
  'Salt-air corrosion resistant materials',
  'Stilt home & elevated deck specialists',
];

const areas = [
  {
    name: 'Sanibel Island (Gulf Coast)',
    description:
      'From beachfront estates to canal homes, we design outdoor living systems that maximize Gulf views while meeting Sanibel\'s strict impermeable surface and vegetation codes. Our motorized screens provide protection from afternoon storms without blocking the seabreeze.',
  },
  {
    name: 'Captiva Island',
    description:
      'Captiva\'s narrow geography creates unique microclimates with higher wind exposure. Our hurricane-rated pergolas are engineered to withstand Gulf storms while providing shade during intense subtropical sun. Perfect for the island\'s resort-style homes.',
  },
  {
    name: 'Wulfert & The Dunes',
    description:
      'This prestigious Gulf-front community demands systems that complement high-end architecture. We specialize in large-span designs that minimize support columns while maximizing panoramic water views. All designs respect the fragile dune ecosystem.',
  },
  {
    name: 'Roosevelt Channel & Blind Pass',
    description:
      'Properties near these dynamic waterways face unique salt-air exposure and wind patterns. Our marine-grade aluminum systems with specialized coatings resist corrosion while standing up to coastal winds. Ideal for boat dockside living spaces.',
  },
];

const localConsiderations = [
  {
    title: 'Hurricane Code Compliance',
    description:
      'All systems carry Miami-Dade County hurricane ratings—critical for Sanibel\'s high-velocity hurricane zone. Our louvered roofs withstand sustained winds up to 175 mph and are Florida Product Approved.',
    icon: Wind,
  },
  {
    title: 'Salt-Air Corrosion Resistance',
    description:
      'Marine-grade 6061-T6 aluminum with fluoropolymer coatings resists the aggressive salt-air environment. Unlike steel or wood, our systems maintain their finish without rust, rot, or constant maintenance.',
    icon: Droplets,
  },
  {
    title: 'Coastal Wind Engineering',
    description:
      'Engineered for open-exposure coastal conditions. Our systems handle sustained Gulf winds while allowing you to adjust louvers for optimal airflow—capturing seabreezes when desired, blocking them when needed.',
    icon: Sun,
  },
  {
    title: 'Sanctuary Zoning Navigation',
    description:
      'Sanibel\'s strict impermeable coverage limits (40% maximum) and vegetation protection codes require expertise. We design accessory structures that maximize your allowance while preserving native landscaping.',
    icon: FileText,
  },
];

const faqs = [
  {
    question: 'Do your pergolas meet Florida\'s hurricane building codes?',
    answer:
      'Yes. All our louvered roof systems carry Miami-Dade County NOAs (Notices of Acceptance) and are Florida Product Approved for High Velocity Hurricane Zones (HVHZ). This is essential for Sanibel, which requires systems rated for 175+ mph winds. We provide all documentation needed for permits.',
  },
  {
    question: 'How do you handle Sanibel\'s impermeable surface limits?',
    answer:
      'Sanibel limits impermeable surfaces to 40% of lot coverage. Because our louvered pergolas are considered permeable when open (rainwater passes through), they typically don\'t count toward your impermeable limit—unlike solid roof structures. This allows you to add significant covered outdoor space while staying compliant.',
  },
  {
    question: 'Will salt air damage the aluminum structure?',
    answer:
      'Our systems use marine-grade 6061-T6 aluminum with premium fluoropolymer paint finishes specifically formulated for coastal environments. Unlike steel or wood pergolas that require constant maintenance in salt air, our aluminum systems carry 15-20 year finish warranties and resist corrosion indefinitely.',
  },
  {
    question: 'What\'s the typical timeline for a Sanibel project?',
    answer:
      'Most Sanibel projects take 10-14 weeks from contract to completion. The City of Sanibel permitting process typically takes 4-6 weeks, including potential review by the Vegetation Committee. We handle all permit submissions and coordinate with local officials to ensure compliance.',
  },
];

export default function SanibelHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Sanibel',
            description:
              'Premium louvered roof systems and motorized screens designed for Sanibel Island\'s strict sanctuary codes and coastal climate.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Sanibel',
            },
            url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
            alt="White louvered pergola for coastal home"
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
                <MapPin className="h-4 w-4" /> Service Area: Sanibel & Captiva
              </span>
              <h1 className="hero-title mb-6 text-white">
                Hurricane-Rated Outdoor Living
                <span className="text-edg-brand block">for Sanibel Island</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Miami-Dade certified pergolas and motorized screens designed for
                the Gulf Coast. Engineered to withstand 175+ mph winds while
                respecting Sanibel&apos;s sanctuary conservation codes.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Sanibel Site Visit{' '}
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

      {/* ========== AREAS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving All Sanibel & Captiva Communities
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                From Gulf-front estates to canal homes, we understand the unique
                requirements of Southwest Florida&apos;s barrier islands.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {areas.map((area, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{area.name}</h3>
                  <p className="text-text-secondary">{area.description}</p>
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
                Built for Gulf Coast Conditions
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for Florida&apos;s coastal
                climate challenges.
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
                Common Questions About Sanibel Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living on Sanibel Island.
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
                Local Resources for Sanibel Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/sanibel-outdoor-living/zoning-guide"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Sanibel Building & Zoning Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Navigate Sanibel&apos;s strict impermeable surface limits,
                    vegetation protection codes, and post-Hurricane Ian rebuilding requirements.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read the Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Hurricane-Rated Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our Miami-Dade rated louvered roof systems engineered
                    specifically for Sanibel&apos;s High Velocity Hurricane Zone.
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
                Ready to Start Your Sanibel Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation with our coastal design team.
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
