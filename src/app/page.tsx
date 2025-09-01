'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// A simple, lightweight loader component
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center text-white">
    <div className="w-8 h-8 border-4 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
    <p className="mt-4 text-lg">Loading Celestial Objects...</p>
  </div>
);

// Dynamically import the main 3D scene.
// This is the most critical part: ssr: false prevents it from rendering on the server.
const Scene = dynamic(
  () => import('../components/Scene'), 
  {
    ssr: false,
    loading: () => (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    ),
  }
);

// Dynamically import UI components that may interact with the 3D scene's state
// or have client-side dependencies.
const ProjectPanel = dynamic(
  () => import('../components/UI/ProjectPanel').then((mod) => mod.ProjectPanel),
  { 
    ssr: false 
  }
);

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-black">
      {/* 3D Scene Layer (background) */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* UI Layer (foreground) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* We use pointer-events-none on the container and re-enable it for interactive elements */}
        <div className="p-8 text-white pointer-events-auto">
          <h1 className="text-4xl font-bold tracking-wider">Celestial Portfolio</h1>
          <p className="mt-2 text-gray-300">An interactive 3D journey through my work.</p>
        </div>
        
        {/* The ProjectPanel component will manage its own pointer events */}
        <ProjectPanel />
      </div>
    </main>
  );
}
