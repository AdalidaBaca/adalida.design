import SectionHeading from 'components/section_heading'
import ConsiderationsImage from 'images/querque_candles/considerations.webp'
import { forwardRef, type Ref } from 'react'

const Considerations = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Considerations" />
        </section>
      </div>
      <img src={ConsiderationsImage} alt="Considerations" />
    </div>
  )
)

Considerations.displayName = 'Considerations'

export default Considerations
