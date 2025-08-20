'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Project } from '@/data/types';
import { projectsData } from '@/data/projects';

// Dynamically import components with named exports and disable SSR
const Star = dynamic(() => import('./Star').then((mod) => mod.Star), { ssr: false });
const CameraController = dynamic(
  () => import('./CameraController').then((mod) => mod.CameraController),
  { ssr: false }
);

interface SceneProps {
  projects: Project[];
}

export const Scene: React.FC<SceneProps> = ({ projects }) => {
  return (
    <Canvas
      dpr={[1, 2]} // Support retina displays
      shadows
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Suspense fallback={null}>
        {projects.map((project) => (
          <Star key={project.id} project={project} />
        ))}
        <CameraController />
      </Suspense>
    </Canvas>
  );
};