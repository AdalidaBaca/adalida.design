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
            I worked as part of a <strong>two-person founding team</strong>, with my co-founder owning <strong>backend architecture and data models</strong> while I led product design and front-end interaction work.
          </div>
          <div className='body-2'>
            Using <strong>Cursor</strong> with shared rules, <strong>Swift linters</strong>, and <strong>XcodeGen</strong>, I prototyped and implemented <strong>production-quality flows</strong> that bridged design and engineering.
          </div>
          <div className='body-2'>
            We tested builds on real devices in-gym, reviewed changes together, and shipped frequently with roughly <strong>30 App Store releases</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Iterations.displayName = 'Iterations'

export default Iterations
