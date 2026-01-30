import SectionHeading from 'components/section_heading'
import TypeGuidelinesImage from 'images/querque_candles/type_guidelines.webp'
import { forwardRef, type Ref } from 'react'

const TypeGuidelines = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Type Guidelines" />
        </section>
      </div>
      <img src={TypeGuidelinesImage} alt="Type Guidelines" />
    </div>
  )
)

TypeGuidelines.displayName = 'TypeGuidelines'

export default TypeGuidelines
