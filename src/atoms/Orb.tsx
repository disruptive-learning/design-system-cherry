import * as React from "react"
import * as THREE from "three"
import { createNoise3D } from "simplex-noise"
import { cn } from "@/lib/utils"

export interface OrbProps {
  /** Whether the orb is actively animating/morphing */
  active?: boolean
  /** Intensity of the morph effect (0-1) */
  intensity?: number
  /** Size of the container */
  size?: "sm" | "md" | "lg"
  /** Custom className */
  className?: string
  /** Click handler */
  onClick?: () => void
}

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
}

const Orb: React.FC<OrbProps> = ({
  active = false,
  intensity = 0.5,
  size = "md",
  className,
  onClick,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = React.useRef<THREE.Scene | null>(null)
  const groupRef = React.useRef<THREE.Group | null>(null)
  const cameraRef = React.useRef<THREE.PerspectiveCamera | null>(null)
  const ballRef = React.useRef<THREE.Mesh | null>(null)
  const originalPositionsRef = React.useRef<Float32Array | null>(null)
  const animationRef = React.useRef<number | null>(null)
  const noise = React.useMemo(() => createNoise3D(), [])

  const initViz = React.useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const group = new THREE.Group()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 100)
    camera.position.set(0, 0, 55)
    camera.lookAt(scene.position)

    scene.add(camera)
    sceneRef.current = scene
    groupRef.current = group
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 8)
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true,
    })

    const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial)
    ball.position.set(0, 0, 0)
    ballRef.current = ball

    originalPositionsRef.current = new Float32Array(
      ball.geometry.attributes.position.array
    )

    group.add(ball)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.intensity = 0.9
    spotLight.position.set(-10, 40, 20)
    spotLight.lookAt(ball.position)
    spotLight.castShadow = true
    scene.add(spotLight)

    scene.add(group)

    container.innerHTML = ""
    container.appendChild(renderer.domElement)
  }, [])

  const updateBallMorph = React.useCallback(
    (mesh: THREE.Mesh, volume: number) => {
      const geometry = mesh.geometry as THREE.BufferGeometry
      const positionAttribute = geometry.getAttribute("position")

      for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3(
          positionAttribute.getX(i),
          positionAttribute.getY(i),
          positionAttribute.getZ(i)
        )

        const offset = 10
        const amp = 2.5
        const time = window.performance.now()
        vertex.normalize()
        const rf = 0.00001
        const distance =
          offset +
          volume * 4 +
          noise(
            vertex.x + time * rf * 7,
            vertex.y + time * rf * 8,
            vertex.z + time * rf * 9
          ) *
            amp *
            volume
        vertex.multiplyScalar(distance)

        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
      }

      positionAttribute.needsUpdate = true
      geometry.computeVertexNormals()
    },
    [noise]
  )

  const resetBallMorph = React.useCallback(
    (mesh: THREE.Mesh, originalPositions: Float32Array) => {
      const geometry = mesh.geometry as THREE.BufferGeometry
      const positionAttribute = geometry.getAttribute("position")

      for (let i = 0; i < positionAttribute.count; i++) {
        positionAttribute.setXYZ(
          i,
          originalPositions[i * 3],
          originalPositions[i * 3 + 1],
          originalPositions[i * 3 + 2]
        )
      }

      positionAttribute.needsUpdate = true
      geometry.computeVertexNormals()
    },
    []
  )

  const render = React.useCallback(() => {
    if (
      !groupRef.current ||
      !ballRef.current ||
      !cameraRef.current ||
      !rendererRef.current ||
      !sceneRef.current
    ) {
      return
    }

    groupRef.current.rotation.y += 0.005

    if (active && ballRef.current) {
      updateBallMorph(ballRef.current, intensity)
    } else if (!active && ballRef.current && originalPositionsRef.current) {
      resetBallMorph(ballRef.current, originalPositionsRef.current)
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current)
    animationRef.current = requestAnimationFrame(render)
  }, [active, intensity, updateBallMorph, resetBallMorph])

  React.useEffect(() => {
    initViz()
    animationRef.current = requestAnimationFrame(render)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [initViz, render])

  React.useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(sizeMap[size], "cursor-pointer", className)}
      onClick={onClick}
    />
  )
}

Orb.displayName = "Orb"

export { Orb }
