export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  position: [number, number, number]; // 3D coordinate tuple
  scale: number;
  luminosity: number;
  color: string;
  technologies: string[];
  client: {
    name: string;
    testimonial?: string; // optional because not all clients have one
  };
  caseStudy: {
    challenge: string;
    solution: string;
    results: string;
    imageUrl: string;
    fullPageUrl: string;
  };
  featured: boolean;
  status: 'completed' | 'ongoing' | 'planned'; // extend as needed
}