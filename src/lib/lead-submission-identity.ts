export type PendingLeadSubmission = {
  fingerprint: string;
  submissionId: string;
};

const uuidV4Pattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const edgFallbackPattern = /^edg-[a-z]{24}$/;

type AttachmentIdentity = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
};

type LeadIdentityInput = {
  metadata?: Record<string, unknown>;
  attachments?: AttachmentIdentity[];
};

export function isOpaqueLeadSubmissionId(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    (uuidV4Pattern.test(value) || edgFallbackPattern.test(value))
  );
}

export function createOpaqueLeadSubmissionId() {
  const cryptoProvider = globalThis.crypto;
  if (typeof cryptoProvider?.randomUUID === 'function') {
    return cryptoProvider.randomUUID();
  }

  const bytes = new Uint8Array(24);
  if (typeof cryptoProvider?.getRandomValues === 'function') {
    cryptoProvider.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  const letters = Array.from(bytes, (byte) =>
    String.fromCharCode(97 + (byte % 26))
  ).join('');
  return `edg-${letters}`;
}

function stableValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stableValue);
  if (!value || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([, item]) => item !== undefined)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, item]) => [key, stableValue(item)])
  );
}

export function leadSubmissionFingerprint<T extends object>(
  data: T & LeadIdentityInput,
  metadata: Record<string, unknown>
) {
  const attachments = data.attachments || [];
  const leadFields = Object.fromEntries(
    Object.entries(data).filter(
      ([key]) => key !== 'attachments' && key !== 'metadata'
    )
  );
  const reportingMetadata = Object.fromEntries(
    Object.entries(metadata).filter(([key]) => key !== 'submission_id')
  );
  return JSON.stringify(
    stableValue({
      leadFields,
      reportingMetadata,
      attachments: attachments.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      })),
    })
  );
}

export function resolvePendingLeadSubmission({
  pending,
  fingerprint,
  createId,
}: {
  pending: PendingLeadSubmission | null;
  fingerprint: string;
  createId: () => string;
}): PendingLeadSubmission {
  if (pending?.fingerprint === fingerprint) return pending;
  return { fingerprint, submissionId: createId() };
}
