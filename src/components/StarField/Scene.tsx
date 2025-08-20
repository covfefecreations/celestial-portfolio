'use client';

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useStarfieldStore } from '@/stores/useStarfieldStore';
import { projectsData } from '@/data/projects';
import { Star } from './Star';
import { CameraController } from './CameraController';
import { LoadingSpinner } from '../UI/LoadingSpinner';

export const Scene: React.FC = () => {
  const setProjects = useStarfieldStore((state) => state.setProjects);

  useEffect(() => {
    setProjects(projectsData);
  }, [setProjects]);

  return (
    <div className="canvas-container">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [0, 0, 50], fov: 75 }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          {projectsData.map((project) => (
            <Star key={project.id} project={project} />
          ))}
          <CameraController />
        </Canvas>
      </Suspense>
    </div>
  );
};