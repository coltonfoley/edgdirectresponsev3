'use client';

import { useState } from 'react';
import { ArrowRight, Check, Upload } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

const featureOptions = [
  'Adjustable louvers',
  'Integrated screens',
  'Lighting',
  'Heaters',
  'Privacy walls',
  'Smart controls',
  'Fans',
  'Drainage planning',
];

const concernOptions = [
  'HOA review',
  'Permit path',
  'Deck structure',
  'Roof deck wind exposure',
  'Snow load',
  'Drainage',
  'Electrical routing',
  'Budget fit',
];

type ReviewFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  customerType: string;
  projectSurface: string;
  roughSize: string;
  budgetRange: string;
  timeline: string;
  features: string[];
  concerns: string[];
  photoLinks: string;
  projectGoal: string;
};

const initialFormData: ReviewFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  customerType: 'homeowner',
  projectSurface: '',
  roughSize: '',
  budgetRange: '',
  timeline: '',
  features: [],
  concerns: [],
  photoLinks: '',
  projectGoal: '',
};

function toggleValue(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function buildMessage(data: ReviewFormData, inboundContext?: string) {
  return [
    'Pergola System Fit Review request',
    '',
    inboundContext ? `Inbound context: ${inboundContext}` : null,
    `Project surface: ${data.projectSurface || 'Not provided'}`,
    `Rough size: ${data.roughSize || 'Not provided'}`,
    `Budget range: ${data.budgetRange || 'Not provided'}`,
    `Timeline: ${data.timeline || 'Not provided'}`,
    `Desired features: ${data.features.length ? data.features.join(', ') : 'Not provided'}`,
    `Site concerns: ${data.concerns.length ? data.concerns.join(', ') : 'Not provided'}`,
    `Photo links or notes: ${data.photoLinks || 'Not provided'}`,
    '',
    'What the space needs to do:',
    data.projectGoal || 'Not provided',
  ]
    .filter(Boolean)
    .join('\n');
}

export function SystemFitReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>(initialFormData);
  const { submitLead, loading, error, success } = useLeadSubmission();

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (name: 'features' | 'concerns', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: toggleValue(prev[name], value),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inboundContext =
      typeof window !== 'undefined'
        ? window.location.search.replace(/^\?/, '')
        : '';

    await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      projectType: 'pergola',
      customerType: formData.customerType,
      source: 'pergola_system_fit_review',
      message: buildMessage(formData, inboundContext),
    });
  };

  if (success) {
    return (
      <div className="border border-black/10 bg-white p-8 text-center shadow-xl">
        <div className="bg-edg-brand text-edg-dark mx-auto mb-6 flex h-16 w-16 items-center justify-center">
          <Check className="h-8 w-8" />
        </div>
        <h2 className="mb-3 text-3xl font-bold text-black">
          Review request received.
        </h2>
        <p className="text-text-secondary mx-auto max-w-lg">
          EDG will review the site details and follow up with the likely system
          direction, budget range, and next step for the project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            First name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="given-name"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Last name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="family-name"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="email"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleFieldChange}
            disabled={loading}
            autoComplete="tel"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Project city or ZIP
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="postal-code"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
            placeholder="Barrington, IL"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Project type
          </label>
          <select
            name="customerType"
            value={formData.customerType}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="homeowner">Homeowner</option>
            <option value="pro">Builder / Designer</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Where will it go?
          </label>
          <select
            name="projectSurface"
            value={formData.projectSurface}
            onChange={handleFieldChange}
            required
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Patio on grade">Patio on grade</option>
            <option value="Existing deck">Existing deck</option>
            <option value="Roof deck">Roof deck</option>
            <option value="Pool area">Pool area</option>
            <option value="Outdoor kitchen">Outdoor kitchen</option>
            <option value="Restaurant or hospitality patio">
              Restaurant or hospitality patio
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Rough size
          </label>
          <input
            name="roughSize"
            value={formData.roughSize}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
            placeholder="Example: 14 x 18"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Budget range
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleFieldChange}
            required
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Under $25K">Under $25K</option>
            <option value="$25K-$50K">$25K-$50K</option>
            <option value="$50K-$100K">$50K-$100K</option>
            <option value="$100K+">$100K+</option>
            <option value="Need guidance">Need guidance</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
            Timing
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Ready to move now">Ready to move now</option>
            <option value="Planning for the next 1-3 months">
              Planning for the next 1-3 months
            </option>
            <option value="Planning for the next 3-6 months">
              Planning for the next 3-6 months
            </option>
            <option value="Early research">Early research</option>
          </select>
        </div>
      </div>

      <div>
        <div className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
          Desired features
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {featureOptions.map((feature) => (
            <label
              key={feature}
              className="flex cursor-pointer items-center gap-3 border border-black/10 p-3 text-sm font-medium text-black transition-colors hover:border-black"
            >
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => handleToggle('features', feature)}
                disabled={loading}
                className="h-4 w-4 accent-black"
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
          Known concerns
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {concernOptions.map((concern) => (
            <label
              key={concern}
              className="flex cursor-pointer items-center gap-3 border border-black/10 p-3 text-sm font-medium text-black transition-colors hover:border-black"
            >
              <input
                type="checkbox"
                checked={formData.concerns.includes(concern)}
                onChange={() => handleToggle('concerns', concern)}
                disabled={loading}
                className="h-4 w-4 accent-black"
              />
              {concern}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
          <Upload className="h-4 w-4" />
          Photo links or plan notes
        </label>
        <textarea
          name="photoLinks"
          value={formData.photoLinks}
          onChange={handleFieldChange}
          disabled={loading}
          rows={3}
          className="focus:border-edg-brand w-full resize-none border-b-2 border-black/10 bg-transparent py-3 text-base text-black transition-colors outline-none"
          placeholder="Paste links to photos, plans, a Drive folder, or note what photos you can send next."
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
          What does the space need to do?
        </label>
        <textarea
          name="projectGoal"
          value={formData.projectGoal}
          onChange={handleFieldChange}
          required
          disabled={loading}
          rows={4}
          className="focus:border-edg-brand w-full resize-none border-b-2 border-black/10 bg-transparent py-3 text-base text-black transition-colors outline-none"
          placeholder="Shade a west-facing patio, cover an outdoor kitchen, make a pool area usable in rain, solve bugs and privacy, etc."
        />
      </div>

      {error && (
        <div className="border-l-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full justify-between px-8"
      >
        {loading ? 'Sending...' : 'Request System Fit Review'}
        {!loading && <ArrowRight className="h-5 w-5" />}
      </Button>
    </form>
  );
}
