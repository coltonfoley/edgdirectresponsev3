'use client';

import { Button } from "@/components/ui/Button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-edg-dark px-6">
            <div className="text-center max-w-md">
                <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
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
                <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
                <p className="text-gray-400 mb-8">
                    We apologize for the inconvenience. Please try again or contact us if the problem persists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={reset} className="rounded-lg">
                        Try again
                    </Button>
                    <a
                        href="/"
                        className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors text-center"
                    >
                        Go home
                    </a>
                </div>
                {process.env.NODE_ENV === 'development' && error.message && (
                    <details className="mt-8 text-left">
                        <summary className="text-gray-500 cursor-pointer text-sm">Error details</summary>
                        <pre className="mt-2 text-xs text-red-400 bg-red-500/10 p-4 rounded overflow-auto">
                            {error.message}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    );
}
