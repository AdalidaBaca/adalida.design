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
  const [lineFillProgress, setLineFillProgress] = useState(0)
  const project = useContext(Context)
  const color = project?.colors?.primary ?? text

  useEffect(() => {
    const handleScroll = (): void => {
      const orderedLinks = Object.entries(links)
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportCenter = scrollY + viewportHeight / 2
      const progressMap: Record<string, SectionProgress> = {}

      // Calculate overall line fill progress based on scroll position relative to first and last sections
      let firstSectionTop = Infinity
      let lastSectionBottom = 0
      let activeLink: string | null = null
      let minDistance = Infinity
      
      for (const [link, element] of orderedLinks) {
        if (element.current === null) continue

        const rect = element.current.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const elementHeight = rect.height
        const elementBottom = elementTop + elementHeight
        const elementCenter = elementTop + elementHeight / 2

        // Track first and last section positions for continuous line fill
        if (elementTop < firstSectionTop) {
          firstSectionTop = elementTop
        }
        if (elementBottom > lastSectionBottom) {
          lastSectionBottom = elementBottom
        }

        // Determine if section is active (when viewport center is within section bounds)
        const isActive = viewportCenter >= elementTop && viewportCenter <= elementBottom
        
        // Determine if section is past (when viewport top has passed section bottom)
        const isPast = scrollY + viewportHeight * 0.2 > elementBottom

        // Calculate progress based on viewport visibility
        // Progress increases as the section moves through the viewport
        let progress = 0
        if (isPast) {
          progress = 1
        } else if (scrollY + viewportHeight * 0.2 >= elementTop) {
          // Section is entering or in viewport
          const viewportTop = scrollY + viewportHeight * 0.2 // Use 20% from top as reference
          const sectionStart = elementTop
          const sectionEnd = elementBottom
          
          // Calculate how much of the section has been scrolled through
          const scrolledThrough = Math.max(0, viewportTop - sectionStart)
          const totalSectionHeight = sectionEnd - sectionStart
          progress = Math.min(1, scrolledThrough / totalSectionHeight)
        }

        progressMap[link] = { progress, isActive, isPast }

        // Find the section closest to viewport center for active link
        const distance = Math.abs(viewportCenter - elementCenter)
        if (distance < minDistance) {
          minDistance = distance
          activeLink = link
        }
      }

      // Calculate continuous line fill: scroll position relative to total content height
      const totalContentHeight = lastSectionBottom - firstSectionTop
      let lineProgress = 0
      if (totalContentHeight > 0) {
        // Use viewport top (20% from top) as reference point for line fill
        const viewportTop = scrollY + viewportHeight * 0.2
        const scrolledThroughContent = Math.max(0, viewportTop - firstSectionTop)
        lineProgress = Math.min(1, scrolledThroughContent / totalContentHeight)
      }
      
      setLineFillProgress(lineProgress)
      setSectionProgress(progressMap)
      setActiveLink(activeLink)
      
      if (activeLink === orderedLinks[orderedLinks.length - 1][0]) {
        const lastElement = orderedLinks[orderedLinks.length - 1][1].current
        if (lastElement !== null) {
          const rect = lastElement.getBoundingClientRect()
          const bottomOfLastElement = rect.bottom + scrollY
          setScrolledTooFar(viewportCenter > bottomOfLastElement)
        } else {
          setScrolledTooFar(false)
        }
      } else {
        setScrolledTooFar(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links])

  return (
    <nav 
      className={`table-of-contents${scrolledTooFar ? ' hide-left' : ''}`}
      aria-label='Table of contents'
      role='navigation'
    >
      <div className='table-of-contents-line'>
        <div 
          className='table-of-contents-line-fill'
          style={{
            '--line-fill': `${lineFillProgress * 100}%`,
            '--line-gradient': typeof color === 'string' && color.includes('gradient') ? color : undefined,
            '--line-color': typeof color === 'string' && color.includes('gradient') ? undefined : color
          } as React.CSSProperties}
          aria-hidden='true'
        />
      </div>
      <ol className='table-of-contents-list' role='list'>
        {Object.entries(links).map(([link, element]) => {
          const progress = sectionProgress[link]?.progress ?? 0
          const isActive = sectionProgress[link]?.isActive ?? false
          const isPast = sectionProgress[link]?.isPast ?? false
          const active = activeLink === link
          
          // Extract solid color from gradient if needed, or use the color directly
          const dotColor = typeof color === 'string' && color.includes('gradient')
            ? undefined // Will use default colors for gradients
            : color
          
          const handleClick = (): void => {
            if (element.current === null) return
            element.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }

          const handleKeyDown = (e: React.KeyboardEvent): void => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleClick()
            }
          }
          
          return (
            <li key={link} className='table-of-contents-item' role='listitem'>
              <div className='table-of-contents-item-content'>
                <div className='table-of-contents-dot-wrapper'>
                  <button
                    className={`table-of-contents-dot${isActive ? ' active' : ''}${isPast ? ' past' : ''}${typeof color === 'string' && color.includes('gradient') ? ' gradient' : ''}`}
                    style={{
                      '--progress': `${progress * 100}%`,
                      '--dot-color': dotColor,
                      '--gradient': typeof color === 'string' && color.includes('gradient') ? color : undefined
                    } as React.CSSProperties}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    aria-label={`Navigate to ${link} section`}
                    aria-current={active ? 'location' : undefined}
                    tabIndex={0}
                  >
                    <div className='table-of-contents-dot-fill' aria-hidden='true' />
                  </button>
                </div>
                <button
                  className={`link-button${active ? ' active' : ''}${isPast ? ' past' : ''}`}
                  style={active ? undefined : { backgroundImage: color }}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  aria-label={`Navigate to ${link} section`}
                  aria-current={active ? 'location' : undefined}
                >
                  {link}
                </button>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default TableOfContents
