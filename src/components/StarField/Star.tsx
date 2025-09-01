'use client';

import React, { useState, useRef } from 'react';
import { Sphere, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Project } from '@/data/types';
import { useStarfieldStore } from '@/stores/useStarfieldStore';
import { hexToRgb } from '@/utils/helpers';

// The props interface is explicitly defined and will be exported
// to be used by the dynamic import in the Scene component.
export interface StarProps {
  project: Project;
}

export const Star: React.FC<StarProps> = ({ project }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setSelectedProject, setCameraTarget, openDetailPanel, setIsHovering } = useStarfieldStore();

  // Use project color or a default, then convert for the emissive property
  const color = project.color || '#ffffff';
  const [r, g, b] = hexToRgb(color);

  useFrame(() => {
    // Simple rotation animation
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const handleClick = () => {
    setSelectedProject(project);
    // Set camera target to a position slightly in front of the star
    setCameraTarget([project.position[0], project.position[1], project.position[2] + 5]);
    openDetailPanel();
  };

  const handlePointerOver = (event: any) => {
    event.stopPropagation(); // Prevents events from bubbling up to the canvas
    setHovered(true);
    setIsHovering(true);
    // Safely update cursor style on the client-side
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerOut = (event: any) => {
    event.stopPropagation();
    setHovered(false);
    setIsHovering(false);
    // Safely reset cursor style
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'auto';
    }
  };

  return (
    <Sphere
      ref={meshRef}
      args={[project.scale, 32, 32]}
      position={project.position as [number, number, number]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <meshStandardMaterial
        color={color}
        emissive={[r * project.luminosity, g * project.luminosity, b * project.luminosity]}
        emissiveIntensity={hovered ? 2 : 1.5} // Enhance glow on hover
      />
      {hovered && (
        <Html center>
          <div className="bg-card/80 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg pointer-events-none">
            {project.name}
          </div>
        </Html>
      )}
    </Sphere>
  );
};
