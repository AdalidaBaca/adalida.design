import { useEffect, useRef } from 'react'

interface Props {
  text: string
  delay?: number
  letterDelay?: number
  onComplete?: () => void
  skipAnimation?: boolean
}

const LoadAnimatedText = ({
  text,
  delay = 0,
  letterDelay = 100,
  onComplete,
  skipAnimation = false
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const onCompleteRef = useRef(onComplete)
  const hasCompletedRef = useRef(false)

  // Update ref when onComplete changes, but don't trigger re-run
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const container = containerRef.current
    if (container === null) {
      return
    }

    const letters = container.querySelectorAll<HTMLSpanElement>('.animated-letter')
    const totalLetters = letters.length

    // Reset completion flag when text changes
    hasCompletedRef.current = false

    // If skipAnimation is true, show all letters immediately
    if (skipAnimation) {
      letters.forEach(letter => {
        letter.style.setProperty('opacity', '1')
        letter.classList.add('filled')
      })
      // Call onComplete immediately if skipping animation
      if (!hasCompletedRef.current && onCompleteRef.current) {
        hasCompletedRef.current = true
        onCompleteRef.current()
      }
      return
    }

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
            // Animation complete - only call once
            if (!hasCompletedRef.current) {
              hasCompletedRef.current = true
              onCompleteRef.current?.()
            }
          }
        }
      }

      setTimeout(() => {
        animateNext()
      }, delay)
    }

    // Start animation after a short delay to ensure DOM is ready
    const timeout = setTimeout(startAnimation, 100)
    return () => {
      clearTimeout(timeout)
      // Reset completion flag on cleanup
      hasCompletedRef.current = false
    }
  }, [delay, letterDelay, skipAnimation])

  return (
    <div ref={containerRef}>
      {text.split('').map((letter, index) => {
        if (letter === ' ') {
          return <span key={index}> </span>
        } else if (letter === '\n') {
          return <br key={index} />
        } else {
          return (
            <span key={index} className="animated-letter">
              {letter}
            </span>
          )
        }
      })}
    </div>
  )
}

export default LoadAnimatedText
