import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Impact" />

        {/* Client feedback: quote above metrics */}
        <div className="invibe-esthetics-results-feedback-row">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary invibe-esthetics-feedback-card">
            <blockquote className="invibe-esthetics-feedback-quote">
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
              Booking is easier, and all my client information is finally in one place.
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
            </blockquote>
            <cite className="invibe-esthetics-feedback-attribution">Andria Herrera</cite>
          </div>
        </div>

        {/* Row 1: +170%, 50%, 100% */}
        <div className="invibe-esthetics-results-primary-metrics">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">+170%</div>
            <div className="invibe-esthetics-metric-label">total sales</div>
            <div className="invibe-esthetics-metric-sublabel">30 days post launch</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">50%</div>
            <div className="invibe-esthetics-metric-label">reduction in annual platform and automation costs</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">100%</div>
            <div className="invibe-esthetics-metric-label">pre-appointment intake completion</div>
          </div>
        </div>

        {/* Row 2: 150 hours, Unlocked */}
        <div className="invibe-esthetics-results-secondary-row">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">150 hours</div>
            <div className="invibe-esthetics-metric-label">of annual administrative work eliminated</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">Cancellation Fees</div>
            <div className="invibe-esthetics-metric-label">captured new revenue stream</div>
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
