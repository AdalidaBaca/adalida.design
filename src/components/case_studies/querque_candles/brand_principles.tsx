import { IconRuler } from '@tabler/icons-react'
import BrandPrinciplesImage from 'images/querque_candles/brand_principles.webp'
import { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const BrandPrinciples = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconRuler />} heading="Brand Principles" />
        </section>
      </div>
      <img src={BrandPrinciplesImage} alt="Brand principles" />
    </div>
  )
})

BrandPrinciples.displayName = 'BrandPrinciples'

export default BrandPrinciples
