import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
      <div className='case-study-explanation'>
        <div className='project-echo-details-card'>
          <SectionHeading title='Solution' />
          <div className='body-2'>
            I replaced the static Venn diagram with an <strong>interactive UpSet plot</strong>.
          </div>
          <div className='body-2'>
            The visualization:
          </div>
          <ul className='body-2' style={{ marginTop: '0.5em', paddingLeft: '1.5em' }}>
            <li>Makes each of the seven intersections explicit</li>
            <li>Allows direct comparison between intersections</li>
            <li>Supports interaction instead of static interpretation</li>
            <li>Can be reused as data changes</li>
          </ul>
          <div className='body-2' style={{ marginTop: '1em' }}>
            The underlying data remained unchanged.
          </div>
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
