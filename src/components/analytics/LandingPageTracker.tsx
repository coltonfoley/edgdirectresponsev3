'use client';

import { useEffect } from 'react';

const LANDING_PAGE_KEY = 'edg_landing_page';

export function LandingPageTracker() {
  useEffect(() => {
    if (!window.sessionStorage.getItem(LANDING_PAGE_KEY)) {
      window.sessionStorage.setItem(LANDING_PAGE_KEY, window.location.href);
    }
  }, []);

  return null;
}
