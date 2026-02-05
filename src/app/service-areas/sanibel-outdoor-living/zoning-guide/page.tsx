import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Wind,
  Home,
  FileText,
  AlertTriangle,
  Info,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanibel Outdoor Living Zoning Guide | Rebuilding Post-Ian | EDG',
  description:
    "Navigate Sanibel Island's strict impermeable coverage rules, ecological zones, and hurricane codes when building pergolas and lanais post-Hurricane Ian.",
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/zoning-guide',
  },
};

export default function SanibelZoningGuide() {
  return (
    <main className="bg-white font-sans dark:bg-zinc-950">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-zinc-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/shades/commercial-white-r-blade-screens-lake.jpg"
            alt="Coastal pergola zoning compliance"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="mb-8">
            <Link href="/service-areas/sanibel-outdoor-living">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sanibel Service
                Area
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="bg-edg-brand/20 border-edg-brand/30 text-edg-brand mb-6 inline-block rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
              Homeowner's Rebuilding Guide
            </div>
            <h1 className="mb-8 text-4xl leading-tight font-bold md:text-6xl">
              Navigating Sanibel's <br className="hidden md:block" />
              Outdoor Living Zoning
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300">
              Post-Hurricane Ian regulations are complex. This guide simplifies
              the rules for impermeable coverage, accessory structures, and
              hurricane-rated engineering on the island.
            </p>
          </div>
        </Container>
      </Section>

      {/* Content Body */}
      <Section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Main Text */}
            <div className="prose prose-zinc prose-lg dark:prose-invert max-w-none space-y-12 lg:col-span-8">
              <section>
                <h2 className="not-prose flex items-center gap-3 text-3xl font-bold">
                  <ShieldCheck className="text-edg-brand h-8 w-8" />
                  The "Impermeable Coverage" Rule
                </h2>
                <p>
                  On Sanibel, your property's "Developed Area" is strictly
                  capped based on its ecological zone. This includes everything
                  from your house and pool to your lanai and even standard
                  pavers.
                </p>
                <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <h4 className="mb-2 flex items-center gap-2 font-bold">
                    <Info className="h-4 w-4 text-blue-500" />
                    What counts as impermeable?
                  </h4>
                  <ul className="grid gap-3 text-sm text-zinc-600 sm:grid-cols-2 dark:text-zinc-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Screen Enclosures & Lanais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Concrete Pads & Decks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Stairs & Walkways
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Standard Non-Permeable Pavers
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>The Strategy:</strong> We help homeowners maximize
                  their outdoor living by utilizing lightweight,
                  high-performance systems that often have a smaller footprint
                  or can be integrated into existing structures to stay within
                  coverage limits.
                </p>
              </section>

              <section>
                <h2 className="not-prose flex items-center gap-3 text-3xl font-bold">
                  <Wind className="text-edg-brand h-8 w-8" />
                  Hurricane Engineering Post-Ian
                </h2>
                <p>
                  Rebuilding means more than just replacing. The state and city
                  have updated building height adjustments and wind force
                  requirements.
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Miami-Dade Rating:</strong> Our louvered roof
                    systems are engineered to meet or exceed Miami-Dade
                    standards—the strictest in the nation.
                  </li>
                  <li>
                    <strong>Flood Elevation:</strong> New ordinances allow for
                    taller structures to meet required flood elevations. We
                    designpergolas that respect these height adjustments without
                    looking "stacked."
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="not-prose flex items-center gap-3 text-3xl font-bold">
                  <Home className="text-edg-brand h-8 w-8" />
                  Stilt Home Integration
                </h2>
                <p>
                  Many Sanibel homes are elevated on stilts. Adding a heavy
                  traditional structure to an elevated wooden deck is risky. Our
                  aluminum systems are:
                </p>
                <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="mb-2 font-bold">Lightweight Strength</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Higher strength-to-weight ratio than wood or steel,
                      perfect for cantilevered decks.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="mb-2 font-bold">Non-Corrosive</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Powder-coated aluminum withstands the Gulf's salt spray
                      and high humidity.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-edg-brand/10 border-edg-brand/20 not-prose rounded-3xl border p-8">
                <h3 className="mb-4 text-2xl font-bold">
                  Rebuilding on Sanibel?
                </h3>
                <p className="mb-6 opacity-80">
                  Don't start your permit application until you've consulted
                  with a specialist who understands the "Sanctuary" ethos and
                  code requirements.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/service-areas/sanibel-outdoor-living/louvered-pergolas">
                    <Button className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-8 font-bold">
                      Explore Hurricane Rated Pergolas{' '}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact?area=sanibel&source=guide-sanibel-zoning">
                    <Button
                      variant="secondary"
                      className="border-edg-dark/20 text-edg-dark hover:bg-edg-dark/5 rounded-full px-8"
                    >
                      Free Site Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-4">
              <div className="sticky top-24 rounded-3xl bg-zinc-900 p-8 text-white">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <FileText className="text-edg-brand h-5 w-5" />
                  Key Resources
                </h3>
                <ul className="mb-8 space-y-4">
                  <li>
                    <a
                      href="https://www.mysanibel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      City of Sanibel Official Site{' '}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mysanibel.com/city-council/city-manager-s-office/sanibel-forward/official-maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      Sanibel Official Maps & Zones{' '}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/contact?area=sanibel&source=request-zoning-calc"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      Request a Zoning Analysis{' '}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-4 flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                    <p className="text-xs text-zinc-300">
                      <strong>50% Rule Warning:</strong> If repair costs exceed
                      50% of your home's value, the entire structure must be
                      brought to current flood codes.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}
