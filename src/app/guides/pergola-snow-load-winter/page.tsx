import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  CloudSnow,
  FileText,
  MapPin,
  Ruler,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola Snow Load and Winter Operation | EDG Patio & Shade',
  description:
    'Plan a louvered pergola for Midwest winters with EDG site coordination, structural planning, drainage, winter handoff, and local installation support.',
  keywords: [
    'pergola snow load',
    'louvered pergola snow',
    'louvered pergola winter operation',
    'pergola snow and ice',
  ],
  alternates: {
    canonical: '/guides/pergola-snow-load-winter',
  },
  openGraph: {
    title: 'Pergola Snow Load and Winter Operation | EDG Patio & Shade',
    description:
      'See how EDG plans louvered pergolas for structure, drainage, winter operation, and local installation in the Midwest.',
    images: [{ url: images.pages.guides.louveredPergolasHero }],
  },
};

const faqs = [
  {
    question: 'Can a louvered pergola work through a Midwest winter?',
    answer:
      'Yes, when EDG selects and coordinates the system for the property. A snow-load rating applies to a specified roof configuration and is checked against local design requirements; it does not tell the owner which winter louver position to use. EDG looks at the roof layout, structure, attachment, exposure, and drainage, then provides a clear operating handoff for the selected system.',
  },
  {
    question: 'What does EDG review for a pergola in snow country?',
    answer:
      'EDG reviews the site, spans, posts, attachment or foundations, nearby roofs and drifting conditions, drainage, controls, accessories, and the local permitting or engineering path. That gives the project team a practical plan before installation begins.',
  },
  {
    question: 'How should I position the louvers for snow?',
    answer:
      'The correct winter position depends on the selected system. EDG supplies the current operating instructions for that system and explains the snow and frost procedure during handoff. Do not assume that one system uses the same position as another.',
  },
  {
    question: 'Can I operate a pergola when the louvers are frozen?',
    answer:
      'No. Do not force a motorized roof against frost, ice, or packed snow. Stop operation and follow the clearing and restart instructions EDG supplies with the system, or contact EDG when the condition is unclear.',
  },
  {
    question: 'What should I send for an initial winter pergola inquiry?',
    answer:
      'Start with your contact information, project location or area, and what you want the space to do. Photos and measured dimensions are optional at this stage, but helpful when available. EDG can help shape the next steps from a simple first conversation.',
  },
];

const planningChecks = [
  {
    icon: Ruler,
    title: 'Roof layout and structure',
    description:
      'EDG coordinates the selected roof, spans, bays, posts, connections, and attachment or foundation approach so the structure fits the property and the intended use.',
  },
  {
    icon: Wind,
    title: 'Exposure and drifting',
    description:
      'An open yard, lakefront setting, roof edge, or nearby taller roof can change the way snow reaches the structure. EDG accounts for the site around the footprint.',
  },
  {
    icon: CloudSnow,
    title: 'Drainage through freeze and thaw',
    description:
      'Gutters, downspouts, patio grade, doors, stairs, and finished surfaces need a usable discharge path before winter weather arrives.',
  },
  {
    icon: FileText,
    title: 'Local approvals and handoff',
    description:
      'EDG coordinates the design, engineering, permitting, installation, and operating information needed to move from a concept to a usable outdoor room.',
  },
];

const winterSteps = [
  {
    icon: Snowflake,
    title: 'Set the plan before the first storm',
    description:
      'EDG explains the selected system’s winter position, controls, accessories, and conditions that pause operation before the project is handed over.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Stop when the roof is frozen',
    description:
      'Frost and ice can keep moving parts from completing their travel. Do not force the motor or repeatedly test the roof against resistance.',
  },
  {
    icon: ShieldCheck,
    title: 'Use the supplied instructions',
    description:
      'Follow the operating and clearing instructions for the system EDG supplies. When weather is outside that guidance, pause and contact EDG or the installer.',
  },
];

const careItems = [
  'Keep gutters, drainage paths, and downspout outlets clear before winter weather.',
  'Watch for ice, drifting, heavy accumulation, and discharge that reaches doors or walking surfaces.',
  'Use the selected system’s winter instructions rather than applying a rule from another roof.',
  'Contact EDG when a control, louver, screen, or drainage condition needs service.',
];

const startItems = [
  'Where the project is located and whether the setting is open, sheltered, lakefront, or near a taller roof',
  'How you want to use the room, including shade, dining, screens, lighting, heat, and seasonal timing',
  'A rough footprint or photo if you have one; neither is required to start',
  'Any builder, architect, landscape, HOA, or permit information already in motion',
];

const articleSchema = generateArticleSchema({
  title: 'Pergola Snow Load and Winter Operation',
  description:
    'How EDG plans louvered pergolas for Midwest winter structure, drainage, operating handoff, and local installation support.',
  url: 'https://www.edgpatioshade.com/guides/pergola-snow-load-winter',
  image: `https://www.edgpatioshade.com${images.pages.guides.louveredPergolasHero}`,
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  category: 'Pergola Winter Planning',
});

const faqSchema = generateFAQSchema(faqs);

export default function PergolaSnowLoadWinterPage() {
  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[58vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Pergola Snow Load and Winter Operation' },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Winter Planning Guide
            </div>
            <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              Pergola snow load and winter operation in Midwest weather
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
              EDG plans louvered pergolas around the property, the structure,
              the drainage, and the way you want to use the room through the
              seasons. For homeowners in the Chicago–Milwaukee corridor, we can
              carry that plan through engineering, permitting, installation, and
              care.
            </p>

            <div className="mb-8 flex flex-wrap gap-5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> EDG Patio &amp; Shade
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4" /> Winter planning guide
              </span>
              <span className="inline-flex items-center gap-2">
                <Snowflake className="text-edg-brand h-4 w-4" /> Updated Sep 10,
                2026
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton
                href="/guides/pergola-system-fit-review?source=pergola_snow_load_winter_hero"
                size="lg"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/systems/pergolas?source=pergola_snow_load_winter_hero"
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10"
              >
                View Pergola Systems
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Direct answer</div>
            <h2 className="section-title mb-6">
              Winter performance starts with the plan around the roof
            </h2>
            <div className="border-edg-brand bg-surface-muted mb-10 border-l-4 p-6 md:p-8">
              <p className="text-xl leading-relaxed font-medium md:text-2xl">
                A louvered pergola can be a strong fit for a Midwest outdoor
                room when its structure, site conditions, drainage, and winter
                operation are coordinated together. A snow-load rating applies
                to a specified roof configuration and must be checked against
                local design requirements; it does not tell the owner which
                winter louver position to use. EDG brings those decisions into
                one design and installation process, then explains the supplied
                system&apos;s instructions at handoff.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">
                  EDG plans the complete assembly
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We coordinate the selected roof, structure, attachment,
                  drainage, controls, screens, and accessories around the
                  property and the finished outdoor room.
                </p>
              </Card>
              <Card variant="outline" padding="lg">
                <Snowflake className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">
                  Your handoff includes winter guidance
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Before the first winter, EDG explains the supplied system’s
                  operating instructions, care routine, and when to stop and
                  call for help.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">
                EDG site planning
              </div>
              <h2 className="section-title mb-4">
                Four winter questions we coordinate before installation
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Snow is a site condition, not just a roof conversation. EDG
                brings the property, the structure, and the finished room into
                the same plan.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {planningChecks.map((check) => (
                <Card key={check.title} variant="default" padding="lg">
                  <check.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                  <h3 className="mb-3 text-xl font-bold">{check.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {check.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial text-edg-brand mb-4">
                Winter handoff
              </div>
              <h2 className="section-title mb-4 text-white">
                Know what to do when the weather changes
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                EDG gives local homeowners a practical operating handoff so the
                roof is not being figured out for the first time during a storm.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {winterSteps.map((step) => (
                <div key={step.title} className="border border-white/10 p-6">
                  <step.icon className="text-edg-brand mb-5 h-9 w-9" />
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-zinc-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.pages.guides.louveredPergolasHero}
                alt="Louvered pergola providing a covered outdoor living area"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">Seasonal care</div>
              <h2 className="section-title mb-4">
                Keep the roof and drainage ready for the next season
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Good winter operation includes the roof, the controls, and the
                water path. Keep the system clear, watch changing conditions,
                and use EDG as a point of contact when care or service questions
                come up.
              </p>
              <div className="space-y-4">
                {careItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Start simply</div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              You do not need a finished plan to talk with EDG
            </h2>
            <p className="text-text-secondary mb-8 max-w-3xl text-lg leading-relaxed">
              A first conversation can start with the basics. Photos, measured
              dimensions, and a complete drawing set can come later if the
              project needs them.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {startItems.map((item) => (
                <div
                  key={item}
                  className="border-border flex items-start gap-3 border bg-white p-4"
                >
                  <MapPin className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-edg-dark mt-8 p-8 text-white">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Ready to plan a winter-ready outdoor room?
                  </h3>
                  <p className="text-zinc-300">
                    Tell EDG where the project is and what you want the space to
                    do. We can talk through your layout, site, and options.
                  </p>
                </div>
                <LinkButton
                  href="/guides/pergola-system-fit-review?source=pergola_snow_load_winter_inputs"
                  size="lg"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Continue planning</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <LinkButton
                href="/guides/motorized-pergola-permits-hoa-engineering?source=pergola_snow_load_winter_related"
                variant="secondary"
                className="h-auto min-h-28 justify-between p-6 text-left"
              >
                <span>
                  <span className="block text-lg font-bold">
                    Permits and engineering
                  </span>
                  <span className="mt-2 block text-sm font-normal normal-case opacity-70">
                    See how EDG coordinates approvals, structure, and the site.
                  </span>
                </span>
                <ArrowRight className="ml-4 h-5 w-5 shrink-0" />
              </LinkButton>
              <LinkButton
                href="/guides/motorized-pergola-planning?source=pergola_snow_load_winter_related"
                variant="secondary"
                className="h-auto min-h-28 justify-between p-6 text-left"
              >
                <span>
                  <span className="block text-lg font-bold">
                    Motorized pergola planning
                  </span>
                  <span className="mt-2 block text-sm font-normal normal-case opacity-70">
                    Start with roof, drainage, power, controls, and accessories.
                  </span>
                </span>
                <ArrowRight className="ml-4 h-5 w-5 shrink-0" />
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Common questions</div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
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

      <section className="bg-edg-dark py-16 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-edg-brand mb-3 text-sm font-bold tracking-widest uppercase">
                Start with the property
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Plan your pergola for Midwest weather.
              </h2>
            </div>
            <LinkButton
              href="/guides/pergola-system-fit-review?source=pergola_snow_load_winter_bottom"
              size="lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </LinkButton>
          </div>
        </Container>
      </section>
    </article>
  );
}
