'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Assuming you have a loading spinner component
const LoadingSpinner = () => (
  <div style={{ color: 'white' }}>Loading Celestial Objects...</div>
);

// Dynamically import 3D and UI components to ensure they only render on the client.
// This prevents SSR errors since Three.js needs browser APIs like 'window'.
const Scene = dynamic(
  () => import('../components/Scene'), // Assuming Scene.tsx is in src/components/
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

const ProjectPanel = dynamic(
  () => import('../components/UI/ProjectPanel'), // Assuming ProjectPanel is in src/components/UI/
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* The Scene component will be rendered on the client side. 
        The loading component defined above will be shown as a fallback.
      */}
      <Scene />

      {/* The ProjectPanel is also loaded dynamically. */}
      <ProjectPanel />
    </main>
  );
}
