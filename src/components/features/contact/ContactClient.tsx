'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

function ContactForm() {
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
      <main className="bg-zinc-50 min-h-screen flex items-center justify-center">
        <div className="bg-white border border-black/5 p-16 max-w-2xl text-center shadow-2xl">
          <div className="bg-black text-white mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full">
            <Check className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black">
            Request Received.
          </h1>
          <p className="text-gray-500 mb-10 text-xl leading-relaxed">
            We'll review your details and connect you with a specialized designer within 24 hours.
          </p>
          <Link href="/">
            <Button className="bg-edg-brand text-black hover:bg-black hover:text-white rounded-none px-10 py-4 font-bold uppercase tracking-wider">Return Home</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen grid lg:grid-cols-2">
      {/* LEFT COLUMN: Context & Info */}
      <div className="bg-black text-white p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <Link
            href="/"
            className="text-gray-400 hover:text-white mb-12 inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Start your <br /> project.
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-md">
            Tell us about your space. We'll provide a preliminary budget, timeline, and design concepts.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="h-12 w-12 bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-edg-brand" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Fast Response</h4>
                <p className="text-sm text-gray-500">Same-day review of your request.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-edg-brand" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Local Experts</h4>
                <p className="text-sm text-gray-500">Serving Chicago, Milwaukee & Lake Geneva.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Footer */}
        <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Call Us</div>
              <div className="text-lg font-bold">815.581.0138</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</div>
              <div className="text-lg font-bold">sales@edgpatioshade.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Form */}
      <div className="bg-white p-12 lg:p-24 overflow-y-auto">
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
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors border border-black/10 -ml-[1px] first:ml-0 ${formType === type.id
                  ? 'bg-black text-white border-black z-10'
                  : 'bg-white text-gray-400 hover:text-black hover:bg-gray-50'
                }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-200 transition-colors"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-200 transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-200 transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-200 transition-colors"
                placeholder="(555) 555-5555"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Zip Code</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-200 transition-colors"
                placeholder="60601"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">System Interest</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              disabled={loading}
              className="w-full border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black focus:border-edg-brand focus:outline-none rounded-none transition-colors appearance-none"
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
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              rows={3}
              className="w-full border-b-2 border-black/10 bg-transparent py-2 text-lg text-black focus:border-edg-brand focus:outline-none rounded-none placeholder:text-gray-300 transition-colors resize-none"
              placeholder="Notes on dimensions, timeline, or specific needs..."
            />
          </div>

          <div className="pt-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm border-l-4 border-red-500 font-medium">
                {error}
              </div>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-black text-white hover:bg-edg-brand hover:text-black rounded-none h-16 text-lg font-bold uppercase tracking-wider flex justify-between px-8"
            >
              {loading ? 'Sending...' : 'Submit Request'}
              {!loading && <ArrowRight className="h-6 w-6" />}
            </Button>
            <p className="mt-6 text-xs text-gray-400 text-center">
              By submitting this form, you agree to our privacy policy. We respect your inbox.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function ContactClient() {
  return (
    <Suspense
      fallback={
        <main className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="border-black mx-auto mb-6 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Loading experience...</p>
          </div>
        </main>
      }
    >
      <ContactForm />
    </Suspense>
  );
}
