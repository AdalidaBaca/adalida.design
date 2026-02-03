import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref, useRef } from 'react'
import ColorPicker from './color_picker'
import GaintainLogo3D from './gaintain_logo_3d'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleGradientChange = (start: string, end: string): void => {
    if (containerRef.current) {
      containerRef.current.style.background = `linear-gradient(45deg, ${start}, ${end})`
    }
  }

  return (
    <div data-aos="fade-up" className="case-study-side-by-side gaintain-solution" ref={ref}>
      <div className="case-study-explanation">
        <div className="gaintain-details-card">
          <SectionHeading title="Solution" subtitle="The Accountability Stack" />
          <div className="body-2">
            I paired <strong>AI-guided workouts</strong> with <strong>designed accountability</strong> to support
            follow-through.
          </div>
          <div className="body-2">
            <strong>AI Workouts</strong> handle the <strong>cognitive load</strong> of planning and personalization.{' '}
            <strong>Pledges</strong> apply <strong>loss aversion</strong> to create a psychological &quot;lock-in&quot;
            for the user. <strong>Calendar Feedback</strong> makes progress against goals <strong>visible and
            undeniable</strong> over time.
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', height: '100%', alignSelf: 'stretch' }}>
        <div
          ref={containerRef}
          className="gaintain-image-container gaintain-video-container"
          style={{ flex: '1 1 auto', minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-hidden="true"
        >
          <GaintainLogo3D />
        </div>
        <ColorPicker onGradientChange={handleGradientChange} />
      </div>
    </div>
  )
})

Testing.displayName = 'Testing'

export default Testing
