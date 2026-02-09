import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowLeft,
  TreeDeciduous,
  Droplets,
  FileCheck,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Winnetka, IL Zoning & Design Guide 2025 | EDG Outdoor Living',
  description:
    'Navigate Winnetka\'s ravine protection ordinances, impervious surface limits, and architectural review board requirements. Expert guidance for estate outdoor projects.',
  alternates: {
    canonical: '/service-areas/winnetka-il/zoning-guide',
  },
};

export default function WinnetkaZoningGuide() {
  return (
    <article className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/service-areas/winnetka-il"
                className="text-edg-brand mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Winnetka
              </Link>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Winnetka Design Guide: Building Beyond the Patio
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                Winnetka&apos;s beauty comes from strict preservation. Whether you
                are on the lake, near a ravine, or in a historic district, your
                project will likely face scrutiny.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== CONTENT ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-12">
              {/* Ravine Protection */}
              <div className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                  <TreeDeciduous className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold">
                    1. Ravine Protection Ordinance
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    If your property touches a ravine, construction is heavily
                    regulated.
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      <strong>Setbacks:</strong> Structures often must be set
                      back significantly from the &quot;tableland&quot; edge of the
                      ravine.
                    </li>
                    <li>
                      <strong>Drainage:</strong> You cannot increase runoff into
                      the ravine. Our louvered systems with integrated gutters
                      can be piped into stormwater management systems to comply.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Impervious Surface */}
              <div className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold">
                    2. Impervious Surface Limits
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Like much of the North Shore, Winnetka limits how much of
                    your lot can be covered.
                  </p>
                  <div className="bg-edg-brand/5 border-edg-brand rounded-r-lg border-l-4 p-4">
                    <Quote className="text-edg-brand mb-2 h-4 w-4" />
                    <p className="text-muted-foreground text-sm italic">
                      &quot;A louvered roof is often the only way to get a &apos;covered&apos;
                      porch feel without triggering the same density penalties
                      as a solid roof addition.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Architectural Review */}
              <div className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="bg-edg-brand/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <FileCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold">
                    3. Architectural Review
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The Village wants to ensure new structures blend with the
                    existing home. We support your application with:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • 3D renderings matching your home&apos;s siding/brick textures
                    </li>
                    <li>• Color samples (custom powder coating)</li>
                    <li>• Detailed elevation drawings showing sightlines</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
                <p className="text-muted-foreground text-sm italic">
                  Disclaimer: This page is a general guide. EDG manages the
                  specific permit application and architectural review board
                  presentation for our clients.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-edg-dark mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                Need Help with Winnetka Zoning?
              </h2>
              <p className="text-edg-dark/80 mb-6">
                We&apos;ve navigated the architectural review board many times. Let
                us handle your permit process.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                >
                  Get Permit Assistance
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </article>
  );
}
