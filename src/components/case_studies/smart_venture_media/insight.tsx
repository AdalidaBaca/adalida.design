import SectionHeading from 'components/section_heading'
import InsightGraphic from 'images/smart_venture_media/insight_before.png'
import { forwardRef, type Ref } from 'react'

const Insight = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-side-by-side smart-venture-media-insight-layout">
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="INSIGHT" subtitle="One Document Cannot Do Everything" />
            <div className="body-2">
              The run of show and the website were <strong>two sources of truth</strong> for the same event. Volunteers
              were managing both. The insight was simple: <strong>break it apart</strong>.{' '}
              <strong>One document per role</strong>, built around what that person actually needed to do.
            </div>
            <div className="body-2">
              The founder had the vision. The infrastructure to support it didn&apos;t exist yet.
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
