import { IconBell, IconCalendar, IconCurrencyDollar, IconUsers } from '@tabler/icons-react'
import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'
import React from 'react'

const AccountabilityLevers = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile: boolean = useIsMobile(768) ?? false

  // Diagram dimensions - vertical layout; tight horizontal spacing so Strong/axis title fit in container
  const width = isMobile ? 230 : 265
  const padding = isMobile ? 2 : 4
  const leverHeight = isMobile ? 55 : 70
  const iconSize = isMobile ? 28 : 36
  const topPadding = isMobile ? 12 : 16
  const bottomPadding = isMobile ? 12 : 16

  // Calculate lever positions (4 levers stacked vertically)
  const availableHeight = isMobile ? 380 : 480
  const totalLeverHeight = leverHeight * 4
  const totalGap = availableHeight - totalLeverHeight - topPadding - bottomPadding - (isMobile ? 30 : 40)
  const gapBetweenLevers = totalGap / 3

  const lever4Y = padding + topPadding // Strong (top) - Financial
  const lever3Y = lever4Y + leverHeight + gapBetweenLevers
  const lever2Y = lever3Y + leverHeight + gapBetweenLevers
  const lever1Y = lever2Y + leverHeight + gapBetweenLevers
  const height = lever1Y + leverHeight / 2 + bottomPadding + (isMobile ? 20 : 25)

  // Horizontal spacing - minimal gaps so icon, labels, axis line, and axis title fit without cutoff
  const scaleX = width - padding - (isMobile ? 4 : 6) // Axis line from right
  const axisLabelGap = isMobile ? 6 : 8 // Gap between axis line and Strong/Weak labels
  const labelToArrowGap = isMobile ? 5 : 6 // Vertical gap between Strong/Weak label and the arrow
  const badgeToAxisGap = isMobile ? 28 : 36 // Gap between badge and axis
  const badgeWidth = isMobile ? 34 : 40
  const badgeX = scaleX - badgeToAxisGap - badgeWidth / 2
  const iconX = -(isMobile ? 16 : 20) + iconSize / 2
  const iconToLabelGap = isMobile ? 8 : 10 // Gap between icon and lever label
  const labelX = iconX + iconSize / 2 + iconToLabelGap

  // ViewBox includes left (icons) and right (axis title) so all content fits
  const viewBoxMinX = -(isMobile ? 20 : 24)
  const axisTitleOffset = isMobile ? 10 : 14 // Distance from axis line to "Effectiveness" text
  const axisTitleRight = scaleX + axisTitleOffset + (isMobile ? 16 : 20) // room for rotated text
  const viewBoxWidth = Math.max(width, axisTitleRight) - viewBoxMinX

  // Colors - Apple-style subtle
  const textColor = darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
  const arrowColor = darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'

  return (
    <div className="accountability-levers-container">
      <svg
        className="accountability-levers"
        viewBox={`${viewBoxMinX} 0 ${viewBoxWidth} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Accountability Levers Diagram</title>
        <defs>
          {/* Gradient for $ badge - more visible */}
          <linearGradient id="badge-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.6)' : 'rgba(230, 92, 0, 0.25)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.5)' : 'rgba(249, 212, 35, 0.2)'} />
          </linearGradient>
          {/* Gradient for $$ badge - more visible */}
          <linearGradient id="badge-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.7)' : 'rgba(230, 92, 0, 0.35)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.6)' : 'rgba(249, 212, 35, 0.3)'} />
          </linearGradient>
          {/* Gradient for $$$ badge - more visible */}
          <linearGradient id="badge-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.8)' : 'rgba(230, 92, 0, 0.45)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(249, 212, 35, 0.4)'} />
          </linearGradient>
          {/* Shadow filter for badges */}
          <filter id="badge-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Lever 1: Reminders (Weak, $) - Top */}
        <g>
          {/* Icon - Tabler Bell */}
          <foreignObject
            x={iconX - iconSize / 2}
            y={lever1Y + iconSize / 2 - iconSize / 2}
            width={iconSize}
            height={iconSize}
          >
            <IconBell
              size={iconSize}
              stroke={textColor}
              fill="none"
              strokeWidth={isMobile ? 1 : 1.25}
              style={{ display: 'block' }}
            />
          </foreignObject>
          {/* Label */}
          <text
            x={labelX}
            y={lever1Y + iconSize / 2}
            fill={textColor}
            fontSize={isMobile ? '11' : '13'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            REMINDERS
          </text>
          {/* Cost - Enhanced badge with gradient */}
          <rect
            x={badgeX - badgeWidth / 2}
            y={lever1Y + iconSize / 2 - (isMobile ? 8 : 10)}
            width={badgeWidth}
            height={isMobile ? 18 : 22}
            rx={isMobile ? 9 : 11}
            fill="url(#badge-gradient-1)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={isMobile ? '1' : '1.25'}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={lever1Y + iconSize / 2 + (isMobile ? 1.5 : 2)}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={isMobile ? '12' : '14'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $
          </text>
        </g>

        {/* Lever 2: Streaks (Weak-Medium, $) */}
        <g>
          {/* Icon - Tabler Calendar */}
          <foreignObject
            x={iconX - iconSize / 2}
            y={lever2Y + iconSize / 2 - iconSize / 2}
            width={iconSize}
            height={iconSize}
          >
            <IconCalendar
              size={iconSize}
              stroke={textColor}
              fill="none"
              strokeWidth={isMobile ? 1 : 1.25}
              style={{ display: 'block' }}
            />
          </foreignObject>
          {/* Label - Two lines */}
          <text
            x={labelX}
            y={lever2Y + iconSize / 2 - (isMobile ? 4 : 5)}
            fill={textColor}
            fontSize={isMobile ? '11' : '13'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            <tspan x={labelX} dy="0">
              PROGRESS
            </tspan>
            <tspan x={labelX} dy={isMobile ? '12' : '14'}>
              VISIBILITY
            </tspan>
          </text>
          {/* Cost - Enhanced badge with gradient */}
          <rect
            x={badgeX - badgeWidth / 2}
            y={lever2Y + iconSize / 2 - (isMobile ? 8 : 10)}
            width={badgeWidth}
            height={isMobile ? 18 : 22}
            rx={isMobile ? 9 : 11}
            fill="url(#badge-gradient-1)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={isMobile ? '1' : '1.25'}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={lever2Y + iconSize / 2 + (isMobile ? 1.5 : 2)}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={isMobile ? '12' : '14'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $
          </text>
        </g>

        {/* Lever 3: Social (Medium, $$) */}
        <g>
          {/* Icon - Tabler Users */}
          <foreignObject
            x={iconX - iconSize / 2}
            y={lever3Y + iconSize / 2 - iconSize / 2}
            width={iconSize}
            height={iconSize}
          >
            <IconUsers
              size={iconSize}
              stroke={textColor}
              fill="none"
              strokeWidth={isMobile ? 1 : 1.25}
              style={{ display: 'block' }}
            />
          </foreignObject>
          {/* Label */}
          <text
            x={labelX}
            y={lever3Y + iconSize / 2}
            fill={textColor}
            fontSize={isMobile ? '11' : '13'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            SOCIAL
          </text>
          {/* Cost - Enhanced badge with gradient */}
          <rect
            x={badgeX - badgeWidth / 2}
            y={lever3Y + iconSize / 2 - (isMobile ? 8 : 10)}
            width={badgeWidth}
            height={isMobile ? 18 : 22}
            rx={isMobile ? 9 : 11}
            fill="url(#badge-gradient-2)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={isMobile ? '1' : '1.25'}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={lever3Y + iconSize / 2 + (isMobile ? 1.5 : 2)}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={isMobile ? '12' : '14'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $$
          </text>
        </g>

        {/* Lever 4: Financial (Strong, $$$) - Bottom */}
        <g>
          {/* Icon - Tabler Currency Dollar */}
          <foreignObject
            x={iconX - iconSize / 2}
            y={lever4Y + iconSize / 2 - iconSize / 2}
            width={iconSize}
            height={iconSize}
          >
            <IconCurrencyDollar
              size={iconSize}
              stroke={textColor}
              fill="none"
              strokeWidth={isMobile ? 1 : 1.25}
              style={{ display: 'block' }}
            />
          </foreignObject>
          {/* Label */}
          <text
            x={labelX}
            y={lever4Y + iconSize / 2}
            fill={textColor}
            fontSize={isMobile ? '11' : '13'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            FINANCIAL
          </text>
          {/* Cost - Enhanced badge with gradient */}
          <rect
            x={badgeX - badgeWidth / 2}
            y={lever4Y + iconSize / 2 - (isMobile ? 8 : 10)}
            width={badgeWidth}
            height={isMobile ? 18 : 22}
            rx={isMobile ? 9 : 11}
            fill="url(#badge-gradient-3)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.8)' : 'rgba(230, 92, 0, 0.6)'}
            strokeWidth={isMobile ? '1' : '1.25'}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={lever4Y + iconSize / 2 + (isMobile ? 1.5 : 2)}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={isMobile ? '12' : '14'}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $$$
          </text>
        </g>

        {/* Vertical axis line filling the container */}
        <line
          x1={scaleX}
          y1={topPadding}
          x2={scaleX}
          y2={height - bottomPadding}
          stroke={arrowColor}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
        />
        {/* Up arrow at top (Weak) - pointing down */}
        <path
          d={`M ${scaleX},${topPadding} L ${scaleX - (isMobile ? 3 : 4)},${topPadding + (isMobile ? 5 : 6)} L ${scaleX + (isMobile ? 3 : 4)},${topPadding + (isMobile ? 5 : 6)} Z`}
          fill={arrowColor}
          stroke={arrowColor}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Down arrow at bottom (Strong) - pointing up */}
        <path
          d={`M ${scaleX},${height - bottomPadding} L ${scaleX - (isMobile ? 3 : 4)},${height - bottomPadding - (isMobile ? 5 : 6)} L ${scaleX + (isMobile ? 3 : 4)},${height - bottomPadding - (isMobile ? 5 : 6)} Z`}
          fill={arrowColor}
          stroke={arrowColor}
          strokeWidth={isMobile ? '1' : '1.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Y-axis title - centered, rotated, positioned to the right of the scale line */}
        <text
          x={scaleX + axisTitleOffset}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isMobile ? '16' : '18'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="0.02em"
          fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}
          transform={`rotate(90 ${scaleX + axisTitleOffset} ${height / 2})`}
        >
          Effectiveness
        </text>
        {/* Scale labels - Apple-style */}
        <text
          x={scaleX + axisLabelGap}
          y={topPadding - labelToArrowGap}
          fill="#10B981"
          fontSize={isMobile ? '12' : '14'}
          fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
          fontWeight="600"
          textAnchor="start"
          dominantBaseline="middle"
          letterSpacing="0.01em"
        >
          Strong
        </text>
        <text
          x={scaleX + axisLabelGap}
          y={height - bottomPadding + labelToArrowGap}
          fill="#EF4444"
          fontSize={isMobile ? '12' : '14'}
          fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
          fontWeight="600"
          textAnchor="start"
          dominantBaseline="middle"
          letterSpacing="0.01em"
        >
          Weak
        </text>
      </svg>
    </div>
  )
}

export default AccountabilityLevers
