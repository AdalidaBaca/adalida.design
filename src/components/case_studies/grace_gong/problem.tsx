import { IconCheck, IconX } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Problem = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="invibe-esthetics-problem-flow-container">
        <div className="invibe-esthetics-problem-flow">
          <div className="flow-item">
            <span className="flow-text">
              SVP Pro
              <span className="flow-text-sub">(Squarespace)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
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
              <span className="flow-text-sub">(merged, but dev-locked)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item success">
            <IconCheck className="flow-icon" />
            <span className="flow-text">
              Wix
              <span className="flow-text-sub">(one CMS, team-run)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Problem" subtitle="Content Everywhere, Data Nowhere" />
          <div className="body-2">
            The brand grew one site at a time: <strong>SVP Pro on Squarespace</strong>, then the{' '}
            <strong>summits on Wix</strong>. A Framer rebuild tried to merge them. It looked great, but its content was{' '}
            <strong>locked in layouts</strong>, so <strong>every edit required the developer who built it</strong>, and
            he was no longer available.
          </div>
          <div className="body-2">
            The content was never a design problem. It was <strong>structured, repeating data</strong> that needed to
            live once and render everywhere.
          </div>
        </div>
      </div>
    </div>
  )
})

Problem.displayName = 'Problem'

export default Problem
