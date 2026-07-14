import { IconCheck, IconX } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Problem = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="invibe-esthetics-problem-flow-container">
        <div className="invibe-esthetics-problem-flow">
          <div className="flow-item success">
            <IconCheck className="flow-icon" />
            <span className="flow-text">
              Podcast
              <span className="flow-text-sub">(Squarespace)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item success">
            <IconCheck className="flow-icon" />
            <span className="flow-text">
              Summits
              <span className="flow-text-sub">(Wix)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item error">
            <IconX className="flow-icon" />
            <span className="flow-text">
              Framer
              <span className="flow-text-sub">(&quot;fix&quot;)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item success">
            <IconCheck className="flow-icon" />
            <span className="flow-text">
              Wix
              <span className="flow-text-sub">(rebuilt to run itself)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Problem" subtitle="Growth Outran the Tooling" />
          <div className="body-2">
            Grace moves fast. She ran her podcast on Squarespace and her summits on Wix, two sides of one brand on two
            platforms. When a developer tried to consolidate them onto Framer, it worked technically but{' '}
            <strong>could only be edited by a developer</strong>, so the operation that needed to move fastest was the
            one that couldn&apos;t move at all.
          </div>
          <div className="body-2">
            The fix was to come back to Wix, the platform her summits already ran on, and rebuild it as a system the
            team could run themselves, <strong>not just one more place the content lived</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Problem.displayName = 'Problem'

export default Problem
