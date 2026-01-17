import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref, useEffect, useRef } from 'react'

import AccountabilityLevers from './accountability_levers'

const Wireframing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const explanationRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const matchHeights = (): void => {
      if (explanationRef.current === null || diagramRef.current === null) {
        return
      }
      const explanationHeight = explanationRef.current.offsetHeight
      diagramRef.current.style.height = `${explanationHeight}px`
    }

    matchHeights()
    window.addEventListener('resize', matchHeights)
    const resizeObserver = new ResizeObserver(matchHeights)
    if (explanationRef.current !== null) {
      resizeObserver.observe(explanationRef.current)
    }

    return () => {
      window.removeEventListener('resize', matchHeights)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div data-aos="fade-up" className="case-study-side-by-side reverse" ref={ref}>
      <div className="gaintain-image-container" ref={diagramRef}>
        <AccountabilityLevers />
      </div>
      <div className="case-study-explanation" ref={explanationRef}>
        <div className="gaintain-details-card">
          <SectionHeading title="Design strategy" />
          <div className="body-2">
            I treated <strong>consistency as a design problem</strong>, not a motivation problem.
          </div>
          <div className="body-2">
            Behavioral research shows <strong>loss aversion</strong> is more effective than rewards alone when habits
            are fragile.
          </div>
          <div className="body-2">
            Instead of reminders or streaks, I designed <strong>accountability with real consequences</strong>, similar
            to paying for a human coach.
          </div>
        </div>
      </div>
    </div>
  )
})

Wireframing.displayName = 'Wireframing'

export default Wireframing
