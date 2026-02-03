import SectionHeading from 'components/section_heading'

import FinalDesignImage from 'images/gaintain/Hero Photos/results_hero.webp'
import { forwardRef, type Ref } from 'react'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom gaintain-results-section" ref={ref}>
      <div className="gaintain-image-container">
        <img src={FinalDesignImage} alt="Different types of sets" />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Results" subtitle="Market Validation & Growth Momentum" />

        <div className="gaintain-results-achievements">
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>This Week in Startups Finalist:</strong> Selected to pitch at the Gamma competition, validating the venture-scale potential of the &quot;Designed Accountability&quot; model.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>Accepted into Founder University:</strong> Secured a spot in the accelerator based on the app&apos;s technical velocity and validated market gap.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>8 Months Bootstrapped in SF:</strong> Self-funded and operated the venture in a high-competition market, managing all Product Ops and design-to-code development.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>9-Week Velocity to MVP:</strong> Moved from concept to App Store launch in one quarter via a code-first design workflow.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>30 App Store Releases:</strong> Maintained a high-frequency iteration cycle during 8 months of bootstrapping to refine UI performance.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>100+ Organic Pilot Signups:</strong> Built a high-intent waitlist entirely through organic channels to test the upcoming Pledges feature.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>40% Reduction in Onboarding Drop-off:</strong> Identified and resolved critical UI friction points, significantly increasing the rate of users reaching their first AI-generated session.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>12% App Store Conversion Rate:</strong> Achieved a download-to-view ratio that doubles category averages, proving the strength of the app&apos;s initial value proposition.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
