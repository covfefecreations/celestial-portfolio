'use client';

import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useStarfieldStore } from '@/stores/useStarfieldStore';
import * as THREE from 'three';

export const CameraController: React.FC = () => {
  const { camera } = useThree();
  const cameraTarget = useStarfieldStore((state) => state.cameraTarget);
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));
  const lookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  // Initialize camera position
  useEffect(() => {
    camera.position.set(0, 0, 50);
    targetRef.current.set(0, 0, 0);
    lookAtRef.current.set(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    if (!camera) return;
    
    // Smoothly interpolate camera position
    camera.position.lerp(targetRef.current, 0.05);
    
    // Smoothly interpolate lookAt target
    lookAtRef.current.lerp(cameraTarget, 0.05);
    camera.lookAt(lookAtRef.current);
    
    // Update camera matrices
    camera.updateMatrixWorld();
  });

  // Update target when cameraTarget changes
  useEffect(() => {
    targetRef.current.copy(cameraTarget);
  }, [cameraTarget]);

  return null;
};