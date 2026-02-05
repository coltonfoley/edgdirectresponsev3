'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function WilmetteZoningGuide() {
  return (
    <article className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/service-areas/wilmette-il"
                className="text-edg-brand mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Wilmette
              </Link>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Building a Pergola in Wilmette: The Zoning Guide
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                Wilmette has some of the strictest zoning codes on the North
                Shore, particularly regarding "Impermeable Surface Coverage."
                Here is what you need to know before you fall in love with a
                design.
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
              {/* Challenge Section */}
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                  1. The "Impermeable Surface" Challenge
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Most lots in Wilmette have a maximum allowable impermeable
                  surface ratio (often 30-40%). If your lot is already maxed out
                  with a driveway, patio, and garage, adding a solid roof
                  structure might be prohibited.
                </p>
                <div className="bg-edg-brand/5 border-edg-brand/20 rounded-2xl border p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">
                        The Louvered Advantage
                      </h3>
                      <p className="text-muted-foreground">
                        In some interpretations, a{' '}
                        <strong>louvered pergola</strong> can be argued as a
                        "permeable" structure when open, potentially helping
                        with zoning variances. EDG has experience navigating
                        these specific conversations with the Village of
                        Wilmette.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setbacks */}
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                  2. Setback Requirements
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Detached accessory structures typically must be:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>
                      At least <strong>3 feet</strong> from side property lines.
                    </span>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>
                      At least <strong>5 feet</strong> from rear property lines.
                    </span>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
                    <span>Often cannot be in the required front yard.</span>
                  </li>
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                  3. Permit Process Timeline
                </h2>
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    Expect a 4-6 week review cycle in Wilmette.
                  </p>
                </div>
                <p className="text-muted-foreground mb-4 text-lg">We handle:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Plat of survey markup',
                    'Structural engineering stamps',
                    'HOA approval packets (if applicable)',
                    'Village permit application and meetings',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <FileText className="text-muted-foreground h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
                <p className="text-muted-foreground text-sm italic">
                  Disclaimer: Zoning codes change. This guide is for
                  informational purposes. EDG verifies all current codes during
                  our site assessment.
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
                Need Help Navigating Wilmette Zoning?
              </h2>
              <p className="text-edg-dark/80 mb-6">
                We've handled dozens of Wilmette permits. Let us manage the
                process for you.
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
