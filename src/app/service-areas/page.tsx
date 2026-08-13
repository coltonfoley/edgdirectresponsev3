import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { buildContactHref } from '@/lib/contact-links';
import {
  priorityLocalProductRoutes,
  serviceAreaHubRoutes,
} from '@/lib/site-routes';

export const metadata: Metadata = {
  title: 'Service Areas | Pergolas & Screens | EDG Patio & Shade',
  description:
    'EDG Patio & Shade serves Midwest communities and select Southwest Florida projects with motorized pergolas, motorized screens, and glass enclosures.',
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Service Areas | EDG Patio & Shade',
    description:
      'Serving the greater Chicago to Milwaukee corridor. Local expertise, professional installation.',
  },
};

const serviceAreas = serviceAreaHubRoutes
  .filter((route) => route.href !== '/service-areas')
  .map((route) => ({
    name: route.label,
    href: route.href,
    description: route.desc ?? 'Local outdoor living planning from EDG.',
    region: route.region ?? 'Local Service',
  }));

const priorityLocalPages = priorityLocalProductRoutes.map((route) => ({
  title: route.label,
  href: route.href,
  description: route.desc ?? 'Product-specific local project planning.',
}));

const consultationHref = buildContactHref({
  type: 'consultation',
  source: 'service_areas_hub',
});

const outsideServiceAreaHref = buildContactHref({
  type: 'consultation',
  source: 'service_areas_outside_area',
});

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32 md:pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Service Areas' }]} />
          </div>
          <div className="max-w-4xl">
            <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand mb-6 inline-flex items-center gap-2 border px-4 py-2">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Local Service
              </span>
            </div>
            <h1 className="hero-title mb-6 text-white">
              Serving the <span className="text-edg-brand">Midwest</span> and{' '}
              <span className="text-edg-brand">Southwest Florida</span>
            </h1>
            <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
              We design and install premium outdoor living systems across our
              core Midwest market, with focused screen and pergola planning for
              Sanibel, Captiva, and select Southwest Florida projects.
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
              limits, start with the city page that matches your address—such as{' '}
              <Link
                href="/service-areas/milwaukee-wi"
                className="text-edg-brand-text font-semibold hover:underline"
              >
                Milwaukee
              </Link>{' '}
              or Chicago—and then drill into the product pages that match your
              project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="group">
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
              Product-specific help for local project planning
            </h2>
            <p className="text-text-secondary text-lg">
              If you already know the system you are considering, start with the
              guide that matches the project and the local planning questions
              around it.
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
                <TrackedLink
                  href={consultationHref}
                  conversionName="quote_cta_click"
                  ctaPosition="service_areas_primary"
                >
                  <Button size="lg">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
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
            <TrackedLink
              href={outsideServiceAreaHref}
              conversionName="quote_cta_click"
              ctaPosition="service_areas_outside_area"
            >
              <Button variant="dark">Request a Quote</Button>
            </TrackedLink>
          </div>
        </Container>
      </Section>
    </div>
  );
}
