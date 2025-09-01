'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LoadingSpinner = () => (
  <div style={{ color: 'white' }}>Loading Celestial Objects...</div>
);

// Default import for the Scene
const Scene = dynamic(
  () => import('../components/Scene'),
  {
    ssr: false,
    loading: () => (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    )
  }
);

// Named import for the ProjectPanel
const ProjectPanel = dynamic(
  () => import('../components/UI/ProjectPanel').then((mod) => mod.ProjectPanel),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    // Set the parent to relative to create a stacking context
    <main className="relative w-full h-screen">
      {/* UI Layer: Positioned on top with a higher z-index */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold">Celestial Portfolio</h1>
          <p>The UI layer is now visible.</p>
        </div>
        {/* The ProjectPanel will also live on this layer */}
        <ProjectPanel />
      </div>

      {/* 3D Scene Layer: Positioned on the bottom with a lower z-index */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
    </main>
  );
}
