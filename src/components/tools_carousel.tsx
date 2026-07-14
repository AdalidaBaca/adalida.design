import { graphql, useStaticQuery } from 'gatsby'
import { useEffect, useMemo, useRef, useState } from 'react'

import { titleCase } from 'utils'

interface Tool {
  label: string
  src: string
}

const fallbackTools: Tool[] = [
  { label: 'Notion', src: '/images/logos/notion.png' },
  { label: 'Figma', src: '/images/logos/figma.png' },
  { label: 'Cursor', src: '/images/logos/cursor.png' },
  { label: 'HTML / CSS', src: '/images/logos/html-css.png' },
  { label: 'SQL', src: '/images/logos/sql.png' },
  { label: 'Git (CLI)', src: '/images/logos/git.png' },
  { label: 'GitHub', src: '/images/logos/github.png' },
  { label: 'CMS', src: '/images/logos/cms.png' },
  { label: 'PostHog', src: '/images/logos/posthog.png' },
  { label: 'Google Analytics', src: '/images/logos/google-analytics.png' },
  { label: 'Adobe CC', src: '/images/logos/adobe-cc.png' },
  { label: 'Google Workspace', src: '/images/logos/google-workspace.png' }
]

const ToolLogo = ({ label, src }: Tool): JSX.Element => {
  const [broken, setBroken] = useState(false)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setBroken(false)
    img.onerror = () => setBroken(true)
  }, [src])
  return (
    <div className="tool-logo" title={label} aria-label={label} role="img">
      {!broken ? <img src={src} alt={label} /> : <div className="tool-fallback">{label}</div>}
    </div>
  )
}

const AboutToolItem = ({ label, src }: Tool): JSX.Element => (
  <div className="tool-item">
    <ToolLogo label={label} src={src} />
    <span className="tool-label" aria-hidden="true">
      {label}
    </span>
  </div>
)

interface ToolsCarouselProps {
  badgeText?: string | null
  fullBleed?: boolean
  ariaLabel?: string
  variant?: 'default' | 'about'
}

interface ToolData {
  name: string
  publicURL: string
}

const ToolsCarousel = ({
  badgeText = 'Toolkit',
  fullBleed = true,
  ariaLabel = 'Tools I use',
  variant = 'default'
}: ToolsCarouselProps = {}): JSX.Element => {
  const data = useStaticQuery(graphql`
    query ShipsWithLogos {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { regex: "/[Ss]hips with/" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  const tools = useMemo<Tool[]>(() => {
    const nodes = data.allFile.nodes
    if (nodes.length === 0) {
      return fallbackTools
    }
    return nodes.map((n: ToolData) => ({ label: titleCase(n.name), src: n.publicURL }))
  }, [data])

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeTools = useMemo(() => {
    const baseCopies = Math.max(6, Math.ceil(14 / tools.length))
    const base = Array.from({ length: baseCopies }, () => tools).flat()
    return [...base, ...base]
  }, [tools])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      containerRef.current?.style.setProperty('--marquee-duration', '0s')
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (el === null) {
      return
    }
    el.style.setProperty('--marquee-play', 'running')
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry === undefined) {
          return
        }
        el.style.setProperty('--marquee-play', entry.isIntersecting ? 'running' : 'paused')
      },
      { root: null, threshold: 0.01, rootMargin: '200px' }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [])

  const isAbout = variant === 'about'
  const carouselClass = ['tools-carousel', fullBleed ? 'full-bleed' : '', isAbout ? 'tools-carousel--about' : '']
    .filter(Boolean)
    .join(' ')

  if (isAbout) {
    return (
      <section className={carouselClass} ref={containerRef} aria-label={ariaLabel}>
        <div className="marquee lane-1">
          {marqueeTools.map((t, i) => (
            <AboutToolItem key={`lane1-${t.label}-${i}`} {...t} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className={carouselClass} ref={containerRef} aria-label={ariaLabel}>
      {badgeText !== null && badgeText !== '' && (
        <div className="inner">
          <div className="tools-ship-badge subtitle-2">{badgeText}</div>
        </div>
      )}
      <div
        className="marquee lane-1"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        {marqueeTools.map((t, i) => (
          <ToolLogo key={`lane1-${t.label}-${i}`} {...t} />
        ))}
      </div>
    </section>
  )
}

export default ToolsCarousel
