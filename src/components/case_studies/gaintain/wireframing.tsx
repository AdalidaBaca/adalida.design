import React, { forwardRef, type Ref } from 'react'

import TrackImage from 'images/gaintain/track.webp'

import SectionHeading from 'components/section_heading'

import SystemDiagram from './system_diagram'

const Wireframing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
      <div className='gaintain-image-container gaintain-design-strategy-track'>
        <img src={TrackImage} alt='Where Gains are Data-Driven' />
      </div>
      <div className='gaintain-image-container'>
        <SystemDiagram />
      </div>
      <div className='case-study-explanation'>
        <div className='gaintain-details-card'>
          <SectionHeading title='Design strategy' />
          <div className='body-2'>
            I treated <strong>consistency as a design problem</strong>, not a motivation problem.
          </div>
          <div className='body-2'>
            Behavioral research shows <strong>loss aversion</strong> is more effective than rewards alone when habits are fragile.
          </div>
          <div className='body-2'>
            Instead of reminders or streaks, I designed <strong>accountability with real consequences</strong>, similar to paying for a human coach.
          </div>
        </div>
      </div>
    </div>
  )
})

Wireframing.displayName = 'Wireframing'

export default Wireframing
