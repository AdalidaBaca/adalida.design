import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'
import SitemapDiagram from './sitemap_diagram'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div
      data-aos="fade-up"
      className="case-study-side-by-side grace-gong-visual-layout grace-gong-visual-layout--reverse"
      ref={ref}
    >
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Solution" subtitle="Model the Data, Not the Pages" />
          <div className="body-2">
            Polish was never the constraint. The data was. Each content type is its own collection, and{' '}
            <strong>pages generate themselves from records</strong>: add a row, a page exists. Where native filtering
            fell short, ~10 lines of Velo at the <strong>display layer only</strong>.
          </div>
          <div className="body-2">
            Migration proved it: I entered the first ~10 records on video, documented the steps, and Grace&apos;s
            non-technical EA <strong>completed the remaining 300+ unassisted</strong>.
          </div>
        </div>
      </div>
      <SitemapDiagram />
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
