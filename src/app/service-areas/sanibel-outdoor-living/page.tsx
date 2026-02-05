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
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanibel Outdoor Living: Sanctuary-Approved Pergolas & Lanais | EDG',
  description:
    "Premium louvered roof systems and motorized screens designed for Sanibel Island's strict zoning and coastal climate. Hurricane-rated protection for stilt homes and lanais.",
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living',
  },
  openGraph: {
    title: 'Sanibel Outdoor Living | Sanctuary-Compliant Design | EDG',
    description:
      'Enhance your Sanibel sanctuary with Miami-Dade rated outdoor living systems. Engineered for elevated decks and coastal preservation.',
  },
};

const communities = [
  { name: 'Sanibel Island', type: 'residential' },
  { name: 'Captiva Island', type: 'residential' },
  { name: 'Wulfert', type: 'residential' },
  { name: 'The Dunes', type: 'residential' },
  { name: 'Gumbo Limbo', type: 'residential' },
  { name: 'Blind Pass', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Sanctuary Compliant',
    description:
      "We navigate Sanibel's strict impermeable coverage and vegetation codes, offering accessory structures that respect the island's conservation ethos.",
    icon: ShieldCheck,
  },
  {
    title: 'Hurricane Engineered',
    description:
      'Our systems are Miami-Dade Hurricane Rated to withstand Gulf storms, giving you peace of mind when the weather turns.',
    icon: Wind,
  },
  {
    title: 'Stilt Home Integration',
    description:
      'Lightweight aluminum construction allows for safe installation on elevated decks where heavy traditional materials might exceed load limits.',
    icon: Home,
  },
  {
    title: 'The Modern Lanai',
    description:
      'Replace fixed cages with motorized screens that vanish at the touch of a button, restoring your unobstructed view of the Gulf.',
    icon: Umbrella,
  },
];

export default function SanibelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sanibel Outdoor Living: Pergolas & Lanais',
            description:
              "Premium louvered roof systems and motorized screens designed for Sanibel Island's strict zoning and coastal climate.",
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Sanibel',
            },
            url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg',
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
                  Serving Sanibel & Captiva
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Sanctuary-Approved <br className="hidden md:block" /> Outdoor
                Living
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Premium, hurricane-rated pergolas and motorized screens designed
                to respect Sanibel&apos;s unique ecology while expanding your
                living space.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=sanibel&source=growth-engine-sanibel-outdoor">
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
                  Designed for the Island Lifestyle
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Building on Sanibel requires a deep understanding of local
                  codes and environmental respect. Our systems are designed to
                  enhance your &quot;Sanibel Stoop&quot; lifestyle without
                  compromising the sanctuary.
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
                  src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                  alt="Luxury white motorized pergola for a Sanibel coastal estate"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
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
            <h2 className="mb-12 text-3xl font-bold">Building on Sanibel</h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <Link
                href="/service-areas/sanibel-outdoor-living/zoning-guide"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 text-left transition-all dark:border-zinc-800 dark:bg-black"
              >
                <ShieldCheck className="text-edg-brand mb-6 h-10 w-10" />
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Sanibel Zoning Guide
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Everything you need to know about impermeable coverage,
                  post-Ian rebuild codes, and accessory structures.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold">
                  Read the Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 text-left transition-all dark:border-zinc-800 dark:bg-black"
              >
                <Wind className="text-edg-brand mb-6 h-10 w-10" />
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Hurricane Rated Pergolas
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Explore our Miami-Dade rated louvered roof systems engineered
                  specifically for the Gulf Coast.
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
                Ready to Upgrade Your Island Retreat?
              </h2>
              <p className="mb-8 text-lg font-medium opacity-90">
                Get a custom proposal that respects your view, your zoning, and
                your budget.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=sanibel&source=growth-engine-sanibel-outdoor">
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
