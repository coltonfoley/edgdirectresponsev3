'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

interface LeadCaptureFormProps {
  source?: string;
  ctaText?: string;
  successTitle?: string;
  successMessage?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
  redirectUrl?: string;
  downloadUrl?: string;
  autoDownload?: boolean;
}

export function LeadCaptureForm({
  source = 'guide-landing-page',
  ctaText = 'Get the Free Guide',
  successTitle = 'Check your inbox!',
  successMessage = "We've sent your guide. Check your email (and spam folder, just in case).",
  className,
  variant = 'default',
  downloadUrl,
  redirectUrl,
  autoDownload = true,
}: LeadCaptureFormProps) {
  const formId = useId();
  const firstNameId = `${formId}-first-name`;
  const emailId = `${formId}-email`;
  const faxId = `${formId}-fax`;
  const errorId = `${formId}-error`;
  const successTitleId = `${formId}-success-title`;
  const successMessageId = `${formId}-success-message`;
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [fax, setFax] = useState(''); // Honeypot
  const [formStarted, setFormStarted] = useState(false);

  const { submitLead, trackFormStart, loading, error, success } = useLeadSubmission({
    onSuccess: () => {
      // Set access cookie if redirecting to gated content
      if (redirectUrl) {
        // Set cookie via JS for immediate access (simple client-side gate)
        // 30 day expiration
        const date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = `guide_access=true; expires=${date.toUTCString()}; path=/`;

        // Slight delay to show success state briefly or just go
        window.location.href = redirectUrl;
        return;
      }

      // Trigger download if requested
      if (downloadUrl && autoDownload) {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadUrl.split('/').pop() || 'guide.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitLead({
      firstName: firstName.trim(),
      email: email.trim(),
      source,
      fax,
      metadata: {
        cta_label: ctaText,
        form_variant: `lead_capture_${variant}`,
      },
    });
  };

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    trackFormStart({
      source,
      metadata: {
        cta_label: ctaText,
        form_variant: `lead_capture_${variant}`,
      },
    });
  };

  // Success state
  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-labelledby={successTitleId}
        aria-describedby={successMessageId}
        className={cn(
          'animate-in fade-in zoom-in-95 p-8 text-center transition-all duration-500',
          variant === 'default' && 'bg-edg-brand/5 border-edg-brand/20 border',
          variant === 'compact' && 'bg-edg-brand/5 border-edg-brand/20 border',
          variant === 'inline' && 'bg-transparent',
          className
        )}
      >
        <div className="mb-4 flex justify-center">
          <div className="bg-edg-brand/10 flex h-12 w-12 items-center justify-center">
            <CheckCircle2 className="text-edg-brand h-6 w-6" />
          </div>
        </div>
        <h3 id={successTitleId} className="mb-2 text-lg font-bold text-white">
          {successTitle}
        </h3>
        <p id={successMessageId} className="mb-6 text-sm text-zinc-300">
          {successMessage}
        </p>
        {downloadUrl && (
          <Link
            href={downloadUrl}
            download
            className={cn(
              'focus-visible:ring-ring inline-flex h-10 cursor-pointer items-center justify-center px-6 py-2 font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
              'border-edg-brand text-edg-brand hover:bg-edg-brand w-full border hover:text-white sm:w-auto'
            )}
          >
            Download Guide Again
          </Link>
        )}
      </div>
    );
  }

  // Default and compact variants
  if (variant === 'default' || variant === 'compact') {
    return (
      <form
        data-lead-form-id={`lead_capture_${variant}`}
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        aria-label={`${ctaText} form`}
        aria-describedby={error ? errorId : undefined}
        aria-busy={loading}
        className={cn(
          'space-y-4',
          variant === 'default' &&
            'border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8',
          className
        )}
      >
        {/* Honeypot Field - Hidden */}
        <div
          className="pointer-events-none absolute -z-50 opacity-0 select-none"
          aria-hidden="true"
        >
          <label htmlFor={faxId}>Fax Number</label>
          <input
            type="text"
            id={faxId}
            name="fax"
            tabIndex={-1}
            autoComplete="off"
            value={fax}
            onChange={(e) => setFax(e.target.value)}
          />
        </div>
        <div
          className={cn(
            variant === 'compact'
              ? 'flex flex-col gap-2.5 sm:flex-row'
              : 'space-y-4'
          )}
        >
          <div className={cn(variant === 'compact' ? 'min-w-0 flex-1' : '')}>
            <label
              htmlFor={firstNameId}
              className={cn(
                'text-sm font-medium text-zinc-200',
                variant === 'default' ? 'mb-2 block' : 'sr-only'
              )}
            >
              First Name
            </label>
            <input
              id={firstNameId}
              type="text"
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
              disabled={loading}
              className={cn(
                'w-full rounded-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400',
                'focus:ring-edg-brand/50 focus:border-edg-brand/50 focus:ring-2 focus:outline-none',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'transition-all duration-200'
              )}
            />
          </div>
          <div
            className={cn(variant === 'compact' ? 'min-w-0 flex-[1.5]' : '')}
          >
            <label
              htmlFor={emailId}
              className={cn(
                'text-sm font-medium text-zinc-200',
                variant === 'default' ? 'mb-2 block' : 'sr-only'
              )}
            >
              Email
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              disabled={loading}
              className={cn(
                'w-full rounded-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400',
                'focus:ring-edg-brand/50 focus:border-edg-brand/50 focus:ring-2 focus:outline-none',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'transition-all duration-200'
              )}
            />
          </div>
          {variant === 'compact' && (
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="px-6 text-sm whitespace-nowrap md:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                ctaText
              )}
            </Button>
          )}
        </div>

        {variant === 'default' && (
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              ctaText
            )}
          </Button>
        )}

        {/* Error message */}
        {error && (
          <div
            id={errorId}
            role="alert"
            className="flex items-center gap-2 text-sm text-red-500"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Privacy note */}
        <p className="mt-2 text-center text-[10px] font-medium tracking-widest text-zinc-300 uppercase">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Inline variant (horizontal form for light backgrounds)
  return (
    <form
      data-lead-form-id={`lead_capture_${variant}`}
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      aria-label={`${ctaText} form`}
      aria-describedby={error ? errorId : undefined}
      aria-busy={loading}
      className={cn('space-y-4', className)}
    >
      {/* Honeypot Field - Hidden */}
      <div
        className="pointer-events-none absolute -z-50 opacity-0 select-none"
        aria-hidden="true"
      >
        <label htmlFor={faxId}>Fax Number</label>
        <input
          type="text"
          id={faxId}
          name="fax"
          tabIndex={-1}
          autoComplete="off"
          value={fax}
          onChange={(e) => setFax(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={firstNameId} className="sr-only">
          First Name
        </label>
        <input
          id={firstNameId}
          type="text"
          name="firstName"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          disabled={loading}
          className={cn(
            'flex-1 rounded-none border border-black/10 bg-white px-4 py-3 text-black placeholder:text-gray-500',
            'focus:ring-edg-brand/50 focus:border-edg-brand/50 font-medium focus:ring-2 focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'transition-all duration-200'
          )}
        />
        <label htmlFor={emailId} className="sr-only">
          Email
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          disabled={loading}
          className={cn(
            'flex-1 rounded-none border border-black/10 bg-white px-4 py-3 text-black placeholder:text-gray-500',
            'focus:ring-edg-brand/50 focus:border-edg-brand/50 font-medium focus:ring-2 focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'transition-all duration-200'
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="px-8 whitespace-nowrap"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            ctaText
          )}
        </Button>
      </div>

      {/* Error message */}
      {error && (
        <div
          id={errorId}
          role="alert"
          className="flex items-center gap-2 text-sm text-red-500"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Privacy note */}
      <p className="text-edg-gray-text text-xs font-medium">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}
