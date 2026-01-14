import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'
import CommunityCarousel from './community_carousel'

const Iterations = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
      <CommunityCarousel ariaLabel='Community' />
      <div className='case-study-explanation'>
                    <div className='gaintain-details-card'>
                      <SectionHeading title='Implementation' />
                      <div className='body-2'>
                        I worked as part of a <strong>two-person founding team</strong>, with my co-founder owning backend architecture and data models while I led product design and front-end interaction work.
                      </div>
                      <div className='body-2'>
                        Using Cursor, shared rules, Swift linters, and XcodeGen, I designed and implemented <strong>production-quality</strong> flows directly in code.
                      </div>
                      <div className='body-2'>
                        We tested builds on <strong>real devices</strong> in gym environments, reviewed changes together, and shipped frequently with roughly <strong>30 App Store releases</strong>.
                      </div>
                    </div>
      </div>
    </div>
  )
})

Iterations.displayName = 'Iterations'

export default Iterations
