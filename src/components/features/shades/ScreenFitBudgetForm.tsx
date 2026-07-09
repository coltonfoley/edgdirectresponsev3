'use client';

import { useId, useState } from 'react';
import { AlertCircle, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

type ScreenFitBudgetData = {
  firstName: string;
  email: string;
  phone: string;
  location: string;
  mainProblem: string;
  openingContext: string;
  budgetRange: string;
  preferredContact: 'email' | 'phone' | 'text';
  details: string;
  fax: string;
};

const initialFormData: ScreenFitBudgetData = {
  firstName: '',
  email: '',
  phone: '',
  location: '',
  mainProblem: '',
  openingContext: '',
  budgetRange: '',
  preferredContact: 'email',
  details: '',
  fax: '',
};

function buildMessage(data: ScreenFitBudgetData) {
  return [
    'MagnaTrack Screen Fit + Budget request',
    '',
    `Main problem: ${data.mainProblem}`,
    `Opening context: ${data.openingContext || 'Not provided'}`,
    `Budget range: ${data.budgetRange || 'Not sure yet'}`,
    `Preferred contact: ${data.preferredContact}`,
    '',
    'Additional notes:',
    data.details || 'Not provided',
  ].join('\n');
}

export function ScreenFitBudgetForm() {
  const formId = useId();
  const [data, setData] = useState(initialFormData);
  const [formStarted, setFormStarted] = useState(false);
  const { submitLead, trackFormStart, loading, error, success } =
    useLeadSubmission();
  const phoneRequired = data.preferredContact !== 'email';

  const updateField = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: value }));
  };

  const trackStart = () => {
    if (formStarted) return;

    setFormStarted(true);
    trackFormStart({
      source: 'magnatrack_screen_fit_budget',
      projectType: 'shades',
      metadata: {
        cta_label: 'Get My Screen Fit + Budget Range',
        form_variant: 'magnatrack_screen_fit_budget_v1',
        pilot_name: 'screen_fit_budget',
        pilot_version: 'v1',
      },
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submitLead({
      firstName: data.firstName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim() || undefined,
      location: data.location.trim(),
      projectType: 'shades',
      customerType: 'homeowner',
      source: 'magnatrack_screen_fit_budget',
      fax: data.fax,
      message: buildMessage(data),
      metadata: {
        cta_label: 'Get My Screen Fit + Budget Range',
        form_variant: 'magnatrack_screen_fit_budget_v1',
        pilot_name: 'screen_fit_budget',
        pilot_version: 'v1',
        main_problem: data.mainProblem,
        opening_context: data.openingContext || undefined,
        budget_range: data.budgetRange || undefined,
        contact_preference: data.preferredContact,
      },
    });
  };

  if (success) {
    return (
      <div
        className="border border-edg-brand/30 bg-edg-brand/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="bg-edg-brand text-edg-dark mx-auto mb-5 flex h-12 w-12 items-center justify-center">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-text-primary">
          Your screen review is in.
        </h3>
        <p className="mx-auto max-w-xl text-text-secondary">
          We will review the opening, the problem you want to solve, and the
          budget context before following up with the most practical next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={trackStart}
      aria-label="Screen fit and budget range form"
      aria-busy={loading}
      className="space-y-6"
    >
      <div className="pointer-events-none absolute -z-50 opacity-0 select-none" aria-hidden="true">
        <label htmlFor={`${formId}-fax`}>Fax number</label>
        <input
          id={`${formId}-fax`}
          name="fax"
          tabIndex={-1}
          autoComplete="off"
          value={data.fax}
          onChange={updateField}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="First name" htmlFor={`${formId}-first-name`}>
          <input
            id={`${formId}-first-name`}
            name="firstName"
            value={data.firstName}
            onChange={updateField}
            required
            disabled={loading}
            autoComplete="given-name"
            className={inputClassName}
          />
        </Field>
        <Field label="Email" htmlFor={`${formId}-email`}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            value={data.email}
            onChange={updateField}
            required
            disabled={loading}
            autoComplete="email"
            className={inputClassName}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Project city or ZIP" htmlFor={`${formId}-location`}>
          <input
            id={`${formId}-location`}
            name="location"
            value={data.location}
            onChange={updateField}
            required
            disabled={loading}
            autoComplete="postal-code"
            placeholder="Barrington, IL"
            className={inputClassName}
          />
        </Field>
        <Field label="What needs solving first?" htmlFor={`${formId}-problem`}>
          <select
            id={`${formId}-problem`}
            name="mainProblem"
            value={data.mainProblem}
            onChange={updateField}
            required
            disabled={loading}
            className={inputClassName}
          >
            <option value="">Select one...</option>
            <option value="Bugs and insects">Bugs and insects</option>
            <option value="Late-day sun or glare">Late-day sun or glare</option>
            <option value="Privacy">Privacy</option>
            <option value="Wind and everyday comfort">Wind and everyday comfort</option>
            <option value="A combination of issues">A combination of issues</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Opening count or rough size (optional)" htmlFor={`${formId}-openings`}>
          <input
            id={`${formId}-openings`}
            name="openingContext"
            value={data.openingContext}
            onChange={updateField}
            disabled={loading}
            placeholder="Two openings, about 12 ft wide each"
            className={inputClassName}
          />
        </Field>
        <Field label="Planning budget (optional)" htmlFor={`${formId}-budget`}>
          <select
            id={`${formId}-budget`}
            name="budgetRange"
            value={data.budgetRange}
            onChange={updateField}
            disabled={loading}
            className={inputClassName}
          >
            <option value="">Not sure yet</option>
            <option value="Under $8,000">Under $8,000</option>
            <option value="$8,000–$15,000">$8,000–$15,000</option>
            <option value="$15,000–$25,000">$15,000–$25,000</option>
            <option value="$25,000+">$25,000+</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Best way to reach you" htmlFor={`${formId}-contact-preference`}>
          <select
            id={`${formId}-contact-preference`}
            name="preferredContact"
            value={data.preferredContact}
            onChange={updateField}
            disabled={loading}
            className={inputClassName}
          >
            <option value="email">Email</option>
            <option value="phone">Call</option>
            <option value="text">Text</option>
          </select>
        </Field>
        <Field
          label={`Phone${phoneRequired ? '' : ' (optional)'}`}
          htmlFor={`${formId}-phone`}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            value={data.phone}
            onChange={updateField}
            required={phoneRequired}
            disabled={loading}
            autoComplete="tel"
            className={inputClassName}
          />
        </Field>
      </div>

      <Field label="Anything we should know? (optional)" htmlFor={`${formId}-details`}>
        <textarea
          id={`${formId}-details`}
          name="details"
          value={data.details}
          onChange={updateField}
          disabled={loading}
          rows={4}
          placeholder="Mounting surface, wind exposure, photos you can share, or any timing notes."
          className={inputClassName}
        />
      </Field>

      {error && (
        <div role="alert" className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={loading} className="w-full md:w-auto">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Get My Screen Fit + Budget Range'
        )}
      </Button>
      <p className="text-sm leading-relaxed text-text-muted">
        Rough details are enough to start. Photos are helpful, but never required
        for an initial review.
      </p>
    </form>
  );
}

const inputClassName =
  'focus:border-edg-brand w-full border-b-2 border-black/10 bg-white px-0 py-3 text-base text-text-primary transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold tracking-widest text-text-muted uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
