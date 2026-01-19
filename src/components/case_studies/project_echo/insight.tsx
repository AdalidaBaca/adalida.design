import SectionHeading from 'components/section_heading'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'
import React, { forwardRef, type Ref } from 'react'

interface InsightProps {
  title?: string
  copy?: 'insight' | 'problem'
}

const Insight = forwardRef(({ title, copy = 'insight' }: InsightProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const isMobile = useIsMobile(768)

  const circleLabel1 = copy === 'problem' ? 'GM' : 'A'
  const circleLabel2 = copy === 'problem' ? 'IDU' : 'B'
  const circleLabel3 = copy === 'problem' ? 'UH' : 'C'

  const count1 = copy === 'problem' ? '864' : '1'
  const count2 = copy === 'problem' ? '573' : '2'
  const count3 = copy === 'problem' ? '1117' : '3'
  const count4 = copy === 'problem' ? '164' : '4'
  const count5 = copy === 'problem' ? '332' : '5'
  const count6 = copy === 'problem' ? '303' : '6'
  const count7 = copy === 'problem' ? '127' : '7'

  // Venn diagram dimensions - adjusted to fit section height
  const width = isMobile ? 300 : 400
  const height = isMobile ? 240 : 320
  const centerX = width / 2
  const centerY = height / 2
  // Circles: make larger ONLY on the Problem version
  const radius = copy === 'problem' ? (isMobile ? 58 : 82) : isMobile ? 40 : 55
  const offset = copy === 'problem' ? (isMobile ? 46 : 66) : isMobile ? 32 : 44

  // Circle positions - arranged in an equilateral triangle for even intersections
  const circle1X = centerX
  const circle1Y = centerY - offset * 0.866 // sqrt(3)/2 for equilateral triangle
  const circle2X = centerX - offset
  const circle2Y = centerY + offset * 0.433 // 0.5 * sqrt(3)/2
  const circle3X = centerX + offset
  const circle3Y = centerY + offset * 0.433

  // Positions for intersection labels
  // Pairwise intersections (approximate centers between circles)
  const intersectionAB_X = (circle1X + circle2X) / 2
  const intersectionAB_Y = (circle1Y + circle2Y) / 2
  const intersectionAC_X = (circle1X + circle3X) / 2
  const intersectionAC_Y = (circle1Y + circle3Y) / 2
  const intersectionBC_X = (circle2X + circle3X) / 2
  const intersectionBC_Y = (circle2Y + circle3Y) / 2
  // Three-way intersection (centroid of the three circle centers)
  const intersectionABC_X = (circle1X + circle2X + circle3X) / 3
  const intersectionABC_Y = (circle1Y + circle2Y + circle3Y) / 3

  // Three distinct colors for the populations
  // Gender Minority - Purple/Blue
  const stroke1 = darkMode ? 'rgba(139, 92, 246, 0.7)' : 'rgba(139, 92, 246, 0.6)'
  // IV Drug Users - Teal/Blue (Project ECHO primary)
  const stroke2 = darkMode ? 'rgba(8, 145, 178, 0.7)' : 'rgba(8, 145, 178, 0.6)'
  // Unstable Housing - Orange/Amber
  const stroke3 = darkMode ? 'rgba(245, 158, 11, 0.7)' : 'rgba(245, 158, 11, 0.6)'

  const diagram = (
    <div
      className="project-echo-venn-diagram-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative' }}
    >
      {copy === 'problem' && (
        <div
          style={{
            position: 'absolute',
            top: '0.5em',
            left: '0.5em',
            fontSize: isMobile ? '0.55rem' : '0.65rem',
            lineHeight: '1.35',
            color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
            textAlign: 'left',
            zIndex: 10
          }}
        >
          <div>
            <span style={{ color: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)', fontWeight: 700 }}>
              GM
            </span>{' '}
            = Gender Minority
          </div>
          <div>
            <span style={{ color: darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)', fontWeight: 700 }}>
              IDU
            </span>{' '}
            = IV Drug User
          </div>
          <div>
            <span style={{ color: darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)', fontWeight: 700 }}>
              UH
            </span>{' '}
            = Unstable Housing
          </div>
        </div>
      )}
      {copy !== 'problem' && (
        <>
          {/* Total set count - top right corner */}
          <div
            style={{
              position: 'absolute',
              top: '0.5em',
              right: '0.5em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: darkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.10)' : '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '0.75em',
              padding: isMobile ? '0.5em 0.65em' : '0.6em 0.75em',
              boxShadow: darkMode ? 'none' : '0 8px 20px rgba(0, 0, 0, 0.06)',
              backdropFilter: 'blur(10px)',
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: '600',
              color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)',
              fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
              zIndex: 10,
              lineHeight: '1.2'
            }}
          >
            <div>7</div>
            <div style={{ fontStyle: 'italic', fontWeight: '400', textAlign: 'center' }}>sets</div>
          </div>
        </>
      )}
      <svg
        className="project-echo-venn-diagram"
        viewBox={`0 ${copy === 'problem' ? 0 : 40} ${width} ${height + (copy === 'problem' ? 30 : 60)}`}
        preserveAspectRatio="xMidYMin meet"
        style={{
          display: 'block',
          margin: '0 auto',
          padding: 0,
          verticalAlign: 'top',
          // Override global min-height so the Problem caption can hug the SVG
          minHeight: copy === 'problem' ? 0 : undefined
        }}
      >
        <title>
          {copy === 'problem' ? 'Problem: Venn Diagram with Mock Data' : 'Insight: Venn Diagram with Mock Data'}
        </title>
        {copy !== 'problem' && (
          <>
            {/* Pairwise intersections legend in bottom left */}
            <g>
              <text
                x={isMobile ? 20 : 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 20 : 25)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'}
                fontSize={isMobile ? '10' : '12'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                letterSpacing="0.05em"
                textAnchor="start"
                dominantBaseline="hanging"
              >
                3 Pairwise
              </text>
              <text
                x={isMobile ? 20 : 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 35 : 42)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="500"
                textAnchor="start"
                dominantBaseline="hanging"
              >
                <tspan fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'} fontWeight="600">
                  A
                </tspan>
                <tspan> ∩ </tspan>
                <tspan fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'} fontWeight="600">
                  B
                </tspan>
              </text>
              <text
                x={isMobile ? 20 : 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 50 : 59)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="500"
                textAnchor="start"
                dominantBaseline="hanging"
              >
                <tspan fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'} fontWeight="600">
                  A
                </tspan>
                <tspan> ∩ </tspan>
                <tspan fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'} fontWeight="600">
                  C
                </tspan>
              </text>
              <text
                x={isMobile ? 20 : 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 65 : 76)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="500"
                textAnchor="start"
                dominantBaseline="hanging"
              >
                <tspan fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'} fontWeight="600">
                  B
                </tspan>
                <tspan> ∩ </tspan>
                <tspan fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'} fontWeight="600">
                  C
                </tspan>
              </text>
            </g>

            {/* Singles legend in bottom right */}
            <g>
              <text
                x={isMobile ? width - 20 : width - 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 20 : 25)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'}
                fontSize={isMobile ? '10' : '12'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                letterSpacing="0.05em"
                textAnchor="end"
                dominantBaseline="hanging"
              >
                3 Singles
              </text>
              <text
                x={isMobile ? width - 20 : width - 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 35 : 42)}
                fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                textAnchor="end"
                dominantBaseline="hanging"
              >
                A
              </text>
              <text
                x={isMobile ? width - 20 : width - 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 50 : 59)}
                fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                textAnchor="end"
                dominantBaseline="hanging"
              >
                B
              </text>
              <text
                x={isMobile ? width - 20 : width - 30}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 65 : 76)}
                fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                textAnchor="end"
                dominantBaseline="hanging"
              >
                C
              </text>
            </g>

            {/* Three-Way legend in bottom center */}
            <g>
              <text
                x={centerX}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 20 : 25)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'}
                fontSize={isMobile ? '10' : '12'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="600"
                letterSpacing="0.05em"
                textAnchor="middle"
                dominantBaseline="hanging"
              >
                1 Three-Way
              </text>
              <text
                x={centerX}
                y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 35 : 42)}
                fill={darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'}
                fontSize={isMobile ? '11' : '14'}
                fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
                fontWeight="500"
                textAnchor="middle"
                dominantBaseline="hanging"
              >
                <tspan fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'} fontWeight="600">
                  A
                </tspan>
                <tspan> ∩ </tspan>
                <tspan fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'} fontWeight="600">
                  B
                </tspan>
                <tspan> ∩ </tspan>
                <tspan fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'} fontWeight="600">
                  C
                </tspan>
              </text>
            </g>
          </>
        )}

        {/* Circle 1 - Top (Gender Minority) */}
        <circle
          cx={circle1X}
          cy={circle1Y}
          r={radius}
          fill="none"
          stroke={stroke1}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        {/* Small label "a" for Circle 1 */}
        <text
          x={circle1X}
          y={circle1Y}
          fill={darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(139, 92, 246, 0.9)'}
          fontSize={isMobile ? '12' : '16'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {circleLabel1}
        </text>
        {/* Number 1 for Circle A */}
        <text
          x={circle1X}
          y={circle1Y - radius * 0.6}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count1}
        </text>

        {/* Circle 2 - Bottom Left (IV Drug Users) */}
        <circle
          cx={circle2X}
          cy={circle2Y}
          r={radius}
          fill="none"
          stroke={stroke2}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        {/* Small label "b" for Circle 2 */}
        <text
          x={circle2X}
          y={circle2Y}
          fill={darkMode ? 'rgba(8, 145, 178, 1)' : 'rgba(8, 145, 178, 0.9)'}
          fontSize={isMobile ? '12' : '16'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {circleLabel2}
        </text>
        {/* Number 2 for Circle B */}
        <text
          x={circle2X - radius * 0.5}
          y={circle2Y + radius * 0.5}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count2}
        </text>

        {/* Circle 3 - Bottom Right (Unstable Housing) */}
        <circle
          cx={circle3X}
          cy={circle3Y}
          r={radius}
          fill="none"
          stroke={stroke3}
          strokeWidth={isMobile ? '1' : '1.5'}
        />
        {/* Small label "c" for Circle 3 */}
        <text
          x={circle3X}
          y={circle3Y}
          fill={darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 0.9)'}
          fontSize={isMobile ? '12' : '16'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {circleLabel3}
        </text>
        {/* Number 3 for Circle C */}
        <text
          x={circle3X + radius * 0.5}
          y={circle3Y + radius * 0.5}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count3}
        </text>

        {/* Number 4 for A ∩ B */}
        <text
          x={intersectionAB_X}
          y={intersectionAB_Y}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count4}
        </text>

        {/* Number 5 for A ∩ C */}
        <text
          x={intersectionAC_X}
          y={intersectionAC_Y}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count5}
        </text>

        {/* Number 6 for B ∩ C */}
        <text
          x={intersectionBC_X}
          y={intersectionBC_Y + (isMobile ? 8 : 12)}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '9' : '11'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count6}
        </text>

        {/* Number 7 for A ∩ B ∩ C (three-way intersection) */}
        <text
          x={intersectionABC_X}
          y={intersectionABC_Y}
          fill={darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'}
          fontSize={isMobile ? '10' : '13'}
          fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {count7}
        </text>

        {copy === 'problem' && (
          <text
            x={centerX}
            y={Math.max(circle2Y, circle3Y) + radius + (isMobile ? 10 : 12)}
            fill={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'}
            fontSize={isMobile ? '10' : '11'}
            fontFamily='Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
            fontWeight="400"
            fontStyle="italic"
            textAnchor="middle"
            dominantBaseline="hanging"
          >
            *Original design with mock data
          </text>
        )}
      </svg>
    </div>
  )

  const explanation = (
    <div className="case-study-explanation">
      <div className="project-echo-details-card">
        <SectionHeading title={title ?? (copy === 'problem' ? 'Problem' : 'Insight')} />
        {copy === 'problem' ? (
          <>
            <div className="body-2">
              The challenge was to communicate the <strong>intersectionality of three vulnerable populations</strong>.
            </div>
            <div className="body-2">
              The existing solution used a <strong>static Venn diagram</strong>, which made it difficult to clearly show
              and compare the overlaps.
            </div>
          </>
        ) : (
          <>
            <div className="body-2">
              Three populations do not produce one overlap. They produce <strong>seven distinct comparisons</strong>.
            </div>
            <div className="body-2">
              Once the problem was understood as needing to show and compare seven meaningful intersections, it became
              clear that a Venn diagram was the wrong abstraction.
            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div data-aos="fade-up" className="case-study-side-by-side" ref={ref}>
      {copy === 'problem' ? (
        <>
          {explanation}
          {diagram}
        </>
      ) : (
        <>
          {diagram}
          {explanation}
        </>
      )}
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
