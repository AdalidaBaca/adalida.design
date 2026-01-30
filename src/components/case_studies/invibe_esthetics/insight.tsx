import { IconCheck, IconX } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

interface InsightProps {
  copy?: 'insight' | 'problem'
}

const Insight = forwardRef(({ copy = 'insight' }: InsightProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  // We only use this components for the "Problem" section in the new case study.
  // The original "Insight" section is not part of the new content, but we'll keep the component flexible if needed.

  if (copy !== 'problem') {
    return <div style={{ display: 'none' }} />
  }

  const diagram = (
    <div className="invibe-esthetics-problem-flow-container">
      <div className="invibe-esthetics-problem-flow">
        <div className="flow-item success">
          <IconCheck className="flow-icon" />
          <span className="flow-text">
            Client
            <span className="flow-text-sub">(New)</span>
          </span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item success">
          <IconCheck className="flow-icon" />
          <span className="flow-text">
            Booking
            <span className="flow-text-sub">(online)</span>
          </span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item error">
          <IconX className="flow-icon" />
          <span className="flow-text">
            Intake
            <span className="flow-text-sub">(paper, in-appointment)</span>
          </span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item error">
          <IconX className="flow-icon" />
          <span className="flow-text">
            Client data
            <span className="flow-text-sub">(nowhere reusable)</span>
          </span>
        </div>
      </div>
    </div>
  )

  const explanation = (
    <div className="case-study-explanation">
      <div className="invibe-esthetics-details-card">
        <SectionHeading title="Problem" />
        <div className="body-2">
          <strong>Booking and intake were disconnected.</strong>
        </div>
        <div className="body-2">
          Clients could book appointments online, but intake still happened later on paper. Client data lived outside
          the booking flow and outside any system the owner could manage or update over time.
        </div>
        <div className="body-2">
          This created manual work, duplicated data entry, and no <strong>system of record</strong>.
        </div>
      </div>
    </div>
  )

  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      {diagram}
      {explanation}
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
