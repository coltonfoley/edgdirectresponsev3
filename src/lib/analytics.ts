type AnalyticsEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
  }
}

export function pushAnalyticsEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackConversion({
  conversionName,
  value = 0,
  linkUrl,
  linkText,
}: {
  conversionName: string;
  value?: number;
  linkUrl?: string;
  linkText?: string;
}) {
  if (typeof window === 'undefined') {
    return;
  }

  pushAnalyticsEvent({
    event: 'conversion_event',
    conversion_name: conversionName,
    value,
    link_url: linkUrl,
    link_text: linkText,
    page_path: window.location.pathname,
  });
}
