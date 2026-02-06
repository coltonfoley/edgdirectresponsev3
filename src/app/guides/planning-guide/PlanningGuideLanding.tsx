'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { LeadCaptureForm } from '@/components/features/contact/LeadCaptureForm';
import {
  CheckCircle2,
  Sun,
  Thermometer,
  Shield,
  DollarSign,
  Ruler,
  FileCheck,
  BookOpen,
  ArrowRight,
  Star,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';

export default function PlanningGuideLanding() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark relative flex min-h-[90vh] items-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/pergolas/pergola-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <Container className="relative z-20 py-20">
          <Link
            href="/guides"
            className="hover:text-edg-brand mb-12 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wider uppercase">
                <BookOpen className="h-4 w-4" />
                Free Planning Guide
              </div>

              <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                The Complete Guide to <br />
                <span className="text-edg-brand">
                  Four-Season Outdoor Living
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed text-gray-300">
                Planning a pergola, shade system, or outdoor enclosure? This
                guide helps you avoid expensive mistakes and make confident
                decisions—before you talk to a single contractor.
              </p>

              <ul className="space-y-3">
                {[
                  'Understand your options (and which one fits your needs)',
                  'Get real budget ranges—no surprises',
                  'Learn what questions to ask contractors',
                  'Avoid the 7 most common planning mistakes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form + Mockup */}
            <div className="space-y-6">
              <div className="relative">
                <div className="bg-edg-brand/20 absolute -inset-4 rounded-3xl opacity-50 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 shadow-2xl">
                  <div className="from-edg-brand/20 via-edg-brand/10 border-edg-brand/30 mx-auto flex aspect-[3/4] max-w-[280px] flex-col justify-between rounded-lg border bg-gradient-to-br to-transparent p-6">
                    <div>
                      <div className="text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">
                        EDG Guide
                      </div>
                      <h3 className="text-lg leading-tight font-bold text-white">
                        Four-Season Outdoor Living
                      </h3>
                      <p className="mt-2 text-sm text-gray-400">
                        Planning Guide 2026
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="text-edg-brand h-5 w-5" />
                      <Thermometer className="text-edg-brand h-5 w-5" />
                      <Shield className="text-edg-brand h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              <LeadCaptureForm
                source="planning-guide-hero"
                ctaText="Read the Free Guide"
                redirectUrl="/guides/planning-guide/read"
                autoDownload={false}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 text-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">75+</span> projects
              delivered
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">10+</span> years experience
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-white">5.0</span> Google rating
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <Section className="bg-white py-24 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground text-lg">
              This isn't fluff. It's the same information we share with clients
              who invest $30k–$150k+ in outdoor living systems.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: DollarSign,
                title: 'Know Real Costs',
                description:
                  "Budget ranges for every system type so you're never caught off guard.",
              },
              {
                icon: Ruler,
                title: 'Site Assessment Guide',
                description:
                  'A checklist for evaluating your space before getting quotes.',
              },
              {
                icon: Shield,
                title: 'Avoid Costly Mistakes',
                description:
                  'Learn the 7 pitfalls that derail outdoor living projects.',
              },
              {
                icon: FileCheck,
                title: 'Ask the Right Questions',
                description:
                  'What to ask contractors to ensure you get quality work.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="bg-edg-brand/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <benefit.icon className="text-edg-brand-text dark:text-edg-brand h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
                <p className="text-edg-gray-text text-sm dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
