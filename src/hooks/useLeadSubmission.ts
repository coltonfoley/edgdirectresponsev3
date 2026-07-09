'use client';

import { useState } from 'react';
import { getLeadJourneyMetadata, pushAnalyticsEvent } from '@/lib/analytics';

type LeadMetadata = Record<string, unknown>;

type LeadSubmissionResponse = {
  success?: boolean;
  accepted?: boolean;
  errors?: string[];
};

function createSubmissionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `edg-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

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
    pilot_name: metadata?.pilot_name,
    pilot_version: metadata?.pilot_version,
    has_phone: Boolean(data.phone),
    has_project_type: Boolean(data.projectType),
    has_message: Boolean(data.message),
  });

  const trackFormStart = (data: Partial<LeadData>) => {
    const metadata = getLeadJourneyMetadata(data.metadata);
    const analyticsPayload = getAnalyticsPayload(data, metadata);
    pushAnalyticsEvent({
      event: 'form_start',
      ...analyticsPayload,
    });

    const pilotEvent = getPilotEventName(metadata, 'form_start');
    if (pilotEvent) {
      pushAnalyticsEvent({
        event: pilotEvent,
        ...analyticsPayload,
      });
    }
  };

  const submitLead = async (data: LeadData) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const metadata = getLeadJourneyMetadata({
        ...data.metadata,
        submission_id: data.metadata?.submission_id || createSubmissionId(),
      });
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

      const result = (await response.json()) as LeadSubmissionResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.errors?.[0] || 'Something went wrong');
      }

      setSuccess(true);

      if (result.accepted === false) {
        pushAnalyticsEvent({
          event: 'form_submit_filtered',
          ...getAnalyticsPayload(data, metadata),
        });
      } else {
        const analyticsPayload = getAnalyticsPayload(data, metadata);
        pushAnalyticsEvent({
          event: 'generate_lead',
          ...analyticsPayload,
          currency: 'USD',
          value: 0,
        });
        pushAnalyticsEvent({
          event: 'form_submit_success',
          ...analyticsPayload,
        });

        const pilotEvent = getPilotEventName(metadata, 'submit');
        if (pilotEvent) {
          pushAnalyticsEvent({
            event: pilotEvent,
            ...analyticsPayload,
          });
        }
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const metadata = getLeadJourneyMetadata(data.metadata);
      pushAnalyticsEvent({
        event: 'form_submit_blocked',
        ...getAnalyticsPayload(data, metadata),
        error_code: getSubmissionErrorCode(err),
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

function getSubmissionErrorCode(error: unknown) {
  if (!(error instanceof Error)) return 'unknown_submission_error';

  const message = error.message.toLowerCase();
  if (message.includes('required') || message.includes('valid email')) {
    return 'validation_error';
  }
  if (message.includes('too many requests')) return 'rate_limited';
  if (message.includes('photo') || message.includes('upload')) {
    return 'attachment_error';
  }

  return 'submission_error';
}

function getPilotEventName(
  metadata: LeadMetadata,
  stage: 'form_start' | 'submit'
) {
  if (metadata.pilot_name !== 'screen_fit_budget') return null;

  return stage === 'form_start'
    ? 'screen_fit_budget_form_start'
    : 'screen_fit_budget_submit';
}
