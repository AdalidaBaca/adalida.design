import ChallengeImage from 'images/querque_candles/challenge.webp'
import { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const ChallengeSolution = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-side-by-side reverse" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="The Challenge:" />
          <div className="body-2">
            Querque Candles needed a distinct brand identity to establish a recognizable presence across product
            packaging, online marketing, and a future Shopify store. Without a cohesive visual identity, creating
            branded stickers for candles, launching an online store, and promoting the business effectively was a
            challenge.
          </div>
        </section>
        <section>
          <SectionHeading title="The Solution:" />
          <div className="subtitle-2">
            I designed a cohesive brand identity, including a custom logo, color palette, and visual elements, tailored
            for both product packaging and digital use. The design was optimized for sticker printing, online marketing,
            and future website integration, ensuring a consistent and professional look across all touchpoints.
          </div>
        </section>
      </div>
      <img src={ChallengeImage} alt="Querque Candles logo" />
    </div>
  )
)

ChallengeSolution.displayName = 'ChallengeSolution'

export default ChallengeSolution
