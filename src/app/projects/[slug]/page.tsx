import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2, Calendar, Ruler, Clock } from "lucide-react";
import { notFound } from "next/navigation";

import { getAllProjects, getProject } from "@/lib/projects";

// Project data imported from central source

export async function generateStaticParams() {
    return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <section className="relative h-[60vh] min-h-[500px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
                    <Link href="/gallery" className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to gallery
                    </Link>
                    <span className="px-3 py-1 bg-edg-brand text-edg-dark rounded-full text-sm font-semibold w-fit mb-4">
                        {project.type}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {project.title}
                    </h1>
                    <div className="flex items-center text-white/80">
                        <MapPin className="h-5 w-5 mr-2" /> {project.location}
                    </div>
                </Container>
            </section>

            {/* ========== PROJECT DETAILS ========== */}
            <Section className="py-16 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Challenge */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Results */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Results</h2>
                                <ul className="space-y-3">
                                    {project.results.map((result, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Gallery */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {project.galleryImages.map((img, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-xl overflow-hidden bg-cover bg-center"
                                            style={{ backgroundImage: `url('${img}')` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Specs */}
                            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-4">Project Specs</h3>
                                <dl className="space-y-4">
                                    {project.specs.map((spec) => (
                                        <div key={spec.label}>
                                            <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                                            <dd className="font-medium">{spec.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            {/* Systems Used */}
                            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-4">Systems Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.systems.map((system) => (
                                        <span
                                            key={system}
                                            className="px-3 py-1 bg-edg-brand/10 text-edg-brand rounded-full text-sm font-medium"
                                        >
                                            {system}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            {project.testimonial && (
                                <div className="bg-edg-dark text-white rounded-2xl p-6">
                                    <blockquote className="text-lg mb-4 leading-relaxed">
                                        "{project.testimonial.quote}"
                                    </blockquote>
                                    <div>
                                        <div className="font-bold">{project.testimonial.name}</div>
                                        <div className="text-sm text-gray-400">{project.testimonial.title}</div>
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-edg-brand text-edg-dark rounded-2xl p-6 text-center">
                                <h3 className="font-bold text-lg mb-2">Start your project</h3>
                                <p className="text-sm mb-4">Let's discuss what's possible for your space.</p>
                                <Link href="/contact">
                                    <Button variant="secondary" className="w-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== RELATED PROJECTS ========== */}
            <Section className="py-16 bg-zinc-100 dark:bg-zinc-950">
                <Container>
                    <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.relatedProjects.map((relatedSlug) => {
                            const related = getProject(relatedSlug);
                            if (!related) return null;
                            return (
                                <Link
                                    key={relatedSlug}
                                    href={`/projects/${relatedSlug}`}
                                    className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300 flex"
                                >
                                    <div
                                        className="w-1/3 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${related.heroImage}')` }}
                                    />
                                    <div className="w-2/3 p-6">
                                        <span className="text-xs font-semibold text-edg-brand">{related.type}</span>
                                        <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-edg-brand transition-colors">
                                            {related.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-1" /> {related.location}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
