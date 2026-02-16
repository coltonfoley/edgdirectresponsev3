'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Clock,
  XCircle,
  FileText,
  UploadCloud,
  Users,
  Phone,
  Shield,
  Wrench,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateFAQSchema } from '@/lib/schema';
import { PortableText } from '@portabletext/react';

interface ProPageProps {
  page: any;
}

export default function ProPageClient({ page }: ProPageProps) {
  const faqs = page?.faqs || [];
  const faqSchema = generateFAQSchema(faqs);
  
  const hero = page?.hero || {};
  const problemSection = page?.problemSection || {};
  const solutionSection = page?.solutionSection || {};
  const tradeServices = page?.tradeServices || {};
  const caseStudy = page?.caseStudy || {};
  const guarantee = page?.guarantee || {};
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
                  Build faster.
                  <br />
                  <span className="text-muted-foreground">
                    Deliver better outdoor living.
                  </span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              {hero.description || "You're building a high-end home. The patio is part of the vision. But sourcing shading systems, managing specs, and coordinating install drains your time. We partner with builders to make the outdoor portion seamless."}
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href={hero.ctaUrl || '/contact?type=pro&action=plans'}>
                <Button size="lg" className="rounded-none">
                  {hero.ctaText || 'Request Quote'} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              {hero.secondaryCtaText && (
                <TrackedLink href={hero.secondaryCtaUrl || '/contact?type=pro'}>
                  <Button size="lg" variant="secondary" className="rounded-none">
                    {hero.secondaryCtaText}
                  </Button>
                </TrackedLink>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* PROBLEM SECTION */}
      {problemSection.painPoints && problemSection.painPoints.length > 0 && (
        <Section className="bg-zinc-950 py-20 text-white">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                {problemSection.title || 'The "Standard" Experience vs. The EDG Way'}
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {problemSection.painPoints.map((item: any) => (
                  <div key={item._key} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                      {item.icon === 'XCircle' && <XCircle className="h-8 w-8 text-red-400" />}
                      {item.icon === 'Clock' && <Clock className="h-8 w-8 text-red-400" />}
                      {item.icon === 'Wrench' && <Wrench className="h-8 w-8 text-red-400" />}
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
                  {solutionSection.title || "Think of us as your in-house shading team."}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {solutionSection.description || "You have enough to manage. We handle the specialized details—from measuring to the final punch list."}
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
                    backgroundImage: `url('${solutionSection.image?.url || '/images/pergolas/residential-black-r-blade-02.jpg'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="text-xl font-medium text-white">
                    {solutionSection.image?.caption || "Builder project in North Shore, completed on schedule"}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* TRADE SERVICES */}
      {tradeServices.services && tradeServices.services.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              {tradeServices.title || "Trade Services"}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {tradeServices.services.map((item: any) => (
                <div key={item._key} className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                  {item.icon === 'FileText' && <FileText className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  {item.icon === 'UploadCloud' && <UploadCloud className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  {item.icon === 'Users' && <Users className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />}
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text mb-4 dark:text-gray-400">
                    {item.description}
                  </p>
                  <Link
                    href={item.ctaUrl || '/contact?type=pro'}
                    className="text-edg-brand-text dark:text-edg-brand font-bold hover:underline"
                  >
                    {item.ctaText || 'Learn More →'}
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CASE STUDY */}
      {caseStudy.projectName && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                {caseStudy.title || "Builder Success Story"}
              </h2>
              <div className="rounded-3xl bg-zinc-50 p-8 md:p-12 dark:bg-zinc-900">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">
                      {caseStudy.projectName}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {caseStudy.description}
                    </p>
                    {caseStudy.results && (
                      <ul className="space-y-3">
                        {caseStudy.results.map((item: string, i: number) => (
                          <li
                            key={i}
                            className="text-edg-gray-text flex items-center gap-2 text-sm dark:text-gray-400"
                          >
                            <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {caseStudy.testimonial && (
                    <div>
                      <blockquote className="mb-6 text-xl leading-relaxed font-medium">
                        &ldquo;{caseStudy.testimonial.quote}&rdquo;
                      </blockquote>
                      <div>
                        <div className="font-bold">{caseStudy.testimonial.name}</div>
                        <div className="text-muted-foreground">{caseStudy.testimonial.title}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* GUARANTEE */}
      {guarantee.title && (
        <Section className="bg-edg-brand text-edg-dark py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto mb-6 h-12 w-12" />
              <h2 className="mb-4 text-3xl font-bold">{guarantee.title}</h2>
              <p className="text-xl leading-relaxed">{guarantee.description}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">
              What Builders Say
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
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
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold">Trade FAQ</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((item: any, i: number) => (
                <div
                  key={item._key || i}
                  className="rounded-xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h4 className="mb-2 text-lg font-bold">{item.question}</h4>
                  <p className="text-edg-gray-text dark:text-gray-400">
                    {item.answer}
                  </p>
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
              {finalCta.title || "Let's talk about your next project."}
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              {finalCta.description || "Request a quote for your project, or schedule a call to discuss trade partnership."}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={finalCta.ctaUrl || '/contact?type=pro&action=plans'}>
                <Button size="lg" className="rounded-none px-8 text-lg">
                  {finalCta.ctaText || 'Request Quote'}
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href={finalCta.secondaryCtaUrl || 'tel:+18155810138'}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-none border-white/30 px-8 text-lg text-white hover:bg-white/10"
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
