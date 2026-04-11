import SectionHeading from 'components/section_heading'
import InsightGraphic from 'images/smart_venture_media_insight.png'
import { forwardRef, type Ref } from 'react'

const Insight = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-side-by-side smart-venture-media-insight-layout">
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="Insight" subtitle="What Needed to Exist, Didn&apos;t" />
            <div className="body-2">
              There was no operational map for the event. What tasks needed to happen, who needed to own each one, how
              many people each role required. None of it was written down.
            </div>
            <div className="body-2">
              The operation ran entirely on <strong>tribal knowledge</strong>.
            </div>
          </div>
        </div>
        <div className="smart-venture-media-insight-visual">
          <div className="project-echo-details-card smart-venture-media-insight-image-card">
            <img
              src={InsightGraphic}
              alt="Smart Venture Media insight visual"
              className="smart-venture-media-graphic-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
