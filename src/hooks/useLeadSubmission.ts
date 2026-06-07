'use client';

import { useState } from 'react';
import { pushAnalyticsEvent } from '@/lib/analytics';

export interface LeadData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  location?: string;
  projectType?: string;
  message?: string;
  source: string;
  customerType?: string;
  fax?: string; // Honeypot
}

interface UseLeadSubmissionReturn {
  submitLead: (data: LeadData) => Promise<void>;
  loading: boolean;
  error: string;
  success: boolean;
  reset: () => void;
}

export function useLeadSubmission({
  onSuccess,
}: { onSuccess?: () => void } = {}): UseLeadSubmissionReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submitLead = async (data: LeadData) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.errors?.[0] || 'Something went wrong');
      }

      setSuccess(true);

      // Track conversion
      pushAnalyticsEvent({
        event: 'generate_lead',
        source: data.source,
        customer_type: data.customerType,
        project_type: data.projectType,
        currency: 'USD',
        value: 0,
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError('');
    setSuccess(false);
  };

  return {
    submitLead,
    loading,
    error,
    success,
    reset,
  };
}
