'use client'; // This directive is CRITICAL. It marks the component for client-side rendering.

import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

// Dynamically import your scene to ensure it's also treated as a client component
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

export default function Experience() {
  return (
    // This div places your 3D canvas as a background
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Your primary 3D scene component goes here */}
        <Scene />

        {/* You can add other global 3D helpers like camera controls here */}
        {/* e.g., <OrbitControls /> from @react-three/drei */}
      </Canvas>
    </div>
  );
}
