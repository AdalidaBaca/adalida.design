import SectionHeading from 'components/section_heading'
import type { Ref } from 'react'
import InsightFlowGraphic from './insight_flow_graphic'
import IntakeTradeoffsMatrix from './intake_tradeoffs_matrix'

interface Props {
  constraintsRef: Ref<HTMLDivElement>
  insightRef: Ref<HTMLDivElement>
}

const Approach = ({ constraintsRef, insightRef }: Props): JSX.Element => {
  return (
    <>
      <div data-aos="fade-up" className="case-study-side-by-side project-echo-approach-section" ref={constraintsRef}>
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="Constraints" />
            <div className="body-2">
              I had already moved the business from Rosy Bookings to <strong>WIX Premium</strong>, which included
              booking and a <strong>CMS</strong>.
            </div>
            <div className="body-2">
              Any solution needed to work within those tools. Adding platforms or automation subscriptions would
              increase <strong>recurring cost</strong> without increasing capability.
            </div>
            <div className="body-2">
              The system had to reduce manual work, limit tools, and remain usable for a{' '}
              <strong>non technical owner</strong>.
            </div>
          </div>
        </div>
        <div className="invibe-esthetics-decision-matrix-container">
          <IntakeTradeoffsMatrix />
        </div>
      </div>

      <div data-aos="fade-up" className="case-study-side-by-side project-echo-insight-section" ref={insightRef}>
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="Insight" />
            <div className="body-2">
              I knew intake could be collected with low cost tools like Tally or Google Forms, and that client data
              belonged in the <strong>WIX CMS</strong>.
            </div>
            <div className="body-2">
              When third party integrations failed due to <strong>paid gating</strong> and limited{' '}
              <strong>data mapping</strong>, I partnered with an engineer to implement a <strong>custom webhook</strong>{' '}
              that saved intake data directly into the CMS.
            </div>
            <div className="body-2">
              This kept data in the <strong>same system</strong> the owner already paid for and could manage over time.
            </div>
          </div>
        </div>
        <div className="invibe-esthetics-insight-graphic-container">
          <InsightFlowGraphic />
        </div>
      </div>
    </>
  )
}

Approach.displayName = 'Approach'

export default Approach
