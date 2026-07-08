import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Link } from '@/components/ui/Link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Knowledge Base | Guides & Resources',
  description:
    'Expert guides on louvered pergolas, shade systems, and outdoor enclosures. Cost breakdowns, installation tips, and zoning information for Chicago-Milwaukee homeowners.',
  alternates: {
    canonical: '/guides',
  },
};

const guides = [
  {
    title: 'Motorized Pergola Planning Guide',
    desc: 'The central planning hub for premium pergola buyers: cost, system fit, drainage, controls, accessories, and local constraints.',
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
    title: 'Free Outdoor Living Planning Guide',
    desc: 'The complete workbook for planning your project. Budget ranges, system comparisons, and the 7 mistakes to avoid.',
    href: '/guides/planning-guide',
    icon: FileText,
    readTime: '15 min read',
    intent: 'constraints',
  },
  {
    title: 'Pergola Cost Guide 2026',
    desc: 'Comprehensive breakdown of what drives pergola pricing from $25K to $150K+. Compare premium systems to big-box alternatives.',
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
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 pt-32 pb-20 dark:border-zinc-800 dark:bg-zinc-900">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Guides' }]} />
          </div>
          <FadeIn>
            <div className="max-w-4xl">
              <span className="text-edg-brand-text dark:text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <Library className="h-4 w-4" /> Resources & Learning
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-zinc-50">
                EDG Knowledge Base
              </h1>
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                Deep-dive resources to help you make informed decisions about
                your outdoor living investment. From zoning guides to cost
                breakdowns.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

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
                      <h2 className="mb-2 text-2xl font-bold text-zinc-900 md:text-3xl dark:text-zinc-50">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {sectionGuides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="group block h-full"
                        >
                          <div className="hover:border-edg-brand h-full rounded-lg border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="mb-6 flex items-start justify-between gap-4">
                              <div className="group-hover:bg-edg-brand/10 group-hover:border-edg-brand/20 rounded-lg border border-zinc-100 bg-zinc-50 p-4 transition-colors dark:border-zinc-700 dark:bg-zinc-800">
                                <guide.icon className="text-edg-brand-text dark:text-edg-brand h-8 w-8" />
                              </div>
                              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-bold tracking-wider text-zinc-600 uppercase dark:bg-zinc-800">
                                {guide.readTime}
                              </span>
                            </div>
                            <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-4 text-2xl font-bold transition-colors">
                              {guide.title}
                            </h3>
                            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                              {guide.desc}
                            </p>
                            <div className="text-edg-brand-text dark:text-edg-brand flex items-center text-sm font-bold transition-all group-hover:gap-2">
                              Read Full Article{' '}
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
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
    </div>
  );
}
