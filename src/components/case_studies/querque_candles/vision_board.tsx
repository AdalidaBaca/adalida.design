import { IconEyeHeart } from '@tabler/icons-react'
import VisionBoardImage from 'images/querque_candles/vision_board.webp'
import React, { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const VisionBoard = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconEyeHeart />} heading="Vision Board" />
        </section>
      </div>
      <img src={VisionBoardImage} alt="Vision Board" />
    </div>
  )
)

VisionBoard.displayName = 'VisionBoard'

export default VisionBoard
