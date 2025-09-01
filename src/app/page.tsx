'use client' // Keep the parent as a client component for simplicity here

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the Scene component with SSR turned off
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <Loader />, // Optional: A loading component
})

// A simple loader component
const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', backgroundColor: 'black' }}>
      <p>Loading 3D Scene...</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      {/* Your 2D UI elements (Navbar, etc.) can go here */}
      <div className="absolute top-0 left-0 z-10 w-full">
        {/* Example: <Navbar /> */}
        <h1 className="p-4 text-white">Celestial Portfolio</h1>
      </div>

      {/* The 3D scene will take up the full background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </div>
    </main>
  )
}
