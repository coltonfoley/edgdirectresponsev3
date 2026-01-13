import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import {
  CheckCircle2,
  Sun,
  Thermometer,
  Shield,
  DollarSign,
  Ruler,
  FileCheck,
  BookOpen,
  ArrowRight,
  Star
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Guide: Four-Season Outdoor Living | EDG",
  description: "Download our free planning guide and learn how to create the perfect year-round outdoor space. Avoid costly mistakes with expert insights on pergolas, shades, and enclosures.",
  openGraph: {
    title: "Free Guide: Four-Season Outdoor Living",
    description: "Download our free planning guide. Learn how to create the perfect year-round outdoor space without costly mistakes.",
    type: "website",
  },
};

const guideChapters = [
  {
    number: "01",
    title: "Understanding Your Options",
    description: "Pergolas, shades, and enclosures—which system fits your lifestyle?",
  },
  {
    number: "02",
    title: "Site Assessment Essentials",
    description: "What to measure, check, and document before getting quotes.",
  },
  {
    number: "03",
    title: "Budget Planning",
    description: "Real cost ranges and factors that impact your investment.",
  },
  {
    number: "04",
    title: "Avoiding Common Mistakes",
    description: "The 7 pitfalls that derail outdoor living projects.",
  },
  {
    number: "05",
    title: "The Right Questions to Ask",
    description: "What to ask contractors before signing anything.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Know Real Costs",
    description: "Budget ranges for every system type so you're never caught off guard.",
  },
  {
    icon: Ruler,
    title: "Site Assessment Guide",
    description: "A checklist for evaluating your space before getting quotes.",
  },
  {
    icon: Shield,
    title: "Avoid Costly Mistakes",
    description: "Learn the 7 pitfalls that derail outdoor living projects.",
  },
  {
    icon: FileCheck,
    title: "Ask the Right Questions",
    description: "What to ask contractors to ensure you get quality work.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-edg-dark">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{
            backgroundImage: "url('/images/pergolas/pergola-hero.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-edg-brand/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-edg-brand/5 rounded-full blur-3xl z-0" />

        <Container className="relative z-20 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full">
                <BookOpen className="h-4 w-4" />
                Free Planning Guide
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                The Complete Guide to{" "}
                <span className="text-edg-brand">Four-Season Outdoor Living</span>
              </h1>

              {/* Subhead */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Planning a pergola, shade system, or outdoor enclosure? This guide helps you
                avoid expensive mistakes and make confident decisions—before you talk to a single contractor.
              </p>

              {/* Quick benefits */}
              <ul className="space-y-3">
                {[
                  "Understand your options (and which one fits your needs)",
                  "Get real budget ranges—no surprises",
                  "Learn what questions to ask contractors",
                  "Avoid the 7 most common planning mistakes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form + Mockup */}
            <div className="space-y-6">
              {/* Guide mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-edg-brand/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-white/10 shadow-2xl">
                  {/* Fake book cover */}
                  <div className="aspect-[3/4] max-w-[280px] mx-auto bg-gradient-to-br from-edg-brand/20 via-edg-brand/10 to-transparent rounded-lg border border-edg-brand/30 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-edg-brand uppercase tracking-wider mb-2">EDG Guide</div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        Four-Season Outdoor Living
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">Planning Guide 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-edg-brand" />
                      <Thermometer className="h-5 w-5 text-edg-brand" />
                      <Shield className="h-5 w-5 text-edg-brand" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead capture form */}
              <LeadCaptureForm
                source="guide-landing-hero"
                ctaText="Read the Free Guide"
                redirectUrl="/guide/read"
                autoDownload={false}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-6">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">75+</span> projects delivered
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">10+</span> years experience
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold">5.0</span> Google rating
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <Section className="py-24 bg-white dark:bg-zinc-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground">
              This isn't fluff. It's the same information we share with clients who
              invest $30k–$150k+ in outdoor living systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                <div className="h-14 w-14 rounded-2xl bg-edg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-edg-brand-text dark:text-edg-brand" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-edg-gray-text dark:text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== TABLE OF CONTENTS ========== */}
      <Section className="py-24 bg-zinc-100 dark:bg-zinc-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Inside the Guide
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A clear, no-nonsense roadmap for planning your outdoor living project—whether
                you're just exploring or ready to break ground.
              </p>

              <div className="space-y-6">
                {guideChapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="flex gap-4 group"
                  >
                    <div className="text-2xl font-bold text-edg-brand-text/40 dark:text-edg-brand/40 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                      {chapter.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-edg-gray-text dark:text-gray-400 text-sm">{chapter.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview card */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-black/5 dark:border-white/10 shadow-xl">
              <div className="text-sm font-bold text-edg-brand-text dark:text-edg-brand uppercase tracking-wider mb-4">
                Sample from Chapter 4
              </div>
              <h3 className="text-xl font-bold mb-4">
                The 7 Costly Mistakes to Avoid
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  "Choosing the wrong material for your climate",
                  "Underestimating electrical requirements",
                  "Skipping the permit process",
                  "Not accounting for drainage",
                  "Ignoring HOA restrictions",
                ].map((mistake, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-edg-gray-text dark:text-gray-400 font-medium">{mistake}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-edg-brand-text dark:text-edg-brand font-bold">
                  <ArrowRight className="h-4 w-4" />
                  <span>+ 2 more in the full guide...</span>
                </div>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <p className="text-sm text-muted-foreground italic">
                  "This section alone saved us thousands. We had no idea about the permit
                  requirements in our area."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Recent guide reader</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-24 bg-edg-dark overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-edg-brand/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to Plan Your Outdoor Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the full guide instantly. It takes 30 seconds to sign up
              and you can read it directly here on the site.
            </p>

            <div className="max-w-md mx-auto">
              <LeadCaptureForm
                source="guide-landing-bottom"
                ctaText="Read the Free Guide"
                variant="compact"
                redirectUrl="/guide/read"
                autoDownload={false}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

