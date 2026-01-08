import React, { useEffect, useRef, useState } from 'react'

interface Props {
  text: string
  delay?: number
  letterDelay?: number
  onComplete?: () => void
}

const LoadAnimatedText = ({ text, delay = 0, letterDelay = 100, onComplete }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lettersRevealed, setLettersRevealed] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (container === null) return

    const letters = container.querySelectorAll<HTMLSpanElement>('.animated-letter')
    const totalLetters = letters.length

    const startAnimation = (): void => {
      let currentIndex = 0

      const animateNext = (): void => {
        if (currentIndex < totalLetters) {
          const letter = letters[currentIndex]
          if (letter) {
            letter.style.setProperty('opacity', '1')
            letter.classList.add('filled')
          }
          currentIndex++
          if (currentIndex < totalLetters) {
            setTimeout(animateNext, letterDelay)
          } else {
            // Animation complete
            onComplete?.()
          }
        }
      }

      setTimeout(() => {
        animateNext()
      }, delay)
    }

    // Start animation after a short delay to ensure DOM is ready
    const timeout = setTimeout(startAnimation, 100)
    return () => { clearTimeout(timeout) }
  }, [delay, letterDelay, onComplete])

  return (
    <div ref={containerRef}>
      {
        text.split('').map((letter, index) => {
          if (letter === ' ') {
            return <span key={index}> </span>
          } else if (letter === '\n') {
            return <br key={index} />
          } else {
            return <span key={index} className='animated-letter'>{letter}</span>
          }
        })
      }
    </div>
  )
}

export default LoadAnimatedText
