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
  Wind,
  CloudSun,
  Thermometer,
  Waves,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Lake Geneva, WI | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Lake Geneva homes. Serving Fontana, Williams Bay, and surrounding lake communities. Engineered for lakefront conditions.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi',
  },
};

const localBenefits = [
  'Licensed for Wisconsin projects',
  'Lakefront wind-load expertise',
  'Walworth County building code knowledge',
  'Seasonal installation experience',
];

const neighborhoods = [
  {
    name: 'Lake Geneva (City & Lakefront)',
    description:
      "The heart of the Geneva Lake area features stunning waterfront estates and charming downtown properties. We specialize in designing outdoor living systems that maximize lake views while providing protection from wind and weather. Our systems are engineered to handle the unique demands of open-water exposure.",
  },
  {
    name: 'Fontana-on-Geneva-Lake',
    description:
      "Fontana&apos;s prestigious shoreline properties demand systems that complement upscale lake homes. We design custom pergolas and glass enclosures that integrate seamlessly with Fontana's mix of historic cottages and modern estates, preserving sightlines to the water.",
  },
  {
    name: 'Williams Bay',
    description:
      "Home to Yerkes Observatory and beautiful bay-side properties, Williams Bay offers unique outdoor living opportunities. Our systems help homeowners enjoy the bay views while providing shelter from afternoon sun and sudden lake storms.",
  },
  {
    name: 'Surrounding Lake Communities',
    description:
      "From Delavan to Como, Elkhorn to the smaller lake areas, we serve homeowners throughout Walworth County. Whether you&apos;re on a smaller lake or inland property, our designs account for Wisconsin's seasonal extremes and local building requirements.",
  },
];

const localConsiderations = [
  {
    title: 'Lake Effect Winds',
    description:
      "Properties on Geneva Lake and surrounding waters experience sustained winds off the water. Our hurricane-rated louvered systems withstand 130+ mph winds, with automatic sensors that close louvers when wind speeds increase.",
    icon: Wind,
  },
  {
    title: 'Four-Season Use',
    description:
      "Wisconsin winters are harsh, but our systems are built for year-round use. Louvers automatically open under snow load to prevent accumulation, while integrated heaters and screens extend your outdoor season well into fall.",
    icon: Thermometer,
  },
  {
    title: 'Summer Heat & UV',
    description:
      "July afternoons on the lake can be intense. Our exterior shades block 95% of UV rays while maintaining airflow, keeping your patio comfortable even during peak summer heat.",
    icon: CloudSun,
  },
  {
    title: 'Waterfront Regulations',
    description:
      "Lake Geneva area properties often have setback requirements and HOA guidelines. We navigate these restrictions to maximize your usable outdoor space while staying compliant with local codes.",
    icon: Waves,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in the Lake Geneva area?',
    answer:
      "Yes, most outdoor structures require permits in Walworth County and local municipalities. Fontana, Lake Geneva, and Williams Bay each have specific setback requirements from the water and property lines. Our team handles the entire permit process, including any approvals needed for waterfront structures.",
  },
  {
    question: 'How do your systems handle lakefront wind conditions?',
    answer:
      "Geneva Lake can generate sustained winds and sudden gusts. Our louvered pergolas are engineered to withstand 130+ mph winds when closed. The systems include wind sensors that automatically close louvers when wind speeds exceed thresholds, and our mounting systems are designed for the unique challenges of lakefront installations.",
  },
  {
    question: 'Can you work with HOA requirements in Fontana or Lake Geneva?',
    answer:
      "Absolutely. Many lakefront communities have strict aesthetic guidelines and architectural review boards. We have experience working with Fontana Association, Lake Geneva estates, and various HOAs throughout Walworth County. Our systems can be powder-coated to match approved color palettes, and we provide detailed plans for board approval.",
  },
  {
    question: "What's the typical timeline for a Lake Geneva area project?",
    answer:
      "From consultation to completion, most Lake Geneva area projects take 8-12 weeks. Wisconsin permit approval typically takes 3-4 weeks. We handle all interactions with local building departments and coordinate installation around seasonal considerations for lakefront work.",
  },
];

export default function LakeGenevaHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Lake Geneva',
            description:
              'Custom motorized pergolas and exterior shades for Lake Geneva, Fontana, and Williams Bay homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Lake Geneva',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-geneva-wi',
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
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Lake Geneva, WI
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Lake Geneva Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the shores of Geneva Lake to the estates of Fontana and
                Williams Bay, we design engineered shade systems built for
                Wisconsin lakefront living.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request Lake Geneva Site Visit{' '}
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
                Serving Every Lake Geneva Area Community
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We understand the unique character and requirements of Walworth County&apos;s lake communities.
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
                Built for Lake Geneva&apos;s Waterfront Conditions
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for Wisconsin lakefront challenges.
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
                Common Questions About Lake Geneva Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in the Geneva Lake area.
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
                Ready to Start Your Lake Geneva Project?
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
