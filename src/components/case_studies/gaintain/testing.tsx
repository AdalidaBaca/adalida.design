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
            The solution centers on a <strong>commitment-first architecture</strong> designed to lock in follow-through
            once intent is declared.
          </div>
          <div className="body-2">
            After commitment, the system is built to <strong>support follow-through</strong> by minimizing execution
            friction and sustaining accountability over time.
          </div>
          <div className="body-2">
            AI workouts reduce planning load, pledges create lock-in, and calendar feedback makes progress visible.
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
