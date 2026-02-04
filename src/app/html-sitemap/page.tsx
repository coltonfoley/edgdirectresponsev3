import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | EDG Outdoor Living",
    description: "Complete overview of pages on EDG Outdoor Living website.",
    alternates: {
        canonical: "/html-sitemap",
    },
};

const sitemapLinks = [
    {
        category: "Main",
        links: [
            { href: "/", label: "Home" },
            { href: "/contact", label: "Contact" },
            { href: "/design", label: "Design Process" },
            { href: "/price", label: "Pricing" },
            { href: "/pro", label: "For Pros" },
            { href: "/gallery", label: "Gallery" },
        ]
    },
    {
        category: "Systems",
        links: [
            { href: "/systems", label: "All Systems" },
            { href: "/systems/pergolas", label: "Louvered Pergolas" },
            { href: "/systems/shades", label: "Motorized Shades" },
            { href: "/systems/enclosures", label: "Glass Enclosures" },
            { href: "/systems/appliances", label: "Outdoor Appliances" },
        ]
    },
    {
        category: "Commercial",
        links: [
            { href: "/commercial", label: "Commercial Solutions" },
            { href: "/commercial/chicago-hospitality-outdoor-living", label: "Hospitality Outdoor Living" },
            { href: "/commercial/restaurant-patio-enclosures", label: "Restaurant Patio Enclosures" },
            { href: "/commercial/hotel-roof-deck-systems", label: "Hotel Roof Deck Systems" },
            { href: "/commercial/country-club-outdoor-spaces", label: "Country Club Context" },
            { href: "/commercial/west-loop", label: "West Loop Projects" },
        ]
    },
    {
        category: "Service Areas",
        links: [
            { href: "/service-areas", label: "All Service Areas" },
            { href: "/service-areas/north-shore-chicago", label: "North Shore Chicago" },
            { href: "/service-areas/lake-county-il", label: "Lake County, IL" },
            { href: "/service-areas/mchenry-county-il", label: "McHenry County, IL" },
            { href: "/service-areas/barrington-il", label: "Barrington, IL" },
            { href: "/service-areas/naperville-il", label: "Naperville, IL" },
            { href: "/service-areas/hinsdale-il", label: "Hinsdale, IL" },
            { href: "/service-areas/oak-brook-il", label: "Oak Brook, IL" },
            { href: "/service-areas/southeast-wisconsin", label: "Southeast Wisconsin" },
            { href: "/service-areas/lake-geneva-wi", label: "Lake Geneva, WI" },
            { href: "/service-areas/sanibel-outdoor-living", label: "Sanibel, FL" },
        ]
    },
    {
        category: "Resources",
        links: [
            { href: "/guides", label: "Knowledge Base" },
            { href: "/guides/planning-guide", label: "Planning Guide" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Sitemap</h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            Overview of all pages on our website.
                        </p>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                            {sitemapLinks.map((section) => (
                                <div key={section.category}>
                                    <h2 className="text-xl font-bold mb-4 text-edg-brand-text dark:text-edg-brand">
                                        {section.category}
                                    </h2>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
