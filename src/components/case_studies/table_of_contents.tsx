import React, { useContext, useEffect, useState, type MutableRefObject } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import Context from './context'

interface Props {
  links: Record<string, MutableRefObject<HTMLDivElement | null>>
}

interface SectionProgress {
  progress: number // 0-1, how much of this section has been scrolled past
  isActive: boolean
  isPast: boolean // Whether we've scrolled past this section completely
}

const TableOfContents = ({ links }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text } = darkModeStyle(darkMode)
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrolledTooFar, setScrolledTooFar] = useState(true)
  const [sectionProgress, setSectionProgress] = useState<Record<string, SectionProgress>>({})
  const project = useContext(Context)
  const color = project?.colors?.primary ?? text

  useEffect(() => {
    const handleScroll = (): void => {
      let closestLink = null
      const orderedLinks = Object.entries(links)
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const halfwayDownViewport = scrollY + viewportHeight / 2
      const progressMap: Record<string, SectionProgress> = {}

      for (const [link, element] of orderedLinks) {
        if (element.current === null) continue

        const elementTop = element.current.offsetTop
        const elementHeight = element.current.offsetHeight
        const elementBottom = elementTop + elementHeight

        // Calculate progress: 0 = not reached, 1 = fully scrolled past
        let progress = 0
        const isPast = scrollY > elementBottom
        const isActive = scrollY >= elementTop - viewportHeight * 0.3 && scrollY < elementBottom

        if (isPast) {
          progress = 1
        } else if (scrollY >= elementTop) {
          // Currently scrolling through this section
          const scrolledThrough = scrollY - elementTop
          progress = Math.min(1, scrolledThrough / elementHeight)
        }

        progressMap[link] = { progress, isActive, isPast }

        if (halfwayDownViewport < elementTop) break
        closestLink = link
      }

      setSectionProgress(progressMap)
      setActiveLink(closestLink)
      
      if (closestLink === orderedLinks[orderedLinks.length - 1][0]) {
        const lastElement = orderedLinks[orderedLinks.length - 1][1].current
        const bottomOfLastElement = lastElement !== null ? lastElement.offsetTop + lastElement.offsetHeight : Infinity
        setScrolledTooFar(halfwayDownViewport > bottomOfLastElement)
      } else {
        setScrolledTooFar(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links])

  return (
    <div className={`table-of-contents${scrolledTooFar ? ' hide-left' : ''}`}>
      <div className='table-of-contents-scrollbar'>
        <div className='table-of-contents-line' />
        <div className='table-of-contents-dots-container'>
          {Object.entries(links).map(([link, element]) => {
            const progress = sectionProgress[link]?.progress ?? 0
            const isActive = sectionProgress[link]?.isActive ?? false
            const isPast = sectionProgress[link]?.isPast ?? false
            
            // Extract solid color from gradient if needed, or use the color directly
            const dotColor = typeof color === 'string' && color.includes('gradient')
              ? undefined // Will use default colors for gradients
              : color
            
            return (
              <div
                key={link}
                className={`table-of-contents-dot${isActive ? ' active' : ''}${isPast ? ' past' : ''}${typeof color === 'string' && color.includes('gradient') ? ' gradient' : ''}`}
                style={{
                  '--progress': `${progress}`,
                  '--dot-color': dotColor,
                  '--gradient': typeof color === 'string' && color.includes('gradient') ? color : undefined
                } as React.CSSProperties}
                onClick={() => {
                  if (element.current === null) return
                  element.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                <div className='table-of-contents-dot-fill' />
              </div>
            )
          })}
        </div>
      </div>
      <div className='table-of-contents-items'>
        {Object.entries(links).map(([link, element]) => {
          const progress = sectionProgress[link]?.progress ?? 0
          const isActive = sectionProgress[link]?.isActive ?? false
          const isPast = sectionProgress[link]?.isPast ?? false
          const active = activeLink === link
          
          // Extract solid color from gradient if needed, or use the color directly
          const dotColor = typeof color === 'string' && color.includes('gradient')
            ? undefined // Will use default colors for gradients
            : color
          
          return (
            <div key={link} className='table-of-contents-item'>
              <button
                className={`link-button${active ? ' active' : ''}${isPast ? ' past' : ''}`}
                style={active ? undefined : { backgroundImage: color }}
                onClick={() => {
                  if (element.current === null) return
                  element.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                {link}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableOfContents
