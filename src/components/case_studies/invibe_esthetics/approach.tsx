import { IconCheck, IconX, IconMinus } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

interface Props {
  constraintsRef: Ref<HTMLDivElement>
  insightRef: Ref<HTMLDivElement>
}

const Approach = ({ constraintsRef, insightRef }: Props): JSX.Element => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="case-study-side-by-side project-echo-approach-section"
        ref={constraintsRef}
      >
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="Constraints" />
            <div className="body-2">
              <strong>Booking and intake were disconnected</strong>, creating friction for clients and ongoing manual work for the business.
            </div>
            <div className="body-2">
              I had already moved the business from Rosy Bookings to <strong>Wix Premium</strong>, which included booking and a CMS as part of the existing subscription. Adding tools or automation subscriptions would increase <strong>recurring cost</strong> without increasing core capability. Any solution needed to <strong>reduce manual work, limit the number of tools</strong>, and remain usable for a <strong>non technical owner</strong>.
            </div>
          </div>
        </div>
        <div className="invibe-esthetics-decision-matrix-container">
          <table className="invibe-esthetics-decision-matrix">
            <thead>
              <tr>
                <th>Intake</th>
                <th>Cost</th>
                <th>Update</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paper</td>
                <td><IconCheck size={18} className="success-icon" /></td>
                <td><IconX size={18} className="error-icon" /></td>
                <td><IconX size={18} className="error-icon" /></td>
              </tr>
              <tr>
                <td>Google Forms</td>
                <td><IconCheck size={18} className="success-icon" /></td>
                <td><IconMinus size={18} className="neutral-icon" /></td>
                <td><IconCheck size={18} className="success-icon" /> <span className="cell-detail">(CSV)</span></td>
              </tr>
              <tr>
                <td>Wix Intake</td>
                <td><IconX size={18} className="error-icon" /></td>
                <td><IconCheck size={18} className="success-icon" /></td>
                <td><IconCheck size={18} className="success-icon" /></td>
              </tr>
              <tr className="featured-row">
                <td><strong>Tally</strong></td>
                <td><IconCheck size={18} className="success-icon" /></td>
                <td><IconMinus size={18} className="neutral-icon" /></td>
                <td><IconCheck size={18} className="success-icon" /> <span className="cell-detail">(CSV)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="case-study-top-to-bottom project-echo-insight-section"
        ref={insightRef}
      >
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="Insight" />
            <div className="body-2">
              I knew client data could live in the <strong>Wix CMS</strong> and that <strong>Tally</strong> was a flexible way to collect intake.
            </div>
            <div className="body-2">
              When <strong>third party integrations</strong> proved insufficient due to paid gating and limited control over data mapping, I worked with an engineer to implement a <strong>custom webhook</strong> that saved intake data directly into the CMS.
            </div>
            <div className="body-2">
              This ensured intake data lived in the <strong>same system</strong> the owner already paid for and could manage over time.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Approach.displayName = 'Approach'

export default Approach
