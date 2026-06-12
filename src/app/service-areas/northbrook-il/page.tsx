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
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Home,
  ShieldCheck,
  CheckCircle2,
  Snowflake,
  Wind,
  Building,
  Phone,
  CloudSun,
  AlertTriangle,
  Ruler,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Northbrook, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Northbrook homes. Serving Techny, Shermer Road, and Northbrook Heights. Zoning-compliant designs for Georgian architecture.',
  openGraph: {
    title: 'Northbrook Outdoor Living | Pergolas & Screens | EDG',
    description: 'Outdoor living systems for Northbrook homes. Motorized pergolas, screens, and glass enclosures.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/northbrook-il',
  },
  keywords: ['northbrook pergolas', 'northbrook outdoor living', 'northbrook il patio', 'pergola installation northbrook', 'north shore outdoor'],
};

const localBenefits = [
  'Familiar with Village of Northbrook zoning codes',
  'Georgian & Colonial architecture experience',
  'Winter-aware pergola and screen planning',
  'Licensed & insured for Cook County',
];

const neighborhoods = [
  {
    name: 'Techny',
    description:
      'The winding lanes of Techny feature expansive properties perfect for estate-scale outdoor living systems. Our large-span engineering minimizes columns while maximizing your view of the mature tree canopy and open spaces that define this prestigious area.',
  },
  {
    name: 'Shermer Road Corridor',
    description:
      'Classic brick colonials along Shermer Road benefit from our powder-coated systems that complement traditional architecture while adding modern functionality. We design with the established character of this corridor in mind.',
  },
  {
    name: 'Northbrook Heights',
    description:
      'Elevated properties in Northbrook Heights can feel more exposed to wind and late-day sun. We plan shade, screens, drainage, and controls around the actual patio conditions instead of assuming a standard kit will perform the same on every lot.',
  },
  {
    name: 'Downtown Northbrook',
    description:
      'Homes near the Village Green and downtown area often have unique lot configurations. We specialize in maximizing outdoor living space in compact settings while meeting village setback and height requirements.',
  },
];

const weatherConsiderations = [
  {
    title: 'Heavy Snow Loads',
    description:
      'Northbrook winters bring snow, ice, and freeze-thaw cycles. We review louver operation, drainage, footing conditions, and winter maintenance before recommending a permanent outdoor structure.',
    icon: Snowflake,
  },
  {
    title: 'High Wind Exposure',
    description:
      'Elevated patios, corner lots, and open backyards can all feel wind differently. The right system depends on exposure, attachment method, side protection, and how the homeowner wants the space to function.',
    icon: Wind,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'Northbrook summers can be intense with direct sun exposure. Our exterior shades block 95% of UV rays while maintaining airflow, keeping your outdoor space comfortable even in July heat.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Northbrook?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the address, structure size, attachment method, easements, and whether the project has HOA or architectural review requirements. We help prepare the survey notes, product information, and drawings needed for the correct review path.',
  },
  {
    question: 'How long does permit approval take in Northbrook?',
    answer:
      'Review timing depends on the project scope, completeness of the submission, season, and whether HOA or additional review is involved. We set expectations after we understand the address, proposed structure, and documentation required.',
  },
  {
    question: 'Can you match my home\'s Georgian architecture?',
    answer:
      'Absolutely. We offer custom powder coating to match your brick, trim, or window mullions. Our columns can be detailed to complement Georgian and Colonial styles common throughout Northbrook. We understand the architectural heritage of the area and design accordingly.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function NorthbrookHubPage() {
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
            name: 'Outdoor Living Design & Installation - Northbrook',
            description:
              'Motorized louvered pergolas and retractable screens planned around Northbrook architecture, weather exposure, and local review requirements.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Northbrook',
            },
            url: 'https://www.edgpatioshade.com/service-areas/northbrook-il',
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
            alt="Black louvered pergola with outdoor dining area and pool"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Northbrook, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Northbrook, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Northbrook Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the winding lanes of Techny to the Shermer Road corridor, we
                design engineered shade systems that complement Northbrook&apos;s
                classic Georgian architecture and handle its unique weather
                challenges.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Northbrook Site Visit{' '}
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
                Serving Every Northbrook Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of Northbrook&apos;s distinct areas.
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
      <Section id="zoning" className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <h2 className="section-title mb-4">Zoning & Permits in Northbrook</h2>
            <p className="text-text-secondary max-w-3xl">
              The Village of Northbrook has strict requirements for accessory structures. Here are the key regulations you need to know.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  30% Coverage Limit
                </h3>
                <p className="text-sm text-text-secondary">
                  Maximum 30% lot coverage for the rear yard. Pergolas with hard flooring (pavers/concrete) count toward this limit.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-edg-brand-dark" />
                  15-Foot Height Cap
                </h3>
                <p className="text-sm text-text-secondary">
                  Height and placement should be checked against the actual
                  address, zoning district, attachment method, and whether the
                  project involves an elevated deck or second-story condition.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Side Setback</h3>
                <p className="text-sm text-text-secondary">
                  Side-yard placement should be checked against the survey,
                  zoning district, easements, and any association requirements
                  before the structure is priced.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Rear Setback</h3>
                <p className="text-sm text-text-secondary">
                  Typically 10 feet from the rear lot line (varies by zoning district R-2 to R-5).
                </p>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-white border-l-4 border-edg-brand-dark">
              <h4 className="font-bold mb-2">Village Hall Permitting</h4>
              <p className="text-text-secondary">
                We handle all paperwork submissions to the Village Hall at 1225 Cedar Lane, including plat of survey, engineering specs, and HOA approvals for areas like Techny.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WEATHER CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Northbrook&apos;s Weather
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
                Common Questions About Northbrook Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Northbrook.
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
                Local Resources for Northbrook Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/northbrook-il/motorized-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    Motorized Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Pergola planning for Northbrook homes with wind, snow,
                    drainage, and review requirements checked before final
                    design.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/projects"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Phone} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    View Local Projects
                  </h3>
                  <p className="text-text-secondary mb-6">
                    See completed projects in Northbrook and nearby North Shore communities.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    View Gallery <ArrowRight className="h-4 w-4" />
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
                Ready to Start Your Northbrook Project?
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
