import React, { forwardRef, type Ref } from 'react'

import DiscoveringImage from 'images/gaintain/discovering.webp'

import SectionHeading from 'components/section_heading'
import ResetLoop from './reset_loop'
import TriangleInsight from './triangle_insight'

interface Props {
  keyInsightRef?: Ref<HTMLDivElement>
}

const Discovering = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  const { keyInsightRef } = props

  return (
    <>
      <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
        <div className='gaintain-image-container'>
          <ResetLoop />
        </div>
        <div className='case-study-explanation'>
          <div className='gaintain-details-card'>
            <SectionHeading title='Problem' />
            <div className='body-2'>
              An estimated <strong>80 million gym-goers lose momentum</strong> when structured workout programs end, driving churn across fitness apps.
            </div>
            <div className='body-2'>
              While <strong>AI fitness apps personalize workouts well</strong>, personalization alone <strong>does not prevent drop-off</strong> once motivation fades.
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-up' data-aos-offset='150' className='case-study-side-by-side gaintain-key-insight' ref={keyInsightRef}>
        <div className='case-study-explanation'>
          <div className='gaintain-details-card'>
            <SectionHeading title='Key Insight' />
            <div className='body-2'>
              <strong>Planning is over-designed, while follow-through is under-designed</strong>.
            </div>
            <div className='body-2'>
              I saw this repeatedly after reviewing <strong>180+ fitness and tracking apps</strong> and collecting survey feedback from active lifters.
            </div>
            <div className='body-2'>
              <strong>Different training styles still fail at the same point:</strong> without accountability and visible feedback, consistency breaks down.
            </div>
          </div>
        </div>
        <div className='gaintain-image-container'>
          <TriangleInsight />
        </div>
      </div>
    </>
  )
})

Discovering.displayName = 'Discovering'

export default Discovering
