'use client';

import { useEffect } from 'react';
import {
  classifyPageFamily,
  getLeadJourneyMetadata,
  pushAnalyticsEvent,
  trackConversion,
} from '@/lib/analytics';

const LANDING_PAGE_KEY = 'edg_landing_page';

export function LandingPageTracker() {
  useEffect(() => {
    if (!window.sessionStorage.getItem(LANDING_PAGE_KEY)) {
      window.sessionStorage.setItem(LANDING_PAGE_KEY, window.location.pathname);
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

    const observedForms = new WeakSet<Element>();
    const formObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) continue;
          const form = entry.target as HTMLFormElement;
          const formId = form.dataset.leadFormId;
          if (!formId) continue;
          const journey = getLeadJourneyMetadata();
          pushAnalyticsEvent({
            event: 'lead_form_view',
            form_id: formId,
            page_path: window.location.pathname,
            page_family: classifyPageFamily(window.location.pathname),
            landing_page: journey.landing_page,
            market: journey.market_param,
          });
          formObserver.unobserve(form);
        }
      },
      { threshold: 0.5 }
    );
    const observeLeadForms = () => {
      document.querySelectorAll('form[data-lead-form-id]').forEach((form) => {
        if (observedForms.has(form)) return;
        observedForms.add(form);
        formObserver.observe(form);
      });
    };
    observeLeadForms();
    const mutationObserver = new MutationObserver(observeLeadForms);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', trackUnwrappedPhoneLink);

    return () => {
      document.removeEventListener('click', trackUnwrappedPhoneLink);
      mutationObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return null;
}
