import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CloudSnow,
  Droplets,
  FileText,
  MapPin,
  Ruler,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  User,
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
  title: 'Pergola Snow Load and Winter Operation | EDG Guide',
  description:
    'Can a louvered pergola handle Chicago and Milwaukee winters? Learn why snow-load ratings depend on the selected span and structure, how to position louvers in snow, and what EDG verifies before quoting.',
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
    title: 'Pergola Snow Load and Winter Operation | EDG',
    description:
      'A practical guide to model-specific snow loads, winter louver position, freezing precautions, drainage, and Midwest site review.',
    images: [{ url: images.pages.guides.louveredPergolasHero }],
  },
};

const faqs = [
  {
    question: 'Can a louvered pergola handle snow?',
    answer:
      'It can, when the selected model, span, posts, attachment or foundations, and local design requirements are matched to the site. A product-page snow-load figure is not a universal approval for every size or structure. EDG confirms the model-specific engineering and winter operating instructions before finalizing a direction.',
  },
  {
    question: 'Should louvered pergola blades be open or closed in snow?',
    answer:
      'Follow the selected manufacturer’s current instructions. For example, Brustor’s Outdoor Living guidance tells owners to rotate specified louvered roofs to a fully vertical position during snow to avoid accumulation. Do not assume that position applies to every manufacturer or model, and do not force louvers against ice or a frozen mechanism.',
  },
  {
    question: 'Can I operate a motorized pergola when it is freezing?',
    answer:
      'Do not operate a roof against frost, ice, or snow that could bind the moving parts. Some systems can use a temperature or frost setting, but the sensor, default setting, and activation process are model- and dealer-specific. The owner still needs a clear winter protocol and should contact the installer when conditions are uncertain.',
  },
  {
    question: 'Does the snow-load rating cover the whole pergola?',
    answer:
      'Not by itself. The published value may describe a specific roof or product configuration. The complete review also has to account for span, bay layout, beam and post design, connections, footings or existing structure, attachment, local snow design criteria, drifting, and the way the roof will be operated in winter.',
  },
  {
    question: 'What does EDG need to review a Midwest pergola site?',
    answer:
      'An initial quote request does not require photos or measured dimensions. Start with your contact information, project interest, and the address or area if you have it. If available, rough width and projection, photos, mounting condition, existing deck or roof information, nearby roof edges or valleys, desired screens and accessories, drainage destination, and permit or HOA notes help EDG narrow the manufacturer and configuration before a quote is treated as meaningful.',
  },
];

const engineeringChecks = [
  {
    icon: Ruler,
    title: 'Span and bay layout',
    description:
      'The same model can have different allowable layouts as the clear span, coupled bays, louver direction, and post positions change. A dimension is not a load rating by itself.',
  },
  {
    icon: ShieldCheck,
    title: 'Complete load path',
    description:
      'Louvers are only one part of the assembly. Beams, posts, connections, anchors, footings, an attached wall, or an existing deck must transfer the design load safely.',
  },
  {
    icon: Wind,
    title: 'Exposure and drifting',
    description:
      'An open yard, lakefront setting, roof edge, nearby taller roof, or snow drift can change the design conversation even when the footprint looks straightforward.',
  },
  {
    icon: FileText,
    title: 'Local review path',
    description:
      'The address, structure, attachment, electrical scope, and local building requirements determine which drawings and engineering documents are needed.',
  },
];

const winterSteps = [
  {
    icon: Snowflake,
    title: 'Set the winter position before the storm',
    description:
      'The correct position is model-specific. Brustor’s current B200(XL) guidance, for example, calls for the louvers to be fully vertical during snow so accumulation is avoided. Confirm the equivalent instruction for the selected system and make it part of the handoff.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Do not cycle a frozen roof',
    description:
      'Frost, ice, and packed snow can stop moving parts from completing their travel. Do not force the motor or repeatedly test the roof against resistance. Use the manufacturer’s clearing and restart procedure or call the installer.',
  },
  {
    icon: CloudSnow,
    title: 'Treat automation as a safeguard',
    description:
      'Temperature, frost, snow, rain, and wind sensors can support the operating plan, but settings and availability vary. A sensor does not replace the owner’s responsibility to watch conditions or the dealer’s responsibility to confirm the setup.',
  },
];

const responsibilityRows = [
  {
    owner: 'EDG, manufacturer, and engineer',
    items: [
      'Match the selected model and configuration to the site-specific structural review.',
      'Coordinate gutters, posts, downspout discharge, patio grade, doors, and adjacent finishes.',
      'Document the winter position, sensor settings, accessory limits, and any required snow-clearing plan.',
    ],
  },
  {
    owner: 'Owner and site team',
    items: [
      'Keep gutters and drainage paths clear of leaves, ice, and debris before winter weather arrives.',
      'Follow the selected manual and do not operate the roof against frost, ice, or an obstructed louver.',
      'Observe heavy accumulation, drifting, and thaw conditions, then contact the installer when the condition is outside the documented protocol.',
    ],
  },
];

const siteChecklist = [
  'Project address, jurisdiction, and whether the site is in an open, lakefront, or sheltered setting',
  'Rough width, projection, clear span, desired bays, post locations, and louver direction',
  'Freestanding, wall-mounted, deck-mounted, or roof-deck condition, with existing structure information when applicable',
  'Nearby roof edges, valleys, trees, parapets, or taller structures that could create drifting or concentrated snow',
  'Gutter and downspout destination, patio slope, doors, stairs, foundation edges, and surfaces that cannot receive discharge',
  'Screens, heaters, lights, sensors, controls, and the owner’s expected winter operating routine',
  'Permit, HOA, architectural review, or stamped-engineering requirements already identified',
];

const modelNotes = [
  {
    name: 'Azenco R-BLADE™',
    note: 'Azenco’s current R-BLADE product page lists a snow load of up to 100 lbs / sq. ft. and describes the system as custom-configured. That published figure still needs to be checked against the exact layout, supports, local requirements, and approved installation details.',
    href: 'https://azenco-outdoor.com/r-blade/',
    label: 'Azenco R-BLADE product page',
  },
  {
    name: 'Sundance All Season Pergola',
    note: 'Sundance’s current FAQ lists 60 lbs / sq. ft. of snow load for its All Season Pergola. It is a different product and rating basis from the other examples, so EDG does not transfer that number to another model or span.',
    href: 'https://sundanceoutdoorliving.com/faq/',
    label: 'Sundance current FAQ',
  },
  {
    name: 'Brustor B200(XL)',
    note: 'Brustor’s current Outdoor Living sales and warranty conditions tell owners to turn specified louvers fully vertical in snow and not operate during frost. The same document separates a 35 kg/m² snow-load statement from a no-permanent-deformation statement up to 100 kg/m² for designated louver models—another reason those figures cannot be treated as a universal design rating.',
    href: 'https://dam.brustor.com/m/1712bd53be1e0199/original/Outdoor-Living_Sales-and-Warranty-conditions_EN.pdf',
    label: 'Brustor Outdoor Living conditions PDF',
  },
];

export default function PergolaSnowLoadWinterPage() {
  const articleSchema = generateArticleSchema({
    title: 'Pergola Snow Load and Winter Operation',
    description:
      'A practical guide to model-specific snow loads, winter louver position, freezing precautions, drainage, and Midwest site review.',
    url: 'https://www.edgpatioshade.com/guides/pergola-snow-load-winter',
    image: `https://www.edgpatioshade.com${images.pages.guides.louveredPergolasHero}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: 'Colton Foley',
    category: 'Pergola Planning',
  });
  const faqSchema = generateFAQSchema(faqs);

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
              A louvered pergola can be part of a Chicago–Milwaukee winter plan,
              but the answer is never just a number on a product page. The
              selected model, span, structure, drainage, local design load, and
              operating responsibilities all have to line up.
            </p>

            <div className="mb-8 flex flex-wrap gap-5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" /> Colton Foley
              </span>
              <span className="inline-flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4" /> 9 min read
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
            <div className="label-editorial-brand mb-4">Fast answer</div>
            <h2 className="section-title mb-6">
              Snow-load rating is not the same as winter permission
            </h2>
            <p className="text-text-secondary mb-10 text-lg leading-relaxed">
              A motorized louvered roof may be a good fit for a cold-weather
              site, but a published snow-load figure is only one input. It may
              describe a product or roof configuration, while your project also
              depends on the selected span, bay layout, beams, posts,
              connections, attachment or foundations, drifting, and local design
              requirements. Separately, the manufacturer’s winter instructions
              determine how the louvers should be positioned and when the motor
              must stay idle.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <Ruler className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">Structural question</h3>
                <p className="text-text-secondary leading-relaxed">
                  Can the complete selected assembly transfer the required snow,
                  wind, and other design loads through its spans, connections,
                  posts, anchors, and supporting structure?
                </p>
              </Card>
              <Card variant="outline" padding="lg">
                <ThermometerSnowflake className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">Operating question</h3>
                <p className="text-text-secondary leading-relaxed">
                  What position, temperature setting, clearing process, and
                  restart procedure does the current manual require when snow,
                  ice, frost, or thaw conditions arrive?
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="label-editorial-brand mb-4">
                1. Structural fit
              </div>
              <h2 className="section-title mb-4">
                The selected span and structure carry the real question
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                “What is the pergola snow load?” sounds like it should have one
                answer. In practice, the right answer is attached to a model,
                configuration, and site. A smaller roof with more supports is a
                different structural problem from a wide, coupled, wall-mounted,
                deck-mounted, or roof-deck layout.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {engineeringChecks.map((item) => (
                <Card key={item.title} variant="default" padding="lg">
                  <item.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="border-edg-brand mt-10 border-l-4 bg-white p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <AlertTriangle className="text-edg-brand-text h-6 w-6 shrink-0" />
                <h3 className="text-xl font-bold">
                  Do not compare snow numbers as if they were interchangeable
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                A product page, technical sheet, engineering drawing, and
                warranty or operating document may use different terms and
                conditions. EDG keeps those records tied to the exact selected
                model and project instead of moving a figure from one
                manufacturer to another.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="bg-surface-muted relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.featuredProjects.jake.gallery[1]}
                alt="Crystal Lake louvered pergola structure detail"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Midwest project example
              </div>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Crystal Lake structure and drainage were planned together
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                EDG&apos;s Jake project in Crystal Lake used a multi-bay
                motorized louvered pergola as part of a larger landscape
                project. The project record describes electrical routing and
                drainage planned around the structure and surrounding patio—the
                kind of coordination a Midwest site review needs.
              </p>
              <p className="text-text-secondary mb-7 leading-relaxed">
                This is a local planning example, not a snow-performance test or
                a promise that another property shares the same structural
                conditions.
              </p>
              <LinkButton
                href="/projects/jake-everly-residence?source=pergola_snow_load_winter_project"
                variant="secondary"
                size="md"
              >
                View the Crystal Lake project
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="label-editorial text-edg-brand mb-4">
                Model-specific evidence
              </div>
              <h2 className="section-title mb-4 text-white">
                Current manufacturer records show why the model matters
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                EDG currently works from a manufacturer-flexible toolkit. These
                published records are useful reference points, not a promise
                that any one number applies to every layout or address.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {modelNotes.map((model) => (
                <div key={model.name} className="border border-white/15 p-6">
                  <h3 className="mb-4 text-xl font-bold">{model.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                    {model.note}
                  </p>
                  <a
                    href={model.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-edg-brand inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase"
                  >
                    Read manufacturer record
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-xs text-zinc-500">{model.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-zinc-400">
              Published information can change. Final span, snow design load,
              attachment, foundations, and operating instructions must come from
              the current documents for the selected system and the actual
              project.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="label-editorial-brand mb-4">
                2. Winter operation
              </div>
              <h2 className="section-title mb-4">
                The roof needs a clear snow and freezing protocol
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A louvered roof is a motorized assembly with moving parts. The
                winter plan should be decided during specification, not
                improvised after ice forms around the louvers or inside the
                drainage path.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {winterSteps.map((step) => (
                <Card key={step.title} variant="outline" padding="lg">
                  <step.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="bg-surface-muted mt-10 rounded-sm p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-edg-brand-text h-6 w-6 shrink-0" />
                <h3 className="text-xl font-bold">
                  The practical owner handoff
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Before the first winter, the owner should know the normal roof
                position, the conditions that suspend operation, who clears
                exceptional accumulation, how sensors are configured, and who to
                call if the roof stops mid-cycle. That short handoff is part of
                a safe, usable system—not a substitute for engineering.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="label-editorial-brand mb-4">
                3. Water, snow, and ice
              </div>
              <h2 className="section-title mb-4">
                Drainage remains an owner responsibility after installation
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Closed louvers can route water into gutters and posts when the
                selected system is designed and installed for that function. The
                discharge still has to land somewhere. Freeze-thaw cycles, ice,
                debris, heavy precipitation, and nearby doors or hardscape can
                make the drainage path just as important as the roof itself.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {responsibilityRows.map((row) => (
                <Card key={row.owner} variant="default" padding="lg">
                  <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
                    {row.owner === 'Owner and site team' ? (
                      <Droplets className="text-edg-brand-text h-6 w-6" />
                    ) : (
                      <ShieldCheck className="text-edg-brand-text h-6 w-6" />
                    )}
                    {row.owner}
                  </h3>
                  <div className="space-y-4">
                    {row.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                        <p className="text-text-secondary leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex gap-4 border border-black/10 bg-white p-6">
              <AlertTriangle className="text-edg-brand-text mt-1 h-6 w-6 shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                Winter water behavior is not an absolute promise of dryness.
                Brustor’s current conditions, for example, note that drainage
                and tightness cannot be guaranteed during successive frost and
                thaw periods. That is a reminder to plan the discharge path and
                owner maintenance around actual weather, not just the roof’s
                closed position.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="label-editorial-brand mb-4">
                  4. Midwest site review
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                  What EDG verifies for an exposed Chicago or Milwaukee site
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  EDG starts with the property and the finished outdoor room,
                  then narrows the manufacturer and configuration. An address
                  near Lake Michigan, an open suburban yard, a roof edge, and a
                  sheltered courtyard can all lead to different questions.
                </p>
              </div>
              <div className="space-y-4">
                {siteChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-black/10 pb-4"
                  >
                    <MapPin className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link href="/guides/louvered-pergolas?source=pergola_snow_load_winter_related">
                <Card
                  variant="outline"
                  padding="lg"
                  className="group hover:border-edg-brand h-full transition-colors"
                >
                  <h3 className="mb-3 text-xl font-bold">
                    Complete louvered pergola guide
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    Compare rain, drainage, cost, system fit, and the broader
                    louvered-roof decision.
                  </p>
                  <span className="text-edg-brand-dark inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Continue{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="/guides/motorized-pergola-permits-hoa-engineering?source=pergola_snow_load_winter_related">
                <Card
                  variant="outline"
                  padding="lg"
                  className="group hover:border-edg-brand h-full transition-colors"
                >
                  <h3 className="mb-3 text-xl font-bold">
                    Permits and engineering
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    See how the address, attachment, drawings, structure, and
                    review path shape a permanent pergola.
                  </p>
                  <span className="text-edg-brand-dark inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Review constraints{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="/guides/motorized-pergola-planning?source=pergola_snow_load_winter_related">
                <Card
                  variant="outline"
                  padding="lg"
                  className="group hover:border-edg-brand h-full transition-colors"
                >
                  <h3 className="mb-3 text-xl font-bold">
                    Motorized pergola planning
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    Start with the complete project: structure, drainage, power,
                    controls, accessories, and local constraints.
                  </p>
                  <span className="text-edg-brand-dark inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Plan the project{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Pergola snow-load questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
                  <h3 className="mb-3 flex items-start gap-3 text-xl font-bold">
                    <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary pl-8 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Need a winter-ready pergola plan?
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Start with your contact information and project interest.
                Photos, dimensions, and mounting details are optional on the
                initial request, but helpful if you have them. EDG can then
                separate a model&apos;s published information from the
                engineering and operating decisions your site actually needs.
              </p>
            </div>
            <LinkButton
              href="/guides/pergola-system-fit-review?source=pergola_snow_load_winter_bottom"
              size="lg"
              className="w-full justify-between"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto flex max-w-4xl gap-4 text-sm leading-relaxed text-zinc-600">
            <FileText className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
            <p>
              This guide is planning information, not a structural design or
              operating manual. Manufacturer documents, approved drawings, the
              applicable local requirements, and the project-specific review
              control the final answer.
            </p>
          </div>
        </Container>
      </Section>
    </article>
  );
}
