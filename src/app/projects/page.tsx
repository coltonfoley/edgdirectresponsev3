import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Gallery | Pergolas & Outdoor Living in Chicago",
    description: "See our completed pergola, shade, and glass enclosure projects in Lake County IL, Barrington, Lake Forest, and Lake Geneva. Real transformations for homes and businesses.",
    openGraph: {
        title: "Project Gallery | EDG Outdoor Living",
        description: "Real projects, real transformations. See our work in the Chicago/Milwaukee area.",
    },
};

// Project data imported from central source
import { getAllProjects } from "@/lib/projects";

const projects = getAllProjects();

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="pb-12 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand font-semibold mb-4 uppercase tracking-wider text-sm">Our Work</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Real projects.<br />
                            <span className="text-muted-foreground">Real transformations.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            See how we've helped homeowners, builders, and businesses create outdoor spaces
                            that work year-round in the Midwest climate.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== FILTER TABS ========== */}
            <Section className="py-8 bg-white dark:bg-black border-b border-black/5 dark:border-white/5">
                <Container>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-4 py-2 rounded-full bg-edg-brand text-edg-dark font-medium text-sm">
                            All Projects
                        </button>
                        <button className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            Residential
                        </button>
                        <button className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            Commercial
                        </button>
                        <button className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            Builder Projects
                        </button>
                    </div>
                </Container>
            </Section>

            {/* ========== PROJECT GRID ========== */}
            <Section className="py-16 bg-zinc-50 dark:bg-zinc-950">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${project.cardImage}')` }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full text-xs font-semibold">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-edg-brand transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                                        <MapPin className="h-4 w-4 mr-1" /> {project.location}
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.systems.map((system) => (
                                            <span
                                                key={system}
                                                className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-medium"
                                            >
                                                {system}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to start your project?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Every project starts with understanding your space and your goals.
                            Let's talk about what's possible for your property.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
