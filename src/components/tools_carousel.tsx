import React, { useMemo, useRef, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type Tool = { label: string, src: string }

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

const titleCase = (s: string): string =>
  s
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(w => (w.length === 0 ? '' : w[0].toUpperCase() + w.slice(1)))
    .join(' ')

const ToolLogo = ({ label, src }: Tool): JSX.Element => {
  const [broken, setBroken] = useState(false)
  return (
    <div className='tool-logo' title={label} aria-label={label}>
      {!broken
        ? <img src={src} alt={label} onError={() => { setBroken(true) }} />
        : <div className='tool-fallback'>{label}</div>}
    </div>
  )
}

const ToolsCarousel = (): JSX.Element => {
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
  `) as { allFile: { nodes: Array<{ name: string, publicURL: string }> } }

  const tools = useMemo<Tool[]>(() => {
    const nodes = data.allFile.nodes
    if (nodes.length === 0) return fallbackTools
    return nodes.map(n => ({ label: titleCase(n.name), src: n.publicURL }))
  }, [data])

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeTools = useMemo(() => {
    // Ensure the marquee has enough content to animate smoothly even with only a few logos.
    const baseCopies = Math.max(6, Math.ceil(14 / tools.length))
    const base = Array.from({ length: baseCopies }, () => tools).flat()
    return [...base, ...base] // animation moves -50%, so we need 2 identical halves
  }, [tools])
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) containerRef.current?.style.setProperty('--marquee-duration', '0s')
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (el === null) return
    // Pause the animation when offscreen to reduce scroll jank, keep it running while visible.
    el.style.setProperty('--marquee-play', 'running')
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry === undefined) return
        el.style.setProperty('--marquee-play', entry.isIntersecting ? 'running' : 'paused')
      },
      { root: null, threshold: 0.01, rootMargin: '200px' }
    )
    observer.observe(el)
    return () => { observer.disconnect() }
  }, [])

  return (
    <section className='tools-carousel full-bleed' ref={containerRef} aria-label='Tools I use'>
      <div className='inner'>
        <div className='tools-ship-badge subtitle-2'>Ships with</div>
      </div>
      <div className='marquee lane-1'>
        {marqueeTools.map((t, i) => (<ToolLogo key={`lane1-${t.label}-${i}`} {...t} />))}
      </div>
    </section>
  )
}

export default ToolsCarousel

