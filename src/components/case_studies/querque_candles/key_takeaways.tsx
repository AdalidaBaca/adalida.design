import DarkModeContext from 'dark_mode_context'
import { forwardRef, type Ref, useContext } from 'react'

import Card from '../key_takeaway_card'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div data-aos="fade-up" ref={ref} className="case-study-top-to-bottom">
      <div className="key-takeaways">
        <h4 className={darkMode ? 'dark' : ''}>Key Takeaways</h4>
        <div>
          Every project is a learning opportunity&mdash;Querque Candles was an opportunity to refine my design process,
          client management, and eCommerce knowledge.
        </div>
      </div>
      <div className="stacking-cards">
        <Card title="AI for Rapid Iteration">
          <p className="caption-1">
            Used AI to rapidly generate design concepts alongside client feedback. While AI didn&apos;t fully capture
            the vision, it streamlined early iterations and saved time on unused concepts.
          </p>
        </Card>

        <Card title="Navigating Client Work">
          <p className="caption-1">
            Balancing design work with client management was a challenge. Navigating proposals, payments, and timelines
            highlighted the importance of clear expectations and firm contracts.
          </p>
        </Card>

        <Card title="Shopify Insights">
          <p className="caption-1">
            Although unpaid for Shopify work, the project provided hands-on experience with the platform, reinforcing
            its value for eCommerce design.
          </p>
        </Card>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
