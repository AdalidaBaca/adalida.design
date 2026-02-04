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
        <div className="gaintain-takeaways-list">
          <div className="gaintain-details-card">
            <SectionHeading title="Engineering-Led Design" subtitle="Architecture is UX" />
            <div className="body-2">
              Aligning early on <strong>data models</strong> ensured our <strong>AI</strong> could personalize workouts
              without breaking <strong>historical progress logic</strong>. Treating architecture as UX{' '}
              <strong> prevented costly rework</strong> that often stalls early-stage MVPs.
            </div>
          </div>

          <div className="gaintain-details-card">
            <SectionHeading title="Contextual Validation" subtitle="Prototyping in the Field" />
            <div className="body-2">
              Building directly in <strong>Swift</strong> exposed real <strong>gym-floor friction</strong> that static
              mocks miss. Testing under fatigue revealed constraints around <strong>tap targets</strong>, contrast, and
              interaction speed that materially shaped the final UI.
            </div>
          </div>

          <div className="gaintain-details-card">
            <SectionHeading title="Product Strategy" subtitle="Lifecycle Commitment" />
            <div className="body-2">
              First-time users need clarity; existing users need reinforcement. <strong>Positive friction</strong>{' '}
              converts early intent into <strong>explicit commitment</strong>, sustaining follow-through throughout the{' '}
              <strong>training lifecycle</strong>. Securing <strong>100+ organic signups</strong> validated that users
              accept this friction to achieve consistency.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
