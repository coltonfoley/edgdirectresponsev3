import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'edg-outdoor-living',
  title: 'EDG Outdoor Living',
  projectId: '1x9vna2d',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
