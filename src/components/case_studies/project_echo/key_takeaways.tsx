import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" ref={ref} className="case-study-top-to-bottom project-echo-key-takeaways">
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="project-echo-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="project-echo-details-card">
            <SectionHeading title="IA is Strategy" />
            <div className="body-2">
              Naming the specific comparisons needed made the solution discoverable. Correctly identifying{' '}
              <strong>seven intersections</strong> transformed a data mess into a <strong>navigable UI</strong>.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="Systems Thinking" />
            <div className="body-2">
              Clear thinking transfers across domains. The same set-logic used for health data applies to any{' '}
              <strong>multi-set intersection problem</strong> in SaaS, FinTech, or AI.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="Avoiding Wasted Work" />
            <div className="body-2">
              Leveraging an established solution (<strong>UpSet plots</strong>) delivered clarity faster than building
              a bespoke tool from scratch. Good judgment prioritizes <strong>outcomes over busy work</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
