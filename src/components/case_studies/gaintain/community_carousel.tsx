import SectionHeading from 'components/section_heading'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useMemo, useRef, useState } from 'react'

interface CommunityImage {
  label: string
  src: string
  srcSet?: string
}

const titleCase = (s: string): string =>
  s
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((w) => (w.length === 0 ? '' : w[0].toUpperCase() + w.slice(1)))
    .join(' ')

const CommunityImageBox = ({ label, src, srcSet }: CommunityImage): JSX.Element => {
  const [broken, setBroken] = useState(false)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setBroken(false)
    img.onerror = () => setBroken(true)
  }, [src])
  const needsRotation =
    label.toLowerCase().includes('6394') ||
    src.includes('6394') ||
    label.toLowerCase().includes('6841') ||
    src.includes('6841')
  const needsTopCenter = label.toLowerCase().includes('6506') || src.includes('6506')
  const className = [needsRotation ? 'rotate-90' : '', needsTopCenter ? 'object-top-center' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className="community-image-box" title={label} aria-label={label} role="img">
      {!broken ? (
        <img src={src} srcSet={srcSet} alt={label} className={className} loading="lazy" decoding="async" />
      ) : (
        <div className="community-fallback">{label}</div>
      )}
    </div>
  )
}

interface CommunityCarouselProps {
  ariaLabel?: string
}

interface CommunityImageData {
  name: string
  publicURL: string
  extension: string
  childImageSharp?: {
    fixed?: {
      src: string
      srcSet: string
      width: number
      height: number
    }
  }
}

const CommunityCarousel = ({ ariaLabel = 'Community' }: CommunityCarouselProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query CommunityImages {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "gaintain/Community" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
          publicURL
          extension
          relativePath
          childImageSharp {
            fixed(width: 104, height: 104, quality: 90, fit: COVER) {
              src
              srcSet
              width
              height
            }
          }
        }
      }
    }
  `)

  const images = useMemo<CommunityImage[]>(() => {
    const nodes = data.allFile.nodes
    if (nodes.length === 0) {
      return []
    }

    // Map all nodes to images, prioritizing processed images
    const mapped = nodes
      .filter((n: CommunityImageData) => n.name && n.publicURL) // Ensure we have valid data
      .map((n: CommunityImageData) => {
        // Prioritize Sharp-processed image, fallback to publicURL
        // Sharp should process HEIC files during build, but if it doesn't, use publicURL
        const src = n.childImageSharp?.fixed?.src || n.publicURL
        const srcSet = n.childImageSharp?.fixed?.srcSet || undefined
        return {
          label: titleCase(n.name),
          src,
          srcSet,
          extension: n.extension
        }
      })
      // .filter((img) => img.src) // Remove any images without a valid src
      .filter((img: CommunityImage) => img.src)

    // Shuffle the array to randomize order
    const shuffled = [...mapped]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.map(({ extension, ...rest }) => rest) // Remove extension from final output
  }, [data])

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeImages = useMemo(() => {
    if (images.length === 0) {
      return []
    }
    // Ensure the marquee has enough content to animate smoothly even with only a few images.
    const baseCopies = Math.max(6, Math.ceil(14 / images.length))
    const base = Array.from({ length: baseCopies }, () => images).flat()
    return [...base, ...base] // animation moves -50%, so we need 2 identical halves
  }, [images])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.setProperty('--marquee-duration', '0s')
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (el === null) {
      return
    }
    el.style.setProperty('--marquee-play', 'running')
    const observer = new IntersectionObserver(
      (entries) => {
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

  if (images.length === 0) {
    return <></>
  }

  return (
    <div className="community-carousel" ref={containerRef} aria-label={ariaLabel} role="region">
      <div className="community-title-container">
        <SectionHeading title="GainTain Beta Testers" />
      </div>
      <div
        className="community-marquee lane-1"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        {marqueeImages.map((img, i) => (
          <CommunityImageBox key={`community-${img.label}-${i}`} {...img} />
        ))}
      </div>
    </div>
  )
}

export default CommunityCarousel
