import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, Clock, XCircle,
    FileText, UploadCloud, Users, Phone, Shield, Wrench
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Builders & Architects | Trade Partner Program",
    description: "Partner with EDG for motorized pergolas, shades, and glass enclosures on your residential projects. 48-hour takeoffs, engineering coordination, and trade pricing. Chicago & Milwaukee area.",
    openGraph: {
        title: "Builder & Trade Partner Program | EDG",
        description: "Shading solutions for builders and architects. Trade pricing, fast takeoffs, schedule coordination.",
    },
};

export default function ProPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="pb-16 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-edg-gray hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand font-semibold mb-4 uppercase tracking-wider text-sm">For Builders, Architects & GCs</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Stop subbing out complexity.<br />
                            <span className="text-muted-foreground">Partner with a specialist.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Motorized pergolas and shading systems are high-margin upgrades—but one bad install kills your reputation.
                            We handle the technical details so you can focus on building.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact?type=pro&action=plans">
                                <Button size="lg" className="rounded-full">
                                    <UploadCloud className="mr-2 h-5 w-5" /> Upload Plans for Takeoff
                                </Button>
                            </Link>
                            <Link href="/contact?type=pro">
                                <Button size="lg" variant="secondary" className="rounded-full">
                                    Request Spec Sheets
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== PROBLEM AGITATION ========== */}
            <Section className="bg-zinc-950 text-white py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            When shading is an afterthought, projects fail.
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: XCircle,
                                    title: "Structural surprises",
                                    desc: "The beam can't handle the load. The attachment points don't exist. Your schedule slips."
                                },
                                {
                                    icon: Clock,
                                    title: "Lead time disasters",
                                    desc: "Custom aluminum takes 6-8 weeks. If you spec it wrong, you wait again. Delays cost money."
                                },
                                {
                                    icon: Wrench,
                                    title: "Warranty callbacks",
                                    desc: "The shade motor fails in year two. The louvers leak. Your client calls you, not the supplier."
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
                                We're your shading department.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Think of us as a specialty sub who actually shows up prepared. We handle design,
                                engineering, procurement, and installation—so you can deliver a premium upgrade
                                without the headaches.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: "48-hour takeoffs", desc: "Upload plans, get detailed scope and pricing in 2 business days" },
                                    { title: "Engineering coordination", desc: "We work directly with your structural engineer" },
                                    { title: "Schedule integration", desc: "We show up when you need us, not when it's convenient for us" },
                                    { title: "Single point of contact", desc: "One person owns your project from takeoff to punch list" },
                                    { title: "Our warranty, your reputation", desc: "If something fails, we fix it. Period." },
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
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white text-xl font-medium">Builder project in North Shore, completed on schedule</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== TRADE SERVICES ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trade Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <FileText className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Technical Documentation</h3>
                            <p className="text-muted-foreground mb-4">
                                DWG files, Revit families, and spec sheets for all our systems. Integration-ready for your drawings.
                            </p>
                            <Link href="/contact?type=pro&action=specs" className="text-edg-brand font-semibold hover:underline">
                                Request Specs →
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <UploadCloud className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Plan Takeoffs</h3>
                            <p className="text-muted-foreground mb-4">
                                Upload your plans. We return detailed scope, pricing, and lead time estimates within 48 hours.
                            </p>
                            <Link href="/contact?type=pro&action=plans" className="text-edg-brand font-semibold hover:underline">
                                Upload Plans →
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <Users className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Site Coordination</h3>
                            <p className="text-muted-foreground mb-4">
                                Pre-install meetings, progress updates, and flexible scheduling to fit your project timeline.
                            </p>
                            <Link href="/contact?type=pro" className="text-edg-brand font-semibold hover:underline">
                                Schedule a Call →
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== CASE STUDY ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Builder Success Story</h2>
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Lake Forest Custom Home</h3>
                                    <p className="text-muted-foreground mb-6">
                                        A high-end residential builder needed a 450 sq ft louvered pergola with integrated shades
                                        and heating for a $3M new construction. Timeline was tight—6 weeks from decision to install.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Takeoff delivered: 24 hours",
                                            "Engineering approval: 5 days",
                                            "Materials on site: 4 weeks",
                                            "Install complete: 3 days",
                                            "Client satisfaction: Perfect"
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-edg-brand shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <blockquote className="text-xl font-medium leading-relaxed mb-6">
                                        "EDG made shading the easiest part of the project. No delays, no surprises, no callbacks.
                                        That's rare in this business."
                                    </blockquote>
                                    <div>
                                        <div className="font-bold">Tom Reynolds</div>
                                        <div className="text-muted-foreground">Reynolds Custom Homes, Barrington</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== GUARANTEE ========== */}
            <Section className="bg-edg-brand text-edg-dark py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <Shield className="h-12 w-12 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Our Trade Guarantee</h2>
                        <p className="text-xl leading-relaxed">
                            If we miss our quoted lead time by more than 5 business days (for reasons within our control),
                            we'll credit 5% of the install cost. We show up when we say we will.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== MORE TESTIMONIALS ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">What Builders Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                quote: "Fastest takeoffs I've ever received. 24 hours, detailed, accurate. That's unheard of.",
                                name: "Mark S.",
                                company: "Lakeside Builders, Lake Geneva"
                            },
                            {
                                quote: "They integrate seamlessly into our build schedule. It's like having a shading department without the overhead.",
                                name: "Jennifer K.",
                                company: "JK Architecture, Highland Park"
                            }
                        ].map((item) => (
                            <div key={item.name} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                                <blockquote className="text-lg mb-6 leading-relaxed">"{item.quote}"</blockquote>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">{item.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FAQ ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">Trade FAQ</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "Do you offer trade pricing?",
                                a: "Yes. We have standard trade margins for qualified builders, architects, and design professionals. Contact us to set up a trade account."
                            },
                            {
                                q: "Can you work with our engineer?",
                                a: "Absolutely. We coordinate directly with your structural engineer to ensure attachment points, loads, and specs all align."
                            },
                            {
                                q: "What's your lead time for materials?",
                                a: "Standard pergola systems: 4-6 weeks. Shades: 3-4 weeks. Glass enclosures: 6-8 weeks. We can expedite for rush projects (fees apply)."
                            },
                            {
                                q: "Do you install, or just supply?",
                                a: "Both. We prefer to install what we supply (warranty reasons), but we can supply-only for qualified installers with appropriate documentation."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
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
                            Let's talk about your next project.
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Upload plans for a quick takeoff, or schedule a call to discuss trade partnership.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=pro&action=plans">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    <UploadCloud className="mr-2 h-5 w-5" /> Upload Plans
                                </Button>
                            </Link>
                            <a href="tel:+18475551234">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 border-white/30 text-white hover:bg-white/10">
                                    <Phone className="mr-2 h-5 w-5" /> (847) 555-1234
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
