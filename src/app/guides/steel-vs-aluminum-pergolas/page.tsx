import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  CloudRain,
  Feather,
  Hammer,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Steel vs. Aluminum Pergolas: How to Choose | EDG',
  description:
    'Compare steel and aluminum pergolas by span, weight, corrosion, maintenance, roof function, engineering, cost drivers, and project fit.',
  alternates: { canonical: '/guides/steel-vs-aluminum-pergolas' },
  openGraph: {
    title: 'Steel vs. Aluminum Pergolas: How to Choose',
    description:
      'A project-first comparison of steel pergolas and aluminum louvered roof systems.',
    images: [{ url: images.featuredProjects.carmines.gallery[1] }],
  },
};

const comparisonRows = [
  {
    factor: 'Raw strength and stiffness',
    steel:
      'Can suit custom structural frames, long spans, and demanding geometry when engineered for the project.',
    aluminum:
      'Lower raw stiffness, but engineered extrusions can perform well for proven pergola and louvered-roof systems.',
  },
  {
    factor: 'Weight',
    steel:
      'Heavier, which can affect handling, foundations, rooftop review, delivery, and erection.',
    aluminum:
      'Lighter, which can simplify handling and reduce structural demand in some applications.',
  },
  {
    factor: 'Corrosion behavior',
    steel:
      'Relies on galvanizing, primer, paint, powder coating, detailing, inspection, and repair.',
    aluminum:
      'Naturally corrosion resistant, though finish, fasteners, dissimilar metals, and coastal exposure still matter.',
  },
  {
    factor: 'Roof function',
    steel:
      'Often used for open trellises, fixed shade structures, and custom frames coordinated with another roof or canopy.',
    aluminum:
      'Common for integrated rotating or retracting louvered roofs with model-specific gutters, controls, and accessories.',
  },
  {
    factor: 'Design flexibility',
    steel:
      'Strong fit for custom shapes, cantilevers, curves, slim architectural members, and fabrication-led details.',
    aluminum:
      'Strong fit when the project works within an engineered manufacturer system and its available modules.',
  },
  {
    factor: 'Maintenance',
    steel:
      'Finish condition, chips, welds, drainage points, connections, and signs of corrosion should be inspected.',
    aluminum:
      'Generally lower finish maintenance, with cleaning and inspection still needed around gutters, motors, fasteners, and controls.',
  },
  {
    factor: 'Pricing pattern',
    steel:
      'Driven by steel weight, fabrication, welding, coating, engineering, lifting, attachment, and installation access.',
    aluminum:
      'Driven by system model, bays, louvers, controls, drainage, accessories, engineering, freight, and installation.',
  },
];

const decisions = [
  {
    icon: Hammer,
    title: 'Steel may fit when',
    items: [
      'The structure needs custom geometry or an architectural fabrication path.',
      'The design is an open pergola, trellis, fixed shade frame, or custom canopy support.',
      'Long spans, cantilevers, or fewer columns are important and engineering supports the direction.',
      'The project team is prepared to define coating, corrosion care, connections, and field installation.',
    ],
  },
  {
    icon: Feather,
    title: 'Aluminum may fit when',
    items: [
      'The primary goal is an integrated motorized louvered roof.',
      'Lower weight or corrosion resistance is a major project consideration.',
      'The desired layout fits a proven manufacturer system and its engineering path.',
      'Integrated gutters, controls, sensors, lighting, or screens are central to the finished room.',
    ],
  },
];

const questions = [
  'What should the overhead structure actually do: frame the space, filter sun, provide fixed coverage, or adjust for changing weather?',
  'Is the pergola on grade, attached to a house, supported by an existing deck, or located on an exposed roof?',
  'How important are long spans, fewer posts, cantilevers, curves, or other custom architectural details?',
  'What coating, cleaning, inspection, and repair responsibilities are acceptable over the life of the structure?',
  'Will the project include lighting, fans, heat, screens, glass, drainage, power, or automation?',
  'Who owns the structural engineering, permit documents, fabrication drawings, delivery, installation, and warranty handoff?',
];

const faqs = [
  {
    question: 'Is steel stronger than aluminum for a pergola?',
    answer:
      'Steel generally has greater raw strength and stiffness, but a pergola is an engineered assembly rather than a material sample. Member shape, alloy or grade, span, connections, loads, footings, attachment, and the complete system determine performance. Engineered aluminum systems can be appropriate for many residential and commercial pergola applications.',
  },
  {
    question: 'Which material is better for a motorized louvered pergola?',
    answer:
      'Aluminum is the normal material for many mature motorized louvered-roof systems because it combines lower weight, corrosion resistance, extruded drainage details, and coordinated controls. Steel may still appear as custom support where the span or building condition requires it.',
  },
  {
    question: 'Which material is better for a Chicago rooftop pergola?',
    answer:
      'There is no automatic answer. A rooftop review should consider structure, weight, wind uplift, attachment, waterproofing, access, fire and life-safety requirements, desired roof function, and maintenance. Steel may help with custom geometry or spans; aluminum may help with weight and integrated louvered-roof performance.',
  },
  {
    question: 'Does powder-coated steel require maintenance?',
    answer:
      'Yes. Powder coating can provide a durable finish, but edges, welds, fasteners, scratches, drainage points, and field damage still need inspection. The coating specification, preparation method, exposure, repair process, and warranty should be documented for the project.',
  },
  {
    question: 'Is a steel pergola less expensive than aluminum?',
    answer:
      'Not necessarily. A simple steel frame and a premium motorized aluminum roof are different products. Steel pricing can increase with material weight, custom fabrication, coating, engineering, lifting, and site welding. Aluminum louvered pricing can increase with bays, controls, drainage, screens, lighting, heat, and manufacturer requirements.',
  },
  {
    question: 'Can EDG compare both materials for my project?',
    answer:
      'Yes. Send photos, rough dimensions, location, desired coverage, and project goals. EDG can help determine whether custom steel, an aluminum louvered system, a hybrid steel-supported solution, or another shade path deserves the next level of design review.',
  },
];

const contactHref = buildContactHref({
  type: 'fit-review',
  product: 'pergola-material-comparison',
  source: 'steel_vs_aluminum_guide',
});

export default function SteelVsAluminumPergolasPage() {
  const articleSchema = generateArticleSchema({
    title: 'Steel vs. Aluminum Pergolas: How to Choose',
    description:
      'A project-first comparison of steel pergolas and aluminum pergola systems across structure, weight, corrosion, roof function, maintenance, engineering, and cost drivers.',
    url: 'https://www.edgpatioshade.com/guides/steel-vs-aluminum-pergolas',
    image: `https://www.edgpatioshade.com${images.featuredProjects.carmines.gallery[1]}`,
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    category: 'Pergola Comparison',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Steel vs. Aluminum Pergolas' },
  ]);

  return (
    <article className="text-text-primary min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark relative overflow-hidden pt-28 pb-20 text-white md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={images.featuredProjects.carmines.gallery[1]}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Steel vs. Aluminum Pergolas' },
            ]}
            className="mb-8 text-zinc-300"
          />
          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Material Comparison Guide
            </div>
            <h1 className="mb-6 text-5xl leading-none font-bold md:text-7xl">
              Steel vs. aluminum pergolas: choose by project, not slogan.
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
              Steel offers structural stiffness and fabrication freedom.
              Aluminum offers lower weight, corrosion resistance, and mature
              integrated louvered-roof systems. The right answer depends on the
              site, roof function, exposure, design, and ownership plan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={contactHref}>
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/steel-pergolas">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Explore Steel Pergolas
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-border bg-surface-muted border-b py-8">
        <Container>
          <div className="flex gap-4 border border-amber-300/70 bg-amber-50 p-5 text-amber-950">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm leading-relaxed">
              A steel frame, an aluminum louvered roof, and an aluminum roof
              supported by custom steel are three different assemblies. Ask
              which components use each material and what the complete system is
              engineered to do.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Quick Comparison</div>
            <h2 className="section-title mb-5">
              The material changes more than appearance
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The useful comparison includes the structural frame, roof
              assembly, finish, connections, controls, drainage, foundations,
              installation access, and long-term care.
            </p>
          </div>
          <div className="border-border overflow-x-auto border">
            <div className="min-w-[820px]">
              <div className="bg-edg-dark grid grid-cols-[0.65fr_1fr_1fr] text-white">
                <div className="p-5 font-bold">Decision factor</div>
                <div className="text-edg-brand border-l border-white/15 p-5 font-bold">
                  Steel pergola
                </div>
                <div className="text-edg-brand border-l border-white/15 p-5 font-bold">
                  Aluminum pergola
                </div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.factor}
                  className="border-border grid grid-cols-[0.65fr_1fr_1fr] border-t bg-white"
                >
                  <div className="p-5 font-bold">{row.factor}</div>
                  <div className="border-border text-text-secondary border-l p-5 leading-relaxed">
                    {row.steel}
                  </div>
                  <div className="border-border text-text-secondary border-l p-5 leading-relaxed">
                    {row.aluminum}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-edg-dark text-white">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial text-edg-brand mb-4">
              Structural fit
            </div>
            <h2 className="section-title mb-5 text-white">
              Strength matters, but load path matters more.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              A strong beam does not solve weak footings, an unknown deck,
              unsuitable connections, wind uplift, waterproofing conflicts, or
              an incomplete roof assembly. Both materials need a complete path
              from the overhead structure into the supporting site or building.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Wind,
                title: 'Wind and exposure',
                text: 'Elevated, corner, lakefront, coastal, and open commercial sites can change uplift, bracing, sensor, and operating requirements.',
              },
              {
                icon: ShieldCheck,
                title: 'Support and attachment',
                text: 'Posts, beams, footings, walls, roof structure, deck framing, waterproofing, and connection details must work as one system.',
              },
              {
                icon: CloudRain,
                title: 'Roof and drainage',
                text: 'An open pergola sheds rain through the roof plane. Fixed and louvered roofs need deliberate gutters, discharge points, and surrounding water management.',
              },
            ].map((item) => (
              <Card
                key={item.title}
                variant="dark"
                padding="lg"
                className="border-white/15 bg-white/5"
              >
                <IconWrapper
                  icon={item.icon}
                  variant="dark"
                  size="lg"
                  className="mb-5"
                />
                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-zinc-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Likely Direction</div>
            <h2 className="section-title mb-5">
              Match the material to the job it needs to do
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {decisions.map((decision) => (
              <Card key={decision.title} variant="default" padding="lg">
                <div className="mb-6 flex items-center gap-4">
                  <IconWrapper icon={decision.icon} variant="brand" size="lg" />
                  <h3 className="text-2xl font-bold">{decision.title}</h3>
                </div>
                <div className="space-y-4">
                  {decision.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.featuredProjects.carmines.gallery[1]}
                alt="Steel-supported motorized aluminum louvered pergola at Carmine's in Chicago"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">Hybrid example</div>
              <h2 className="section-title mb-6">
                Some projects need both materials.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                Carmine&apos;s in Chicago uses a motorized aluminum louvered
                roof with custom steel beams and reinforced columns where the
                angled, cantilevered layout needed additional structural
                support. The steel helped preserve a more open dining plan; the
                aluminum system delivered adjustable overhead coverage.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                This is why a material comparison should not force every project
                into an all-steel or all-aluminum answer. A qualified project
                team can assign each material to the job it does best.
              </p>
              <Link href="/projects/carmines">
                <Button variant="outline">
                  See the Carmine&apos;s Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg border-border bg-surface-muted border-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">Before a quote</div>
              <h2 className="section-title mb-5">
                Six questions that make the comparison useful
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Answers to these questions narrow the material direction faster
                than comparing isolated specifications or generic price-per-foot
                claims.
              </p>
            </div>
            <div className="space-y-3">
              {questions.map((question, index) => (
                <div
                  key={question}
                  className="border-border flex gap-4 border bg-white p-5"
                >
                  <div className="bg-edg-dark text-edg-brand flex h-8 w-8 shrink-0 items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Steel and aluminum pergola questions
              </h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <div className="label-editorial text-edg-brand mb-4">
                Material follows system fit
              </div>
              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                Let the site settle the steel-versus-aluminum question.
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
                Send photos, rough dimensions, location, desired roof function,
                and any structural drawings you already have. EDG will help
                identify the likely recommendation and the issues that need
                resolution before detailed pricing.
              </p>
            </div>
            <div className="space-y-4">
              <Link href={contactHref}>
                <Button size="lg" className="w-full justify-between">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas" className="block">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full justify-between"
                >
                  Explore Motorized Pergolas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
