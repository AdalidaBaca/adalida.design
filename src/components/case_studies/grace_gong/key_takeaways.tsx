import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />

        <div className="smart-venture-media-key-takeaways-grid">
          <div className="project-echo-details-card">
            <SectionHeading title="Consolidation Isn't Updatability" />
            <div className="body-2">
              Combining the sites and letting the team run them are two different requirements. The fastest-growing
              brands need both, because the founder can&apos;t wait on a developer to ship.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="Design for the Operator" />
            <div className="body-2">
              The real constraint wasn&apos;t the data, it was <strong>who maintains it</strong>. Building so a
              non-technical operator can update content without breaking the design is what makes a system survive a
              real team.
            </div>
          </div>

          <div className="project-echo-details-card">
            <SectionHeading title="List vs. Item" />
            <div className="body-2">
              In any CMS, structure starts with <strong>whether content is a collection or a single record</strong>.
              That distinction is what makes pages generate themselves instead of multiplying by hand.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
