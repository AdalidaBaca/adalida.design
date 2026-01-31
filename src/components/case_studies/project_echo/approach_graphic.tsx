import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'
import React from 'react'

const ApproachGraphic = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)
  // Graph dimensions - responsive, adjusted width and height for better fit
  const graphWidth = isMobile ? 300 : 400
  const graphHeight = isMobile ? 350 : 380
  const padding = isMobile ? 60 : 70 // Increased padding to prevent clipping
  const chartWidth = graphWidth - padding * 2
  const chartHeight = graphHeight - padding * 2

  // Axis label positions
  const strongLabelY = padding - (isMobile ? 12 : 18)
  const weakLabelY = padding + chartHeight - (isMobile ? 12 : 15) // Above the axis line endpoint
  const yAxisTitleY = (strongLabelY + weakLabelY) / 2 // Center between Strong and Weak

  // Data points - curved line from Venn Diagram + Lists through Matrix-based visualizations to Interactive Set Comparisons
  // Interactive Set Comparisons: peak/asymptote of the curve (highest point, center-right)
  const interactiveX = padding + chartWidth * 0.7 // Center-right position for peak
  const interactiveY = padding + chartHeight * 0.1 // Peak/asymptote - highest point on curve

  // Venn Diagram + Lists: starting point (low y) and low cost (left x)
  const vennX = padding + chartWidth * 0.15
  const vennY = padding + chartHeight * 0.85 // Bottom area for weak drop-off prevention

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
  const matrixX =
    (1 - t) ** 3 * vennX + 3 * (1 - t) ** 2 * t * cp1X + 3 * (1 - t) * t ** 2 * cp2X + t ** 3 * interactiveX
  const matrixY =
    (1 - t) ** 3 * vennY + 3 * (1 - t) ** 2 * t * cp1Y + 3 * (1 - t) * t ** 2 * cp2Y + t ** 3 * interactiveY

  return (
    <div className="design-strategy-graphic-container">
      <svg
        className="design-strategy-graphic"
        viewBox={`0 0 ${graphWidth} ${graphHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
      >
        <title>Design Strategy Approach Graphic</title>
        <defs>
          {/* Gradient for line from Venn Diagram + Lists to Interactive Set Comparisons - using Project ECHO gradient colors */}
          <linearGradient
            id="project-echo-line-gradient"
            x1={vennX}
            y1={vennY}
            x2={interactiveX}
            y2={interactiveY}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          {/* Gradient for points */}
          <linearGradient
            id="project-echo-gradient-approach"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Y-axis: Clarity of Comparison */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + chartHeight}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
        />
        {/* Up arrow at top (Strong) - pointing down */}
        <path
          d={`M ${padding},${padding} L ${padding - (isMobile ? 3 : 4)},${padding + (isMobile ? 5 : 6)} L ${padding + (isMobile ? 3 : 4)},${padding + (isMobile ? 5 : 6)} Z`}
          fill={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          stroke={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Y-axis label: High (top) */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={padding - (isMobile ? 12 : 18)}
          textAnchor="end"
          dominantBaseline="middle"
          className="design-strategy-axis-label"
        >
          High
        </text>

        {/* Y-axis label: Low (bottom) - positioned above the axis line */}
        <text
          x={padding - (isMobile ? 6 : 8)}
          y={weakLabelY}
          textAnchor="end"
          dominantBaseline="middle"
          className="design-strategy-axis-label"
        >
          Low
        </text>

        {/* Y-axis title - centered between High and Low, rotated to cross the axis */}
        <text
          x={padding - (isMobile ? 12 : 15)}
          y={yAxisTitleY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="design-strategy-axis-title"
          fontSize={isMobile ? '11' : '12'}
          transform={`rotate(-90 ${padding - (isMobile ? 12 : 15)} ${yAxisTitleY})`}
        >
          Clarity of Comparison
        </text>

        {/* X-axis: Complexity of Data */}
        <line
          x1={padding}
          y1={padding + chartHeight}
          x2={padding + chartWidth}
          y2={padding + chartHeight}
          stroke={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
        />
        {/* Right arrow (High) - pointing left */}
        <path
          d={`M ${padding + chartWidth},${padding + chartHeight} L ${padding + chartWidth - (isMobile ? 5 : 6)},${padding + chartHeight - (isMobile ? 3 : 4)} L ${padding + chartWidth - (isMobile ? 5 : 6)},${padding + chartHeight + (isMobile ? 3 : 4)} Z`}
          fill={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          stroke={darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* X-axis label: Low (left) - positioned at the corner */}
        <text
          x={padding}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor="start"
          dominantBaseline="middle"
          className="design-strategy-axis-label"
        >
          Low
        </text>

        {/* X-axis title - inline between Low and High */}
        <text
          x={padding + chartWidth / 2}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor="middle"
          dominantBaseline="middle"
          className="design-strategy-axis-title"
          fontSize={isMobile ? '11' : '12'}
        >
          Complexity of Data
        </text>

        {/* X-axis label: High (right) */}
        <text
          x={padding + chartWidth}
          y={padding + chartHeight + (isMobile ? 12 : 15)}
          textAnchor="middle"
          dominantBaseline="middle"
          className="design-strategy-axis-label"
        >
          High
        </text>

        {/* Academic/data-style straight lines connecting points */}
        {/* Continuous curved line from Venn Diagram + Lists to Interactive Set Comparisons */}
        {/* Grey outline - always visible */}
        <path
          d={`M ${vennX} ${vennY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${interactiveX} ${interactiveY}`}
          fill="none"
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.25)'}
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap="round"
        />
        {/* Continuous line from Venn Diagram + Lists to Interactive Set Comparisons (Project ECHO gradient) */}
        <path
          id="project-echo-line-path"
          d={`M ${vennX} ${vennY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${interactiveX} ${interactiveY}`}
          fill="none"
          stroke="url(#project-echo-line-gradient)"
          strokeWidth={isMobile ? '1.5' : '2'}
          strokeLinecap="round"
        />

        {/* Venn Diagram + Lists point - with Project ECHO gradient fill */}
        <circle
          cx={vennX}
          cy={vennY}
          r={isMobile ? '4' : '5'}
          fill="url(#project-echo-gradient-approach)"
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={vennX + (isMobile ? 12 : 15)}
          y={vennY}
          textAnchor="start"
          dominantBaseline="middle"
          className="design-strategy-point-label"
        >
          Venn Diagram + Lists
        </text>

        {/* Matrix-based point - middle point on the curve */}
        <circle
          cx={matrixX}
          cy={matrixY}
          r={isMobile ? '4' : '5'}
          fill="url(#project-echo-gradient-approach)"
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={matrixX + (isMobile ? 12 : 15)}
          y={matrixY}
          textAnchor="start"
          dominantBaseline="middle"
          className="design-strategy-point-label"
        >
          Matrix-based
        </text>

        {/* Interactive Set Comparisons point - Project ECHO gradient fill */}
        <circle
          cx={interactiveX}
          cy={interactiveY}
          r={isMobile ? '4' : '5'}
          fill="url(#project-echo-gradient-approach)"
          stroke={darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        <text
          x={interactiveX}
          y={interactiveY - (isMobile ? 12 : 15)}
          textAnchor="middle"
          dominantBaseline="bottom"
          className="design-strategy-point-label"
        >
          Interactive Set Comparisons
        </text>
      </svg>
    </div>
  )
}

export default ApproachGraphic
