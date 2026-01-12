import React from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const DesignStrategyGraphic = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)
  // Graph dimensions - responsive
  const graphWidth = isMobile ? 400 : 600
  // On mobile, use fixed height that fits content; on desktop, use fixed height to match problem graphic (3.2:1 aspect ratio)
  // For 600px width, container height = 600 / 3.2 = 187.5px
  // Reduce padding on desktop to fit better in the constrained height
  const graphHeight = isMobile ? 260 : 187
  const padding = isMobile ? 50 : 40 // Reduced padding on desktop to fit 3.2:1 aspect ratio
  const chartWidth = graphWidth - (padding * 2)
  const chartHeight = graphHeight - (padding * 2)
  
  // Axis label positions
  const strongLabelY = padding - (isMobile ? 12 : 18)
  const weakLabelY = padding + chartHeight + (isMobile ? 12 : 15) // Aligned with Low label
  const yAxisTitleY = (strongLabelY + (padding + chartHeight + (isMobile ? 12 : 15))) / 2 // Center between Strong and Weak
  
  // Data points
  // AI Fitness apps: some drop-off prevention (middle-low y) and low cost (left x)
  const aiFitnessX = padding + (chartWidth * 0.15)
  const aiFitnessY = padding + (chartHeight * 0.7)
  
  // Gaintain: strong (high y) and middle cost (middle x)
  const gaintainX = padding + (chartWidth * 0.5)
  const gaintainY = padding + (chartHeight * 0.2)
  
  // Human: strong (high y) and costly (right x)
  const humanX = padding + (chartWidth * 0.85)
  const humanY = padding + (chartHeight * 0.15)
  
  return (
    <div className='design-strategy-graphic-container'>
      <svg className='design-strategy-graphic' viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: 'auto' }}>
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
        
        {/* Curve from AI Fitness apps through Gaintain to Human - smooth curved line through all points */}
        {/* Use cubic bezier with smooth control points for natural curve */}
        {/* Control points create smooth upward curve: AI Fitness (weak, low) -> Gaintain (strong, middle) -> Human (strong, high) */}
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${aiFitnessX + (gaintainX - aiFitnessX) * 0.5} ${aiFitnessY - (aiFitnessY - gaintainY) * 0.3} ${gaintainX - (gaintainX - aiFitnessX) * 0.2} ${gaintainY - (gaintainY - humanY) * 0.2} ${gaintainX} ${gaintainY} C ${gaintainX + (humanX - gaintainX) * 0.2} ${gaintainY - (gaintainY - humanY) * 0.2} ${humanX - (humanX - gaintainX) * 0.5} ${humanY + (gaintainY - humanY) * 0.3} ${humanX} ${humanY}`}
          fill='none'
          stroke={darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}
          strokeWidth={isMobile ? '2.5' : '3'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d={`M ${aiFitnessX} ${aiFitnessY} C ${aiFitnessX + (gaintainX - aiFitnessX) * 0.5} ${aiFitnessY - (aiFitnessY - gaintainY) * 0.3} ${gaintainX - (gaintainX - aiFitnessX) * 0.2} ${gaintainY - (gaintainY - humanY) * 0.2} ${gaintainX} ${gaintainY} C ${gaintainX + (humanX - gaintainX) * 0.2} ${gaintainY - (gaintainY - humanY) * 0.2} ${humanX - (humanX - gaintainX) * 0.5} ${humanY + (gaintainY - humanY) * 0.3} ${humanX} ${humanY}`}
          fill='none'
          stroke='url(#gaintain-gradient-design-strategy)'
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
          x={aiFitnessX}
          y={aiFitnessY - (isMobile ? 25 : 30)}
          textAnchor='middle'
          dominantBaseline='middle'
          className='design-strategy-point-label'
        >
          <tspan x={aiFitnessX} dy='0'>AI Fitness</tspan>
          <tspan x={aiFitnessX} dy='1.2em'>Apps</tspan>
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
        
        {/* Human point */}
        <circle
          cx={humanX}
          cy={humanY}
          r={isMobile ? '5' : '7'}
          fill='url(#gaintain-gradient-design-strategy)'
          stroke='white'
          strokeWidth={isMobile ? '2' : '2.5'}
          opacity='0.95'
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
        >
          Human Coach
        </text>
      </svg>
    </div>
  )
}

export default DesignStrategyGraphic
