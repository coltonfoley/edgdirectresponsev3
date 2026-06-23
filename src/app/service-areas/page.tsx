import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Pergolas & Outdoor Living | Chicago to Milwaukee',
  description:
    'EDG Patio & Shade serves communities across the Chicago to Milwaukee corridor. Motorized pergolas, shades, and glass enclosures installed by local experts.',
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: 'Service Areas | EDG Patio & Shade',
    description:
      'Serving the greater Chicago to Milwaukee corridor. Local expertise, professional installation.',
  },
};

const serviceAreas = [
  {
    name: 'Chicago, IL',
    slug: 'chicago-il',
    description:
      'Urban roof decks, masonry patios, and tight-lot outdoor living tailored to Chicago neighborhoods.',
    region: 'Chicago',
  },
  {
    name: 'Spring Grove, IL',
    slug: 'spring-grove-il',
    description:
      'Our home base and showroom. See motorized pergolas, patio screens, and outdoor living systems before you build.',
    region: 'Showroom',
  },
  {
    name: 'Algonquin, IL',
    slug: 'algonquin-il',
    description:
      'Fox River Valley pergola planning for Old Town, Randall Road neighborhoods, permits, screens, and year-round patio comfort.',
    region: 'McHenry County',
  },
  {
    name: 'Wilmette, IL',
    slug: 'wilmette-il',
    description:
      'Historic districts to lakefront estates. Zoning-compliant outdoor living for North Shore homes.',
    region: 'North Shore',
  },
  {
    name: 'Winnetka, IL',
    slug: 'winnetka-il',
    description:
      'Estate-scale installations with architectural review board expertise for prestigious properties.',
    region: 'North Shore',
  },
  {
    name: 'Northbrook, IL',
    slug: 'northbrook-il',
    description:
      'From Techny to Northbrook Heights. Hurricane-rated systems for Cook County homes.',
    region: 'North Shore',
  },
  {
    name: 'Deerfield, IL',
    slug: 'deerfield-il',
    description:
      'Motorized patio screens and outdoor living systems for North Shore homes that need privacy, bug control, and wind protection.',
    region: 'North Shore',
  },
  {
    name: 'Lake Forest, IL',
    slug: 'lake-forest-il',
    description:
      'Permit-aware motorized pergola and outdoor room planning for lakefront homes, wooded lots, and west-side estates.',
    region: 'North Shore',
  },
  {
    name: 'Barrington, IL',
    slug: 'barrington-il',
    description:
      'Estate properties and equestrian communities. Large-span engineering for expansive patios.',
    region: 'Northwest Suburbs',
  },
  {
    name: 'Naperville, IL',
    slug: 'naperville-il',
    description:
      'Historic downtown to new developments. HOA-compliant designs for western suburbs.',
    region: 'West Suburbs',
  },
  {
    name: 'Hinsdale, IL',
    slug: 'hinsdale-il',
    description:
      'Premier estates and historic properties. Custom designs for The Lane and surrounding areas.',
    region: 'West Suburbs',
  },
  {
    name: 'Oak Brook, IL',
    slug: 'oak-brook-il',
    description:
      'Estate-style outdoor living for Oak Brook, Burr Ridge, and surrounding western suburbs.',
    region: 'West Suburbs',
  },
  {
    name: 'Lake Geneva, WI',
    slug: 'lake-geneva-wi',
    description:
      'Lakeside estates and vacation properties. Wind-engineered systems for Geneva Lake.',
    region: 'Wisconsin',
  },
  {
    name: 'Southwest Florida',
    slug: 'southwest-florida',
    description:
      'Hurricane-rated pergolas, motorized screens, and coastal outdoor living planning for Sanibel, Captiva, Naples, Marco Island, and the Gulf Coast.',
    region: 'Florida',
  },
  {
    name: 'Sanibel & Captiva, FL',
    slug: 'sanibel-outdoor-living',
    description:
      'Hurricane-rated coastal living. Salt-air resistant systems for island homes.',
    region: 'Florida',
  },
];

const priorityLocalPages = [
  {
    title: 'Southwest Florida Pergolas',
    href: '/service-areas/southwest-florida',
    description:
      'Regional planning for hurricane-rated louvered roofs and coastal outdoor rooms.',
  },
  {
    title: 'Sanibel Louvered Pergolas',
    href: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
    description:
      'Miami-Dade rated pergola guidance for Sanibel and Captiva homes.',
  },
  {
    title: 'Sanibel Lanai Replacement',
    href: '/service-areas/sanibel-outdoor-living/lanai-replacement',
    description:
      'Rebuild damaged lanais with modern systems designed for coastal code pressure.',
  },
  {
    title: 'Sanibel Permit Guide',
    href: '/service-areas/sanibel-outdoor-living/zoning-guide',
    description:
      'Permit, floodplain, product approval, and 50% rule guidance for Sanibel outdoor living projects.',
  },
  {
    title: 'Chicago Motorized Pergolas',
    href: '/service-areas/chicago-il/motorized-pergolas',
    description:
      'Installer-focused guidance for louvered roof systems in Chicago.',
  },
  {
    title: 'Algonquin Motorized Pergolas',
    href: '/service-areas/algonquin-il/motorized-pergolas',
    description:
      'Fox River Valley pergola planning for shade, rain, bugs, privacy, and permits.',
  },
  {
    title: 'Algonquin Motorized Screens',
    href: '/service-areas/algonquin-il/retractable-screens',
    description:
      'Retractable patio screen layouts for bugs, glare, privacy, wind, and pergola openings.',
  },
  {
    title: 'Chicago Retractable Screens',
    href: '/service-areas/chicago-il/retractable-screens',
    description:
      'Outdoor screen planning for city patios, roof decks, and covered spaces.',
  },
  {
    title: 'Chicago Glass Enclosures',
    href: '/service-areas/chicago-il/glass-enclosures',
    description:
      'Frameless glass walls for wind, rain, views, and year-round patio use.',
  },
  {
    title: 'Deerfield Retractable Screens',
    href: '/service-areas/deerfield-il/retractable-screens',
    description:
      'North Shore screen layouts for bugs, privacy, sun, and wind control.',
  },
  {
    title: 'Lake Forest Motorized Pergolas',
    href: '/service-areas/lake-forest-il/motorized-pergolas',
    description:
      'Permit-aware pergola planning for lakefront homes, wooded yards, and estate patios.',
  },
  {
    title: 'Lake Forest Permit Guide',
    href: '/service-areas/lake-forest-il/zoning-guide',
    description:
      'Building permit, accessory-structure, and plan-review notes for Lake Forest outdoor living projects.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32 md:pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Service Areas' }]} />
          </div>
          <div className="max-w-4xl">
            <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Local Service
              </span>
            </div>
            <h1 className="hero-title mb-6 text-white">
              Serving the <span className="text-edg-brand-dark">Chicago</span>{' '}
              to <span className="text-edg-brand-dark">Milwaukee</span> Corridor
            </h1>
            <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
              We design and install premium outdoor living systems within 60
              miles of Spring Grove, IL. Local expertise means we understand
              your climate, your municipalities, and your neighborhoods.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Local Matters */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'We Know Your Climate',
                desc: 'Midwest weather is demanding. We engineer every system for local wind loads, snow loads, and temperature swings.',
              },
              {
                title: 'We Know Your Permits',
                desc: "Every municipality is different. We've worked with building departments across the region and know what each requires.",
              },
              {
                title: "We're Here When You Need Us",
                desc: 'Local means responsive. Service calls, adjustments, and questions handled by people who are nearby.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <IconWrapper
                  icon={CheckCircle2}
                  variant="brand"
                  size="lg"
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Areas Grid */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Communities We Serve
            </div>
            <h2 className="section-title">Find Your Area</h2>
            <p className="text-text-secondary mt-4 text-lg">
              Click your community to learn about local projects,
              considerations, and how we can help. If you are inside city
              limits, start with Chicago and then drill into the product pages
              that match your project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-all duration-200"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <span className="text-edg-brand-text mb-2 block text-xs font-bold tracking-wider uppercase">
                        {area.region}
                      </span>
                      <h3 className="group-hover:text-edg-brand-text text-xl font-bold transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <ArrowRight className="text-edg-brand-dark h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-text-secondary">{area.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Priority Local Pages */}
      <Section className="section-md bg-surface border-border border-t">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Most Requested Local Pages
            </div>
            <h2 className="section-title mb-4">
              Product-specific help for high-intent local searches
            </h2>
            <p className="text-text-secondary text-lg">
              If you already know the system you are researching, these pages go
              deeper than the city overview and answer the local planning
              questions first.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {priorityLocalPages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/50 h-full transition-colors"
                >
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-lg font-bold transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Open page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title mb-6">Based in Spring Grove, IL</h2>
              <p className="text-text-secondary mb-6 text-lg">
                Our central location in Spring Grove puts us within easy reach
                of Lake County, McHenry County, the North Shore, and Southeast
                Wisconsin. We're positioned to serve the entire
                Chicago-to-Milwaukee corridor efficiently.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  'Design and installation within 60 miles',
                  'Same-day consultations often available',
                  'Responsive service and support',
                  'Local crews—not traveling subcontractors',
                  'Showroom at 1802 Holian Drive',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <IconWrapper
                      icon={CheckCircle2}
                      variant="brand"
                      size="sm"
                      className="shrink-0"
                    />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button size="lg" variant="secondary">
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-edg-dark border-border-inverse flex aspect-square items-center justify-center border">
              <div className="p-8 text-center text-white">
                <MapPin className="text-edg-brand mx-auto mb-4 h-16 w-16" />
                <p className="mb-2 text-xl font-bold">Spring Grove, IL</p>
                <p className="text-text-inverse-muted mb-2">
                  1802 Holian Drive
                </p>
                <p className="text-text-inverse-muted">
                  Serving a 60-mile radius
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Not in Our Area? */}
      <Section className="section-md bg-edg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-edg-dark mb-4 text-2xl font-bold md:text-3xl">
              Outside our service area?
            </h2>
            <p className="text-edg-dark/80 mb-6 text-lg">
              If you're beyond our 60-mile radius, we may still be able to help.
              For larger projects or special circumstances, reach out and we'll
              discuss options—including design consulting with installation by
              qualified local partners.
            </p>
            <Link href="/contact">
              <Button variant="dark">Contact Us to Discuss</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
