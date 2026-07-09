'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as images from '@/lib/images';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import {
  CheckCircle2,
  ArrowRight,
  Ruler,
  Zap,
  Compass,
  Droplets,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  Construction,
  Snowflake,
  ChevronDown,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { buildContactHref } from '@/lib/contact-links';

const designConsultationHref = buildContactHref({
  type: 'consultation',
  product: 'planning',
  source: 'planning_guide_reader',
});

const tableOfContents = [
  { id: 'chapter-1', label: '01. Options' },
  { id: 'chapter-2', label: '02. Assessment' },
  { id: 'chapter-3', label: '03. Budget' },
  { id: 'chapter-4', label: '04. Mistakes' },
  { id: 'chapter-5', label: '05. Checklist' },
];

const systemProblems = [
  {
    icon: Droplets,
    title: 'The Roof Problem',
    description:
      'Sun glare rendering the patio unusable? Rain canceling your dinner party?',
    solution: 'Adjustable louvered pergolas',
  },
  {
    icon: Zap,
    title: 'The Wall Problem',
    description:
      'Mosquitoes eating you alive? Wind blowing the napkins off the table?',
    solution: 'Motorized retractable shades',
  },
  {
    icon: Snowflake,
    title: 'The Temperature Problem',
    description:
      'Too cold to sit outside in October? Snow covering your expensive furniture?',
    solution: 'Frameless glass plus infrared heat',
  },
];

const systemHighlights = [
  {
    image: images.pages.serviceAreas.barringtonPergola1,
    alt: 'Louvered pergola over a finished patio',
    title: 'Louvered Pergolas',
    description:
      'Motorized aluminum roof that opens for sun and closes for rain management when specified correctly.',
    bullets: [
      'Adjustable roof coverage',
      'Integrated gutter planning',
      'Smart-home ready controls',
    ],
  },
  {
    image: images.systems.shades.deployed,
    alt: 'Motorized retractable screens deployed on a patio',
    title: 'Motorized Shades',
    description:
      'Wind, insect, privacy, and sun control that disappears when you do not need it.',
    bullets: [
      'Wind-exposure planning',
      'Bug and privacy control',
      'Tensioned track options',
    ],
  },
  {
    image: images.pages.design.framelessGlass,
    alt: 'Frameless sliding glass enclosure system',
    title: 'Sliding Glass',
    description:
      'Frameless panels that slide and stack for enclosed outdoor-room projects.',
    bullets: [
      'Clear open views',
      'Season-extension planning',
      'Clean indoor-outdoor transition',
    ],
  },
];

const budgetRanges = [
  {
    title: 'Automated Louvered Pergolas',
    description: 'Including design, engineering, shipping, and installation.',
    value: '$180 - $350',
    label: 'Per square foot',
  },
  {
    title: 'Motorized Retractable Shades',
    description:
      'Depending on width, retention fabric, and mounting difficulty.',
    value: '$3k - $12k',
    label: 'Per unit installed',
  },
  {
    title: 'Frameless Glass Systems',
    description: 'For enclosed outdoor-room projects with more project scope.',
    value: '$50k - $150k+',
    label: 'Typical project total',
  },
];

const hiddenCosts = [
  'Permitting fees by township or municipality',
  'Electrical hookup by a licensed electrician',
  'Concrete footings or structural reinforcement when needed',
];

const mistakes = [
  {
    title: 'Ignoring the HOA',
    desc: "The #1 project killer. Check your bylaws for 'pergola' or 'permanent structure' restrictions before you sign any contract.",
  },
  {
    title: "The 'DIY' Drainage",
    desc: 'Water has to go somewhere. If your patio slopes toward the house, adding a roof without proper gutters can create problems fast.',
  },
  {
    title: 'Cheaping out on the Motor',
    desc: 'A motorized screen is only as good as its engine. Ask which motor is specified and what support exists if it fails.',
  },
  {
    title: "Missing the 'Rough-In'",
    desc: 'The time to run wire is before the concrete is poured or the patio is finished. Retrofitting power is expensive and messy.',
  },
  {
    title: 'Wrong Color Choice',
    desc: 'Dark colors absorb heat. A black framework can look modern, but two-tone designs may perform better in exposed sun.',
  },
  {
    title: 'Under-engineering for Snow',
    desc: 'Do not assume a warm-climate product belongs in a Chicago winter. Ask for the snow-load documentation before committing.',
  },
  {
    title: 'No Permit Strategy',
    desc: 'Hoping the village does not notice is not a strategy. It can lead to stop-work orders, fines, and redesign.',
  },
];

const contractorQuestions = [
  'Who handles the permit application?',
  'Can I see a project you installed 5 years ago?',
  'Is the motor UL listed?',
  'What is the exact wind rating?',
  'Does your quote include the electrical hookup?',
  'What happens if the motor fails in year 4?',
  'Are your installers employees or subcontractors?',
  'How do you handle drainage and downspouts?',
];

export default function GuideReadPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const hasAccess = document.cookie
      .split('; ')
      .find((row) => row.startsWith('guide_access='));

    if (!hasAccess) {
      router.push('/guides/planning-guide');
      return;
    }

    const frame = requestAnimationFrame(() => {
      setIsAuthorized(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex animate-pulse flex-col items-center gap-4">
          <div className="border-edg-brand h-12 w-12 animate-spin rounded-full border-t-2" />
          <p className="text-sm font-medium text-white/40">
            Verifying Access...
          </p>
        </div>
      </div>
    );
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="selection:bg-edg-brand/20 bg-white font-sans text-zinc-900">
      {/* COVER SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-zinc-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 pt-20 text-center">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                {
                  label: 'Planning Guide',
                  href: '/guides/planning-guide',
                },
                { label: 'Read' },
              ]}
            />
          </div>
          <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand mb-8 inline-flex border px-5 py-2 text-sm font-bold tracking-widest uppercase">
            The 2026 Homeowner's Report
          </div>
          <h1 className="hero-title mx-auto mb-8 max-w-5xl text-white">
            It's Time to Stop Apologizing <br className="hidden md:block" />
            for the Weather.
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
            The comprehensive guide to solving the Bug, Wind, and Rain problem
            for Chicago-Milwaukee homeowners.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection('chapter-1')}
            className="text-edg-brand hover:bg-edg-brand hover:text-edg-dark border-edg-brand/30 focus-visible:ring-edg-brand inline-flex flex-col items-center gap-2 border px-5 py-3 text-sm font-bold tracking-widest uppercase transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:outline-none"
          >
            Start Reading
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* TABLE OF CONTENTS - Stickyish */}
      <div className="sticky top-0 z-50 hidden border-b border-zinc-200 bg-white/80 backdrop-blur-md md:block">
        <Container>
          <div className="flex justify-center gap-1">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="hover:text-edg-brand hover:border-edg-brand focus-visible:ring-edg-brand border-b-2 border-transparent px-6 py-4 text-sm font-bold text-zinc-500 uppercase transition-all hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* CHAPTER 1: THE PROBLEM & OPTIONS */}
      <section
        id="chapter-1"
        className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 md:px-0"
      >
        <div className="prose prose-lg prose-zinc mx-auto">
          <div className="mb-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
            Chapter 01
          </div>
          <h2 className="mb-8 font-serif text-4xl leading-tight font-bold text-zinc-900 md:text-5xl">
            Understanding Your Options
          </h2>
          <p className="lead mb-8 text-2xl leading-relaxed font-medium text-zinc-600">
            You spent $50,000 on a beautiful paver patio. You bought the
            expensive teak furniture. You even installed a fire pit. So why are
            you sitting <em>inside</em> looking at it?
          </p>
          <p>
            If you live in the Midwest, you know the reality: we don't get 300
            days of sunshine. We live in a region defined by extremes. Designing
            for "perfect weather" is a fool's errand.
          </p>

          <blockquote className="border-edg-brand my-12 border-l-4 bg-zinc-50 py-8 pr-8 pl-8 font-serif text-2xl text-zinc-800 italic">
            "Most outdoor spaces are designed for the best 10 days of the year.
            We design for the other 355."
          </blockquote>

          <h3 className="mt-16 mb-8 text-3xl font-bold text-zinc-900">
            Furniture vs. Systems
          </h3>
          <p>
            At EDG, we don't sell furniture. We design{' '}
            <strong>Outdoor Living Systems</strong>. A system is an engineered
            solution to a specific environmental problem.
          </p>

          <div className="not-prose my-12 grid gap-6">
            {systemProblems.map((problem) => (
              <Card
                key={problem.title}
                variant="outline"
                padding="lg"
                className="flex items-start gap-5"
              >
                <IconWrapper icon={problem.icon} variant="brand" size="lg" />
                <div>
                  <h4 className="mb-1 text-lg font-bold text-zinc-900">
                    {problem.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {problem.description}
                  </p>
                  <div className="text-edg-brand-dark mt-3 text-sm font-bold tracking-wider uppercase">
                    System: {problem.solution}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM HIGHLIGHTS (Brief) */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {systemHighlights.map((system) => (
              <Card
                key={system.title}
                variant="default"
                padding="none"
                className="flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] border-b border-zinc-200">
                  <Image
                    src={system.image}
                    alt={system.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-8">
                  <h3 className="mb-4 text-xl font-bold">{system.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                    {system.description}
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {system.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <CheckCircle2 className="text-edg-brand h-4 w-4 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 2: SITE ASSESSMENT */}
      <section
        id="chapter-2"
        className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 md:px-0"
      >
        <div className="prose prose-lg prose-zinc mx-auto">
          <div className="mb-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
            Chapter 02
          </div>
          <h2 className="mb-8 font-serif text-4xl leading-tight font-bold text-zinc-900 md:text-5xl">
            Site Assessment
          </h2>
          <p className="lead mb-8 text-2xl font-medium text-zinc-600">
            Most people pick out the product first and check the house second.
            That is backwards.
          </p>
          <p>
            Before you fall in love with a Pinterest photo, you need to
            understand the constraints of your physical space. Use this
            checklist to screen potential issues early.
          </p>

          <div className="not-prose mt-12 space-y-8">
            <div className="flex gap-6">
              <IconWrapper icon={Ruler} variant="default" size="lg" />
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  1. Structural Integrity
                </h4>
                <p className="mb-2 text-zinc-600">
                  A louvered roof adds meaningful structural load. With snow
                  load, the support plan matters as much as the product.
                </p>
                <div className="flex gap-3 border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                  <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
                  If you are building on a deck, you will likely need to
                  reinforce headers or pour new footings under the deck posts.
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <IconWrapper icon={Zap} variant="default" size="lg" />
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  2. Electrical Capacity
                </h4>
                <p className="text-zinc-600">
                  You need power. Not just a standard outlet.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
                  <li>
                    Motorized shades and roofs typically require reliable power.
                  </li>
                  <li>
                    Infrared heaters require{' '}
                    <strong>dedicated 20-amp circuits</strong> (240V often
                    needed).
                  </li>
                  <li>Do you have room in your breaker panel?</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <IconWrapper icon={Compass} variant="default" size="lg" />
              <div>
                <h4 className="mb-2 text-xl font-bold">3. Sun Orientation</h4>
                <p className="text-zinc-600">
                  Where does the sun hit at 5:00 PM in August? That is the
                  design problem to solve.
                  <br />
                  <span className="font-bold text-black">
                    West-facing patios
                  </span>{' '}
                  are notoriously hot during dinner hours. This dictates where
                  you need shades versus just a roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: BUDGET */}
      <section
        id="chapter-3"
        className="scroll-mt-24 bg-zinc-900 py-24 text-white"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-edg-brand mb-2 text-sm font-bold tracking-wider uppercase">
              Chapter 03
            </div>
            <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl">
              Budget Planning
            </h2>
            <p className="mb-12 text-xl font-light text-gray-300 md:text-2xl">
              Why "Get a Quote" is the most frustrating button on the internet.
              Here are the real numbers.
            </p>

            <div className="grid gap-6">
              {budgetRanges.map((item) => (
                <Card
                  key={item.title}
                  variant="dark"
                  padding="lg"
                  className="flex flex-col gap-6 bg-white/5 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <div className="text-edg-brand text-4xl font-bold">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                      {item.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card
              variant="dark"
              padding="lg"
              className="bg-edg-brand/10 border-edg-brand/20 mt-12"
            >
              <h4 className="text-edg-brand mb-3 text-sm font-bold tracking-wider uppercase">
                Costs to Remember
              </h4>
              <ul className="space-y-2 text-gray-300">
                {hiddenCosts.map((cost) => (
                  <li key={cost} className="flex gap-2">
                    <DollarSign className="text-edg-brand h-5 w-5 shrink-0" />
                    {cost}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* CHAPTER 4: MISTAKES */}
      <section
        id="chapter-4"
        className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 md:px-0"
      >
        <div className="prose prose-lg prose-zinc mx-auto">
          <div className="mb-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
            Chapter 04
          </div>
          <h2 className="mb-8 font-serif text-4xl leading-tight font-bold text-zinc-900 md:text-5xl">
            7 Costly Mistakes
          </h2>
          <p className="lead mb-12 text-2xl font-medium text-zinc-600">
            In our 10+ years of building, these are the errors that cost
            homeowners time, money, and sanity.
          </p>

          <ol className="not-prose m-0 list-none space-y-8 p-0 text-zinc-800">
            {mistakes.map((item, i) => (
              <li key={item.title} className="flex items-start gap-6">
                <span className="-mt-4 text-6xl leading-none font-black text-zinc-100 select-none">
                  {i + 1}
                </span>
                <div className="-ml-8 pt-2">
                  <h4 className="mb-2 text-xl font-bold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CHAPTER 5: QUESTIONS */}
      <section
        id="chapter-5"
        className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 py-24"
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
                Chapter 05
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-zinc-900">
                The Contractor Planning Checklist
              </h2>
              <p className="text-xl text-zinc-600">
                Don't sign until you get good answers to these questions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contractorQuestions.map((q) => (
                <Card
                  key={q}
                  variant="default"
                  className="flex items-start gap-4"
                >
                  <HelpCircle className="text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                  <span className="font-medium text-zinc-800">{q}</span>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-zinc-900 py-32 text-center text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <IconWrapper
              icon={Construction}
              variant="dark"
              size="lg"
              className="text-edg-brand mx-auto mb-8 h-16 w-16"
            />
            <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
              Stop Researching.
              <br />
              Start Planning.
            </h2>
            <p className="mb-12 text-xl text-gray-400">
              You know the options. You know the costs. You know the risks. Now
              let's verify your site and get you a real design.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={designConsultationHref}
                className="bg-edg-brand focus-visible:ring-edg-brand inline-flex h-14 items-center justify-center gap-2 px-8 text-base font-bold tracking-wider text-zinc-900 uppercase transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:outline-none"
              >
                Book Your Design Consultation <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              No pressure. No sales tactics. Just engineering and design.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
