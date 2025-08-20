'use client';

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/UI/LoadingSpinner';

// Dynamically import 3D components with proper loading
const Scene = dynamic(() => import('@/components/StarField/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen flex items-center justify-center"><LoadingSpinner /></div>
});

const ProjectPanel = dynamic(() => import('@/components/UI/ProjectPanel'), {
  ssr: false
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }>
        <Scene />
        <ProjectPanel />
      </Suspense>
    </div>
  );
}