import React, { useEffect, useRef } from 'react'

const offset = 0.2

interface Props {
  text: string
  targetRef?: React.RefObject<HTMLElement>
  startIndex?: number
  totalLetters?: number
}

const ScrollAnimatedText = ({ text, targetRef, startIndex = 0, totalLetters }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let completed = false
    const eventListener = (): void => {
      if (completed) return
      const container = containerRef.current
      const target = targetRef?.current ?? container
      if (container === null || target === null) return

      const rect = target.getBoundingClientRect()
      if (rect.top > window.innerHeight || rect.bottom < 0) return

      const fractionScrolled = (window.innerHeight - rect.top) / window.innerHeight
      const scrolled = fractionScrolled - offset
      const letters = container.querySelectorAll<HTMLSpanElement>('.animated-letter')
      const denominator = totalLetters ?? letters.length
      const lastGlobalIndex = startIndex + letters.length - 1
      const fullyVisibleThreshold = (lastGlobalIndex + 1) / denominator

      letters.forEach((letter, index) => {
        const globalIndex = startIndex + index
        if (globalIndex / denominator < scrolled) {
          letter.style.setProperty('opacity', '1')
          letter.classList.add('filled')
        } else if (letter.style.opacity !== '1') {
          // Don't "rewind" letters once revealed
          letter.style.setProperty('opacity', '0.4')
          letter.classList.remove('filled')
        }
      })

      if (scrolled >= fullyVisibleThreshold) {
        completed = true
        letters.forEach((letter) => {
          letter.style.setProperty('opacity', '1')
          letter.classList.add('filled')
        })
        document.removeEventListener('scroll', eventListener, opts)
      }
    }

    const opts: AddEventListenerOptions = { passive: true }
    document.addEventListener('scroll', eventListener, opts)
    // run once on mount to set initial state if already in view
    eventListener()
    return () => { document.removeEventListener('scroll', eventListener, opts) }
  }, [])

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

export default ScrollAnimatedText
