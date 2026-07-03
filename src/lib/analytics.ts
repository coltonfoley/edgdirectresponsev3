type AnalyticsEvent = Record<string, unknown>;
type LeadMetadata = Record<string, unknown>;

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

export function getLeadJourneyMetadata(
  metadata: LeadMetadata = {}
): LeadMetadata {
  if (typeof window === 'undefined') {
    return metadata;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const utmFields = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];
  const utmMetadata = Object.fromEntries(
    utmFields
      .map((field) => [field, searchParams.get(field)])
      .filter(([, value]) => Boolean(value))
  );

  const landingPage =
    window.sessionStorage.getItem('edg_landing_page') || window.location.href;
  const productParam =
    searchParams.get('product') || searchParams.get('project');
  const marketParam = searchParams.get('area') || searchParams.get('market');

  return {
    page_url: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || undefined,
    landing_page: landingPage,
    query_string: window.location.search || undefined,
    intent_type: searchParams.get('type') || undefined,
    product_param: productParam || undefined,
    source_param: searchParams.get('source') || undefined,
    market_param: marketParam || undefined,
    location_param: searchParams.get('location') || undefined,
    ...utmMetadata,
    ...metadata,
  };
}
