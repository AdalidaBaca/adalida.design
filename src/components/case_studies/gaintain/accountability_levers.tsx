import { IconBell, IconCalendar, IconCurrencyDollar, IconUsers } from '@tabler/icons-react'
import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'
import React from 'react'

const AccountabilityLevers = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile: boolean = useIsMobile(768) ?? false

  // Diagram dimensions - vertical layout for column container
  const width = isMobile ? 280 : 320
  const padding = isMobile ? 4 : 6 // Further reduced padding to move icons even more left
  const leverHeight = isMobile ? 55 : 70
  const iconSize = isMobile ? 28 : 36
  const topPadding = isMobile ? 12 : 16
  const bottomPadding = isMobile ? 12 : 16

  // Calculate lever positions (4 levers stacked vertically)
  const _scaleWidth = isMobile ? 20 : 25
  const availableHeight = isMobile ? 380 : 480 // Fixed height for column
  const totalLeverHeight = leverHeight * 4
  const totalGap = availableHeight - totalLeverHeight - topPadding - bottomPadding - (isMobile ? 30 : 40) // Reserve space for scale labels
  const gapBetweenLevers = totalGap / 3 // 3 gaps between 4 levers

  const lever4Y = padding + topPadding // Strong (top) - Financial
  const lever3Y = lever4Y + leverHeight + gapBetweenLevers // Streaks (second)
  const lever2Y = lever3Y + leverHeight + gapBetweenLevers // Social (third)
  const lever1Y = lever2Y + leverHeight + gapBetweenLevers // Weak (bottom) - Reminders
  const height = lever1Y + leverHeight / 2 + bottomPadding + (isMobile ? 20 : 25)

  // Horizontal spacing - calculate from right to left to ensure no overlaps
  const scaleX = width - padding - (isMobile ? 12 : 15) // Axis line position from right (increased mobile margin)
  const axisLabelGap = isMobile ? 18 : 26 // Space between axis line and labels (increased)
  const badgeToAxisGap = isMobile ? 56 : 80 // Space between badge and axis (further increased to move badges more left)
  const badgeWidth = isMobile ? 36 : 44 // Consistent badge width for all (increased for more inner padding)
  const badgeX = scaleX - badgeToAxisGap - badgeWidth / 2 // Badge center position
  const _labelToBadgeGap = isMobile ? 40 : 60 // Space between label and badge (further increased for better spacing)
  const iconX = -(isMobile ? 20 : 28) + iconSize / 2 // Icons positioned to align with text content left edge (card corners, titles)
  const iconToLabelGap = isMobile ? 18 : 26 // Reduced mobile spacing between icon and label
  const labelX = iconX + iconSize / 2 + iconToLabelGap

  // Colors - Apple-style subtle
  const textColor = darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
  const _secondaryColor = darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
  const _lineColor = darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.35)'
  const arrowColor = darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'

  return (
    <div className="accountability-levers-container">
      <svg className="accountability-levers" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
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
        {/* Y-axis title - centered between Strong and Weak, rotated to cross the axis, positioned to the right of the scale line */}
        <text
          x={scaleX + (isMobile ? 28 : 40)}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isMobile ? '18' : '20'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="0.02em"
          fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}
          transform={`rotate(90 ${scaleX + (isMobile ? 28 : 40)} ${height / 2})`}
        >
          Effectiveness
        </text>
        {/* Scale labels - Apple-style */}
        <text
          x={scaleX + axisLabelGap}
          y={topPadding}
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
          y={height - bottomPadding}
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
