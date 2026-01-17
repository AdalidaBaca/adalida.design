import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref, useRef, useState } from 'react'
import ColorPicker from './color_picker'
import GaintainLogo3D from './gaintain_logo_3d'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [_gradientStart, setGradientStart] = useState('#E65C00')
  const [_gradientEnd, setGradientEnd] = useState('#F9D423')

  const handleGradientChange = (start: string, end: string): void => {
    setGradientStart(start)
    setGradientEnd(end)
    if (containerRef.current) {
      containerRef.current.style.background = `linear-gradient(45deg, ${start}, ${end})`
    }
  }

  return (
    <div data-aos="fade-up" className="case-study-side-by-side gaintain-solution" ref={ref}>
      <div className="case-study-explanation">
        <div className="gaintain-details-card">
          <SectionHeading title="Solution" />
          <div className="body-2">
            I paired <strong>AI-guided workouts</strong> with <strong>designed accountability</strong> to support
            follow-through.
          </div>
          <ul className="body-2" style={{ margin: '0.5em 0', paddingLeft: '1em' }}>
            <li style={{ marginBottom: '0.75em' }}>AI workouts handle planning and personalization</li>
            <li style={{ marginBottom: '0.75em' }}>
              <strong>Pledges</strong> apply <strong>loss aversion</strong> to create commitment
            </li>
            <li style={{ marginBottom: '0.75em' }}>Calendar feedback makes progress visible over time</li>
          </ul>
          <div className="body-2">
            Together, this <strong>reduces drop-off</strong> across training styles by designing for showing up, not
            restarting.
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
