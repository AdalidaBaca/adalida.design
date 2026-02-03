import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref } from 'react'
import CommunityCarousel from './community_carousel'

const Iterations = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <CommunityCarousel ariaLabel="Community" />
      <div className="case-study-explanation">
        <div className="gaintain-details-card">
          <SectionHeading title="Implementation" subtitle="Rapid, Production-Quality Iteration" />
          <div className="body-2">
            As a <strong>two-person founding team</strong>, velocity was our primary competitive advantage. By
            bypassing traditional <strong>design handoffs</strong> and implementing{' '}
            <strong>production-quality flows directly in code</strong> using <strong>Cursor and Swift</strong>, we
            shipped <strong>30 App Store releases</strong> in 8 months.
          </div>
          <div className="body-2">
            We tested builds on <strong>real devices</strong> in gym environments to iterate on{' '}
            <strong>UI friction points</strong>, such as tap targets and contrast, in real-time.
          </div>
        </div>
      </div>
    </div>
  )
})

Iterations.displayName = 'Iterations'

export default Iterations
