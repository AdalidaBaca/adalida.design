import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const TheFix = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="The Fix" subtitle="Model Everything as a List" />
          <div className="body-2">
            Once I saw it, the rule held everywhere:{' '}
            <strong>every content type was a question of list versus item</strong>. That turned a sound plan into a
            working site.
          </div>
        </div>
      </div>
    </div>
  )
})

TheFix.displayName = 'TheFix'

export default TheFix
