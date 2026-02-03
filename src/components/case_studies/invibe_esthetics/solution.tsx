import SectionHeading from 'components/section_heading'
import SunbeltImage from 'images/works/sunbelt.webp'
import { forwardRef, type Ref } from 'react'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div
      data-aos="fade-up"
      className="case-study-side-by-side project-echo-approach-section invibe-esthetics-solution-section"
      ref={ref}
    >
      <div className="case-study-explanation">
        <div className="project-echo-details-card">
          <SectionHeading title="Results" subtitle="A Unified System of Record" />
          <div className="body-2">
            Booking and intake now run as one <strong>unified digital flow</strong>. Clients complete intake before
            their appointment; responses are stored in the <strong>WIX CMS</strong> so the owner has one place to view
            and update client information.
          </div>
          <div className="body-2">
            <strong>Manual data re-entry</strong> and paper intake were eliminated. The business operates from a{' '}
            <strong>single system of record</strong>.
          </div>
        </div>
      </div>
      <div className="invibe-esthetics-solution-graphic-container">
        <div className="invibe-esthetics-solution-graphic">
          <img src={SunbeltImage} alt="Invibe Esthetics" />
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
