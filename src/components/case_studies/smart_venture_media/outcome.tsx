import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Outcome = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-outcome-section" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Outcome" subtitle="The System Outlasted the Project" />

        <div className="invibe-esthetics-results-primary-metrics">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">44</div>
            <div className="invibe-esthetics-metric-label">Speakers coordinated</div>
            <div className="invibe-esthetics-metric-sublabel">day-of</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">19</div>
            <div className="invibe-esthetics-metric-label">Volunteers managed</div>
            <div className="invibe-esthetics-metric-sublabel">across 6 roles</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">11</div>
            <div className="invibe-esthetics-metric-label">Sponsors managed</div>
            <div className="invibe-esthetics-metric-sublabel">day-of</div>
          </div>
        </div>

        <div className="invibe-esthetics-results-secondary-row">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">9.5 Hours</div>
            <div className="invibe-esthetics-metric-label">Full day operation</div>
            <div className="invibe-esthetics-metric-sublabel">8:30AM to cocktail reception</div>
          </div>
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary">
            <div className="invibe-esthetics-metric-value">214%</div>
            <div className="invibe-esthetics-metric-label">Sponsor growth</div>
            <div className="invibe-esthetics-metric-sublabel">since joining as operator</div>
          </div>
        </div>

        <div className="invibe-esthetics-results-feedback-grid">
          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary invibe-esthetics-feedback-card">
            <blockquote className="invibe-esthetics-feedback-quote">
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
              Adalida Baca is the ABSOLUTE BEST. Thank you for making our events go smoothly.
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
            </blockquote>
            <cite className="invibe-esthetics-feedback-attribution">
              Grace Gong, Founder and CEO, Smart Venture Media
            </cite>
          </div>

          <div className="invibe-esthetics-metric-card invibe-esthetics-metric-primary invibe-esthetics-feedback-card">
            <blockquote className="invibe-esthetics-feedback-quote">
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
              I wanted to thank you for being so welcoming to me and all the participants. It really helps set the tone
              for the event.
              <span className="invibe-esthetics-feedback-quote-mark" aria-hidden="true">
                "
              </span>
            </blockquote>
            <cite className="invibe-esthetics-feedback-attribution">David Yarbrough, Business Consultant, Sequoia</cite>
          </div>
        </div>
      </div>
    </div>
  )
})

Outcome.displayName = 'Outcome'

export default Outcome
