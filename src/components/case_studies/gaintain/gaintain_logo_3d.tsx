import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// 1 for prism, 0 for empty
const logoPattern = [
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Row 1 (top)
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Row 2
  [1, 0, 1, 1, 1, 0, 0, 1, 0, 0], // Row 3
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0], // Row 4
  [0, 1, 1, 1, 1, 0, 0, 1, 0, 0] // Row 5 (bottom)
] as const

const PRISM_WIDTH = 6
const PRISM_HEIGHT = 7
const PRISM_DEPTH = 8
const SIZE = 256

const LOGO_COLS = logoPattern[0].length
const LOGO_ROWS = logoPattern.length

const WHITE = 0xffffff

const halfWidth = PRISM_WIDTH / 2
const halfHeight = PRISM_HEIGHT / 2
const halfDepth = PRISM_DEPTH / 2

function pointsForLine(row: number, column: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []

  // Define the 8 vertices of the prism body (centered at group's origin)
  // Front face vertices (local Z = +halfDepth)
  const topLeftFront = new THREE.Vector3(-halfWidth, halfHeight, halfDepth)
  const topRightFront = new THREE.Vector3(halfWidth, halfHeight, halfDepth)
  const bottomRightFront = new THREE.Vector3(halfWidth, -halfHeight, halfDepth)
  const bottomLeftFront = new THREE.Vector3(-halfWidth, -halfHeight, halfDepth)

  // Back face vertices (local Z = -halfDepth)
  // Note: This matches the original script’s offset vertices.
  const topLeftBack = new THREE.Vector3(-halfWidth + halfWidth, halfHeight + halfHeight, -halfDepth)
  const topRightBack = new THREE.Vector3(halfWidth + halfWidth, halfHeight + halfHeight, -halfDepth)
  const bottomRightBack = new THREE.Vector3(halfWidth + halfWidth, -halfHeight + halfHeight, -halfDepth)
  const bottomLeftBack = new THREE.Vector3(-halfWidth + halfWidth, -halfHeight + halfHeight, -halfDepth)

  // Add points for lines extending "rearward" (front to back)
  points.push(topLeftFront, topLeftBack)
  points.push(topRightFront, topRightBack)
  points.push(bottomRightFront, bottomRightBack)
  points.push(bottomLeftFront, bottomLeftBack)

  // Add points for horizontal/vertical lines "across" the back face
  if (logoPattern[row - 1]?.[column] !== 1) {
    points.push(topLeftBack, topRightBack)
  }

  if (logoPattern[row]?.[column + 1] !== 1) {
    points.push(topRightBack, bottomRightBack)
  }

  return points
}

function createPrism(row: number, column: number): THREE.Group {
  const prismGroup = new THREE.Group()

  // Front face
  const frontMaterial = new THREE.MeshBasicMaterial({
    color: WHITE,
    side: THREE.DoubleSide
  })
  const frontFaceGeometry = new THREE.PlaneGeometry(PRISM_WIDTH, PRISM_HEIGHT)
  const frontFaceMesh = new THREE.Mesh(frontFaceGeometry, frontMaterial)
  frontFaceMesh.position.z = PRISM_DEPTH / 2
  prismGroup.add(frontFaceMesh)

  // Depth lines
  const depthLineMaterial = new THREE.LineBasicMaterial({
    color: WHITE
  })
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(pointsForLine(row, column))
  const customLines = new THREE.LineSegments(lineGeometry, depthLineMaterial)
  prismGroup.add(customLines)

  return prismGroup
}

const GaintainLogo3D = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    // Clear any previous mount
    container.innerHTML = ''

    // Scene
    const scene = new THREE.Scene()

    // Camera (orthographic, matching the original)
    const camera = new THREE.OrthographicCamera(-35, 35, 35, -35, 0.1, 1000)
    camera.position.set(0, 0, 50)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(SIZE, SIZE)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 20, 30)
    scene.add(directionalLight)

    const logoContainer = new THREE.Group()

    for (let columnIndex = 0; columnIndex < LOGO_COLS; columnIndex++) {
      for (let rowIndex = 0; rowIndex < LOGO_ROWS; rowIndex++) {
        const cell = logoPattern?.[rowIndex]?.[columnIndex] ?? 0
        if (cell === 1) {
          const prism = createPrism(rowIndex, columnIndex)
          const x = columnIndex * PRISM_WIDTH
          const y = -rowIndex * PRISM_HEIGHT
          prism.position.set(x, y, 0)
          logoContainer.add(prism)
        }
      }
    }

    const orderedPrisms = logoContainer.children

    // Center the logo container
    const box = new THREE.Box3().setFromObject(logoContainer)
    const center = box.getCenter(new THREE.Vector3())
    logoContainer.position.sub(center)
    scene.add(logoContainer)

    const animatePrisms = (): void => {
      orderedPrisms.forEach((prism, index) => {
        prism.rotation.y = 0
        prism.rotation.x = 0

        gsap.to(prism.rotation, {
          x: Math.PI * 2,
          duration: 1,
          delay: index * 0.075,
          ease: 'power1.inOut'
        })
      })
    }

    // Kick off and repeat (matches original timing)
    const intervalId = window.setInterval(() => {
      animatePrisms()
    }, 3000)

    let rafId = 0
    const tick = (): void => {
      rafId = window.requestAnimationFrame(tick)
      renderer.render(scene, camera)
    }
    tick()

    const handleResize = (): void => {
      // Keep it square; use the smaller of container box or provided size.
      const rect = container.getBoundingClientRect()
      const next = Math.max(1, Math.floor(Math.min(rect.width || SIZE, rect.height || SIZE, SIZE)))
      renderer.setSize(next, next, false)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    handleResize()

    return () => {
      window.clearInterval(intervalId)
      window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      renderer.dispose()
      container.innerHTML = ''
    }
  }, [])

  return <div ref={containerRef} />
}

export default GaintainLogo3D
