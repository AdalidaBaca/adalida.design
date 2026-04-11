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
              Summit scheduled
              <span className="flow-text-sub">(event on the calendar)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item success">
            <IconCheck className="flow-icon" />
            <span className="flow-text">
              Plan exists
              <span className="flow-text-sub">(no roles assigned)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item error">
            <IconX className="flow-icon" />
            <span className="flow-text">
              Day-of arrives
              <span className="flow-text-sub">(who does what?)</span>
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item error">
            <IconX className="flow-icon" />
            <span className="flow-text">
              Routes to CEO
              <span className="flow-text-sub">(moderating on stage)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="case-study-explanation">
        <div className="project-echo-details-card">
          <SectionHeading title="PROBLEM" subtitle="The Plan Only Existed in One Person&apos;s Head" />
          <div className="body-2">
            A run of show existed. But it was built <strong>top-down</strong>, a single source of truth listing
            everything that needed to happen, in order. No one role could look at it and know exactly what{' '}
            <strong>their role was</strong>.
          </div>
          <div className="body-2">
            When questions came up, they routed to Grace, who was also <strong>moderating most of the panels</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Problem.displayName = 'Problem'

export default Problem
