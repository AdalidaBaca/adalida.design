import { IconX } from '@tabler/icons-react'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const TheWall = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="The Wall" subtitle="The Branch I Got Wrong" />
          <div className="body-2">
            One branch of that map is mislabeled. I built About as a static page. It was singular, so static seemed
            obvious, and it was wrong: its speaking engagements needed their own pages, and dynamic pages{' '}
            <strong>render from a list</strong>. A static page can&apos;t produce one.
          </div>
          <div className="body-2">
            The rule held everywhere: every content type is <strong>a collection or a single record</strong>. Classify
            it right and pages generate themselves. Classify it wrong and they multiply by hand.
          </div>
          <div className="grace-gong-wall-strip">
            <span className="grace-gong-wall-strip-before">
              About: static page
              <IconX size={14} className="grace-gong-wall-strip-x" aria-hidden="true" />
            </span>
            <span className="grace-gong-wall-strip-arrow" aria-hidden="true">
              →
            </span>
            <span className="grace-gong-wall-strip-after">
              About: collection
              <span className="grace-gong-sitemap-auto">auto</span>
            </span>
            <span className="grace-gong-wall-strip-note">speaking pages now generate themselves</span>
          </div>
        </div>
      </div>
    </div>
  )
})

TheWall.displayName = 'TheWall'

export default TheWall
