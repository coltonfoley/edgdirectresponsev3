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
  title: 'Barrington Zoning Guide: Outdoor Living & Pergola Permits | EDG',
  description:
    "Navigate Village of Barrington's 50% impermeable coverage limit and accessory structure setbacks. Estate zoning guide for Barrington Hills.",
  alternates: {
    canonical: '/service-areas/barrington-il/zoning-guide',
  },
};

export default function BarringtonZoningGuide() {
  return (
    <main className="bg-white font-sans dark:bg-zinc-950">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-zinc-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/pergolas/residential-black-r-blade-03.jpg"
            alt="Estate pergola zoning compliance"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="mb-8">
            <Link href="/service-areas/barrington-il">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Barrington
                Service Area
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="bg-edg-brand/20 border-edg-brand/30 text-edg-brand mb-6 inline-block rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
              Homeowner's Permit Guide
            </div>
            <h1 className="mb-8 text-4xl leading-tight font-bold md:text-6xl">
              Navigating Barrington's <br className="hidden md:block" />
              Zoning & Permits
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300">
              Building a luxury outdoor space in Barrington requires navigating
              complex impermeable coverage limits and strict accessory structure
              setbacks. Here is what you need to know.
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
                  The 50% "Impermeable Coverage" Limit
                </h2>
                <p>
                  In the Village of Barrington residential districts (R-1, R-2,
                  etc.), the total impervious surface on your lot cannot exceed{' '}
                  <strong>50%</strong> of the total lot area. This is a strict
                  "hard cap" that often surprises homeowners planning large
                  patios or pool decks.
                </p>
                <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <h4 className="mb-2 flex items-center gap-2 font-bold">
                    <Info className="h-4 w-4 text-blue-500" />
                    What counts towards coverage?
                  </h4>
                  <ul className="grid gap-3 text-sm text-zinc-600 sm:grid-cols-2 dark:text-zinc-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Principal House Structure
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Driveways & Walkways
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Patios & Pool Decks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-edg-brand h-4 w-4" />
                      Accessory Buildings (Sheds/Pergolas)
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>The Workaround:</strong> If you are near the limit, we
                  can utilize permeable paver systems (which may receive a
                  coverage credit) or design footprint-efficient aesthetic
                  structures that maximize utility without blowing the budget on
                  stormwater detention requirements.
                </p>
              </section>

              <section>
                <h2 className="not-prose flex items-center gap-3 text-3xl font-bold">
                  <Home className="text-edg-brand h-8 w-8" />
                  Accessory Structure Setbacks
                </h2>
                <p>
                  Whether it is a detached garage, a pool house, or a
                  freestanding pergola, placement is critical. Barrington code
                  mandates:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Separation Rule:</strong> Accessory structures must
                    be at least <strong>5 feet</strong> away from the principal
                    building.
                  </li>
                  <li>
                    <strong>Rear Yard Setbacks:</strong> Must be at least{' '}
                    <strong>5 feet</strong> from the rear lot line and{' '}
                    <strong>3 feet</strong> from the interior side lot line.
                  </li>
                  <li>
                    <strong>Front Yard Ban:</strong> Accessory structures are
                    generally prohibited in the front yard or corner side yard.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="not-prose flex items-center gap-3 text-3xl font-bold">
                  <Wind className="text-edg-brand h-8 w-8" />
                  Snow Load & Wind Engineering
                </h2>
                <p>
                  Unlike Florida's hurricane codes, Barrington's primary
                  engineering challenge is <strong>Snow Load</strong>. A
                  flat-roof pergola must be engineered to hold heavy, wet
                  Chicagoland snow without buckling.
                </p>
                <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="mb-2 font-bold">Heavy Snow Rating</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Our systems are engineered for high snow load capacities,
                      allowing louvers to remain closed or open depending on the
                      model.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="mb-2 font-bold">Estate Wind Speeds</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Open estates in Barrington Hills experience higher wind
                      shear. We anchor for maximum stability.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-edg-brand/10 border-edg-brand/20 not-prose rounded-3xl border p-8">
                <h3 className="mb-4 text-2xl font-bold">
                  Planning an Estate Project?
                </h3>
                <p className="mb-6 opacity-80">
                  Don't let zoning surprises delay your project. We handle the
                  permit drawings and engineering specs for you.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/service-areas/barrington-il/motorized-pergolas">
                    <Button className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-8 font-bold">
                      Explore Our Systems{' '}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact?area=barrington&source=guide-barrington-zoning">
                    <Button
                      variant="secondary"
                      className="border-edg-dark/20 text-edg-dark hover:bg-edg-dark/5 rounded-full px-8"
                    >
                      Get a Site Assessment
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
                  Village Resources
                </h3>
                <ul className="mb-8 space-y-4">
                  <li>
                    <a
                      href="https://www.barrington-il.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      Village of Barrington <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.barringtonhills-il.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      Village of Barrington Hills{' '}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/contact?area=barrington&source=request-zoning-calc"
                      className="hover:text-edg-brand flex items-center gap-2 text-sm text-zinc-400 transition-colors"
                    >
                      Request a Zoning Check <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-4 flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                    <p className="text-xs text-zinc-300">
                      <strong>Did you know?</strong> Accessory buildings
                      generally cannot exceed 10% of your total lot area.
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
