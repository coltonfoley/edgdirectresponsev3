type AnalyticsEvent = Record<string, unknown>;
type LeadMetadata = Record<string, unknown>;

const EVENT_SCOPED_KEYS = [
  'conversion_name',
  'cta_id',
  'cta_label',
  'cta_position',
  'link_path',
  'link_type',
  'form_id',
  'form_variant',
  'step_id',
  'step_number',
  'step_count',
  'from_step',
  'to_step',
  'validation_state',
  'error_type',
  'submission_id',
] as const;

const FIRST_TOUCH_STORAGE_KEYS = {
  landingPage: 'edg_first_touch_landing_page',
  utmSource: 'edg_first_touch_utm_source',
  utmMedium: 'edg_first_touch_utm_medium',
  utmCampaign: 'edg_first_touch_utm_campaign',
} as const;

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
  window.dataLayer.push({
    ...Object.fromEntries(EVENT_SCOPED_KEYS.map((key) => [key, undefined])),
    ...event,
  });
}

export function trackConversion({
  conversionName,
  value = 0,
  linkUrl,
  linkText,
  ctaPosition,
}: {
  conversionName: string;
  value?: number;
  linkUrl?: string;
  linkText?: string;
  ctaPosition?: string;
}) {
  if (typeof window === 'undefined') {
    return;
  }

  const pagePath = window.location.pathname;
  const ctaId = `${conversionName}-${String(linkText || 'cta')}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  const payload = {
    conversion_name: conversionName,
    cta_id: ctaId,
    cta_label: safeToken(linkText),
    cta_position: safeToken(ctaPosition),
    link_path: safePath(linkUrl),
    link_type: linkUrl?.startsWith('tel:') ? 'phone' : 'link',
    page_path: pagePath,
    page_family: classifyPageFamily(pagePath),
  };
  pushAnalyticsEvent({
    event: 'conversion_event',
    value,
    ...payload,
  });
  pushAnalyticsEvent({ event: conversionName, ...payload });
}

function safePath(value: string | null | undefined) {
  if (!value) return undefined;
  try {
    return new URL(value, window.location.origin).pathname;
  } catch {
    return value.startsWith('/') ? value.split(/[?#]/, 1)[0] : undefined;
  }
}

function safeToken(value: string | null | undefined) {
  if (!value) return undefined;
  const normalized = value.trim().slice(0, 100);
  return /^[a-zA-Z0-9 _./:+-]+$/.test(normalized) ? normalized : undefined;
}

export function classifyPageFamily(pathname: string) {
  if (pathname === '/contact') return 'contact';
  if (pathname.startsWith('/systems/')) return 'system';
  if (pathname.startsWith('/service-areas/')) return 'service_area';
  if (pathname.startsWith('/projects/')) return 'project';
  if (pathname.startsWith('/guides/')) return 'guide';
  if (pathname.startsWith('/commercial')) return 'commercial';
  if (pathname === '/') return 'home';
  return 'other';
}

export function getLeadJourneyMetadata(
  metadata: LeadMetadata = {}
): LeadMetadata {
  if (typeof window === 'undefined') {
    return metadata;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const utmFields = ['utm_source', 'utm_medium', 'utm_campaign'];
  const utmMetadata = Object.fromEntries(
    utmFields
      .map((field) => [field, safeToken(searchParams.get(field))])
      .filter(([, value]) => Boolean(value))
  );

  const pagePath = window.location.pathname;
  const landingPage = safePath(
    window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEYS.landingPage) ||
      window.sessionStorage.getItem('edg_landing_page') ||
      pagePath
  );
  const firstTouchUtmSource = safeToken(
    window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEYS.utmSource)
  );
  const firstTouchUtmMedium = safeToken(
    window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEYS.utmMedium)
  );
  const firstTouchUtmCampaign = safeToken(
    window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEYS.utmCampaign)
  );
  const productParam =
    safeToken(searchParams.get('product')) ||
    safeToken(searchParams.get('project'));
  const marketParam =
    safeToken(searchParams.get('area')) ||
    safeToken(searchParams.get('market'));

  return {
    page_url: `${window.location.origin}${pagePath}`,
    page_path: pagePath,
    page_family: classifyPageFamily(pagePath),
    page_title: document.title,
    referrer_path: safePath(document.referrer),
    landing_page: landingPage,
    first_touch_landing_page: landingPage,
    first_touch_utm_source: firstTouchUtmSource,
    first_touch_utm_medium: firstTouchUtmMedium,
    first_touch_utm_campaign: firstTouchUtmCampaign,
    intent_type: safeToken(searchParams.get('type')),
    product_param: productParam || undefined,
    source_param: safeToken(searchParams.get('source')),
    market_param: marketParam || undefined,
    ...utmMetadata,
    ...metadata,
  };
}

export function captureFirstTouchJourney() {
  if (typeof window === 'undefined') return;

  const searchParams = new URLSearchParams(window.location.search);
  if (!window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEYS.landingPage)) {
    window.sessionStorage.setItem(
      FIRST_TOUCH_STORAGE_KEYS.landingPage,
      window.location.pathname
    );
  }

  const fields = [
    ['utm_source', FIRST_TOUCH_STORAGE_KEYS.utmSource],
    ['utm_medium', FIRST_TOUCH_STORAGE_KEYS.utmMedium],
    ['utm_campaign', FIRST_TOUCH_STORAGE_KEYS.utmCampaign],
  ] as const;
  for (const [queryField, storageKey] of fields) {
    if (window.sessionStorage.getItem(storageKey)) continue;
    const value = safeToken(searchParams.get(queryField));
    if (value) window.sessionStorage.setItem(storageKey, value);
  }
}
