import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShadesGalleryClient } from './ShadesGalleryClient';
import {
  ArrowRight,
  BadgeCheck,
  Bug,
  Building2,
  Check,
  DollarSign,
  ExternalLink,
  Home,
  Ruler,
  ShieldCheck,
  Smartphone,
  Sun,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import {
  generateFAQSchema,
  generateHowToSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Patio Screens & MagnaTrack Installation | EDG',
  description:
    'Design and installation for motorized patio screens and MagnaTrack systems. EDG plans the opening, track, fabric, controls, and mounting for each project.',
  keywords: [
    'motorized screens',
    'retractable screens',
    'motorized patio screens',
    'patio screen enclosures',
    'outdoor screens',
    'insect screens',
    'MagnaTrack screens',
    'MagnaTrack by Progressive Screens',
    'Progressive Screens',
    'MagnaTrack motorized screens',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Patio Screens & MagnaTrack Installation | EDG',
    description:
      'Custom motorized patio screen design and installation for bugs, sun, privacy, and everyday wind comfort.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: { canonical: '/systems/shades' },
};

const screenFitGuideHref =
  '/guides/magnatrack-screens-cost?source=shades_page#screen-fit-budget';

const galleryImages = [
  {
    type: 'image' as const,
    src: images.brand.hero.screens,
    alt: 'Motorized retractable screens on a covered patio opening',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.progressiveHomeExterior,
    alt: 'MagnaTrack motorized screens on a residential patio exterior',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.progressiveArchedPatio,
    alt: 'Motorized screens recessed within arched patio openings',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.hero,
    alt: 'Outdoor motorized screen system installed on a covered structure',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.progressiveWaterfrontLounge,
    alt: 'Outdoor screen system shading a waterfront lounge',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.deployed,
    alt: 'Deployed patio screen creating shade and bug protection',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.progressiveCommercialPatio,
    alt: 'Commercial patio seating enclosed with motorized screens',
  },
  {
    type: 'image' as const,
    src: images.systems.shades.ohareHero,
    alt: 'EDG Progressive Screens motorized insect screen on a wide Bartlett opening',
  },
];

const specs = [
  { label: 'Featured Partner', value: 'MagnaTrack by Progressive Screens' },
  { label: 'Core Category', value: 'Motorized patio screens' },
  { label: 'Track Strategy', value: 'Magnetic self-tensioning' },
  { label: 'Best Fit', value: 'Patios, pergolas, lanais, garages' },
];

const progressiveFacts = [
  {
    title: 'Patented MagnaTrack system',
    description:
      'Progressive describes MagnaTrack as a patented, self-tensioning magnetic track system that uses neodymium magnets with a Keder interlock.',
  },
  {
    title: 'Retrofit or recessed planning',
    description:
      'The system can be planned for new construction as a recessed screen or retrofitted into existing residential and commercial openings when the structure allows it.',
  },
  {
    title: 'Residential and commercial use',
    description:
      'Progressive publishes applications for patios, lanais, gazebos, garages, windows, and commercial screen openings.',
  },
  {
    title: 'Fabric and screen categories',
    description:
      'Published options include insect mesh, solar screen fabrics, vinyl screens, and Defender hurricane screens as a separate storm-protection category.',
  },
  {
    title: 'Custom sizing with limits',
    description:
      'Progressive publishes custom screen sizing up to 30 feet wide, with height and application limits that must be verified per project.',
  },
  {
    title: 'Component-level warranty',
    description:
      'Progressive publishes different warranty terms for aluminum, screen fabric, motors, remotes, and vinyl, so the exact coverage should be confirmed with the selected system.',
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: 'Featured premium screen partner',
    description:
      'EDG stays system-agnostic, but MagnaTrack by Progressive Screens is our featured premium option when the opening calls for a track-guided motorized screen with stronger day-to-day reliability.',
  },
  {
    icon: Wind,
    title: 'Controlled movement under pressure',
    description:
      'The magnetic side-track approach lets the screen react to wind pressure and then re-tension, which helps avoid the jams and hang-ups associated with many fixed-track or zipper-style systems.',
  },
  {
    icon: Bug,
    title: 'Insect protection without a fixed room',
    description:
      'Motorized insect screens are strongest when the patio already has a roof, pergola, porch, or garage-style opening and needs bug control without becoming a permanent screened room.',
  },
  {
    icon: Sun,
    title: 'Solar, glare, and privacy fabrics',
    description:
      'Fabric choice changes the experience. EDG helps balance openness, view, daylight, privacy, and solar comfort around the exact orientation of the patio.',
  },
  {
    icon: Smartphone,
    title: 'Controls that match daily use',
    description:
      'Remote controls, wall switches, app control, smart-home integration, and sensors can be planned around how often the screens will be used and how exposed the opening is.',
  },
  {
    icon: ShieldCheck,
    title: 'Fit check before brand loyalty',
    description:
      'A premium screen still has to fit the opening. EDG checks structure, mounting, power, fabric, wind exposure, drainage, and service access before recommending MagnaTrack or another path.',
  },
];

const screenOptions = [
  {
    name: 'Insect Screens',
    description:
      'Best when the priority is mosquitoes, flies, gnats, and everyday airflow through a porch, patio, or garage opening.',
  },
  {
    name: 'Solar Screens',
    description:
      'Best when glare, low sun, privacy, and heat comfort are more important than maximum airflow or full transparency.',
  },
  {
    name: 'Vinyl Screens',
    description:
      'Best for wind and seasonal comfort goals where visibility matters, but they should be planned around condensation, rolling behavior, and care.',
  },
  {
    name: 'Defender Hurricane Screens',
    description:
      'A separate Progressive storm-protection category. EDG only treats it as hurricane protection when the specified system and approval path support that use.',
  },
];

const screenComparisons = [
  {
    option: 'MagnaTrack motorized screen',
    bestFor:
      'Custom openings where bugs, sun, privacy, and everyday wind comfort matter, but the space should still open fully.',
    tradeoff:
      'Needs structure, aligned side tracks, power, and room for the housing; it is a comfort screen unless a separately specified storm-rated product is used.',
  },
  {
    option: 'Basic drop or fixed-track screen',
    bestFor:
      'Sheltered openings where a simpler retractable screen can meet the main insect or shade need.',
    tradeoff:
      'The track design may be less forgiving when fabric moves under pressure, so exposure and operating expectations matter.',
  },
  {
    option: 'Fixed screened room',
    bestFor:
      'Spaces that should stay enclosed for insects without needing a fully open view or passage.',
    tradeoff:
      'Always present; it does not retract when the weather is comfortable or the patio should feel open.',
  },
  {
    option: 'Retractable glass enclosure',
    bestFor:
      'Patios that need more protection from wind and rain while keeping clear views and flexible panels.',
    tradeoff:
      'A different enclosure category with less airflow than mesh and a larger structural and budget commitment.',
  },
];

const fitChecks = [
  'Opening width, height, squareness, and whether the sides can carry clean tracks',
  'Headbox visibility, recessed versus outside mount, trim, and future service access',
  'Fabric openness for bugs, sun, privacy, view, airflow, and daylight into the home',
  'Power path, switch locations, remote or app control, smart-home needs, and sensors',
  'Wind exposure, normal operating habits, and whether a storm-rated system is actually required',
  'How screens should coordinate with a pergola, glass enclosure, heaters, lighting, or outdoor kitchen',
];

const applications = [
  {
    icon: Home,
    title: 'Homes',
    items: [
      'Covered patios and porches',
      'Pergola side openings',
      'Lanais and pool patios',
      'Garage and outbuilding openings',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    items: [
      'Restaurant patio enclosures',
      'Hotel terraces and pool decks',
      'Country club and event spaces',
      'Storefront and hospitality openings',
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Request a screen quote',
    description:
      'Send photos, rough opening sizes, location, and the main issue: bugs, sun, privacy, wind, or flexible enclosure comfort.',
  },
  {
    step: '02',
    title: 'Measure and specify',
    description:
      'EDG checks the structure, track path, power route, fabric choice, controls, and whether MagnaTrack is the right premium fit.',
  },
  {
    step: '03',
    title: 'Coordinate fabrication',
    description:
      'Screens are built around the opening, finish, fabric, motor, controls, and mounting details rather than pulled from a kit shelf.',
  },
  {
    step: '04',
    title: 'Install and train',
    description:
      'The final step is alignment, programming, sensor setup where used, owner training, and realistic care guidance for the selected screen type.',
  },
];

const relatedProducts = [
  {
    name: 'Screen Cost & Pricing Guide',
    description:
      'Compare installed planning ranges, example budgets, and the choices that change a motorized retractable-screen quote.',
    href: '/guides/motorized-retractable-screen-pricing',
  },
  {
    name: 'Restaurant Patio Enclosures',
    description:
      'Plan commercial screens with pergolas, glass, heat, controls, seating, and restaurant service flow.',
    href: '/commercial/restaurant-patio-enclosures',
  },
  {
    name: 'Louvered Pergolas',
    description:
      'Pair side screens with a motorized roof when the patio also needs overhead shade and rain control.',
    href: '/systems/pergolas',
  },
  {
    name: 'Glass Enclosures',
    description:
      'Compare screens against Lumon glass when wind and rain protection matter more than airflow.',
    href: '/systems/enclosures',
  },
  {
    name: 'Outdoor Room Plans',
    description:
      'See where screens belong inside a larger pergola, glass, lighting, heat, or outdoor kitchen plan.',
    href: '/outdoor-rooms',
  },
  {
    name: 'Pergola + Glass Outdoor Room',
    description:
      'Review the pilot outdoor-room plan when screens are one part of a more protected patio.',
    href: '/outdoor-rooms/pergola-glass-outdoor-room',
  },
  {
    name: "O'Hare Screen Project",
    description:
      'See EDG project media from a wide Progressive Screens motorized insect screen installation.',
    href: '/projects/ohare',
  },
];

const faqs = [
  {
    question: 'What is MagnaTrack by Progressive Screens?',
    answer:
      'MagnaTrack is Progressive Screens patented magnetic track system for motorized exterior screens. It uses neodymium magnets and a Keder interlock to help the screen stay tensioned while allowing controlled movement under pressure.',
  },
  {
    question: 'Is MagnaTrack the only screen system EDG recommends?',
    answer:
      'No. EDG stays system-agnostic. MagnaTrack by Progressive Screens is the featured premium partner for many motorized screen projects, but EDG still checks the opening, structure, fabric need, budget, and exposure before recommending a system.',
  },
  {
    question: 'Are motorized patio screens the same as hurricane protection?',
    answer:
      'No. Standard motorized insect, solar, and vinyl screens are comfort systems for bugs, sun, privacy, and everyday wind conditions. Progressive Defender hurricane screens are a separate storm-protection category, and EDG only treats a screen as hurricane protection when the specified system, approvals, and project details support that use.',
  },
  {
    question:
      'Can MagnaTrack screens be added to an existing patio or pergola?',
    answer:
      'Often, yes. Progressive publishes retrofit and new-construction applications, but EDG still needs to verify the opening size, side-track path, headbox placement, attachment surfaces, power route, and service access before calling a retrofit clean.',
  },
  {
    question: 'How much do motorized patio screens cost?',
    answer:
      'Pricing depends on opening size, screen count, fabric, housing, controls, wiring, mounting complexity, and whether the screens are part of a larger outdoor room. EDG uses the screen cost guide for planning ranges, then confirms final pricing after measurements and project details are reviewed.',
  },
  {
    question: 'Which fabric should I choose for motorized screens?',
    answer:
      'Start with the problem you want solved first. Insect mesh prioritizes bugs and airflow. Solar fabrics prioritize glare, privacy, and shade. Vinyl can help with wind and seasonal comfort. The right fabric also depends on view, daylight, color, and how exposed the opening is.',
  },
];

const serviceSchema = {
  ...generateServiceSchema({
    name: 'Motorized Screen Design and Installation',
    description:
      'Design, specification, and installation of motorized patio screens, retractable screens, insect screens, solar screens, vinyl screens, and MagnaTrack by Progressive Screens projects.',
    url: 'https://www.edgpatioshade.com/systems/shades',
    image: `https://www.edgpatioshade.com${images.brand.hero.screens}`,
  }),
  serviceType: 'Motorized patio screen design and installation',
  category: 'Motorized screens and retractable patio screens',
  brand: {
    '@type': 'Brand',
    name: 'MagnaTrack by Progressive Screens',
  },
};

const howToSchema = generateHowToSchema({
  name: 'How EDG Plans a Motorized Screen Project',
  description:
    'The planning steps EDG uses before recommending MagnaTrack by Progressive Screens or another motorized screen system.',
  step: [
    {
      name: 'Review the opening',
      text: 'Measure the width, height, side conditions, headbox location, and structure that will carry the screen system.',
    },
    {
      name: 'Choose the screen goal',
      text: 'Decide whether the main need is insects, sun, privacy, everyday wind comfort, vinyl enclosure use, or storm-rated protection.',
    },
    {
      name: 'Specify the system',
      text: 'Select the track strategy, fabric, motor, controls, finish, power route, and accessories around the actual opening.',
    },
    {
      name: 'Install and train',
      text: 'Install, align, program, test, and review operating and care expectations with the owner.',
    },
  ],
});

const faqSchema = generateFAQSchema(faqs);

export default function ShadesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-surface min-h-screen">
        <section className="flex flex-col justify-center pt-32 pb-12 lg:min-h-screen">
          <Container>
            <div className="mb-8">
              <Breadcrumb
                items={[
                  { label: 'Systems', href: '/systems' },
                  { label: 'Motorized Screens' },
                ]}
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
              <div className="order-1 flex flex-col justify-center lg:col-span-5">
                <div className="label-editorial-brand mb-6 flex items-center gap-3">
                  <div className="bg-edg-brand-dark h-px w-8" />
                  Featured MagnaTrack Partner
                </div>
                <h1 className="text-text-primary mb-8 text-5xl leading-[0.92] font-bold tracking-tighter md:text-7xl">
                  Motorized Patio <br /> Screens.
                </h1>
                <p className="text-text-secondary mb-10 max-w-md text-xl leading-relaxed">
                  Premium retractable patio screens for bugs, sun, privacy, and
                  everyday wind comfort. EDG features MagnaTrack by Progressive
                  Screens when the opening calls for a stronger track-guided
                  solution.
                </p>

                <div className="mb-12 flex flex-col gap-4">
                  <TrackedLink
                    href={screenFitGuideHref}
                    conversionName="screen_fit_budget_cta"
                    className={buttonClassName({
                      size: 'lg',
                      className: 'w-full sm:w-auto',
                    })}
                  >
                    Request a Quote
                  </TrackedLink>
                  <TrackedPhoneLink
                    href="tel:+18155810138"
                    className="hover:text-edg-brand-text flex cursor-pointer items-center gap-3 text-sm font-bold tracking-wider uppercase transition-colors"
                  >
                    <span className="h-px w-8 bg-black/20" />
                    Speak to a designer
                  </TrackedPhoneLink>
                  <Link
                    href="/guides/magnatrack-screens-cost"
                    className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                  >
                    Comparing prices? Review MagnaTrack screen costs and quote
                    drivers.
                  </Link>
                  <Link
                    href="/service-areas/chicago-il/retractable-screens"
                    className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                  >
                    Planning in Chicago? Review city patio screen options.
                  </Link>
                  <Link
                    href="/service-areas/southwest-florida/motorized-screens"
                    className="text-edg-brand-text hover:text-edg-brand text-sm font-medium transition-colors"
                  >
                    Planning a Florida lanai? See Southwest Florida motorized
                    screens.
                  </Link>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm">
                    {specs.map((spec) => (
                      <div key={spec.label} className="min-w-0">
                        <span className="text-text-muted mb-1 block text-xs tracking-wider uppercase">
                          {spec.label}
                        </span>
                        <span className="text-text-primary block leading-snug font-bold">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-2 min-w-0 lg:col-span-7">
                <ShadesGalleryClient items={galleryImages} />
              </div>
            </div>
          </Container>
        </section>

        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <div className="label-editorial-brand mb-4">System Overview</div>
              <h2 className="section-title mb-6">
                Track-Guided Screens for Outdoor Rooms That Still Need to Open
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  Motorized screens are a flexible alternative to a fixed screen
                  room. They drop when bugs, low sun, privacy, or side wind make
                  the patio uncomfortable, then retract when the space should
                  feel fully open.
                </p>
                <p>
                  EDG features{' '}
                  <strong>MagnaTrack by Progressive Screens</strong> as a
                  premium track-guided screen partner because the magnetic side
                  track is built for smoother daily operation and fewer common
                  service issues than many fixed-track or zipper-style systems.
                </p>
                <p>
                  The brand is not the starting point, though. The opening is.
                  EDG checks the structure, dimensions, fabric goal, power,
                  controls, exposure, and whether the project should use an
                  insect screen, solar screen, vinyl screen, Defender hurricane
                  screen, or another approach.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-lg border-t border-black/5">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Why MagnaTrack Belongs Here
              </div>
              <h2 className="section-title mb-4">
                A Premium Screen Partner, Not a One-Size-Fits-All Answer
              </h2>
              <p className="text-text-secondary">
                EDG recommends MagnaTrack when the system fit is right, and
                keeps the broader category centered on motorized screens, patio
                screen enclosures, outdoor screens, and insect and solar screen
                comfort.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  variant="muted"
                  padding="lg"
                  className="group"
                >
                  <IconWrapper
                    icon={feature.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  How It Operates
                </div>
                <h2 className="section-title mb-6">
                  A Motorized Roller Above, With Magnetic Tracks at the Sides
                </h2>
                <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                  <p>
                    The screen rolls into a housing above the opening. When it
                    lowers, a Keder edge travels inside an adjustable insert in
                    each side track while a weighted bottom bar helps the fabric
                    deploy smoothly and seal at the floor.
                  </p>
                  <p>
                    Progressive says the opposing neodymium magnets can separate
                    as the fabric expands under wind pressure. When that
                    pressure subsides, the magnetic pull brings the insert back
                    into position and re-tensions the screen. That movement is
                    the key difference from a permanently fixed track or
                    zipper-style edge.
                  </p>
                  <p>
                    It is still a retractable outdoor screen, not a wall. EDG
                    reviews normal operating conditions, controls, sensors, and
                    care expectations for the selected fabric and opening.
                  </p>
                </div>
              </div>
              <Card variant="default" padding="lg">
                <h3 className="mb-5 text-xl font-bold">Typical daily use</h3>
                <ol className="space-y-4">
                  {[
                    'Lower the screen with the specified wall switch, remote, app, or integration.',
                    'Use the insect, solar, privacy, or vinyl fabric for the conditions it was selected to manage.',
                    'Retract the screen when the opening should be clear or when conditions exceed the operating guidance for that system.',
                  ].map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-edg-brand-dark text-text-inverse flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-text-secondary leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="label-editorial-brand mb-4">
                  Source-Grounded Specs
                </div>
                <h2 className="section-title mb-6">
                  What Progressive Publishes About MagnaTrack
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  These are the brand facts EDG is comfortable carrying forward
                  from Progressive Screens. Final sizing, wind behavior,
                  warranty, and code questions still need the selected system
                  and project details.
                </p>
                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href="https://www.progressivescreens.com/products/magnatrack-system/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 font-bold"
                  >
                    Progressive MagnaTrack system
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.progressivescreens.com/products/colors-and-fabrics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 font-bold"
                  >
                    Progressive colors and fabrics
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {progressiveFacts.map((fact) => (
                  <Card key={fact.title} variant="default" padding="lg">
                    <h3 className="mb-3 text-lg font-bold">{fact.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {fact.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md border-t border-black/5">
          <Container>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Compare the Paths
              </div>
              <h2 className="section-title mb-4">
                MagnaTrack Screens vs. Other Patio Enclosure Options
              </h2>
              <p className="text-text-secondary">
                Choose by the conditions the opening needs to manage, not by a
                product name alone.
              </p>
            </div>
            <div className="overflow-x-auto border border-black/10 bg-white">
              <table className="w-full min-w-[720px] text-left">
                <thead className="bg-surface-dark text-text-inverse">
                  <tr>
                    <th className="p-5 text-sm tracking-wider uppercase">
                      Option
                    </th>
                    <th className="p-5 text-sm tracking-wider uppercase">
                      Best fit
                    </th>
                    <th className="p-5 text-sm tracking-wider uppercase">
                      Important tradeoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {screenComparisons.map((item) => (
                    <tr
                      key={item.option}
                      className="border-t border-black/10 align-top"
                    >
                      <th className="p-5 font-bold">{item.option}</th>
                      <td className="text-text-secondary p-5 leading-relaxed">
                        {item.bestFor}
                      </td>
                      <td className="text-text-secondary p-5 leading-relaxed">
                        {item.tradeoff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>

        <Section className="section-md border-t border-black/5">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">Screen Types</div>
                <h2 className="section-title mb-6">
                  Start With the Problem the Screen Needs to Solve
                </h2>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  The same opening can need very different screen materials. A
                  family porch near mosquitoes, a west-facing patio with glare,
                  a restaurant with seasonal wind, and a Florida
                  storm-protection conversation should not all be specified the
                  same way.
                </p>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={images.systems.shades.ohareHero}
                    alt="Progressive Screens motorized insect screen installed by EDG on a wide Bartlett opening"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                {screenOptions.map((option) => (
                  <Card key={option.name} variant="muted" padding="lg">
                    <h3 className="mb-2 text-xl font-bold">{option.name}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {option.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  Fit Check First
                </div>
                <h2 className="section-title mb-6">
                  A Better Screen Quote Starts With the Opening
                </h2>
                <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                  <p>
                    Motorized screens are custom systems. The quote changes when
                    the opening changes: width, height, side conditions, power,
                    fabric, controls, exposure, housing visibility, and whether
                    the screen is part of a pergola, glass enclosure, or outdoor
                    kitchen plan.
                  </p>
                  <p>
                    EDG uses MagnaTrack by Progressive Screens as a featured
                    premium option, but the recommendation still depends on the
                    project details. That keeps the project honest and avoids
                    making storm, wind, or enclosure claims the selected screen
                    is not designed to carry.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {fitChecks.map((item) => (
                  <Card key={item} variant="default" padding="lg">
                    <div className="flex items-start gap-3">
                      <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                      <p className="text-text-primary leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md border-t border-black/5">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">Cost Planning</div>
                <h2 className="section-title mb-6">
                  What do motorized patio screens cost?
                </h2>
                <div className="text-text-secondary space-y-5 leading-relaxed">
                  <p>
                    Screen pricing depends on opening width, height, fabric,
                    housing details, controls, wiring, and how cleanly the
                    tracks can mount to the structure. A single opening often
                    starts around $3,500 to $8,000+, while full patio, pergola,
                    and commercial packages commonly move into larger custom
                    budgets.
                  </p>
                  <p>
                    Online kit pricing rarely tells the whole story. A
                    wind-exposed roof deck, recessed housing detail, restaurant
                    patio, or Florida lanai needs a different level of planning
                    than a simple sheltered opening.
                  </p>
                </div>
              </div>
              <Card variant="muted" padding="lg">
                <DollarSign className="text-edg-brand-text mb-4 h-6 w-6" />
                <h3 className="mb-3 text-xl font-bold">
                  Compare the real cost drivers
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  See installed planning ranges, example budgets, and the
                  choices that change a motorized-screen quote.
                </p>
                <Link
                  href="/guides/motorized-retractable-screen-pricing"
                  className="text-text-primary hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  Review Screen Costs &amp; Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </Container>
        </Section>

        <Section className="section-lg border-t border-black/5">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">Applications</div>
              <h2 className="section-title mb-4">
                Where Motorized Screens Work Best
              </h2>
              <p className="text-text-secondary">
                Screens are strongest when they complete an opening that already
                wants to stay flexible.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {applications.map((application) => (
                <Card key={application.title} variant="outline" padding="lg">
                  <div className="mb-6 flex items-center gap-3">
                    <IconWrapper
                      icon={application.icon}
                      variant="brand"
                      size="md"
                    />
                    <h3 className="text-2xl font-bold">{application.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {application.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary flex items-center gap-3"
                      >
                        <Check className="text-edg-brand-text h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-lg bg-surface-muted border-t border-black/5">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">Process</div>
              <h2 className="section-title mb-4">
                From Quote Request to Daily Use
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <Card key={item.step} variant="default" padding="lg">
                  <div className="text-edg-brand/50 mb-4 text-4xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md border-t border-black/5">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  EDG Project Proof
                </div>
                <h2 className="section-title mb-6">
                  A Real Progressive Screens Install in Bartlett
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  The O&apos;Hare project shows a wide residential outbuilding
                  opening fitted with a motorized Progressive Screens Gen 4
                  insect screen. It is a practical example of how a screen can
                  add bug protection and daily-use comfort without permanently
                  closing the opening.
                </p>
                <LinkButton href="/projects/ohare" variant="secondary">
                  View O&apos;Hare Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LinkButton>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src={images.systems.shades.ohareClosed}
                  alt="Closed Progressive Screens motorized insect screen on a Bartlett garage opening"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="label-editorial-brand mb-4">
                Complete Your Space
              </div>
              <h2 className="section-title">Related Planning Pages</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <Link key={product.name} href={product.href}>
                  <Card
                    variant="default"
                    padding="lg"
                    className="group hover:border-edg-brand/30 h-full cursor-pointer transition-colors"
                  >
                    <h3 className="group-hover:text-edg-brand-dark mb-2 text-lg font-bold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-medium">
              <Link
                href="/service-areas/chicago-il/retractable-screens"
                className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
              >
                Chicago retractable screens
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-areas/algonquin-il/retractable-screens"
                className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
              >
                Algonquin motorized screens
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-areas/lake-geneva-wi/retractable-screens"
                className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
              >
                Lake Geneva outdoor screens
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-areas/southwest-florida/motorized-screens"
                className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
              >
                Southwest Florida motorized screens
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-text-secondary mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed">
              EDG installs motorized screen projects in the Chicago and
              Milwaukee region, Lake Geneva and nearby southern Wisconsin, and
              Southwest Florida. Project availability still depends on the exact
              address, opening, scope, and installation schedule.
            </p>
          </Container>
        </Section>

        <section className="bg-surface-dark text-text-inverse py-32">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Send the openings before choosing the screen.
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Share photos, rough dimensions, and what you want solved
                  first. EDG will tell you whether MagnaTrack by Progressive
                  Screens, another screen system, or a bigger outdoor-room plan
                  is the right next move.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <TrackedLink
                    href={screenFitGuideHref}
                    conversionName="screen_fit_budget_cta"
                    className={buttonClassName({ size: 'lg' })}
                  >
                    Request a Quote
                  </TrackedLink>
                  <LinkButton
                    href="/showroom"
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Visit Showroom
                  </LinkButton>
                </div>
              </div>
              <div className="border-border-inverse hidden border-l pl-16 md:block">
                <div className="text-text-inverse-muted space-y-4">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    Strong Fits
                  </h4>
                  {[
                    'Covered patios',
                    'Pergola side openings',
                    'Lanais and porches',
                    'Garage openings',
                    'Restaurant patios',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Ruler className="text-edg-brand h-4 w-4 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-lg bg-surface-muted border-t border-black/5">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">Motorized screen questions</h2>
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
        </section>
      </div>
    </>
  );
}
