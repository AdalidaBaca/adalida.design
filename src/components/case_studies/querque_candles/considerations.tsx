import { IconInfoTriangleFilled } from '@tabler/icons-react'
import ConsiderationsImage from 'images/querque_candles/considerations.webp'
import React, { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const Considerations = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconInfoTriangleFilled />} heading="Considerations" />
        </section>
      </div>
      <img src={ConsiderationsImage} alt="Considerations" />
    </div>
  )
)

Considerations.displayName = 'Considerations'

export default Considerations
