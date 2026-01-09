import React, { useEffect, useRef, useState } from 'react'

import { IconMapPin } from '@tabler/icons-react'
import useIsMobile from 'hooks/use_is_mobile'
import LoadAnimatedText from 'components/load_animated_text'
import Confetti from 'components/confetti'

const ANIMATION_COMPLETE_KEY = 'portfolio-intro-animation-complete'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  const [showConfetti, setShowConfetti] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const builderTextRef = useRef<HTMLSpanElement>(null)
  const hasTriggeredConfettiRef = useRef(false)
  if (isMobile === null) return null

  // Check if animation has already completed in this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = sessionStorage.getItem(ANIMATION_COMPLETE_KEY) === 'true'
      setAnimationComplete(completed)
      
      // If already completed, mark confetti as triggered so it doesn't show again
      if (completed) {
        hasTriggeredConfettiRef.current = true
      }
    }
  }, [])

  const roleText = isMobile ? 'Product\nBuilder' : 'Product Builder'
  const productText = isMobile ? 'Product\n' : 'Product '
  const productDelay = 300
  const builderDelay = productDelay + (productText.length * 80)

  const handleAnimationComplete = (): void => {
    // Prevent multiple triggers or if animation was already completed
    if (hasTriggeredConfettiRef.current || animationComplete) {
      console.log('Confetti already triggered or animation already completed, ignoring')
      return
    }
    
    // Mark animation as complete in sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(ANIMATION_COMPLETE_KEY, 'true')
    }
    setAnimationComplete(true)
    
    console.log('Animation complete, waiting for color transition before triggering confetti')
    hasTriggeredConfettiRef.current = true
    
    // Wait for the CSS color transition to complete (0.6s) before triggering confetti
    setTimeout(() => {
      console.log('Color transition complete, triggering confetti')
      setShowConfetti(true)
    }, 600) // Match the CSS transition duration
  }

  return (
    <>
      <Confetti trigger={showConfetti} onComplete={() => { setShowConfetti(false) }} />
    <div className='portfolio-intro' data-aos='fade-up'>
        <div className='portfolio-intro-left'>
          <div className='intro-name-section'>
            <h1 className='intro-name-line'>
              <span className='intro-name'>Adalida B.</span>
            </h1>
            <h1 className='intro-role-line'>
              <span className='intro-role' ref={builderTextRef}>
                <LoadAnimatedText 
                  text={roleText} 
                  delay={300} 
                  letterDelay={120} 
                  onComplete={handleAnimationComplete}
                  skipAnimation={animationComplete}
                />
              </span>
            </h1>
          </div>
          <div className='intro-location-badge'>
            <IconMapPin size={16} />
            <span>SF, CA</span>
          </div>
          <p className='intro-description'>
            I specialize in early-stage product strategy and turning messy ideas into systems teams can actually build, using data and real workflows as inputs.
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro
