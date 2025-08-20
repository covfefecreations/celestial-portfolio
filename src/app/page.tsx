'use client';

import React, { Suspense } from 'react';
import { Scene } from '@/components/StarField/Scene';
import { ProjectPanel } from '@/components/UI/ProjectPanel';
import { LoadingSpinner } from '@/components/UI/LoadingSpinner';
import { PageWrapper } from '@/components/Layout/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <Scene />
        <ProjectPanel />
      </Suspense>
    </PageWrapper>
  );
}