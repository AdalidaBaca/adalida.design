import React, { useEffect, useRef, useState } from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const DesignStrategyGraphic = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)
  const gradientPathRef = useRef<SVGPathElement>(null)
  const gaintainLabelRef = useRef<SVGTextElement>(null)
  const motionPathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState<number | null>(null)
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false)
  const [dotAnimationComplete, setDotAnimationComplete] = useState(false)
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
  
  // Data points - curved line from Human Coach to AI Fitness Apps
  // Human: strong (high y) and costly (right x)
  const humanX = padding + (chartWidth * 0.85)
  const humanY = padding + (chartHeight * 0.2) // Top area for strong drop-off prevention

  // AI Fitness apps: some drop-off prevention (middle-low y) and low cost (left x)
  const aiFitnessX = padding + (chartWidth * 0.15)
  const aiFitnessY = padding + (chartHeight * 0.85) // Bottom area for weak drop-off prevention

  // Create a smooth continuous curve from AI Fitness Apps to Human Coach
  // Use a cubic bezier with control points positioned for natural upward parabolic curve
  const cp1X = aiFitnessX + (humanX - aiFitnessX) * 0.3
  const cp1Y = aiFitnessY - (isMobile ? 50 : 70) // First control point above AI Fitness Apps
  const cp2X = humanX - (humanX - aiFitnessX) * 0.3
  const cp2Y = humanY - (isMobile ? 30 : 40) // Second control point above Human Coach
  
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
  }, [aiFitnessX, aiFitnessY, q1X, q1Y, r1X, r1Y, gaintainX, gaintainY])

  // Set initial state of GainTain label to be invisible (background color)
  useEffect(() => {
    if (gaintainLabelRef.current) {
      gaintainLabelRef.current.setAttribute('fill', darkMode ? '#090B0B' : '#F5F5F5')
    }
  }, [darkMode])

  // Animate GainTain label letter by letter after dot animation completes
  useEffect(() => {
    if (!dotAnimationComplete || !gaintainLabelRef.current) return

    const textElement = gaintainLabelRef.current
    const textContent = textElement.textContent || 'GainTain'
    const letters = textContent.split('')
    
    // Clear existing content and create letter spans
    while (textElement.firstChild) {
      textElement.removeChild(textElement.firstChild)
    }
    
    letters.forEach((letter, index) => {
      const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan')
      tspan.textContent = letter === ' ' ? '\u00A0' : letter
      tspan.setAttribute('class', 'animated-letter')
      tspan.setAttribute('opacity', '1')
      // Start with background color to be invisible on first load
      tspan.setAttribute('fill', darkMode ? '#090B0B' : '#F5F5F5')
      if (index > 0) {
        // Position each letter after the previous one
        tspan.setAttribute('dx', '0')
      }
      textElement.appendChild(tspan)
    })

    // Animate letters one by one
    const letterDelay = 80
    let currentIndex = 0

    const animateNext = (): void => {
      if (currentIndex < letters.length) {
        const tspans = textElement.querySelectorAll('tspan.animated-letter')
        if (tspans[currentIndex]) {
          tspans[currentIndex].setAttribute('opacity', '1')
          tspans[currentIndex].setAttribute('class', 'animated-letter filled')
          // Use same fill as Human Coach instead of gradient
          tspans[currentIndex].setAttribute('fill', darkMode ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.92)')
        }
        currentIndex++
        if (currentIndex < letters.length) {
          setTimeout(animateNext, letterDelay)
        }
      }
    }

    // Start animation after a short delay
    setTimeout(animateNext, 100)
  }, [dotAnimationComplete])

  // Handle dot animation completion
  useEffect(() => {
    if (pathLength) {
      // Dot animation duration is 2.5s + 0.5s delay = 3.0s total
      const timeout = setTimeout(() => {
        setDotAnimationComplete(true)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [pathLength])
  
  return (
                <div className='design-strategy-graphic-container'>
                  <svg className='design-strategy-graphic' viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: '100%' }}>
        <defs>
          {/* Gradient for line from GainTain to AI Fitness Apps - coordinates set dynamically */}
          <linearGradient id='gaintain-line-gradient' x1={gaintainX} y1={gaintainY} x2={aiFitnessX} y2={aiFitnessY} gradientUnits='userSpaceOnUse'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
          {/* Gradient for GainTain label text */}
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
          stroke={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.35)'}
          strokeWidth={isMobile ? '2' : '2.5'}
          strokeLinecap='round'
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
          stroke={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.35)'}
          strokeWidth={isMobile ? '2' : '2.5'}
          strokeLinecap='round'
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
        {/* Continuous curved line from AI Fitness Apps through GainTain to Human Coach */}
        {/* Grey outline - always visible */}
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${q1X} ${q1Y}, ${r1X} ${r1Y}, ${gaintainX} ${gaintainY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.25)'}
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
        />
        {/* Path for dot motion - invisible but used for animation */}
        <path
          ref={motionPathRef}
          id='gaintain-motion-path'
          d={`M ${aiFitnessX} ${aiFitnessY} C ${q1X} ${q1Y}, ${r1X} ${r1Y}, ${gaintainX} ${gaintainY}`}
          fill='none'
          stroke='transparent'
          strokeWidth='1'
        />
        {/* First segment: AI Fitness Apps to GainTain (with gradient and animation) */}
        <path
          ref={gradientPathRef}
          id='gaintain-line-path'
          d={`M ${aiFitnessX} ${aiFitnessY} C ${q1X} ${q1Y}, ${r1X} ${r1Y}, ${gaintainX} ${gaintainY}`}
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
            dur='2.5s'
            begin='0.5s'
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
            dur='2.5s'
            begin='0.5s'
            fill='freeze'
            calcMode='linear'
            keyTimes='0;1'
          >
            <mpath href='#gaintain-motion-path' />
          </animateMotion>
        </circle>
        {/* Second segment: GainTain to Human Coach (solid) */}
        <path
          d={`M ${gaintainX} ${gaintainY} C ${r2X} ${r2Y}, ${q3X} ${q3Y}, ${humanX} ${humanY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'}
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap='round'
        />
        
        {/* AI Fitness apps point - academic/data style */}
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
          AI Fitness Apps
        </text>
        
        {/* Gaintain point - static, appears when dot reaches it */}
        <circle
          cx={gaintainX}
          cy={gaintainY}
          r={isMobile ? '4' : '5'}
          fill='url(#gaintain-gradient-design-strategy)'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          opacity={dotAnimationComplete ? 1 : 0}
          style={{
            transition: 'opacity 0.3s ease-in'
          }}
        />
        <text
          ref={gaintainLabelRef}
          x={gaintainX + (isMobile ? 12 : 15)}
          y={gaintainY}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-point-label gaintain-label-animated'
          fill={darkMode ? '#090B0B' : '#F5F5F5'}
        >
          GainTain
        </text>
        
        {/* Human Coach point - academic/data style */}
        <circle
          cx={humanX}
          cy={humanY}
          r={isMobile ? '4' : '5'}
          fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
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
