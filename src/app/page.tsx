'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LoadingSpinner = () => (
  <div style={{ color: 'white' }}>Loading Celestial Objects...</div>
);

// FIX: Corrected the import to handle a default export for Scene
const Scene = dynamic(
  () => import('../components/Scene'),
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

// This import remains correct for a named export
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
