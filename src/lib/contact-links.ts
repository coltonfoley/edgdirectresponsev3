export type ContactLinkType = 'price' | 'fit-review' | 'consultation' | 'quote';

export type ContactLinkParams = {
  type?: ContactLinkType | string;
  product?: string;
  area?: string;
  location?: string;
  project?: string;
  source?: string;
};

export function buildContactHref(params: ContactLinkParams = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (!value) return;
    query.set(key, value);
  });

  const queryString = query.toString();
  return queryString ? `/contact?${queryString}` : '/contact';
}
