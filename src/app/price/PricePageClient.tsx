'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calculator,
  Clock,
  FileText,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { generateFAQSchema } from '@/lib/schema';
import { PortableText } from '@portabletext/react';

interface PricePageProps {
  page: any;
}

export default function PricePageClient({ page }: PricePageProps) {
  const faqs = page?.faqs || [];
  const faqSchema = generateFAQSchema(faqs);
  
  const hero = page?.hero || {};
  const whatYouGet = page?.whatYouGet || {};
  const pricingFactors = page?.pricingFactors || {};
  const servicesIncluded = page?.servicesIncluded || {};
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
                  Get a real quote.
                  <br />
                  <span className="text-muted-foreground">
                    Not a bait-and-switch estimate.
                  </span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground mb-4 max-w-2xl text-xl leading-relaxed">
              {hero.description || "We know you've been burned by contractors who quote low and invoice high. That's why we take the time to understand your project before we quote—then stand behind our number."}
            </p>
            <TrackedLink href={hero.ctaUrl || '/contact?type=price'}>
              <Button size="lg" className="rounded-full px-8 text-lg">
                {hero.ctaText || 'Request Your Quote'} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
            {hero.footnote && (
              <p className="text-muted-foreground mt-4 text-sm">{hero.footnote}</p>
            )}
          </div>
        </Container>
      </Section>

      {/* WHAT YOU'LL GET */}
      {whatYouGet.items && whatYouGet.items.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              {whatYouGet.title || "What you'll receive"}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              {whatYouGet.description || "Not a vague estimate—a detailed proposal you can actually plan around."}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {whatYouGet.items.map((item: any) => (
                <div
                  key={item._key}
                  className="rounded-2xl border border-zinc-200/50 bg-white p-8 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="bg-edg-brand/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <FileText className="text-edg-brand-text dark:text-edg-brand h-7 w-7" />
                  </div>
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

      {/* SYSTEMS OVERVIEW */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Systems we quote
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Tell us what you&apos;re interested in and we&apos;ll provide a custom
            proposal.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Shades */}
            <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/shades/shades-hero.jpg"
                  alt="Motorized exterior shades"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Motorized Shades</h3>
                <p className="text-muted-foreground text-sm">
                  Custom-fit exterior shades for heat and glare control.
                </p>
              </div>
            </div>

            {/* Pergolas */}
            <div className="border-edg-brand relative overflow-hidden rounded-2xl border-2">
              <div className="bg-edg-brand text-edg-dark absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg"
                  alt="Louvered pergola system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Louvered Pergolas</h3>
                <p className="text-muted-foreground text-sm">
                  All-weather motorized louver systems for four-season use.
                </p>
              </div>
            </div>

            {/* Enclosures */}
            <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/staging/residential-white-pergola-pool-glass-doors-03.jpg"
                  alt="Glass enclosure system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Glass Enclosures</h3>
                <p className="text-muted-foreground text-sm">
                  Panoramic sliding or folding glass systems for maximum views.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRICING FACTORS */}
      {pricingFactors.factors && pricingFactors.factors.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              {pricingFactors.title || "What affects your quote"}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              {pricingFactors.description || "Every project is unique. Here's what we consider when pricing yours."}
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingFactors.factors.map((item: any) => (
                <div key={item._key} className="text-center">
                  <Calculator className="text-edg-brand-text dark:text-edg-brand mx-auto mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text text-sm dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* SERVICES INCLUDED */}
      {servicesIncluded.items && servicesIncluded.items.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              {servicesIncluded.title || "What's typically included"}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              {servicesIncluded.description || "Every project is unique. We tailor our services to meet the specific requirements of your site and goals."}
            </p>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {servicesIncluded.items.map((item: any) => (
                <div key={item._key} className="flex items-start gap-4">
                  <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-edg-gray-text text-sm dark:text-gray-400">
                      {item.description}
                    </div>
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
              Pricing Questions
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((item: any, i: number) => (
                <div
                  key={item._key || i}
                  className="rounded-xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
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
              {finalCta.title || "Ready to get real numbers for your project?"}
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              {finalCta.description || "Tell us about your space and goals. We'll schedule a site visit and provide a detailed proposal—no obligation."}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={finalCta.ctaUrl || '/contact?type=price'}>
                <Button size="lg" className="rounded-full px-8 text-lg">
                  {finalCta.ctaText || 'Request Your Quote'} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href={finalCta.secondaryCtaUrl || 'tel:+18155810138'}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> {finalCta.secondaryCtaText || 'Call Now'}
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
