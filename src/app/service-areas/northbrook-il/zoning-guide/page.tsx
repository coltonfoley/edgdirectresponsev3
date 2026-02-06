import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Northbrook, IL Pergola Permit & Zoning Guide 2025 | EDG',
  description:
    'Planning a pergola in Northbrook? Read our 2025 guide on setbacks, 30% lot coverage limits, and height restrictions for 60062 homeowners.',
};

export default function NorthbrookZoningGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Northbrook, IL Pergola Permit & Zoning Guide 2025',
            image: 'https://www.edgpatioshade.com/images/guide-cover.png',
            author: {
              '@type': 'Organization',
              name: 'EDG Outdoor Living',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EDG Outdoor Living',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.edgpatioshade.com/images/logo.png',
              },
            },
            datePublished: '2025-01-15',
            description:
              'A comprehensive guide to zoning requirements, setbacks, and height restrictions for building pergolas in Northbrook, IL (60062).',
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        <Section className="border-b border-black/5 bg-zinc-50 pt-32 pb-12 dark:border-white/10 dark:bg-zinc-900">
          <Container>
            <div className="max-w-3xl">
              <Link
                href="/service-areas/northbrook-il"
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center text-sm transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Northbrook
                Overview
              </Link>
              <h1 className="mb-6 text-3xl font-bold md:text-5xl">
                Northbrook Zoning & Permit Guide: What You Need to Know
              </h1>
              <p className="text-muted-foreground text-xl">
                Northbrook has strict requirements for "Accessory Structures"
                like pergolas. Here is the cheat sheet for 2025 regulatory
                compliance.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-12 lg:col-span-2">
                {/* Critical Rules */}
                <div>
                  <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <AlertTriangle className="h-6 w-6 text-amber-500" />
                    The 3 Rules You Cannot Ignore
                  </h2>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
                      <h3 className="mb-2 font-bold text-amber-900 dark:text-amber-100">
                        1. The 30% Coverage Limit
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200/80">
                        Your pergola counts as "impermeable coverage" if it has
                        a hard floor (pavers/concrete). The Village of
                        Northbrook strictly enforces a maximum 30% lot coverage
                        for the rear yard. If you have a pool, you are likely
                        close to this limit.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
                      <h3 className="mb-2 font-bold text-amber-900 dark:text-amber-100">
                        2. The 15-Foot Height Cap
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200/80">
                        Accessory structures cannot exceed 15 feet in height.
                        This is crucial for 2-story installations or elevated
                        decks where the structure might look "taller" relative
                        to grade.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
                      <h3 className="mb-2 font-bold text-amber-900 dark:text-amber-100">
                        3. Setbacks are Non-Negotiable
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200/80">
                        Must be 5 feet from the side lot line and typically 10
                        feet from the rear lot line (varies by zoning district
                        R-2 to R-5).
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Process */}
                <div>
                  <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <FileText className="text-edg-brand-text h-6 w-6" />
                    Our Permit Process
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We handle 100% of the paperwork for you. Here is what we
                    submit to the Village Hall located at 1225 Cedar Lane:
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Current Plat of Survey (with proposed structure drawn)',
                      'Manufacturer Engineering Specs (Wind/Snow Load)',
                      'Structural Drawings (Post footings)',
                      'HOA Approval Letter (if applicable in fields like Techny)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
                  <h3 className="mb-4 text-xl font-bold">
                    Don't risk a tear-down order.
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Building without a permit in Northbrook can result in fines
                    and removal orders. Let us handle the compliance.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact?source=northbrook_guide"
                      className="block w-full"
                    >
                      <Button className="w-full">Request a Site Consult</Button>
                    </Link>
                    <a
                      href="tel:+18155810138"
                      className="text-edg-brand-text block text-center text-sm hover:underline"
                    >
                      or Call (815) 581-0138
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
