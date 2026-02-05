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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Builders & Architects | Trade Partner Program',
  description:
    'Partner with EDG for motorized pergolas, shades, and glass enclosures. We handle the specialized installs so you can focus on the build. 48-hour pricing, site coordination, and trade margins.',
  openGraph: {
    title: 'Builder & Trade Partner Program | EDG',
    description:
      'Shading solutions for builders and architects. Trade pricing, fast quotes, and on-schedule installs.',
  },
  alternates: {
    canonical: '/pro',
  },
};

const faqs = [
  {
    question: 'Do you offer trade pricing?',
    answer:
      'Yes. We have standard trade margins for qualified builders, architects, and design professionals. Contact us to set up a trade account.',
  },
  {
    question: 'Can you work with our team on site?',
    answer:
      'Absolutely. We coordinate directly with your site super or structural team to ensure attachment points and loads are all set.',
  },
  {
    question: "What's the wait time for materials?",
    answer:
      'We have stock materials ready for on-site builds (zero wait), and our pre-engineered systems ship in about 3-5 weeks.',
  },
  {
    question: 'Do you install, or just supply?',
    answer:
      "We're flexible. We can provide a full turnkey installation, or we can supply the materials and support your crew with the technical guidance they need to handle the build themselves.",
  },
];

import { generateFAQSchema } from '@/lib/schema';

export default function ProPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ========== HERO ========== */}
      <Section className="bg-white pt-24 pb-16 md:pt-32 dark:bg-black">
        <Container>
          <Link
            href="/"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
          </Link>
          <div className="max-w-4xl">
            <p className="text-edg-brand-text mb-4 text-sm font-semibold tracking-wider uppercase">
              For Builders, Architects & GCs
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Build faster. <br />
              <span className="text-muted-foreground">
                Deliver better outdoor living.
              </span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              High-end shading systems shouldn't be a headache. Whether we
              handle the full install or support your crew with the materials
              and expertise they need, we make sure the project stays on track.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=pro&action=plans">
                <Button size="lg" className="rounded-full">
                  Request Project Quote
                </Button>
              </TrackedLink>
              <TrackedLink href="/contact?type=pro">
                <Button size="lg" variant="secondary" className="rounded-full">
                  Request Spec Sheets
                </Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PROBLEM AGITATION ========== */}
      <Section className="bg-zinc-950 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              The "Standard" Experience vs. The EDG Way
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: XCircle,
                  title: 'Site Headaches',
                  desc: 'No more guessing on attachment points or structural loads. We verify everything before the first truck arrives.',
                },
                {
                  icon: Clock,
                  title: 'Material Delays',
                  desc: 'Stop waiting months. We keep stock materials ready to cut on-site, plus pre-engineered systems that ship in weeks, not months.',
                },
                {
                  icon: Wrench,
                  title: 'Callback Fatigue',
                  desc: "If a motor needs an adjustment or a louver needs a tweak, we own it. You shouldn't have to manage our install.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <item.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== THE SOLUTION ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Think of us as your in-house shading team.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                You have enough to manage. We handle the specialized
                details—from measuring to the final punch list.
                <strong> Have your own crew?</strong> We can supply the systems
                and provide the technical support they need to get it right.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Flexible Partnership',
                    desc: 'We can handle the full install or just supply the materials and support your crew.',
                  },
                  {
                    title: 'Fast, accurate takeoffs',
                    desc: "Send us your plans, and we'll have a quote back in 48 hours.",
                  },
                  {
                    title: 'We handle the specs',
                    desc: 'We coordinate with your team to make sure everything fits the first time.',
                  },
                  {
                    title: 'On-schedule delivery',
                    desc: "Materials arrive exactly when you're ready for them, avoiding site clutter.",
                  },
                  {
                    title: 'Professional Support',
                    desc: "Whether we install or you do, we're here to ensure the final product is perfect.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-edg-gray-text text-sm dark:text-gray-400">
                        {item.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/pergolas/residential-black-r-blade-02.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8">
                <p className="text-xl font-medium text-white">
                  Builder project in North Shore, completed on schedule
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== TRADE SERVICES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Trade Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <FileText className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Project Specs</h3>
              <p className="text-edg-gray-text mb-4 dark:text-gray-400">
                Everything you need for your drawings: DWG files, spec sheets,
                and clear measurements.
              </p>
              <Link
                href="/contact?type=pro&action=specs"
                className="text-edg-brand-text dark:text-edg-brand font-bold hover:underline"
              >
                Get Project Specs →
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <UploadCloud className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">48-Hour Pricing</h3>
              <p className="text-edg-gray-text mb-4 dark:text-gray-400">
                Share your project details. We'll get you accurate pricing and
                lead times within two business days.
              </p>
              <TrackedLink
                href="/contact?type=pro&action=plans"
                className="text-edg-brand-text dark:text-edg-brand font-bold hover:underline"
              >
                Request Quote →
              </TrackedLink>
            </div>
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <Users className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Site Readiness</h3>
              <p className="text-edg-gray-text mb-4 dark:text-gray-400">
                We meet on-site to double-check dimensions and timing so we
                don't get in your crew's way.
              </p>
              <Link
                href="/contact?type=pro"
                className="text-edg-brand-text dark:text-edg-brand font-bold hover:underline"
              >
                Schedule a Call →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CASE STUDY ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Builder Success Story
            </h2>
            <div className="rounded-3xl bg-zinc-50 p-8 md:p-12 dark:bg-zinc-900">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">
                    Lake Forest Custom Home
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A high-end residential builder needed a 450 sq ft louvered
                    pergola with integrated shades and heating for a $3M new
                    construction. Timeline was tight—6 weeks from decision to
                    install.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Takeoff delivered: 24 hours',
                      'Engineering approval: 5 days',
                      'Materials on site: 4 weeks',
                      'Install complete: 3 days',
                      'Client satisfaction: Perfect',
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-edg-gray-text flex items-center gap-2 text-sm dark:text-gray-400"
                      >
                        <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <blockquote className="mb-6 text-xl leading-relaxed font-medium">
                    "EDG made shading the easiest part of the project. No
                    delays, no surprises, no callbacks. That's rare in this
                    business."
                  </blockquote>
                  <div>
                    <div className="font-bold">Tom Reynolds</div>
                    <div className="text-muted-foreground">
                      Reynolds Custom Homes, Barrington
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== GUARANTEE ========== */}
      <Section className="bg-edg-brand text-edg-dark py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold">Our Trade Guarantee</h2>
            <p className="text-xl leading-relaxed">
              If we miss our quoted lead time by more than 5 business days (for
              reasons within our control), we'll credit 5% of the install cost.
              We show up when we say we will.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== MORE TESTIMONIALS ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Builders Say
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "Fastest takeoffs I've ever received. 24 hours, detailed, accurate. That's unheard of.",
                name: 'Mark S.',
                company: 'Lakeside Builders, Lake Geneva',
              },
              {
                quote:
                  "They integrate seamlessly into our build schedule. It's like having a shading department without the overhead.",
                name: 'Jennifer K.',
                company: 'JK Architecture, Highland Park',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-8 dark:bg-zinc-800"
              >
                <blockquote className="mb-6 text-lg leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">Trade FAQ</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
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

      {/* ========== FINAL CTA ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Let's talk about your next project.
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Request a quote for your project, or schedule a call to discuss
              trade partnership.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=pro&action=plans">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Quote
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
