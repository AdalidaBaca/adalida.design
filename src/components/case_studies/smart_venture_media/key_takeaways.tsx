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
              Giving everyone everything creates confusion not clarity. <strong>scoping what each role sees</strong>{' '}
              before the event starts is what keeps things moving when there is no time to answer questions.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="PAPER TRAIL" />
            <div className="body-2">
              Execution is only as strong as what gets communicated before the event starts. When decisions stay in one
              person&apos;s head, <strong>they become problems on the day</strong>.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="SYSTEMS OUTLAST EVENTS" />
            <div className="body-2">
              The event ends but the documents, the process, and the operational muscle memory stay behind.{' '}
              <strong>build for tomorrow, not just today</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
