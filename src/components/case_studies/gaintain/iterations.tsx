import React, { forwardRef, type Ref } from 'react'

import IterationsImage from 'images/gaintain/iterations.webp'

import SectionHeading from 'components/section_heading'

const Iterations = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom padding' ref={ref}>
      <div className='gaintain-image-container gaintain-implementation-image'>
        <img src={IterationsImage} alt='Design iterations' />
      </div>
      <div className='case-study-explanation'>
        <div className='gaintain-details-card'>
          <SectionHeading title='Implementation' />
          <div className='body-2'>
            I worked as part of a two-person founding team, with my co-founder owning backend architecture and data models while I led product design and front-end interaction work.
          </div>
          <div className='body-2'>
            Using Cursor with shared rules, Swift linters, and XcodeGen, I prototyped and implemented production-quality flows that bridged design and engineering.
          </div>
          <div className='body-2'>
            We tested builds on real devices in-gym, reviewed changes together, and shipped frequently with roughly 30 App Store releases.
          </div>
        </div>
      </div>
    </div>
  )
})

Iterations.displayName = 'Iterations'

export default Iterations
