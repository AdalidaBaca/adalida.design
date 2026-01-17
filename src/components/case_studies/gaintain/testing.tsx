import SectionHeading from 'components/section_heading'
import React, { forwardRef, type Ref } from 'react'
import GaintainLogo3D from './gaintain_logo_3d'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-side-by-side gaintain-solution" ref={ref}>
      <div className="case-study-explanation">
        <div className="gaintain-details-card">
          <SectionHeading title="Solution" />
          <div className="body-2">
            I paired <strong>AI-guided workouts</strong> with <strong>designed accountability</strong> to support
            follow-through.
          </div>
          <ul className="body-2" style={{ margin: '0.5em 0', paddingLeft: '1em' }}>
            <li style={{ marginBottom: '0.75em' }}>AI workouts handle planning and personalization</li>
            <li style={{ marginBottom: '0.75em' }}>
              <strong>Pledges</strong> apply <strong>loss aversion</strong> to create commitment
            </li>
            <li style={{ marginBottom: '0.75em' }}>Calendar feedback makes progress visible over time</li>
          </ul>
          <div className="body-2">
            Together, this <strong>reduces drop-off</strong> across training styles by designing for showing up, not
            restarting.
          </div>
        </div>
      </div>
      <div className="gaintain-image-container gaintain-video-container" aria-hidden="true">
        <GaintainLogo3D />
      </div>
    </div>
  )
})

Testing.displayName = 'Testing'

export default Testing
