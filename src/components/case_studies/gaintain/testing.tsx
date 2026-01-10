import React, { forwardRef, useEffect, useRef, type Ref } from 'react'

import TestingImage from 'images/gaintain/testing.webp'

import SectionHeading from 'components/section_heading'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const explanationRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const matchHeights = (): void => {
      if (explanationRef.current === null || imageRef.current === null) return
      const explanationHeight = explanationRef.current.offsetHeight
      imageRef.current.style.height = `${explanationHeight}px`
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
    <div data-aos='fade-up' className='case-study-side-by-side gaintain-solution' ref={ref}>
      <div className='case-study-explanation' ref={explanationRef}>
        <div className='gaintain-details-card'>
          <SectionHeading title='Solution' />
          <div className='body-2'>
            I paired AI-guided workouts with designed accountability to support follow-through.
          </div>
          <ul className='body-2' style={{ margin: '0.5em 0', paddingLeft: '1em' }}>
            <li style={{ marginBottom: '0.75em' }}>AI workouts → handle planning and personalization</li>
            <li style={{ marginBottom: '0.75em' }}>Pledges → create commitment similar to paying for a coach</li>
            <li style={{ marginBottom: '0.75em' }}>Calendar and timeline → gamify consistency through visible progress</li>
          </ul>
          <div className='body-2'>
            Together, these systems allow the AI coach to support showing up, not just generating workouts.
          </div>
        </div>
      </div>
      <div className='gaintain-internal-testing-image-container'>
        <img ref={imageRef} className='gaintain-internal-testing-image' src={TestingImage} alt='Comparing two versions' />
      </div>
    </div>
  )
})

Testing.displayName = 'Testing'

export default Testing
