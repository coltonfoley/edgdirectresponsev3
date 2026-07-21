import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Home,
  MapPin,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title:
    'Chicago Outdoor Living Systems | Pergolas, Screens & Enclosures | EDG',
  description:
    'Custom motorized pergolas, retractable screens, and glass enclosures for Chicago homes. Built for roof decks, tight lots, and seasonal city outdoor living.',
  alternates: {
    canonical: '/service-areas/chicago-il',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Chicago Outdoor Living Systems | EDG Patio & Shade',
    description:
      'Pergolas, retractable screens, and enclosure systems for Chicago homes, roof decks, and city patios.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'chicago pergolas',
    'chicago motorized pergolas',
    'chicago retractable screens',
    'outdoor living chicago',
    'roof deck pergolas chicago',
    'city patio shade systems',
  ],
};

const localBenefits = [
  'Comfortable with Chicago permit review, condo approvals, and alley-loaded sites',
  'Designs planned around lake effect wind, snow loads, and exposed city sites',
  'System layouts that protect views while adding privacy on dense urban blocks',
  'Showroom support in Spring Grove plus local installation across the city',
];

const neighborhoods = [
  {
    title: 'Lincoln Park and Lakeview',
    description:
      'Homes near Armitage Avenue, the Southport Corridor, and the side streets east of Ashland often have compact patios or garage roof decks where every inch matters. We design pergolas and retractable screens that preserve circulation, respect neighboring sightlines, and make urban entertaining feel calm instead of crowded.',
  },
  {
    title: 'North Center and Roscoe Village',
    description:
      'Family homes around Damen Avenue, Roscoe Street, and Addison have more backyard depth, but they also deal with strong afternoon sun and close lot lines. Chicago clients here usually want shade, privacy, and lighting in one coordinated package so the patio stays useful after school pickups, cookouts, and weeknight dinners.',
  },
  {
    title: 'Bucktown and Wicker Park',
    description:
      'Properties around Milwaukee Avenue, Damen, and the residential blocks west of the six corners often call for more architectural detailing. Modern additions, rooftop decks, and masonry courtyards need systems that look intentional from the alley and the street, not like a bolt-on kit dropped into a carefully designed home.',
  },
  {
    title: 'Beverly and Mount Greenwood',
    description:
      'Further south, larger lots along Longwood Drive, Western Avenue, and the surrounding residential grid create opportunities for bigger entertaining zones. These projects still need Chicago-ready engineering, but they also benefit from integrated screens, heaters, and lighting that turn a backyard into a more finished extension of the house.',
  },
];

const solutions = [
  {
    title: 'Motorized Pergolas',
    description:
      'For homeowners who want architectural shade, rain control, and a finished outdoor room feel on a patio, terrace, or roof deck.',
    href: '/service-areas/chicago-il/motorized-pergolas',
  },
  {
    title: 'Retractable Screens',
    description:
      'For patios and pergolas that need bug control, glare reduction, privacy, and better comfort in windy city conditions.',
    href: '/service-areas/chicago-il/retractable-screens',
  },
  {
    title: 'Glass Enclosures',
    description:
      'For weather-protected spaces where you want to keep views and daylight while shielding a city terrace or outdoor room from wind and rain.',
    href: '/service-areas/chicago-il/glass-enclosures',
  },
];

const expertise = [
  {
    icon: FileText,
    title: 'Permit-Ready Documentation',
    description:
      'Chicago projects often move slower because the paperwork has to be right the first time. We help clients assemble the drawings, engineering, and product information that keep reviews moving instead of bouncing between revisions.',
  },
  {
    icon: Wind,
    title: 'Urban Climate Engineering',
    description:
      'Open roof decks, corner lots, and exposed backyards all feel the weather differently. We specify systems around wind exposure, snow load, drainage, solar orientation, and how the space will actually be used from April through November and beyond.',
  },
  {
    icon: Building2,
    title: 'City-Specific Design Experience',
    description:
      'Chicago outdoor living is not the same as suburban outdoor living. Tight setbacks, masonry surfaces, garage roofs, and close neighbors all shape the design, so we start with layout and usability before we ever get to finish colors and accessories.',
  },
];

const faqs = [
  {
    question:
      'Do Chicago homeowners usually need permits for pergolas or retractable screens?',
    answer:
      'Yes, most permanent outdoor structures and many covered roof deck upgrades trigger permit review in Chicago. The exact path depends on the structure, attachment method, and whether you are working on a ground-level patio, rooftop deck, or multifamily property. We guide clients through the right documentation early so the project does not stall once drawings are submitted.',
  },
  {
    question:
      'Can these systems work on small city lots and garage roof decks?',
    answer:
      'Absolutely. In Chicago, the strongest projects are often the tightest ones. We regularly design around parapet walls, detached garages, masonry patios, and limited access routes. The key is selecting the right span, post layout, drainage strategy, and privacy approach before fabrication begins.',
  },
  {
    question: 'How do motorized systems handle Chicago weather?',
    answer:
      'The systems we specify are built for Midwest conditions, including high winds, heavy rain, and winter snow exposure. Pergolas can be configured with wind and rain sensors, while retractable screens help tame glare, breeze, and bugs during the main outdoor season. We also account for how a space sheds water and snow in dense neighborhoods where drainage mistakes become visible fast.',
  },
  {
    question: 'What is the typical timeline for a Chicago project?',
    answer:
      'A straightforward residential project often takes several weeks for design, engineering, and manufacturing, then a shorter installation window once materials arrive. Permit timing varies by project type and jurisdictional review, so we set expectations early and build the schedule around the real approval path instead of guessing.',
  },
];

export default function ChicagoServiceAreaPage() {
  const heroContactHref = buildContactHref({
    type: 'consultation',
    product: 'multiple',
    location: 'Chicago, IL',
    source: 'chicago_hub_hero',
  });
  const bottomContactHref = buildContactHref({
    type: 'fit-review',
    product: 'multiple',
    location: 'Chicago, IL',
    source: 'chicago_hub_bottom',
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outdoor Living Design & Installation - Chicago, IL',
    description:
      'Custom motorized pergolas, retractable screens, and enclosure systems for Chicago homes and roof decks.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chicago',
    },
    url: 'https://www.edgpatioshade.com/service-areas/chicago-il',
    image: `https://www.edgpatioshade.com${images.projects.carmines.hero}`,
  };

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.projects.carmines.hero}
            alt="Chicago hospitality pergola project with skyline-adjacent urban setting"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Chicago, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Chicago, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Chicago Outdoor Living That Works{' '}
                <span className="text-edg-brand block">Block by Block</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We design motorized pergolas, retractable screens, and enclosure
                systems for city patios, roof decks, and backyard spaces that
                need real weather performance without sacrificing architecture.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg" className="px-8 text-lg">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/commercial/chicago-hospitality-outdoor-living">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Commercial Chicago Projects
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit) => (
                <span
                  key={benefit}
                  className="text-text-inverse-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                  {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <div className="label-editorial-brand mb-4">
                  Why Chicago Is Different
                </div>
                <h2 className="section-title mb-6">
                  The city asks more from an outdoor system than the suburbs do.
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Chicago homeowners are usually solving three problems at once:
                  exposure to real weather, limited usable square footage, and
                  the need to make a finished outdoor space feel intentional in
                  a dense neighborhood. A pergola or screen package that works
                  on a large suburban lawn can feel clumsy on a masonry patio in
                  Lakeview or a garage roof deck in Bucktown.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  That is why our approach starts with layout, drainage, and
                  structure. We look at how sun moves through the lot, where
                  neighbors overlook the space, how wind wraps around the
                  building, and whether the project needs to keep a sightline
                  open from the kitchen, family room, or rooftop lounge. From
                  there, we build the right combination of pergola, screen, and
                  enclosure components for the way your home actually lives.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.pages.serviceAreas.chicagoScreenExterior}
                  alt="Chicago retractable screen installation on a commercial facade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Neighborhood Fit</div>
              <h2 className="section-title mb-4">
                Built for the way Chicago neighborhoods live
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg">
                We do not treat Chicago as one giant service area. The lot
                shapes, privacy needs, and entertaining patterns in the city
                change from one neighborhood to the next, so our planning does
                too.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood) => (
                <Card key={neighborhood.title} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">
                    {neighborhood.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {neighborhood.description}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">
                Start with the Right System
              </div>
              <h2 className="section-title mb-4">
                Choose the page that matches your project
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg">
                Some Chicago projects need architectural shade. Others need bug
                control, privacy, or a stronger wind break. These pages break
                the decision down by product so you can start with the clearest
                fit.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {solutions.map((solution) => (
                <Card
                  key={solution.title}
                  variant="default"
                  padding="lg"
                  className="group"
                >
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Local Expertise</div>
              <h2 className="section-title mb-4">
                What Chicago homeowners usually need help with
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {expertise.map((item) => (
                <Card key={item.title} variant="default" padding="lg">
                  <IconWrapper
                    icon={item.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  Chicago experience should go beyond generic advice
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  A useful Chicago pergola plan accounts for access constraints,
                  drainage, parapet walls, snow exposure, and how to make an
                  outdoor system feel integrated with the building instead of
                  set on top of it. That is where good design protects both your
                  budget and the finished result.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We are strongest with homeowners who want help making those
                  decisions early. If you already know you want a pergola or
                  screens, jump to the product page. If you are still comparing
                  options, start with a consultation and we will narrow the
                  system mix based on layout, exposure, privacy, and how often
                  you plan to use the space.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  Designed for extended seasonal use
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Chicago projects only pay off when they meaningfully stretch
                  the outdoor season. That can mean a louvered roof that handles
                  sudden rain, a screen system that makes a windy patio
                  comfortable, or a layered combination that keeps a space
                  usable from the first warm weeks of spring through late fall.
                  Accessories like lighting and heat matter too, but only after
                  the structure and weather strategy are right.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The result should feel easy to use. One touch, the louvers
                  move. Another, the screens drop. The patio becomes quieter,
                  cooler, calmer, and more private without forcing you to give
                  up daylight or views. That is the standard we use when
                  planning projects inside Chicago city limits.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-lg bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">
                  Chicago outdoor living questions we hear all the time
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
            </FadeIn>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to make your Chicago patio more usable?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                Tell us whether you are planning a ground-level patio, roof
                deck, or backyard entertaining space and we will help you narrow
                the right system before you commit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={bottomContactHref}>
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <Link href="/service-areas/chicago-il/motorized-pergolas">
                  <Button variant="outline" size="lg">
                    Explore Chicago Pergolas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Popular next steps
                </h4>
                <ul className="text-text-inverse-muted space-y-4">
                  <li className="flex items-center gap-3">
                    <Home className="text-edg-brand h-4 w-4" />
                    <Link href="/service-areas/chicago-il/motorized-pergolas">
                      Motorized Pergolas in Chicago
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldCheck className="text-edg-brand h-4 w-4" />
                    <Link href="/service-areas/chicago-il/retractable-screens">
                      Retractable Screens in Chicago
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <Building2 className="text-edg-brand h-4 w-4" />
                    <Link href="/service-areas/chicago-il/glass-enclosures">
                      Glass Patio Enclosures in Chicago
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
