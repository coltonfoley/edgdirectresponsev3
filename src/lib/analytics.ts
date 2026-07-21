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

  const pagePath = window.location.pathname;
  const ctaId = `${conversionName}-${String(linkText || 'cta')}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  const payload = {
    conversion_name: conversionName,
    cta_id: ctaId,
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
    window.sessionStorage.getItem('edg_landing_page') || pagePath
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
    intent_type: safeToken(searchParams.get('type')),
    product_param: productParam || undefined,
    source_param: safeToken(searchParams.get('source')),
    market_param: marketParam || undefined,
    ...utmMetadata,
    ...metadata,
  };
}
