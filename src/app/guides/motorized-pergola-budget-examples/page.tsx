import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Layers,
  Lightbulb,
  ShieldCheck,
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
  title: 'Motorized Pergola Budget Examples | Premium Project Ranges',
  description:
    'Compare realistic motorized pergola budget examples for compact patios, standard residential systems, poolside outdoor rooms, roof decks, and commercial patios.',
  alternates: {
    canonical: '/guides/motorized-pergola-budget-examples',
  },
};

const budgetExamples = [
  {
    title: 'Compact patio system',
    range: '$25K-$45K+',
    description:
      'A smaller single-zone pergola for a defined seating or dining area. The range changes with attachment, electrical, drainage, finish, and site prep.',
    fit: [
      'Townhome or compact patio',
      'Simple feature package',
      'Early budget qualification',
    ],
  },
  {
    title: 'Standard residential outdoor room',
    range: '$45K-$85K+',
    description:
      'A common premium residential range when the pergola includes a meaningful footprint, lighting, controls, and more project coordination.',
    fit: ['Backyard patio', 'Outdoor kitchen coverage', 'Poolside shade'],
  },
  {
    title: 'Pergola with screens, heaters, and lighting',
    range: '$75K-$125K+',
    description:
      'The outdoor room range. Side protection, heat, lighting, smart controls, and integrated planning can matter as much as the roof itself.',
    fit: [
      'Entertaining space',
      'Bug and privacy control',
      'Shoulder-season use',
    ],
  },
  {
    title: 'Roof deck or complex structural project',
    range: '$90K-$150K+',
    description:
      'Elevated projects can add engineering, access, waterproofing coordination, wind review, custom attachments, and commercial-style planning.',
    fit: ['Chicago roof deck', 'Garage roof terrace', 'Restaurant patio'],
  },
  {
    title: 'Estate or commercial multi-bay system',
    range: '$125K+',
    description:
      'Large spans, multiple zones, commercial seating, estate-scale patios, glass, screens, heaters, and custom integrations move the project into a more engineered scope.',
    fit: [
      'Estate pool area',
      'Hospitality space',
      'Multiple integrated systems',
    ],
  },
];

const costDrivers = [
  {
    title: 'System size and span',
    description:
      'Bigger footprints are not just more material. They can change posts, beams, engineering, shipping, staging, and installation complexity.',
    icon: Layers,
  },
  {
    title: 'Feature integration',
    description:
      'Screens, heaters, lights, fans, sensors, smart controls, and privacy walls should be planned as part of the system, not bolted on later.',
    icon: Lightbulb,
  },
  {
    title: 'Site complexity',
    description:
      'Decks, roof decks, old patios, tight access, drainage issues, utilities, and permitting can change the budget before the pergola is ordered.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Why publish budget ranges instead of exact prices?',
    answer:
      'Premium motorized pergola pricing depends on site conditions, size, features, engineering, electrical, attachment, and review requirements. Ranges help buyers self-qualify before EDG prepares a project-specific proposal.',
  },
  {
    question: 'Can a motorized pergola be under $25,000?',
    answer:
      'Some very small or simplified situations may price lower, but many premium motorized louvered roof projects exceed that once structure, electrical, drainage, installation, and accessories are included. Buyers comparing kit pricing should separate product cost from a complete installed system.',
  },
  {
    question: 'What makes a pergola quote more trustworthy?',
    answer:
      'A useful quote reflects photos, dimensions, site conditions, structural assumptions, review path, feature choices, electrical needs, drainage, and installation access. A simple square-foot number can miss the real project.',
  },
];

export default function MotorizedPergolaBudgetExamplesPage() {
  const articleSchema = generateArticleSchema({
    title: 'Motorized Pergola Budget Examples',
    description:
      'Premium motorized pergola budget examples for compact patios, outdoor rooms, roof decks, and complex residential or commercial projects.',
    url: 'https://www.edgpatioshade.com/guides/motorized-pergola-budget-examples',
    image: `https://www.edgpatioshade.com${images.projects.wade.hero}`,
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    category: 'Pergola Cost',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Motorized Pergola Budget Examples' },
  ]);

  return (
    <div className="min-h-screen bg-white">
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
              { label: 'Pergola Budget Examples' },
            ]}
            className="mb-8"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Budget Qualification
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
                Motorized pergola budget examples for serious planning
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-zinc-300">
                These ranges are not quotes. They are planning bands that help
                buyers understand whether they are looking at a compact pergola,
                a full outdoor room, a roof deck challenge, or an engineered
                multi-bay system.
              </p>
              <Link href="/guides/pergola-system-fit-review">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.projects.wade.hero}
                alt="Premium motorized pergola outdoor room project"
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
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">Planning ranges</div>
            <h2 className="section-title mb-4">
              What kind of pergola project are you really pricing?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A buyer asking "how much is a motorized pergola?" may be
              describing five very different projects. The budget changes when
              the site, features, structure, and review path change.
            </p>
          </div>

          <div className="space-y-6">
            {budgetExamples.map((example) => (
              <Card key={example.title} variant="default" padding="lg">
                <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr_0.8fr] lg:items-start">
                  <div>
                    <div className="text-edg-brand-text mb-2 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="text-sm font-bold tracking-widest uppercase">
                        {example.range}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{example.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {example.description}
                  </p>
                  <div className="space-y-2">
                    {example.fit.map((item) => (
                      <div
                        key={item}
                        className="text-text-secondary flex gap-2 text-sm"
                      >
                        <CheckCircle2 className="text-edg-brand-text mt-0.5 h-4 w-4 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Why ranges move</div>
            <h2 className="section-title mb-4">
              The roof is only one part of the installed system
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {costDrivers.map((driver) => (
              <Card key={driver.title} variant="muted" padding="lg">
                <driver.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{driver.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {driver.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Want the range for your actual site?
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Send photos, dimensions, and goals. EDG will help identify
                whether the project belongs in a compact, standard, outdoor
                room, roof deck, or engineered multi-bay range.
              </p>
            </div>
            <Link href="/guides/pergola-system-fit-review">
              <Button size="lg" className="w-full justify-between">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
    </div>
  );
}
