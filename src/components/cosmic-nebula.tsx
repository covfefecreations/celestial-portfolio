'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface CosmicNebulaProps {
  className?: string
}

export default function CosmicNebula({ className }: CosmicNebulaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const starsRef = useRef<THREE.Points>()
  const nebulaeRef = useRef<THREE.Points[]>([])
  const animationIdRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize Three.js scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Initialize renderer with alpha support
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1) // Black background
    rendererRef.current = renderer

    // Add renderer to container
    containerRef.current.appendChild(renderer.domElement)

    // Create starfield
    createStarfield(scene)

    // Create nebulae
    createNebulae(scene)

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Rotate the entire scene
      if (sceneRef.current) {
        sceneRef.current.rotation.y += 0.001
      }

      // Animate stars twinkling
      if (starsRef.current) {
        const starsGeometry = starsRef.current.geometry as THREE.BufferGeometry
        const positions = starsGeometry.attributes.position.array as Float32Array
        const colors = starsGeometry.attributes.color.array as Float32Array
        
        for (let i = 0; i < positions.length; i += 3) {
          // Subtle opacity flickering
          const flicker = 0.7 + Math.random() * 0.3
          colors[i] = flicker     // R
          colors[i + 1] = flicker // G
          colors[i + 2] = flicker // B
        }
        starsGeometry.attributes.color.needsUpdate = true
      }

      // Animate nebulae
      nebulaeRef.current.forEach((nebula, index) => {
        if (nebula) {
          nebula.rotation.y += 0.0005 * (index + 1)
          nebula.rotation.x += 0.0003 * (index + 1)
        }
      })

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  const createStarfield = (scene: THREE.Scene) => {
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const starsCount = 5000
    const positions = new Float32Array(starsCount * 3)
    const colors = new Float32Array(starsCount * 3)

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Random positions in a sphere
      const radius = Math.random() * 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)

      // White stars with varying brightness
      const brightness = 0.7 + Math.random() * 0.3
      colors[i] = brightness
      colors[i + 1] = brightness
      colors[i + 2] = brightness
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)
    starsRef.current = stars
  }

  const createNebulae = (scene: THREE.Scene) => {
    const nebulaColors = [
      new THREE.Color('#8B5CF6'), // Purple
      new THREE.Color('#C084FC'), // Light purple
      new THREE.Color('#F472B6')  // Pink
    ]

    const nebulaCount = 3
    nebulaeRef.current = []

    for (let i = 0; i < nebulaCount; i++) {
      const nebulaGeometry = new THREE.BufferGeometry()
      const nebulaMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      const particleCount = 2000
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      const centerX = (Math.random() - 0.5) * 20
      const centerY = (Math.random() - 0.5) * 20
      const centerZ = (Math.random() - 0.5) * 20

      for (let j = 0; j < particleCount * 3; j += 3) {
        // Create cloud-like distribution using gaussian distribution
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 8
        const height = (Math.random() - 0.5) * 4

        positions[j] = centerX + radius * Math.cos(angle) + (Math.random() - 0.5) * 2
        positions[j + 1] = centerY + height + (Math.random() - 0.5) * 2
        positions[j + 2] = centerZ + radius * Math.sin(angle) + (Math.random() - 0.5) * 2

        // Color variation within the nebula
        const baseColor = nebulaColors[i]
        const variation = 0.3 + Math.random() * 0.7
        colors[j] = baseColor.r * variation
        colors[j + 1] = baseColor.g * variation
        colors[j + 2] = baseColor.b * variation
      }

      nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial)
      scene.add(nebula)
      nebulaeRef.current.push(nebula)
    }
  }

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 -z-10 ${className || ''}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}