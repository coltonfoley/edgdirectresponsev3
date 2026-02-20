import type { Metadata } from 'next';
import Image from 'next/image';
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
  ShieldCheck,
  CheckCircle2,
  CloudSun,
  Building,
  Wind,
  FileText,
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Naperville, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Naperville homes. Serving Downtown, South Naperville, East Ogden corridor, and Ranchlands. Zoning-compliant designs for DuPage County.',
  openGraph: {
    title: 'Naperville Outdoor Living | Pergolas & Shades | EDG',
    description: 'Motorized pergolas and retractable screens for Naperville homes. Professional design and installation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Outdoor Living',
  },
  alternates: {
    canonical: '/service-areas/naperville-il',
  },
  keywords: ['naperville pergolas', 'naperville outdoor living', 'naperville il patio', 'pergola installation naperville', 'naperville backyard'],
};

const localBenefits = [
  'Familiar with Naperville zoning & permitting',
  'HOA compliance experience',
  'DuPage County building code expertise',
  'Licensed & insured for Will County',
];

const neighborhoods = [
  {
    name: 'Downtown Naperville',
    description:
      'Downtown Naperville features a mix of historic homes and modern renovations. We design outdoor living systems that complement the area\'s architectural diversity while maximizing limited backyard space common in the historic district. Our compact footprint designs work well with smaller lots.',
  },
  {
    name: 'South Naperville',
    description:
      'South Naperville\'s newer developments feature expansive homes with large outdoor spaces perfect for premium pergola installations. We specialize in creating multi-zone outdoor living areas that accommodate both intimate family gatherings and larger entertaining spaces.',
  },
  {
    name: 'East Ogden Corridor',
    description:
      'Properties along the East Ogden corridor benefit from easy access while maintaining suburban privacy. Our motorized shade systems help create secluded backyard retreats that block views from the busy corridor while maintaining airflow and natural light.',
  },
  {
    name: 'Ranchlands',
    description:
      'The Ranchlands area features spacious single-story homes with generous lots ideal for outdoor living expansions. We design low-profile systems that complement ranch architecture while creating defined outdoor rooms for dining, lounging, and entertaining.',
  },
];

const localConsiderations = [
  {
    title: 'DuPage County Snow Loads',
    description:
      'Naperville winters bring significant snow accumulation. Our louvered pergolas open automatically under snow load, preventing buildup and protecting the structure. Rated for 30psf snow loads exceeding local requirements.',
    icon: CloudSun,
  },
  {
    title: 'HOA Design Standards',
    description:
      'Naperville\'s many HOA communities have strict architectural guidelines. We provide detailed renderings, material samples, and spec sheets to streamline your approval process with neighborhood associations.',
    icon: Building,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'Naperville summers can be intense with high UV exposure. Our exterior shades block 95% of UV rays while maintaining airflow, keeping your outdoor space comfortable during peak summer months.',
    icon: Wind,
  },
  {
    title: 'Suburban Privacy',
    description:
      'Many Naperville neighborhoods feature homes with close setbacks. Our motorized screens and louvered walls create instant privacy from neighbors while maintaining the open feel of your outdoor space.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Naperville?',
    answer:
      'Yes, most outdoor structures require permits in Naperville. The City has specific setback requirements (typically 5-10 feet from property lines) and height restrictions (usually under 12-15 feet). Our team handles the entire permit process, including all documentation and inspections required by the City of Naperville Building Department.',
  },
  {
    question: 'How do HOA restrictions affect outdoor living projects in Naperville?',
    answer:
      'Many Naperville neighborhoods are governed by HOAs with specific architectural guidelines. We\'ve worked with numerous local HOAs and understand common requirements regarding color matching, height restrictions, and setback compliance. We provide comprehensive documentation packages to help you secure HOA approval quickly.',
  },
  {
    question: 'Are there historic district considerations in Naperville?',
    answer:
      'While Naperville\'s historic district requirements are less stringent than some North Shore communities, downtown historic properties may have additional review requirements. We design systems that respect historic architectural character while providing modern outdoor living functionality. Our powder-coated finishes can match existing trim and color schemes.',
  },
  {
    question: 'What\'s the typical timeline for a Naperville project?',
    answer:
      'From consultation to completion, most Naperville projects take 8-12 weeks. Permit approval through the City of Naperville typically takes 2-4 weeks. HOA approval (if required) may add 2-3 weeks depending on meeting schedules. We coordinate all timelines to minimize delays.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function NapervilleHubPage() {
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
            name: 'Outdoor Living Design & Installation - Naperville',
            description:
              'Custom motorized pergolas and exterior shades for Naperville homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Naperville',
            },
            url: 'https://www.edgpatioshade.com/service-areas/naperville-il',
            image:
              'https://www.edgpatioshade.com/images/brand/hero-pergola.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/brand/hero-pergola.jpg"
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
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Naperville, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Naperville Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From Downtown Naperville to South Naperville and the East Ogden
                corridor, we design engineered shade systems that enhance your
                suburban lifestyle and handle DuPage County weather.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Naperville Site Visit{' '}
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
                Serving Every Naperville Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of Naperville&apos;s distinct areas.
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

      {/* ========== ZONING & PERMITS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <h2 className="section-title mb-4">Zoning & Permits in Naperville</h2>
            <p className="text-text-secondary max-w-3xl">
              Naperville&apos;s building codes and subdivision requirements can be complex. Here is what you need to know before building.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Subdivision/PUD Factor
                </h3>
                <p className="text-sm text-text-secondary">
                  Many Naperville homes are part of Planned Unit Developments (PUDs) or have strict HOA covenants that may impose additional restrictions beyond city codes.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Standard Setbacks</h3>
                <p className="text-sm text-text-secondary">
                  Detached accessory structures must maintain a minimum 5-10 foot setback from side and rear property lines.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Impervious Surface Limits</h3>
                <p className="text-sm text-text-secondary">
                  Pergolas over new patios contribute to your lot&apos;s impervious surface ratio, monitored closely for stormwater management.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-edg-brand-dark" />
                  TED Permitting
                </h3>
                <p className="text-sm text-text-secondary">
                  We handle the entire Transportation, Engineering, & Development (TED) permitting process at 400 S. Eagle Street.
                </p>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Naperville&apos;s Suburban Climate
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for DuPage County weather and suburban living.
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
                Common Questions About Naperville Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Naperville.
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
                Local Resources for Naperville Homeowners
              </h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <Link
                href="/service-areas/naperville-il/motorized-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Motorized Pergolas in Naperville
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore louvered roof systems engineered for Naperville&apos;s
                    specific suburban climate and HOA requirements.
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
                Ready to Start Your Naperville Project?
              </h2>
              <p className="text-edg-dark mb-8 text-xl">
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
