import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | EDG Patio & Shade",
    description: "Privacy Policy for EDG Patio & Shade. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Section className="pb-16 pt-24 md:pt-32">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                            <p className="text-lg">
                                Last Updated: January 13, 2026
                            </p>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                                <p>
                                    Welcome to <strong>EDG Patio & Shade</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                                <p>
                                    We may collect information about you in a variety of ways. The information we may collect on the website includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website, such as online chat and message boards.</li>
                                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.</li>
                                    <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the website.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">3. Use of Your Information</h2>
                                <p>
                                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Create and manage your account.</li>
                                    <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                                    <li>Improve our website and marketing efforts.</li>
                                    <li>Send you newsletters, marketing communications, and other information about our products and services.</li>
                                    <li>Respond to your comments, questions, and customer service requests.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">4. Disclosure of Your Information</h2>
                                <p>
                                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">5. Security of Your Information</h2>
                                <p>
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">6. Policy for Children</h2>
                                <p>
                                    We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
                                <p>
                                    If you have questions or comments about this Privacy Policy, please contact us at:
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
