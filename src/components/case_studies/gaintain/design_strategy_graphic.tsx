import React, { useEffect, useRef, useState } from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const DesignStrategyGraphic = (): JSX.Element => {
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
  
  // Data points - curved line from AI Fitness Apps through GainTain to Human Coach (peak/asymptote)
  // Human Coach: peak/asymptote of the curve (highest point, center-right)
  const humanX = padding + (chartWidth * 0.7) // Center-right position for peak
  const humanY = padding + (chartHeight * 0.1) // Peak/asymptote - highest point on curve

  // AI Fitness apps: starting point (low y) and low cost (left x)
  const aiFitnessX = padding + (chartWidth * 0.15)
  const aiFitnessY = padding + (chartHeight * 0.85) // Bottom area for weak drop-off prevention

  // Create a logarithmic curve from AI Fitness Apps through GainTain to Human Coach (asymptote)
  // Control points positioned to create logarithmic curve shape
  // Logarithmic: steep initial rise that gradually flattens, approaching horizontal asymptote at Human Coach
  // First control point: positioned early to create steep initial rise (logarithmic characteristic)
  const cp1X = aiFitnessX + (humanX - aiFitnessX) * 0.25 // Early in the curve for steep initial rise
  const cp1Y = aiFitnessY - (isMobile ? 120 : 150) // Steep initial rise - logarithmic starts steep
  
  // Second control point: positioned to create horizontal asymptote at Human Coach
  // Logarithmic curves flatten out as they approach the asymptote
  // Set both X and Y to match Human Coach exactly so line ends at center of point
  const cp2X = humanX // Same X as Human Coach - creates horizontal approach (asymptote)
  const cp2Y = humanY // Same Y as Human Coach - ensures line ends exactly at center of point
  
  // Calculate GainTain position at t=0.5 on the cubic bezier curve
  // For cubic bezier: B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃
  const t = 0.5
  const gaintainX = Math.pow(1 - t, 3) * aiFitnessX + 3 * Math.pow(1 - t, 2) * t * cp1X + 3 * (1 - t) * Math.pow(t, 2) * cp2X + Math.pow(t, 3) * humanX
  const gaintainY = Math.pow(1 - t, 3) * aiFitnessY + 3 * Math.pow(1 - t, 2) * t * cp1Y + 3 * (1 - t) * Math.pow(t, 2) * cp2Y + Math.pow(t, 3) * humanY
  
  // Use De Casteljau's algorithm to split the curve at t=0.5
  // This gives us two cubic bezier curves that connect perfectly at GainTain
  // Step 1: First level of interpolation
  const q1X = aiFitnessX + (cp1X - aiFitnessX) * t
  const q1Y = aiFitnessY + (cp1Y - aiFitnessY) * t
  const q2X = cp1X + (cp2X - cp1X) * t
  const q2Y = cp1Y + (cp2Y - cp1Y) * t
  const q3X = cp2X + (humanX - cp2X) * t
  const q3Y = cp2Y + (humanY - cp2Y) * t
  
  // Step 2: Second level of interpolation
  const r1X = q1X + (q2X - q1X) * t
  const r1Y = q1Y + (q2Y - q1Y) * t
  const r2X = q2X + (q3X - q2X) * t
  const r2Y = q2Y + (q3Y - q2Y) * t
  
  // Step 3: Final point (GainTain) - should match our calculated gaintainX/Y
  // First segment control points: aiFitnessX/Y, q1X/Y, r1X/Y, gaintainX/Y
  // Second segment control points: gaintainX/Y, r2X/Y, q3X/Y, humanX/Y
  
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
  }, [aiFitnessX, aiFitnessY, cp1X, cp1Y, cp2X, cp2Y, humanX, humanY])


  // Handle dot animation completion
  useEffect(() => {
    if (pathLength && isInView) {
      // Dot animation duration is 1.5s + 0.3s delay = 1.8s total
      const timeout = setTimeout(() => {
        setDotAnimationComplete(true)
      }, 1800)
      return () => clearTimeout(timeout)
    }
  }, [pathLength, isInView])

  // IntersectionObserver to trigger animation when section scrolls into view
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
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
  }, [isInView])
  
  return (
                <div className='design-strategy-graphic-container' ref={containerRef}>
                  <svg ref={svgRef} className='design-strategy-graphic' viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: '100%' }}>
        <defs>
          {/* Gradient for line from AI Fitness Apps to Human Coach - using GainTain gradient colors */}
          <linearGradient id='gaintain-line-gradient' x1={aiFitnessX} y1={aiFitnessY} x2={humanX} y2={humanY} gradientUnits='userSpaceOnUse'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
          {/* Gradient for animated dot */}
          <linearGradient id='gaintain-gradient-design-strategy' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
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
        
        {/* Y-axis label: Strong (top) */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={padding - (isMobile ? 12 : 18)}
          textAnchor='end'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Strong
        </text>
        
        {/* Y-axis label: Weak (bottom) - positioned above the axis line */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={weakLabelY}
          textAnchor='end'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Weak
        </text>
        
        {/* Y-axis title - centered between Strong and Weak, rotated to cross the axis */}
        <text
          x={padding - (isMobile ? 12 : 15)}
          y={yAxisTitleY}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-title'
          fontSize={isMobile ? '11' : '12'}
          transform={`rotate(-90 ${padding - (isMobile ? 12 : 15)} ${yAxisTitleY})`}
        >
          Drop off Prevention
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
        
        {/* X-axis label: Low (left) - positioned at the corner */}
        <text
          x={padding}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          Low
        </text>
        
        {/* X-axis title - inline between Low and High */}
        <text
          x={padding + (chartWidth / 2)}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-title'
          fontSize={isMobile ? '11' : '12'}
        >
          Accountability Cost
        </text>
        
        {/* X-axis label: High (right) */}
        <text
          x={padding + chartWidth}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-axis-label'
        >
          High
        </text>
        
        {/* Academic/data-style straight lines connecting points */}
        {/* Continuous curved line from AI Fitness Apps to Human Coach */}
        {/* Grey outline - always visible */}
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${humanX} ${humanY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.25)'}
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
        />
        {/* Path for dot motion - invisible but used for animation */}
        <path
          ref={motionPathRef}
          id='gaintain-motion-path'
          d={`M ${aiFitnessX} ${aiFitnessY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${humanX} ${humanY}`}
          fill='none'
          stroke='transparent'
          strokeWidth='1'
        />
        {/* Continuous line from AI Fitness Apps to Human Coach (with GainTain gradient and animation) */}
        <path
          ref={gradientPathRef}
          id='gaintain-line-path'
          d={`M ${aiFitnessX} ${aiFitnessY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${humanX} ${humanY}`}
          fill='none'
          stroke='url(#gaintain-line-gradient)'
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
          strokeDasharray={pathLength ? `${pathLength}` : 'none'}
          strokeDashoffset={pathLength ? `${pathLength}` : '0'}
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
          fill='url(#gaintain-gradient-design-strategy)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          opacity={pathLength ? 1 : 0}
        >
          <animateMotion
            dur='1.5s'
            begin='indefinite'
            fill='freeze'
            calcMode='linear'
            keyTimes='0;1'
          >
            <mpath href='#gaintain-motion-path' />
          </animateMotion>
        </circle>
        
        {/* AI Fitness apps point - with GainTain gradient fill */}
        <circle
          cx={aiFitnessX}
          cy={aiFitnessY}
          r={isMobile ? '4' : '5'}
          fill='url(#gaintain-gradient-design-strategy)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={aiFitnessX + (isMobile ? 12 : 15)}
          y={aiFitnessY}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-point-label'
        >
          Fitness Apps
        </text>
        
        {/* Human Coach point - grey until animation completes, then gradient fill */}
        <circle
          cx={humanX}
          cy={humanY}
          r={isMobile ? '4' : '5'}
          fill={dotAnimationComplete ? 'url(#gaintain-gradient-design-strategy)' : (darkMode ? '#9CA3AF' : '#6B7280')}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          style={{
            transition: 'fill 0.3s ease-in'
          }}
        />
        <text
          x={humanX}
          y={humanY - (isMobile ? 12 : 15)}
          textAnchor='middle'
          dominantBaseline='bottom'
          className='design-strategy-point-label'
        >
          Human Coach
        </text>
        
      </svg>
    </div>
  )
}

export default DesignStrategyGraphic
