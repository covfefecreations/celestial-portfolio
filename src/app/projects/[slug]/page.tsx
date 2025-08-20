import React from 'react';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  // Filter out projects that don't have a slug to prevent the error
  return projectsData
    .filter(project => project.slug) // Ensure project has slug
    .map((project) => ({
      slug: project.slug,
    }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} - Celestial Portfolio`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-accent mb-8">{project.tagline}</p>
          
          <div className="aspect-video bg-card rounded-xl mb-8 overflow-hidden">
            {project.caseStudy.imageUrl ? (
              <img 
                src={project.caseStudy.imageUrl} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">🌌</div>
                  <p className="text-lg">Project Visualization</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-foreground/80">{project.caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-foreground/80">{project.caseStudy.solution}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Results</h2>
            <p className="text-foreground/80">{project.caseStudy.results}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.client.testimonial && (
            <div className="p-6 bg-card rounded-xl">
              <p className="text-foreground/80 italic text-lg mb-4">"{project.client.testimonial}"</p>
              <p className="text-foreground/60">— {project.client.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}