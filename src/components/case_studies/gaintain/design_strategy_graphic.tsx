import React from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const DesignStrategyGraphic = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)
  // Graph dimensions - responsive, adjusted width and height
  const graphWidth = isMobile ? 280 : 350 // Reduced width
  // Further reduced height to fit container better
  const graphHeight = isMobile ? 320 : 300 // Reduced desktop height significantly
  const padding = isMobile ? 50 : 50 // Reduced padding on desktop
  const chartWidth = graphWidth - (padding * 2)
  const chartHeight = graphHeight - (padding * 2)
  
  // Axis label positions
  const strongLabelY = padding - (isMobile ? 12 : 18)
  const weakLabelY = padding + chartHeight + (isMobile ? 12 : 15) // Aligned with Low label
  const yAxisTitleY = (strongLabelY + (padding + chartHeight + (isMobile ? 12 : 15))) / 2 // Center between Strong and Weak
  
  // Data points - moved down on y-axis
  // AI Fitness apps: some drop-off prevention (middle-low y) and low cost (left x)
  const aiFitnessX = padding + (chartWidth * 0.15)
  const aiFitnessY = padding + (chartHeight * 0.85) // Moved down

  // Gaintain: slightly higher x than AI Fitness Apps, moved down on y-axis
  const gaintainX = padding + (chartWidth * 0.25) // Slightly higher x (move right)
  const gaintainY = padding + (chartHeight * 0.5) // Moved down

  // Human: strong (high y) and costly (right x)
  const humanX = padding + (chartWidth * 0.85)
  const humanY = padding + (chartHeight * 0.4) // Moved down
  
  // Control points for smooth curved line from AI Fitness Apps to GainTain
  // Create a smooth downward curve
  const cp1x = aiFitnessX + (gaintainX - aiFitnessX) * 0.5
  const cp1y = aiFitnessY - (aiFitnessY - gaintainY) * 0.2 // Smooth curve downward
  const cp2x = gaintainX - (gaintainX - aiFitnessX) * 0.3
  const cp2y = gaintainY + (aiFitnessY - gaintainY) * 0.1 // Curve through GainTain
  // Second segment: GainTain to Human Coach (not highlighted)
  const cp3x = gaintainX + (humanX - gaintainX) * 0.2
  const cp3y = gaintainY - (gaintainY - humanY) * 0.2
  const cp4x = humanX - (humanX - gaintainX) * 0.5
  const cp4y = humanY + (gaintainY - humanY) * 0.3
  
  return (
                <div className='design-strategy-graphic-container'>
                  <svg className='design-strategy-graphic' viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: '100%' }}>
        <defs>
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
          stroke={darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'}
          strokeWidth={isMobile ? '1' : '1.5'}
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
        
        {/* Y-axis label: Weak (bottom) */}
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
          stroke={darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap='round'
        />
        
        {/* X-axis label: Low (left) - positioned further from corner to avoid overlap with Weak */}
        <text
          x={padding + (isMobile ? 15 : 20)}
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
        
        {/* Full curve from AI Fitness Apps through GainTain to Human Coach - shadow/outline */}
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${gaintainX} ${gaintainY} C ${cp3x} ${cp3y} ${cp4x} ${cp4y} ${humanX} ${humanY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}
          strokeWidth={isMobile ? '2.5' : '3'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* Highlighted segment: AI Fitness Apps to GainTain only */}
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${gaintainX} ${gaintainY}`}
          fill='none'
          stroke='url(#gaintain-gradient-design-strategy)'
          strokeWidth={isMobile ? '2' : '2.5'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* Unhighlighted segment: GainTain to Human Coach */}
        <path
          d={`M ${gaintainX} ${gaintainY} C ${cp3x} ${cp3y} ${cp4x} ${cp4y} ${humanX} ${humanY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'}
          strokeWidth={isMobile ? '2' : '2.5'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        
        {/* AI Fitness apps point */}
        <circle
          cx={aiFitnessX}
          cy={aiFitnessY}
          r={isMobile ? '5' : '7'}
          fill='url(#gaintain-gradient-design-strategy)'
          stroke='white'
          strokeWidth={isMobile ? '2' : '2.5'}
          opacity='0.95'
        />
        <circle
          cx={aiFitnessX}
          cy={aiFitnessY}
          r={isMobile ? '5' : '7'}
          fill='none'
          stroke='rgba(0, 0, 0, 0.08)'
          strokeWidth={isMobile ? '0.5' : '1'}
        />
        <text
          x={aiFitnessX + (isMobile ? 12 : 15)}
          y={aiFitnessY - (isMobile ? 35 : 40)}
          textAnchor='start'
          dominantBaseline='middle'
          className='design-strategy-point-label'
        >
          <tspan x={aiFitnessX + (isMobile ? 12 : 15)} dy='0'>AI Fitness</tspan>
          <tspan x={aiFitnessX + (isMobile ? 12 : 15)} dy='1.2em'>Apps</tspan>
        </text>
        
        {/* Gaintain point */}
        <circle
          cx={gaintainX}
          cy={gaintainY}
          r={isMobile ? '5' : '7'}
          fill='url(#gaintain-gradient-design-strategy)'
          stroke='white'
          strokeWidth={isMobile ? '2' : '2.5'}
          opacity='0.95'
        />
        <circle
          cx={gaintainX}
          cy={gaintainY}
          r={isMobile ? '5' : '7'}
          fill='none'
          stroke='rgba(0, 0, 0, 0.08)'
          strokeWidth={isMobile ? '0.5' : '1'}
        />
        <text
          x={gaintainX}
          y={gaintainY - (isMobile ? 18 : 22)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-point-label'
        >
          GainTain
        </text>
        
        {/* Human Coach point - same styling as other points but inactive (grey fill) */}
        <circle
          cx={humanX}
          cy={humanY}
          r={isMobile ? '5' : '7'}
          fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'}
          stroke='white'
          strokeWidth={isMobile ? '2' : '2.5'}
          opacity='1'
        />
        <circle
          cx={humanX}
          cy={humanY}
          r={isMobile ? '5' : '7'}
          fill='none'
          stroke='rgba(0, 0, 0, 0.08)'
          strokeWidth={isMobile ? '0.5' : '1'}
        />
        <text
          x={humanX}
          y={humanY - (isMobile ? 18 : 22)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-point-label'
          fill={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'}
        >
          Human Coach
        </text>
        
      </svg>
    </div>
  )
}

export default DesignStrategyGraphic
