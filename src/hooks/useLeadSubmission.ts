'use client';

import { useRef, useState } from 'react';
import { getLeadJourneyMetadata, pushAnalyticsEvent } from '@/lib/analytics';
import {
  createOpaqueLeadSubmissionId,
  leadSubmissionFingerprint,
  resolvePendingLeadSubmission,
  type PendingLeadSubmission,
} from '@/lib/lead-submission-identity';

type LeadMetadata = Record<string, unknown>;

type LeadSubmissionResponse = {
  success?: boolean;
  accepted?: boolean;
  submissionId?: string;
  errors?: string[];
};

function safeAnalyticsPath(value: unknown) {
  if (typeof value !== 'string' || !value.trim()) return undefined;
  try {
    return new URL(value, 'https://edgpatioshade.com').pathname;
  } catch {
    return undefined;
  }
}

function safeAnalyticsToken(value: unknown) {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().slice(0, 100);
  return /^[a-zA-Z0-9 _./:+-]+$/.test(normalized) ? normalized : undefined;
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
  const pendingSubmission = useRef<PendingLeadSubmission | null>(null);

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
    form_id: metadata?.form_id || metadata?.form_variant,
    page_path: safeAnalyticsPath(metadata?.page_path),
    page_family: safeAnalyticsToken(metadata?.page_family),
    landing_page: safeAnalyticsPath(metadata?.landing_page),
    first_touch_landing_page: safeAnalyticsPath(
      metadata?.first_touch_landing_page
    ),
    market: safeAnalyticsToken(metadata?.market || metadata?.market_param),
    utm_source: safeAnalyticsToken(metadata?.utm_source),
    utm_medium: safeAnalyticsToken(metadata?.utm_medium),
    utm_campaign: safeAnalyticsToken(metadata?.utm_campaign),
    first_touch_utm_source: safeAnalyticsToken(
      metadata?.first_touch_utm_source
    ),
    first_touch_utm_medium: safeAnalyticsToken(
      metadata?.first_touch_utm_medium
    ),
    first_touch_utm_campaign: safeAnalyticsToken(
      metadata?.first_touch_utm_campaign
    ),
    pilot_name: metadata?.pilot_name,
    pilot_version: metadata?.pilot_version,
    submission_id: metadata?.submission_id,
    has_phone: Boolean(data.phone),
    has_project_type: Boolean(data.projectType),
    has_message: Boolean(data.message),
  });

  const trackFormStart = (data: Partial<LeadData>) => {
    const metadata = getLeadJourneyMetadata(data.metadata);
    const analyticsPayload = getAnalyticsPayload(data, metadata);
    pushAnalyticsEvent({
      event: 'lead_form_start',
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
      const reportingMetadata = getLeadJourneyMetadata(data.metadata);
      const fingerprint = leadSubmissionFingerprint(data, reportingMetadata);
      pendingSubmission.current = resolvePendingLeadSubmission({
        pending: pendingSubmission.current,
        fingerprint,
        createId: createOpaqueLeadSubmissionId,
      });
      const submissionId = pendingSubmission.current.submissionId;
      const metadata = getLeadJourneyMetadata({
        ...data.metadata,
        submission_id: submissionId,
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

      pushAnalyticsEvent({
        event: 'lead_form_submit_attempt',
        ...getAnalyticsPayload(data, metadata),
        validation_state: 'client_valid',
      });

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

      if (result.accepted !== false && !result.submissionId) {
        throw new Error('Lead captured without a verified submission ID');
      }

      setSuccess(true);

      if (result.accepted === false) {
        pushAnalyticsEvent({
          event: 'form_submit_filtered',
          ...getAnalyticsPayload(data, metadata),
        });
      } else {
        const confirmedMetadata = getLeadJourneyMetadata({
          ...metadata,
          submission_id: result.submissionId,
        });
        const analyticsPayload = getAnalyticsPayload(data, confirmedMetadata);
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

        const pilotEvent = getPilotEventName(confirmedMetadata, 'submit');
        if (pilotEvent) {
          pushAnalyticsEvent({
            event: pilotEvent,
            ...analyticsPayload,
          });
        }
      }

      pendingSubmission.current = null;

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const metadata = getLeadJourneyMetadata({
        ...data.metadata,
        submission_id: pendingSubmission.current?.submissionId,
      });
      pushAnalyticsEvent({
        event: 'lead_form_error',
        ...getAnalyticsPayload(data, metadata),
        error_type: getSubmissionErrorCode(err),
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
    pendingSubmission.current = null;
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
  const pilotEventPrefix =
    metadata.pilot_name === 'screen_fit_budget'
      ? 'screen_fit_budget'
      : metadata.pilot_name === 'pergola_system_fit'
        ? 'pergola_system_fit'
        : null;

  if (!pilotEventPrefix) return null;

  return `${pilotEventPrefix}_${stage === 'form_start' ? 'form_start' : 'submit'}`;
}
