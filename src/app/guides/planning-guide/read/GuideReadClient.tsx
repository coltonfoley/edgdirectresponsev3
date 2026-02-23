'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as images from '@/lib/images';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
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
  ArrowLeft,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function GuideReadPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const hasAccess = document.cookie
      .split('; ')
      .find((row) => row.startsWith('guide_access='));

    if (!hasAccess) {
      router.push('/guides/planning-guide');
    } else {
      setIsAuthorized(true);
    }
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
    <main className="selection:bg-edg-brand/20 bg-white font-sans text-zinc-900">
      {/* COVER SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-zinc-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.pages.guides.cover}
            alt="Guide Cover"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 pt-20 text-center">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Free Planning Guide', href: '/guides/planning-guide' },
                { label: 'Read' },
              ]}
            />
          </div>
          <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand mb-8 inline-block rounded-full border px-5 py-2 text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
            The 2026 Homeowner's Report
          </div>
          <h1 className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight drop-shadow-lg md:text-7xl">
            It's Time to Stop Apologizing <br className="hidden md:block" />
            for the Weather.
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-gray-200 drop-shadow-md md:text-3xl">
            The comprehensive guide to solving the Bug, Wind, and Rain problem
            for Chicago-Milwaukee homeowners.
          </p>

          <button
            onClick={() => scrollToSection('chapter-1')}
            className="text-edg-brand/80 hover:text-edg-brand inline-flex animate-bounce flex-col items-center gap-2 text-sm font-medium tracking-widest uppercase transition-colors"
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
            {[
              { id: 'chapter-1', label: '01. Options' },
              { id: 'chapter-2', label: '02. Assessment' },
              { id: 'chapter-3', label: '03. Budget' },
              { id: 'chapter-4', label: '04. Mistakes' },
              { id: 'chapter-5', label: '05. Checklist' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-edg-brand hover:border-edg-brand border-b-2 border-transparent px-6 py-4 text-sm font-bold text-zinc-500 transition-all hover:bg-zinc-50"
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

          <blockquote className="border-edg-brand my-12 rounded-r-xl border-l-4 bg-zinc-50 py-8 pr-8 pl-8 font-serif text-2xl text-zinc-800 italic">
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
            <div className="flex items-start gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-zinc-900">
                  The Roof Problem
                </h4>
                <p className="text-sm text-zinc-600">
                  Sun glare rendering the patio unusable? Rain canceling your
                  dinner party?
                </p>
                <div className="text-edg-brand mt-2 text-sm font-bold">
                  Solution: Adjustable Louvered Pergolas
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-zinc-900">
                  The Wall Problem
                </h4>
                <p className="text-sm text-zinc-600">
                  Mosquitoes eating you alive? Wind blowing the napkins off the
                  table?
                </p>
                <div className="text-edg-brand mt-2 text-sm font-bold">
                  Solution: Motorized Retractable Shades
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Snowflake className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-zinc-900">
                  The Temperature Problem
                </h4>
                <p className="text-sm text-zinc-600">
                  Too cold to sit outside in October? Snow covering your
                  expensive furniture?
                </p>
                <div className="text-edg-brand mt-2 text-sm font-bold">
                  Solution: Frameless Glass + Infrared Heat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM HIGHLIGHTS (Brief) */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.pages.serviceAreas.barringtonPergola1}
                  alt="Pergola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-8">
                <h3 className="mb-4 text-xl font-bold">Louvered Pergolas</h3>
                <p className="mb-6 text-sm text-zinc-500">
                  Motorized aluminum roof that rotates 150°. Open for sun,
                  closed for rain and snow.
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> 100%
                    Watertight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />{' '}
                    Integrated Gutters
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Smart
                    Home Ready
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.brand.detail.screen}
                  alt="Shades"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-8">
                <h3 className="mb-4 text-xl font-bold">Motorized Shades</h3>
                <p className="mb-6 text-sm text-zinc-500">
                  Wind and insect protection that disappears when you don't need
                  it. Tensioned "zipper" track.
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Cuts
                    Wind by 95%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Bug-Free
                    Zone
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Privacy
                    Mesh
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.pages.design.framelessGlass}
                  alt="Glass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-8">
                <h3 className="mb-4 text-xl font-bold">Sliding Glass</h3>
                <p className="mb-6 text-sm text-zinc-500">
                  Frameless panels that slide and stack. The ultimate
                  winter-ready extension for your home.
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Clear,
                    Open Views
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Thermal
                    Protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" /> Seamless
                    Transition
                  </li>
                </ul>
              </div>
            </div>
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
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Ruler className="h-7 w-7" />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  1. Structural Integrity
                </h4>
                <p className="mb-2 text-zinc-600">
                  A louvered roof is heavy. With snow load, we are talking about
                  thousands of pounds of dynamic force.
                </p>
                <div className="flex gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  If you are building on a deck, you will likely need to
                  reinforce headers or pour new footings under the deck posts.
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Zap className="h-7 w-7" />
              </div>
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
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Compass className="h-7 w-7" />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">3. Sun Orientation</h4>
                <p className="text-zinc-600">
                  Where does the sun hit at 5:00 PM in August? That's your
                  enemy.
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
              {/* Cost Card 1 */}
              <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Automated Louvered Pergolas
                  </h3>
                  <p className="text-sm text-gray-400">
                    Including design, engineering, shipping, and installation.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-edg-brand text-4xl font-bold">
                    $180 - $350
                  </div>
                  <div className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Per Square Foot
                  </div>
                </div>
              </div>

              {/* Cost Card 2 */}
              <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Motorized Retractable Shades
                  </h3>
                  <p className="text-sm text-gray-400">
                    Depending on width (up to 26'), retention fabric, and
                    mounting difficulty.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-edg-brand text-4xl font-bold">
                    $3k - $12k
                  </div>
                  <div className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Per Unit Installed
                  </div>
                </div>
              </div>

              {/* Cost Card 3 */}
              <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Frameless Glass Systems
                  </h3>
                  <p className="text-sm text-gray-400">
                    For creating true 4-season enclosures.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-edg-brand text-4xl font-bold">
                    $50k - $150k+
                  </div>
                  <div className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Typical Project Total
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-edg-brand/10 border-edg-brand/20 mt-12 rounded-xl border p-6">
              <h4 className="text-edg-brand mb-3 text-sm font-bold tracking-wider uppercase">
                The "Hidden" Costs to Remember
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <DollarSign className="text-edg-brand h-5 w-5" /> Permitting
                  Fees (Township dependent)
                </li>
                <li className="flex gap-2">
                  <DollarSign className="text-edg-brand h-5 w-5" /> Electrical
                  Hookup (Licensed Electrician)
                </li>
                <li className="flex gap-2">
                  <DollarSign className="text-edg-brand h-5 w-5" /> Concrete
                  Footings (If adding to a patio)
                </li>
              </ul>
            </div>
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
            {[
              {
                title: 'Ignoring the HOA',
                desc: "The #1 project killer. Check your bylaws for 'pergola' or 'permanent structure' restrictions before you sign ANY contract.",
              },
              {
                title: "The 'DIY' Drainage",
                desc: 'Water has to go somewhere. If your patio slopes toward the house, adding a roof without proper gutters is a recipe for a flooded basement.',
              },
              {
                title: 'Cheaping out on the Motor',
                desc: "A motorized screen is only as good as its engine. We see 'white label' motors fail in 2 years. Stick to Somfy or known heavy-duty brands.",
              },
              {
                title: "Missing the 'Rough-In'",
                desc: 'The time to run wire is BEFORE the concrete is poured or the patio is finished. Retrofitting power is expensive and messy.',
              },
              {
                title: 'Wrong Color Choice',
                desc: 'Dark colors absorb heat. A black framework looks modern, but a black roof slab? It turns your patio into an oven. Consider two-tone designs.',
              },
              {
                title: 'Under-engineering for Snow',
                desc: "Florida products don't work in Chicago. Ensure your system is rated for at least 30-40psf snow load.",
              },
              {
                title: 'No Permit Strategy',
                desc: "Hoping the village 'doesn't notice' is not a strategy. It leads to Stop Work Orders and fines. Do it right.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-6">
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
                The Contractor Interrogation Checklist
              </h2>
              <p className="text-xl text-zinc-600">
                Don't sign until you get good answers to these questions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                'Who handles the permit application? (They should.)',
                'Can I see a project you installed 5 years ago?',
                'Is the motor UL listed?',
                'What is the exact wind rating? (Ask for the engineering packet)',
                'Does your quote include the electrical hookup?',
                'What happens if the motor fails in year 4?',
                'Are your installers employees or subcontractors?',
                'How do you handle drainage/downspouts?',
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <HelpCircle className="text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                  <span className="font-medium text-zinc-800">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-zinc-900 py-32 text-center text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Construction className="text-edg-brand mx-auto mb-8 h-16 w-16" />
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
                href="/contact"
                className="bg-edg-brand inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-lg font-bold text-zinc-900 shadow-[0_0_20px_rgba(66,255,193,0.3)] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(66,255,193,0.5)]"
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
    </main>
  );
}
