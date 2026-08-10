'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

type ScreenFitBudgetFormProps = {
  source?: string;
  ctaPosition?: string;
};

export function ScreenFitBudgetForm({
  source = 'magnatrack_screen_quote',
  ctaPosition = 'magnatrack_cost_guide',
}: ScreenFitBudgetFormProps = {}) {
  return (
    <QuoteRequestForm
      source={source}
      defaultInterest="shades"
      heading="Request a Screen Quote"
      intro="Start with what you want from the space. Opening details and photos are optional."
      ctaPosition={ctaPosition}
      metadata={{
        pilot_name: 'screen_fit_budget',
        pilot_version: 'v2_standard_quote',
      }}
    />
  );
}
