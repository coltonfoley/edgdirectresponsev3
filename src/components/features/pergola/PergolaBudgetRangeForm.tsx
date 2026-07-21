'use client';

import { useId, useState } from 'react';
import { AlertCircle, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

type PergolaBudgetRangeData = {
  firstName: string;
  email: string;
  location: string;
  projectGoal: string;
  fax: string;
};

const initialFormData: PergolaBudgetRangeData = {
  firstName: '',
  email: '',
  location: '',
  projectGoal: '',
  fax: '',
};

function buildMessage(data: PergolaBudgetRangeData) {
  return [
    'Pergola Budget Range request',
    '',
    `Project goal: ${data.projectGoal}`,
    `Project city or ZIP: ${data.location}`,
    '',
    'Customer requested a low-friction initial budget range. Follow up for size, photos, site conditions, and feature preferences.',
  ].join('\n');
}

export function PergolaBudgetRangeForm() {
  const formId = useId();
  const [data, setData] = useState(initialFormData);
  const [formStarted, setFormStarted] = useState(false);
  const { submitLead, trackFormStart, loading, error, success } =
    useLeadSubmission();

  const updateField = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: value }));
  };

  const analyticsMetadata = {
    cta_label: 'Get My Pergola Budget Range',
    form_variant: 'pergola_budget_range_v1',
    form_id: 'pergola_budget_range_v1',
    pilot_name: 'pergola_budget_range',
    pilot_version: 'v1',
  };

  const trackStart = () => {
    if (formStarted) return;

    setFormStarted(true);
    trackFormStart({
      source: 'pergola_budget_range',
      projectType: 'pergola',
      customerType: 'homeowner',
      metadata: analyticsMetadata,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submitLead({
      firstName: data.firstName.trim(),
      email: data.email.trim(),
      location: data.location.trim(),
      projectType: 'pergola',
      customerType: 'homeowner',
      source: 'pergola_budget_range',
      fax: data.fax,
      message: buildMessage(data),
      metadata: {
        ...analyticsMetadata,
        project_goal: data.projectGoal,
      },
    });
  };

  if (success) {
    return (
      <div
        className="border-edg-brand/30 bg-edg-brand/5 border p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="bg-edg-brand text-edg-dark mx-auto mb-5 flex h-12 w-12 items-center justify-center">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-text-primary mb-3 text-2xl font-bold">
          Your pergola request is in.
        </h3>
        <p className="text-text-secondary mx-auto max-w-xl">
          We will review your location and project goal, then follow up for the
          few details needed to narrow the right system and a realistic planning
          range.
        </p>
      </div>
    );
  }

  return (
    <form
      data-lead-form-id="pergola_budget_range_v1"
      onSubmit={handleSubmit}
      onFocusCapture={trackStart}
      aria-label="Pergola budget range form"
      aria-busy={loading}
      className="space-y-6"
    >
      <div
        className="pointer-events-none absolute -z-50 opacity-0 select-none"
        aria-hidden="true"
      >
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
        <Field
          label="What are you hoping to build?"
          htmlFor={`${formId}-project-goal`}
        >
          <select
            id={`${formId}-project-goal`}
            name="projectGoal"
            value={data.projectGoal}
            onChange={updateField}
            required
            disabled={loading}
            className={inputClassName}
          >
            <option value="">Select one...</option>
            <option value="Motorized louvered pergola">
              Motorized louvered pergola
            </option>
            <option value="Pergola with screens or other features">
              Pergola with screens or other features
            </option>
            <option value="Commercial or hospitality pergola">
              Commercial or hospitality pergola
            </option>
            <option value="Not sure which pergola system fits">
              Not sure which pergola system fits
            </option>
          </select>
        </Field>
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-center gap-2 text-sm text-red-700"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full md:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Get My Pergola Budget Range'
        )}
      </Button>
      <p className="text-text-muted text-sm leading-relaxed">
        Rough details are enough to start. No dimensions, budget, or photos are
        required for the initial response.
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
        className="text-text-muted mb-2 block text-xs font-bold tracking-widest uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
