import { IconChevronsRight } from '@tabler/icons-react'
import NextStepsImage from 'images/querque_candles/next_steps.webp'
import { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const NextSteps = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconChevronsRight />} heading="Next Steps: Website Development" />
        </section>
      </div>
      <img src={NextStepsImage} alt="Next Steps" />
    </div>
  )
)

NextSteps.displayName = 'Next Steps'

export default NextSteps
