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
            <div className="body-2">
              Aligning early on <strong>data models</strong> saves time and prevents costly rework.
            </div>
          </div>

          <div className="gaintain-details-card">
            <div className="body-2">
              <strong>Prototyping in code</strong> accelerates validation with real users.
            </div>
          </div>

          <div className="gaintain-details-card">
            <div className="body-2">
              Gaining <strong>first users</strong> requires different strategies than retaining existing ones.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
