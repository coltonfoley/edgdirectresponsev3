import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin, Snowflake, Home, FileCheck, Wind, Sun } from "lucide-react";

interface Challenge {
    title: string;
    description: string;
    icon: "snowflake" | "home" | "file-check" | "wind" | "sun";
}

interface ServiceAreaLink {
    title: string;
    href: string;
}

interface ServiceAreaLayoutProps {
    location: string;
    state: string;
    zipCodes: string[];
    tagline: string;
    heroImage?: string;
    description: string;
    challenges: Challenge[];
    links: ServiceAreaLink[];
}

const IconMap = {
    snowflake: Snowflake,
    home: Home,
    "file-check": FileCheck,
    wind: Wind,
    sun: Sun,
};

export function ServiceAreaLayout({
    location,
    state,
    tagline,
    heroImage,
    description,
    challenges,
    links,
    zipCodes
}: ServiceAreaLayoutProps) {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* Hero Section */}
            <Section className="pt-32 pb-20 bg-white dark:bg-black border-b border-black/5 dark:border-white/10">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-edg-brand/10 text-edg-brand-text text-sm font-medium">
                                <MapPin className="h-4 w-4" />
                                Serving {location} ({zipCodes.join(", ")})
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                                {tagline}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contact">
                                    <Button size="lg">Get a {location} Quote</Button>
                                </Link>
                                <Link href="tel:+18155810138">
                                    <Button variant="secondary" size="lg">Call (815) 581-0138</Button>
                                </Link>
                            </div>
                        </div>
                        {/* Visual Placeholder for Hero - In real app we use Next Image */}
                        <div className="w-full md:w-1/2 aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                {heroImage ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={heroImage} alt={`${location} Outdoor Living`} className="w-full h-full object-cover" />
                                ) : (
                                    <span>Map / Hero Image of {location}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Local Challenges Section */}
            <Section className="py-20 bg-edg-light/50 dark:bg-edg-dark/50">
                <Container>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Building in {location}</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Every neighborhood has unique challenges. We've optimized our automated systems to handle {location}'s specific zoning and weather demands.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {challenges.map((challenge, idx) => {
                            const Icon = IconMap[challenge.icon] || Home;
                            return (
                                <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-black/5 dark:border-white/10">
                                    <div className="h-12 w-12 rounded-full bg-edg-brand/20 flex items-center justify-center mb-6 text-edg-brand-text">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                                    <p className="text-muted-foreground">{challenge.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Internal Linking / Cluster Navigation */}
            <Section className="py-20 bg-white dark:bg-black border-t border-black/5 dark:border-white/10">
                <Container>
                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Resources for {location} Homeowners</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {links.map((link, idx) => (
                                <Link key={idx} href={link.href} className="group block h-full">
                                    <div className="bg-white dark:bg-black p-6 rounded-xl border border-black/5 dark:border-white/10 h-full hover:border-edg-brand/50 transition-colors flex flex-col justify-between">
                                        <span className="font-semibold text-lg group-hover:text-edg-brand-text transition-colors">
                                            {link.title}
                                        </span>
                                        <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-edg-brand-text">
                                            Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
