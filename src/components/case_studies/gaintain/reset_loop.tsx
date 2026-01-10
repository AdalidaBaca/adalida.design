import React, { useEffect, useRef, useState } from 'react'

interface Point {
  x: number
  y: number
}

interface LabelConfig {
  text: string
  width: number
  dotIndex: number // Which dot (0-3) this label corresponds to
  animationClass: string // CSS class for animation (n1, n2, n3, n4, drop)
  placement: 'left' | 'right' | 'top' | 'bottom' // Where to place label relative to dot
}

// Explicit map from labels to their configuration
const LABEL_CONFIGS: LabelConfig[] = [
  { text: 'New goal or program', width: 220, dotIndex: 0, animationClass: 'n4', placement: 'left' },  // Left dot -> label to the left
  { text: 'Planning', width: 160, dotIndex: 1, animationClass: 'n1', placement: 'top' },              // Top dot -> label above
  { text: 'Life gets in the way', width: 240, dotIndex: 2, animationClass: 'n2', placement: 'right' }, // Right dot -> label to the right
  { text: 'Drop-off', width: 160, dotIndex: 3, animationClass: 'n3 drop', placement: 'bottom' }        // Bottom dot -> label below
]

const ResetLoop = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [pathLength, setPathLength] = useState<number>(1600)
  const [dotPositions, setDotPositions] = useState<Point[]>([
    { x: 120, y: 130 },  // Left (0%)
    { x: 600, y: 50 },   // Top (25%)
    { x: 1080, y: 130 }, // Right (50%)
    { x: 600, y: 210 }   // Bottom (75%)
  ])
  // Initial label positions: outside ellipse, aligned with dots
  const [labelPositions, setLabelPositions] = useState<Point[]>([
    { x: -100, y: 105 },   // New goal or program - to the left of left dot
    { x: 520, y: -10 },    // Planning - above top dot
    { x: 1120, y: 105 },   // Life gets in the way - to the right of right dot
    { x: 520, y: 230 }     // Drop-off - below bottom dot
  ])
  const [viewBox, setViewBox] = useState<string>('0 0 1200 260')

  // Calculate path length, dot positions, and label positions
  useEffect(() => {
    const path = pathRef.current
    if (path === null) return

    const calculatePositions = () => {
      const totalLength = path.getTotalLength()
      if (totalLength === 0) {
        requestAnimationFrame(calculatePositions)
        return
      }

      setPathLength(totalLength)

      const numDots = 4
      const segmentLength = totalLength / numDots

      // Calculate dot positions at each quarter
      const dots: Point[] = []
      for (let i = 0; i < numDots; i++) {
        const distance = i * segmentLength
        const point = path.getPointAtLength(distance)
        dots.push({ x: point.x, y: point.y })
      }
      setDotPositions(dots)

      // Calculate label positions outside the ellipse, aligned with their corresponding dots
      const labelHeight = 50
      const gap = 20 // Gap between dot and label
      const labels: Point[] = []

      for (const config of LABEL_CONFIGS) {
        const dot = dots[config.dotIndex]
        let x: number
        let y: number

        switch (config.placement) {
          case 'left':
            // Label to the left of dot, vertically centered on dot's y
            x = dot.x - config.width - gap
            y = dot.y - (labelHeight / 2)
            break
          case 'right':
            // Label to the right of dot, vertically centered on dot's y
            x = dot.x + gap
            y = dot.y - (labelHeight / 2)
            break
          case 'top':
            // Label above dot, horizontally centered on dot's x
            x = dot.x - (config.width / 2)
            y = dot.y - labelHeight - gap
            break
          case 'bottom':
            // Label below dot, horizontally centered on dot's x
            x = dot.x - (config.width / 2)
            y = dot.y + gap
            break
        }

        labels.push({ x, y })
      }

      setLabelPositions(labels)

      // Calculate viewBox bounds to include all labels
      let minX = 0
      let minY = 0
      let maxX = 1200
      let maxY = 260

      for (let i = 0; i < labels.length; i++) {
        const label = labels[i]
        const config = LABEL_CONFIGS[i]
        
        // Calculate label bounds
        const labelMinX = label.x
        const labelMaxX = label.x + config.width
        const labelMinY = label.y
        const labelMaxY = label.y + labelHeight

        minX = Math.min(minX, labelMinX)
        maxX = Math.max(maxX, labelMaxX)
        minY = Math.min(minY, labelMinY)
        maxY = Math.max(maxY, labelMaxY)
      }

      // Add padding
      const padding = 30
      minX -= padding
      minY -= padding
      maxX += padding
      maxY += padding

      // Update viewBox
      const width = maxX - minX
      const height = maxY - minY
      setViewBox(`${minX} ${minY} ${width} ${height}`)
    }

    const timeoutId = setTimeout(calculatePositions, 50)
    requestAnimationFrame(calculatePositions)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container === null) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry === undefined) return
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3, rootMargin: '0px' }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  return (
    <div 
      ref={containerRef} 
      className={`reset-loop ${isVisible ? 'animate' : ''}`} 
      aria-label='Fitness reset loop diagram'
      style={{ 
        '--path-length': `${pathLength}px`
      } as React.CSSProperties}
    >
      <svg viewBox={viewBox} role='img'>
        {/* Path - wide ellipse, continuous in one direction, closes smoothly at minimum x */}
        <path
          ref={pathRef}
          className='loop'
          d='M 120,130 A 480,80 0 1,1 1080,130 A 480,80 0 1,1 120,130'
          fill='none'
          style={{ 
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          }}
        />
        
        {/* Arrow head - positioned at the start of the ellipse */}
        <polygon className='arrow' points='120,130 140,125 140,135' />

        {/* Thick dots at each quarter of the path - revealed as animation passes */}
        {dotPositions.map((point, index) => (
          <circle
            key={`dot-${index}`}
            className={`quarter-dot quarter-dot-${index}`}
            cx={point.x}
            cy={point.y}
            r='6'
            fill='rgba(0, 0, 0, 0.35)'
            opacity='0'
          />
        ))}

        {/* Labels - positioned below the ellipse, aligned with their corresponding dots */}
        {LABEL_CONFIGS.map((config, index) => {
          const position = labelPositions[index]
          return (
            <g key={`label-${index}`} transform={`translate(${position.x} ${position.y})`}>
              <g className={`node ${config.animationClass}`}>
                <rect rx='14' ry='14' width={config.width} height='50' />
                <text x='18' y='32'>{config.text}</text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default ResetLoop
