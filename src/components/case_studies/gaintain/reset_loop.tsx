import React, { useEffect, useRef, useState } from 'react'

interface Point {
  x: number
  y: number
}

const ResetLoop = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [pathLength, setPathLength] = useState<number>(1600)
  const [nodePositions, setNodePositions] = useState<Point[]>([
    { x: 300, y: 215 },  // Planning - below ellipse, left
    { x: 480, y: 215 },  // Life gets in the way - below ellipse, center-left
    { x: 740, y: 215 },  // Drop-off - below ellipse, center-right
    { x: 920, y: 215 }   // New goal or program - below ellipse, right
  ])
  const [quarterPoints, setQuarterPoints] = useState<Point[]>([
    { x: 120, y: 130 },
    { x: 600, y: 50 },
    { x: 1080, y: 130 },
    { x: 600, y: 210 }
  ])

  // Calculate path length and equal-distance points along the path
  useEffect(() => {
    const path = pathRef.current
    if (path === null) return

    // Wait for SVG to be rendered and path to be measured
    const calculatePositions = () => {
      try {
        const totalLength = path.getTotalLength()
        if (totalLength === 0) {
          // Retry if path not ready
          requestAnimationFrame(calculatePositions)
          return
        }

        // Store the actual path length for animation
        setPathLength(totalLength)

        const numNodes = 4
        const segmentLength = totalLength / numNodes

        // Calculate quarter points for dots
        // Order: 0% (left), 25% (top), 50% (right), 75% (bottom)
        const quarterPositions: Point[] = []
        for (let i = 0; i < 4; i++) {
          const distance = i * segmentLength
          const point = path.getPointAtLength(distance)
          quarterPositions.push({ x: point.x, y: point.y })
        }
        setQuarterPoints(quarterPositions)
        
        // Position all labels below the ellipse
        // Ellipse bottom is around y=210 (center y=130 + radius y=80)
        // Place labels below at y=240
        const labelY = 240
        const labelWidths = [160, 240, 160, 220] // Width of each label rect: Planning, Life gets in the way, Drop-off, New goal or program
        const labelHeights = 50
        const labelGap = 20 // Gap between labels
        
        // Calculate total width of all labels plus gaps
        const totalWidth = labelWidths.reduce((sum, width) => sum + width, 0) + (labelGap * 3)
        const startX = (1200 - totalWidth) / 2 // Center the group horizontally
        
        // Arrange labels horizontally from left to right
        const nodePositionsWithOffset: Point[] = []
        let currentX = startX
        
        for (let i = 0; i < 4; i++) {
          const width = labelWidths[i]
          
          // Position each label, centered on its x position
          nodePositionsWithOffset.push({
            x: currentX,
            y: labelY - labelHeights / 2
          })
          
          // Move to next position
          currentX += width + labelGap
        }
        setNodePositions(nodePositionsWithOffset)
      } catch (error) {
        // Fallback to default positions if getTotalLength/getPointAtLength fails
        console.warn('Failed to calculate path points:', error)
      }
    }

    // Try immediately, then retry if needed
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
      <svg viewBox='0 0 1200 260' role='img'>
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
        {quarterPoints.map((point, index) => (
          <circle
            key={`quarter-${index}`}
            className={`quarter-dot quarter-dot-${index}`}
            cx={point.x}
            cy={point.y}
            r='6'
            fill='rgba(0, 0, 0, 0.35)'
            opacity='0'
          />
        ))}

        {/* Nodes - positioned below the ellipse in a horizontal row */}
        {/* Order: Planning, Life gets in the way, Drop-off, New goal or program */}
        <g transform={`translate(${nodePositions[0]?.x ?? 300} ${nodePositions[0]?.y ?? 240})`}>
          <g className='node n1'>
            <rect rx='14' ry='14' width='160' height='50' />
            <text x='18' y='32'>Planning</text>
          </g>
        </g>

        <g transform={`translate(${nodePositions[1]?.x ?? 480} ${nodePositions[1]?.y ?? 240})`}>
          <g className='node n2'>
            <rect rx='14' ry='14' width='240' height='50' />
            <text x='18' y='32'>Life gets in the way</text>
          </g>
        </g>

        <g transform={`translate(${nodePositions[2]?.x ?? 740} ${nodePositions[2]?.y ?? 240})`}>
          <g className='node n3 drop'>
            <rect rx='14' ry='14' width='160' height='50' />
            <text x='18' y='32'>Drop-off</text>
          </g>
        </g>

        <g transform={`translate(${nodePositions[3]?.x ?? 920} ${nodePositions[3]?.y ?? 240})`}>
          <g className='node n4'>
            <rect rx='14' ry='14' width='220' height='50' />
            <text x='18' y='32'>New goal or program</text>
          </g>
        </g>
      </svg>
    </div >
  )
}

export default ResetLoop
