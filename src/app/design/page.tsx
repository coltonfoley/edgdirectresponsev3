import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  XCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Shield,
  Users,
  Phone,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outdoor Living Design Consultation | Chicago & Milwaukee',
  description:
    'Free design consultation for motorized pergolas, exterior shades, and glass enclosures. Serving Lake County IL, McHenry County, and Southeast Wisconsin. Expert site assessment and planning.',
  openGraph: {
    title: 'Outdoor Living Design Consultation | EDG',
    description:
      'Free design consultation for premium outdoor living systems. Serving Chicago to Milwaukee.',
  },
  alternates: {
    canonical: '/design',
  },
};

const faqs = [
  {
    question: 'How much does the design consultation cost?',
    answer:
      "The initial discovery call is free. If we move forward with a site visit and detailed proposal, there's a design fee that gets credited toward your project if you proceed with us.",
  },
  {
    question: 'What if I already know what system I want?',
    answer:
      "Great! We'll validate your choice and make sure it's the right fit for your specific site. Sometimes clients come in wanting a pergola and leave with a better solution. Sometimes we confirm their instincts. Either way, you'll have confidence.",
  },
  {
    question: 'How long does the whole process take?',
    answer:
      "From first call to enjoying your new space: typically 6-10 weeks for standard projects. Complex projects or those requiring significant permitting can take longer. We'll give you a realistic timeline upfront.",
  },
  {
    question: 'Do you only work in the Chicago area?',
    answer:
      'We design and install within 60 miles of Spring Grove, IL (north Chicago to Milwaukee). For projects outside that area, we can provide design consulting and connect you with qualified installers.',
  },
  {
    question: "What if my project isn't feasible?",
    answer:
      "We'll tell you upfront. If your property can't support what you want, or if your budget doesn't align with your goals, we'd rather be honest than waste your time. That's the whole point of starting with design.",
  },
];

import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';


export default function DesignPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ========== HERO: LEAD WITH THE PROBLEM ========== */}
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
              For Homeowners Who Want It Done Right
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              $40,000 outdoor projects fail every day.
              <br />
              <span className="text-muted-foreground">
                Yours doesn't have to.
              </span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              The pergola that floods your patio. The shades that rip in the
              first storm. The glass enclosure that fogs up every morning. These
              aren't product failures—they're <strong>planning failures</strong>
              .
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              We help you avoid them before you spend a dime on materials.
            </p>
            <Link href="/contact?type=design">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Get Your Free Design Assessment{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              15-minute call. No obligation. No sales pressure.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== PROBLEM AGITATION: THE STAKES ========== */}
      <Section className="bg-zinc-950 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              What happens when you skip the design phase?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: DollarSign,
                  title: '$8,000+ in change orders',
                  desc: 'Contractors discover issues mid-project. You pay to fix them.',
                },
                {
                  icon: Clock,
                  title: '3-month delays',
                  desc: 'Permits get rejected. Structural engineers get involved. Your summer is gone.',
                },
                {
                  icon: XCircle,
                  title: 'A system you regret',
                  desc: 'Wrong product for your climate. Wrong size for your space. Wrong everything.',
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <item.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-300">
                We've seen it hundreds of times. Don't let it happen to you.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== THE SOLUTION: OUR APPROACH ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Our design-first approach
                <br />
                protects your investment.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Before we recommend a single product, we understand your site,
                your climate, your usage patterns, and your goals. Then—and only
                then—we match you with the right system.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Site-specific climate analysis',
                    desc: 'Wind loads, sun angles, snow loads for YOUR property',
                  },
                  {
                    title: 'Architectural integration',
                    desc: "How the system connects to your home's structure",
                  },
                  {
                    title: 'Permit & engineering review',
                    desc: 'What your municipality requires—before you apply',
                  },
                  {
                    title: 'System matching',
                    desc: 'The right product for your goals, not the one with the best margins',
                  },
                  {
                    title: 'Detailed scope & budget',
                    desc: "Know exactly what you're getting and what it costs",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-edg-gray-text text-sm">
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
                  backgroundImage: `url(${images.pages.design.framelessGlass})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8">
                <p className="text-xl font-medium text-white">
                  A custom outdoor living space with retractable glass walls in
                  Barrington, IL
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== WHAT'S INCLUDED ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What you get from a design consultation
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            This isn't a sales call. It's a planning session that gives you
            clarity—whether you work with us or not.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Site Feasibility Report',
                desc: "Can your property support what you want? We'll tell you.",
              },
              {
                title: 'System Recommendations',
                desc: '2-3 options matched to your goals and budget',
              },
              {
                title: 'Budget Range',
                desc: 'Realistic investment expectations, not bait-and-switch quotes',
              },
              {
                title: 'Timeline Estimate',
                desc: 'When you could realistically be enjoying your new space',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mb-4 h-8 w-8" />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-edg-gray-text text-sm dark:text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact?type=design">
              <Button size="lg" className="rounded-full">
                Schedule Your Free Assessment{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== THE PROCESS ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            From first call to finished project
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            A clear, predictable process. No surprises.
          </p>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Discovery Call',
                desc: '15 minutes to understand your vision, timeline, and budget.',
                time: 'Day 1',
              },
              {
                step: '2',
                title: 'Site Visit',
                desc: 'We measure, photograph, and assess your property in person.',
                time: 'Within 1 week',
              },
              {
                step: '3',
                title: 'Design Proposal',
                desc: 'Detailed recommendation with system specs, drawings, and pricing.',
                time: 'Within 2 weeks',
              },
              {
                step: '4',
                title: 'Project Execution',
                desc: 'Permitting, ordering, installation, and final walkthrough.',
                time: '4-8 weeks',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-edg-brand text-edg-dark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-edg-gray-text mb-2 text-sm">
                  {item.desc}
                </p>
                <p className="text-edg-brand-text dark:text-edg-brand text-xs font-bold tracking-wider uppercase">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== RISK REVERSAL ========== */}
      <Section className="bg-edg-brand text-edg-dark py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold">Our Promise</h2>
            <p className="text-xl leading-relaxed">
              If we discover during our assessment that your project isn't
              feasible, won't meet your goals, or isn't a good fit for what we
              do—we'll tell you. No hard sell. No wasted time.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== TESTIMONIALS ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            What our clients say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "EDG helped us see possibilities we hadn't considered. Their design guidance saved us from making a $15,000 mistake.",
                name: 'Mike & Sarah T.',
                location: 'Libertyville, IL',
                project: 'Louvered Pergola',
              },
              {
                quote:
                  'I came in thinking I needed glass enclosures. They showed me why motorized shades would actually work better for our situation.',
                name: 'Jennifer L.',
                location: 'Lake Bluff, IL',
                project: 'Motorized Shades',
              },
              {
                quote:
                  'The site assessment caught a drainage issue that would have ruined our pergola. Worth every penny just for that.',
                name: 'Tom & Linda R.',
                location: 'Barrington, IL',
                project: 'Pergola + Shades',
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
                  <div className="text-edg-gray-text text-sm font-medium">
                    {item.location}
                  </div>
                  <div className="text-edg-brand-text dark:text-edg-brand mt-1 text-sm font-bold tracking-tight uppercase">
                    {item.project}
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
          <h2 className="mb-12 text-center text-3xl font-bold">
            Common Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900"
              >
                <h4 className="mb-2 text-lg font-bold">{item.question}</h4>
                <p className="text-muted-foreground">{item.answer}</p>
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
              Ready to plan your four-season outdoor space?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Start with a free 15-minute discovery call. We'll listen to your
              goals, answer your questions, and tell you honestly if we can
              help.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact?type=design">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Schedule Discovery Call{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
