// src/components/canvas/Scene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stats } from '@react-three/drei'
import { useTheme } from 'next-themes' // Example for theme integration

// Example Starfield component (you would build this out)
const Starfield = () => {
  // Your star logic here
  return null
}

// A simple placeholder for your CelestialNode
const PlaceholderBox = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  // This is the component that will be dynamically imported
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Your actual components will go here */}
      <PlaceholderBox />
      <Starfield />

      {/* Helpers */}
      <OrbitControls />
      <Preload all />
      <Stats />
    </Canvas>
  )
}
