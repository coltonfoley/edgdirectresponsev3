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
      <div
        role="status"
        aria-live="polite"
        aria-labelledby="hero-form-success-title"
        aria-describedby="hero-form-success-description"
        className="w-full max-w-md border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md"
      >
        <div className="bg-edg-brand mx-auto mb-6 flex h-16 w-16 items-center justify-center text-black">
          <Check className="h-8 w-8" />
        </div>
        <h2
          id="hero-form-success-title"
          className="mb-2 text-2xl font-bold text-white"
        >
          Message Received
        </h2>
        <p id="hero-form-success-description" className="text-gray-300">
          We&apos;ll be in touch shortly to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md border border-white/10 bg-black/80 p-8 backdrop-blur-sm">
      <div className="mb-6 text-white">
        <h2
          id="hero-form-title"
          className="text-xl font-bold uppercase tracking-wide"
        >
          Request Information
        </h2>
        <p id="hero-form-description" className="text-sm text-zinc-300">
          Get pricing or verify feasibility for your project.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        aria-labelledby="hero-form-title"
        aria-describedby={
          error ? 'hero-form-description hero-form-error' : 'hero-form-description'
        }
        aria-busy={loading}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="hero-first-name" className="sr-only">
              First Name
            </label>
            <input
              id="hero-first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
              required
              disabled={loading}
              onChange={handleChange}
              className="input-editorial-dark"
            />
          </div>
          <div>
            <label htmlFor="hero-last-name" className="sr-only">
              Last Name
            </label>
            <input
              id="hero-last-name"
              type="text"
              name="lastName"
              placeholder="Last Name"
              autoComplete="family-name"
              required
              disabled={loading}
              onChange={handleChange}
              className="input-editorial-dark"
            />
          </div>
        </div>
        <label htmlFor="hero-email" className="sr-only">
          Email Address
        </label>
        <input
          id="hero-email"
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <label htmlFor="hero-location" className="sr-only">
          Project Zip Code
        </label>
        <input
          id="hero-location"
          type="text"
          name="location"
          placeholder="Zip Code"
          autoComplete="postal-code"
          inputMode="numeric"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <label htmlFor="hero-project-type" className="sr-only">
          Project Type
        </label>
        <select
          id="hero-project-type"
          name="projectType"
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
          <div
            id="hero-form-error"
            role="alert"
            className="mt-2 text-center text-sm text-red-400"
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
