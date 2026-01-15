import React, { useMemo, useRef, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SectionHeading from 'components/section_heading'

type Tool = { label: string, src: string }

const titleCase = (s: string): string =>
  s
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(w => (w.length === 0 ? '' : w[0].toUpperCase() + w.slice(1)))
    .join(' ')

const ToolLogo = ({ label, src }: Tool): JSX.Element => {
  const [broken, setBroken] = useState(false)
  const isNotion = label.toLowerCase().includes('notion')
  return (
    <div className={`competitor-logo ${isNotion ? 'notion-logo' : ''}`} title={label} aria-label={label}>
      {!broken
        ? <img src={src} alt={label} onError={() => { setBroken(true) }} />
        : <div className='competitor-fallback'>{label}</div>}
    </div>
  )
}

interface CompetitorsCarouselProps {
  ariaLabel?: string
}

const CompetitorsCarousel = ({ ariaLabel = 'Competitors' }: CompetitorsCarouselProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query CompetitorsAbraLogos {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "gaintain/abra" } }
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
    if (nodes.length === 0) return []
    return nodes.map(n => ({ label: titleCase(n.name), src: n.publicURL }))
  }, [data])

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeTools = useMemo(() => {
    if (tools.length === 0) return []
    // Ensure the marquee has enough content to animate smoothly even with only a few logos.
    const baseCopies = Math.max(6, Math.ceil(14 / tools.length))
    const base = Array.from({ length: baseCopies }, () => tools).flat()
    return [...base, ...base] // animation moves -50%, so we need 2 identical halves
  }, [tools])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.setProperty('--marquee-duration', '0s')
    }
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

  if (tools.length === 0) return <></>

  return (
    <div className='competitors-carousel' ref={containerRef} aria-label={ariaLabel}>
      <div className='competitors-title-container'>
        <SectionHeading title='Competitors' />
      </div>
      <div className='competitors-marquee lane-1' data-aos='fade' data-aos-offset='50' data-aos-duration='800' data-aos-easing='ease-out-cubic'>
        {marqueeTools.map((t, i) => (<ToolLogo key={`competitor-${t.label}-${i}`} {...t} />))}
      </div>
    </div>
  )
}

export default CompetitorsCarousel
