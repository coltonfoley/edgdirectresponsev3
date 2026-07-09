import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Sun,
  MapPin,
  HelpCircle,
  Home,
} from 'lucide-react';
import { Metadata } from 'next';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Motorized Pergolas Naperville IL | Louvered Roof Planning | EDG',
  description:
    'Motorized louvered pergolas for Naperville homes. Local planning for Ashbury, Cress Creek, Tall Grass, downtown patios, HOA review, lighting, heaters, and smart outdoor rooms.',
  alternates: {
    canonical: '/service-areas/naperville-il/motorized-pergolas',
  },
};

const features = [
  {
    title: 'Smart Louver Control',
    description:
      'Adjust louver position from a remote, wall control, or app depending on the selected system and controls package.',
    icon: Settings,
  },
  {
    title: 'Integrated Weather Sensors',
    description:
      'Rain and wind sensor strategy can be reviewed before ordering so the system behaves clearly in everyday weather.',
    icon: Shield,
  },
  {
    title: 'Shoulder-Season Comfort',
    description:
      'Lighting, heaters, screens, and controls can extend evening and cooler-weather use when the site supports them.',
    icon: Zap,
  },
  {
    title: 'Architectural Fit',
    description:
      'Frame finish, post placement, louver direction, and accessory planning should fit the Naperville home and patio.',
    icon: Sun,
  },
];

const neighborhoods = [
  {
    name: 'Ashbury',
    description:
      'Elegant estate homes benefit from custom pergola designs that complement the sophisticated architecture while maximizing outdoor entertaining space.',
  },
  {
    name: 'Cress Creek',
    description:
      'Golf course properties enjoy panoramic views through frameless aluminum structures that frame the fairways without obstructing sightlines.',
  },
  {
    name: 'Tall Grass',
    description:
      'New construction homes integrate seamlessly with smart home automation, allowing residents to control their outdoor environment from anywhere.',
  },
  {
    name: 'Downtown Naperville',
    description:
      'Historic properties near the Riverwalk gain modern outdoor functionality while respecting the traditional character of the neighborhood.',
  },
  {
    name: 'Southeast Naperville Estates',
    description:
      'Spacious lots accommodate expansive pergola installations with room for full outdoor kitchens, fire features, and multiple seating areas.',
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a motorized pergola in Naperville?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact requirements depend on the address, attachment method, structure size, easements, HOA rules, and whether the property is in DuPage or Will County. We verify the review path during site planning.',
  },
  {
    question: 'How much does a motorized pergola cost in Naperville?',
    answer:
      'Motorized pergola installations in Naperville typically range from $45,000 to $85,000 depending on size, features, and customization options. Smaller residential systems start around $45K, while larger estates with integrated lighting, heating, and automation features can reach $85K or more. EDG provides detailed proposals after a site review.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'From deposit to completion, most motorized pergola projects take 6-10 weeks. This includes engineering review, permit acquisition, custom fabrication, and scheduling. The on-site installation typically requires 2-3 days for standard residential projects. Commercial installations or complex custom designs may require additional time.',
  },
];

const planningChecklist = [
  'Confirm whether the pergola is solving overhead sun, rain control, privacy, bugs, or a full outdoor room need.',
  'Review HOA expectations, subdivision standards, drainage, electrical routing, and existing patio conditions before finalizing the layout.',
  'Plan screens, heaters, lighting, fans, and smart controls before fabrication so the structure can support the way the family actually uses the patio.',
  'Choose louver direction, post placement, and finish color around the home style, sightlines, and late-day sun instead of only the square footage.',
];

const siteSurveyHref = buildContactHref({
  type: 'quote',
  product: 'pergola',
  location: 'Naperville, IL',
  source: 'naperville_pergola_site_survey',
});
const showroomVisitHref = buildContactHref({
  type: 'showroom',
  product: 'pergola',
  location: 'Naperville, IL',
  source: 'naperville_pergola_bottom_showroom',
});

export default function NapervilleMotorizedPergolas() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorized Pergolas in Naperville, IL',
    description:
      'Motorized louvered pergola design and installation for Naperville homes, patios, and outdoor living spaces.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Naperville',
      addressRegion: 'IL',
    },
    url: 'https://www.edgpatioshade.com/service-areas/naperville-il/motorized-pergolas',
    image: `https://www.edgpatioshade.com${images.pages.price.whitePergolaPool}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.pages.serviceAreas.napervillePergolaPool01}
              alt="Motorized pergola and poolside patio used as Naperville planning reference"
              fill
              priority
              loading="eager"
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Naperville, IL', href: '/service-areas/naperville-il' },
                { label: 'Motorized Pergolas' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/naperville-il"
              className="mb-6 inline-flex items-center text-sm text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Naperville
            </Link>
            <div className="max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Pergolas <br /> for Naperville Living
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
                Louvered roof systems planned around Naperville patios, HOA
                review, subdivision privacy, west sun, screens, lighting,
                heaters, and everyday outdoor room comfort.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/guides/pergola-system-fit-review?area=naperville&source=naperville_pergola_page">
                  <Button size="lg">
                    Get a System Fit Review{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Design in 3D <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <Section className="section-md">
          <Container>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Local Planning Priorities
              </div>
              <h2 className="section-title mb-4">
                What a Naperville pergola needs to solve
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                The strongest projects sort out comfort, controls, review path,
                accessory needs, and finish direction before the pergola is
                treated as a finished quote.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} variant="default" padding="lg">
                  <IconWrapper
                    icon={feature.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="mb-3 text-xl font-bold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Social Proof Alternative */}
        <Section className="section-md overflow-hidden bg-surface-muted">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  Why This Product Fits Naperville
                </div>
                <h2 className="section-title mb-6">
                  Local conditions matter more than a catalog pergola
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                  From the Ashbury subdivision to the heart of the Riverwalk, we
                  help plan complete, engineered systems around how the patio is
                  actually used. The recommendation should support the home,
                  subdivision expectations, comfort goals, and review path.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                  Naperville projects often start with a nice patio that still
                  fails at the edges: west sun over dinner, bugs after sunset,
                  subdivision privacy, or rain that sends everyone indoors. A
                  motorized pergola is strongest when it is planned with those
                  everyday problems in mind instead of priced as a standalone roof.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    'Permit and HOA documentation support when review is required',
                    'Powder-coated aluminum finishes selected around the home',
                    'Screens, heaters, lighting, and controls planned together',
                    'Site-specific layout for patios, pools, decks, and outdoor kitchens',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-medium"
                    >
                      <Shield className="h-5 w-5 text-edg-brand-text" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={siteSurveyHref}>
                  <Button variant="secondary" size="lg">
                    Schedule Site Survey
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface-dark">
                <Image
                  src={images.pages.serviceAreas.napervillePergolaPool01}
                  alt="Motorized pergola installation used as Naperville patio planning reference"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Local Neighborhoods Section */}
        <Section className="section-md">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <IconWrapper
                icon={MapPin}
                variant="brand"
                size="lg"
                className="mx-auto mb-6"
              />
              <h2 className="section-title mb-6">
                Naperville Neighborhood Planning Context
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-text-secondary">
                A motorized pergola should complement the character of the
                property, from modern subdivisions to historic districts and
                larger estate patios.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((neighborhood) => (
                <Card key={neighborhood.name} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold text-text-primary">
                    {neighborhood.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {neighborhood.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-text-secondary">
                Don't see your neighborhood? We serve all of{' '}
                <Link
                  href="/service-areas/naperville-il"
                  className="font-medium text-edg-brand-text hover:underline"
                >
                  Naperville and surrounding areas
                </Link>
                .
              </p>
            </div>
          </Container>
        </Section>

        {/* Planning Section */}
        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="label-editorial-brand mb-4">
                  Fit + Specification
                </div>
                <h2 className="section-title mb-6">
                  Before We Price a Naperville Pergola
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                  The same footprint can produce very different projects in
                  Naperville. A Cress Creek golf course patio, a downtown
                  historic home, and a Tall Grass backyard may all need a
                  louvered roof, but the approval path, privacy needs, wind
                  exposure, and finish selection are different.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary">
                  Our design review looks beyond size. We want to know how the
                  space is used, what makes it uncomfortable today, and which
                  features should be built into the system now so the outdoor
                  room does not need a second round of retrofits.
                </p>
              </div>
              <Card variant="dark" padding="lg">
                <h3 className="mb-6 text-2xl font-bold text-text-inverse">
                  Naperville site review checklist
                </h3>
                <ul className="space-y-4">
                  {planningChecklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Shield className="mt-1 h-5 w-5 shrink-0 text-edg-brand" />
                      <span className="text-text-inverse-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="section-md">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <IconWrapper
                  icon={HelpCircle}
                  variant="brand"
                  size="lg"
                  className="mx-auto mb-6"
                />
                <h2 className="section-title mb-4">
                  Common Questions About Motorized Pergolas in Naperville
                </h2>
                <p className="text-lg leading-relaxed text-text-secondary">
                  Everything you need to know before investing in your outdoor living space.
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="default" padding="lg">
                    <h3 className="mb-4 text-lg font-bold text-text-primary">
                      {faq.question}
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Enhanced CTA Section */}
        <section className="section-lg bg-surface-dark text-text-inverse">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <IconWrapper
                icon={Home}
                variant="dark"
                size="lg"
                className="mx-auto mb-6"
              />
              <h2 className="section-title mb-6 text-text-inverse">
                Ready to Plan Your Naperville Pergola?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-inverse-muted">
                Whether you're in a new construction home in Tall Grass or a
                historic property near the Riverwalk, we bring the same
                engineering rigor to every project. Our showroom in Spring Grove
                is just 45 minutes away—come see the systems in action before
                you decide.
              </p>
              <p className="mb-10 text-text-inverse-muted">
                Schedule a site survey and receive a detailed proposal tailored
                to your Naperville property.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/guides/pergola-system-fit-review?area=naperville&source=naperville_pergola_bottom">
                  <Button size="lg">
                    Start Your Fit Review{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={showroomVisitHref}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Schedule Showroom Visit
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
