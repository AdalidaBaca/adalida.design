import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Strategy = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Strategy" subtitle="Effort Where It Compounds" />
          <div className="body-2">
            I settled the brand fast, pulling the palette from Grace&apos;s existing content marketing so it matched how
            her audience already saw her. That was <strong>the lower-leverage half</strong>.
          </div>
          <div className="body-2">
            It cleared the way for the part that had to last:{' '}
            <strong>an architecture that consolidated the content and stayed safe in non-technical hands</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Strategy.displayName = 'Strategy'

export default Strategy
