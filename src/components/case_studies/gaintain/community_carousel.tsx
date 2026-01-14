import React, { useMemo, useRef, useEffect } from 'react'

import GymCollage0 from 'images/gaintain/gym collage 00.png'
import GymCollage1 from 'images/gaintain/gym collage 01.png'

import SectionHeading from 'components/section_heading'

interface CommunityCarouselProps {
  ariaLabel?: string
}

const CommunityCarousel = ({ ariaLabel = 'Community' }: CommunityCarouselProps): JSX.Element => {
  const images = [
    { src: GymCollage0, alt: 'Gym collage 00' },
    { src: GymCollage1, alt: 'Gym collage 01' }
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeImages = useMemo(() => {
    if (images.length === 0) return []
    const baseCopies = Math.max(6, Math.ceil(14 / images.length))
    const base = Array.from({ length: baseCopies }, () => images).flat()
    return [...base, ...base]
  }, [images])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.setProperty('--marquee-duration', '0s')
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (el === null) return
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

  if (images.length === 0) return <></>

  return (
    <div className='community-carousel' ref={containerRef} aria-label={ariaLabel}>
      <div className='community-title-container'>
        <SectionHeading title='Community' />
      </div>
      <div className='community-marquee lane-1' data-aos='fade' data-aos-offset='50' data-aos-duration='800' data-aos-easing='ease-out-cubic'>
        {marqueeImages.map((img, i) => (
          <div key={`community-${i}`} className='community-image'>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityCarousel
