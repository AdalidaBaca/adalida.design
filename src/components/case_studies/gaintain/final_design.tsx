import SectionHeading from 'components/section_heading'

import FinalDesignImage from 'images/gaintain/Hero Photos/results_hero.webp'
import { forwardRef, type Ref } from 'react'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom gaintain-results-section" ref={ref}>
      <div className="gaintain-image-container">
        <img src={FinalDesignImage} alt="GainTain results and validation" />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Results" subtitle="Market Validation & Growth Momentum" />

        {/* Row 1: 9 Weeks, 100+, 8 Months */}
        <div className="gaintain-results-primary-metrics">
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">9 Weeks</div>
            <div className="gaintain-metric-label">Concept to MVP</div>
            <div className="gaintain-metric-sublabel">code-first design workflow</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">100+</div>
            <div className="gaintain-metric-label">Organic Pilot Signups</div>
            <div className="gaintain-metric-sublabel">stakes-based model validation</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">8 Months</div>
            <div className="gaintain-metric-label">Bootstrapped in SF</div>
            <div className="gaintain-metric-sublabel">Product Ops & design-to-code</div>
          </div>
        </div>

        {/* Row 2: Accepted, Finalist */}
        <div className="gaintain-results-secondary-row">
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">Accepted</div>
            <div className="gaintain-metric-label">Founder University</div>
            <div className="gaintain-metric-sublabel">accelerator, technical velocity</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">Finalist</div>
            <div className="gaintain-metric-label">This Week in Startups</div>
            <div className="gaintain-metric-sublabel">Gamma competition, venture-scale validation</div>
          </div>
        </div>

        {/* Row 3: 40%, 12%, 30 */}
        <div className="gaintain-results-primary-metrics">
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">40%</div>
            <div className="gaintain-metric-label">Reduction in Drop-off</div>
            <div className="gaintain-metric-sublabel">onboarding & aha moment</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">12%</div>
            <div className="gaintain-metric-label">App Store Conversion</div>
            <div className="gaintain-metric-sublabel">outperforms category</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">30</div>
            <div className="gaintain-metric-label">App Store Releases</div>
            <div className="gaintain-metric-sublabel">high-frequency iteration</div>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
