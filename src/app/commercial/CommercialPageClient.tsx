'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  CloudRain,
  BarChart3,
  ShieldCheck,
  Zap,
  Phone,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateFAQSchema } from '@/lib/schema';
import { PortableText } from '@portabletext/react';

interface CommercialPageProps {
  page: any;
}

export default function CommercialPageClient({ page }: CommercialPageProps) {
  const faqs = page?.faqs || [];
  const faqSchema = generateFAQSchema(faqs);
  
  const hero = page?.hero || {};
  const problemSection = page?.problemSection || {};
  const solutionSection = page?.solutionSection || {};
  const industries = page?.industries || {};
  const roiCaseStudy = page?.roiCaseStudy || {};
  const capabilities = page?.capabilities || {};
  const serviceCommitment = page?.serviceCommitment || {};
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
                  Turn your patio into a
                  <br />
                  <span className="text-muted-foreground">profit center.</span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground mb-4 max-w-2xl text-xl leading-relaxed">
              Rain and heat don&apos;t just cancel reservations—they destroy revenue.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              We build outdoor infrastructure that <strong>pays for itself in one season</strong>.
            </p>
            <TrackedLink href={hero.ctaUrl || '/contact?type=commercial'}>
              <Button size="lg" className="rounded-full px-8 text-lg">
                {hero.ctaText || 'Schedule Site Assessment'} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
          </div>
        </Container>
      </Section>

      {/* PROBLEM SECTION */}
      {problemSection.painPoints && problemSection.painPoints.length > 0 && (
        <Section className="bg-zinc-950 py-20 text-white">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                {problemSection.title || "The real cost of unprotected outdoor space"}
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {problemSection.painPoints.map((item: any) => (
                  <div key={item._key} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                      {item.icon === 'CloudRain' && <CloudRain className="h-8 w-8 text-red-400" />}
                      {item.icon === 'DollarSign' && <DollarSign className="h-8 w-8 text-red-400" />}
                      {item.icon === 'TrendingUp' && <TrendingUp className="h-8 w-8 text-red-400" />}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
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
                  {solutionSection.title || "All-weather infrastructure that prints money."}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {solutionSection.description || "Our commercial systems are engineered for high-cycle usage, extreme weather, and decades of reliable operation."}
                </p>
                <ul className="space-y-4">
                  {solutionSection.features.map((item: any) => (
                    <li key={item._key} className="flex items-start gap-4">
                      <CheckCircle2 className="text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-muted-foreground text-sm">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${solutionSection.image?.url || '/images/commercial/restaurant-shade-hero.jpg'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="text-xl font-medium text-white">
                    {solutionSection.image?.caption || "Restaurant patio in Lake Geneva, WI"}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* INDUSTRIES */}
      {industries.items && industries.items.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              {industries.title || "Industries We Serve"}
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {industries.items.map((item: any) => (
                <div
                  key={item._key}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="text-edg-brand-text dark:text-edg-brand font-bold">
                    {item.highlight}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ROI CASE STUDY */}
      {roiCaseStudy.projectName && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                {roiCaseStudy.title || "Real ROI: One Season Payback"}
              </h2>
              <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
                {roiCaseStudy.description || "Numbers from an actual commercial installation in the Chicago/Milwaukee region."}
              </p>
              <div className="bg-edg-dark rounded-3xl p-8 text-white md:p-12">
                <div className="grid items-center gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">
                      {roiCaseStudy.projectName}
                    </h3>
                    <p className="mb-6 text-gray-400">
                      {roiCaseStudy.location}
                    </p>
                    <div className="space-y-6">
                      <div>
                        <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                          Project
                        </div>
                        <div className="text-lg">
                          {roiCaseStudy.projectType}
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                          Investment
                        </div>
                        <div className="text-edg-brand text-3xl font-bold">
                          {roiCaseStudy.investment}
                        </div>
                      </div>
                      {roiCaseStudy.results && (
                        <div>
                          <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                            Results (First Season)
                          </div>
                          <ul className="space-y-2">
                            {roiCaseStudy.results.map((item: string, i: number) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="text-edg-brand h-4 w-4 shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {roiCaseStudy.testimonial && (
                    <div className="rounded-2xl bg-zinc-800 p-8">
                      <blockquote className="mb-6 text-xl leading-relaxed font-medium">
                        &ldquo;{roiCaseStudy.testimonial.quote}&rdquo;
                      </blockquote>
                      <div>
                        <div className="font-bold">{roiCaseStudy.testimonial.name}</div>
                        <div className="text-gray-400">{roiCaseStudy.testimonial.title}</div>
                      </div>
                      {roiCaseStudy.roiTime && (
                        <div className="mt-6 border-t border-white/10 pt-6">
                          <div className="text-sm text-gray-400">ROI achieved in</div>
                          <div className="text-edg-brand text-3xl font-bold">
                            {roiCaseStudy.roiTime}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CAPABILITIES */}
      {capabilities.items && capabilities.items.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              {capabilities.title || "Commercial Capabilities"}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {capabilities.items.map((item: any) => (
                <div key={item._key} className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                  {item.icon === 'BarChart3' && <BarChart3 className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  {item.icon === 'Zap' && <Zap className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* SERVICE COMMITMENT */}
      {serviceCommitment.title && (
        <Section className="bg-edg-brand text-edg-dark py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto mb-6 h-12 w-12" />
              <h2 className="mb-4 text-3xl font-bold">{serviceCommitment.title}</h2>
              <p className="text-xl leading-relaxed">{serviceCommitment.description}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">
              What Business Owners Say
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {testimonials.map((item: any) => (
                <div
                  key={item._key}
                  className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900"
                >
                  <blockquote className="mb-6 text-lg leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    {item.company && (
                      <div className="text-muted-foreground text-sm">{item.company}</div>
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
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Commercial FAQ
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((item: any, i: number) => (
                <div
                  key={item._key || i}
                  className="rounded-xl bg-white p-6 dark:bg-zinc-800"
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
              {finalCta.title || "Ready to turn your patio into a profit center?"}
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              {finalCta.description || "Schedule a free site assessment. We'll walk your space, discuss your goals, and show you what's possible—with real numbers."}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={finalCta.ctaUrl || '/contact?type=commercial'}>
                <Button size="lg" className="rounded-full px-8 text-lg">
                  {finalCta.ctaText || 'Schedule Site Assessment'} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href={finalCta.secondaryCtaUrl || 'tel:+18155810138'}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> {finalCta.secondaryCtaText || '(815) 581-0138'}
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
