import React, { useState } from 'react'

import { IconMapPin } from '@tabler/icons-react'
import useIsMobile from 'hooks/use_is_mobile'
import LoadAnimatedText from 'components/load_animated_text'
import Confetti from 'components/confetti'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  const [showConfetti, setShowConfetti] = useState(false)
  if (isMobile === null) return null

  const roleText = isMobile ? 'Product\nBuilder' : 'Product Builder'

  const handleAnimationComplete = (): void => {
    console.log('Animation complete, triggering confetti')
    setShowConfetti(true)
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
              <span className='intro-role'>
                <LoadAnimatedText text={roleText} delay={300} letterDelay={80} onComplete={handleAnimationComplete} />
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
