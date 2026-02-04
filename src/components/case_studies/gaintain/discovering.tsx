import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'
import CompetitorsCarousel from './competitors_carousel'
import DesignStrategyGraphic from './design_strategy_graphic'
import TriangleInsight from './triangle_insight'

interface Props {
  keyInsightRef?: Ref<HTMLDivElement>
}

const Discovering = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  const { keyInsightRef } = props

  return (
    <>
      <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
        <div className="gaintain-image-container">
          <TriangleInsight />
        </div>
        <div className="case-study-explanation">
          <div className="gaintain-details-card">
            <SectionHeading title="Problem" subtitle="The Churn of &quot;Day 29&quot;" />
            <div className="body-2">
              An estimated <strong>80 million gym-goers lose momentum</strong> when structured workout programs end.
            </div>
            <div className="body-2">
              Most fitness products are designed around plans and programs but break down once{' '}
              <strong>motivation dips</strong>, driving long-term churn.
            </div>
            <div className="body-2">
              We identified that the market is <strong>over-designed for planning</strong> and{' '}
              <strong>under-designed for follow-through friction</strong>.
            </div>
          </div>
        </div>
      </div>
      <CompetitorsCarousel ariaLabel="Competitors" />
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        className="case-study-side-by-side gaintain-key-insight gaintain-key-insight-close"
        ref={keyInsightRef}
      >
        <div className="case-study-explanation">
          <div className="gaintain-details-card">
            <SectionHeading title="Key Insight" subtitle="The Follow-Through Gap" />
            <div className="body-2">
              After reviewing <strong>180+ fitness and tracking apps</strong> and collecting survey feedback from active
              lifters, the same breakdown appeared repeatedly. We discovered that{' '}
              <strong>planning is over-designed</strong>, while <strong>follow-through is under-designed</strong>.
            </div>
            <div className="body-2">
              Without <strong>accountability</strong> and <strong>visible progress</strong>, consistency breaks down
              regardless of how well a workout is structured.
            </div>
          </div>
        </div>
        <div className="gaintain-image-container">
          <DesignStrategyGraphic />
        </div>
      </div>
    </>
  )
})

Discovering.displayName = 'Discovering'

export default Discovering
