'use client';

import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

export type ContactFormType = 'homeowner' | 'pro' | 'commercial';

interface ContactClientProps {
  initialFormType?: ContactFormType;
  initialSource?: string;
}

function normalizeFormType(value: string | null): ContactFormType {
  if (value === 'commercial' || value === 'pro') {
    return value;
  }

  return 'homeowner';
}

function normalizeSource(value: string | null): string {
  return value?.trim() || 'contact_page';
}

function normalizeProjectType(value: string | null): string {
  const normalized = value?.trim().toLowerCase();

  if (!normalized) {
    return '';
  }

  if (normalized === 'screens' || normalized === 'screen') {
    return 'shades';
  }

  if (normalized === 'enclosures') {
    return 'enclosure';
  }

  if (normalized === 'motorized-pergola' || normalized === 'pergolas') {
    return 'pergola';
  }

  if (
    normalized === 'pergola' ||
    normalized === 'shades' ||
    normalized === 'enclosure' ||
    normalized === 'commercial' ||
    normalized === 'multiple'
  ) {
    return normalized;
  }

  return '';
}

function ContactForm({
  initialFormType = 'homeowner',
  initialSource = 'contact_page',
}: ContactClientProps) {
  const [formType, setFormType] = useState<ContactFormType>(initialFormType);
  const [leadSource, setLeadSource] = useState(initialSource);

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
    setFormType(initialFormType);
    setLeadSource(initialSource);
  }, [initialFormType, initialSource]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const projectType = normalizeProjectType(searchParams.get('product'));

    setFormType(normalizeFormType(searchParams.get('type')));
    setLeadSource(normalizeSource(searchParams.get('source')));

    if (projectType) {
      setFormData((prev) =>
        prev.projectType ? prev : { ...prev, projectType }
      );
    }
  }, []);

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
      source: leadSource,
    });
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="max-w-2xl border border-black/5 bg-white p-16 text-center shadow-2xl">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
            <Check className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black">
            Request Received.
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-gray-500">
            We'll review your details and connect you with a specialized
            designer within 24 hours.
          </p>
          <Link href="/">
            <Button className="bg-edg-brand rounded-none px-10 py-4 font-bold tracking-wider text-black uppercase hover:bg-black hover:text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* LEFT COLUMN: Context & Info */}
      <div className="relative flex flex-col justify-between overflow-hidden bg-black p-12 text-white lg:p-24">
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Contact' }]} />
          </div>

          <h1 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter md:text-7xl">
            Start your <br /> project.
          </h1>
          <p className="mb-12 max-w-md text-xl leading-relaxed text-zinc-300">
            Tell us about your space. We'll provide a preliminary budget,
            timeline, and design concepts.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10">
                <Clock className="text-edg-brand h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold">Fast Response</h4>
                <p className="text-sm text-zinc-400">
                  Same-day review of your request.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10">
                <MapPin className="text-edg-brand h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold">Local Experts</h4>
                <p className="text-sm text-zinc-400">
                  Serving Chicago, Milwaukee & Lake Geneva.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Footer */}
        <div className="relative z-10 mt-12 border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="mb-2 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Call Us
              </div>
              <div className="text-lg font-bold">815.581.0138</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Email
              </div>
              <div className="text-lg font-bold">sales@edgpatioshade.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Form */}
      <div className="overflow-y-auto bg-white p-12 lg:p-24">
        {/* Type Selector */}
        <div className="mb-12 flex flex-wrap gap-0 border-b border-black/10 pb-12">
          {[
            { id: 'homeowner', label: 'Residential' },
            { id: 'pro', label: 'Trade / Builder' },
            { id: 'commercial', label: 'Commercial' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setFormType(type.id as typeof formType)}
              className={`-ml-[1px] border border-black/10 px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors first:ml-0 ${
                formType === type.id
                  ? 'z-10 border-black bg-black text-white'
                  : 'bg-white text-gray-400 hover:bg-gray-50 hover:text-black'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="(555) 555-5555"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                Zip Code
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="60601"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              System Interest
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              disabled={loading}
              className="focus:border-edg-brand w-full appearance-none rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors focus:outline-none"
            >
              <option value="">Select System...</option>
              <option value="pergola">Louvered Pergola</option>
              <option value="shades">Motorized Shades</option>
              <option value="enclosure">Glass Enclosure</option>
              <option value="commercial">Commercial Project</option>
              <option value="multiple">Multiple Systems</option>
            </select>
          </div>

          <div className="space-y-2 pt-4">
            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              rows={3}
              className="focus:border-edg-brand w-full resize-none rounded-none border-b-2 border-black/10 bg-transparent py-2 text-lg text-black transition-colors placeholder:text-gray-500 focus:outline-none"
              placeholder="Notes on dimensions, timeline, or specific needs..."
            />
          </div>

          <div className="pt-8">
            {error && (
              <div className="mb-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-600">
                {error}
              </div>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="hover:bg-edg-brand flex h-16 w-full justify-between rounded-none bg-black px-8 text-lg font-bold tracking-wider text-white uppercase hover:text-black"
            >
              {loading ? 'Sending...' : 'Submit Request'}
              {!loading && <ArrowRight className="h-6 w-6" />}
            </Button>
            <p className="mt-6 text-center text-xs text-gray-400">
              By submitting this form, you agree to our privacy policy. We
              respect your inbox.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactClient(props: ContactClientProps) {
  return <ContactForm {...props} />;
}
