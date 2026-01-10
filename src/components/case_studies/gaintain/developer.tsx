import React, { forwardRef, useEffect, useRef, type Ref } from 'react'

import DeveloperImage from 'images/gaintain/developer.webp'

import SectionHeading from 'components/section_heading'

const Developer = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const explanationRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

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
    <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
      <div className='gaintain-image-container' ref={imageRef}>
        <img src={DeveloperImage} alt='Developer specifications' />
      </div>
      <div className='case-study-explanation' ref={explanationRef}>
        <div className='gaintain-details-card'>
          <SectionHeading title='Social Timeline' />
          <div className='body-2'>
            The timeline reinforces consistency through <strong>visibility</strong>.
          </div>
          <div className='body-2'>
            Workout check-ins and pledge progress appear as simple, repeatable signals of effort.
          </div>
          <div className='body-2'>
            This creates <strong>social accountability</strong> without forcing social behavior.
          </div>
        </div>
      </div>
    </div>
  )
})

Developer.displayName = 'Developer'

export default Developer
