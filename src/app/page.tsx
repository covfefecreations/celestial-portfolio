'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { projects } from '@/data/projects'; // Import your project data

// Dynamically import the Scene to ensure it's client-side only
const Scene = dynamic(
  () => import('@/components/Scene').then((mod) => mod.Scene), // Assuming Scene is at src/components/Scene.tsx
  {
    ssr: false,
    loading: () => (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
        backgroundColor: 'black'
      }}>
        Loading Celestial Portfolio...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', background: '#000010' }}>
      <Suspense fallback={null}>
        <Scene projects={projects} />
      </Suspense>
    </main>
  );
}
