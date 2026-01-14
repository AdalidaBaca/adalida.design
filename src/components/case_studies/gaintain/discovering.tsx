import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'
import TriangleInsight from './triangle_insight'
import SystemDiagram from './system_diagram'
import DesignStrategyGraphic from './design_strategy_graphic'
import CompetitorsCarousel from './competitors_carousel'

interface Props {
  keyInsightRef?: Ref<HTMLDivElement>
}

const Discovering = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  const { keyInsightRef } = props

  return (
    <>
      <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
        <div className='gaintain-image-container'>
          <TriangleInsight />
        </div>
        <div className='case-study-explanation'>
          <div className='gaintain-details-card'>
            <SectionHeading title='Problem' />
            <div className='body-2'>
              An estimated <strong>80 million gym-goers</strong> <strong>lose momentum</strong> when structured workout programs end.
            </div>
            <div className='body-2'>
              Most fitness products are designed around <strong>plans and programs</strong>, but break down once <strong>motivation dips</strong>, driving long-term <strong>churn</strong>.
            </div>
          </div>
        </div>
      </div>
      <CompetitorsCarousel ariaLabel='Competitors' />
      <div data-aos='fade-up' data-aos-offset='150' className='case-study-side-by-side gaintain-key-insight gaintain-key-insight-close' ref={keyInsightRef}>
        <div className='case-study-explanation'>
          <div className='gaintain-details-card'>
            <SectionHeading title='Key Insight' />
            <div className='body-2'>
              Planning is <strong>over-designed</strong>, while follow-through is <strong>under-designed</strong>.
            </div>
            <div className='body-2'>
              After reviewing <strong>180+ fitness and tracking apps</strong> and collecting survey feedback from active lifters, the same breakdown appeared repeatedly.
            </div>
            <div className='body-2'>
              Without <strong>accountability</strong> and <strong>visible progress</strong>, consistency breaks down.
            </div>
          </div>
        </div>
        <div className='gaintain-image-container'>
          <DesignStrategyGraphic />
        </div>
      </div>
    </>
  )
})

Discovering.displayName = 'Discovering'

export default Discovering
