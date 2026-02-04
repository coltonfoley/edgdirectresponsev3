import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/components/ui/Link";
import { BookOpen, Scale, ArrowRight, Library } from "lucide-react";

export const metadata: Metadata = {
    title: "Outdoor Living Knowledge Base | Guides & Resources",
    description: "Expert guides on louvered pergolas, shade systems, and outdoor enclosures. Cost breakdowns, installation tips, and zoning information for Chicago-Milwaukee homeowners.",
    alternates: {
        canonical: "/guides",
    },
};

const guides = [
    {
        title: "The Complete Guide to Louvered Pergolas",
        desc: "Everything you need to know about cost, installation, and winter performance.",
        href: "/guides/louvered-pergolas",
        icon: BookOpen,
        readTime: "12 min read"
    },
    {
        title: "Pergola vs. Patio Cover vs. Awning",
        desc: "A side-by-side comparison of shade systems to help you choose what's right for your home.",
        href: "/guides/pergola-vs-patio-cover",
        icon: Scale,
        readTime: "8 min read"
    }
];

export default function GuidesIndexPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen">
            {/* ========== HERO SECTION ========== */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl">
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand-text dark:text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <Library className="h-4 w-4" /> Resources & Learning
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight leading-[1.1]">
                                EDG Knowledge Base
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Deep-dive resources to help you make informed decisions about your outdoor living investment. From zoning guides to cost breakdowns.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== GUIDES GRID ========== */}
            <Section className="py-20">
                <Container>
                    <FadeIn delay={0.2}>
                        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
                            {guides.map((guide, i) => (
                                <Link key={i} href={guide.href} className="group block h-full">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 h-full transition-all hover:border-edg-brand hover:shadow-xl hover:-translate-y-1">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-700 group-hover:bg-edg-brand/10 group-hover:border-edg-brand/20 transition-colors">
                                                <guide.icon className="w-8 h-8 text-edg-brand-text dark:text-edg-brand" />
                                            </div>
                                            <span className="text-xs font-bold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                {guide.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                                            {guide.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            {guide.desc}
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-edg-brand-text dark:text-edg-brand group-hover:gap-2 transition-all">
                                            Read Full Article <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
