import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CloudRain,
  Eye,
  Home,
  Ruler,
  ShieldCheck,
  Smartphone,
  Sun,
  Wind,
  Zap,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola with Retractable Screens Planning Guide | EDG',
  description:
    'Plan a louvered pergola with retractable screens around the way you use your patio. EDG helps coordinate openings, fabric, controls, installation, and care.',
  alternates: {
    canonical: '/guides/pergola-with-retractable-screens',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergolas with Retractable Screens | EDG Patio & Shade',
    description:
      'See how EDG coordinates a screened pergola, from roof and opening fit through fabric, controls, installation, and care.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'pergola with screens',
    'pergola with retractable screens',
    'louvered pergola with screens',
    'pergola with motorized screens',
    'pergola privacy screen',
  ],
};

const comparisonRows = [
  {
    option: 'Pergola with retractable screens',
    fit: 'A patio that needs adjustable overhead shade and side protection, but should still open back up.',
    tradeoff:
      'The roof, screen housing, tracks, structure, drainage, power, and controls need to be specified together.',
  },
  {
    option: 'Fixed screened porch',
    fit: 'A space that should remain screened every day with a permanent roof and fixed enclosure.',
    tradeoff:
      'The screen is always present, so the space has less of the open-air flexibility that makes a retractable system useful.',
  },
  {
    option: 'Pergola with glass walls',
    fit: 'A more protected outdoor room where clearer views and additional wind or rain comfort matter most.',
    tradeoff:
      'Glass is a different enclosure category with less airflow and a larger structural and budget commitment than mesh.',
  },
];

const fitSignals = [
  {
    icon: Sun,
    title: 'You need two layers of comfort',
    description:
      'The louvered roof manages overhead sun and, on systems specified for rain management, moves water through its drainage path. Screens address side sun, insects, privacy, or everyday wind comfort.',
  },
  {
    icon: Home,
    title: 'The space should change during the day',
    description:
      'Raise the screens when the patio should feel open. Lower selected bays when the sun, bugs, neighbors, or a cross-breeze make the space less comfortable.',
  },
  {
    icon: Ruler,
    title: 'The openings can be planned',
    description:
      'A screened pergola works best when posts, clear openings, furniture zones, door swings, roof height, housing, and side-track locations are known early.',
  },
  {
    icon: CloudRain,
    title: 'The project is a complete outdoor-room decision',
    description:
      'A roof and screens solve different comfort problems. EDG coordinates the selected roof, fabric, drainage, power, exposure, and operating plan so the finished space works as one system.',
  },
];

const integrationCards = [
  {
    title: 'Integrated screens',
    label: 'Best when the roof is still being designed',
    description:
      'The pergola frame and screen bays are coordinated from the start. EDG can align posts, trim, finish, wiring, service access, and compatible screen hardware while the roof is being designed.',
    checks: [
      'Select the roof and screen combination that fits the opening and how you use the patio.',
      'Reserve the opening height and width for the selected housing and guides.',
      'Coordinate roof drainage, lighting, heaters, controls, and screen wiring.',
    ],
  },
  {
    title: 'Retrofit screens',
    label: 'Best when the structure already exists',
    description:
      'A retrofit can work on an existing pergola, porch, pavilion, or covered patio when the frame can carry the housing and side guides. EDG measures the opening, checks attachment surfaces, and plans trim, power, and future service around the structure that is already there.',
    checks: [
      'Measure width, height, square, plumb, beam depth, and post locations.',
      'Decide whether the housing is outside-mounted, recessed, or intentionally visible.',
      'Check how the added tracks affect doors, furniture, walk paths, and the view.',
    ],
  },
];

const coordinationCards = [
  {
    icon: Ruler,
    title: 'Openings and housing',
    description:
      'Each bay needs a clear opening, a top location for the roller housing, side room for the guides, a bottom condition for the bar or seal, and enough access to service the system later. A drawing that only shows the roof footprint is not enough.',
  },
  {
    icon: Zap,
    title: 'Power and wiring',
    description:
      'Screen motors, roof motors, lights, heaters, sensors, and controls should be mapped before the structure is closed in. The quote should identify the intended power path, control locations, and which electrical work belongs to the project team or electrician.',
  },
  {
    icon: Smartphone,
    title: 'Controls and scenes',
    description:
      'A wall switch or handheld remote may be enough for a small patio. Larger projects may use grouped bays, app control, sensors, or home-automation integration. Shared control is only promised after the selected motor and control families are confirmed.',
  },
];

const fabricChoices = [
  {
    icon: ShieldCheck,
    title: 'Insect mesh',
    description:
      'Start here when mosquitoes, flies, gnats, and airflow are the main reasons to screen the patio. Insect mesh keeps the opening visually open while the screen is down, but it is not a privacy or storm-protection product by default.',
  },
  {
    icon: Sun,
    title: 'Solar screen',
    description:
      'Choose a solar-oriented fabric when glare, low-angle sun, heat, UV exposure, or daytime privacy matters more than maximum openness. Openness, color, view-through, and daylight change the experience, so the fabric should be reviewed at the actual orientation.',
  },
  {
    icon: Eye,
    title: 'Privacy screen variation',
    description:
      'Privacy is a fabric and lighting decision, not a universal label. A denser or darker screen can reduce visibility into the patio in some conditions, while nighttime interior lighting can change what is visible from outside. Keep the privacy goal specific to the view and time of day.',
  },
  {
    icon: Wind,
    title: 'Vinyl or other specialty option',
    description:
      'Some projects need a more closed seasonal layer for wind, temperature, or weather comfort. Vinyl and storm-protection products are separate decisions from everyday insect or solar mesh and should be specified for the actual conditions and approvals.',
  },
];

const operatingSteps = [
  'Open the roof or screens when the patio should reconnect with the yard, pool, or view.',
  'Lower the screen bay that solves the current problem instead of closing every side by default.',
  'Use the fabric selected for the condition: insect, solar, privacy, or a more closed seasonal option.',
  'Retract screens when the opening should be clear or when the selected system’s operating guidance calls for it.',
  'Use sensors and automation as an aid, not as a substitute for model-specific operating instructions and owner judgment.',
];

const quoteInputs = [
  'Your project location and whether you are planning as a homeowner or trade partner.',
  'Rough roof footprint, ceiling or beam height, and opening sizes if you know them.',
  'Photos or a sketch showing posts, walls, doors, stairs, deck or slab conditions, and furniture or kitchen zones.',
  'The main problem to solve: insects, side sun, glare, privacy, wind comfort, shoulder-season use, or several at once.',
  'Whether the pergola is new, an existing structure, or part of a broader glass, heating, lighting, drainage, or landscape project.',
  'Known power or control needs, HOA or permit questions, and the timeline you have in mind.',
];

const faqs = [
  {
    question: 'What is a pergola with retractable screens?',
    answer:
      'It is an outdoor roof system paired with motorized screens on selected side openings. The roof can manage overhead sun and, when specified for rain management, route water through its drainage path. The screens lower for insects, solar comfort, privacy, or everyday wind comfort and retract when the space should remain open.',
  },
  {
    question: 'Can screens be added to an existing pergola?',
    answer:
      'Often, yes, but the structure and opening have to be checked first. EDG reviews the beam and post conditions, opening dimensions, screen housing, side guides, attachment surfaces, power route, trim, service access, and whether the selected screen is compatible with the existing roof system. A retrofit is not automatically compatible because both products are motorized.',
  },
  {
    question: 'Are integrated screens better than retrofit screens?',
    answer:
      'Integrated screens usually give EDG more design control because the roof, housing, posts, finishes, wiring, and controls are planned together. A retrofit can be the right answer when the existing structure is sound and you want more flexibility without replacing the roof. EDG helps choose the path that fits the actual frame and your priorities.',
  },
  {
    question: 'Which fabric should I choose for a pergola privacy screen?',
    answer:
      'Start with the view and the problem. Insect mesh prioritizes bugs and airflow. Solar fabric can reduce glare and improve daytime privacy while changing daylight and view-through. A denser privacy-oriented fabric can help in selected conditions, but privacy changes with interior lighting, angle, color, and time of day. EDG reviews samples around the real opening before final selection.',
  },
  {
    question: 'Do retractable screens make a pergola weatherproof?',
    answer:
      'Screens add side comfort; they do not turn a pergola into a sealed room. EDG coordinates the roof, drainage, fabric, exposure, and operating plan so the system is suited to the way you want to use the patio.',
  },
  {
    question: 'Can the pergola and screens use one control system?',
    answer:
      'They can when the selected motors and controls are compatible. EDG maps the control experience—from remotes and grouped bays to apps or automation—and confirms wiring and compatibility during design.',
  },
];

export default function PergolaWithRetractableScreensPage() {
  const pageUrl =
    'https://www.edgpatioshade.com/guides/pergola-with-retractable-screens';
  const articleSchema = generateArticleSchema({
    title: 'Pergolas with Retractable Screens: Planning Guide',
    description:
      'Compare screened pergolas with fixed screened porches and glass, then plan roof fit, screen openings, fabric, controls, and a complete project quote.',
    url: pageUrl,
    image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteScreen}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Outdoor Room Planning',
  });
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Pergolas with Retractable Screens' },
              ]}
            />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Roof + Screen Planning Guide
              </div>
              <h1 className="mb-8 max-w-3xl text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                Pergola with screens: plan the roof and side protection
                together.
              </h1>
              <p className="text-text-inverse-muted mb-8 max-w-3xl text-xl leading-relaxed">
                Tell EDG what you want the patio to do, and we will coordinate
                the roof, screen openings, fabric, controls, installation, and
                care around the way you use the space.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="/contact?type=quote&product=multiple&source=pergola_retractable_screens_hero"
                  conversionName="pergola_retractable_screens_quote_cta"
                  ctaPosition="hero"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <LinkButton
                  href="#compare-paths"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Compare the paths
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.whiteScreen}
                alt="Louvered pergola with a deployed retractable screen on one side"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short answer</div>
            <h2 className="section-title mb-6">
              When does a pergola with screens make sense?
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                A screened pergola fits when the patio needs both an adjustable
                roof and side protection, but should still feel open when the
                day is comfortable. The roof handles overhead shade and the
                structure for the room. Retractable screens let you respond to
                insects, low sun, privacy, or side wind without keeping the
                openings permanently enclosed.
              </p>
              <p>
                That combination is different from a fixed screened porch. It is
                also different from a glass outdoor room, where clearer views
                and more wind or rain protection may matter more than airflow.
                The right choice depends on what the space needs to do and how
                often you want it to change.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {fitSignals.map((signal) => (
              <Card key={signal.title} variant="muted" padding="lg">
                <signal.icon className="text-edg-brand-text mb-5 h-7 w-7" />
                <h3 className="mb-3 text-xl font-bold">{signal.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {signal.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="compare-paths" className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Compare the paths</div>
            <h2 id="compare-paths-heading" className="section-title mb-4">
              Screened pergola, fixed porch, or glass?
            </h2>
            <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
              Start with the finished space rather than a product label. Each
              option solves a different balance of openness, comfort, weather,
              and permanence.
            </p>
          </div>
          <div
            className="border-border focus-visible:ring-edg-brand overflow-x-auto border bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            role="region"
            aria-labelledby="compare-paths-heading"
            aria-describedby="compare-paths-scroll-hint"
            tabIndex={0}
          >
            <table className="w-full min-w-[780px]">
              <thead className="bg-surface-dark text-left text-xs tracking-[0.16em] text-white uppercase">
                <tr>
                  <th className="px-6 py-5">Option</th>
                  <th className="px-6 py-5">Best fit</th>
                  <th className="px-6 py-5">Important tradeoff</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.option} className="border-border border-t">
                    <th className="px-6 py-6 text-left align-top text-lg font-bold">
                      {row.option}
                    </th>
                    <td className="text-text-secondary px-6 py-6 align-top leading-relaxed">
                      {row.fit}
                    </td>
                    <td className="text-text-secondary px-6 py-6 align-top leading-relaxed">
                      {row.tradeoff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            id="compare-paths-scroll-hint"
            className="text-text-secondary mt-3 text-sm md:hidden"
          >
            On smaller screens, focus this comparison and scroll horizontally to
            view all columns.
          </p>
          <div className="border-edg-brand mt-8 flex flex-col gap-4 border-l-2 bg-white p-6 md:flex-row md:items-center md:justify-between">
            <p className="text-text-secondary max-w-3xl leading-relaxed">
              Planning a protected room with clearer views? Compare the glass
              path in EDG’s{' '}
              <Link
                href="/outdoor-rooms/pergola-glass-outdoor-room"
                className="text-text-primary font-semibold underline underline-offset-4"
              >
                pergola + glass outdoor-room guide
              </Link>
              .
            </p>
            <Link
              href="/systems/pergolas"
              className="text-text-primary inline-flex shrink-0 items-center gap-2 font-bold uppercase"
            >
              Explore pergolas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Fit before finish
              </div>
              <h2 className="section-title mb-6">
                Integrated versus retrofit screens
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  The key question is not whether both products are motorized.
                  It is whether the screen housing, guides, structure, fabric,
                  power, controls, and service access belong together on the
                  actual roof and opening.
                </p>
                <p>
                  If the pergola is new, screen planning can influence post
                  locations, bay widths, trim, drainage, electrical rough-in,
                  and the finished sightline. If the pergola already exists, the
                  retrofit review starts with what the structure can carry and
                  what the openings can accept.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {integrationCards.map((card) => (
                <Card key={card.title} variant="default" padding="lg">
                  <div className="label-editorial-brand mb-4">{card.label}</div>
                  <h3 className="mb-4 text-2xl font-bold">{card.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-3">
                    {card.checks.map((check) => (
                      <li key={check} className="flex items-start gap-3">
                        <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                        <span className="text-text-primary text-sm leading-relaxed">
                          {check}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Designed around your patio
            </div>
            <h2 className="section-title mb-4">
              Choose the combination that fits your space.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG starts with how you want to use the patio, then recommends and
              coordinates the roof, screens, and controls around your openings,
              comfort goals, and budget.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-7 w-7" />
              <h3 className="mb-3 text-xl font-bold">Roof and screen fit</h3>
              <p className="text-text-secondary leading-relaxed">
                Plan the roof and screens together so the housing, guides,
                posts, and drainage work with the space. EDG checks attachment
                details and service access for both new structures and existing
                patios.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <Wind className="text-edg-brand-text mb-5 h-7 w-7" />
              <h3 className="mb-3 text-xl font-bold">
                Comfort for each opening
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Choose screens around insects, side sun, privacy, and airflow.
                Opening dimensions, exposure, fabric, and the way you use the
                patio guide the recommendation.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <Smartphone className="text-edg-brand-text mb-5 h-7 w-7" />
              <h3 className="mb-3 text-xl font-bold">
                Controls that work together
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Decide how you want to operate the roof and screens, from a
                handheld remote to grouped controls or automation. EDG confirms
                compatibility and wiring needs before specifying the
                combination.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.progressiveHomeExterior}
                alt="Motorized exterior screens providing solar and privacy control on a covered patio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">Fabric choices</div>
              <h2 className="section-title mb-6">
                Choose the fabric around the problem, not the label.
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                A pergola privacy screen, an insect screen, and a solar screen
                can occupy the same opening but create different light, view,
                airflow, and privacy conditions. Samples should be reviewed at
                the real orientation and around the way the patio is used.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fabricChoices.map((choice) => (
              <Card key={choice.title} variant="muted" padding="lg">
                <choice.icon className="text-edg-brand-text mb-5 h-7 w-7" />
                <h3 className="mb-3 text-xl font-bold">{choice.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {choice.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Power + daily use</div>
            <h2 className="section-title mb-4">
              Design the controls before the patio is finished.
            </h2>
            <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
              Screen comfort is only useful when the system is easy to operate
              and safe to leave in the right position. Housing, power, motors,
              sensors, remotes, and service access should be part of the roof
              plan from the beginning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coordinationCards.map((card) => (
              <Card key={card.title} variant="default" padding="lg">
                <card.icon className="text-edg-brand-text mb-5 h-7 w-7" />
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="border-border mx-auto mt-12 max-w-4xl border bg-white p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <Wind className="text-edg-brand-text h-6 w-6" />
              <h3 className="text-2xl font-bold">Typical daily operation</h3>
            </div>
            <div className="grid gap-4">
              {operatingSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="bg-edg-dark text-edg-brand flex h-8 w-8 shrink-0 items-center justify-center text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-primary leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                EDG project highlights
              </div>
              <h2 className="section-title mb-6">
                See the kind of coordination we bring to the project.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                EDG plans roof, screen, and comfort decisions around the actual
                patio. Karp shows a multi-bay motorized louvered pergola with
                wood-grain panels and a privacy wall in Northbrook. O’Hare shows
                a wide motorized screen opening in Bartlett. They are different
                projects, but each makes the same point: openings, finishes, and
                daily operation are easier to coordinate when the plan starts
                with how the space will be used.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                On your project, EDG brings those decisions together with
                design, engineering, installation, and care so you do not have
                to coordinate the roof and screens as separate jobs.
              </p>
            </div>
            <div className="grid gap-6">
              <Card
                variant="default"
                padding="none"
                className="overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images.systems.shades.ohareHero}
                    alt="EDG motorized insect screen on a wide Bartlett opening"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-8">
                  <div className="label-editorial-brand mb-3">Bartlett, IL</div>
                  <h3 className="mb-3 text-2xl font-bold">
                    O’Hare: motorized screen for a wide opening
                  </h3>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    A wide opening that stays open when the screen is raised and
                    gains insect protection when the screen is deployed.
                  </p>
                  <Link
                    href="/projects/ohare"
                    className="text-text-primary inline-flex items-center gap-2 font-bold uppercase"
                  >
                    View project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
              <Card variant="dark" padding="lg">
                <div className="label-editorial-brand text-edg-brand mb-3">
                  Northbrook, IL
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Karp: multi-bay roof and privacy planning
                </h3>
                <p className="mb-5 leading-relaxed text-zinc-300">
                  A motorized louvered pergola with wood-grain panels, distinct
                  dining and lounge zones, and a privacy wall beside the pool.
                </p>
                <Link
                  href="/projects/karp"
                  className="inline-flex items-center gap-2 font-bold text-white uppercase"
                >
                  View project <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Plan the complete project
              </div>
              <h2 className="section-title mb-4">
                Send the details that change the recommendation.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Start with the location, rough openings, photos if you have
                them, and the comfort problem you want to solve. EDG will
                connect the roof, screens, controls, installation, and care into
                one project plan.
              </p>
            </div>
            <div className="grid gap-4">
              {quoteInputs.map((input) => (
                <Card key={input} variant="default" padding="lg">
                  <div className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-primary leading-relaxed font-medium">
                      {input}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <TrackedLink
                href="/contact?type=quote&product=multiple&source=pergola_retractable_screens_quote"
                conversionName="pergola_retractable_screens_quote_cta"
                ctaPosition="quote_inputs"
                className={buttonClassName({ size: 'lg' })}
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </TrackedLink>
              <LinkButton
                href="/guides/pergola-system-fit-review?source=pergola_retractable_screens_secondary"
                variant="secondary"
                size="lg"
              >
                Share plans and photos
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Pergola with screens questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to plan the complete roof-and-screen project?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl leading-relaxed">
                Share the location, rough openings, photos, and the comfort
                problem you want to solve. EDG will help determine whether an
                integrated screen, a retrofit, glass, or another system is the
                right next step.
              </p>
              <TrackedLink
                href="/contact?type=quote&product=multiple&source=pergola_retractable_screens_bottom"
                conversionName="pergola_retractable_screens_quote_cta"
                ctaPosition="bottom"
                className={buttonClassName({ size: 'lg' })}
              >
                Request a Quote
              </TrackedLink>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="text-text-inverse-muted space-y-4">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Related planning
                </h4>
                <Link
                  href="/systems/pergolas"
                  className="flex items-center gap-3"
                >
                  <Home className="text-edg-brand h-4 w-4" />
                  Motorized louvered pergolas
                </Link>
                <Link
                  href="/systems/shades"
                  className="flex items-center gap-3"
                >
                  <ShieldCheck className="text-edg-brand h-4 w-4" />
                  Retractable screens
                </Link>
                <Link
                  href="/guides/motorized-retractable-screen-pricing"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Screen pricing guide
                </Link>
                <Link
                  href="/outdoor-rooms/pergola-glass-outdoor-room"
                  className="flex items-center gap-3"
                >
                  <Eye className="text-edg-brand h-4 w-4" />
                  Pergola + glass outdoor room
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
