import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'
import BrandSystemBoard from './brand_system_board'

const Strategy = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div
      data-aos="fade-up"
      className="case-study-side-by-side grace-gong-visual-layout grace-gong-visual-layout--reverse"
      ref={ref}
    >
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Strategy" subtitle="Effort Where It Compounds" />
          <div className="body-2">
            Brand first, fast: palette pulled from Grace&apos;s existing content so the site matched how her audience
            already saw her. That cleared the way for the part that had to last:{' '}
            <strong>a data model that stays safe in non-technical hands</strong>.
          </div>
        </div>
      </div>
      <BrandSystemBoard />
    </div>
  )
})

Strategy.displayName = 'Strategy'

export default Strategy
