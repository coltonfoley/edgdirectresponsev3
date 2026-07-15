import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  Snowflake,
  SunMedium,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Pergolas & Patio Shades in Spring Grove, IL | EDG',
  description:
    'Motorized pergolas, retractable patio screens, and glass enclosures in Spring Grove, IL. Visit the EDG showroom at 1802 Holian Drive.',
  alternates: {
    canonical: '/service-areas/spring-grove-il',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Spring Grove Outdoor Living Systems | EDG Patio & Shade',
    description:
      'Outdoor living systems designed, shown, and supported from our Spring Grove, IL showroom.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized pergolas Spring Grove IL',
    'patio shade Spring Grove IL',
    'retractable patio screens Spring Grove IL',
    'outdoor living showroom Spring Grove IL',
    'pergola installer Spring Grove IL',
  ],
};

const nearbyCommunities = [
  {
    title: 'Spring Grove and Richmond',
    description:
      'Homes near Main Street, Wilmot Road, and the Richmond border often have open yards where wind, bugs, and low evening sun decide how much the patio is actually used.',
  },
  {
    title: 'Johnsburg and McHenry',
    description:
      'Larger lots, lake-area humidity, and busy family patios make motorized screens and louvered roof systems useful for daily shade, privacy, and mosquito control.',
  },
  {
    title: 'Fox Lake and Chain O Lakes',
    description:
      'Waterfront and near-water properties need systems planned around wind exposure, drainage, views, and materials that can handle damp Midwest weather.',
  },
  {
    title: 'Antioch, Lake Villa, and Twin Lakes',
    description:
      'For homeowners north and east of the showroom, our Spring Grove location keeps design meetings, product previews, and service support close to the project.',
  },
];

const services = [
  {
    title: 'Motorized Pergolas',
    description:
      'Adjustable louvered roof systems for shade, rain control, lighting, heaters, and a more usable outdoor room.',
    href: '/systems/pergolas',
    icon: Building2,
  },
  {
    title: 'Retractable Patio Screens',
    description:
      'Motorized exterior screens for bugs, glare, privacy, and wind without permanently closing off the patio.',
    href: '/systems/shades',
    icon: Wind,
  },
  {
    title: 'Glass Enclosures',
    description:
      'Frameless glass wall systems for covered patios that need wind and rain protection while preserving the view.',
    href: '/systems/enclosures',
    icon: ShieldCheck,
  },
];

const planningFactors = [
  {
    title: 'Snow and Structure',
    description:
      'Northern Illinois projects need real snow-load planning. We match the system, posts, beams, and attachment details to the site instead of treating every patio the same.',
    icon: Snowflake,
  },
  {
    title: 'Sun, Bugs, and Wind',
    description:
      'Spring Grove yards can be open and breezy, especially near fields or water. Screens, louvers, and glass all solve different comfort problems.',
    icon: SunMedium,
  },
  {
    title: 'Permit-Ready Details',
    description:
      'Each village has its own review process. We help prepare drawings, product information, and engineering documents for the right municipality.',
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: 'Where is the EDG Patio & Shade showroom in Spring Grove?',
    answer:
      'Our showroom is at 1802 Holian Drive, Spring Grove, IL 60081. It is best to schedule ahead so a design specialist can walk you through the pergola, screen, finish, and control options.',
  },
  {
    question: 'Do you install pergolas and patio screens in Spring Grove?',
    answer:
      'Yes. Spring Grove is our home base, and we install motorized pergolas, retractable screens, glass enclosures, heating, and related outdoor living systems throughout the surrounding area.',
  },
  {
    question: 'Can I see products before choosing a system?',
    answer:
      'Yes. That is the main advantage of the Spring Grove showroom. You can operate full-size displays, compare finishes, see screen fabrics, and understand the difference between product options before committing.',
  },
  {
    question: 'Do Spring Grove projects need permits?',
    answer:
      'Many permanent outdoor structures require permit review, especially when electrical, structural attachment, or roof coverage is involved. We help gather the product and engineering details needed for review.',
  },
];

const heroContactHref = buildContactHref({
  source: 'spring_grove_service_area',
});

const showroomContactHref = buildContactHref({
  type: 'showroom',
  source: 'spring_grove_service_area',
});

const bottomContactHref = buildContactHref({
  source: 'spring_grove_service_area_bottom',
});

export default function SpringGroveServiceAreaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outdoor Living Design & Installation - Spring Grove, IL',
    description:
      'Motorized pergolas, retractable patio screens, and glass enclosures for Spring Grove, IL homes.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Spring Grove',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Illinois',
      },
    },
    url: 'https://www.edgpatioshade.com/service-areas/spring-grove-il',
    image: `https://www.edgpatioshade.com${images.brand.hero.showroom}`,
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    image: `https://www.edgpatioshade.com${images.brand.hero.showroom}`,
    telephone: '+1-815-581-0138',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Spring Grove' },
      { '@type': 'City', name: 'Richmond' },
      { '@type': 'City', name: 'Johnsburg' },
      { '@type': 'City', name: 'McHenry' },
      { '@type': 'City', name: 'Fox Lake' },
      { '@type': 'City', name: 'Antioch' },
    ],
    url: 'https://www.edgpatioshade.com/service-areas/spring-grove-il',
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[64vh] items-center overflow-hidden pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.showroom}
            alt="EDG Patio & Shade showroom serving Spring Grove Illinois"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Spring Grove, IL' },
            ]}
            className="mb-6"
          />
          <div className="max-w-4xl">
            <span className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" /> EDG Home Base: Spring Grove, IL
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Motorized Pergolas & Patio Shades in Spring Grove, IL
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-200">
              Outdoor living systems designed, shown, and supported from our
              Spring Grove showroom at 1802 Holian Drive.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={heroContactHref}>
                <Button size="lg">
                  Request a Spring Grove Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/showroom">
                <Button variant="outline" size="lg">
                  Visit the Showroom
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <div className="text-text-inverse-muted flex flex-wrap gap-6 text-sm">
            {[
              'Showroom at 1802 Holian Drive',
              'Local design and installation',
              'Pergolas, screens, and glass systems',
              'Serving nearby McHenry County and Lake County',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Local showroom advantage
              </div>
              <h2 className="section-title mb-6">
                Spring Grove homeowners can see the product before the project
                starts.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                A premium pergola or shade system is hard to judge from a
                brochure. Motorized louvers, screen tracks, lighting, heaters,
                finishes, and glass panels all feel different in person. Because
                EDG is based in Spring Grove, local homeowners can visit the
                showroom before deciding what belongs on their patio.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                That local advantage also matters after installation. If a
                project needs an adjustment, a control question, or future
                service, the team is nearby. For a small business, that is the
                difference between buying a product and having a real local
                partner.
              </p>
            </div>
            <div className="bg-surface-muted relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.whiteLedStrip}
                alt="Motorized louvered pergola with integrated lighting near Spring Grove Illinois"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">Local Services</div>
            <h2 className="section-title mb-4">
              Outdoor systems we install around Spring Grove
            </h2>
            <p className="text-text-secondary text-lg">
              The right system depends on the problem you are trying to solve:
              overhead rain and shade, bugs and privacy, wind control, or a more
              protected outdoor room.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <Card
                  variant="default"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <IconWrapper
                    icon={service.icon}
                    variant="brand"
                    size="md"
                    className="mb-5"
                  />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Nearby Communities</div>
            <h2 className="section-title mb-4">
              Planned for Spring Grove and the surrounding area
            </h2>
            <p className="text-text-secondary mx-auto max-w-3xl text-lg">
              Spring Grove sits close to McHenry County, Lake County, and the
              Wisconsin line, so local projects can vary from compact
              neighborhood patios to open lots, lake homes, and larger rural
              properties.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {nearbyCommunities.map((community) => (
              <Card key={community.title} variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{community.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {community.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">Local Planning</div>
              <h2 className="section-title mb-6">
                Built around Northern Illinois weather and permit realities
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A local outdoor living project is not just a product order. It
                has to work with snow, wind, drainage, electrical, property
                layout, and the village review process. We plan those details
                before recommending the system.
              </p>
            </div>

            <div className="grid gap-5">
              {planningFactors.map((factor) => (
                <Card key={factor.title} variant="default" padding="lg">
                  <div className="flex gap-5">
                    <IconWrapper
                      icon={factor.icon}
                      variant="brand"
                      size="md"
                      className="shrink-0"
                    />
                    <div>
                      <h3 className="mb-2 text-lg font-bold">{factor.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">Showroom Address</div>
              <h2 className="section-title mb-6">Visit EDG in Spring Grove</h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                The showroom is the best place to compare products before
                choosing a direction. You can see how motorized louvers move,
                how screen fabrics look in real light, and how glass systems
                open and stack.
              </p>
              <div className="border-edg-brand bg-surface-muted border-l-4 p-6">
                <p className="mb-2 text-xl font-bold">EDG Patio & Shade</p>
                <p className="text-text-secondary">
                  1802 Holian Drive
                  <br />
                  Spring Grove, IL 60081
                </p>
              </div>
            </div>

            <div className="bg-edg-dark p-8 text-white">
              <h3 className="mb-5 text-2xl font-bold">
                Good reasons to visit first
              </h3>
              <ul className="space-y-4">
                {[
                  'Compare pergola styles, colors, louvers, and lighting in person.',
                  'See screen tracks, mesh options, and motorized operation before buying.',
                  'Talk through your patio layout with someone who understands local jobsites.',
                  'Leave with a clearer budget range and next-step plan.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand mt-1 h-5 w-5 shrink-0" />
                    <span className="text-text-inverse-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={showroomContactHref}>
                  <Button size="lg">Schedule a Visit</Button>
                </Link>
                <Link href="https://maps.google.com/?q=1802+Holian+Drive+Spring+Grove+IL+60081">
                  <Button variant="outline" size="lg">
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">Common Questions</div>
              <h2 className="section-title">Spring Grove outdoor living FAQ</h2>
            </div>
            <div className="space-y-5">
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

      <Section className="section-md bg-edg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-edg-dark mb-4 text-2xl font-bold md:text-3xl">
              Planning a Spring Grove-area project?
            </h2>
            <p className="text-edg-dark/80 mb-8 text-lg">
              Start with photos, rough measurements, and the main problem you
              want solved. We will help you decide whether a pergola, screen
              system, glass enclosure, or showroom visit should come first.
            </p>
            <Link href={bottomContactHref}>
              <Button variant="dark" size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
