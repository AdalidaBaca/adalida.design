import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom project-echo-solution-section' ref={ref}>
      <div className='case-study-explanation'>
        <div className='project-echo-details-card'>
          <SectionHeading title='Solution' />
          <div className='body-2'>
            I replaced the static Venn diagram with an <strong>interactive UpSet plot</strong> that makes each intersection explicit and comparable.
          </div>
          <div className='body-2'>
            Unlike the original visualization, the new approach allows intersections to be isolated, compared, and explored individually. This reduces the need to mentally track overlaps and makes differences between populations easier to see and discuss.
          </div>
          <div className='body-2'>
            Because the visualization is interactive and data-driven, it can be reused as the dataset evolves, rather than recreated as a static image each time.
          </div>
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
