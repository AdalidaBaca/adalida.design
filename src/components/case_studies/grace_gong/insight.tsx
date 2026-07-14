import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Insight = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Insight" subtitle="Two Requirements, Not One" />
          <div className="body-2">
            Every prior fix treated this as one job: combine the sites. <strong>It was two.</strong> The content had to
            live in <strong>one place</strong>, and a <strong>non-technical operator</strong> had to be able to add to
            it without breaking the design.
          </div>
          <div className="body-2">
            No previous attempt held both. The Framer site solved consolidation and{' '}
            <strong>left updatability open</strong>, and at Grace&apos;s pace, that was the one that mattered. Her EA
            runs operations but isn&apos;t technical, so the real test was simple:{' '}
            <strong>could she add a new summit without calling a developer?</strong>
          </div>
        </div>
      </div>
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
