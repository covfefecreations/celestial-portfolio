'use client';

import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {children}
    </div>
  );
};