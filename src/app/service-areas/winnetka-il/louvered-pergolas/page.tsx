import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estate-Grade Louvered Pergolas Winnetka, IL | EDG',
  description:
    'Commercial-grade louvered roof systems for Winnetka estates. 20-24 foot beam spans, hurricane wind ratings, and classical architectural details for lakefront properties.',
  alternates: {
    canonical: '/service-areas/winnetka-il/louvered-pergolas',
  },
};

import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Palette,
  Wind,
  Crown,
  Ruler,
  Shield,
  Lightbulb,
  Flame,
  Droplets,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { generateProductSchema, generateFAQSchema } from '@/lib/schema';

const reasons = [
  {
    icon: Eye,
    title: 'Unobstructed Views',
    description:
      'Standard pergola kits require posts every 10-12 feet. On a large Winnetka patio, that creates a "forest of columns." Our commercial-grade engineered beams can span 20-24 feet, keeping your sightlines to the garden or lake completely open.',
  },
  {
    icon: Palette,
    title: 'Historical Accuracy',
    description:
      'We don\'t do "shiny white plastic" looks. Our systems can be matte powder-coated to match limestone, dark bronze window frames, or slate roofing. We can add cornice details and columns that mimic classical architecture.',
  },
  {
    icon: Wind,
    title: 'Lakefront Wind Ratings',
    description:
      'Wind off Lake Michigan can be fierce. Lightweight awnings rip. Our systems are Miami-Dade hurricane rated. When the storm comes, the louvers lock together to form a solid, structured roof that withstands the gale.',
  },
];

const specifications = [
  {
    icon: Ruler,
    label: 'Beam Spans',
    value: '20-24 feet between posts',
  },
  {
    icon: Shield,
    label: 'Wind Rating',
    value: '140+ mph (Miami-Dade rated)',
  },
  {
    icon: Lightbulb,
    label: 'Integrated LED',
    value: 'Dimmable perimeter lighting',
  },
  {
    icon: Flame,
    label: 'Heating Options',
    value: 'Infrared heaters & fire features',
  },
  {
    icon: Droplets,
    label: 'Rain Sensors',
    value: 'Automatic louver closure',
  },
];

const faqs = [
  {
    question: 'Will this block my lake views?',
    answer:
      'No. Our estate-grade systems feature slim aluminum profiles and wide beam spans up to 24 feet, minimizing vertical posts that would obstruct sightlines. When louvers are open, they sit nearly flat, preserving panoramic views of Lake Michigan and your landscaped grounds.',
  },
  {
    question: 'How does this affect property taxes?',
    answer:
      'Louvered pergolas typically add value without triggering significant property tax increases. Unlike enclosed structures, they remain classified as outdoor amenities in most Cook County assessments. We recommend consulting your tax advisor for specific guidance.',
  },
  {
    question: 'Can the system be integrated with my home automation?',
    answer:
      'Yes. Our systems integrate seamlessly with Control4, Savant, Lutron, and other premium home automation platforms. Control louvers, lighting, and heating from your existing touch panels or mobile apps alongside your other estate systems.',
  },
  {
    question: "What's the maintenance requirement?",
    answer:
      'Minimal. The powder-coated aluminum frame requires only occasional rinsing. We recommend an annual inspection of motors and seals—service we provide—to ensure optimal performance. No staining, sealing, or winterization needed.',
  },
];

export default function WinnetkaProductPage() {
  const productSchema = generateProductSchema({
    name: 'Estate-Grade Louvered Pergola System',
    description:
      'Commercial-grade motorized louvered roof systems for Winnetka estates. Engineered for 20-24 foot beam spans, 140+ mph wind ratings, and seamless integration with historic and contemporary architecture along the North Shore.',
    category: 'Outdoor Living',
    brand: 'EDG Outdoor Living',
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen">
      {/* ========== SCHEMA ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Breadcrumb
                items={[
                  { label: 'Service Areas', href: '/service-areas' },
                  { label: 'Winnetka, IL', href: '/service-areas/winnetka-il' },
                  { label: 'Louvered Pergolas' },
                ]}
                className="mb-6"
              />
              <Link
                href="/service-areas/winnetka-il"
                className="text-edg-brand-dark mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Winnetka
              </Link>
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold tracking-wider uppercase">
                <Crown className="h-3 w-3" /> Estate-Grade
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Estate-Grade Louvered Systems
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-edg-dark mb-6 text-2xl font-bold tracking-tight dark:text-white md:text-3xl">
                The Estate-Grade Louvered Roof System
              </h2>
              <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                <p>
                  Unlike big-box pergola kits designed for weekend DIY projects,
                  our louvered roof systems are engineered for estates that
                  demand more. Each structure combines commercial-grade aluminum
                  extrusions with custom fabrication to create outdoor living
                  spaces worthy of Winnetka&apos;s distinguished properties.
                </p>
                <p>
                  The difference lies in the details: engineered beam spans that
                  eliminate visual clutter, powder-coated finishes matched to
                  your home&apos;s architectural palette, and white-glove
                  installation by crews who understand the expectations of
                  estate clientele. This is not a patio cover—it is an
                  architectural extension of your home.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== REASONS ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl space-y-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="bg-edg-brand/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <reason.icon className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-edg-dark mb-2 text-xl font-bold dark:text-white">
                      {i + 1}. {reason.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WINNETKA ESTATE CONSIDERATIONS ========== */}
      <Section className="bg-edg-dark py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Engineered for Winnetka Estate Properties
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
                <p>
                  From historic homes in{' '}
                  <strong className="text-white">Hubbard Woods</strong> to the
                  sweeping lakefront estates of{' '}
                  <strong className="text-white">Indian Hill</strong> and{' '}
                  <strong className="text-white">East Winnetka</strong>, each
                  neighborhood presents unique outdoor living opportunities.
                  Homes on larger parcels require structures that complement
                  expansive terraces and formal gardens without overwhelming the
                  landscape.
                </p>
                <p>
                  Privacy remains paramount in Winnetka&apos;s distinguished
                  enclaves. Our integrated shade screens deploy seamlessly from
                  the beam structure, creating secluded retreats that disappear
                  when not needed. Pool house connections, outdoor kitchens, and
                  landscape architecture integration are all considered during
                  the design phase to ensure your pergola feels like a natural
                  extension of your estate rather than an afterthought.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/service-areas/winnetka-il/zoning-guide"
                  className="text-edg-brand-dark inline-flex items-center gap-2 font-medium hover:underline"
                >
                  View Winnetka Zoning Requirements{' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-edg-dark mb-8 text-2xl font-bold tracking-tight dark:text-white md:text-3xl">
                System Specifications
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <spec.icon className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-edg-dark text-sm font-semibold dark:text-white">
                        {spec.label}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== EDG DIFFERENCE ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-edg-dark mb-6 text-2xl font-bold tracking-tight dark:text-white md:text-3xl">
                Why Winnetka Families Choose EDG
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  We maintain relationships with premium manufacturers including
                  Brustor, Azenco, and Sundance—allowing us to recommend the
                  right system for your specific architecture rather than
                  pushing a single product line. This system-agnostic approach
                  ensures your investment aligns with both your aesthetic vision
                  and performance requirements.
                </p>
                <p>
                  Our consultative process respects your time and privacy.
                  References from nearby installations are available upon
                  request, and our design consultations focus on understanding
                  your lifestyle rather than delivering a sales pitch. Learn
                  more about how different brands compare in our{' '}
                  <Link
                    href="/guides/louvered-pergola-brands-compared"
                    className="text-edg-brand-text dark:text-edg-brand hover:underline"
                  >
                    louvered pergola brands guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-edg-dark mb-8 text-2xl font-bold tracking-tight dark:text-white md:text-3xl">
                Estate Owner FAQ
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <h3 className="text-edg-dark mb-3 flex items-start gap-3 text-lg font-semibold dark:text-white">
                      <CheckCircle className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-8 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-edg-dark mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                Design Consultation
              </h2>
              <p className="text-edg-dark/80 mb-6">
                From historic estates in Hubbard Woods to contemporary homes on
                the lake, we understand Winnetka&apos;s discerning standards.
                Our design process respects your time and privacy.
              </p>
              <p className="text-edg-dark/80 mb-8">
                We respect the privacy of our Winnetka clients. We are happy to
                arrange a private site walk to discuss your estate&apos;s needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                >
                  Request Private Consult{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
