import React, { useContext, useEffect, useState, type MutableRefObject } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import Context from './context'

interface Props {
  links: Record<string, MutableRefObject<HTMLDivElement | null>>
}

const TableOfContents = ({ links }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text } = darkModeStyle(darkMode)
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrolledTooFar, setScrolledTooFar] = useState(true)
  const project = useContext(Context)
  const color = project?.colors?.primary ?? text

  useEffect(() => {
    const handleScroll = (): void => {
      let closestLink = null
      const orderedLinks = Object.entries(links)
      const halfwayDownViewport = window.scrollY + window.innerHeight / 2
      for (const [link, element] of orderedLinks) {
        if (element.current === null) return

        const elementTop = element.current.offsetTop
        if (halfwayDownViewport < elementTop) break

        closestLink = link
      }
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
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links, scrolledTooFar])

  return (
    <div className={`table-of-contents${scrolledTooFar ? ' hide-left' : ''}`}>
      {Object.entries(links).map(([link, element]) => {
        const active = activeLink === link
        return (
          <div key={link}>
            <button
              className={`link-button${active ? ' active' : ''}`}
              style={active ? undefined : { backgroundImage: color }}
              onClick={() => {
                if (element.current === null) return
                const headerHeight = 56
                const elementPosition = element.current.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight - 16 // 16px for extra spacing
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }}
            >
              {link}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default TableOfContents
