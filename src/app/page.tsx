'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/UI/LoadingSpinner';
import { projectsData } from '@/data/projects'; // Ensure this path is correct

// Dynamically import 3D and UI components to ensure they only render on the client
const Scene = dynamic(
  () => import('@/components/StarField/Scene').then(mod => mod.Scene),
  {
    ssr: false,
    // This loading component will be shown while the main Scene is being loaded
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <LoadingSpinner />
      </div>
    )
  }
);

const ProjectPanel = dynamic(
  () => import('@/components/UI/ProjectPanel').then(mod => mod.ProjectPanel),
  {
    ssr: false
  }
);

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* The Scene component handles its own loading state via the dynamic import.
        We pass the projectsData to it here so it can render the celestial bodies.
      */}
      <Scene projects={projectsData} />

      {/* The ProjectPanel is also loaded dynamically and will appear when interacted with */}
      <ProjectPanel />
    </div>
  );
}
