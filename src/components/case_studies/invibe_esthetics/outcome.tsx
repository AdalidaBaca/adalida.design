import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Impact" />

        {/* Primary Metrics Grid */}
        <div className="invibe-esthetics-results-primary-metrics">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">+170%</div>
            <div className="invibe-esthetics-metric-label">Increase in total sales (30 days post launch)</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">50%</div>
            <div className="invibe-esthetics-metric-label">Reduction in platform and automation costs</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">100%</div>
            <div className="invibe-esthetics-metric-label">Pre appointment intake completion</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">Captured</div>
            <div className="invibe-esthetics-metric-label">Cancellation fees consistently captured</div>
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
