import SectionHeading from 'components/section_heading'

import KeyTakeawayImage from 'images/gaintain/Hero Photos/key takeaway 1.png'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" ref={ref} className="case-study-top-to-bottom gaintain-key-takeaways">
      <div className="gaintain-image-container">
        <img src={KeyTakeawayImage} alt="Key takeaways" />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="gaintain-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="gaintain-details-card">
            <SectionHeading title="Engineering-Led Design" subtitle="Architecture is UX" />
            <div className="body-2">
              Aligning early on <strong>data models</strong> ensured our <strong>AI</strong> could personalize sessions without breaking <strong>historical progress logic</strong>. This foundational step prevented the technical debt and <strong>costly rework</strong> that typically stalls early-stage MVPs.
            </div>
          </div>

          <div className="gaintain-details-card">
            <SectionHeading title="Contextual Validation" subtitle="Prototyping in the Field" />
            <div className="body-2">
              Building in <strong>Swift</strong> revealed <strong>gym-floor friction</strong> that static Figma mocks never would have caught. We iterated on <strong>high-stress UI points</strong> like tap targets to ensure the app remained functional during intense physical activity and fatigue.
            </div>
          </div>

          <div className="gaintain-details-card">
            <SectionHeading title="Product Strategy" subtitle="Solving the Gap" />
            <div className="body-2">
              Our research confirmed that while <strong>planning is over-designed</strong>, <strong>accountability is ignored</strong>. By securing a <strong>100+ person pilot</strong>, we proved that users are willing to accept <strong>positive friction</strong> if it creates the commitment needed for consistency.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
