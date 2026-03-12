import { getProject } from '@/lib/projects';
import { enrichProject } from '@/app/projects/[slug]/lib/project-utils';

export async function GET() {
  const project = getProject('carmines');
  
  if (!project) {
    return Response.json({ error: 'Project not found' }, { status: 404 });
  }
  
  const enriched = enrichProject(project);
  
  return Response.json({
    raw: {
      slug: project.slug,
      galleryImages: project.galleryImages,
      galleryCount: project.galleryImages?.length,
    },
    enriched: {
      hasGallery: enriched.hasGallery,
      galleryImages: enriched.galleryImages,
      galleryCount: enriched.galleryImages?.length,
    }
  });
}
