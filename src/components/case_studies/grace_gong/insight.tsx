import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'
import PlatformComparisonMatrix from './platform_comparison_matrix'

const Insight = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-side-by-side grace-gong-visual-layout" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Insight" subtitle="Two Requirements, Not One" />
          <div className="body-2">
            The content had to live in <strong>one place</strong>, and a <strong>non-technical operator</strong> had to
            be able to add to it. Every option solved one and dropped the other. Even a custom-coded site, which Grace
            floated, would consolidate everything <strong>and make every update a code change</strong>.
          </div>
          <div className="body-2">
            The test: could Grace&apos;s EA run the entire dataset <strong>by filling in fields?</strong>
          </div>
        </div>
      </div>
      <PlatformComparisonMatrix />
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
