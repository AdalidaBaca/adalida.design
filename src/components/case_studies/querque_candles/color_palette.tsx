import { IconPalette } from '@tabler/icons-react'
import ColorPaletteImage from 'images/querque_candles/color_palette.webp'
import React, { forwardRef, type Ref } from 'react'

import IconHeading from '../icon_heading'

const ColorPalette = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="case-study-top-to-bottom querque" ref={ref}>
      <div className="case-study-explanation">
        <section>
          <IconHeading icon={<IconPalette />} heading="Color Palette" />
        </section>
      </div>
      <img src={ColorPaletteImage} alt="Color Palette" />
    </div>
  )
)

ColorPalette.displayName = 'ColorPalette'

export default ColorPalette
