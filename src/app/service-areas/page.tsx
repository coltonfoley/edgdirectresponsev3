import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
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
    name: 'Sanibel & Captiva, FL',
    slug: 'sanibel-outdoor-living',
    description:
      'Hurricane-rated coastal living. Salt-air resistant systems for island homes.',
    region: 'Florida',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32 md:pb-24">
        <Container>
          <div className="max-w-4xl">
            <div className="border border-edg-brand/30 bg-edg-brand/10 px-4 py-2 text-edg-brand inline-flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Local Service
              </span>
            </div>
            <h1 className="hero-title text-white mb-6">
              Serving the <span className="text-edg-brand">Chicago</span> to{' '}
              <span className="text-edg-brand">Milwaukee</span> Corridor
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-text-inverse-muted">
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="label-editorial-brand mb-4">Communities We Serve</div>
            <h2 className="section-title">Find Your Area</h2>
            <p className="text-text-secondary mt-4 text-lg">
              Click your community to learn about local projects, considerations, and
              how we can help.
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
                  className="h-full transition-all duration-200 hover:border-edg-brand/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-edg-brand-text mb-2 block">
                        {area.region}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-edg-brand-text transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-edg-brand shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-text-secondary">{area.description}</p>
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
              <h2 className="section-title mb-6">
                Based in Spring Grove, IL
              </h2>
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
            <div className="bg-edg-dark flex aspect-square items-center justify-center border border-border-inverse">
              <div className="p-8 text-center text-white">
                <MapPin className="text-edg-brand mx-auto mb-4 h-16 w-16" />
                <p className="mb-2 text-xl font-bold">Spring Grove, IL</p>
                <p className="text-text-inverse-muted">Serving a 60-mile radius</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Not in Our Area? */}
      <Section className="section-md bg-edg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-edg-dark mb-4 md:text-3xl">
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
