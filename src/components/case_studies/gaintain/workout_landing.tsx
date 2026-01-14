import React, { forwardRef, useEffect, useRef, type Ref } from 'react'

import FrictionlessVideo from 'videos/gaintain/frictionless.mp4'

import SectionHeading from 'components/section_heading'

const WorkoutLanding = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const explanationRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const matchHeights = (): void => {
      if (explanationRef.current === null || videoRef.current === null) return
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
    <div data-aos='fade-up' className='case-study-side-by-side gaintain-workout-dashboard' ref={ref}>
      <div className='case-study-explanation' ref={explanationRef}>
        <div className='gaintain-details-card'>
          <SectionHeading title='Workout Dashboard' />
          <div className='body-2'>
            The workout dashboard is the <strong>daily decision surface</strong>.
          </div>
          <div className='body-2'>
            A calendar at the top reflects progress against the user's <strong>frequency goal</strong>, while the primary card adapts to how they train.
          </div>
          <div className='body-2'>
            Users can quick-log, reuse templates, or generate workouts with AI <strong>without breaking momentum</strong>.
          </div>
        </div>
      </div>
      <div className='gaintain-image-container gaintain-video-container' ref={videoRef}>
        <video src={FrictionlessVideo} autoPlay loop muted playsInline style={{ width: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  )
})

WorkoutLanding.displayName = 'WorkoutLanding'

export default WorkoutLanding
