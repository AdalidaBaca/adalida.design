import SectionHeading from 'components/section_heading'
import VisionBoardImage from 'images/querque_candles/vision_board.webp'
import { forwardRef, type Ref } from 'react'

const VisionBoard = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Vision Board" />
        </section>
      </div>
      <img src={VisionBoardImage} alt="Vision Board" />
    </div>
  )
)

VisionBoard.displayName = 'VisionBoard'

export default VisionBoard
