import BrandPrinciplesImage from 'images/querque_candles/brand_principles.webp'
import { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const BrandPrinciples = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
    <div className="case-study-explanation">
      <section>
        <SectionHeading title="Brand Principles" />
      </section>
    </div>
    <img src={BrandPrinciplesImage} alt="Brand principles" />
  </div>
))

BrandPrinciples.displayName = 'BrandPrinciples'

export default BrandPrinciples
