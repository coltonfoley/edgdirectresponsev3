"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    ArrowRight,
    Ruler,
    Zap,
    Compass,
    Droplets,
    DollarSign,
    AlertTriangle,
    HelpCircle,
    Construction,
    Snowflake,
    FileCheck,
    ChevronDown
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function GuideReadPage() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        // simple client-side gate
        const hasAccess = document.cookie
            .split("; ")
            .find((row) => row.startsWith("guide_access="));

        if (!hasAccess) {
            router.push("/guide");
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (!isAuthorized) {
        return null; // or a loading spinner
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="bg-white text-zinc-900 font-sans selection:bg-edg-brand/20">
            {/* COVER SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/guide-cover.png"
                        alt="Guide Cover"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                </div>

                <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
                    <div className="inline-block mb-8 px-5 py-2 rounded-full border border-edg-brand/30 bg-edg-brand/10 text-edg-brand text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                        The 2025 Homeowner's Report
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] drop-shadow-lg">
                        It's Time to Stop Apologizing <br className="hidden md:block" />
                        for the Weather.
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md">
                        The comprehensive guide to solving the Bug, Wind, and Rain problem for Chicago-Milwaukee homeowners.
                    </p>

                    <button
                        onClick={() => scrollToSection('chapter-1')}
                        className="animate-bounce inline-flex flex-col items-center gap-2 text-edg-brand/80 hover:text-edg-brand transition-colors text-sm font-medium uppercase tracking-widest"
                    >
                        Start Reading
                        <ChevronDown className="h-6 w-6" />
                    </button>
                </div>
            </section>

            {/* TABLE OF CONTENTS - Stickyish */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 hidden md:block">
                <Container>
                    <div className="flex justify-center gap-1">
                        {[
                            { id: 'chapter-1', label: '01. Options' },
                            { id: 'chapter-2', label: '02. Assessment' },
                            { id: 'chapter-3', label: '03. Budget' },
                            { id: 'chapter-4', label: '04. Mistakes' },
                            { id: 'chapter-5', label: '05. Checklist' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="px-6 py-4 text-sm font-bold text-zinc-500 hover:text-edg-brand hover:bg-zinc-50 transition-all border-b-2 border-transparent hover:border-edg-brand"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </div>

            {/* CHAPTER 1: THE PROBLEM & OPTIONS */}
            <section id="chapter-1" className="py-24 px-6 md:px-0 max-w-3xl mx-auto scroll-mt-24">
                <div className="prose prose-lg prose-zinc mx-auto">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Chapter 01</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-8 leading-tight">Understanding Your Options</h2>
                    <p className="lead text-2xl text-zinc-600 font-medium mb-8 leading-relaxed">
                        You spent $50,000 on a beautiful paver patio. You bought the expensive teak furniture. You even installed a fire pit. So why are you sitting <em>inside</em> looking at it?
                    </p>
                    <p>
                        If you live in the Midwest, you know the reality: we don't get 300 days of sunshine. We live in a region defined by extremes. Designing for "perfect weather" is a fool's errand.
                    </p>

                    <blockquote className="my-12 pl-8 border-l-4 border-edg-brand text-2xl font-serif italic text-zinc-800 bg-zinc-50 py-8 pr-8 rounded-r-xl">
                        "Most outdoor spaces are designed for the best 10 days of the year. We design for the other 355."
                    </blockquote>

                    <h3 className="text-3xl font-bold mt-16 mb-8 text-zinc-900">Furniture vs. Systems</h3>
                    <p>
                        At EDG, we don't sell furniture. We design <strong>Outdoor Living Systems</strong>. A system is an engineered solution to a specific environmental problem.
                    </p>

                    <div className="not-prose grid gap-6 my-12">
                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Droplets className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-1">The Roof Problem</h4>
                                <p className="text-zinc-600 text-sm">Sun glare rendering the patio unusable? Rain canceling your dinner party?</p>
                                <div className="mt-2 text-edg-brand font-bold text-sm">Solution: Adjustable Louvered Pergolas</div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <Zap className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-1">The Wall Problem</h4>
                                <p className="text-zinc-600 text-sm">Mosquitoes eating you alive? Wind blowing the napkins off the table?</p>
                                <div className="mt-2 text-edg-brand font-bold text-sm">Solution: Motorized Retractable Shades</div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                <Snowflake className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-1">The Temperature Problem</h4>
                                <p className="text-zinc-600 text-sm">Too cold to sit outside in October? Snow covering your expensive furniture?</p>
                                <div className="mt-2 text-edg-brand font-bold text-sm">Solution: Frameless Glass + Infrared Heat</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SYSTEM HIGHLIGHTS (Brief) */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-zinc-100 flex flex-col">
                            <div className="relative aspect-[4/3]">
                                <Image src="/images/pergolas/residential-black-r-blade-01.jpg" alt="Pergola" fill className="object-cover" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-bold text-xl mb-4">Louvered Pergolas</h3>
                                <p className="text-sm text-zinc-500 mb-6">Motorized aluminum roof that rotates 150°. Open for sun, closed for rain and snow.</p>
                                <ul className="space-y-2 text-sm text-zinc-700">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> 100% Watertight</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Integrated Gutters</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Smart Home Ready</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-zinc-100 flex flex-col">
                            <div className="relative aspect-[4/3]">
                                <Image src="/images/motorized-retractable-screens-patio.jpg" alt="Shades" fill className="object-cover" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-bold text-xl mb-4">Motorized Shades</h3>
                                <p className="text-sm text-zinc-500 mb-6">Wind and insect protection that disappears when you don't need it. Tensioned "zipper" track.</p>
                                <ul className="space-y-2 text-sm text-zinc-700">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Cuts Wind by 95%</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Bug-Free Zone</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Privacy Mesh</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-zinc-100 flex flex-col">
                            <div className="relative aspect-[4/3]">
                                <Image src="/images/frameless-sliding-glass-walls.jpg" alt="Glass" fill className="object-cover" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-bold text-xl mb-4">Sliding Glass</h3>
                                <p className="text-sm text-zinc-500 mb-6">Frameless panels that slide and stack. The ultimate winter-ready extension for your home.</p>
                                <ul className="space-y-2 text-sm text-zinc-700">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Clear, Open Views</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Thermal Protection</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-edg-brand" /> Seamless Transition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHAPTER 2: SITE ASSESSMENT */}
            <section id="chapter-2" className="py-24 px-6 md:px-0 max-w-3xl mx-auto scroll-mt-24">
                <div className="prose prose-lg prose-zinc mx-auto">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Chapter 02</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-8 leading-tight">Site Assessment</h2>
                    <p className="lead text-2xl text-zinc-600 font-medium mb-8">
                        Most people pick out the product first and check the house second. That is backwards.
                    </p>
                    <p>
                        Before you fall in love with a Pinterest photo, you need to understand the constraints of your physical space. Use this checklist to screen potential issues early.
                    </p>

                    <div className="not-prose space-y-8 mt-12">
                        <div className="flex gap-6">
                            <div className="h-14 w-14 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                                <Ruler className="h-7 w-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">1. Structural Integrity</h4>
                                <p className="text-zinc-600 mb-2">
                                    A louvered roof is heavy. With snow load, we are talking about thousands of pounds of dynamic force.
                                </p>
                                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800 flex gap-3">
                                    <AlertTriangle className="h-5 w-5 shrink-0" />
                                    If you are building on a deck, you will likely need to reinforce headers or pour new footings under the deck posts.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="h-14 w-14 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                                <Zap className="h-7 w-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">2. Electrical Capacity</h4>
                                <p className="text-zinc-600">
                                    You need power. Not just a standard outlet.
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-600">
                                    <li>Motorized shades and roofs typically require reliable power.</li>
                                    <li>Infrared heaters require <strong>dedicated 20-amp circuits</strong> (240V often needed).</li>
                                    <li>Do you have room in your breaker panel?</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="h-14 w-14 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                                <Compass className="h-7 w-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">3. Sun Orientation</h4>
                                <p className="text-zinc-600">
                                    Where does the sun hit at 5:00 PM in August? That's your enemy.
                                    <br />
                                    <span className="text-black font-bold">West-facing patios</span> are notoriously hot during dinner hours. This dictates where you need shades versus just a roof.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHAPTER 3: BUDGET */}
            <section id="chapter-3" className="py-24 bg-zinc-900 text-white scroll-mt-24">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-sm font-bold text-edg-brand uppercase tracking-wider mb-2">Chapter 03</div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Budget Planning</h2>
                        <p className="text-xp md:text-2xl text-gray-300 font-light mb-12">
                            Why "Get a Quote" is the most frustrating button on the internet. Here are the real numbers.
                        </p>

                        <div className="grid gap-6">
                            {/* Cost Card 1 */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">Automated Louvered Pergolas</h3>
                                    <p className="text-gray-400 text-sm">Including design, engineering, shipping, and installation.</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-edg-brand">$180 - $350</div>
                                    <div className="text-xs tracking-widest uppercase text-gray-500 font-bold mt-1">Per Square Foot</div>
                                </div>
                            </div>

                            {/* Cost Card 2 */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">Motorized Retractable Shades</h3>
                                    <p className="text-gray-400 text-sm">Depending on width (up to 26'), retention fabric, and mounting difficulty.</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-edg-brand">$3k - $12k</div>
                                    <div className="text-xs tracking-widest uppercase text-gray-500 font-bold mt-1">Per Unit Installed</div>
                                </div>
                            </div>

                            {/* Cost Card 3 */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">Frameless Glass Systems</h3>
                                    <p className="text-gray-400 text-sm">For creating true 4-season enclosures.</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-edg-brand">$50k - $150k+</div>
                                    <div className="text-xs tracking-widest uppercase text-gray-500 font-bold mt-1">Typical Project Total</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 rounded-xl bg-edg-brand/10 border border-edg-brand/20">
                            <h4 className="text-edg-brand font-bold uppercase tracking-wider text-sm mb-3">The "Hidden" Costs to Remember</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex gap-2"><DollarSign className="h-5 w-5 text-edg-brand" /> Permitting Fees (Township dependent)</li>
                                <li className="flex gap-2"><DollarSign className="h-5 w-5 text-edg-brand" /> Electrical Hookup (Licensed Electrician)</li>
                                <li className="flex gap-2"><DollarSign className="h-5 w-5 text-edg-brand" /> Concrete Footings (If adding to a patio)</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CHAPTER 4: MISTAKES */}
            <section id="chapter-4" className="py-24 px-6 md:px-0 max-w-3xl mx-auto scroll-mt-24">
                <div className="prose prose-lg prose-zinc mx-auto">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Chapter 04</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-8 leading-tight">7 Costly Mistakes</h2>
                    <p className="lead text-2xl text-zinc-600 font-medium mb-12">
                        In our 10+ years of building, these are the errors that cost homeowners time, money, and sanity.
                    </p>

                    <ol className="not-prose space-y-8 list-none m-0 p-0 text-zinc-800">
                        {[
                            { title: "Ignoring the HOA", desc: "The #1 project killer. Check your bylaws for 'pergola' or 'permanent structure' restrictions before you sign ANY contract." },
                            { title: "The 'DIY' Drainage", desc: "Water has to go somewhere. If your patio slopes toward the house, adding a roof without proper gutters is a recipe for a flooded basement." },
                            { title: "Cheaping out on the Motor", desc: "A motorized screen is only as good as its engine. We see 'white label' motors fail in 2 years. Stick to Somfy or known heavy-duty brands." },
                            { title: "Missing the 'Rough-In'", desc: "The time to run wire is BEFORE the concrete is poured or the patio is finished. Retrofitting power is expensive and messy." },
                            { title: "Wrong Color Choice", desc: "Dark colors absorb heat. A black framework looks modern, but a black roof slab? It turns your patio into an oven. Consider two-tone designs." },
                            { title: "Under-engineering for Snow", desc: "Florida products don't work in Chicago. Ensure your system is rated for at least 30-40psf snow load." },
                            { title: "No Permit Strategy", desc: "Hoping the village 'doesn't notice' is not a strategy. It leads to Stop Work Orders and fines. Do it right." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-6 items-start">
                                <span className="text-6xl font-black text-zinc-100 -mt-4 leading-none select-none">{i + 1}</span>
                                <div className="-ml-8 pt-2">
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CHAPTER 5: QUESTIONS */}
            <section id="chapter-5" className="py-24 bg-zinc-50 border-t border-zinc-200 scroll-mt-24">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Chapter 05</div>
                            <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-4">The Contractor Interrogation Checklist</h2>
                            <p className="text-xl text-zinc-600">Don't sign until you get good answers to these questions.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Who handles the permit application? (They should.)",
                                "Can I see a project you installed 5 years ago?",
                                "Is the motor UL listed?",
                                "What is the exact wind rating? (Ask for the engineering packet)",
                                "Does your quote include the electrical hookup?",
                                "What happens if the motor fails in year 4?",
                                "Are your installers employees or subcontractors?",
                                "How do you handle drainage/downspouts?"
                            ].map((q, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
                                    <HelpCircle className="h-6 w-6 text-edg-brand shrink-0 mt-0.5" />
                                    <span className="font-medium text-zinc-800">{q}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>            {/* FINAL CTA */}
            <section className="py-32 bg-zinc-900 text-white text-center">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Construction className="h-16 w-16 text-edg-brand mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Stop Researching.<br />Start Planning.</h2>
                        <p className="text-xl text-gray-400 mb-12">
                            You know the options. You know the costs. You know the risks.
                            Now let's verify your site and get you a real design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-edg-brand text-zinc-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(66,255,193,0.3)] hover:shadow-[0_0_30px_rgba(66,255,193,0.5)]"
                            >
                                Book Your Design Consultation <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-gray-500">
                            No pressure. No sales tactics. Just engineering and design.
                        </p>
                    </div>
                </Container>
            </section>

        </main>
    );
}
