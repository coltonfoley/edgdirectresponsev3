'use client';

import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

export function HeroFormClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    message: 'Requested from Homepage Hero',
  });
  const [formStarted, setFormStarted] = useState(false);

  const { submitLead, trackFormStart, loading, error, success } = useLeadSubmission();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead({
      ...formData,
      customerType: 'homeowner',
      source: 'hero_form',
      metadata: {
        cta_label: 'Get Started',
        form_variant: 'homepage_hero',
      },
    });
  };

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    trackFormStart({
      source: 'hero_form',
      customerType: 'homeowner',
      projectType: formData.projectType,
      metadata: {
        cta_label: 'Get Started',
        form_variant: 'homepage_hero',
      },
    });
  };

  if (success) {
    return (
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 border border-white/20 text-center">
        <div className="bg-edg-brand mx-auto mb-6 flex h-16 w-16 items-center justify-center text-black">
          <Check className="h-8 w-8" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-white">
          Message Received
        </h2>
        <p className="text-gray-300">
          We&apos;ll be in touch shortly to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-black/80 p-8 border border-white/10 shadow-2xl backdrop-blur-sm">
      <div className="mb-6 text-white">
        <h2 className="text-xl font-bold uppercase tracking-wide">Request Information</h2>
        <p className="text-sm text-zinc-300">Get pricing or verify feasibility for your project.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            id="hero-first-name"
            type="text"
            name="firstName"
            placeholder="First Name"
            aria-label="First name"
            autoComplete="given-name"
            required
            disabled={loading}
            onChange={handleChange}
            className="input-editorial-dark"
          />
          <input
            id="hero-last-name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            aria-label="Last name"
            autoComplete="family-name"
            required
            disabled={loading}
            onChange={handleChange}
            className="input-editorial-dark"
          />
        </div>
        <input
          id="hero-email"
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email address"
          autoComplete="email"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <input
          id="hero-location"
          type="text"
          name="location"
          placeholder="Zip Code"
          aria-label="Project zip code"
          autoComplete="postal-code"
          inputMode="numeric"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <select
          id="hero-project-type"
          name="projectType"
          aria-label="Project type"
          required
          disabled={loading}
          onChange={handleChange}
          defaultValue=""
          className="input-editorial-dark appearance-none"
        >
          <option value="" disabled className="text-black">
            Project Type...
          </option>
          <option value="pergola" className="text-black">
            Louvered Pergola
          </option>
          <option value="shades" className="text-black">
            Motorized Shades
          </option>
          <option value="enclosure" className="text-black">
            Glass Enclosure
          </option>
          <option value="commercial" className="text-black">
            Commercial Project
          </option>
        </select>
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-base"
        >
          {loading ? 'Sending...' : 'Get Started'}
        </Button>
        {error && (
          <div className="mt-2 text-center text-sm text-red-400">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
