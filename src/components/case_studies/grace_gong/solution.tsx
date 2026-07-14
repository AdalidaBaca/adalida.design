import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-explanation">
        <div className="invibe-esthetics-details-card">
          <SectionHeading title="Solution" subtitle="A CMS Modeled by Content Type" />
          <div className="body-2">
            I gave each content type its own collection. A <strong>master EVENTS collection</strong> feeds filtered
            views for All, Dinners, and Summits, so <strong>one entry surfaces everywhere it belongs</strong>. Podcast
            episodes run on their own. Summits carry their own agenda and speaker data, scaling without disturbing each
            other.
          </div>
          <div className="body-2">
            Because the person adding content isn&apos;t a web designer,{' '}
            <strong>adding anything new came down to filling one row</strong>. Where the native tools couldn&apos;t
            filter a collection the way visitors needed, like sorting episodes by sub-brand across Venture with Grace
            and Smart Venture Media, I added about ten lines of Velo{' '}
            <strong>at the display layer, leaving the data model untouched</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
