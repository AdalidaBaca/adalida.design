import { IconBell, IconCalendar, IconCurrencyDollar, IconUsers } from '@tabler/icons-react'
import DarkModeContext from 'dark_mode_context'
import React from 'react'

/**
 * Scale-based diagram: one base unit `u` drives all dimensions.
 * Desktop layout is the reference; the SVG scales via viewBox (like a resizable image).
 * Tweak `u` or the ratios below to refine the whole graphic consistently.
 */
const U = 5

const AccountabilityLevers = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)

  // All dimensions in units of u — single source of scale
  const width = 53 * U
  const padding = 1 * U
  const leverHeight = 14 * U
  const iconSize = 7 * U + 1 // 36 at u=5
  const topPadding = 3 * U + 1 // 16
  const bottomPadding = 3 * U + 1
  const axisInset = 1 * U + 1 // gap from right edge to axis line (6 at u=5)
  const axisLabelGap = 2 * U
  const labelToArrowGap = 1 * U + 1
  const badgeToAxisGap = 7 * U + 1
  const badgeWidth = 8 * U
  const badgeHeight = 4 * U + 2
  const badgeRx = 2 * U + 1
  const iconMarginLeft = 4 * U
  const iconToLabelGap = 2 * U
  const viewBoxMarginLeft = 5 * U
  const axisTitleOffset = 3 * U - 1
  const axisTitleRightExtra = 4 * U
  const arrowHalfWidth = 1 * U - 1
  const arrowHeight = 1 * U + 1
  const strokeW = 1.5
  const leverLabelFontSize = 2 * U + 3
  const axisLabelFontSize = 2 * U + 4
  const axisTitleFontSize = 3 * U + 3
  const badgeFontSize = 2 * U + 4

  // Lever vertical layout
  const availableHeight = 96 * U
  const totalLeverHeight = leverHeight * 4
  const reserveForSpacing = 8 * U
  const totalGap = availableHeight - totalLeverHeight - topPadding - bottomPadding - reserveForSpacing
  const gapBetweenLevers = totalGap / 3

  const lever4Y = padding + topPadding
  const lever3Y = lever4Y + leverHeight + gapBetweenLevers
  const lever2Y = lever3Y + leverHeight + gapBetweenLevers
  const lever1Y = lever2Y + leverHeight + gapBetweenLevers
  const heightExtra = 5 * U
  const height = lever1Y + leverHeight / 2 + bottomPadding + heightExtra

  // Horizontal positions
  const scaleX = width - padding - axisInset
  const badgeX = scaleX - badgeToAxisGap - badgeWidth / 2
  const iconX = -iconMarginLeft + iconSize / 2
  const labelX = iconX + iconSize / 2 + iconToLabelGap

  const viewBoxMinX = -viewBoxMarginLeft
  const axisTitleRight = scaleX + axisTitleOffset + axisTitleRightExtra
  const viewBoxWidth = Math.max(width, axisTitleRight) - viewBoxMinX

  const textColor = darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
  const arrowColor = darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'

  const leverCenterY = (leverY: number) => leverY + iconSize / 2
  const badgeYOffset = badgeHeight / 2
  const badgeTextDy = 2

  return (
    <div className="accountability-levers-container">
      <svg
        className="accountability-levers"
        viewBox={`${viewBoxMinX} 0 ${viewBoxWidth} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="false"
      >
        <title>Accountability Levers Diagram</title>
        <defs>
          <linearGradient id="badge-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.6)' : 'rgba(230, 92, 0, 0.25)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.5)' : 'rgba(249, 212, 35, 0.2)'} />
          </linearGradient>
          <linearGradient id="badge-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.7)' : 'rgba(230, 92, 0, 0.35)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.6)' : 'rgba(249, 212, 35, 0.3)'} />
          </linearGradient>
          <linearGradient id="badge-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={darkMode ? 'rgba(230, 92, 0, 0.8)' : 'rgba(230, 92, 0, 0.45)'} />
            <stop offset="100%" stopColor={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(249, 212, 35, 0.4)'} />
          </linearGradient>
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

        {/* Lever 1: Reminders (Weak, $) */}
        <g>
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
              strokeWidth={1.25}
              style={{ display: 'block' }}
              aria-hidden
            />
          </foreignObject>
          <text
            x={labelX}
            y={leverCenterY(lever1Y)}
            fill={textColor}
            fontSize={leverLabelFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            REMINDERS
          </text>
          <rect
            x={badgeX - badgeWidth / 2}
            y={leverCenterY(lever1Y) - badgeYOffset}
            width={badgeWidth}
            height={badgeHeight}
            rx={badgeRx}
            fill="url(#badge-gradient-1)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={strokeW * 0.8}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={leverCenterY(lever1Y) + badgeTextDy}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={badgeFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $
          </text>
        </g>

        {/* Lever 2: Progress visibility ($) */}
        <g>
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
              strokeWidth={1.25}
              style={{ display: 'block' }}
              aria-hidden
            />
          </foreignObject>
          <text
            x={labelX}
            y={leverCenterY(lever2Y) - U}
            fill={textColor}
            fontSize={leverLabelFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            <tspan x={labelX} dy="0">
              PROGRESS
            </tspan>
            <tspan x={labelX} dy={2.8 * U}>
              VISIBILITY
            </tspan>
          </text>
          <rect
            x={badgeX - badgeWidth / 2}
            y={leverCenterY(lever2Y) - badgeYOffset}
            width={badgeWidth}
            height={badgeHeight}
            rx={badgeRx}
            fill="url(#badge-gradient-1)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={strokeW * 0.8}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={leverCenterY(lever2Y) + badgeTextDy}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={badgeFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $
          </text>
        </g>

        {/* Lever 3: Social ($$) */}
        <g>
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
              strokeWidth={1.25}
              style={{ display: 'block' }}
              aria-hidden
            />
          </foreignObject>
          <text
            x={labelX}
            y={leverCenterY(lever3Y)}
            fill={textColor}
            fontSize={leverLabelFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            SOCIAL
          </text>
          <rect
            x={badgeX - badgeWidth / 2}
            y={leverCenterY(lever3Y) - badgeYOffset}
            width={badgeWidth}
            height={badgeHeight}
            rx={badgeRx}
            fill="url(#badge-gradient-2)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.7)' : 'rgba(230, 92, 0, 0.5)'}
            strokeWidth={strokeW * 0.8}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={leverCenterY(lever3Y) + badgeTextDy}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={badgeFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $$
          </text>
        </g>

        {/* Lever 4: Financial (Strong, $$$) */}
        <g>
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
              strokeWidth={1.25}
              style={{ display: 'block' }}
              aria-hidden
            />
          </foreignObject>
          <text
            x={labelX}
            y={leverCenterY(lever4Y)}
            fill={textColor}
            fontSize={leverLabelFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="600"
            textAnchor="start"
            dominantBaseline="middle"
            letterSpacing="0.015em"
          >
            FINANCIAL
          </text>
          <rect
            x={badgeX - badgeWidth / 2}
            y={leverCenterY(lever4Y) - badgeYOffset}
            width={badgeWidth}
            height={badgeHeight}
            rx={badgeRx}
            fill="url(#badge-gradient-3)"
            stroke={darkMode ? 'rgba(249, 212, 35, 0.8)' : 'rgba(230, 92, 0, 0.6)'}
            strokeWidth={strokeW * 0.8}
            filter="url(#badge-shadow)"
          />
          <text
            x={badgeX}
            y={leverCenterY(lever4Y) + badgeTextDy}
            fill={darkMode ? '#FFFFFF' : '#E65C00'}
            fontSize={badgeFontSize}
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif'
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            $$$
          </text>
        </g>

        {/* Axis line */}
        <line
          x1={scaleX}
          y1={topPadding}
          x2={scaleX}
          y2={height - bottomPadding}
          stroke={arrowColor}
          strokeWidth={strokeW}
          strokeLinecap="round"
        />
        <path
          d={`M ${scaleX},${topPadding} L ${scaleX - arrowHalfWidth},${topPadding + arrowHeight} L ${scaleX + arrowHalfWidth},${topPadding + arrowHeight} Z`}
          fill={arrowColor}
          stroke={arrowColor}
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M ${scaleX},${height - bottomPadding} L ${scaleX - arrowHalfWidth},${height - bottomPadding - arrowHeight} L ${scaleX + arrowHalfWidth},${height - bottomPadding - arrowHeight} Z`}
          fill={arrowColor}
          stroke={arrowColor}
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          x={scaleX + axisTitleOffset}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={axisTitleFontSize}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="0.02em"
          fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}
          transform={`rotate(90 ${scaleX + axisTitleOffset} ${height / 2})`}
        >
          Effectiveness
        </text>

        <text
          x={scaleX + axisLabelGap}
          y={topPadding - labelToArrowGap}
          fill="#10B981"
          fontSize={axisLabelFontSize}
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
          fontSize={axisLabelFontSize}
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
