import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  // IconName, // Replace with actual icon from lucide-react
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════
export const metadata: Metadata = {
  title: 'Page Title | EDG',
  description: 'Page description for SEO.',
  alternates: {
    canonical: '/commercial/page-slug',
  },
  openGraph: {
    title: 'Page Title | EDG Commercial',
    description: 'Page description.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'Question one?',
    answer: 'Answer one.',
  },
  {
    question: 'Question two?',
    answer: 'Answer two.',
  },
  {
    question: 'Question three?',
    answer: 'Answer three.',
  },
  {
    question: 'Question four?',
    answer: 'Answer four.',
  },
];

const keyFeatures = [
  {
    icon: ArrowRight, // Replace with actual icon from lucide-react
    title: 'Feature One',
    description: 'Description of feature one.',
  },
  {
    icon: ArrowRight, // Replace with actual icon from lucide-react
    title: 'Feature Two',
    description: 'Description of feature two.',
  },
  {
    icon: ArrowRight, // Replace with actual icon from lucide-react
    title: 'Feature Three',
    description: 'Description of feature three.',
  },
  {
    icon: ArrowRight, // Replace with actual icon from lucide-react
    title: 'Feature Four',
    description: 'Description of feature four.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Name',
  description: 'Service description.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function CommercialSubPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Content */}
        <Container className="relative z-10">
          {/* Breadcrumb - Left Aligned */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Commercial', href: '/commercial' },
                { label: 'Page Name' },
              ]}
              className="text-gray-400"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Category Label
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Page Headline
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Page description text goes here.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none">
                CTA Button
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white dark:bg-zinc-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Features Title
            </h2>
            <p className="text-lg text-gray-600">
              Features description text.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
                variant="outline"
                padding="lg"
                className="group"
              >
                <IconWrapper
                  icon={feature.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100 dark:bg-zinc-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i} variant="default" padding="lg">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          RELATED SOLUTIONS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-16 bg-white border-t border-gray-200 dark:border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-edg-brand-text transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">All Commercial Solutions</span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="/commercial/related-page"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Related Page <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-edg-brand py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              CTA Headline
            </h2>
            <p className="text-xl text-black/80 mb-8">
              CTA description text.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                CTA Button
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
