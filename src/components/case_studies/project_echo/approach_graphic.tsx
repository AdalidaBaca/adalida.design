import React, { useEffect, useRef, useState } from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const ApproachGraphic = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)
  const gradientPathRef = useRef<SVGPathElement>(null)
  const motionPathRef = useRef<SVGPathElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [pathLength, setPathLength] = useState<number | null>(null)
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false)
  const [dotAnimationComplete, setDotAnimationComplete] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasAnimatedBefore, setHasAnimatedBefore] = useState(false)
  // Graph dimensions - responsive, adjusted width and height for better fit
  const graphWidth = isMobile ? 300 : 400
  const graphHeight = isMobile ? 350 : 380
  const padding = isMobile ? 60 : 70 // Increased padding to prevent clipping
  const chartWidth = graphWidth - (padding * 2)
  const chartHeight = graphHeight - (padding * 2)
  
  // Axis label positions
  const strongLabelY = padding - (isMobile ? 12 : 18)
  const weakLabelY = padding + chartHeight - (isMobile ? 12 : 15) // Above the axis line endpoint
  const yAxisTitleY = (strongLabelY + weakLabelY) / 2 // Center between Strong and Weak
  
  // Data points - curved line from Venn Diagram + Lists through Matrix-based visualizations to Interactive Set Comparisons
  // Interactive Set Comparisons: peak/asymptote of the curve (highest point, center-right)
  const interactiveX = padding + (chartWidth * 0.7) // Center-right position for peak
  const interactiveY = padding + (chartHeight * 0.1) // Peak/asymptote - highest point on curve

  // Venn Diagram + Lists: starting point (low y) and low cost (left x)
  const vennX = padding + (chartWidth * 0.15)
  const vennY = padding + (chartHeight * 0.85) // Bottom area for weak drop-off prevention

  // Create a logarithmic curve from Venn Diagram + Lists through Matrix-based visualizations to Interactive Set Comparisons
  // Control points positioned to create logarithmic curve shape
  // Logarithmic: steep initial rise that gradually flattens, approaching horizontal asymptote at Interactive Set Comparisons
  // First control point: positioned early to create steep initial rise (logarithmic characteristic)
  const cp1X = vennX + (interactiveX - vennX) * 0.25 // Early in the curve for steep initial rise
  const cp1Y = vennY - (isMobile ? 120 : 150) // Steep initial rise - logarithmic starts steep
  
  // Second control point: positioned to create horizontal asymptote at Interactive Set Comparisons
  // Logarithmic curves flatten out as they approach the asymptote
  // Set both X and Y to match Interactive Set Comparisons exactly so line ends at center of point
  const cp2X = interactiveX // Same X as Interactive Set Comparisons - creates horizontal approach (asymptote)
  const cp2Y = interactiveY // Same Y as Interactive Set Comparisons - ensures line ends exactly at center of point
  
  // Calculate Matrix-based position at t=0.3 on the cubic bezier curve (lower on curve for middle-bottom position)
  // For cubic bezier: B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃
  const t = 0.3
  const matrixX = Math.pow(1 - t, 3) * vennX + 3 * Math.pow(1 - t, 2) * t * cp1X + 3 * (1 - t) * Math.pow(t, 2) * cp2X + Math.pow(t, 3) * interactiveX
  const matrixY = Math.pow(1 - t, 3) * vennY + 3 * Math.pow(1 - t, 2) * t * cp1Y + 3 * (1 - t) * Math.pow(t, 2) * cp2Y + Math.pow(t, 3) * interactiveY
  
  // Use De Casteljau's algorithm to split the curve at t=0.3
  // This gives us two cubic bezier curves that connect perfectly at Matrix-based
  // Step 1: First level of interpolation
  const q1X = vennX + (cp1X - vennX) * t
  const q1Y = vennY + (cp1Y - vennY) * t
  const q2X = cp1X + (cp2X - cp1X) * t
  const q2Y = cp1Y + (cp2Y - cp1Y) * t
  const q3X = cp2X + (interactiveX - cp2X) * t
  const q3Y = cp2Y + (interactiveY - cp2Y) * t
  
  // Step 2: Second level of interpolation
  const r1X = q1X + (q2X - q1X) * t
  const r1Y = q1Y + (q2Y - q1Y) * t
  const r2X = q2X + (q3X - q2X) * t
  const r2Y = q2Y + (q3Y - q2Y) * t
  
  // Step 3: Final point (Matrix-based) - should match our calculated matrixX/Y
  // First segment control points: vennX/Y, q1X/Y, r1X/Y, matrixX/Y
  // Second segment control points: matrixX/Y, r2X/Y, q3X/Y, interactiveX/Y
  
  // Check if animation has been played before
  useEffect(() => {
    const hasPlayed = localStorage.getItem('project-echo-approach-graphic-animated') === 'true'
    setHasAnimatedBefore(hasPlayed)
    if (hasPlayed) {
      // If already animated, set final states immediately
      setLineAnimationComplete(true)
      setDotAnimationComplete(true)
    }
  }, [])

  // Calculate path length for animation
  useEffect(() => {
    if (gradientPathRef.current) {
      try {
        const length = gradientPathRef.current.getTotalLength()
        if (Number.isFinite(length) && length > 0) {
          setPathLength(length)
        }
      } catch {
        // Path might not be rendered yet, will retry
      }
    }
    if (motionPathRef.current) {
      try {
        const length = motionPathRef.current.getTotalLength()
        if (Number.isFinite(length) && length > 0) {
          // Path length is set, motion path is ready
        }
      } catch {
        // Path might not be rendered yet, will retry
      }
    }
  }, [vennX, vennY, cp1X, cp1Y, cp2X, cp2Y, interactiveX, interactiveY])


  // Handle dot animation completion
  useEffect(() => {
    if (pathLength && isInView && !hasAnimatedBefore) {
      // Dot animation duration is 1.5s + 0.3s delay = 1.8s total
      const timeout = setTimeout(() => {
        setDotAnimationComplete(true)
        // Mark animation as complete in localStorage
        localStorage.setItem('project-echo-approach-graphic-animated', 'true')
      }, 1800)
      return () => clearTimeout(timeout)
    }
  }, [pathLength, isInView, hasAnimatedBefore])

  // IntersectionObserver to trigger animation when section scrolls into view
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
            // Only trigger animation if it hasn't been played before
            if (!hasAnimatedBefore) {
              // Manually trigger the animations after a short delay
              setTimeout(() => {
                if (svgRef.current) {
                  const lineAnimate = svgRef.current.querySelector('animate[attributeName="stroke-dashoffset"]')
                  const dotAnimate = svgRef.current.querySelector('animateMotion')
                  if (lineAnimate && lineAnimate instanceof SVGAnimateElement) {
                    lineAnimate.beginElement()
                  }
                  if (dotAnimate && dotAnimate instanceof SVGAnimateMotionElement) {
                    dotAnimate.beginElement()
                  }
                }
              }, 300) // 0.3s delay
            }
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }
    )

    observer.observe(container)
    return () => {
      observer.disconnect()
    }
  }, [isInView, hasAnimatedBefore])
  
  return (
    <div className='design-strategy-graphic-container' ref={containerRef}>
      <svg ref={svgRef} className='design-strategy-graphic' viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: '100%' }}>
        <defs>
          {/* Gradient for line from Venn Diagram + Lists to Interactive Set Comparisons - using Project ECHO gradient colors */}
          <linearGradient id='project-echo-line-gradient' x1={vennX} y1={vennY} x2={interactiveX} y2={interactiveY} gradientUnits='userSpaceOnUse'>
            <stop offset='0%' stopColor='#0891B2' />
            <stop offset='100%' stopColor='#06B6D4' />
          </linearGradient>
          {/* Gradient for animated dot */}
          <linearGradient id='project-echo-gradient-approach' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#0891B2' />
            <stop offset='100%' stopColor='#06B6D4' />
          </linearGradient>
        </defs>
        
        {/* Y-axis: Drop off Prevention */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + chartHeight}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap='round'
        />
        {/* Up arrow at top (Strong) - pointing down */}
        <path
          d={`M ${padding},${padding} L ${padding - (isMobile ? 3 : 4)},${padding + (isMobile ? 5 : 6)} L ${padding + (isMobile ? 3 : 4)},${padding + (isMobile ? 5 : 6)} Z`}
          fill={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          stroke={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        
        {/* Y-axis label: Scales (top) */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={padding - (isMobile ? 12 : 18)}
          textAnchor='end'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Scales
        </text>
        
        {/* Y-axis label: Breaks (bottom) - positioned above the axis line */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={weakLabelY}
          textAnchor='end'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Breaks
        </text>
        
        {/* Y-axis title - centered between Scales and Breaks, rotated to cross the axis */}
        <text
          x={padding - (isMobile ? 12 : 15)}
          y={yAxisTitleY}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-title'
          fontSize={isMobile ? '11' : '12'}
          transform={`rotate(-90 ${padding - (isMobile ? 12 : 15)} ${yAxisTitleY})`}
        >
          Scales with Complexity
        </text>
        
        {/* X-axis: Accountability Cost */}
        <line
          x1={padding}
          y1={padding + chartHeight}
          x2={padding + chartWidth}
          y2={padding + chartHeight}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap='round'
        />
        {/* Right arrow (High) - pointing left */}
        <path
          d={`M ${padding + chartWidth},${padding + chartHeight} L ${padding + chartWidth - (isMobile ? 5 : 6)},${padding + chartHeight - (isMobile ? 3 : 4)} L ${padding + chartWidth - (isMobile ? 5 : 6)},${padding + chartHeight + (isMobile ? 3 : 4)} Z`}
          fill={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          stroke={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        
        {/* X-axis label: Easy (left) - positioned at the corner */}
        <text
          x={padding}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Easy
        </text>
        
        {/* X-axis title - inline between Easy and Hard */}
        <text
          x={padding + (chartWidth / 2)}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-title'
          fontSize={isMobile ? '11' : '12'}
        >
          ease of comparison
        </text>
        
        {/* X-axis label: Hard (right) */}
        <text
          x={padding + chartWidth}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Hard
        </text>
        
        {/* Academic/data-style straight lines connecting points */}
        {/* Continuous curved line from Venn Diagram + Lists to Interactive Set Comparisons */}
        {/* Grey outline - always visible */}
        <path
          d={`M ${vennX} ${vennY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${interactiveX} ${interactiveY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.25)'}
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
        />
        {/* Path for dot motion - invisible but used for animation */}
        <path
          ref={motionPathRef}
          id='project-echo-motion-path'
          d={`M ${vennX} ${vennY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${interactiveX} ${interactiveY}`}
          fill='none'
          stroke='transparent'
          strokeWidth='1'
        />
        {/* Continuous line from Venn Diagram + Lists to Interactive Set Comparisons (with Project ECHO gradient and animation) */}
        <path
          ref={gradientPathRef}
          id='project-echo-line-path'
          d={`M ${vennX} ${vennY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${interactiveX} ${interactiveY}`}
          fill='none'
          stroke='url(#project-echo-line-gradient)'
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
          strokeDasharray={pathLength ? `${pathLength}` : 'none'}
          strokeDashoffset={hasAnimatedBefore ? '0' : (pathLength ? `${pathLength}` : '0')}
        >
          <animate
            attributeName='stroke-dashoffset'
            from={pathLength ? `${pathLength}` : '0'}
            to='0'
            dur='1.5s'
            begin='indefinite'
            fill='freeze'
            calcMode='linear'
          />
        </path>
        {/* Animated dot that moves along the path - synchronized with line fill */}
        <circle
          r={isMobile ? '4' : '5'}
          fill='url(#project-echo-gradient-approach)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          opacity={pathLength ? 1 : 0}
          cx={hasAnimatedBefore ? interactiveX : undefined}
          cy={hasAnimatedBefore ? interactiveY : undefined}
        >
          {!hasAnimatedBefore && (
            <animateMotion
              dur='1.5s'
              begin='indefinite'
              fill='freeze'
              calcMode='linear'
              keyTimes='0;1'
            >
              <mpath href='#project-echo-motion-path' />
            </animateMotion>
          )}
        </circle>
        
        {/* Venn Diagram + Lists point - with Project ECHO gradient fill */}
        <circle
          cx={vennX}
          cy={vennY}
          r={isMobile ? '4' : '5'}
          fill='url(#project-echo-gradient-approach)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={vennX + (isMobile ? 12 : 15)}
          y={vennY}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-point-label'
        >
          Venn Diagram + Lists
        </text>
        
        {/* Matrix-based point - middle point on the curve */}
        <circle
          cx={matrixX}
          cy={matrixY}
          r={isMobile ? '4' : '5'}
          fill='url(#project-echo-gradient-approach)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={matrixX}
          y={matrixY - (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='bottom'
          className='design-strategy-point-label'
        >
          Matrix-based
        </text>
        
        {/* Interactive Comparisons point - grey until animation completes, then gradient fill */}
        <circle
          cx={interactiveX}
          cy={interactiveY}
          r={isMobile ? '4' : '5'}
          fill={dotAnimationComplete ? 'url(#project-echo-gradient-approach)' : (darkMode ? '#9CA3AF' : '#6B7280')}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          style={{
            transition: 'fill 0.3s ease-in'
          }}
        />
        <text
          x={interactiveX}
          y={interactiveY - (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='bottom'
          className='design-strategy-point-label'
        >
          Interactive Set Comparisons
        </text>
        
      </svg>
    </div>
  )
}

export default ApproachGraphic
