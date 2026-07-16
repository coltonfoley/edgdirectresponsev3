'use client';

import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

export type ContactFormType = 'homeowner' | 'pro' | 'commercial';

interface ContactClientProps {
  initialFormType?: ContactFormType;
  initialSource?: string;
}

function normalizeFormType(value: string | null): ContactFormType {
  const normalized = value?.trim().toLowerCase();

  if (normalized === 'commercial') {
    return 'commercial';
  }

  if (
    normalized === 'pro' ||
    normalized === 'trade' ||
    normalized === 'builder' ||
    normalized === 'contractor'
  ) {
    return 'pro';
  }

  return 'homeowner';
}

function normalizeSource(value: string | null, intent: string | null): string {
  const source = value?.trim();
  if (source) return source;

  const normalizedIntent = intent
    ?.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  return normalizedIntent ? `contact_${normalizedIntent}` : 'contact_page';
}

function normalizeProjectType(value: string | null): string {
  const normalized = value?.trim().toLowerCase();

  if (!normalized) {
    return '';
  }

  if (
    normalized === 'screens' ||
    normalized === 'screen' ||
    normalized === 'shades' ||
    normalized === 'shade' ||
    normalized === 'motorized-screens' ||
    normalized === 'motorized-screen' ||
    normalized === 'motorized-shades' ||
    normalized === 'retractable-screens' ||
    normalized === 'retractable-shades' ||
    normalized === 'magnatrack-screens'
  ) {
    return 'shades';
  }

  if (
    normalized === 'enclosure' ||
    normalized === 'enclosures' ||
    normalized === 'glass-enclosures'
  ) {
    return 'enclosure';
  }

  if (
    normalized === 'pergola' ||
    normalized === 'pergolas' ||
    normalized === 'motorized-pergola' ||
    normalized === 'louvered-pergolas'
  ) {
    return 'pergola';
  }

  if (
    normalized === 'sauna' ||
    normalized === 'saunas' ||
    normalized === 'outdoor-sauna'
  ) {
    return 'sauna';
  }

  if (
    normalized === 'appliance' ||
    normalized === 'appliances' ||
    normalized === 'outdoor-kitchen' ||
    normalized === 'outdoor-kitchens'
  ) {
    return 'appliances';
  }

  if (
    normalized === 'lanai' ||
    normalized === 'modern-lanai' ||
    normalized === 'lanai-replacement' ||
    normalized === 'pool-cage'
  ) {
    return 'shades';
  }

  if (
    normalized === 'permit' ||
    normalized === 'permit-guide' ||
    normalized === 'zoning-guide' ||
    normalized === 'planning'
  ) {
    return 'planning';
  }

  if (
    normalized === 'commercial' ||
    normalized === 'restaurant-patio-enclosure' ||
    normalized === 'restaurant-patio-enclosures' ||
    normalized === 'commercial-patio-enclosure' ||
    normalized === 'commercial-patio-enclosures' ||
    normalized === 'restaurant-enclosure' ||
    normalized === 'restaurant-enclosures' ||
    normalized === 'restaurant-patio-solutions' ||
    normalized === 'hotel-roof-deck-systems' ||
    normalized === 'hotel-pergolas' ||
    normalized === 'country-club-outdoor-spaces' ||
    normalized === 'chicago-hospitality-outdoor-living' ||
    normalized === 'hospitality-outdoor-living' ||
    normalized === 'west-loop' ||
    normalized === 'west-loop-projects'
  ) {
    return 'commercial';
  }

  if (normalized === 'multiple') {
    return normalized;
  }

  return '';
}

function normalizeLocationPrefill(value: string | null): string {
  const location = value?.trim();

  if (!location) {
    return '';
  }

  const normalized = location.toLowerCase().replace(/[\s_]+/g, '-');
  const knownLocations: Record<string, string> = {
    algonquin: 'Algonquin, IL',
    barrington: 'Barrington, IL',
    chicago: 'Chicago, IL',
    deerfield: 'Deerfield, IL',
    hinsdale: 'Hinsdale, IL',
    'lake-county': 'Lake County, IL',
    'lake-forest': 'Lake Forest, IL',
    'lake-geneva': 'Lake Geneva, WI',
    'lake-geneva-wi': 'Lake Geneva, WI',
    'mchenry-county': 'McHenry County, IL',
    milwaukee: 'Milwaukee, WI',
    'milwaukee-wi': 'Milwaukee, WI',
    naperville: 'Naperville, IL',
    'north-shore': 'North Shore Chicago',
    northbrook: 'Northbrook, IL',
    'oak-brook': 'Oak Brook, IL',
    sanibel: 'Sanibel',
    'southeast-wisconsin': 'Southeast Wisconsin',
    'southwest-florida': 'Southwest Florida',
    'spring-grove': 'Spring Grove, IL',
    wilmette: 'Wilmette, IL',
    winnetka: 'Winnetka, IL',
  };

  if (knownLocations[normalized]) {
    return knownLocations[normalized];
  }

  if (location.includes('-')) {
    return location
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  return location;
}

function isFloridaLocation(value: string, source: string): boolean {
  const combined = `${value} ${source}`.toLowerCase();
  return [
    'florida',
    'sanibel',
    'captiva',
    'fort-myers',
    'fort myers',
    'cape-coral',
    'cape coral',
    'naples',
    'bonita',
    'estero',
    'marco',
    'southwest-florida',
    'swfl',
  ].some((token) => combined.includes(token));
}

function ContactForm({
  initialFormType = 'homeowner',
  initialSource = 'contact_page',
}: ContactClientProps) {
  const formTypeOptions = [
    { id: 'homeowner', label: 'Residential' },
    { id: 'pro', label: 'Trade / Builder' },
    { id: 'commercial', label: 'Commercial' },
  ] satisfies { id: ContactFormType; label: string }[];
  const [formType, setFormType] = useState<ContactFormType>(initialFormType);
  const [leadSource, setLeadSource] = useState(initialSource);
  const [leadMarket, setLeadMarket] = useState('');
  const [formStarted, setFormStarted] = useState(false);
  const formId = useId();
  const formTitleId = `${formId}-title`;
  const formDescriptionId = `${formId}-description`;
  const formErrorId = `${formId}-error`;
  const successTitleId = `${formId}-success-title`;
  const successDescriptionId = `${formId}-success-description`;

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

  const { submitLead, trackFormStart, loading, error, success } =
    useLeadSubmission();
  const formDescriptionIds = error
    ? `${formDescriptionId} ${formErrorId}`
    : formDescriptionId;
  const floridaLead = isFloridaLocation(
    `${formData.location} ${leadMarket}`,
    leadSource
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const intent = searchParams.get('type');
    const projectType = normalizeProjectType(
      searchParams.get('product') || searchParams.get('project')
    );
    const market = searchParams.get('area') || searchParams.get('market') || '';
    const location = normalizeLocationPrefill(
      searchParams.get('location') || market
    );

    const frame = requestAnimationFrame(() => {
      setFormType(normalizeFormType(intent));
      setLeadSource(normalizeSource(searchParams.get('source'), intent));
      setLeadMarket(market);

      if (projectType || location) {
        setFormData((prev) => ({
          ...prev,
          projectType: prev.projectType || projectType,
          location: prev.location || location,
        }));
      }
    });

    return () => cancelAnimationFrame(frame);
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
      metadata: {
        cta_label: 'Submit project request',
        form_variant: 'contact_page',
        market: leadMarket || undefined,
      },
    });
  };

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    trackFormStart({
      ...formData,
      customerType: formType,
      source: leadSource,
      metadata: {
        cta_label: 'Submit project request',
        form_variant: 'contact_page',
        market: leadMarket || undefined,
      },
    });
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div
          role="status"
          aria-live="polite"
          aria-labelledby={successTitleId}
          aria-describedby={successDescriptionId}
          className="border-border max-w-2xl border bg-white p-16 text-center"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center bg-black text-white">
            <Check className="h-10 w-10" />
          </div>
          <h1
            id={successTitleId}
            className="mb-4 text-4xl font-bold tracking-tight text-black"
          >
            Request Received.
          </h1>
          <p
            id={successDescriptionId}
            className="mb-10 text-xl leading-relaxed text-gray-500"
          >
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

          <h1
            id={formTitleId}
            className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter md:text-7xl"
          >
            Start your <br /> project.
          </h1>
          <p
            id={formDescriptionId}
            className="mb-12 max-w-md text-xl leading-relaxed text-zinc-300"
          >
            Tell us about your space. We'll provide a preliminary budget,
            timeline, and design concepts.
          </p>

          <a
            href="#contact-project-form"
            className="bg-edg-brand mb-10 inline-flex h-14 w-full items-center justify-center gap-2 px-8 text-base font-bold tracking-wider text-black uppercase transition-colors hover:bg-white sm:w-auto lg:hidden"
          >
            Jump to Project Form
            <ArrowRight className="h-4 w-4" />
          </a>

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
                  {floridaLead
                    ? 'Supporting Sanibel, Captiva & Southwest Florida projects.'
                    : 'Serving Chicago, Milwaukee & Lake Geneva.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Footer */}
        <div className="relative z-10 mt-12 border-t border-white/10 pt-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-bold tracking-widest text-zinc-300 uppercase">
                Call Us
              </div>
              <TrackedPhoneLink
                href="tel:+18155810138"
                className="hover:text-edg-brand text-lg font-bold transition-colors"
              >
                815.581.0138
              </TrackedPhoneLink>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold tracking-widest text-zinc-300 uppercase">
                Email
              </div>
              <div className="text-lg font-bold">sales@edgpatioshade.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Form */}
      <div
        id="contact-project-form"
        className="scroll-mt-28 overflow-y-auto bg-white p-12 lg:p-24"
      >
        {/* Type Selector */}
        <div
          className="mb-12 grid max-w-lg grid-cols-1 border-b border-black/10 pb-12 sm:grid-cols-3"
          role="radiogroup"
          aria-label="Project type"
        >
          {formTypeOptions.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setFormType(type.id as typeof formType)}
              role="radio"
              aria-checked={formType === type.id}
              data-active={formType === type.id ? 'true' : 'false'}
              className="contact-type-radio focus-visible:ring-edg-brand-dark px-4 py-3 text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-colors first:ml-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:-ml-[1px]"
            >
              {type.label}
            </button>
          ))}
        </div>

        <form
          data-lead-form-id="contact_page"
          onSubmit={handleSubmit}
          onFocusCapture={handleFormStart}
          aria-labelledby={formTitleId}
          aria-describedby={formDescriptionIds}
          aria-busy={loading}
          className="max-w-lg space-y-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="contact-first-name"
                className="text-xs font-bold tracking-widest text-gray-500 uppercase"
              >
                First Name
              </label>
              <input
                id="contact-first-name"
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-last-name"
                className="text-xs font-bold tracking-widest text-gray-500 uppercase"
              >
                Last Name
              </label>
              <input
                id="contact-last-name"
                type="text"
                name="lastName"
                autoComplete="family-name"
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
            <label
              htmlFor="contact-email"
              className="text-xs font-bold tracking-widest text-gray-500 uppercase"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
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
              <label
                htmlFor="contact-phone"
                className="text-xs font-bold tracking-widest text-gray-500 uppercase"
              >
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder="(555) 555-5555"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-location"
                className="text-xs font-bold tracking-widest text-gray-500 uppercase"
              >
                Location / Zip Code
              </label>
              <input
                id="contact-location"
                type="text"
                name="location"
                autoComplete="postal-code"
                value={formData.location}
                onChange={handleChange}
                required
                disabled={loading}
                className="focus:border-edg-brand w-full rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors placeholder:text-gray-500 focus:outline-none"
                placeholder={floridaLead ? '33957' : '60601'}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-project-type"
              className="text-xs font-bold tracking-widest text-gray-500 uppercase"
            >
              System Interest
            </label>
            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              disabled={loading}
              className="focus:border-edg-brand w-full appearance-none rounded-none border-b-2 border-black/10 bg-transparent py-2 text-xl font-bold text-black transition-colors focus:outline-none"
            >
              <option value="">Select System...</option>
              <option value="pergola">Louvered Pergola</option>
              <option value="shades">Motorized Screens / Shades</option>
              <option value="enclosure">Glass Enclosure</option>
              <option value="sauna">Outdoor Sauna</option>
              <option value="appliances">Outdoor Kitchen / Appliances</option>
              <option value="planning">Permit / Planning Help</option>
              <option value="commercial">Commercial Project</option>
              <option value="multiple">Multiple Systems / Outdoor Room</option>
            </select>
          </div>

          <div className="space-y-2 pt-4">
            <label
              htmlFor="contact-message"
              className="text-xs font-bold tracking-widest text-gray-500 uppercase"
            >
              Project Details
            </label>
            <textarea
              id="contact-message"
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
              <div
                id={formErrorId}
                role="alert"
                className="mb-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-600"
              >
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
            <p className="mt-6 text-center text-xs text-gray-600">
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
