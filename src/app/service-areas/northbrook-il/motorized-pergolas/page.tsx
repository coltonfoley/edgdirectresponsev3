import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Check, Wind, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

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
            image:
              'https://www.edgpatioshade.com/images/pergolas/pergola-hero.jpg',
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
            src="/images/pergolas/pergola-hero.jpg"
            alt="Luxury Motorized Pergola in Northbrook"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-20 max-w-4xl px-6 text-center">
            <Link
              href="/service-areas/northbrook-il"
              className="mb-6 inline-flex items-center text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Northbrook Hub
            </Link>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              The Only "Northbrook-Ready" Pergola
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
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
                    <Check className="text-edg-brand h-4 w-4" />{' '}
                    <span>Custom Color Matching (RAL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-edg-brand h-4 w-4" />{' '}
                    <span>Hidden Fasteners (No ugly bolts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-edg-brand h-4 w-4" />{' '}
                    <span>Integrated LED Lighting</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
