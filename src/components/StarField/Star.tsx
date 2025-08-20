'use client';

import React, { useState, useRef } from 'react';
import { Sphere, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Project } from '@/data/types';
import { useStarfieldStore } from '@/stores/useStarfieldStore';
import { hexToRgb } from '@/utils/helpers';

interface StarProps {
  project: Project;
}

export const Star: React.FC<StarProps> = ({ project }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setSelectedProject, setCameraTarget, openDetailPanel, setIsHovering } = useStarfieldStore();

  const color = project.color || '#ffffff';
  const [r, g, b] = hexToRgb(color);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const handleClick = () => {
    setSelectedProject(project);
    setCameraTarget([project.position[0], project.position[1], project.position[2] + 5]);
    openDetailPanel();
  };

  const handlePointerOver = () => {
    setHovered(true);
    setIsHovering(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    setIsHovering(false);
    document.body.style.cursor = 'auto';
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
        emissiveIntensity={hovered ? 2 : 1}
      />
      {hovered && (
        <Html center>
          <div className="bg-card/80 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
            {project.name}
          </div>
        </Html>
      )}
    </Sphere>
  );
};