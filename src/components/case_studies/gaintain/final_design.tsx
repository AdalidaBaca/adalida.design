import { IconSchool, IconTrophy } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'

import FinalDesignImage from 'images/gaintain/Hero Photos/results_hero.webp'
import React, { forwardRef, type Ref } from 'react'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom gaintain-results-section" ref={ref}>
      <div className="gaintain-image-container">
        <img src={FinalDesignImage} alt="Different types of sets" />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Results" />

        {/* Primary Metrics - Most Impactful */}
        <div className="gaintain-results-primary-metrics">
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">40%</div>
            <div className="gaintain-metric-label">Reduction in onboarding drop-off</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">12%</div>
            <div className="gaintain-metric-label">App Store conversion rate</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">9 weeks</div>
            <div className="gaintain-metric-label">From MVP to launch</div>
          </div>
          <div className="gaintain-metric-card gaintain-metric-primary">
            <div className="gaintain-metric-value">117</div>
            <div className="gaintain-metric-label">Downloads since first launch</div>
          </div>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="gaintain-results-secondary-metrics">
          <div className="gaintain-metric-card">
            <div className="gaintain-metric-value">30</div>
            <div className="gaintain-metric-label">App Store releases</div>
          </div>
          <div className="gaintain-metric-card">
            <div className="gaintain-metric-value">1.17K</div>
            <div className="gaintain-metric-label">App Store impressions</div>
          </div>
          <div className="gaintain-metric-card">
            <div className="gaintain-metric-value">364</div>
            <div className="gaintain-metric-label">Product page views</div>
          </div>
          <div className="gaintain-metric-card">
            <div className="gaintain-metric-value">100%</div>
            <div className="gaintain-metric-label">Lighthouse scores</div>
          </div>
        </div>

        {/* Validation Items */}
        <div className="gaintain-validation-items">
          <div className="gaintain-validation-card">
            <div className="gaintain-validation-icon">
              <IconSchool />
            </div>
            <div className="body-2">
              Accepted into <strong>Founder University</strong>
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="gaintain-validation-icon">
              <IconTrophy />
            </div>
            <div className="body-2">
              <strong>Gamma pitch competition</strong> finalist
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
