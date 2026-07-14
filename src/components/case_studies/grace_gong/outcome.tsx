import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Outcome" subtitle="The First Version That Held Both" />
        <div className="invibe-esthetics-details-card">
          <div className="body-2">
            A scattered operation collapsed into <strong>one source of truth</strong>, with the brand unified for the
            first time. Grace&apos;s team now adds content, even a full new summit, <strong>by entering it once</strong>
            , with no developer in the loop and no design drift. Speaker, sponsor, and schedule changes still happen
            constantly as events near, but they&apos;re now{' '}
            <strong>CMS entries instead of manual edits in two layouts</strong>. I documented every update path so the
            team can run it from a written guide, not from memory of how I built it.
          </div>
        </div>

        <div className="invibe-esthetics-results-primary-metrics">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>3 → 1</strong>
            </div>
            <div className="invibe-esthetics-metric-label">platforms consolidated</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>300+</strong>
            </div>
            <div className="invibe-esthetics-metric-label">records migrated cleanly</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>~1 hr</strong>
            </div>
            <div className="invibe-esthetics-metric-label">to stand up a new summit</div>
            <div className="invibe-esthetics-metric-sublabel">down from ~a day</div>
          </div>
        </div>

        <div className="invibe-esthetics-results-secondary-row">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>1 edit, 2 platforms</strong>
            </div>
            <div className="invibe-esthetics-metric-label">agenda updates render to desktop and mobile</div>
            <div className="invibe-esthetics-metric-sublabel">from one CMS entry, not two manual edits</div>
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
