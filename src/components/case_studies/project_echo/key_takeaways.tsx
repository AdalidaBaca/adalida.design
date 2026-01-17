import SectionHeading from 'components/section_heading'
import React, { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" ref={ref} className="case-study-top-to-bottom project-echo-key-takeaways">
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="project-echo-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Clear language unlocks solutions</strong>. Naming what needed to be shown made the right solution
              discoverable.
            </div>
          </div>

          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Clear thinking is important across domains</strong>. The same approach applies even in unfamiliar
              problem spaces.
            </div>
          </div>

          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Good judgment avoids wasted work</strong>. Leveraging an existing solution delivered clarity
              faster than building something new.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
