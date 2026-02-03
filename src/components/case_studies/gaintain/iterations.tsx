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
            As a two-person founding team, velocity was our advantage. By implementing{' '}
            <strong>production-quality flows</strong> directly in code using <strong>Cursor</strong> and{' '}
            <strong>Swift</strong>, we shipped 30 App Store releases in eight months and validated UI decisions through{' '}
            <strong>real gym-floor testing</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Iterations.displayName = 'Iterations'

export default Iterations
