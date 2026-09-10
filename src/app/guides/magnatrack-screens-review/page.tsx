import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CircleAlert,
  ExternalLink,
  Gauge,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { buttonClassName, LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ScreenFitBudgetForm } from '@/components/features/shades/ScreenFitBudgetForm';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'MagnaTrack Screens Reviews: EDG Installation Review & Alternatives',
  description:
    'An EDG dealer review of MagnaTrack screens, based on a documented installation record, manufacturer evidence, operating limits, care, and alternatives.',
  alternates: {
    canonical: '/guides/magnatrack-screens-review',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'MagnaTrack Screens Reviews: EDG Installation Review & Alternatives',
    description:
      'What EDG can document about MagnaTrack screens, where the magnetic track helps, and when another screen or enclosure approach may fit better.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'magnatrack screens reviews',
    'magnatrack screen review',
    'magnatrack vs zipper screens',
    'magnatrack vs phantom screens',
    'motorized patio screen review',
  ],
};

const evidenceItems = [
  'Bartlett, Illinois residential garage/outbuilding opening',
  'Progressive Screens Gen 4 residential insect screen',
  'Outside-mount white textured frame with black screen fabric',
  'Motorized operation shown closed, partway through travel, and open',
];

const comparisonRows = [
  {
    approach: 'Magnetic self-tensioning track',
    bestFor:
      'A custom motorized screen where track behavior under ordinary pressure, a clean opening, and flexible daily use are priorities.',
    tradeoff:
      'Still needs a suitable structure, aligned side tracks, a clear bottom-bar path, power, and model-specific operating guidance.',
    edgView:
      'The strongest fit when the project needs a serious screen but does not need to become a fixed room or storm shutter.',
  },
  {
    approach: 'Conventional zipper or fixed-track screen',
    bestFor:
      'A project where the selected installer has a proven system for the opening and the buyer values that product, service, or design path.',
    tradeoff:
      'The fabric remains mechanically captured in the track, so opening geometry, alignment, debris, and operation deserve close attention.',
    edgView:
      'Not automatically wrong. Compare the actual system, installer, maintenance plan, and site exposure instead of assuming every zipper system behaves the same.',
  },
  {
    approach: 'Fixed screened room',
    bestFor:
      'A space that should remain enclosed for insects and does not need the screen to disappear for open-air use.',
    tradeoff:
      'The enclosure is always present and changes the view, circulation, and architectural feel of the opening.',
    edgView:
      'Often the simpler answer when the owner wants a permanent screened room rather than a flexible outdoor opening.',
  },
  {
    approach: 'Retractable glass enclosure',
    bestFor:
      'Projects where clearer views and more wind or rain comfort matter more than maximum airflow through mesh.',
    tradeoff:
      'A different enclosure category with more structural, budget, and cleaning considerations than a screen.',
    edgView:
      'Worth comparing when the real request is weather protection, not only bugs, glare, or privacy.',
  },
];

const modelAlternatives = [
  {
    name: 'MagnaTrack residential insect screen',
    sourceLabel: 'Progressive residential screens',
    sourceHref:
      'https://www.progressivescreens.com/products/residential-screens/',
    chooseWhen:
      'The first problem is insects and airflow through a patio, porch, pergola bay, lanai, garage, or similar opening.',
    chooseAnotherWhen:
      'The opening needs storm-rated protection, a permanent enclosure, or a different level of rain and wind control.',
  },
  {
    name: 'MagnaTrack solar screen',
    sourceLabel: 'Progressive screen options',
    sourceHref:
      'https://www.progressivescreens.com/products/residential-screens/',
    chooseWhen:
      'Glare, low-angle sun, privacy, or solar comfort matters more than the most open insect-mesh view.',
    chooseAnotherWhen:
      'The project is primarily a bug-control opening and the owner wants maximum openness and airflow.',
  },
  {
    name: 'MagnaTrack commercial screen',
    sourceLabel: 'Progressive commercial screens',
    sourceHref:
      'https://www.progressivescreens.com/products/commercial-screens/',
    chooseWhen:
      'A restaurant, hotel, club, or other commercial patio needs a screen plan around daily service, seasonal use, and multiple openings.',
    chooseAnotherWhen:
      'The opening is a straightforward residential application with no commercial coordination or heavier-use requirement.',
  },
  {
    name: 'Progressive Defender hurricane screen',
    sourceLabel: 'Progressive Defender system',
    sourceHref:
      'https://www.progressivescreens.com/products/defender-hurricane-screens/',
    chooseWhen:
      'The project needs a separately specified storm-protection system and the applicable approvals, design pressures, and installation details are confirmed.',
    chooseAnotherWhen:
      'The goal is ordinary bug, shade, privacy, or everyday wind comfort. Do not treat a standard insect or solar screen as a hurricane product.',
  },
  {
    name: 'Phantom motorized outdoor screen',
    sourceLabel: 'Phantom outdoor screens',
    sourceHref: 'https://www.phantomscreens.com/screens/',
    chooseWhen:
      'A Phantom-authorized installation path, its casing and screen options, or an existing Phantom system is the better match for the opening and service plan.',
    chooseAnotherWhen:
      'The project specifically benefits from MagnaTrack’s magnetic track strategy and the selected opening supports that system.',
  },
];

const operatingChecks = [
  {
    icon: Ruler,
    title: 'The opening still decides the result',
    description:
      'A magnetic track does not correct a weak mounting surface, an out-of-square opening, poor headbox placement, or a power path that was left until the end. Those details need to be reviewed before the system is ordered.',
  },
  {
    icon: Gauge,
    title: 'Wind flexibility is not a wind rating',
    description:
      'Progressive describes the track as able to separate and retension under pressure. That is different from promising that a standard screen is a wind break or can stay down through every weather event. The selected model and site conditions control the operating rules.',
  },
  {
    icon: CircleAlert,
    title: 'The bottom bar needs a clear path',
    description:
      'Before every cycle, the opening should be clear of furniture, toys, tools, snow, ice, and other objects that could interrupt travel. If movement changes or the screen does not seat correctly, stop repeating the cycle and contact the installer or service partner.',
  },
  {
    icon: Wrench,
    title: 'Maintenance is light, not zero',
    description:
      'Keep the housing, side tracks, and bottom-bar area free of dirt and debris. Follow the selected model’s written cleaning, weather, and storage instructions. Progressive’s published warranty also makes following product instructions and preventive maintenance part of the ownership conversation.',
  },
];

const faqs = [
  {
    question: 'Are MagnaTrack screens worth it?',
    answer:
      'They can be worth considering when a custom opening needs a motorized screen with a magnetic track strategy, especially when flexible daily use and ordinary outdoor pressure are part of the brief. They are not automatically the right choice for a permanent screened room, a storm-protection requirement, or an opening that cannot support the housing and tracks.',
  },
  {
    question: 'How does MagnaTrack compare with Phantom screens?',
    answer:
      'Both manufacturers offer professionally installed retractable screen paths, but the comparison should start with the opening, screen material, controls, weather expectations, local service path, and warranty terms. MagnaTrack’s distinctive argument is its magnetic, self-tensioning track. Phantom offers its own motorized outdoor screen products and installation network. EDG does not treat either brand as a universal winner.',
  },
  {
    question: 'Do MagnaTrack screens replace hurricane screens?',
    answer:
      'No. Progressive lists Defender hurricane screens as a separate product category with its own system, approvals, and design requirements. A standard insect, solar, or comfort screen should not be represented as storm protection without confirming the exact specified product and project requirements.',
  },
  {
    question: 'Do MagnaTrack screens need maintenance?',
    answer:
      'Yes. Maintenance is generally part of owning any motorized exterior screen: keep the track and travel path clear, clean the system using the manufacturer’s instructions, and address changes in movement before they become repeated operating cycles. Progressive’s published warranty excludes problems tied to improper use, failure to follow instructions, or failure to perform preventive maintenance.',
  },
  {
    question: 'Can MagnaTrack screens be retrofitted?',
    answer:
      'Progressive publishes both new-construction and retrofit applications. Whether a retrofit is clean depends on the opening, mounting surfaces, headbox visibility, side-track path, power route, trim, and future service access. EDG treats retrofit as a site-review question, not an automatic yes.',
  },
];

const sourceLinkClassName =
  'text-text-primary underline decoration-edg-brand underline-offset-4 hover:text-edg-brand-text';

export default function MagnaTrackScreensReviewPage() {
  const articleSchema = generateArticleSchema({
    title: 'MagnaTrack Screens Review: EDG Installation Review & Alternatives',
    description:
      'An EDG dealer review of MagnaTrack screens based on a documented installation record, manufacturer evidence, operating limits, care, and alternatives.',
    url: 'https://www.edgpatioshade.com/guides/magnatrack-screens-review',
    image: `https://www.edgpatioshade.com${images.systems.shades.ohareHero}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Screen Planning',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'MagnaTrack Screens Review' },
            ]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                EDG Field Review · September 2026
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                MagnaTrack screens review: where the magnetic track earns its
                keep.
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                If you are comparing MagnaTrack screens reviews, start with the
                opening and the operating expectations. This EDG review combines
                a documented Progressive Screens installation record with the
                manufacturer&apos;s current product information and a practical
                comparison against other screen and enclosure paths.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="#screen-review-quote"
                  conversionName="screen_review_quote_cta"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                </TrackedLink>
                <LinkButton
                  href="#field-evidence"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See the evidence
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.ohareClosed}
                alt="Closed Progressive Screens motorized insect screen on a Bartlett outbuilding opening"
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
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="label-editorial-brand mb-4">Our conclusion</div>
              <h2 className="section-title mb-6">
                MagnaTrack is a strong screen candidate, not a universal winner.
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG would consider MagnaTrack when a covered patio, porch,
                  pergola bay, lanai, or garage-style opening needs a motorized
                  screen that can disappear when the space should feel open. The
                  magnetic track is the product&apos;s meaningful point of
                  difference: Progressive describes a Keder interlock and
                  opposing magnetic pull designed to let the screen react to
                  pressure and retension as conditions change.
                </p>
                <p>
                  The documented EDG example is the{' '}
                  <Link href="/projects/ohare" className={sourceLinkClassName}>
                    O&apos;Hare project in Bartlett
                  </Link>
                  . It confirms a wide residential opening with a motorized
                  Progressive Screens Gen 4 insect screen, an outside-mount
                  white textured frame, black screen fabric, and motion media
                  showing the screen through its travel. That is useful field
                  evidence of the specified system and its presentation—not an
                  independent durability test or customer rating.
                </p>
                <p>
                  The right question is therefore not “Is MagnaTrack the best?”
                  It is “Does this screen strategy fit the opening, weather
                  expectations, fabric goal, service plan, and budget?”
                </p>
              </div>
            </div>
            <Card variant="dark" padding="lg" className="border-white/10">
              <p className="text-edg-brand mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                Dealer disclosure
              </p>
              <h2 className="mb-4 text-2xl font-bold">
                This is an EDG dealer perspective.
              </h2>
              <p className="text-text-inverse-muted leading-relaxed">
                EDG designs, supplies, and installs motorized screen systems,
                and MagnaTrack by Progressive Screens is a featured partner. We
                have a commercial relationship with products we may recommend.
                The review uses EDG&apos;s documented project record and current
                manufacturer materials; it does not claim a survey of all
                installations, independent laboratory scoring, or a guaranteed
                outcome for a new project.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="field-evidence" className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Documented field evidence
            </div>
            <h2 className="section-title mb-4">
              What EDG has actually documented.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The O&apos;Hare project record is specific enough to show what was
              selected and how the screen moves. It is not presented as a
              testimonial, star rating, or completed outcomes study.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-white sm:col-span-2">
                  <Image
                    src={images.systems.shades.ohareHero}
                    alt="Progressive Screens Gen 4 motorized insect screen installed on a wide Bartlett opening"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={images.systems.shades.oharePartOpen}
                    alt="Progressive Screens motorized insect screen partway open on the Bartlett project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-white sm:col-span-3">
                  <Image
                    src={images.systems.shades.ohareClosed}
                    alt="Progressive Screens motorized insect screen closed on the Bartlett project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  />
                </div>
              </div>
              <div className="mt-4 overflow-hidden border border-black/10 bg-black">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={images.systems.shades.ohareHero}
                  aria-label="O'Hare project motorized screen cycle preview"
                >
                  <source
                    src="/projects/ohare/screen-cycle-preview.mp4"
                    type="video/mp4"
                  />
                </video>
                <p className="p-4 text-sm leading-relaxed text-zinc-300">
                  Existing EDG project media showing the motorized screen moving
                  across the blue outbuilding opening.{' '}
                  <Link
                    href="/projects/ohare"
                    className="text-white underline underline-offset-4"
                  >
                    View the project record.
                  </Link>
                </p>
              </div>
            </div>

            <Card variant="default" padding="lg">
              <p className="text-edg-brand-text mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                O&apos;Hare / Bartlett, IL
              </p>
              <h3 className="mb-6 text-2xl font-bold">
                Confirmed details in the current EDG record
              </h3>
              <ul className="space-y-4">
                {evidenceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-text-secondary text-sm leading-relaxed">
                  The project record does not establish a universal service-call
                  rate, wind rating, product lifespan, or customer satisfaction
                  score. Those claims require evidence beyond this page&apos;s
                  documented scope.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Mechanism review</div>
            <h2 className="section-title mb-4">
              What the magnetic track changes—and what it does not.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Progressive&apos;s{' '}
              <a
                href="https://www.progressivescreens.com/products/magnatrack-system/"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClassName}
              >
                MagnaTrack system description
              </a>{' '}
              describes opposing-polarity neodymium magnets and a Keder
              interlock. Its published concept allows the magnetic hold to
              separate under pressure and retension when the pressure subsides.
              That is the manufacturer&apos;s product explanation, not an EDG
              laboratory measurement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Less rigid capture',
                description:
                  'The track is intended to flex with pressure rather than forcing the fabric to stay rigidly captured at every moment. That is the core reason buyers compare it with zipper and fixed-track approaches.',
              },
              {
                title: 'Still a custom system',
                description:
                  'The magnets do not remove the need for a sound opening, aligned tracks, a properly placed housing, appropriate fabric, power, controls, and access for future service.',
              },
              {
                title: 'Not a weather promise',
                description:
                  'A screen can improve comfort without being a storm shutter or a universal wind barrier. The exact product, fabric, opening, exposure, and operating instructions still control the result.',
              },
            ].map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-7 w-7" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">Comparison</div>
            <h2 className="section-title mb-4">
              Magnetic track versus conventional zip systems.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The useful comparison is not “magnetic good, zipper bad.” A
              conventional system may be the right answer when its installer,
              service path, and opening fit are stronger for the project. The
              question is how the track behaves, what the site demands, and what
              the owner is prepared to maintain.
            </p>
          </div>

          <div className="overflow-x-auto border border-black/10 bg-white">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-surface-dark text-sm tracking-wider text-white uppercase">
                <tr>
                  <th className="p-5">Approach</th>
                  <th className="p-5">Best fit</th>
                  <th className="p-5">Tradeoff to understand</th>
                  <th className="p-5">EDG view</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.approach}
                    className="border-t border-black/10 align-top"
                  >
                    <th className="p-5 font-bold">{row.approach}</th>
                    <td className="text-text-secondary p-5 leading-relaxed">
                      {row.bestFor}
                    </td>
                    <td className="text-text-secondary p-5 leading-relaxed">
                      {row.tradeoff}
                    </td>
                    <td className="text-text-secondary p-5 leading-relaxed">
                      {row.edgView}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Model-specific alternatives
            </div>
            <h2 className="section-title mb-4">
              Which screen—or different approach—should you choose?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              MagnaTrack is a family of screen categories, not one universal
              configuration. The model, fabric, opening, and use case matter as
              much as the track. These are decision paths, not a ranked product
              list.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelAlternatives.map((option) => (
              <Card key={option.name} variant="muted" padding="lg">
                <h3 className="mb-4 text-xl font-bold">{option.name}</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-text-secondary">
                    <strong className="text-text-primary">
                      Choose it when:
                    </strong>{' '}
                    {option.chooseWhen}
                  </p>
                  <p className="text-text-secondary">
                    <strong className="text-text-primary">
                      Choose another path when:
                    </strong>{' '}
                    {option.chooseAnotherWhen}
                  </p>
                </div>
                <a
                  href={option.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-primary hover:text-edg-brand-text mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                >
                  {option.sourceLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>

          <div className="border-edg-brand bg-surface-muted mt-10 border-l-2 p-6">
            <p className="text-text-secondary leading-relaxed">
              Comparing MagnaTrack with Phantom can be useful when both are
              genuinely available for the project, but the result is not a
              single brand verdict. Phantom&apos;s current guidance also shows
              why the installer and care plan matter: it tells owners to keep
              tracks clean, follow its wind guidance, and retract the screen in
              snow or ice. Those are Phantom instructions, not a MagnaTrack
              rating. Get the selected system&apos;s written operating limits
              before you compare numbers across brands.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Installation, limits, and care
            </div>
            <h2 className="section-title mb-4">
              The parts of the review that matter after the brochure.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A screen review should include the jobsite and the owner&apos;s
              daily habits. The same product can feel reliable in one opening
              and frustrating in another if the structure, exposure, or
              operating expectations are different.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {operatingChecks.map((item) => (
              <Card key={item.title} variant="default" padding="lg">
                <item.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Card variant="outline" padding="lg">
              <h3 className="mb-4 text-xl font-bold">
                Before you approve the quote
              </h3>
              <ul className="space-y-3">
                {[
                  'Confirm width, height, squareness, mounting surfaces, and headbox visibility.',
                  'Choose the fabric around bugs, glare, privacy, airflow, view, and daylight.',
                  'Confirm the power route, control method, sensor plan, and future service access.',
                  'Ask which operating limits apply to the exact screen, fabric, and motor being quoted.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card variant="outline" padding="lg">
              <h3 className="mb-4 text-xl font-bold">
                What the warranty conversation should include
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Progressive&apos;s published{' '}
                <a
                  href="https://www.progressivescreens.com/wp-content/uploads/2022/11/Warranty-1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={sourceLinkClassName}
                >
                  MagnaTrack warranty
                </a>{' '}
                covers defects under normal use but lists exclusions tied to
                improper installation or use, failure to follow instructions,
                lack of preventive maintenance, normal wear, and external
                damage. Ask for the current written warranty for the exact
                product and clarify who handles service in your market.
              </p>
              <p className="text-text-secondary leading-relaxed">
                That is a better ownership question than treating a warranty
                headline as a prediction of how every screen will perform.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="label-editorial-brand mb-4">
                Cost and next step
              </div>
              <h2 className="section-title mb-4">
                A review can narrow the path. A site review sets the quote.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                MagnaTrack screens are custom systems, so price depends on the
                opening, screen count, fabric, housing, controls, wiring,
                mounting, and installation conditions. Use the{' '}
                <Link
                  href="/guides/magnatrack-screens-cost"
                  className={sourceLinkClassName}
                >
                  MagnaTrack screens cost guide
                </Link>{' '}
                for planning ranges, then send the project details that make a
                real recommendation possible.
              </p>
            </div>
            <TrackedLink
              href="#screen-review-quote"
              conversionName="screen_review_quote_cta"
              className={buttonClassName({ size: 'lg' })}
            >
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section id="screen-review-quote" className="section-lg bg-surface">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 border border-black/10 bg-white p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Screen fit review
              </div>
              <h2 className="section-title mb-6">
                Request a quote for the opening—not just the product name.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                Send the location, rough dimensions, photos, and the problem you
                want the screen to solve. EDG can then discuss whether
                MagnaTrack, another screen strategy, or a more protective
                enclosure deserves the next step.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Opening details and photos are optional for the initial request.
              </p>
            </div>
            <ScreenFitBudgetForm
              source="magnatrack_screen_review"
              ctaPosition="magnatrack_review_guide"
            />
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                MagnaTrack screen review questions
              </h2>
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
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Sources behind this review
              </div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Manufacturer information, clearly labeled.
              </h2>
              <p className="text-text-inverse-muted max-w-2xl text-lg leading-relaxed">
                Progressive and Phantom describe their own products and care
                guidance. Those sources help explain mechanisms, categories, and
                operating expectations; they are not independent rankings.
                EDG&apos;s field evidence is the O&apos;Hare/Bartlett project
                record linked above.
              </p>
            </div>
            <div className="space-y-4 border-l border-white/15 pl-8">
              {[
                [
                  'Progressive Screens residential screens',
                  'https://www.progressivescreens.com/products/residential-screens/',
                ],
                [
                  'Progressive Screens MagnaTrack system',
                  'https://www.progressivescreens.com/products/magnatrack-system/',
                ],
                [
                  'Progressive Screens published warranty',
                  'https://www.progressivescreens.com/wp-content/uploads/2022/11/Warranty-1.pdf',
                ],
                [
                  'Phantom Screens maintenance guidance',
                  'https://www.phantomscreens.com/support/maintenance/',
                ],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-inverse-muted hover:text-edg-brand flex items-center gap-3 leading-relaxed transition-colors"
                >
                  <ExternalLink className="text-edg-brand h-4 w-4 shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
