'use client';

import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-edg-dark flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
          <svg
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-white">
          Something went wrong
        </h2>
        <p className="mb-8 text-zinc-300">
          We apologize for the inconvenience. Please try again or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={reset} className="rounded-lg">
            Try again
          </Button>
          <a
            href="/"
            className="rounded-lg border border-white/20 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-white/5"
          >
            Go home
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              Error details
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-red-500/10 p-4 text-xs text-red-400">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
