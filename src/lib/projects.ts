import { projects as csvProjects } from './projects-data';
import { getProjectSlug } from './project-slug-mapping';

export interface Project {
  slug: string;
  title: string;
  location: string;
  city: string;
  state: string;
  type: string;
  systems: string[];
  cardImage: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  specs: { label: string; value: string }[];
  testimonial?: { quote: string; name: string; title: string };
  relatedProjects: string[];
  serviceAreaSlug?: string;
}

// Detect systems from description text
function detectSystems(description: string): string[] {
  const systems: string[] = [];
  const text = description.toLowerCase();
  
  if (text.includes('pergola') || text.includes('louver')) {
    systems.push('Louvered Pergola');
  }
  if (text.includes('screen') || text.includes('shade')) {
    systems.push('Motorized Screens');
  }
  if (text.includes('glass') || text.includes('enclosure')) {
    systems.push('Glass Enclosure');
  }
  if (text.includes('heater') || text.includes('heat')) {
    systems.push('Integrated Heating');
  }
  if (text.includes('privacy wall') || text.includes('privacy')) {
    systems.push('Privacy Wall');
  }
  
  return systems.length > 0 ? systems : ['Louvered Pergola']; // Default
}

// Transform CSV data to Project format
const transformCSVProject = (csvProject: typeof csvProjects[0]): Project => {
  const systems = detectSystems(csvProject.description + ' ' + csvProject.challenge);
  
  // Get the actual slug for images
  const imageSlug = getProjectSlug(csvProject.id);
  
  // Generate related projects (other projects in same city or same type)
  const relatedProjects = csvProjects
    .filter(p => 
      p.id !== csvProject.id && 
      (p.city === csvProject.city || p.projectType === csvProject.projectType)
    )
    .slice(0, 3)
    .map(p => p.id);
  
  // Parse location
  const city = csvProject.city;
  const state = csvProject.state;
  
  // Generate service area slug
  const serviceAreaSlug = csvProject.city?.toLowerCase().replace(/\s+/g, '-') + '-' + state.toLowerCase();
  
  // Parse results from challenge text if results is empty
  let results: string[] = csvProject.results || [];
  if (results.length === 0 && csvProject.challenge) {
    const challengeWords = csvProject.challenge.toLowerCase();
    if (challengeWords.includes('entertain')) {
      results.push('Created comfortable entertaining space');
    }
    if (challengeWords.includes('weather') || challengeWords.includes('rain') || challengeWords.includes('sun')) {
      results.push('Protected from weather elements year-round');
    }
    if (challengeWords.includes('integrated') || challengeWords.includes('drainage') || challengeWords.includes('electrical')) {
      results.push('Seamless integration with existing systems');
    }
  }
  
  // Ensure at least one result
  if (results.length === 0) {
    results.push('Successfully completed outdoor living transformation');
  }
  
  return {
    slug: csvProject.id,
    title: csvProject.name,
    location: `${city}, ${state}`,
    city,
    state,
    type: csvProject.projectType,
    systems,
    cardImage: `/projects/${imageSlug}/hero.jpg`,
    heroImage: `/projects/${imageSlug}/hero.jpg`,
    galleryImages: [
      `/projects/${imageSlug}/1.jpg`,
      `/projects/${imageSlug}/2.jpg`,
      `/projects/${imageSlug}/3.jpg`,
    ],
    description: csvProject.description,
    challenge: csvProject.challenge,
    solution: csvProject.solution || 'Custom outdoor living solution designed and installed by EDG Outdoor Living.',
    results,
    specs: [
      { label: 'Location', value: `${city}, ${state}` },
      { label: 'Type', value: csvProject.projectType },
      { label: 'Systems', value: systems.join(', ') },
    ],
    relatedProjects,
    serviceAreaSlug,
  };
};

// Transform all CSV projects
export const projects: Project[] = csvProjects.map(transformCSVProject);

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Get projects by city
export function getProjectsByCity(city: string): Project[] {
  return projects.filter(p => p.city.toLowerCase() === city.toLowerCase());
}

// Get projects by type
export function getProjectsByType(type: string): Project[] {
  return projects.filter(p => p.type.toLowerCase() === type.toLowerCase());
}

// Get featured projects (complete ones first)
export function getFeaturedProjects(limit: number = 6): Project[] {
  return projects
    .filter(p => p.solution && p.solution.length > 50) // More complete projects
    .slice(0, limit);
}
