import React, { forwardRef, useEffect, useRef, type Ref } from 'react'

import FrictionlessVideo from 'videos/gaintain/frictionless.mp4'

import SectionHeading from 'components/section_heading'

const Developer = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
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
    <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
      <div className='gaintain-image-container gaintain-video-container' ref={videoRef}>
        <video src={FrictionlessVideo} autoPlay loop muted playsInline style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <div className='case-study-explanation' ref={explanationRef}>
        <div className='gaintain-details-card'>
          <SectionHeading title='Social Timeline' />
          <div className='body-2'>
            The timeline reinforces consistency through <strong>visibility</strong>.
          </div>
          <div className='body-2'>
            Workout check-ins and pledge progress appear as simple signals of effort over time.
          </div>
          <div className='body-2'>
            This adds <strong>social accountability</strong> without requiring users to compete or post performatively.
          </div>
        </div>
      </div>
    </div>
  )
})

Developer.displayName = 'Developer'

export default Developer
