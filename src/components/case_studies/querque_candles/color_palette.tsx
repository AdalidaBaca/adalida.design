import SectionHeading from 'components/section_heading'
import ColorPaletteImage from 'images/querque_candles/color_palette.webp'
import { forwardRef, type Ref } from 'react'

const ColorPalette = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <SectionHeading title="Color Palette" />
        </section>
      </div>
      <img src={ColorPaletteImage} alt="Color Palette" />
    </div>
  )
)

ColorPalette.displayName = 'ColorPalette'

export default ColorPalette
