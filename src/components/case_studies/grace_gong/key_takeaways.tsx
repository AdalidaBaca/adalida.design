import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />

        <div className="smart-venture-media-key-takeaways-grid">
          <div className="project-echo-details-card">
            <SectionHeading title="LIST VS. ITEM" />
            <div className="body-2">
              Structure starts with whether content is <strong>a collection or a single record</strong>. That
              classification is what makes pages generate themselves.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="MODEL THE DATA, NOT THE PAGES" />
            <div className="body-2">
              Every failed consolidation copied the presentation. The one that worked structured the content.{' '}
              <strong>Consolidation is a data problem wearing a design costume.</strong>
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="DESIGN FOR THE OPERATOR" />
            <div className="body-2">
              Typed fields, exclusive tags, graceful fallbacks: integrity rules let a{' '}
              <strong>non-technical operator</strong> touch the data daily without being able to break it.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
