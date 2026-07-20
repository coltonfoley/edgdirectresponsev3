import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Link } from '@/components/ui/Link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { buildContactHref } from '@/lib/contact-links';
import {
  BookOpen,
  Scale,
  ArrowRight,
  Library,
  Layers,
  FileText,
  DollarSign,
  Wind,
  ClipboardCheck,
  SlidersHorizontal,
  Building2,
  ShieldCheck,
  Hammer,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor System Planning Guides | EDG',
  description:
    'Planning guides for motorized pergolas, retractable screens, glass enclosures, costs, permits, controls, and local outdoor-room decisions.',
  alternates: {
    canonical: '/guides',
  },
};

const guides = [
  {
    title: 'Motorized Pergola Planning Guide',
    desc: 'The central planning hub for motorized pergola buyers: cost, system fit, drainage, controls, accessories, and local constraints.',
    href: '/guides/motorized-pergola-planning',
    icon: SlidersHorizontal,
    readTime: '14 min read',
    intent: 'choose-system',
  },
  {
    title: 'Pergola System Fit Review',
    desc: 'Send photos, dimensions, location, budget, and project goals so EDG can identify the likely system direction.',
    href: '/guides/pergola-system-fit-review',
    icon: ClipboardCheck,
    readTime: '3 min intake',
    intent: 'submit-review',
  },
  {
    title: 'Motorized Pergola Budget Examples',
    desc: 'Compare realistic planning bands for compact patios, outdoor rooms, roof decks, estate patios, and commercial systems.',
    href: '/guides/motorized-pergola-budget-examples',
    icon: DollarSign,
    readTime: '8 min read',
    intent: 'budget',
  },
  {
    title: 'Pergolas on Decks and Roof Decks',
    desc: 'Structure, wind, access, waterproofing, drainage, and electrical checks before pricing an elevated pergola.',
    href: '/guides/motorized-pergola-deck-roof-deck',
    icon: Building2,
    readTime: '9 min read',
    intent: 'constraints',
  },
  {
    title: 'Permits, HOA, and Engineering',
    desc: 'How surveys, drawings, review paths, setbacks, electrical, and structural assumptions shape pergola planning.',
    href: '/guides/motorized-pergola-permits-hoa-engineering',
    icon: ShieldCheck,
    readTime: '9 min read',
    intent: 'constraints',
  },
  {
    title: 'Outdoor Living Planning Guide',
    desc: 'The complete workbook for planning your project. Budget ranges, system comparisons, and the 7 mistakes to avoid.',
    href: '/guides/planning-guide',
    icon: FileText,
    readTime: '15 min read',
    intent: 'constraints',
  },
  {
    title: 'Pergola Cost Guide 2026',
    desc: 'Comprehensive breakdown of what drives pergola pricing from $25K to $150K+. Compare installed systems to basic kit alternatives.',
    href: '/guides/pergola-cost',
    icon: DollarSign,
    readTime: '12 min read',
    intent: 'budget',
  },
  {
    title: 'MagnaTrack Screens Cost Guide 2026',
    desc: 'Budget ranges and planning factors for motorized patio screens, outdoor shades, and screen retrofits.',
    href: '/guides/magnatrack-screens-cost',
    icon: Wind,
    readTime: '9 min read',
    intent: 'budget',
  },
  {
    title: 'The Complete Guide to Louvered Pergolas',
    desc: 'Everything you need to know about cost, installation, and winter performance.',
    href: '/guides/louvered-pergolas',
    icon: BookOpen,
    readTime: '12 min read',
    intent: 'choose-system',
  },
  {
    title: 'How EDG Chooses a Pergola System',
    desc: "How Brustor, Azenco, and Sundance fit into EDG's toolkit once the site, budget, drainage, and feature needs are clear.",
    href: '/guides/louvered-pergola-brands-compared',
    icon: Layers,
    readTime: '10 min read',
    intent: 'choose-system',
  },
  {
    title: 'Pergola vs. Patio Cover vs. Awning',
    desc: 'Understanding the differences between shade systems and how we match the right solution to your home.',
    href: '/guides/pergola-vs-patio-cover',
    icon: Scale,
    readTime: '8 min read',
    intent: 'choose-system',
  },
  {
    title: 'Steel vs. Aluminum Pergolas',
    desc: 'Compare structural fit, weight, corrosion, maintenance, roof function, engineering, and cost drivers before choosing a material path.',
    href: '/guides/steel-vs-aluminum-pergolas',
    icon: Hammer,
    readTime: '11 min read',
    intent: 'choose-system',
  },
];

const guideSections = [
  {
    title: 'Choose a System',
    description:
      'Compare the core product paths before narrowing the project scope.',
    intent: 'choose-system',
  },
  {
    title: 'Budget',
    description:
      'Use realistic planning ranges before requesting a site-specific review.',
    intent: 'budget',
  },
  {
    title: 'Permits and Site Constraints',
    description:
      'Check the physical, municipal, and review-path details that shape the recommendation.',
    intent: 'constraints',
  },
  {
    title: 'Submit for Review',
    description:
      'Move from research to a fit review when you have photos, goals, and rough constraints.',
    intent: 'submit-review',
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark relative overflow-hidden border-b border-white/10 pt-32 pb-20 text-white">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[{ label: 'Guides' }]}
              className="text-zinc-300"
            />
          </div>
          <FadeIn immediate>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-4xl">
                <p className="text-edg-brand mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="bg-edg-brand h-px w-8" />
                  <Library className="h-4 w-4" />
                  Resources & Learning
                </p>
                <h1 className="mb-6 text-4xl leading-none font-bold text-white md:text-6xl">
                  Outdoor system planning guides.
                </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-zinc-300">
                  Cost, fit, permitting, and system-selection resources for
                  homeowners and partners planning motorized pergolas, screens,
                  glass, and complete outdoor rooms.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/guides/pergola-system-fit-review">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start a Fit Review <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/guides/planning-guide">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Get the Planning Guide
                    </Button>
                  </Link>
                </div>
              </div>

              <Card
                variant="dark"
                padding="lg"
                className="border-white/15 bg-white/5"
              >
                <p className="text-edg-brand mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                  How to use this library
                </p>
                <div className="space-y-5">
                  {[
                    'Start with system fit if the project scope is still open.',
                    'Use budget and permit guides before setting expectations.',
                    'Move to a fit review when photos, goals, and constraints are ready.',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [guides.length.toString(), 'current planning resources'],
              ['4', 'decision paths: fit, budget, permits, review'],
              ['1', 'direct handoff to EDG system review'],
            ].map(([value, label]) => (
              <div key={label} className="border-edg-brand border-l-2 pl-5">
                <div className="text-3xl font-bold text-zinc-950 dark:text-white">
                  {value}
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== GUIDES GRID ========== */}
      <Section className="py-20">
        <Container>
          <FadeIn delay={0.2}>
            <div className="mx-auto max-w-6xl space-y-16">
              {guideSections.map((section) => {
                const sectionGuides = guides.filter(
                  (guide) => guide.intent === section.intent
                );

                return (
                  <section key={section.intent}>
                    <div className="mb-6 max-w-3xl">
                      <h2 className="section-title mb-3 text-zinc-950 dark:text-zinc-50">
                        {section.title}
                      </h2>
                      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {section.description}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {sectionGuides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="group block h-full focus-visible:outline-none"
                        >
                          <Card className="group-hover:border-edg-brand group-focus-visible:border-edg-brand h-full transition-colors">
                            <div className="mb-6 flex items-start justify-between gap-4">
                              <IconWrapper
                                icon={guide.icon}
                                variant="brand"
                                size="lg"
                              />
                              <span className="border border-zinc-200 px-3 py-1.5 text-xs font-bold tracking-wider text-zinc-600 uppercase dark:border-zinc-700 dark:text-zinc-400">
                                {guide.readTime}
                              </span>
                            </div>
                            <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-4 text-2xl font-bold transition-colors">
                              {guide.title}
                            </h3>
                            <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {guide.desc}
                            </p>
                            <div className="text-edg-brand-text dark:text-edg-brand flex items-center text-sm font-bold transition-all group-hover:gap-2">
                              Read Full Article{' '}
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-edg-brand mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                Ready for a recommendation?
              </p>
              <h2 className="section-title text-text-inverse mb-4">
                Send the project context and EDG will help narrow the system
                path.
              </h2>
              <p className="text-text-inverse-muted">
                A fit review is the quickest way to connect the research here to
                a real site, budget, structure, and installation path.
              </p>
            </div>
            <Link
              href={buildContactHref({
                type: 'fit-review',
                product: 'planning',
                source: 'guides_hub_bottom',
              })}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Request Fit Review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
