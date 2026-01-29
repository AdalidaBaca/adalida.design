import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom invibe-esthetics-solution-section" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Results" />
          <div className="body-2">
            <strong>Booking and intake now function as one flow.</strong>
          </div>
          <div className="body-2">
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25em', marginTop: '0.5em', marginBottom: '0.5em' }}>
              <li>clients complete intake before appointments</li>
              <li>intake data is saved automatically into the CMS</li>
              <li>the owner can update client information over time</li>
              <li>paper intake and manual re entry were eliminated</li>
            </ul>
            The business now operates from a single system of record.
          </div>
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
