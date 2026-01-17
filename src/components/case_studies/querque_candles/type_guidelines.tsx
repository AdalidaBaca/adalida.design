import { IconTypography } from '@tabler/icons-react'
import TypeGuidelinesImage from 'images/querque_candles/type_guidelines.webp'
import { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const TypeGuidelines = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconTypography />} heading="Type Guidelines" />
        </section>
      </div>
      <img src={TypeGuidelinesImage} alt="Type Guidelines" />
    </div>
  )
)

TypeGuidelines.displayName = 'TypeGuidelines'

export default TypeGuidelines
