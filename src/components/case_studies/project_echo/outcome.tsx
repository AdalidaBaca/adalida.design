import SectionHeading from 'components/section_heading'
import React, { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom project-echo-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <div className="project-echo-details-card project-echo-outcome-card">
          <SectionHeading title="Outcome" />
          <div className="body-2">
            The new visualization made intersectionality <strong>easier to understand and discuss</strong>. The
            researcher adopted it as her primary way of representing the data, and the approach was shared internally.
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
