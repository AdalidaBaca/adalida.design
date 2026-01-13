import React, { forwardRef, useEffect, useRef, type Ref } from 'react'

import InteractiveLibraryVideo from 'videos/gaintain/interactive_library.mp4'

import SectionHeading from 'components/section_heading'

const InteractiveLibrary = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
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
        <video src={InteractiveLibraryVideo} autoPlay loop muted playsInline style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <div className='case-study-explanation' ref={explanationRef}>
        <div className='gaintain-details-card'>
          <SectionHeading title='Pledge Setup' />
          <div className='body-2'>
            The pledge flow turns intention into <strong>commitment</strong>.
          </div>
          <div className='body-2'>
            Users set how often they plan to train, define the <strong>stakes</strong>, and choose where accountability goes.
          </div>
          <div className='body-2'>
            By putting money on the line, the product mirrors the <strong>external pressure</strong> of a human coach without requiring one.
          </div>
        </div>
      </div>
    </div>
  )
})

InteractiveLibrary.displayName = 'InteractiveLibrary'

export default InteractiveLibrary
