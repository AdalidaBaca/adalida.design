import { IconCheck, IconX } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import React, { forwardRef, type Ref } from 'react'

interface InsightProps {
  title?: string
  copy?: 'insight' | 'problem'
}

const Insight = forwardRef(({ title, copy = 'insight' }: InsightProps, ref: Ref<HTMLDivElement>): JSX.Element => {
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
          <span className="flow-text">Client</span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item success">
          <IconCheck className="flow-icon" />
          <span className="flow-text">Booking (online)</span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item error">
          <IconX className="flow-icon" />
          <span className="flow-text">Intake (paper, in-appointment)</span>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-item error">
          <IconX className="flow-icon" />
          <span className="flow-text">Client data (nowhere reusable)</span>
        </div>
      </div>
    </div>
  )

  const explanation = (
    <div className="case-study-explanation">
      <div className="invibe-esthetics-details-card">
        <SectionHeading title="The problem" />
        <div className="body-2">
          <strong>A fractured booking to intake loop created manual work and data silos.</strong>
        </div>
        <div className="body-2">
          Clients could book appointments online, but intake still happened later on paper during the appointment.
        </div>
        <div className="body-2">
          On the back end, client information lived outside the booking flow and outside any system the owner could manage or update over time.
        </div>
      </div>
    </div>
  )

  return (
    <div data-aos="fade-up" className="case-study-side-by-side" ref={ref}>
      {diagram}
      {explanation}
    </div>
  )
})

Insight.displayName = 'Insight'

export default Insight
