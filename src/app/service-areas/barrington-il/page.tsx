import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  Home,
  Wind,
  ShieldCheck,
  Umbrella,
  Trees,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barrington Outdoor Living: Estate Pergolas & Zoning Experts | EDG',
  description:
    'Custom motorized pergolas and louvered roofs designed for Barrington & Barrington Hills estates. Navigating 5-acre zoning and 50% coverage limits.',
  alternates: {
    canonical: '/service-areas/barrington-il',
  },
  openGraph: {
    title: 'Barrington Outdoor Living | Estate-Grade Design | EDG',
    description:
      'Enhance your Barrington estate with luxury outdoor living systems. Expert navigation of Village and Hills zoning codes.',
  },
};

const communities = [
  { name: 'Barrington Hills', type: 'estate' },
  { name: 'South Barrington', type: 'estate' },
  { name: 'North Barrington', type: 'estate' },
  { name: 'Lake Barrington', type: 'residential' },
  { name: 'Inverness', type: 'estate' },
  { name: 'Wynstone', type: 'gated' },
  { name: 'Deer Park', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Estate Zoning Expert',
    description:
      "We navigate strict setbacks (5' accessory separation) and impermeable coverage limits (50%) in the Village and Hills.",
    icon: ShieldCheck,
  },
  {
    title: 'Snow Load Engineered',
    description:
      'Our systems are engineered to withstand heavy Chicagoland snow loads, ensuring year-round durability for your estate.',
    icon: Wind,
  },
  {
    title: 'Architectural Harmony',
    description:
      "From Queen Anne conventions to Modernist estates, our designs integrate seamlessly with Barrington's diverse architectural styles.",
    icon: Home,
  },
  {
    title: 'The 3-Season Room',
    description:
      'Extend your outdoor season with motorized screens and heaters, perfect for chilly spring evenings and crisp autumn nights.',
    icon: Umbrella,
  },
];

export default function BarringtonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Barrington',
            description:
              'Premium motorized pergolas, exterior shades, and glass enclosures for Barrington area estates.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Barrington',
            },
            url: 'https://www.edgpatioshade.com/service-areas/barrington-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-01.jpg',
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
                  Serving Barrington & The Hills
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Barrington Estate-Grade <br className="hidden md:block" />{' '}
                Outdoor Living
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Premium, snow-load rated pergolas and motorized screens designed
                to respect Barrington's estate zoning while expanding your
                living space.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=barrington&source=growth-engine-barrington-outdoor">
                  <Button
                    size="lg"
                    className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full"
                  >
                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Value Props / Local Considerations */}
        <Section className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Designed for the Estate Lifestyle
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Building in Barrington requires a deep understanding of
                  village codes and architectural respect. Our systems are
                  designed to enhance your property without compromising its
                  character or violating coverage limits.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {localConsiderations.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black"
                    >
                      <item.icon className="text-edg-brand mb-4 h-8 w-8" />
                      <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden h-[600px] w-full overflow-hidden rounded-3xl bg-zinc-200 lg:block dark:bg-zinc-800">
                <Image
                  src="/images/pergolas/residential-black-r-blade-01.jpg"
                  alt="Luxury motorized pergola with black frame for a Barrington estate"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                {/* Note: Using a placeholder image path that exists in the system or should exist. 
                                Ideally, we'd use a Barrington specific image if available, but for now using a high-end project image.
                                I'll double check image paths later if needed. */}
              </div>
            </div>
          </Container>
        </Section>

        {/* Communities Grid */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
              Neighborhoods We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="group hover:border-edg-brand/50 flex flex-col items-center justify-center rounded-xl border border-black/5 bg-zinc-50 p-4 text-center transition-colors dark:border-white/5 dark:bg-zinc-900"
                >
                  <Home className="group-hover:text-edg-brand mb-2 h-5 w-5 text-gray-400 transition-colors" />
                  <span className="text-sm font-medium">{community.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Content Cluster Links */}
        <Section className="border-t border-zinc-200 bg-zinc-50 py-20 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-3xl font-bold">Building in Barrington</h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <Link
                href="/service-areas/barrington-il/zoning-guide"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 text-left transition-all dark:border-zinc-800 dark:bg-black"
              >
                <ShieldCheck className="text-edg-brand mb-6 h-10 w-10" />
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Barrington Zoning Guide
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Navigate the 50% impermeable coverage limit, 5-foot accessory
                  separation, and estate setback rules.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold">
                  Read the Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/service-areas/barrington-il/motorized-pergolas"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 text-left transition-all dark:border-zinc-800 dark:bg-black"
              >
                <Wind className="text-edg-brand mb-6 h-10 w-10" />
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Snow-Load Rated Pergolas
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Explore our heavy-duty louvered roof systems engineered
                  specifically for Chicagoland winters and wind.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold">
                  Explore Systems <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Enhance Your Estate?
              </h2>
              <p className="mb-8 text-lg font-medium opacity-90">
                Get a custom proposal that respects your architecture, your
                zoning, and your vision.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=barrington&source=growth-engine-barrington-outdoor">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Start Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10 rounded-full"
                  >
                    <Phone className="mr-2 h-5 w-5" /> 815-581-0138
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
