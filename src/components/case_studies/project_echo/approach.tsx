import SectionHeading from 'components/section_heading'
import React, { forwardRef, Ref } from 'react'
import ApproachGraphic from './approach_graphic'

const Approach = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-side-by-side project-echo-approach-section" ref={ref}>
      <div className="case-study-explanation">
        <div className="project-echo-details-card">
          <SectionHeading title="Approach" />
          <div className="body-2">
            I looked for visualization methods that explicitly represent and compare intersections across multiple
            groups.
          </div>
          <div className="body-2">
            This led me to <strong>UpSet plots</strong>, a well-documented solution to a known visualization problem,
            supported by an <strong>interactive and reusable implementation</strong>.
          </div>
        </div>
      </div>
      <div className="gaintain-image-container">
        <ApproachGraphic />
      </div>
    </div>
  )
})

Approach.displayName = 'Approach'

export default Approach
