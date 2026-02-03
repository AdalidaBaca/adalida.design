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
            The pledge flow is designed to mirror the <strong>external pressure</strong> of a human coach without the
            overhead. Users set their <strong>training frequency</strong> and define the <strong>financial
            stakes</strong>, transitioning from a passive tracker to a <strong>committed participant</strong>.
          </div>
          <div className="body-2">
            This interface turns vague intent into a <strong>high-stakes contract</strong>, providing the{' '}
            <strong>external friction</strong> necessary to bypass the mid-program slump.
          </div>
        </div>
      </div>
    </div>
  )
})

InteractiveLibrary.displayName = 'InteractiveLibrary'

export default InteractiveLibrary
