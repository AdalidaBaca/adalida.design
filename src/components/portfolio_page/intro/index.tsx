import { IconMapPin } from '@tabler/icons-react'
import Confetti from 'components/confetti'
import LoadAnimatedText from 'components/load_animated_text'
import useIsMobile from 'hooks/use_is_mobile'
import React, { useEffect, useRef, useState } from 'react'

const ANIMATION_COMPLETE_KEY = 'portfolio-intro-animation-complete'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  const [showConfetti, setShowConfetti] = useState(false)
  const [skipIntroAnimation, setSkipIntroAnimation] = useState(false)
  const [animationRunKey, setAnimationRunKey] = useState(0)
  const builderTextRef = useRef<HTMLSpanElement>(null)
  const hasTriggeredConfettiRef = useRef(false)

  // Check if animation has already completed in this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = sessionStorage.getItem(ANIMATION_COMPLETE_KEY) === 'true'
      setSkipIntroAnimation(completed)

      // If already completed, mark confetti as triggered so it doesn't show again
      if (completed) {
        hasTriggeredConfettiRef.current = true
      }
    }
  }, [])

  // Trigger confetti after the page loads (one-time per session)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (hasTriggeredConfettiRef.current || skipIntroAnimation) {
      return
    }

    const triggerOnce = (): void => {
      if (hasTriggeredConfettiRef.current) {
        return
      }
      hasTriggeredConfettiRef.current = true
      sessionStorage.setItem(ANIMATION_COMPLETE_KEY, 'true')
      // Start the text fill animation and confetti at the same time.
      setAnimationRunKey((k) => k + 1)

      // Small delay so layout paints before confetti
      setTimeout(() => {
        setShowConfetti(true)
      }, 250)
    }

    if (document.readyState === 'complete') {
      triggerOnce()
      return
    }

    window.addEventListener('load', triggerOnce, { once: true })
    return () => {
      window.removeEventListener('load', triggerOnce)
    }
  }, [skipIntroAnimation])

  const roleText = isMobile ? 'Product\nBuilder' : 'Product Builder'
  const productText = isMobile ? 'Product\n' : 'Product '
  const productDelay = 300
  const _builderDelay = productDelay + productText.length * 80

  return (
    <>
      <Confetti
        trigger={showConfetti}
        onComplete={() => {
          setShowConfetti(false)
        }}
      />
      <div className="portfolio-intro" data-aos="fade-up">
        <div className="portfolio-intro-left">
          <div className="intro-name-section">
            <h1 className="intro-name-line">
              <span className="intro-name">Adalida B.</span>
            </h1>
            <h1 className="intro-role-line">
              <span className="intro-role" ref={builderTextRef}>
                <LoadAnimatedText
                  key={animationRunKey}
                  text={roleText}
                  delay={300}
                  letterDelay={120}
                  skipAnimation={skipIntroAnimation}
                />
              </span>
            </h1>
          </div>
          <div className="intro-location-badge">
            <IconMapPin size={16} />
            <span>SF, CA</span>
          </div>
          <p className="intro-description">
            I specialize in early-stage product strategy and turning messy ideas into systems teams can actually build,
            using data and real workflows as inputs.
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro
