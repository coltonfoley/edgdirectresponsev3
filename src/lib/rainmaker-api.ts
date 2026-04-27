export interface RainmakerLead {
  id: number;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  accountType?: string | null;
  billingAddress?: string | null;
  streetAddress?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leadStatus?: string | null;
  leadSource?: string | null;
  leadProjectType?: string | null;
  leadMessage?: string | null;
  leadReceivedAt?: string | null;
  createdAt?: string | null;
}

export interface LegacyLead {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
  phone?: string;
  location?: string;
  project_type?: string;
  message?: string;
  source?: string;
  customer_type?: string;
  created_at: string;
}

export function getRainmakerLeadIntakeUrl(): string | null {
  if (process.env.RAINMAKER_LEAD_INTAKE_URL) {
    return process.env.RAINMAKER_LEAD_INTAKE_URL;
  }

  if (!process.env.RAINMAKER_BASE_URL) {
    return null;
  }

  return `${process.env.RAINMAKER_BASE_URL.replace(/\/$/, '')}/api/leads/intake`;
}

function getRainmakerBaseUrl(): string | null {
  if (process.env.RAINMAKER_BASE_URL) {
    return process.env.RAINMAKER_BASE_URL.replace(/\/$/, '');
  }

  const intakeUrl = process.env.RAINMAKER_LEAD_INTAKE_URL;
  if (intakeUrl?.endsWith('/api/leads/intake')) {
    return intakeUrl.slice(0, -'/api/leads/intake'.length);
  }

  return null;
}

function getRainmakerHeaders(): Record<string, string> {
  const apiKey = process.env.RAINMAKER_API_KEY;

  if (!apiKey) {
    throw new Error('RAINMAKER_API_KEY is not configured');
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  if (process.env.RAINMAKER_VERCEL_BYPASS) {
    headers['x-vercel-protection-bypass'] = process.env.RAINMAKER_VERCEL_BYPASS;
  }

  return headers;
}

export async function fetchRainmakerLeads({
  status = 'all',
  limit = 200,
  offset = 0,
}: {
  status?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<RainmakerLead[]> {
  const baseUrl = getRainmakerBaseUrl();

  if (!baseUrl) {
    throw new Error('RAINMAKER_BASE_URL is required for Rainmaker lead reads');
  }

  const params = new URLSearchParams({
    status,
    limit: String(limit),
    offset: String(offset),
  });

  const response = await fetch(`${baseUrl}/api/leads?${params}`, {
    headers: getRainmakerHeaders(),
    cache: 'no-store',
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.message || `Rainmaker lead read failed with ${response.status}`);
  }

  return Array.isArray(body) ? body : [];
}

function getLeadDate(lead: RainmakerLead): string {
  return lead.leadReceivedAt || lead.createdAt || new Date().toISOString();
}

function getLeadLocation(lead: RainmakerLead): string | undefined {
  const cityState = [lead.city, lead.state].filter(Boolean).join(', ');
  return lead.billingAddress || lead.streetAddress || cityState || lead.zipCode || undefined;
}

function splitName(name?: string | null) {
  const parts = (name || '').trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' '),
  };
}

export function toLegacyLead(lead: RainmakerLead): LegacyLead {
  const split = splitName(lead.name);
  const firstName = lead.firstName || split.firstName || lead.email || 'Unknown';
  const lastName = lead.lastName || split.lastName || undefined;

  return {
    id: String(lead.id),
    email: lead.email || '',
    first_name: firstName,
    last_name: lastName,
    phone: lead.phone || undefined,
    location: getLeadLocation(lead),
    project_type: lead.leadProjectType || undefined,
    message: lead.leadMessage || undefined,
    source: lead.leadSource || 'website',
    customer_type: lead.accountType || undefined,
    created_at: getLeadDate(lead),
  };
}
