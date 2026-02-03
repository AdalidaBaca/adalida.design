import SectionHeading from 'components/section_heading'
import InvibeKeyTakeawaysImage from 'images/invibe/Hero 3.png'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div
      data-aos="fade-up"
      ref={ref}
      className="case-study-top-to-bottom invibe-esthetics-key-takeaways project-echo-key-takeaways"
    >
      <div className="invibe-esthetics-key-takeaways-image">
        <img
          src={InvibeKeyTakeawaysImage}
          alt="Invibe Esthetics: client management dashboard, services pages, professional intake form, and schedule your service."
        />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="project-echo-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="project-echo-details-card">
            <SectionHeading title="Architecture &gt; Automation" subtitle="Owning the Data Flow" />
            <div className="body-2">
              For core workflows, owning the data pipeline matters more than convenience. One reliable integration beats
              a &quot;no-code&quot; stack of layered tools.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="Constraints as a Filter" subtitle="Strategic Frugality" />
            <div className="body-2">
              Cost limits forced us to stay focused. Designing within a tight budget clarified what was a
              &quot;must-have&quot; versus a &quot;nice-to-have&quot; feature.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="Zero-Support Handover" subtitle="Building to Last" />
            <div className="body-2">
              I design workflows that business owners can run themselves. Success is a system that works without a
              designer on payroll for maintenance.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
