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
              <strong>This Week in Startups Finalist:</strong> Selected to pitch at the Gamma competition, validating
              the venture-scale potential of the designed accountability model.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>Accepted into Founder University:</strong> Secured a spot in the accelerator based on technical
              velocity and a validated market gap.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>8 Months Bootstrapped in SF:</strong> Self-funded the venture in a high-competition market while
              managing all <strong>Product Ops</strong> and design-to-code development.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>9-Week Velocity to MVP:</strong> Moved from concept to App Store launch in one quarter via a
              code-first design workflow.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>30 App Store Releases:</strong> Maintained a high-frequency iteration cycle during 8 months of
              bootstrapping to refine UI performance.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>100+ Organic Pilot Signups:</strong> Generated a high-intent waitlist entirely through organic
              channels to validate the <strong>stakes-based model</strong>.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>40% Reduction in Onboarding Drop-off:</strong> Optimized the &quot;aha&quot; moment by resolving
              UI friction during initial AI workout setup.
            </div>
          </div>
          <div className="gaintain-validation-card">
            <div className="body-2">
              <strong>12% App Store Conversion Rate:</strong> Achieved a download-to-view ratio that significantly
              outperforms category averages.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
