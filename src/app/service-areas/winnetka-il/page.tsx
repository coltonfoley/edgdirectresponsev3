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
  Crown,
  TreeDeciduous,
  Eye,
  Wind,
  FileCheck,
  Droplets,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Estate Outdoor Living in Winnetka, IL | Pergolas & Shades | EDG',
  description:
    'Luxury motorized pergolas and exterior shades for Winnetka estates. Historic district compliance, architectural review board expertise. Large-span engineering for expansive patios.',
  openGraph: {
    title: 'Winnetka Outdoor Living | Estate Pergolas | EDG',
    description: 'Estate-grade outdoor living systems for Winnetka. Custom pergolas, screens, and enclosures for North Shore properties.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/winnetka-il',
  },
  keywords: ['winnetka pergolas', 'winnetka outdoor living', 'winnetka il patio', 'pergola installation winnetka', 'north shore outdoor'],
};

const localBenefits = [
  'Estate-scale installation experience',
  'Historic district compliance',
  'Architectural review board expertise',
  'Licensed for New Trier Township',
];

const neighborhoods = [
  {
    name: 'East Winnetka (Lakefront Estates)',
    description:
      'The lakefront properties of East Winnetka command panoramic Lake Michigan views. Our planning emphasizes wider spans, fewer view interruptions, secure mounting, and site-specific engineering for exposed wind conditions near the water.',
  },
  {
    name: 'Hubbard Woods',
    description:
      'Hubbard Woods features some of Winnetka\'s most prestigious homes on generous lots. We\'ve designed expansive outdoor living spaces here that complement the neighborhood\'s estate character, including covered patios that extend entertainment spaces by 2,000+ square feet.',
  },
  {
    name: 'Woodley Road Area',
    description:
      'The Woodley Road corridor\'s mix of traditional and transitional architecture benefits from our custom powder-coating capabilities. We match limestone, brick, and stucco exteriors with precision, ensuring our systems look like original architectural elements.',
  },
  {
    name: 'Indian Hill',
    description:
      'Indian Hill\'s winding roads and mature trees create unique design opportunities. We engineer around existing landscaping, often spanning 20-24 feet between columns to preserve century-old trees and natural site features.',
  },
];

const estateFeatures = [
  {
    title: 'Unobstructed Views',
    description:
      'Standard pergola kits require posts every 10-12 feet. On a large Winnetka patio, that creates a "forest of columns." Our commercial-grade engineered beams can span 20-24 feet, keeping your sightlines to the garden or lake completely open.',
    icon: Eye,
  },
  {
    title: 'Historical Accuracy',
    description:
      'We don\'t do "shiny white plastic" looks. Our systems can be matte powder-coated to match limestone, dark bronze window frames, or slate roofing. We can add cornice details and columns that mimic classical architecture.',
    icon: Crown,
  },
  {
    title: 'Ravine & Tree Preservation',
    description:
      'Winnetka\'s ravine areas have strict environmental protections. Our designs work within these constraints, using minimal foundation requirements and spanning techniques that protect root systems and ravine edges.',
    icon: TreeDeciduous,
  },
  {
    title: 'Lakefront Wind Ratings',
    description:
      'Wind off Lake Michigan can be fierce, especially on open lakefront lots and elevated patios. We review exposure, attachment points, drainage, and engineering requirements before recommending a roof or screen configuration.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: 'What makes Winnetka\'s permitting process different?',
    answer:
      'Winnetka has one of the most rigorous architectural review processes on the North Shore. The Village\'s Architectural Review Board (ARB) evaluates every project for compatibility with neighborhood character. We provide detailed 3D renderings, material samples, and elevation drawings to support your application—services most contractors don\'t offer.',
  },
  {
    question: 'Can you work with ravine protection requirements?',
    answer:
      'Absolutely. Winnetka\'s Ravine Protection Ordinance requires careful planning for properties near ravines. We design with setbacks from the "tableland" edge and ensure our drainage systems don\'t increase runoff into protected areas. We\'ve successfully completed multiple ravine-adjacent projects.',
  },
  {
    question: 'How do you handle large estate-scale projects?',
    answer:
      'Large Winnetka estates often require engineered drawings stamped by an Illinois-registered structural engineer. Our commercial-grade systems are designed for these demands, with beam spans up to 24 feet and wind ratings exceeding standard residential requirements. We handle all engineering documentation.',
  },
  {
    question: 'What\'s the typical timeline for a Winnetka project?',
    answer:
      'Winnetka projects typically take 10-14 weeks from consultation to completion due to the thorough permit process. ARB review adds 2-4 weeks compared to other communities. We recommend starting the design process in fall or winter for spring installation.',
  },
];

export default function WinnetkaHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Winnetka',
            description:
              'Estate-grade motorized pergolas and exterior shades for Winnetka homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Winnetka',
            },
            url: 'https://www.edgpatioshade.com/service-areas/winnetka-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="Dark gray louvered pergola with LED lighting"
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
                { label: 'Winnetka, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Winnetka, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Estate-Class Outdoor Living
                <span className="text-edg-brand block">for Winnetka</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We understand that in Winnetka, &quot;outdoor living&quot; means more than
                a patio. It&apos;s an extension of a historic estate. Our systems are
                engineered to match your grandeur while respecting the
                Architectural Review Board&apos;s exacting standards.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Estate Consultation{' '}
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
      <Section id="zoning" className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Winnetka&apos;s Esteemed Neighborhoods
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Each Winnetka area has unique characteristics we design for.
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

      {/* ========== ESTATE FEATURES ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Engineering for Estate-Scale Demands
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Standard residential products can&apos;t handle Winnetka&apos;s estate requirements. We engineer differently.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {estateFeatures.map((feature, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper icon={feature.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== ZONING & CODES SECTION ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Winnetka Design Guide: Zoning & Building Beyond the Patio
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Winnetka&apos;s beauty comes from strict preservation. Whether you are on the lake, near a ravine, or in a historic district, here&apos;s what to expect.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-6">
              {/* Ravine Protection */}
              <div className="flex gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                  <TreeDeciduous className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Ravine Protection Ordinance
                  </h3>
                  <p className="text-text-secondary mb-4">
                    If your property touches a ravine, construction is heavily regulated.
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm">
                    <li>
                      <strong>Setbacks:</strong> Structures often must be set back significantly from the &quot;tableland&quot; edge of the ravine.
                    </li>
                    <li>
                      <strong>Drainage:</strong> You cannot increase runoff into the ravine. Our louvered systems with integrated gutters can be piped into stormwater management systems to comply.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Impervious Surface */}
              <div className="flex gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Impervious Surface Limits
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Like much of the North Shore, Winnetka limits how much of your lot can be covered by impermeable surfaces.
                  </p>
                  <div className="bg-edg-brand/5 border-edg-brand rounded-r-lg border-l-4 p-4">
                    <Quote className="text-edg-brand-dark mb-2 h-4 w-4" />
                    <p className="text-text-secondary text-sm italic">
                      &quot;A louvered roof is often the only way to get a &apos;covered&apos; porch feel without triggering the same density penalties as a solid roof addition.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Architectural Review */}
              <div className="flex gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="bg-edg-brand/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <FileCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Architectural Review Committee (ARC)
                  </h3>
                  <p className="text-text-secondary mb-4">
                    For historic districts, the Village wants to ensure new structures blend with the existing home. We support your application with:
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm">
                    <li>
                      • 3D renderings matching your home&apos;s siding/brick textures
                    </li>
                    <li>• Color samples (custom powder coating)</li>
                    <li>• Detailed elevation drawings showing sightlines</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-400 italic">
              Disclaimer: This page is a general guide. EDG manages the
              specific permit application and architectural review board
              presentation for our clients.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Estate Project Questions
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                What Winnetka homeowners ask about our estate-grade systems.
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
                Winnetka Homeowner Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/winnetka-il/louvered-pergolas"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Louvered Roofs for Estates
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Large-span engineering capabilities that allow us to cover
                    expansive bluestone patios without cluttering columns.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/contact?area=winnetka&source=hub-resources"
                className="group block"
              >
                <Card 
                  variant="muted" 
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Get Permit Assistance
                  </h3>
                  <p className="text-text-secondary mb-6">
                    We&apos;ve navigated the architectural review board many times. Let
                    us handle your permit process for your Winnetka estate.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Contact Us <ArrowRight className="h-4 w-4" />
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
                Ready to Elevate Your Winnetka Estate?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Schedule a consultation with our estate design specialists.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="dark"
                  className="px-8 text-lg"
                >
                  Schedule Private Consult{' '}
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
