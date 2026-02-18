import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  Check,
  X,
  ArrowRight,
  DollarSign,
  Star,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';


export const metadata: Metadata = {
  title: 'Pergola vs. Patio Cover: How We Match Systems to Your Needs',
  description:
    'Understanding the differences between pergolas, patio covers, and louvered systems. Learn how we recommend the right shade solution based on your home, climate, and priorities.',
  alternates: {
    canonical: '/guides/pergola-vs-patio-cover',
  },
};

const guideData = {
  title: 'Pergola vs. Patio Cover',
  subtitle: 'How We Determine the Right Solution',
  intro:
    "Confused by the terminology? You are not alone. Here is how we think about matching the right outdoor structure to your home's architecture, your climate, and how you plan to use the space.",
};

const comparisonMatrix = [
  {
    type: 'Traditional Pergola',
    shade: 'Partial (Slats)',
    rain: 'None',
    airflow: 'Excellent',
    cost: '$$ - $$$',
    recommended: false,
  },
  {
    type: 'Solid Patio Cover',
    shade: '100% (Fixed)',
    rain: '100% Protection',
    airflow: 'Poor (Traps Heat)',
    cost: '$$$ - $$$$',
    recommended: false,
  },
  {
    type: 'Louvered Pergola',
    shade: 'Adjustable (0-100%)',
    rain: '100% Protection',
    airflow: 'Excellent (Vented)',
    cost: '$$$$',
    recommended: true,
  },
];

const faqs = [
  {
    question:
      'What is the main difference between a pergola and a patio cover?',
    answer:
      "A patio cover is an extension of your roofline (solid roof) designed to provide 100% shade and rain protection at all times. A pergola typically has an open lattice roof. A 'Louvered Pergola' is the hybrid that gives you both options.",
  },
  {
    question: 'Which increases home value more?',
    answer:
      'Generally, permanent structures like louvered pergolas and solid patio covers add more appraised value than simple aesthetic wooden pergolas because they create functional, usable square footage.',
  },
  {
    question: 'Can I attach a pergola to my house?',
    answer:
      "Yes, wall-mounted (attached) systems are very popular. However, they require careful engineering to handle snow loads without stressing your home's existing fascia and framing.",
  },
];

export default function PergolaVsPatioCover() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(images.pages.price.pergolaGray)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <Link
                href="/guides"
                className="text-edg-brand mb-8 inline-flex items-center gap-2 text-sm font-medium opacity-80 transition-opacity hover:underline hover:opacity-100"
              >
                <ArrowLeft className="h-4 w-4" /> Back to All Guides
              </Link>

              <br />
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <Lightbulb className="h-4 w-4" /> Comparison Guide
              </span>
              <h1 className="mb-4 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {guideData.title}
              </h1>
              <p className="text-edg-brand mb-6 text-xl font-medium md:text-2xl">
                {guideData.subtitle}
              </p>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                {guideData.intro}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== COMPARISON MATRIX ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Quick Decision Matrix
              </h2>
              <p className="text-muted-foreground mb-10 text-center text-lg">
                Compare the three main options side by side.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {comparisonMatrix.map((item, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl border p-6 transition-all ${
                      item.recommended
                        ? 'bg-edg-brand/5 border-edg-brand scale-105 shadow-lg'
                        : 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900'
                    }`}
                  >
                    {item.recommended && (
                      <div className="bg-edg-brand text-edg-dark absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" /> EDG CHOICE
                      </div>
                    )}
                    <h3 className="mb-4 text-center text-xl font-bold">
                      {item.type}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shade</span>
                        <span className="font-medium">{item.shade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Rain Protection
                        </span>
                        <span className="font-medium">{item.rain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Airflow</span>
                        <span className="font-medium">{item.airflow}</span>
                      </div>
                      <div className="flex justify-between border-t border-zinc-200 pt-2 dark:border-zinc-700">
                        <span className="text-muted-foreground">
                          Investment
                        </span>
                        <span className="font-bold">{item.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== DEEP DIVE ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Side-by-Side Breakdown
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Fixed Patio Cover */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="mb-4 text-2xl font-bold">
                    Option A: Fixed Patio Cover
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Usually an extension of your home's roofline. It uses
                    shingles or metal roofing to create a permanent shadow.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Total rain protection</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Seamless look with house</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      <span>Darkens adjacent interior rooms</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      <span>Traps heat in summer</span>
                    </div>
                  </div>
                </div>

                {/* Louvered Pergola */}
                <div className="bg-edg-dark border-edg-brand/20 relative overflow-hidden rounded-2xl border p-8 text-white">
                  <div className="bg-edg-brand text-edg-dark absolute top-0 right-0 flex items-center gap-1 rounded-bl-lg px-3 py-1 text-xs font-bold">
                    <Star className="h-3 w-3 fill-current" /> EDG CHOICE
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    Option B: Louvered Pergola
                  </h3>
                  <p className="mb-6 text-gray-300">
                    The modern solution. An aluminum structure with automated
                    blades that rotate to follow the sun or close for rain.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="bg-edg-brand/20 flex h-6 w-6 items-center justify-center rounded-full">
                        <Check className="text-edg-brand h-3 w-3" />
                      </div>
                      <span>Sun when you want it (Winter)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="bg-edg-brand/20 flex h-6 w-6 items-center justify-center rounded-full">
                        <Check className="text-edg-brand h-3 w-3" />
                      </div>
                      <span>Shade when you need it (Summer)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="bg-edg-brand/20 flex h-6 w-6 items-center justify-center rounded-full">
                        <Check className="text-edg-brand h-3 w-3" />
                      </div>
                      <span>Active ventilation cools the space</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20">
                        <DollarSign className="h-3 w-3 text-amber-500" />
                      </div>
                      <span>Higher initial investment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== RECOMMENDATION ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="bg-edg-brand/5 border-edg-brand rounded-r-2xl border-l-4 p-8">
                <h3 className="mb-4 text-2xl font-bold">Our Recommendation</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  If you have south-facing windows that you don't want to
                  darken, a <strong>louvered pergola</strong> is the superior
                  choice. It allows you to harvest light in the winter while
                  blocking the hot summer sun. If you want a strictly "dry" room
                  that feels more indoors, consider a full enclosure or sunroom.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Learn More?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Dive deeper into louvered pergola systems with our complete
                guide.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/guides/louvered-pergolas">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                  >
                    Read the Full Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-edg-dark hover:bg-edg-dark/10 rounded-full px-8 text-lg"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </article>
  );
}
