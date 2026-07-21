import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  ShieldCheck,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SystemFitReviewForm } from '@/components/features/pergola/SystemFitReviewForm';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Request a Pergola Quote | EDG Patio & Shade',
  description:
    'Request a quote for a motorized pergola. Name, email, phone, and interest are all EDG needs to start; project details and photos are optional.',
  alternates: {
    canonical: '/guides/pergola-system-fit-review',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Request a Pergola Quote | EDG Patio & Shade',
    description:
      'Request a quote for a motorized pergola. Project details and photos are optional.',
  },
};

const requiredInputs = [
  'Full name',
  'Email',
  'Phone',
  'What you are interested in',
];

const nextSteps = [
  {
    title: 'We learn about the project',
    description:
      'An EDG team member contacts you to understand the space, goals, and any questions you have.',
    icon: ClipboardCheck,
  },
  {
    title: 'We discuss price and options',
    description:
      'We explain the products and project conditions that affect a realistic quote.',
    icon: Ruler,
  },
  {
    title: 'We agree on the next step',
    description:
      'If the project looks like a fit, we arrange the measurements, site visit, showroom visit, or additional information needed.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Is this a quote request?',
    answer:
      'Yes. This form tells EDG that you are interested in a pergola quote. We will contact you to learn enough about the project to discuss pricing and the right next step.',
  },
  {
    question: 'Do I need photos or dimensions?',
    answer:
      'No. Photos, rough dimensions, and other project details can help, but they are optional for the initial quote request.',
  },
  {
    question: 'Will EDG recommend one manufacturer?',
    answer:
      'EDG is a dealer for proven pergola manufacturers including Brustor, Azenco, and Sundance, but the recommendation starts with the job. The manufacturer is part of the toolkit, not the strategy.',
  },
  {
    question: 'Who can request a pergola quote?',
    answer:
      'Homeowners, builders, designers, and commercial owners considering a motorized pergola or complete outdoor room can use this form.',
  },
];

export default function PergolaSystemFitReviewPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Pergola Quote Request',
    description:
      'Quote request for motorized pergola projects from EDG Patio & Shade.',
    url: 'https://www.edgpatioshade.com/guides/pergola-system-fit-review',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteLedStrip}`,
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Request a Pergola Quote' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Request a Pergola Quote' },
            ]}
            className="mb-8"
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Motorized Pergola Quotes
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
                Request a Quote for a Motorized Pergola
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
                Tell us what you are interested in. We will contact you to learn
                more, discuss pricing, and explain the next step.
              </p>
            </div>

            <Card variant="dark" padding="lg" className="bg-white/5">
              <h2 className="mb-5 text-2xl font-bold">All you need to start</h2>
              <ul className="space-y-3">
                {requiredInputs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">What happens next</div>
            <h2 className="section-title mb-4">
              A straightforward path from interest to quote
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Pergola pricing depends on the actual space and the options you
              want. We gather those details through a conversation instead of
              making you complete a design worksheet first.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {nextSteps.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <item.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="label-editorial-brand mb-4">Start here</div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Four required fields. Everything else is optional.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Enter your name, email, phone, and interest. That is enough for
                EDG to contact you and start the conversation.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                If you already have a city, rough dimensions, notes, photos, or
                a plan link, you may add them. None of those details are
                required to request a quote.
              </p>
              <Link href="/guides/motorized-pergola-planning">
                <Button variant="secondary">
                  Read the Planning Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card variant="default" padding="lg">
              <SystemFitReviewForm />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Common questions</div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
