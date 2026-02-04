import IphoneFrame from 'components/iphone_frame'
import SectionHeading from 'components/section_heading'
import { forwardRef, type Ref, useEffect, useRef } from 'react'
import PledgeSetupVideo from 'videos/gaintain/pledge_setup.mp4'

const InteractiveLibrary = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
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
    <div data-aos="fade-up" className="case-study-side-by-side reverse" ref={ref}>
      <div className="gaintain-image-container gaintain-video-container" ref={videoRef}>
        <IphoneFrame videoURL={PledgeSetupVideo} />
      </div>
      <div className="case-study-explanation" ref={explanationRef}>
        <div className="gaintain-details-card">
          <SectionHeading title="Pledge Setup" subtitle="Turning Intention into Commitment" />
          <div className="body-2">
            The pledge setup is the <strong>core commitment mechanism</strong>, mirroring the pressure of a human coach
            without the overhead.
          </div>
          <div className="body-2">
            Defining training frequency and financial stakes upfront creates an <strong>explicit commitment</strong>{' '}
            that shifts users from passive tracking into accountable action and prevents mid-program drop-off.
          </div>
        </div>
      </div>
    </div>
  )
})

InteractiveLibrary.displayName = 'InteractiveLibrary'

export default InteractiveLibrary
