'use client';

import { useState } from 'react';
import { getLeadJourneyMetadata, pushAnalyticsEvent } from '@/lib/analytics';

type LeadMetadata = Record<string, unknown>;

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
  metadata?: LeadMetadata;
  attachments?: File[];
}

interface UseLeadSubmissionReturn {
  submitLead: (data: LeadData) => Promise<void>;
  trackFormStart: (data: Partial<LeadData>) => void;
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

  const getAnalyticsPayload = (
    data: Partial<LeadData>,
    metadata?: LeadMetadata
  ) => ({
    source: data.source,
    customer_type: data.customerType,
    project_type: data.projectType,
    lead_source: data.source,
    form_variant: metadata?.form_variant,
    cta_label: metadata?.cta_label,
    cta_position: metadata?.cta_position,
    page_path: metadata?.page_path,
    landing_page: metadata?.landing_page,
    has_phone: Boolean(data.phone),
    has_project_type: Boolean(data.projectType),
    has_message: Boolean(data.message),
  });

  const trackFormStart = (data: Partial<LeadData>) => {
    const metadata = getLeadJourneyMetadata(data.metadata);
    pushAnalyticsEvent({
      event: 'form_start',
      ...getAnalyticsPayload(data, metadata),
    });
  };

  const submitLead = async (data: LeadData) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const metadata = getLeadJourneyMetadata(data.metadata);
      const { attachments, ...leadFields } = { ...data, metadata };
      const hasAttachments = !!attachments?.length;
      const body = hasAttachments ? new FormData() : JSON.stringify(leadFields);

      if (hasAttachments && body instanceof FormData) {
        Object.entries(leadFields).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            body.append(
              key,
              typeof value === 'object' ? JSON.stringify(value) : String(value)
            );
          }
        });

        attachments.forEach((attachment) => {
          body.append('attachments', attachment, attachment.name);
        });
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        ...(hasAttachments
          ? {}
          : { headers: { 'Content-Type': 'application/json' } }),
        body,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.errors?.[0] || 'Something went wrong');
      }

      setSuccess(true);

      // Track conversion
      pushAnalyticsEvent({
        event: 'generate_lead',
        ...getAnalyticsPayload(data, metadata),
        currency: 'USD',
        value: 0,
      });
      pushAnalyticsEvent({
        event: 'form_submit_success',
        ...getAnalyticsPayload(data, metadata),
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const metadata = getLeadJourneyMetadata(data.metadata);
      pushAnalyticsEvent({
        event: 'form_submit_blocked',
        ...getAnalyticsPayload(data, metadata),
        error_message:
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.',
      });
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
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
    trackFormStart,
    loading,
    error,
    success,
    reset,
  };
}
