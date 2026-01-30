import SectionHeading from 'components/section_heading'
import ProportionsAndPaddingImage from 'images/querque_candles/proportions_and_padding.webp'
import { forwardRef, type Ref } from 'react'

const ProportionsAndPadding = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Proportions and Padding" />
        </section>
      </div>
      <img src={ProportionsAndPaddingImage} alt="Proportions and Padding" />
    </div>
  )
)

ProportionsAndPadding.displayName = 'ProportionsAndPadding'

export default ProportionsAndPadding
