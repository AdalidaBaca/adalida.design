import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Handoff = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="The Handoff" subtitle="A System, Not a Dependency" />
          <div className="body-2">
            I closed with a <strong>Notion guide covering the full schema</strong>: every collection, field, and
            validation rule, with screenshots and screen recordings, plus the CMS capacity limit and fixed-rate scopes
            for future structural work.
          </div>
          <div className="body-2">
            The guide defines a lane for each role.{' '}
            <strong>
              The EA enters data. The content designer supplies hero and background imagery to the image fields. A
              developer is only needed for scoped structural work.
            </strong>{' '}
            The team runs it from a written guide, <strong>not from memory of how I built it</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Handoff.displayName = 'Handoff'

export default Handoff
