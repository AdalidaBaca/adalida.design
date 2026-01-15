import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
      <div className='case-study-explanation'>
        <div className='project-echo-details-card'>
          <SectionHeading title='Outcome' />
          <div className='body-2'>
            The new visualization made intersectionality <strong>easier to understand and discuss</strong>. The researcher adopted it as her primary way of representing the data, and the approach was shared internally.
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
