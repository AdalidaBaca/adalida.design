import SectionHeading from 'components/section_heading'
import SunbeltImage from 'images/works/sunbelt.webp'
import { forwardRef, type Ref } from 'react'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div
      data-aos="fade-up"
      ref={ref}
      className="case-study-top-to-bottom invibe-esthetics-key-takeaways project-echo-key-takeaways"
    >
      <div className="invibe-esthetics-key-takeaways-image">
        <img src={SunbeltImage} alt="Invibe Esthetics" />
      </div>
      <div className="case-study-explanation">
        <SectionHeading title="Key Takeaways" />
        <div className="project-echo-results-grid" style={{ marginTop: '0.25em' }}>
          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Architecture beats automation</strong>. For core workflows, owning the data flow mattered more
              than convenience. One reliable integration outperformed layered tools.
            </div>
          </div>

          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Constraints sharpen decisions</strong>. Cost and tool limits clarified what actually needed to be
              designed and kept the system focused.
            </div>
          </div>

          <div className="project-echo-details-card">
            <div className="body-2">
              <strong>Systems should run without designers</strong>. I design workflows business owners can operate
              independently, without ongoing support or hidden dependencies.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
