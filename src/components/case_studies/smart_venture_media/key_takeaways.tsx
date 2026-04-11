import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="KEY TAKEAWAYS" />

        <div className="smart-venture-media-key-takeaways-grid">
          <div className="project-echo-details-card">
            <SectionHeading title="INFO. PERSON. MOMENT." />
            <div className="body-2">
              Giving everyone everything creates confusion not clarity.{' '}
              <strong>Scoping what each role sees</strong> before the event starts is what keeps things moving when
              there is no time to answer questions.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="DESIGN FOR UNCERTAINTY" />
            <div className="body-2">
              You cannot vet a volunteer a week before an event. You can build a system that tells you{' '}
              <strong>who to trust before they arrive</strong>. The <strong>filter is the system</strong>.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="TRUST IS BUILT IN STAGES" />
            <div className="body-2">
              What started as volunteering became a website project. The website became <strong>event operations</strong>.
              Each role came because the previous one was done well.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
