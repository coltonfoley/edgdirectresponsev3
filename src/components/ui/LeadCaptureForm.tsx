"use client";

import { useState } from "react";
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
}

type FormState = "idle" | "loading" | "success" | "error";

export function LeadCaptureForm({
  source = "guide-landing-page",
  ctaText = "Get the Free Guide",
  successTitle = "Check your inbox!",
  successMessage = "We've sent your guide. Check your email (and spam folder, just in case).",
  className,
  variant = "default",
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
          "rounded-2xl p-8 text-center",
          variant === "default" && "bg-edg-brand/10 border border-edg-brand/20",
          variant === "compact" && "bg-edg-brand/10 border border-edg-brand/20",
          variant === "inline" && "bg-transparent",
          className
        )}
      >
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-edg-brand/20 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-edg-brand" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{successTitle}</h3>
        <p className="text-muted-foreground">{successMessage}</p>
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
        <div className={cn(variant === "compact" ? "flex flex-col sm:flex-row gap-3" : "space-y-4")}>
          <div className={cn(variant === "compact" ? "flex-1" : "")}>
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
                "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40",
                "focus:outline-none focus:ring-2 focus:ring-edg-brand focus:border-transparent",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200"
              )}
            />
          </div>
          <div className={cn(variant === "compact" ? "flex-1" : "")}>
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
                "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40",
                "focus:outline-none focus:ring-2 focus:ring-edg-brand focus:border-transparent",
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
              className="rounded-lg whitespace-nowrap"
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
            className="w-full rounded-lg"
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
        <p className="text-xs text-white/40 text-center">
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
            "flex-1 px-4 py-3 rounded-lg border border-black/10 bg-white",
            "focus:outline-none focus:ring-2 focus:ring-edg-brand focus:border-transparent",
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
            "flex-1 px-4 py-3 rounded-lg border border-black/10 bg-white",
            "focus:outline-none focus:ring-2 focus:ring-edg-brand focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200"
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={formState === "loading"}
          className="rounded-lg whitespace-nowrap"
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
      <p className="text-xs text-muted-foreground">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}

