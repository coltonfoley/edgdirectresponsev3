'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { useLeadSubmission } from '@/hooks/useLeadSubmission';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ContactContent {
  heroHeadline?: string;
  heroDescription?: string;
  sidebarTitle?: string;
  processSteps?: ProcessStep[];
  contactTitle?: string;
  phone?: string;
  phoneRaw?: string;
  hours?: string;
  locationName?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
}

// Fallback content
const fallbackContent: ContactContent = {
  heroHeadline: "Let's start the right conversation.",
  heroDescription: "Tell us about yourself and your project. We'll respond within 1 business day with next steps tailored to your needs.",
  sidebarTitle: "What happens next?",
  processSteps: [
    { step: 1, title: "We review your request", description: "Within 1 business day" },
    { step: 2, title: "Discovery call (15 min)", description: "Understand your goals" },
    { step: 3, title: "Site visit (if applicable)", description: "Measure & assess" },
    { step: 4, title: "Custom proposal", description: "Clear pricing & timeline" },
  ],
  contactTitle: "Prefer to call?",
  phone: "(815) 581-0138",
  phoneRaw: "+18155810138",
  hours: "Mon-Fri, 7am-4pm CT",
  locationName: "Spring Grove Showroom",
  address: {
    street: "1802 Holian Drive",
    city: "Spring Grove",
    state: "IL",
    zip: "60081",
  },
};

interface ContactClientProps {
  content?: ContactContent;
}

function ContactForm({ content }: { content: ContactContent }) {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<'homeowner' | 'pro' | 'commercial'>(
    'homeowner'
  );
  const [source, setSource] = useState('contact_page');

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    message: '',
  });

  const { submitLead, loading, error, success } = useLeadSubmission();

  useEffect(() => {
    const typeParam = searchParams.get('type');
    const sourceParam = searchParams.get('source');

    if (
      typeParam === 'commercial' ||
      typeParam === 'pro' ||
      typeParam === 'homeowner'
    ) {
      setFormType(typeParam as any);
    }

    if (sourceParam) {
      setSource(sourceParam);
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitLead({
      ...formData,
      customerType: formType,
      source: source,
    });
  };

  if (success) {
    return (
      <main className="bg-edg-light min-h-screen dark:bg-black">
        <Section className="pt-24 md:pt-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="bg-edg-brand/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Mail className="text-edg-brand-text h-8 w-8" />
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                Thank you!
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                We've received your message and will get back to you within 1
                business day.
              </p>
              <Link href="/">
                <Button variant="secondary">Return Home</Button>
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      <Section className="bg-white pt-24 pb-12 md:pt-32 dark:bg-black">
        <Container>
          <Link
            href="/"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              {content.heroHeadline}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
              {content.heroDescription}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-light/50 dark:bg-edg-dark/50 py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-zinc-900">
                {/* Form Type Selector */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {[
                    { id: 'homeowner', label: 'Homeowner' },
                    { id: 'pro', label: 'Builder / Pro' },
                    { id: 'commercial', label: 'Commercial' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormType(type.id as typeof formType)}
                      className={`rounded-none px-4 py-2 text-sm font-medium transition-colors ${
                        formType === type.id
                          ? 'bg-edg-brand text-edg-dark'
                          : 'text-muted-foreground bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                      placeholder="60045"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      What are you looking for?
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={loading}
                      className="focus:ring-edg-brand w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                    >
                      <option value="">Select an option...</option>
                      <option value="pergola">Louvered Pergola</option>
                      <option value="shades">Motorized Shades</option>
                      <option value="enclosure">Glass Enclosure</option>
                      <option value="multiple">Multiple Systems</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      rows={4}
                      className="focus:ring-edg-brand w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 focus:ring-2 focus:outline-none disabled:opacity-50 dark:border-white/10 dark:bg-zinc-800"
                      placeholder="Describe your outdoor space, goals, timeline, or any questions you have..."
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-100 p-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-none"
                  >
                    {loading ? 'Sending...' : 'Submit Request'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <div className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">{content.sidebarTitle}</h3>
                <ol className="space-y-4">
                  {content.processSteps?.map((step) => (
                    <li key={step.step} className="flex gap-3">
                      <div className="bg-edg-brand text-edg-dark flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {step.step}
                      </div>
                      <div>
                        <div className="font-medium">{step.title}</div>
                        <div className="text-muted-foreground text-sm">
                          {step.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">{content.contactTitle}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                    <a
                      href={`tel:${content.phoneRaw}`}
                      className="text-edg-brand-text dark:text-edg-brand font-bold transition-colors hover:underline"
                      onClick={() =>
                        (window as any).dataLayer?.push({
                          event: 'conversion_event',
                          conversion_name: 'phone_click',
                          value: 0,
                        })
                      }
                    >
                      {content.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                    <span className="text-edg-gray-text font-medium dark:text-gray-400">
                      {content.hours}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <div className="text-edg-gray-text font-medium dark:text-gray-400">
                      <div>{content.locationName}</div>
                      <div>{content.address?.street}</div>
                      <div>{content.address?.city}, {content.address?.state} {content.address?.zip}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default function ContactClient({ content }: ContactClientProps) {
  const mergedContent = { ...fallbackContent, ...content };
  
  return (
    <Suspense
      fallback={
        <main className="bg-edg-light flex min-h-screen items-center justify-center dark:bg-black">
          <div className="text-center">
            <div className="border-edg-brand mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
            <p className="text-muted-foreground">Loading contact form...</p>
          </div>
        </main>
      }
    >
      <ContactForm content={mergedContent} />
    </Suspense>
  );
}
