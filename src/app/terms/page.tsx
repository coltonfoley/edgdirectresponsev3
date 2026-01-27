import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | EDG Patio & Shade",
    description: "Terms of Service for EDG Patio & Shade. Learn about the terms and conditions for using our website and services.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Section className="pb-16 pt-24 md:pt-32">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                            Terms of Service
                        </h1>

                        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                            <p className="text-lg">
                                Last Updated: January 13, 2026
                            </p>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using the <strong>EDG Patio & Shade</strong> website (the "Site") and our services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
                                <p>
                                    <strong>EDG Patio & Shade</strong> provides premium outdoor living solutions, including motorized pergolas, exterior shades, and glass enclosures. Our Site provides information about our products, allows users to request quotes, and facilitates consultations.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">3. User Conduct</h2>
                                <p>
                                    You agree to use the Site only for lawful purposes. You are prohibited from:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Violating any applicable local, state, national, or international law.</li>
                                    <li>Attempting to interfere with the proper working of the Site.</li>
                                    <li>Using any robot, spider, or other automatic device to monitor or copy our web pages or the content contained therein.</li>
                                    <li>Transmitting any viruses, worms, or malicious code.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
                                <p>
                                    All content on the Site, including text, graphics, logos, images, and software, is the property of <strong>EDG Patio & Shade</strong> or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works from any part of the Site without our express written consent.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">5. Disclaimer of Warranties</h2>
                                <p>
                                    The Site and our services are provided on an "as is" and "as available" basis. <strong>EDG Patio & Shade</strong> makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, or materials included on the Site.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
                                <p>
                                    In no event shall <strong>EDG Patio & Shade</strong>, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the Site or our services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">7. Governing Law</h2>
                                <p>
                                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">8. Changes to Terms</h2>
                                <p>
                                    We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the new Terms of Service.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                    <p className="font-bold text-foreground">EDG Patio & Shade</p>
                                    <p>1802 Holian Drive</p>
                                    <p>Spring Grove, IL 60081</p>
                                    <p>Email: info@edgpatioshade.com</p>
                                    <p>Phone: (815) 581-0138</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
