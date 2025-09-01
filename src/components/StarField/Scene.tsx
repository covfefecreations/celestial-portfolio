'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import type { Project } from '@/data/types';
import type { StarProps } from './Star'; // Import the props type for type safety

// Use the imported StarProps type to ensure the contract between components is explicit.
// This resolves the original TypeScript build error.
const Star = dynamic<StarProps>(
  () => import('./Star').then((mod) => mod.Star),
  {
    ssr: false,
    loading: () => null, // Provide a fallback during async load
  }
);

// Dynamically import the CameraController as well
const CameraController = dynamic(
  () => import('./CameraController').then((mod) => mod.CameraController),
  {
    ssr: false,
    loading: () => null,
  }
);

interface SceneProps {
  projects: Project[];
}

export const Scene: React.FC<SceneProps> = ({ projects }) => {
  return (
    <Canvas
      dpr={[1, 2]} // Adjust pixel ratio for performance on high-density screens
      shadows
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      {/* Lighting setup for the scene */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Suspense fallback={null}>
        {/* Render a star for each project */}
        {projects.map((project) => (
          <Star key={project.id} project={project} />
        ))}
        {/* The camera controller will manage camera movement and zoom */}
        <CameraController />
      </Suspense>
    </Canvas>
  );
};
