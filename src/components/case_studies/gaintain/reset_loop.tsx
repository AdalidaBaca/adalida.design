import React, { useEffect, useRef, useState } from 'react'

import useIsMobile from 'hooks/use_is_mobile'

interface Point {
  x: number
  y: number
}

interface LabelConfig {
  text: string | string[] // Single line text or array of lines for multi-line
  width: number
  dotIndex: number // Which dot (0-3) this label corresponds to
  animationClass: string // CSS class for animation (n1, n2, n3, n4, drop)
  placement: 'left' | 'right' | 'top' | 'bottom' // Where to place label relative to dot
}

// Explicit map from labels to their configuration
const LABEL_CONFIGS: LabelConfig[] = [
  { text: ['NEW GOAL', '/ PROGRAM'], width: 180, dotIndex: 0, animationClass: 'n4', placement: 'left' },  // Left dot -> label to the left
  { text: 'SELF TRAINING / TRAINER', width: 160, dotIndex: 1, animationClass: 'n1', placement: 'top' },              // Top dot -> label above
  { text: 'RINSE AND REPEAT', width: 240, dotIndex: 2, animationClass: 'n2', placement: 'right' }, // Right dot -> label to the right
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
  const textRefs = useRef<(SVGTextElement | null)[]>([])
  const [labelWidths, setLabelWidths] = useState<number[]>([180, 160, 240, 160]) // Initial widths
  const isMobile = useIsMobile(768)

  // Measure text widths after rendering
  useEffect(() => {
    const measureTexts = () => {
      const widths: number[] = []
      const padding = 40 // Horizontal padding (20px on each side) - increased for better fit

      textRefs.current.forEach((textEl, index) => {
        if (textEl !== null) {
          try {
            // For multi-line text, getComputedTextLength() returns the width of the widest line
            const textWidth = textEl.getComputedTextLength()
            if (textWidth > 0) {
              // Add padding to hug content
              widths.push(textWidth + padding)
            } else {
              widths.push(LABEL_CONFIGS[index].width)
            }
          } catch {
            // Fallback to config width if measurement fails
            widths.push(LABEL_CONFIGS[index].width)
          }
        } else {
          widths.push(LABEL_CONFIGS[index].width)
        }
      })

      if (widths.length === LABEL_CONFIGS.length) {
        // Only update if widths have changed
        const hasChanged = widths.some((w, i) => Math.abs(w - (labelWidths[i] || LABEL_CONFIGS[i].width)) > 1)
        if (hasChanged) {
          setLabelWidths(widths)
        }
      }
    }

    // Measure after a short delay to ensure text is rendered
    const timeoutId = setTimeout(measureTexts, 100)
    requestAnimationFrame(measureTexts)

    return () => clearTimeout(timeoutId)
  }, [labelPositions])

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
      const baseLabelHeight = isMobile ? 40 : 56 // Smaller height on mobile
      const lineHeight = isMobile ? 20 : 28 // Height per line of text (smaller on mobile)
      const gap = 20 // Gap between dot and label
      const labels: Point[] = []
      const labelHeights: number[] = []

      for (let i = 0; i < LABEL_CONFIGS.length; i++) {
        const config = LABEL_CONFIGS[i]
        const isMultiLine = Array.isArray(config.text)
        const height = isMultiLine ? baseLabelHeight + lineHeight : baseLabelHeight
        labelHeights.push(height)
      }

      for (let i = 0; i < LABEL_CONFIGS.length; i++) {
        const config = LABEL_CONFIGS[i]
        const dot = dots[config.dotIndex]
        const width = labelWidths[i] || config.width
        const height = labelHeights[i]
        let x: number
        let y: number

        switch (config.placement) {
          case 'left':
            // Label to the left of dot, vertically centered on dot's y
            // On mobile, position inside ellipse on the left side, closer to center
            if (isMobile) {
              x = dot.x - (width / 2) - 30 // Position inside ellipse, shifted left from center (reduced offset)
              y = dot.y - (height / 2) // Vertically centered on dot
            } else {
              x = dot.x - width - gap
              y = dot.y - (height / 2)
            }
            break
          case 'right':
            // Label to the right of dot, vertically centered on dot's y
            // On mobile, position inside ellipse on the right side, closer to center
            if (isMobile) {
              x = dot.x - (width / 2) + 30 // Position inside ellipse, shifted right from center (reduced offset)
              y = dot.y - (height / 2) // Vertically centered on dot
            } else {
              x = dot.x + gap
              y = dot.y - (height / 2)
            }
            break
          case 'top':
            // Label above dot, horizontally centered on dot's x
            x = dot.x - (width / 2)
            y = dot.y - height - gap
            break
          case 'bottom':
            // Label below dot, horizontally centered on dot's x
            x = dot.x - (width / 2)
            y = dot.y + gap
            break
        }

        labels.push({ x, y })
      }

      setLabelPositions(labels)

      // Calculate viewBox bounds to include ellipse and all labels
      // Ellipse bounds: x from 120 to 1080, y from 50 to 210 (center at 130, radius 80)
      const ellipseMinX = 120
      const ellipseMaxX = 1080
      const ellipseMinY = 50
      const ellipseMaxY = 210
      
      let minX = ellipseMinX
      let minY = ellipseMinY
      let maxX = ellipseMaxX
      let maxY = ellipseMaxY

      // Include label bounds
      for (let i = 0; i < labels.length; i++) {
        const label = labels[i]
        const width = labelWidths[i] || LABEL_CONFIGS[i].width
        const config = LABEL_CONFIGS[i]
        const isMultiLine = Array.isArray(config.text)
        const height = isMultiLine ? (isMobile ? 60 : 84) : (isMobile ? 40 : 56) // Smaller height on mobile
        
        // Calculate label bounds
        const labelMinX = label.x
        const labelMaxX = label.x + width
        const labelMinY = label.y
        const labelMaxY = label.y + height

        minX = Math.min(minX, labelMinX)
        maxX = Math.max(maxX, labelMaxX)
        minY = Math.min(minY, labelMinY)
        maxY = Math.max(maxY, labelMaxY)
      }

      // Add padding - more on mobile to account for scaling and keep labels within card
      // Reduce padding to ensure left/right labels are visible
      const padding = isMobile ? 60 : 30
      minX -= padding
      minY -= padding
      maxX += padding
      maxY += padding

      // Calculate content dimensions
      const contentWidth = maxX - minX
      const contentHeight = maxY - minY
      
      // Center the content vertically - ensure ellipse is centered
      // Calculate the center of the ellipse in the content
      const ellipseCenterY = 130
      const contentCenterY = minY + (contentHeight / 2)
      const verticalOffset = ellipseCenterY - contentCenterY
      
      // Adjust minY and maxY to center the ellipse
      const centeredMinY = minY - verticalOffset
      const centeredMaxY = maxY - verticalOffset

      // Update viewBox - centered vertically
      setViewBox(`${minX} ${centeredMinY} ${contentWidth} ${contentHeight}`)
    }

    const timeoutId = setTimeout(calculatePositions, 50)
    requestAnimationFrame(calculatePositions)

    return () => clearTimeout(timeoutId)
  }, [labelWidths, isMobile]) // Depend on labelWidths and isMobile to re-calculate positions

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
        '--path-length': `${pathLength}px`,
        '--initial-fill': `${pathLength * 0.25}px`,  // First 25% already filled (0% to 25%)
        '--final-fill': `${pathLength * 0.75}px`      // End: filled from 0% to 75% (Planning to Drop-off)
      } as React.CSSProperties}
    >
      <svg viewBox={viewBox} role='img'>
        <defs>
          <linearGradient id='gaintain-gradient' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='userSpaceOnUse'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
          <linearGradient id='gaintain-gradient-label' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
          <linearGradient id='gaintain-gradient-stroke' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
        </defs>
        
        {/* Ghost ellipse - static gray background that appears to get "colored in" */}
        <path
          className='loop-ghost'
          d='M 120,130 A 480,80 0 1,1 1080,130 A 480,80 0 1,1 120,130'
          fill='none'
        />
        
        {/* Path - wide ellipse, continuous in one direction, closes smoothly at minimum x */}
        <path
          ref={pathRef}
          className='loop'
          d='M 120,130 A 480,80 0 1,1 1080,130 A 480,80 0 1,1 120,130'
          fill='none'
          stroke='url(#gaintain-gradient)'
          style={{ 
            strokeDasharray: `${pathLength * 0.25} ${pathLength}`, // Start: first 25% already filled
            strokeDashoffset: 0 // Start from beginning of path
          }}
        />

        {/* Thick dots at each quarter of the path - visible before animation */}
        {dotPositions.map((point, index) => (
          <circle
            key={`dot-${index}`}
            className={`quarter-dot quarter-dot-${index}`}
            cx={point.x}
            cy={point.y}
            r='6'
            fill='url(#gaintain-gradient)'
          />
        ))}

        {/* Labels - positioned below the ellipse, aligned with their corresponding dots */}
        {LABEL_CONFIGS.map((config, index) => {
          const position = labelPositions[index]
          const width = labelWidths[index] || config.width
          const textX = width / 2 // Center text horizontally
          const isMultiLine = Array.isArray(config.text)
          const rectHeight = isMultiLine ? 84 : 56 // 56 base + 28 for second line
          // Center text vertically in the card
          // Using dominantBaseline='middle', so y should be at the vertical center
          const textStartY = rectHeight / 2
          // Only Drop-off (n3) gets gradient fill
          const hasGradient = config.animationClass.includes('n3')
          // Labels that get gradient border when ellipse passes: n1, n2, n4
          const hasGradientBorder = config.animationClass.includes('n1') || config.animationClass.includes('n2') || config.animationClass.includes('n4')
          return (
            <g key={`label-${index}`} transform={`translate(${position.x} ${position.y})`}>
              <g className={`node ${config.animationClass}`}>
                {/* Background rect (white/dark) */}
                <rect 
                  rx='14' ry='14' 
                  width={width} 
                  height={rectHeight} 
                  className='node-bg'
                />
                {/* Gradient border rect (animated) - appears when ellipse passes */}
                {hasGradientBorder && (
                  <rect 
                    rx='14' ry='14' 
                    width={width} 
                    height={rectHeight} 
                    fill='none'
                    stroke='url(#gaintain-gradient-stroke)'
                    strokeWidth='2'
                    className={`node-border-gradient ${config.animationClass}`}
                  />
                )}
                {/* Gradient fill rect (animated) - only for Drop-off */}
                {hasGradient && (
                  <rect 
                    rx='14' ry='14' 
                    width={width} 
                    height={rectHeight} 
                    fill='url(#gaintain-gradient-label)'
                    className={`node-gradient ${config.animationClass}`}
                  />
                )}
                <text 
                  ref={(el) => { textRefs.current[index] = el }}
                  x={textX} 
                  y={textStartY}
                  textAnchor='middle'
                  dominantBaseline='middle'
                  className={`node-text ${hasGradient ? 'node-text-gradient' : ''}`}
                >
                  {Array.isArray(config.text) ? (
                    config.text.map((line, lineIndex) => (
                      <tspan
                        key={lineIndex}
                        x={textX}
                        dy={lineIndex === 0 ? '-0.6em' : '1.2em'}
                      >
                        {line}
                      </tspan>
                    ))
                  ) : (
                    config.text.toUpperCase()
                  )}
                </text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default ResetLoop
