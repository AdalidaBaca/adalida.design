import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const TheWall = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="The Wall" subtitle="List vs. Item" />
          <div className="body-2">The architecture was right. The build still taught me something.</div>
          <div className="body-2">
            I built the About content as a static page. It was singular, so static seemed obvious, and it was wrong. To
            generate the dynamic pages the system depended on, <strong>the content had to live as a list first</strong>
            ; the page renders from the list, and a static page can&apos;t produce one. The diagnosis was right all
            along. <strong>This was the mechanism that made it real.</strong>
          </div>
        </div>
      </div>
    </div>
  )
})

TheWall.displayName = 'TheWall'

export default TheWall
