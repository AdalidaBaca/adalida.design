import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Outcome" subtitle="One Source of Truth" />
        <div className="invibe-esthetics-details-card">
          <div className="body-2">
            Three websites collapsed into <strong>one structured dataset</strong>. The team enters each record{' '}
            <strong>once</strong>; it renders everywhere, desktop and mobile, with no developer and no design drift.
          </div>
        </div>

        <div className="invibe-esthetics-results-primary-metrics">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>3 → 1</strong>
            </div>
            <div className="invibe-esthetics-metric-label">websites consolidated; two subscriptions eliminated</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>300+</strong>
            </div>
            <div className="invibe-esthetics-metric-label">
              records migrated by a non-technical operator from written docs
            </div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>1 record → every surface</strong>
            </div>
            <div className="invibe-esthetics-metric-label">lists, tabs, dynamic pages, both breakpoints</div>
          </div>
        </div>

        <div className="invibe-esthetics-results-secondary-row">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>$0</strong>
            </div>
            <div className="invibe-esthetics-metric-label">dev fees for routine updates</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">
              <strong>~1 hr</strong>
            </div>
            <div className="invibe-esthetics-metric-label">to populate a new summit&apos;s agenda and speakers</div>
            <div className="invibe-esthetics-metric-sublabel">down from ~a day</div>
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
