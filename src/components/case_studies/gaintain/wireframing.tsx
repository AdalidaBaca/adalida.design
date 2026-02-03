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
          <SectionHeading title="Design Strategy" subtitle="The &quot;Stakes-Based&quot; Model" />
          <div className="body-2">
            I treated <strong>consistency as a design problem</strong>, not a motivation problem. Inspired by the
            success of <strong>HealthyWage</strong> in the weight-loss space, I applied the same{' '}
            <strong>financial stakes logic</strong> to strength training.
          </div>
          <div className="body-2">
            Behavioral research shows <strong>loss aversion</strong> (the fear of losing something you already have) is
            significantly more effective than rewards alone when habits are fragile.
          </div>
          <div className="body-2">
            Instead of reminders or streaks, I designed <strong>accountability with real consequences</strong>.
          </div>
        </div>
      </div>
    </div>
  )
})

Wireframing.displayName = 'Wireframing'

export default Wireframing
