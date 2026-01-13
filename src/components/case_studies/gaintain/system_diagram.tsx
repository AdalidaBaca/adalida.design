import React from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

const SystemDiagram = (): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)

  // Diagram dimensions
  const width = isMobile ? 280 : 350
  const height = isMobile ? 280 : 360
  const padding = isMobile ? 20 : 30
  const layerHeight = isMobile ? 60 : 75
  const layerSpacing = isMobile ? 30 : 40
  const layerWidth = width - (padding * 2)
  
  // Calculate positions for each layer
  const topLayerY = padding
  const middleLayerY = topLayerY + layerHeight + layerSpacing
  const bottomLayerY = middleLayerY + layerHeight + layerSpacing
  
  // Text positioning
  const textX = padding + (layerWidth / 2)
  const textYOffset = layerHeight / 2
  
  // Arrow positioning (centered horizontally)
  const arrowX = padding + (layerWidth / 2)
  const arrowStart1 = topLayerY + layerHeight
  const arrowEnd1 = middleLayerY
  const arrowStart2 = middleLayerY + layerHeight
  const arrowEnd2 = bottomLayerY
  
  // Colors - grayscale
  const baseColor = darkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'
  const emphasizedColor = darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)'
  const arrowColor = darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
  const borderColor = darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
  const emphasizedBorderColor = darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'

  return (
    <div className='system-diagram-container'>
      <svg className='system-diagram' viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='xMidYMid meet'>
        {/* Arrowhead marker definition */}
        <defs>
          <marker
            id='arrowhead'
            markerWidth='10'
            markerHeight='10'
            refX='5'
            refY='5'
            orient='auto'
          >
            <polygon
              points='0,0 10,5 0,10'
              fill={arrowColor}
            />
          </marker>
        </defs>

        {/* Top layer: AI Planning */}
        <rect
          x={padding}
          y={topLayerY}
          width={layerWidth}
          height={layerHeight}
          fill='none'
          stroke={baseColor}
          strokeWidth={isMobile ? '1.5' : '2'}
          rx='6'
        />
        <text
          x={textX}
          y={topLayerY + textYOffset}
          fill={baseColor}
          fontSize={isMobile ? '13' : '15'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight='500'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          AI Planning
        </text>

        {/* Arrow from top to middle */}
        <line
          x1={arrowX}
          y1={arrowStart1}
          x2={arrowX}
          y2={arrowEnd1}
          stroke={arrowColor}
          strokeWidth={isMobile ? '1.5' : '2'}
          markerEnd='url(#arrowhead)'
        />

        {/* Middle layer: Designed Accountability - Emphasized */}
        <rect
          x={padding}
          y={middleLayerY}
          width={layerWidth}
          height={layerHeight}
          fill={darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}
          stroke={emphasizedColor}
          strokeWidth={isMobile ? '2' : '2.5'}
          rx='6'
        />
        <text
          x={textX}
          y={middleLayerY + textYOffset}
          fill={emphasizedColor}
          fontSize={isMobile ? '13' : '15'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight='600'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          Designed Accountability
        </text>

        {/* Arrow from middle to bottom */}
        <line
          x1={arrowX}
          y1={arrowStart2}
          x2={arrowX}
          y2={arrowEnd2}
          stroke={arrowColor}
          strokeWidth={isMobile ? '1.5' : '2'}
          markerEnd='url(#arrowhead)'
        />

        {/* Bottom layer: Consistent Follow-Through */}
        <rect
          x={padding}
          y={bottomLayerY}
          width={layerWidth}
          height={layerHeight}
          fill='none'
          stroke={baseColor}
          strokeWidth={isMobile ? '1.5' : '2'}
          rx='6'
        />
        <text
          x={textX}
          y={bottomLayerY + textYOffset}
          fill={baseColor}
          fontSize={isMobile ? '13' : '15'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight='500'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          Consistent Follow-Through
        </text>
      </svg>
    </div>
  )
}

export default SystemDiagram
