'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'

// This is a placeholder for your actual 3D components, like the Starfield or CelestialNode.
const Starfield = () => {
  // Your starfield logic would go here.
  return null
}

const CelestialNode = () => {
  // A placeholder for one of your project nodes.
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  // The `gl` prop is important for Vercel's WebGL context.
  // The `eventSource` connects DOM events to the canvas.
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 10], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Your 3D components go here */}
      <Starfield />
      <CelestialNode />

      {/* Helpers */}
      <OrbitControls />
      <Preload all />
    </Canvas>
  )
}
