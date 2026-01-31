import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div
      data-aos="fade-up"
      ref={ref}
      className="case-study-top-to-bottom querque-key-takeaways project-echo-key-takeaways"
    >
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="body-2" style={{ marginBottom: '0.25em' }}>
          Every project is a learning opportunity&mdash;Querque Candles was an opportunity to refine my design process,
          client management, and eCommerce knowledge.
        </div>
        <div className="project-echo-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>AI for Rapid Iteration</strong>. Used AI to rapidly generate design concepts alongside client
              feedback. While AI didn&apos;t fully capture the vision, it streamlined early iterations and saved time on
              unused concepts.
            </div>
          </div>
          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Navigating Client Work</strong>. Balancing design work with client management was a challenge.
              Navigating proposals, payments, and timelines highlighted the importance of clear expectations and firm
              contracts.
            </div>
          </div>
          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Shopify Insights</strong>. Although unpaid for Shopify work, the project provided hands-on
              experience with the platform, reinforcing its value for eCommerce design.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
