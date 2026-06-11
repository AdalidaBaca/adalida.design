import { useEffect, useRef } from 'react'

const offset = 0.2

interface Props {
  text: string
  targetRef?: React.RefObject<HTMLElement>
  startIndex?: number
  totalLetters?: number
}

const fillAllLetters = (container: HTMLDivElement): void => {
  const letters = container.querySelectorAll<HTMLSpanElement>('.animated-letter')
  letters.forEach(letter => {
    letter.style.setProperty('opacity', '1')
    letter.classList.add('filled')
  })
}

const ScrollAnimatedText = ({ text, targetRef, startIndex = 0, totalLetters }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (container === null) {
      return
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      fillAllLetters(container)
      return
    }

    let completed = false
    const eventListener = (): void => {
      if (completed) {
        return
      }
      const target = targetRef?.current ?? container
      if (target === null) {
        return
      }

      const rect = target.getBoundingClientRect()
      if (rect.top > window.innerHeight || rect.bottom < 0) {
        return
      }

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
          letter.style.setProperty('opacity', '0.4')
          letter.classList.remove('filled')
        }
      })

      if (scrolled >= fullyVisibleThreshold) {
        completed = true
        fillAllLetters(container)
        document.removeEventListener('scroll', eventListener, opts)
      }
    }

    const opts: AddEventListenerOptions = { passive: true }
    document.addEventListener('scroll', eventListener, opts)
    eventListener()
    return () => {
      document.removeEventListener('scroll', eventListener, opts)
    }
  }, [startIndex, targetRef, totalLetters])

  return (
    <div ref={containerRef}>
      {text.split('').map((letter, index) => {
        if (letter === ' ') {
          // biome-ignore lint/suspicious/noArrayIndexKey: Order of letters is static and will not change
          return <span key={index}> </span>
        }
        if (letter === '\n') {
          // biome-ignore lint/suspicious/noArrayIndexKey: Order of letters is static and will not change
          return <br key={index} />
        }
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Order of letters is static and will not change
          <span key={index} className="animated-letter">
            {letter}
          </span>
        )
      })}
    </div>
  )
}

export default ScrollAnimatedText
