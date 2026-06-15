import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Layers,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'How EDG Chooses the Right Motorized Pergola System',
  description:
    'EDG is a dealer for proven motorized pergola manufacturers, but the project determines the system. Learn how site exposure, span, drainage, controls, budget, and design goals shape the recommendation.',
  alternates: {
    canonical: '/guides/louvered-pergola-brands-compared',
  },
  openGraph: {
    title: 'How EDG Chooses the Right Motorized Pergola System',
    description:
      'A system-selection guide for buyers comparing premium louvered pergolas without getting trapped in manufacturer-first sales advice.',
  },
};

const selectionFactors = [
  {
    title: 'Site exposure',
    description:
      'Open yards, lakefront homes, roof decks, and coastal properties need different attention to wind, snow, sun, and environmental wear.',
    icon: Wind,
  },
  {
    title: 'Span and post strategy',
    description:
      'The right system has to fit the opening, traffic flow, view lines, and structural path without forcing awkward column placement.',
    icon: Ruler,
  },
  {
    title: 'Drainage and water path',
    description:
      'Closed louvers have to send water somewhere. Gutters, posts, patio pitch, roof details, and hardscape all affect system fit.',
    icon: CloudRain,
  },
  {
    title: 'Features and controls',
    description:
      'Screens, heaters, lighting, fans, sensors, switches, app control, and smart home expectations should be planned before the system is specified.',
    icon: Lightbulb,
  },
  {
    title: 'Review and service needs',
    description:
      'HOA review, local permitting, commercial use, and long-term service support can matter as much as the product brochure.',
    icon: ShieldCheck,
  },
  {
    title: 'Budget fit',
    description:
      'The right recommendation should respect the budget band without pretending every pergola system solves the same problem.',
    icon: Layers,
  },
];

const toolkit = [
  {
    name: 'Brustor',
    role: 'Often considered when the project needs refined European engineering, strong weather performance, and a premium architectural finish.',
  },
  {
    name: 'Azenco',
    role: 'Often considered when modern profile, water management, and contemporary outdoor room planning are important to the fit.',
  },
  {
    name: 'Sundance',
    role: 'Often considered when the project needs a reliable motorized louvered system with a more accessible path for the right scope.',
  },
];

const questions = [
  'Is the structure freestanding, wall-mounted, deck-mounted, or roof-mounted?',
  'Where does water go when the louvers close?',
  'What are the wind, snow, or coastal exposure conditions?',
  'Do screens, heaters, lighting, fans, or privacy walls need to integrate from day one?',
  'What budget band is realistic for the footprint and features?',
  'What will an HOA, village, city, or commercial reviewer need to understand?',
];

const faqs = [
  {
    question: 'Does EDG sell one preferred pergola brand?',
    answer:
      'No. EDG is a dealer for proven manufacturers including Brustor, Azenco, and Sundance, but the recommendation starts with the project. The manufacturer is a tool in the kit, not the sales strategy.',
  },
  {
    question: 'Why not just compare brands side by side?',
    answer:
      'A simple brand leaderboard can be misleading. A system that fits an estate pool area may not be the right answer for a roof deck, compact patio, coastal home, or budget-sensitive project. Site fit matters first.',
  },
  {
    question: 'What information helps EDG recommend the right system?',
    answer:
      'Photos, rough dimensions, location, surface type, desired features, budget range, timing, and known HOA or permit concerns are the most useful starting points.',
  },
];

export default function LouveredPergolaSystemSelectionPage() {
  const articleSchema = generateArticleSchema({
    title: 'How EDG Chooses the Right Motorized Pergola System',
    description:
      'System-selection guide explaining how EDG uses proven manufacturer tools after evaluating site exposure, span, drainage, controls, budget, and project goals.',
    url: 'https://www.edgpatioshade.com/guides/louvered-pergola-brands-compared',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
    datePublished: '2026-02-18',
    dateModified: '2026-06-15',
    category: 'Pergola Planning',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'How EDG Chooses the Right Pergola System' },
  ]);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'System Selection' },
            ]}
            className="mb-8"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                System Selection Guide
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
                EDG chooses the pergola system after understanding the job.
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-zinc-300">
                Brustor, Azenco, and Sundance are part of EDG&apos;s toolkit.
                The project decides which tool makes sense: structure, exposure,
                span, drainage, controls, design, service, and budget.
              </p>
              <Link href="/guides/pergola-system-fit-review">
                <Button size="lg">
                  Get a System Fit Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.grayBronzeWhite}
                alt="Motorized louvered pergola selected for a residential outdoor living space"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Not manufacturer-first
            </div>
            <h2 className="section-title mb-4">
              The right product follows the site logic
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A manufacturer-first sales process asks which brand you want. A
              system-fit process asks what the outdoor room needs to do, what
              the site will allow, and what budget range makes sense.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectionFactors.map((factor) => (
              <Card key={factor.title} variant="default" padding="lg">
                <factor.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{factor.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="label-editorial-brand mb-4">The toolkit</div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Proven manufacturers, selected for the project.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG does not need every buyer to choose the same product. The
                value is knowing when a system&apos;s engineering, finish,
                drainage, controls, budget, or service path fits the actual
                site.
              </p>
            </div>
            <div className="space-y-5">
              {toolkit.map((tool) => (
                <Card key={tool.name} variant="muted" padding="lg">
                  <h3 className="mb-2 text-2xl font-bold">{tool.name}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {tool.role}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                What EDG asks before recommending a system
              </div>
              <h2 className="section-title mb-4">
                The best comparison starts with better questions
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                When these answers are missing, buyers tend to compare product
                brochures instead of comparing fit.
              </p>
              <div className="space-y-4">
                {questions.map((question) => (
                  <div
                    key={question}
                    className="flex gap-4 border-b border-black/10 pb-4"
                  >
                    <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                Better next step than a brand comparison
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Send photos, dimensions, project location, budget band, and what
                the space needs to do. EDG will help identify the system
                direction before a product name becomes the headline.
              </p>
              <Link href="/guides/pergola-system-fit-review">
                <Button className="w-full justify-between">
                  Request Fit Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question} variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
