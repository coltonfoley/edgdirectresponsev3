import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Home,
  Building,
  TreePine,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Lake County IL Pergolas & Outdoor Living | Libertyville, Lake Forest, Gurnee',
  description:
    'Motorized pergolas, exterior shades, and glass enclosures in Lake County Illinois. Serving Libertyville, Lake Forest, Highland Park, Gurnee, Vernon Hills & more. Local experts, professional installation.',
  alternates: {
    canonical: '/service-areas/lake-county-il',
  },
  openGraph: {
    title: 'Lake County IL | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Lake County homeowners. Local expertise, professional installation.',
  },
};

const communities = [
  { name: 'Libertyville', type: 'residential' },
  { name: 'Lake Forest', type: 'residential' },
  { name: 'Highland Park', type: 'residential' },
  { name: 'Gurnee', type: 'mixed' },
  { name: 'Vernon Hills', type: 'mixed' },
  { name: 'Lincolnshire', type: 'residential' },
  { name: 'Lake Bluff', type: 'residential' },
  { name: 'Deerfield', type: 'residential' },
  { name: 'Buffalo Grove', type: 'residential' },
  { name: 'Mundelein', type: 'mixed' },
  { name: 'Wauconda', type: 'residential' },
  { name: 'Grayslake', type: 'mixed' },
  { name: 'Round Lake', type: 'residential' },
  { name: 'Antioch', type: 'residential' },
  { name: 'Fox Lake', type: 'residential' },
  { name: 'Lake Zurich', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Lake Effect Weather',
    description:
      'Properties near Lake Michigan experience different wind and moisture conditions. We factor lake proximity into every design, from wind load calculations to material selection.',
  },
  {
    title: 'Local Building Codes',
    description:
      "Communities like Lake Forest and Highland Park have specific building requirements. We're experienced with their standards and can navigate the permit process efficiently.",
  },
  {
    title: 'Wooded Lots',
    description:
      'Many Lake County properties are heavily wooded. We assess tree coverage, sun patterns, and potential conflicts before recommending systems.',
  },
  {
    title: 'Varied Lot Sizes',
    description:
      'From expansive Lake Forest estates to more modest Vernon Hills lots, we design systems that fit your property—not a one-size-fits-all approach.',
  },
];

export default function LakeCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Lake County',
            description:
              'Premium motorized pergolas, exterior shades, and glass enclosures. serving Libertyville, Lake Forest, Highland Park, and all Lake County.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Lake County',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-county-il',
            image: 'https://www.edgpatioshade.com/images/hero/pergola-hero.jpg',
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
          <Container>
            <Link
              href="/service-areas"
              className="hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
            </Link>
            <div className="max-w-4xl">
              <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <MapPin className="text-edg-brand h-4 w-4" />
                <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                  Our Home Market
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Lake County, Illinois Outdoor Living
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                From Libertyville to Lake Forest, Gurnee to Highland Park—Lake
                County is our home base. We know the neighborhoods, the building
                departments, and the weather patterns that affect how outdoor
                systems perform here.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=lake-county">
                  <Button size="lg" className="rounded-full">
                    Get a Lake County Quote{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Communities Grid */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Communities We Serve in Lake County
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              We've completed projects across Lake County. If your community
              isn't listed, we likely still serve it—just ask.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-zinc-50 p-4 dark:border-white/5 dark:bg-zinc-900"
                >
                  {community.type === 'residential' ? (
                    <Home className="text-edg-brand h-5 w-5 shrink-0" />
                  ) : (
                    <Building className="text-edg-brand h-5 w-5 shrink-0" />
                  )}
                  <span className="font-medium">{community.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Considerations */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Lake County-Specific Considerations
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Every region has its quirks. Here's what we account for when
                  designing outdoor systems in Lake County.
                </p>
                <div className="space-y-6">
                  {localConsiderations.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <CheckCircle2 className="text-edg-brand mt-1 h-6 w-6 shrink-0" />
                      <div>
                        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-edg-dark rounded-2xl p-8 text-white">
                <TreePine className="text-edg-brand mb-6 h-12 w-12" />
                <h3 className="mb-4 text-2xl font-bold">
                  Local Knowledge Matters
                </h3>
                <p className="mb-6 text-gray-300">
                  We've worked with building departments in Libertyville, Lake
                  Forest, Highland Park, Gurnee, and throughout Lake County. We
                  know what they require, what they look for, and how to get
                  approvals efficiently.
                </p>
                <p className="text-gray-300">
                  That local experience saves you time and prevents costly
                  permit delays or redesigns.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Systems for Lake County */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Popular Systems in Lake County
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              The systems Lake County homeowners choose most—each engineered for
              local conditions.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Louvered Pergolas',
                  description:
                    'The most popular choice for Lake County patios. Full weather control—sun, shade, and rain protection with the touch of a button.',
                  href: '/systems/pergolas',
                  why: 'Perfect for unpredictable Midwest weather',
                },
                {
                  name: 'Motorized Shades',
                  description:
                    'Ideal for screened porches, open patios, and pergola sides. Block sun and wind without losing your view.',
                  href: '/systems/shades',
                  why: 'Great for lake-adjacent properties with wind exposure',
                },
                {
                  name: 'Glass Enclosures',
                  description:
                    "Add protected square footage that's usable year-round. Popular for extending the season on lakefront and wooded properties.",
                  href: '/systems/enclosures',
                  why: 'Maximize your outdoor investment through all seasons',
                },
              ].map((system) => (
                <div
                  key={system.name}
                  className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/5 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-xl font-bold">{system.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {system.description}
                  </p>
                  <p className="text-edg-brand mb-6 text-sm font-medium">
                    → {system.why}
                  </p>
                  <Link href={system.href}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full rounded-lg"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Testimonial */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="mb-8 text-2xl leading-relaxed font-medium md:text-3xl">
                "EDG understood exactly what we needed for our Lake Forest
                property. They navigated the permitting process smoothly and the
                installation was flawless."
              </blockquote>
              <div>
                <div className="text-lg font-bold">Homeowner</div>
                <div className="text-muted-foreground">
                  Lake Forest, IL • Louvered Pergola
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Lake County Outdoor Space?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Schedule a free consultation. We'll visit your property, discuss
                your vision, and show you what's possible.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=lake-county">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Schedule Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10 rounded-full"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
