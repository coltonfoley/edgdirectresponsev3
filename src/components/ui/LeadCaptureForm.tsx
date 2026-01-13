"use client";



import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadCaptureFormProps {
  source?: string;
  ctaText?: string;
  successTitle?: string;
  successMessage?: string;
  className?: string;
  variant?: "default" | "compact" | "inline";
  redirectUrl?: string;
  downloadUrl?: string;
  autoDownload?: boolean;
}

type FormState = "idle" | "loading" | "success" | "error";

export function LeadCaptureForm({
  source = "guide-landing-page",
  ctaText = "Get the Free Guide",
  successTitle = "Check your inbox!",
  successMessage = "We've sent your guide. Check your email (and spam folder, just in case).",
  className,
  variant = "default",
  downloadUrl,
  redirectUrl,
  autoDownload = true,
}: LeadCaptureFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.errors?.[0] || "Something went wrong");
      }

      setFormState("success");

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          source: source,
          currency: "USD",
          value: 0
        });
      }

      // Set access cookie if redirecting to gated content
      if (redirectUrl) {
        // Set cookie via JS for immediate access (simple client-side gate)
        // 30 day expiration
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
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
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  // Success state
  if (formState === "success") {
    return (
      <div
        className={cn(
          "rounded-xl p-8 text-center transition-all duration-500 animate-in fade-in zoom-in-95",
          variant === "default" && "bg-edg-brand/5 border border-edg-brand/20",
          variant === "compact" && "bg-edg-brand/5 border border-edg-brand/20",
          variant === "inline" && "bg-transparent",
          className
        )}
      >
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-edg-brand" />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 text-white">{successTitle}</h3>
        <p className="text-sm text-gray-400 mb-6">{successMessage}</p>
        {downloadUrl && (
          <Link
            href={downloadUrl}
            download
            className={cn(
              "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer h-10 px-6 py-2",
              "border border-edg-brand text-edg-brand hover:bg-edg-brand hover:text-white w-full sm:w-auto"
            )}
          >
            Download Guide Again
          </Link>
        )}
      </div>
    );
  }

  // Default and compact variants
  if (variant === "default" || variant === "compact") {
    return (
      <form
        onSubmit={handleSubmit}
        className={cn(
          "space-y-4",
          variant === "default" && "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8",
          className
        )}
      >
        <div className={cn(variant === "compact" ? "flex flex-col sm:flex-row gap-2.5" : "space-y-4")}>
          <div className={cn(variant === "compact" ? "flex-1 min-w-0" : "")}>
            {variant === "default" && (
              <label className="block text-sm font-medium mb-2 text-white/80">First Name</label>
            )}
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
              disabled={formState === "loading"}
              className={cn(
                "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-edg-brand/50 focus:border-edg-brand/50",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200"
              )}
            />
          </div>
          <div className={cn(variant === "compact" ? "flex-[1.5] min-w-0" : "")}>
            {variant === "default" && (
              <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              disabled={formState === "loading"}
              className={cn(
                "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-edg-brand/50 focus:border-edg-brand/50",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200"
              )}
            />
          </div>
          {variant === "compact" && (
            <Button
              type="submit"
              size="lg"
              disabled={formState === "loading"}
              className="rounded-xl whitespace-nowrap px-6 text-sm md:text-base shadow-lg shadow-edg-brand/5"
            >
              {formState === "loading" ? (
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

        {variant === "default" && (
          <Button
            type="submit"
            size="lg"
            disabled={formState === "loading"}
            className="w-full rounded-xl shadow-lg shadow-edg-brand/5"
          >
            {formState === "loading" ? (
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
        {formState === "error" && errorMessage && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Privacy note */}
        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-2 font-medium">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Inline variant (horizontal form for light backgrounds)
  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          disabled={formState === "loading"}
          className={cn(
            "flex-1 px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40",
            "focus:outline-none focus:ring-2 focus:ring-edg-brand/50 focus:border-edg-brand/50 font-medium",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200"
          )}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          disabled={formState === "loading"}
          className={cn(
            "flex-1 px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40",
            "focus:outline-none focus:ring-2 focus:ring-edg-brand/50 focus:border-edg-brand/50 font-medium",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200"
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={formState === "loading"}
          className="rounded-xl whitespace-nowrap px-8"
        >
          {formState === "loading" ? (
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
      {formState === "error" && errorMessage && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Privacy note */}
      <p className="text-xs text-edg-gray-text font-medium">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}

