import React, { forwardRef, type Ref } from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

import SectionHeading from 'components/section_heading'

const Problem = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)

  // Venn diagram dimensions
  const width = isMobile ? 280 : 350
  const height = isMobile ? 100 : 130
  const centerX = width / 2
  const centerY = height / 2
  const radius = isMobile ? 18 : 24
  const offset = isMobile ? 15 : 20

  // Circle positions - arranged in an equilateral triangle for even intersections
  const circle1X = centerX
  const circle1Y = centerY - offset * 0.866 // sqrt(3)/2 for equilateral triangle
  const circle2X = centerX - offset
  const circle2Y = centerY + offset * 0.433 // 0.5 * sqrt(3)/2
  const circle3X = centerX + offset
  const circle3Y = centerY + offset * 0.433

  // Three distinct colors for the populations
  // Gender Minority - Purple/Blue
  const color1 = darkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.3)'
  const stroke1 = darkMode ? 'rgba(139, 92, 246, 0.7)' : 'rgba(139, 92, 246, 0.6)'
  // IV Drug Users - Teal/Blue (Project ECHO primary)
  const color2 = darkMode ? 'rgba(8, 145, 178, 0.4)' : 'rgba(8, 145, 178, 0.3)'
  const stroke2 = darkMode ? 'rgba(8, 145, 178, 0.7)' : 'rgba(8, 145, 178, 0.6)'
  // Unstable Housing - Orange/Amber
  const color3 = darkMode ? 'rgba(245, 158, 11, 0.4)' : 'rgba(245, 158, 11, 0.3)'
  const stroke3 = darkMode ? 'rgba(245, 158, 11, 0.7)' : 'rgba(245, 158, 11, 0.6)'

  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
      <div className='project-echo-venn-diagram-container'>
        <svg className='project-echo-venn-diagram' viewBox={`0 -40 ${width} ${height + 70}`} preserveAspectRatio='xMidYMid meet' style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}>
          {/* Circle 1 - Top (Gender Minority) */}
          <circle
            cx={circle1X}
            cy={circle1Y}
            r={radius}
            fill={color1}
            stroke={stroke1}
            strokeWidth={isMobile ? '1' : '1.5'}
            opacity={0.7}
          />
          {/* Small label "a" for Circle 1 */}
          <text
            x={circle1X}
            y={circle1Y}
            fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'}
            fontSize={isMobile ? '7' : '9'}
            fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
            fontWeight='600'
            textAnchor='middle'
            dominantBaseline='middle'
          >
            a
          </text>
          {/* Label for Circle 1 - Above with card background */}
          <g>
            <rect
              x={circle1X - (isMobile ? 34 : 43)}
              y={circle1Y - radius - (isMobile ? 18 : 22)}
              width={isMobile ? 68 : 86}
              height={isMobile ? 12 : 14}
              rx={isMobile ? 4 : 5}
              fill={darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}
              stroke='none'
            />
            <text
              x={circle1X}
              y={circle1Y - radius - (isMobile ? 18 : 22) + (isMobile ? 6 : 7)}
              fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
              fontSize={isMobile ? '5' : '6'}
              fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
              fontWeight='500'
              textAnchor='middle'
              dominantBaseline='middle'
            >
              Gender Minority
            </text>
          </g>
          
          {/* Circle 2 - Bottom Left (IV Drug Users) */}
          <circle
            cx={circle2X}
            cy={circle2Y}
            r={radius}
            fill={color2}
            stroke={stroke2}
            strokeWidth={isMobile ? '1' : '1.5'}
            opacity={0.7}
          />
          {/* Small label "b" for Circle 2 */}
          <text
            x={circle2X}
            y={circle2Y}
            fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'}
            fontSize={isMobile ? '7' : '9'}
            fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
            fontWeight='600'
            textAnchor='middle'
            dominantBaseline='middle'
          >
            b
          </text>
          {/* Label for Circle 2 - Below with card background, moved further left */}
          <g>
            <rect
              x={circle2X - (isMobile ? 28 : 37) - (isMobile ? 20 : 30)}
              y={circle2Y + radius + (isMobile ? 6 : 8)}
              width={isMobile ? 56 : 74}
              height={isMobile ? 12 : 14}
              rx={isMobile ? 4 : 5}
              fill={darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}
              stroke='none'
            />
            <text
              x={circle2X - (isMobile ? 20 : 30)}
              y={circle2Y + radius + (isMobile ? 6 : 8) + (isMobile ? 6 : 7)}
              fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
              fontSize={isMobile ? '5' : '6'}
              fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
              fontWeight='500'
              textAnchor='middle'
              dominantBaseline='middle'
            >
              IV Drug Users
            </text>
          </g>
          
          {/* Circle 3 - Bottom Right (Unstable Housing) */}
          <circle
            cx={circle3X}
            cy={circle3Y}
            r={radius}
            fill={color3}
            stroke={stroke3}
            strokeWidth={isMobile ? '1' : '1.5'}
            opacity={0.7}
          />
          {/* Small label "c" for Circle 3 */}
          <text
            x={circle3X}
            y={circle3Y}
            fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'}
            fontSize={isMobile ? '7' : '9'}
            fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
            fontWeight='600'
            textAnchor='middle'
            dominantBaseline='middle'
          >
            c
          </text>
          {/* Label for Circle 3 - Below with card background, moved further right, same line as Circle 2 */}
          <g>
            <rect
              x={circle3X - (isMobile ? 38 : 48) + (isMobile ? 20 : 30)}
              y={circle2Y + radius + (isMobile ? 6 : 8)}
              width={isMobile ? 76 : 96}
              height={isMobile ? 12 : 14}
              rx={isMobile ? 4 : 5}
              fill={darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}
              stroke='none'
            />
            <text
              x={circle3X + (isMobile ? 20 : 30)}
              y={circle2Y + radius + (isMobile ? 6 : 8) + (isMobile ? 6 : 7)}
              fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
              fontSize={isMobile ? '5' : '6'}
              fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
              fontWeight='500'
              textAnchor='middle'
              dominantBaseline='middle'
            >
              Unstable Housing
            </text>
          </g>
        </svg>
      </div>
      <div className='case-study-explanation'>
        <div className='project-echo-details-card'>
          <SectionHeading title='Problem' />
          <div className='body-2'>
            The challenge was to communicate the <strong>intersectionality of three vulnerable populations</strong>.
          </div>
          <div className='body-2'>
            The existing solution used a <strong>static Venn diagram</strong>, which made it difficult to clearly show and compare the overlaps.
          </div>
        </div>
      </div>
    </div>
  )
})

Problem.displayName = 'Problem'

export default Problem
