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
  CheckCircle2,
  CloudSun,
  Building,
  Home,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Hinsdale, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Hinsdale homes. Serving The Lane, Katherine Legge area, and throughout the Village. Zoning-compliant designs for historic estates.',
  alternates: {
    canonical: '/service-areas/hinsdale-il',
  },
};

const localBenefits = [
  'Familiar with Village of Hinsdale zoning codes',
  'Historic district & estate experience',
  'Western Suburbs-appropriate designs',
  'Licensed & insured for Cook & DuPage Counties',
];

const neighborhoods = [
  {
    name: 'The Lane (Historic District)',
    description:
      'The Lane is Hinsdale\'s most prestigious address, featuring grand estates and historic homes. Our custom outdoor living systems are designed to complement these architectural masterpieces while respecting the area\'s heritage. We use premium materials and powder-coated finishes that harmonize with traditional and contemporary estate architecture.',
  },
  {
    name: 'Katherine Legge Area',
    description:
      'Properties near Katherine Legge Memorial Park enjoy spacious lots and mature landscapes. Our large-span pergola engineering minimizes posts, preserving sightlines across your property while creating expansive covered entertainment areas. We design with the area\'s wooded character in mind.',
  },
  {
    name: 'Washington Street Corridor',
    description:
      'The Washington Street area features a mix of charming traditional homes and newer construction. Our versatile design approach adapts to varied architectural styles, creating outdoor spaces that feel like natural extensions of your home. Perfect for homes seeking proximity to downtown convenience.',
  },
  {
    name: 'Graue Mill Area',
  description:
      'Near the historic Graue Mill and Fullersburg Woods, this area features homes with natural settings. Our motorized systems help you enjoy the wooded surroundings while providing protection from sun and insects. We design to maximize views of the natural landscape.',
  },
];

const localConsiderations = [
  {
    title: 'Historic Preservation',
    description:
      'Hinsdale has strict historic preservation guidelines, especially in The Lane district. Our systems are designed to meet these requirements with reversible installations and historically-appropriate aesthetics.',
    icon: Building,
  },
  {
    title: 'Large Estate Engineering',
    description:
      'Hinsdale\'s expansive properties deserve equally impressive outdoor spaces. Our engineering supports spans up to 24 feet without intermediate posts, creating clean sightlines across your estate.',
    icon: Home,
  },
  {
    title: 'Weather Adaptability',
    description:
      'From summer storms to winter snow loads, our systems automatically adapt. Louvers close under snow load and open to capture breezes—engineered for Illinois\' variable climate.',
    icon: CloudSun,
  },
  {
    title: 'Privacy & Security',
    description:
      'Our motorized shades and glass enclosures provide privacy in tight-knit neighborhoods while maintaining airflow and views. Optional wind sensors protect your investment.',
    icon: Shield,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Hinsdale?',
    answer:
      'Yes, most outdoor structures require permits in Hinsdale. The Village has specific guidelines regarding setbacks, height restrictions (typically 12-15 feet max), and impermeable surface ratios. Our team handles the entire permit process, including navigating any Historic Preservation Commission requirements for properties in historic districts.',
  },
  {
    question: 'How do you handle snow loads in Hinsdale winters?',
    answer:
      'Our louvered pergolas are engineered for Illinois snow loads (30psf rating). The smart control system monitors snow accumulation and automatically opens louvers to shed snow when needed. Unlike fabric awnings or traditional wood structures, our aluminum systems require no winterization or seasonal removal.',
  },
  {
    question: 'Can you work within Hinsdale\'s historic district requirements?',
    answer:
      'Absolutely. We have experience working with the Hinsdale Historic Preservation Commission. Our systems can be designed with reversible installations and powder-coated in colors that complement historic palettes. We\'ve completed projects in The Lane and other historic areas that received HPC approval.',
  },
  {
    question: 'What\'s the typical timeline for a Hinsdale project?',
    answer:
      'From consultation to completion, most Hinsdale projects take 8-12 weeks. Permit approval typically takes 4-6 weeks depending on whether Historic Preservation Commission review is required. We handle all village interactions and keep you informed throughout the process.',
  },
];

export default function HinsdaleHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Hinsdale',
            description:
              'Custom motorized pergolas and exterior shades for Hinsdale homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Hinsdale',
            },
            url: 'https://www.edgpatioshade.com/service-areas/hinsdale-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-03.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pergolas/residential-black-r-blade-03.jpg"
            alt="Black louvered pergola on luxury estate"
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
                <MapPin className="h-4 w-4" /> Service Area: Hinsdale, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Hinsdale Estate with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the historic estates of The Lane to modern homes near
                Katherine Legge Park, we design engineered shade systems that
                respect Hinsdale\'s architectural heritage and exceed its
                demanding standards.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Hinsdale Site Visit{' '}
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
                Serving Every Hinsdale Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of Hinsdale&apos;s distinct areas.
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
                Built for Hinsdale&apos;s Estate Lifestyle
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for the demands of luxury Western Suburban estates.
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
                Common Questions About Hinsdale Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Hinsdale.
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
                Ready to Start Your Hinsdale Project?
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
