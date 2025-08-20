'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStarfieldStore } from '@/stores/useStarfieldStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { X, ExternalLink } from 'lucide-react';

export const ProjectPanel: React.FC = () => {
  const { selectedProject, isDetailPanelOpen, closeDetailPanel } = useStarfieldStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!selectedProject) return null;

  const panelVariants = {
    hidden: { 
      x: isMobile ? 0 : '100%', 
      y: isMobile ? '100%' : 0,
      opacity: 0 
    },
    visible: { 
      x: 0, 
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { 
      x: isMobile ? 0 : '100%', 
      y: isMobile ? '100%' : 0,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isDetailPanelOpen && (
        <motion.div
          className={`fixed top-0 ${
            isMobile ? 'left-0 w-full h-4/5 rounded-t-3xl' : 'right-0 w-1/3 h-full'
          } bg-card shadow-2xl z-20 flex flex-col`}
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="p-6 border-b border-foreground/10 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-foreground">{selectedProject.name}</h2>
            <button
              onClick={closeDetailPanel}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Close panel"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-accent text-lg mb-4">{selectedProject.tagline}</p>
            <p className="text-foreground/80 mb-6">{selectedProject.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Challenge</h3>
              <p className="text-foreground/80">{selectedProject.caseStudy.challenge}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Solution</h3>
              <p className="text-foreground/80">{selectedProject.caseStudy.solution}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Results</h3>
              <p className="text-foreground/80">{selectedProject.caseStudy.results}</p>
            </div>

            {selectedProject.client.testimonial && (
              <div className="mb-6 p-4 bg-foreground/5 rounded-lg">
                <p className="text-foreground/80 italic">"{selectedProject.client.testimonial}"</p>
                <p className="mt-2 text-foreground/60">— {selectedProject.client.name}</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-foreground/10">
            <a
              href={selectedProject.caseStudy.fullPageUrl}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <span>View Full Case Study</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};