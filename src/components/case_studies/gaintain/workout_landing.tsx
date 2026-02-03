import SectionHeading from 'components/section_heading'

import WorkoutDashboardImage from 'images/gaintain/Hero Photos/workout_dashboard.png'
import { forwardRef, type Ref, useEffect, useRef } from 'react'

const WorkoutLanding = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const explanationRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const matchHeights = (): void => {
      if (explanationRef.current === null || videoRef.current === null) {
        return
      }
      const explanationHeight = explanationRef.current.offsetHeight
      videoRef.current.style.height = `${explanationHeight}px`
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
    <div data-aos="fade-up" className="case-study-side-by-side gaintain-workout-dashboard" ref={ref}>
      <div className="case-study-explanation" ref={explanationRef}>
        <div className="gaintain-details-card">
          <SectionHeading title="Workout Dashboard" subtitle="The Daily Action Surface" />
          <div className="body-2">
            The dashboard is the primary <strong>decision surface</strong>. I prioritized a{' '}
            <strong>calendar-first architecture</strong> to provide immediate visual feedback against the user&apos;s{' '}
            <strong>weekly goal</strong>.
          </div>
          <div className="body-2">
            Whether generating a session via <strong>AI</strong> or quick-logging a manual lift, the UI is optimized
            for <strong>zero-friction entry</strong> to ensure the user stays &quot;locked-in&quot; to their active
            pledge.
          </div>
        </div>
      </div>
      <div className="gaintain-image-container gaintain-video-container" ref={videoRef}>
        <img
          src={WorkoutDashboardImage}
          alt="GainTain workout dashboard"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  )
})

WorkoutLanding.displayName = 'WorkoutLanding'

export default WorkoutLanding
