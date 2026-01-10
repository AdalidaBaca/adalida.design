import React, { forwardRef, type Ref } from 'react'

import WireframingImage from 'images/gaintain/wireframing.webp'

import SectionHeading from 'components/section_heading'

const Wireframing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
      <div className='gaintain-image-container gaintain-wireframing'>
        <img src={WireframingImage} alt='Mockups' />
      </div>
      <div className='case-study-explanation'>
        <div className='gaintain-details-card'>
          <SectionHeading title='Design strategy' />
          <div className='body-2'>
            To strengthen the <strong>AI coach</strong>, I treated <strong>consistency as a design problem</strong> rather than a motivation problem.
          </div>
          <div className='body-2'>
            The system already reflected NASM-level training knowledge, but human coaches succeed not just by prescribing plans, they create <strong>accountability</strong>.
          </div>
          <div className='body-2'>
            I focused on <strong>accountability</strong> mechanisms, like pledges and progress feedback, so the AI could support <strong>follow-through</strong>, not just generate workouts.
          </div>
        </div>
      </div>
    </div>
  )
})

Wireframing.displayName = 'Wireframing'

export default Wireframing
