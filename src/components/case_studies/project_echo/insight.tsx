import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const Insight = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
      <div className='case-study-explanation'>
        <div className='project-echo-details-card'>
          <SectionHeading title='Insight' />
          <div className='body-2'>
            The <strong>intersection itself carried the most meaning</strong>.
          </div>
          <div className='body-2'>
            Once the goal was stated as showing the size of each intersection and comparing those intersections, it became possible to search for solutions designed to do exactly that.
          </div>
        </div>
      </div>
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
