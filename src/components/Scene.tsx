'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

/**
 * This is the main 3D scene component.
 * It's marked as a client component because it uses hooks and browser-specific APIs.
 */
export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Controls */}
      <OrbitControls />

      {/* Your 3D Objects (e.g., Starfield, CelestialNode) will go here */}
      {/* For now, a simple box to test the setup */}
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </Canvas>
  );
}
