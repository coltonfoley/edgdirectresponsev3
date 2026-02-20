import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { ArrowLeft, Check, Wind, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Louvered Pergolas Northbrook, IL | Hurricane Rated',
  description:
    "The only pergola engineered for Northbrook's 30psf snow loads and 115mph winds. Explore our luxury louvered roof systems for 60062.",
  alternates: {
    canonical: '/service-areas/northbrook-il/motorized-pergolas',
  },
};

export default function NorthbrookPergolaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Northbrook-Engineered Motorized Pergola',
            image: `https://www.edgpatioshade.com${images.pages.guides.louveredPergolasHero}`,
            description:
              "The only pergola engineered for Northbrook's 30psf snow loads and 115mph winds. Custom designed for 60062 zoning codes.",
            brand: {
              '@type': 'Brand',
              name: 'EDG Outdoor Living',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://www.edgpatioshade.com/service-areas/northbrook-il/motorized-pergolas',
              priceCurrency: 'USD',
              price: '15000',
              itemCondition: 'https://schema.org/NewCondition',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <div className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden text-white">
          <div className="absolute inset-0 z-10 bg-black/60" />
          <img
            src={images.pages.locations.defaultHero}
            alt="Luxury Motorized Pergola in Northbrook"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-20 max-w-4xl px-6 text-center">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Northbrook, IL', href: '/service-areas/northbrook-il' },
                { label: 'Motorized Pergolas' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/northbrook-il"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Northbrook
            </Link>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              The Only "Northbrook-Ready" Pergola
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white md:text-2xl">
              Engineered to withstand 115mph winds and heavy Chicagoland snow
              loads without sacrificing elegance.
            </p>
            <Link href="/contact?source=northbrook_product">
              <Button
                size="lg"
                className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90"
              >
                Get a Design Proposal
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Northbrook Needs This */}
        <Section className="py-20">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Why Standard Pergolas Fail in 60062
                </h2>
                <p className="text-muted-foreground text-lg">
                  Northbrook isn't Florida. We get ice storms, heavy wet snow,
                  and severe thunderstorm gusts. Most "Click-and-Ship" pergolas
                  will buckle under a Northbrook winter.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                      <Wind className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">The 115mph Wind Problem</h3>
                      <p className="text-muted-foreground text-sm">
                        Standard aluminum kits are rated for 60-80mph. Our
                        system is extruded aluminum rated for 115mph+ gusts.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">The 30psf Snow Load</h3>
                      <p className="text-muted-foreground text-sm">
                        Our louvers have integrated sensors. When it snows, they
                        open automatically to let snow pass through, preventing
                        collapse.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/5 bg-zinc-100 p-8 dark:bg-zinc-800">
                <h3 className="mb-6 text-xl font-bold">
                  Designed for Northbrook Architecture
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you live in a classic Brick Georgian in Techny or a
                  modern build near the village center, we match your trim color
                  and architectural lines.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="text-edg-brand-dark h-4 w-4" />{' '}
                    <span>Custom Color Matching (RAL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-edg-brand-dark h-4 w-4" />{' '}
                    <span>Hidden Fasteners (No ugly bolts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-edg-brand-dark h-4 w-4" />{' '}
                    <span>Integrated LED Lighting</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Local Context Section */}
        <Section className="border-t border-black/5 bg-zinc-50 py-20 dark:border-white/5 dark:bg-zinc-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Built for Northbrook&apos;s Distinct Neighborhoods
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                From the stately Georgian estates in{' '}
                <strong className="text-foreground">Techny</strong> to the
                contemporary homes in <strong>Anets Woods</strong>, the
                craftsman-inspired properties in{' '}
                <strong>Greenfield Knolls</strong>, and the elegant residences
                near <strong>Shermer Commons</strong>—our pergola systems are
                designed to complement every architectural tradition found
                throughout Northbrook. Whether your home features classic
                Georgian symmetry, Tudor detailing, or clean Modern lines, we
                customize every element to harmonize with your property. Our
                proximity to Chicago means we stay current with the latest
                design trends while respecting the timeless character that makes
                Northbrook&apos;s neighborhoods so desirable.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/service-areas/northbrook-il"
                  className="text-edg-brand-dark inline-flex items-center font-medium hover:underline"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back to Northbrook
                </Link>
                <span className="text-muted-foreground hidden sm:inline">
                  |
                </span>
                <Link
                  href="/service-areas/northbrook-il/zoning-guide"
                  className="text-edg-brand-dark inline-flex items-center font-medium hover:underline"
                >
                  View Zoning Requirements →
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features & Specifications Section */}
        <Section className="py-20">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Specifications & Smart Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Wind className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 font-bold">Wind Rating</h3>
                <p className="text-muted-foreground text-sm">
                  Certified for 115mph winds—exceeds all Northbrook and
                  Cook County building requirements for outdoor structures.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 font-bold">Snow Load</h3>
                <p className="text-muted-foreground text-sm">
                  Engineered for 30psf snow loads with auto-shedding louvers
                  that open automatically during heavy snowfall.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    ↔
                  </span>
                </div>
                <h3 className="mb-2 font-bold">Beam Spans</h3>
                <p className="text-muted-foreground text-sm">
                  Up to 24-foot clear spans without interior posts—maximize
                  your usable outdoor living space.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    ⚙
                  </span>
                </div>
                <h3 className="mb-2 font-bold">Motor System</h3>
                <p className="text-muted-foreground text-sm">
                  Premium Somfy® motors or equivalent with 10-year warranty.
                  Whisper-quiet operation you can barely hear.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    📱
                  </span>
                </div>
                <h3 className="mb-2 font-bold">Smart Controls</h3>
                <p className="text-muted-foreground text-sm">
                  Remote control, smartphone app, and voice integration with
                  Alexa and Google Home. Set schedules and automation.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-zinc-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-900/30">
                  <span className="text-lg font-bold text-rose-600 dark:text-rose-400">
                    🎨
                  </span>
                </div>
                <h3 className="mb-2 font-bold">Custom Finishes</h3>
                <p className="text-muted-foreground text-sm">
                  Any RAL color available plus realistic wood-grain textures.
                  Match your home&apos;s trim, siding, or create a contrast.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="border-t border-black/5 bg-zinc-50 py-20 dark:border-white/5 dark:bg-zinc-950">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Northbrook Pergola FAQ
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-xl border border-black/5 bg-white p-6 dark:border-white/5 dark:bg-zinc-900">
                <h3 className="mb-3 text-lg font-bold">
                  Will this work with my Homeowners Association?
                </h3>
                <p className="text-muted-foreground">
                  Yes. We provide complete engineering documentation, CAD
                  drawings, and specifications that satisfy most HOA
                  requirements in Northbrook subdivisions. We&apos;ve worked
                  with numerous local HOAs and understand their concerns about
                  aesthetics and property values. Our team can present directly
                  to your HOA board if needed.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 dark:border-white/5 dark:bg-zinc-900">
                <h3 className="mb-3 text-lg font-bold">
                  Can you match my home&apos;s existing trim color?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely. Our custom powder coating process can match any
                  RAL color code or existing trim sample you provide. We also
                  offer premium wood-grain textures that mimic cedar, mahogany,
                  or oak for homes where a natural wood appearance is preferred.
                  Our color matching ensures your pergola looks like it was
                  designed as part of your home from day one.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-6 dark:border-white/5 dark:bg-zinc-900">
                <h3 className="mb-3 text-lg font-bold">
                  What happens during a power outage?
                </h3>
                <p className="text-muted-foreground">
                  Every motorized pergola includes a manual override system that
                  allows you to open or close the louvers by hand if power is
                  lost. Additionally, we offer optional battery backup systems
                  that provide weeks of normal operation during outages—perfect
                  for those summer storms that can knock out power in
                  Northbrook.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Enhanced CTA Section */}
        <Section className="py-20">
          <Container>
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-center text-white dark:from-zinc-800 dark:to-zinc-900 md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready for Your Northbrook Outdoor Living Space?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg text-zinc-200">
                We understand Northbrook&apos;s unique requirements—from the
                historic homes near the village center to new construction in
                Anets Woods. Every system is engineered for your specific site
                conditions.
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
                Get a complimentary design consultation and see how a motorized
                pergola can transform your patio into a year-round outdoor room.
              </p>
              <Link href="/contact?source=northbrook_product">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90"
                >
                  Schedule Your Design Consultation
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
