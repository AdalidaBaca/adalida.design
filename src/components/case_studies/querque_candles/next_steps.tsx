import SectionHeading from 'components/section_heading'
import NextStepsImage from 'images/querque_candles/next_steps.webp'
import { forwardRef, type Ref } from 'react'

const NextSteps = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Next Steps: Website Development" />
        </section>
      </div>
      <img src={NextStepsImage} alt="Next Steps" />
    </div>
  )
)

NextSteps.displayName = 'Next Steps'

export default NextSteps
