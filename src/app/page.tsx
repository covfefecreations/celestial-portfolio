'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Assuming you have a loading spinner component
const LoadingSpinner = () => (
  <div style={{ color: 'white' }}>Loading Celestial Objects...</div>
);

// This dynamic import is likely correct if Scene.tsx has a named 'Scene' export
const Scene = dynamic(
  () => import('../components/Scene').then((mod) => mod.Scene), 
  {
    ssr: false,
    loading: () => (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000010'
      }}>
        <LoadingSpinner />
      </div>
    )
  }
);

// FIX: Corrected the import to handle a named export for ProjectPanel
const ProjectPanel = dynamic(
  () => import('../components/UI/ProjectPanel').then((mod) => mod.ProjectPanel),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <Scene />
      <ProjectPanel />
    </main>
  );
}
