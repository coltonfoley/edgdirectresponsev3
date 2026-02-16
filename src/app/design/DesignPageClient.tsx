'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Clock,
  DollarSign,
  Shield,
  Phone,
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/schema';
import { PortableText } from '@portabletext/react';

interface DesignPageProps {
  page: any;
}

export default function DesignPageClient({ page }: DesignPageProps) {
  const faqs = page?.faqs || [];
  const faqSchema = generateFAQSchema(faqs);
  
  const hero = page?.hero || {};
  const problemSection = page?.problemSection || {};
  const solutionSection = page?.solutionSection || {};
  const whatYouGet = page?.whatYouGet || {};
  const processSteps = page?.processSteps || [];
  const promiseSection = page?.promiseSection || {};
  const testimonials = page?.testimonials || [];
  const finalCta = page?.finalCta || {};

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* HERO */}
      <Section className="bg-white pt-24 pb-16 md:pt-32 dark:bg-black">
        <Container>
          <Link
            href="/"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
          </Link>
          <div className="max-w-4xl">
            {hero.badge && (
              <p className="text-edg-brand-text mb-4 text-sm font-semibold tracking-wider uppercase">
                {hero.badge}
              </p>
            )}
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              {hero.headline ? (
                <PortableText value={hero.headline} />
              ) : (
                <>
                  $40,000 outdoor projects fail every day.
                  <br />
                  <span className="text-muted-foreground">Yours doesn&apos;t have to.</span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              {hero.description || "Most homeowners start by asking \"how much?\" The smart ones start by asking \"what's possible?\" Our design-first approach has protected over 500 homeowners from expensive mistakes."}
            </p>
            <Link href={hero.ctaUrl || '/contact?type=design'}>
              <Button size="lg" className="rounded-none px-8 text-lg">
                {hero.ctaText || 'Get Your Free Design Assessment'} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {hero.footnote && (
              <p className="text-muted-foreground mt-4 text-sm">{hero.footnote}</p>
            )}
          </div>
        </Container>
      </Section>

      {/* PROBLEM SECTION */}
      {problemSection.painPoints && problemSection.painPoints.length > 0 && (
        <Section className="bg-zinc-950 py-20 text-white">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                {problemSection.title || "What happens when you skip the design phase?"}
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {problemSection.painPoints.map((item: any) => (
                  <div key={item._key} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                      {item.icon === 'DollarSign' && <DollarSign className="h-8 w-8 text-red-400" />}
                      {item.icon === 'Clock' && <Clock className="h-8 w-8 text-red-400" />}
                      {item.icon === 'XCircle' && <XCircle className="h-8 w-8 text-red-400" />}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-xl text-gray-300">
                  We&apos;ve seen it hundreds of times. Don&apos;t let it happen to you.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* SOLUTION SECTION */}
      {solutionSection.features && solutionSection.features.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  {solutionSection.title || "Our design-first approach protects your investment."}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {solutionSection.description || "Before we recommend a single product, we understand your site, your climate, your usage patterns, and your goals."}
                </p>
                <ul className="space-y-4">
                  {solutionSection.features.map((item: any) => (
                    <li key={item._key} className="flex items-start gap-4">
                      <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-edg-gray-text text-sm dark:text-gray-400">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${solutionSection.image?.url || '/images/frameless-sliding-glass-walls.jpg'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="text-xl font-medium text-white">
                    {solutionSection.image?.caption || "A custom outdoor living space with retractable glass walls in Barrington, IL"}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* WHAT YOU GET */}
      {whatYouGet.items && whatYouGet.items.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {whatYouGet.title || "What you get from a design consultation"}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              {whatYouGet.description || "This isn't a sales call. It's a planning session that gives you clarity."}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whatYouGet.items.map((item: any) => (
                <div
                  key={item._key}
                  className="rounded-2xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text text-sm dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact?type=design">
                <Button size="lg" className="rounded-none">
                  Schedule Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* PROCESS STEPS */}
      {processSteps && processSteps.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              From first call to finished project
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              A clear, predictable process. No surprises.
            </p>
            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((item: any) => (
                <div key={item._key} className="text-center">
                  <div className="bg-edg-brand text-edg-dark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text mb-2 text-sm dark:text-gray-400">{item.description}</p>
                  <p className="text-edg-brand-text dark:text-edg-brand text-xs font-bold tracking-wider uppercase">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* PROMISE SECTION */}
      {promiseSection.title && (
        <Section className="bg-edg-brand text-edg-dark py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto mb-6 h-12 w-12" />
              <h2 className="mb-4 text-3xl font-bold">{promiseSection.title}</h2>
              <p className="text-xl leading-relaxed">{promiseSection.description}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">What our clients say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((item: any) => (
                <div
                  key={item._key}
                  className="rounded-2xl bg-white p-8 dark:bg-zinc-800"
                >
                  <blockquote className="mb-6 text-lg leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    {item.location && (
                      <div className="text-edg-gray-text text-sm font-medium dark:text-gray-400">{item.location}</div>
                    )}
                    {item.project && (
                      <div className="text-edg-brand-text dark:text-edg-brand mt-1 text-sm font-bold tracking-tight uppercase">
                        {item.project}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">Common Questions</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((item: any, i: number) => (
                <div
                  key={item._key || i}
                  className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900"
                >
                  <h4 className="mb-2 text-lg font-bold">{item.question}</h4>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FINAL CTA */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {finalCta.title || "Ready to plan your four-season outdoor space?"}
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              {finalCta.description || "Start with a free 15-minute discovery call. We'll listen to your goals, answer your questions, and tell you honestly if we can help."}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={finalCta.ctaUrl || '/contact?type=design'}>
                <Button size="lg" className="rounded-none px-8 text-lg">
                  {finalCta.ctaText || 'Schedule Discovery Call'} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={finalCta.secondaryCtaUrl || 'tel:+18155810138'}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-none border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> {finalCta.secondaryCtaText || '(815) 581-0138'}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
