export function getRainmakerLeadIntakeUrl(): string | null {
  if (process.env.RAINMAKER_LEAD_INTAKE_URL) {
    return process.env.RAINMAKER_LEAD_INTAKE_URL;
  }

  if (!process.env.RAINMAKER_BASE_URL) {
    return null;
  }

  return `${process.env.RAINMAKER_BASE_URL.replace(/\/$/, '')}/api/leads/intake`;
}
