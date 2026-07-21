import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Ruler,
  Shield,
  Wrench,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Visit Our Showroom | EDG Patio & Shade',
  description:
    'Experience our motorized pergolas and retractable screens in person at our Spring Grove, IL showroom. See the quality difference before you build.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'EDG Patio & Shade Showroom | Spring Grove, IL',
    description:
      'Touch the materials, test the motors, compare finishes, and plan the right system at the Spring Grove showroom.',
  },
  alternates: {
    canonical: '/showroom',
  },
};

const showroomVisitHref = buildContactHref({
  type: 'showroom',
  source: 'showroom_hero',
});

const bottomVisitHref = buildContactHref({
  type: 'showroom',
  source: 'showroom_bottom',
});

const directionsHref =
  'https://maps.google.com/?q=1802+Holian+Drive+Spring+Grove+IL+60081';

const contactCards = [
  {
    icon: MapPin,
    title: 'Location',
    body: '1802 Holian Drive, Spring Grove, IL 60081',
    action: 'Open in Maps',
    href: directionsHref,
  },
  {
    icon: Clock,
    title: 'Showroom Hours',
    body: 'Monday-Friday, 9:00 AM-5:00 PM. Saturday by appointment.',
    action: 'Schedule ahead',
    href: showroomVisitHref,
  },
  {
    icon: Phone,
    title: 'Call Ahead',
    body: 'A design specialist can walk you through displays, controls, finishes, and project fit.',
    action: '(815) 581-0138',
    href: 'tel:+18155810138',
  },
];

const displaySystems = [
  {
    icon: Building2,
    title: 'Louvered Pergolas',
    description:
      'Compare structure, louver motion, lighting, heat, color, and how a motorized roof changes a patio plan.',
    image: images.systems.pergolas.whiteLedStrip,
    alt: 'Louvered pergola with integrated LED lighting',
  },
  {
    icon: Shield,
    title: 'Retractable Screens',
    description:
      'See screen fabric, track details, wind retention, privacy, and insect-control options before choosing a system.',
    image: images.systems.shades.deployed,
    alt: 'Retractable screen system deployed on a covered outdoor space',
  },
  {
    icon: Wrench,
    title: 'Controls and Comfort',
    description:
      'Review heaters, lighting, remotes, finish details, and the practical pieces that make the space easier to use.',
    image: images.brand.detail.heater,
    alt: 'Outdoor comfort detail with heater integration',
  },
];

const visitUses = [
  {
    icon: Ruler,
    title: 'Compare systems before committing',
    description:
      'Use the showroom to understand size, finish, operation, and system differences before the project moves into detailed pricing.',
  },
  {
    icon: CalendarCheck,
    title: 'Bring the decision-makers',
    description:
      'Homeowners, builders, designers, and family members can all see the same materials and avoid guessing from a catalog.',
  },
  {
    icon: Check,
    title: 'Leave with a clearer plan',
    description:
      'A visit helps narrow the right system, rough scope, site questions, and next step for a homeowner or trade project.',
  },
];

export default function ShowroomPage() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-surface-dark text-text-inverse pt-28 pb-20 md:pt-32 md:pb-24">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[{ label: 'Showroom' }]}
              className="text-text-inverse-muted"
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="min-w-0 lg:col-span-5">
              <div className="text-text-inverse mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                Spring Grove, Illinois
              </div>
              <h1 className="mb-8 text-5xl leading-[0.92] font-bold tracking-tighter md:text-7xl">
                Visit the EDG showroom.
              </h1>
              <p className="text-text-inverse-muted mb-10 max-w-xl text-xl leading-relaxed">
                Operate motorized pergolas, compare screen fabrics, review
                finish details, and talk through the right system before you
                build.
              </p>

              <div className="mb-10 grid grid-cols-2 gap-4 border-y border-white/10 py-6 text-sm">
                {[
                  'Full-size displays',
                  'Finish samples',
                  'System fit guidance',
                  'Trade partner training',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="text-edg-brand mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-text-inverse font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href={showroomVisitHref}
                  conversionName="showroom_visit_click"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    Schedule a Visit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <Link href={directionsHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Directions
                  </Button>
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black">
                <Image
                  src={images.brand.hero.showroom}
                  alt="Outdoor living system with operable louvers and integrated dining area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md border-border bg-surface border-b">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map((card) => (
              <Card key={card.title} variant="default" padding="lg">
                <IconWrapper
                  icon={card.icon}
                  variant="brand"
                  size="lg"
                  className="mb-5"
                />
                <h2 className="text-text-primary mb-3 text-xl font-bold">
                  {card.title}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {card.body}
                </p>
                {card.href.startsWith('tel:') ? (
                  <TrackedPhoneLink
                    href={card.href}
                    className="text-text-primary hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
                  >
                    {card.action}
                    <ArrowRight className="h-4 w-4" />
                  </TrackedPhoneLink>
                ) : card.href.startsWith('/contact') ? (
                  <TrackedLink
                    href={card.href}
                    conversionName="showroom_visit_click"
                    className="text-text-primary hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
                  >
                    {card.action}
                    <ArrowRight className="h-4 w-4" />
                  </TrackedLink>
                ) : (
                  <Link
                    href={card.href}
                    className="text-text-primary hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
                  >
                    {card.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="label-editorial-brand mb-4">What to Compare</div>
            <h2 className="section-title mb-6">
              A Better Way to Choose Motorized Outdoor Systems
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The showroom is where EDG turns product specs into something
              practical. You can feel the materials, see how controls behave,
              and understand what belongs on your site before committing to a
              system.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {displaySystems.map((item) => (
              <Card
                key={item.title}
                variant="default"
                padding="none"
                className="overflow-hidden"
              >
                <div className="bg-surface-dark relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <IconWrapper
                    icon={item.icon}
                    variant="brand"
                    size="md"
                    className="mb-4"
                  />
                  <h3 className="text-text-primary mb-3 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md border-border bg-surface border-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                How to Use the Visit
              </div>
              <h2 className="section-title mb-6">
                For Homeowners, Builders, and Designers
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG is a system-agnostic partner, so the showroom visit is not a
                single-brand pitch. It is a way to compare real options, ask
                technical questions, and decide which route makes sense for the
                project.
              </p>
            </div>

            <div className="grid gap-4">
              {visitUses.map((item) => (
                <Card key={item.title} variant="muted" padding="lg">
                  <div className="flex gap-4">
                    <IconWrapper icon={item.icon} variant="default" size="md" />
                    <div>
                      <h3 className="text-text-primary mb-2 font-bold">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Plan a Visit
              </div>
              <h2 className="section-title mb-6">
                See the System Before You Request a Quote.
              </h2>
              <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
                Tell us what you are considering and who should attend. We will
                help make the showroom visit useful for the next pricing or
                specification step.
              </p>
            </div>
            <div className="space-y-4">
              <TrackedLink
                href={bottomVisitHref}
                conversionName="showroom_visit_click"
              >
                <Button size="lg" className="w-full">
                  Schedule Showroom Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button size="lg" variant="outline" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call EDG
                </Button>
              </TrackedPhoneLink>
              <p className="text-text-inverse-muted text-center text-sm">
                1802 Holian Drive, Spring Grove, IL 60081
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
