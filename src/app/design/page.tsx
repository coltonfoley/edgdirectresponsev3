import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, XCircle, AlertTriangle,
    Clock, DollarSign, Shield, Users, Phone
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outdoor Living Design Consultation | Chicago & Milwaukee",
    description: "Free design consultation for motorized pergolas, exterior shades, and glass enclosures. Serving Lake County IL, McHenry County, and Southeast Wisconsin. Expert site assessment and planning.",
    openGraph: {
        title: "Outdoor Living Design Consultation | EDG",
        description: "Free design consultation for premium outdoor living systems. Serving Chicago to Milwaukee.",
    },
};

export default function DesignPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO: LEAD WITH THE PROBLEM ========== */}
            <Section className="pb-16 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">For Homeowners Who Want It Done Right</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            $40,000 outdoor projects fail every day.<br />
                            <span className="text-muted-foreground">Yours doesn't have to.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            The pergola that floods your patio. The shades that rip in the first storm.
                            The glass enclosure that fogs up every morning. These aren't product failures—they're <strong>planning failures</strong>.
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            We help you avoid them before you spend a dime on materials.
                        </p>
                        <Link href="/contact?type=design">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Get Your Free Design Assessment <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-4">15-minute call. No obligation. No sales pressure.</p>
                    </div>
                </Container>
            </Section>

            {/* ========== PROBLEM AGITATION: THE STAKES ========== */}
            <Section className="bg-zinc-950 text-white py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What happens when you skip the design phase?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: DollarSign,
                                    title: "$8,000+ in change orders",
                                    desc: "Contractors discover issues mid-project. You pay to fix them."
                                },
                                {
                                    icon: Clock,
                                    title: "3-month delays",
                                    desc: "Permits get rejected. Structural engineers get involved. Your summer is gone."
                                },
                                {
                                    icon: XCircle,
                                    title: "A system you regret",
                                    desc: "Wrong product for your climate. Wrong size for your space. Wrong everything."
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
                        <div className="text-center mt-12">
                            <p className="text-xl text-gray-300">We've seen it hundreds of times. Don't let it happen to you.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== THE SOLUTION: OUR APPROACH ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Our design-first approach<br />protects your investment.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Before we recommend a single product, we understand your site, your climate,
                                your usage patterns, and your goals. Then—and only then—we match you with the right system.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: "Site-specific climate analysis", desc: "Wind loads, sun angles, snow loads for YOUR property" },
                                    { title: "Architectural integration", desc: "How the system connects to your home's structure" },
                                    { title: "Permit & engineering review", desc: "What your municipality requires—before you apply" },
                                    { title: "System matching", desc: "The right product for your goals, not the one with the best margins" },
                                    { title: "Detailed scope & budget", desc: "Know exactly what you're getting and what it costs" },
                                ].map((item) => (
                                    <li key={item.title} className="flex items-start gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-edg-brand-text dark:text-edg-brand shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold">{item.title}</div>
                                            <div className="text-edg-gray-text dark:text-gray-400 text-sm">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden bg-black min-h-[500px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/frameless-sliding-glass-walls.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white text-xl font-medium">A custom outdoor living space with retractable glass walls in Barrington, IL</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== WHAT'S INCLUDED ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
                        What you get from a design consultation
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        This isn't a sales call. It's a planning session that gives you clarity—whether you work with us or not.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Site Feasibility Report", desc: "Can your property support what you want? We'll tell you." },
                            { title: "System Recommendations", desc: "2-3 options matched to your goals and budget" },
                            { title: "Budget Range", desc: "Realistic investment expectations, not bait-and-switch quotes" },
                            { title: "Timeline Estimate", desc: "When you could realistically be enjoying your new space" },
                        ].map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-200/50 dark:border-zinc-700">
                                <CheckCircle2 className="h-8 w-8 text-edg-brand-text dark:text-edg-brand mb-4" />
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-edg-gray-text dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/contact?type=design">
                            <Button size="lg" className="rounded-full">
                                Schedule Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* ========== THE PROCESS ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
                        From first call to finished project
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        A clear, predictable process. No surprises.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Discovery Call", desc: "15 minutes to understand your vision, timeline, and budget.", time: "Day 1" },
                            { step: "2", title: "Site Visit", desc: "We measure, photograph, and assess your property in person.", time: "Within 1 week" },
                            { step: "3", title: "Design Proposal", desc: "Detailed recommendation with system specs, drawings, and pricing.", time: "Within 2 weeks" },
                            { step: "4", title: "Project Execution", desc: "Permitting, ordering, installation, and final walkthrough.", time: "4-8 weeks" },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="h-14 w-14 rounded-full bg-edg-brand text-edg-dark text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-edg-gray-text dark:text-gray-400 mb-2">{item.desc}</p>
                                <p className="text-xs font-bold text-edg-brand-text dark:text-edg-brand uppercase tracking-wider">{item.time}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== RISK REVERSAL ========== */}
            <Section className="bg-edg-brand text-edg-dark py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <Shield className="h-12 w-12 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
                        <p className="text-xl leading-relaxed">
                            If we discover during our assessment that your project isn't feasible, won't meet your goals,
                            or isn't a good fit for what we do—we'll tell you. No hard sell. No wasted time.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== TESTIMONIALS ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">What our clients say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "EDG helped us see possibilities we hadn't considered. Their design guidance saved us from making a $15,000 mistake.",
                                name: "Mike & Sarah T.",
                                location: "Libertyville, IL",
                                project: "Louvered Pergola"
                            },
                            {
                                quote: "I came in thinking I needed glass enclosures. They showed me why motorized shades would actually work better for our situation.",
                                name: "Jennifer L.",
                                location: "Lake Bluff, IL",
                                project: "Motorized Shades"
                            },
                            {
                                quote: "The site assessment caught a drainage issue that would have ruined our pergola. Worth every penny just for that.",
                                name: "Tom & Linda R.",
                                location: "Barrington, IL",
                                project: "Pergola + Shades"
                            }
                        ].map((item) => (
                            <div key={item.name} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                                <blockquote className="text-lg mb-6 leading-relaxed">"{item.quote}"</blockquote>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-sm text-edg-gray-text dark:text-gray-400 font-medium">{item.location}</div>
                                    <div className="text-sm text-edg-brand-text dark:text-edg-brand font-bold mt-1 uppercase tracking-tight">{item.project}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FAQ ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "How much does the design consultation cost?",
                                a: "The initial discovery call is free. If we move forward with a site visit and detailed proposal, there's a design fee that gets credited toward your project if you proceed with us."
                            },
                            {
                                q: "What if I already know what system I want?",
                                a: "Great! We'll validate your choice and make sure it's the right fit for your specific site. Sometimes clients come in wanting a pergola and leave with a better solution. Sometimes we confirm their instincts. Either way, you'll have confidence."
                            },
                            {
                                q: "How long does the whole process take?",
                                a: "From first call to enjoying your new space: typically 6-10 weeks for standard projects. Complex projects or those requiring significant permitting can take longer. We'll give you a realistic timeline upfront."
                            },
                            {
                                q: "Do you only work in the Chicago area?",
                                a: "We design and install within 60 miles of Spring Grove, IL (north Chicago to Milwaukee). For projects outside that area, we can provide design consulting and connect you with qualified installers."
                            },
                            {
                                q: "What if my project isn't feasible?",
                                a: "We'll tell you upfront. If your property can't support what you want, or if your budget doesn't align with your goals, we'd rather be honest than waste your time. That's the whole point of starting with design."
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
                            Ready to plan your four-season outdoor space?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Start with a free 15-minute discovery call. We'll listen to your goals,
                            answer your questions, and tell you honestly if we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=design">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Schedule Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
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
