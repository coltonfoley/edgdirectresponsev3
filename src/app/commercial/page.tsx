import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, DollarSign, CloudRain,
    BarChart3, ShieldCheck, Zap, Phone, Shield, TrendingUp
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Outdoor Shading | Restaurants & Hospitality",
    description: "Commercial pergolas and shade systems for restaurants, hotels, and country clubs in Chicago & Milwaukee. Eliminate weather cancellations, extend patio season, increase revenue.",
    openGraph: {
        title: "Commercial Outdoor Solutions | EDG",
        description: "Turn your patio into a profit center. Commercial-grade pergolas and shading for hospitality.",
    },
};

export default function CommercialPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="pb-16 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">For Restaurants, Hotels & Hospitality</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Turn weather from a liability<br />
                            <span className="text-muted-foreground">into a revenue driver.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Every rained-out patio night costs you $3,000-$10,000 in lost covers.
                            Every blazing hot afternoon drives guests inside—or to your competitor with the shaded patio.
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            We build outdoor infrastructure that <strong>pays for itself in one season</strong>.
                        </p>
                        <TrackedLink href="/contact?type=commercial">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Schedule Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </TrackedLink>
                    </div>
                </Container>
            </Section>

            {/* ========== PROBLEM AGITATION ========== */}
            <Section className="bg-zinc-950 text-white py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            The real cost of unprotected outdoor space
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: CloudRain,
                                    title: "42 days of rain",
                                    desc: "That's the Chicago-area average. Each rainy evening costs $3-10K in lost revenue. That's $150K+ per year."
                                },
                                {
                                    icon: DollarSign,
                                    title: "8 weeks of heat",
                                    desc: "July and August afternoons drive guests inside. Your premium patio seats sit empty. Revenue walks next door."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Shortened season",
                                    desc: "Without protection, your patio is profitable May-September. With it? April-November. That's 10 extra weeks of revenue."
                                }
                            ].map((item) => (
                                <div key={item.title} className="text-center">
                                    <div className="h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="h-8 w-8 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== THE SOLUTION ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                All-weather infrastructure that prints money.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Our commercial systems are engineered for high-cycle usage, extreme weather, and decades of
                                reliable operation. This isn't residential equipment—it's commercial infrastructure.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: "Rain-proof in 60 seconds", desc: "Motorized louvers close completely. Guests stay dry." },
                                    { title: "80%+ heat reduction", desc: "Shades and louvers block sun without blocking the view." },
                                    { title: "Wind rated to 90+ mph", desc: "Built for Midwest storms. No emergency retraction panic." },
                                    { title: "Minimal maintenance", desc: "Commercial-grade components. Annual service, not monthly repairs." },
                                    { title: "10-year structural warranty", desc: "We stand behind what we build." },
                                ].map((item) => (
                                    <li key={item.title} className="flex items-start gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-edg-brand shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold">{item.title}</div>
                                            <div className="text-muted-foreground text-sm">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden bg-black min-h-[500px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/commercial-restaurant-patio-enclosure.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white text-xl font-medium">Restaurant patio in Lake Geneva, WI</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== INDUSTRIES ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Restaurants & Bars", desc: "Expand covers, eliminate cancellations", highlight: "+40-80 covers/night" },
                            { title: "Hotels & Resorts", desc: "Premium guest amenities, event space", highlight: "Year-round bookings" },
                            { title: "Country Clubs", desc: "Pool decks, outdoor dining, events", highlight: "Member retention" },
                            { title: "Corporate Campuses", desc: "Employee wellness, outdoor meetings", highlight: "Recruitment edge" },
                        ].map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl text-center shadow-sm border border-zinc-100 dark:border-zinc-700">
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-edg-gray-text dark:text-gray-400 mb-4">{item.desc}</p>
                                <div className="text-edg-brand-text dark:text-edg-brand font-bold">{item.highlight}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== ROI CASE STUDY ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Real ROI: One Season Payback</h2>
                        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            Numbers from an actual commercial installation in the Chicago/Milwaukee region.
                        </p>
                        <div className="bg-edg-dark text-white rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Lakeside Restaurant</h3>
                                    <p className="text-gray-400 mb-6">Lake Geneva, WI • Fine Dining</p>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Project</div>
                                            <div className="text-lg">16x20 Louvered Pergola + Integrated Heating</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Investment</div>
                                            <div className="text-3xl font-bold text-edg-brand">$62,000</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Results (First Season)</div>
                                            <ul className="space-y-2">
                                                {[
                                                    "40 additional covered seats",
                                                    "Zero weather cancellations",
                                                    "Season extended by 8 weeks",
                                                    "$180,000 additional revenue"
                                                ].map((item) => (
                                                    <li key={item} className="flex items-center gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-edg-brand shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-800 p-8 rounded-2xl">
                                    <blockquote className="text-xl font-medium leading-relaxed mb-6">
                                        "The pergola paid for itself by July. Our patio went from a liability to our single biggest revenue driver.
                                        We booked $180K in additional covers the first summer alone."
                                    </blockquote>
                                    <div>
                                        <div className="font-bold">Restaurant Owner</div>
                                        <div className="text-gray-400">Name withheld for privacy</div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <div className="text-sm text-gray-400">ROI achieved in</div>
                                        <div className="text-3xl font-bold text-edg-brand">4 months</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== CAPABILITIES ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Commercial Capabilities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                            <BarChart3 className="h-10 w-10 text-edg-brand-text dark:text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">ROI Analysis</h3>
                            <p className="text-edg-gray-text dark:text-gray-400">
                                We'll help you model the revenue impact based on your covers, average ticket, and local weather patterns.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                            <ShieldCheck className="h-10 w-10 text-edg-brand-text dark:text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Commercial-Grade Systems</h3>
                            <p className="text-edg-gray-text dark:text-gray-400">
                                Higher duty cycles, reinforced structures, and components rated for decades of daily use.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                            <Zap className="h-10 w-10 text-edg-brand-text dark:text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
                            <p className="text-edg-gray-text dark:text-gray-400">
                                We understand restaurant timelines. Most commercial installs complete in 3-5 days with minimal disruption.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== SERVICE COMMITMENT ========== */}
            <Section className="bg-edg-brand text-edg-dark py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <Shield className="h-12 w-12 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Commercial Priority Service</h2>
                        <p className="text-xl leading-relaxed">
                            For hospitality and restaurant operators, downtime is lost revenue. We provide
                            priority support and local parts stocking to ensure your patio stays open and profitable.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== MORE TESTIMONIALS ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">What Business Owners Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                quote: "We went from canceling 15-20 reservations per storm to zero. The ROI was obvious within the first month.",
                                name: "Managing Partner",
                                business: "Fine Dining Restaurant, Wilmette"
                            },
                            {
                                quote: "Our members can use the pool deck in any weather now. It's become our most popular amenity.",
                                name: "General Manager",
                                business: "Private Country Club, Barrington"
                            }
                        ].map((item) => (
                            <div key={item.name} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl">
                                <blockquote className="text-lg mb-6 leading-relaxed">"{item.quote}"</blockquote>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">{item.business}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FAQ ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">Commercial FAQ</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "How quickly can you install?",
                                a: "Most commercial projects install in 3-5 days. We can work around your operating hours—early mornings, late nights, or closed days."
                            },
                            {
                                q: "Do I need city permits?",
                                a: "Usually yes. We handle the entire permit process, including any engineering requirements. This is typically 2-4 weeks depending on your municipality."
                            },
                            {
                                q: "What's the maintenance requirement?",
                                a: "Annual service visit recommended. We clean, lubricate, and inspect all components. Most operators never think about the system between services."
                            },
                            {
                                q: "Can this integrate with our existing structure?",
                                a: "Almost always. We've attached to historic buildings, modern steel, wood pergolas, and freestanding structures. Site assessment will confirm feasibility."
                            },
                            {
                                q: "What if something breaks during service?",
                                a: "Commercial clients receive priority support. We stock common parts locally, and most issues are resolved within 24-48 hours to minimize any impact on your seating."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-800 p-6 rounded-xl">
                                <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                                <p className="text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FINAL CTA ========== */}
            <Section className="bg-edg-dark text-white py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to turn your patio into a profit center?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Schedule a free site assessment. We'll walk your space, discuss your goals,
                            and show you what's possible—with real numbers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/contact?type=commercial">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Schedule Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                            <TrackedPhoneLink href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 border-white/30 text-white hover:bg-white/10">
                                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                                </Button>
                            </TrackedPhoneLink>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
