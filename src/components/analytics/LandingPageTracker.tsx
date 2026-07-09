'use client';

import { useEffect } from 'react';
import { trackConversion } from '@/lib/analytics';

const LANDING_PAGE_KEY = 'edg_landing_page';

export function LandingPageTracker() {
  useEffect(() => {
    if (!window.sessionStorage.getItem(LANDING_PAGE_KEY)) {
      window.sessionStorage.setItem(LANDING_PAGE_KEY, window.location.href);
    }

    const trackUnwrappedPhoneLink = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const phoneLink = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!phoneLink || phoneLink.dataset.analyticsPhoneTracked === 'true') {
        return;
      }

      trackConversion({
        conversionName: 'phone_click',
        linkUrl: phoneLink.href,
        linkText: phoneLink.textContent?.trim(),
      });
    };

    document.addEventListener('click', trackUnwrappedPhoneLink);

    return () => {
      document.removeEventListener('click', trackUnwrappedPhoneLink);
    };
  }, []);

  return null;
}
