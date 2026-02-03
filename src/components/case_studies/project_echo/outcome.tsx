import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom project-echo-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <div className="project-echo-details-card project-echo-outcome-card">
          <SectionHeading title="Standardizing Research Communication" />
          <div className="body-2">
            The interactive UpSet plot was adopted as the <strong>primary reporting standard</strong> for
            intersectional data within the organization. By moving from a static image to a <strong>data-driven
            framework</strong>, the research lead was able to communicate health disparities to stakeholders with{' '}
            <strong>immediate clarity</strong>, removing the friction of manual data interpretation.
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
