import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

if (!projectId || !dataset) {
  console.warn(
    'Sanity Project ID or Dataset is missing. Check your environment variables.',
    { projectId, dataset }
  );
}

export const client = createClient({
  projectId: projectId || '1x9vna2d',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: true,
});

export const previewClient = createClient({
  projectId: projectId || '1x9vna2d',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
});

export function getClient(preview = false) {
  return preview ? previewClient : client;
}
