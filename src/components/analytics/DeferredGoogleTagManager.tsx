'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

interface DeferredGoogleTagManagerProps {
  gtmId: string;
}

export function DeferredGoogleTagManager({ gtmId }: DeferredGoogleTagManagerProps) {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(
        () => {
          setCanLoad(true);
        },
        { timeout: 3500 }
      );

      return () => window.cancelIdleCallback(idleId);
    }

    const timer = globalThis.setTimeout(() => {
      setCanLoad(true);
    }, 3500);

    return () => globalThis.clearTimeout(timer);
  }, []);

  return canLoad ? <GoogleTagManager gtmId={gtmId} /> : null;
}
