import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const Problem = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
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
