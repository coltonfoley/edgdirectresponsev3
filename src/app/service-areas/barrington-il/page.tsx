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
  Wind,
  Building,
  Trees,
  Ruler,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Barrington, IL | Estate Pergolas | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Barrington area estates. Serving Barrington Hills, South Barrington, Lake Barrington. Zoning-compliant designs for estate properties.',
  alternates: {
    canonical: '/service-areas/barrington-il',
  },
  openGraph: {
    title: 'Barrington Outdoor Living | Estate-Grade Design | EDG',
    description:
      'Enhance your Barrington estate with luxury outdoor living systems. Expert navigation of Village and Hills zoning codes.',
  },
};

const localBenefits = [
  'Familiar with Village of Barrington & Barrington Hills zoning',
  'Estate property experience (5+ acre lots)',
  '50% impermeable coverage compliance expertise',
  'Licensed & insured for Cook, Lake & McHenry Counties',
];

const neighborhoods = [
  {
    name: 'Barrington Hills',
    description:
      'The heart of Barrington\'s equestrian country, featuring expansive 5+ acre estates with traditional architecture and mature landscapes. Our large-span pergola engineering minimizes support columns, preserving the sweeping views and open character that make Barrington Hills properties distinctive.',
  },
  {
    name: 'South Barrington',
    description:
      'Home to prestigious gated communities like The Woods of South Barrington and Wynstone Golf Club. We design outdoor living systems that complement the area\'s luxury homes while navigating HOA guidelines and architectural review requirements common in these exclusive enclaves.',
  },
  {
    name: 'Lake Barrington & North Barrington',
    description:
      'Properties around Lake Barrington and in North Barrington blend lakefront living with estate privacy. Our weather-resistant systems handle lakeside winds while providing shelter for enjoying sunsets over the water. We understand the unique drainage and setback requirements of lake-adjacent properties.',
  },
  {
    name: 'Inverness & Deer Park',
    description:
      'These neighboring communities share Barrington\'s commitment to spacious lots and architectural excellence. From Inverness\'s golf course estates to Deer Park\'s modern luxury homes, we create outdoor spaces that honor the area\'s blend of traditional and contemporary design sensibilities.',
  },
];

const localConsiderations = [
  {
    title: 'Estate Zoning Expert',
    description:
      "We navigate strict setbacks (5' accessory separation) and impermeable coverage limits (50%) in the Village and Hills.",
    icon: ShieldCheck,
  },
  {
    title: 'Snow Load Engineered',
    description:
      'Our systems are engineered to withstand heavy Chicagoland snow loads, ensuring year-round durability for your estate.',
    icon: CloudSun,
  },
  {
    title: 'Architectural Harmony',
    description:
      "From Queen Anne conventions to Modernist estates, our designs integrate seamlessly with Barrington's diverse architectural styles.",
    icon: Home,
  },
  {
    title: 'The 3-Season Room',
    description:
      'Extend your outdoor season with motorized screens and heaters, perfect for chilly spring evenings and crisp autumn nights.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Barrington or Barrington Hills?',
    answer:
      'Yes, most outdoor structures require permits in Barrington area villages. Barrington Hills has specific requirements for accessory structures including setbacks from property lines (typically 5 feet for accessory buildings) and impermeable surface coverage limits (50% maximum). The Village of Barrington has similar requirements. Our team handles the entire permit process, including surveys and zoning compliance verification.',
  },
  {
    question: 'How do louvered pergolas affect impermeable surface calculations?',
    answer:
      "Barrington Hills and surrounding villages limit impermeable surfaces to 50% of your lot coverage. Because our louvered pergolas are considered 'permeable' when open, they often don't count toward your maximum coverage—unlike solid roof structures. This is crucial for estate properties where you want to maximize covered outdoor space while preserving landscaping and drainage areas.",
  },
  {
    question: 'What is the typical timeline for a Barrington estate project?',
    answer:
      'From consultation to completion, most Barrington area projects take 10-14 weeks. Estate properties may require additional time for survey verification and architectural review committee approvals (common in Wynstone and gated communities). Permit approval typically takes 4-6 weeks in Barrington Hills and the Village of Barrington.',
  },
  {
    question: 'Can you work with HOA requirements in Wynstone and gated communities?',
    answer:
      'Absolutely. We have extensive experience with Wynstone, The Woods of South Barrington, and other gated community architectural guidelines. Our systems can be customized to meet specific color, material, and design requirements. We provide detailed renderings and material samples for architectural review committees, streamlining the approval process.',
  },
];

export default function BarringtonHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Barrington',
            description:
              'Premium motorized pergolas, exterior shades, and glass enclosures for Barrington area estates.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Barrington',
            },
            url: 'https://www.edgpatioshade.com/service-areas/barrington-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-01.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pergolas/residential-black-r-blade-01.jpg"
            alt="Black louvered pergola for Barrington estate"
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
                <MapPin className="h-4 w-4" /> Service Area: Barrington, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Estate-Grade Outdoor Living for
                <span className="text-edg-brand block">
                  Barrington & The Hills
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Premium motorized pergolas designed for Barrington&apos;s estate zoning, 
                from Barrington Hills to South Barrington. We navigate 5-acre lot 
                requirements while maximizing your outdoor living space.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Barrington Site Visit{' '}
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
                Serving Every Barrington Area Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                From equestrian estates to gated communities, we understand the unique 
                character and requirements of Barrington&apos;s distinct areas.
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
                Built for the Barrington Estate Lifestyle
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for Barrington&apos;s unique 
                zoning requirements and climate challenges.
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
                Common Questions About Barrington Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Barrington and surrounding areas.
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
                Local Resources for Barrington Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/barrington-il/zoning-guide"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Barrington Zoning Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Navigate the 50% impermeable coverage limit, 5-foot accessory 
                    separation, and estate setback rules for Barrington Hills.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read the Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/barrington-il/motorized-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Wind} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Snow-Load Rated Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our heavy-duty louvered roof systems engineered 
                    specifically for Chicagoland winters and estate-scale installations.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Explore Systems <ArrowRight className="h-4 w-4" />
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
                Ready to Start Your Barrington Project?
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
