import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Section from './section'

interface Testimonial {
  quote: string
  name: string
  title: string
  photo?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Piro-Rael',
    title: 'Co-founder & Engineer',
    quote: 'Adalida has a strong bias to action. I felt like I had a thought partner, not just a designer. Because of that partnership, we were able to ship.'
  },
  {
    name: 'Mariana Lucchesi',
    title: 'Mentor, Women in Design',
    quote: 'Adalida is decisive, practical, and focused on progress.'
  },
  {
    name: 'Armando Diaz',
    title: 'Owner, Airbrush Art',
    quote: 'Adalida was heaven sent. Once I had a real website, clients trusted my business more and I was able to close bigger deals.'
  },
  {
    name: 'Jeanette Acosta Fresquez',
    title: 'Manager, Project ECHO',
    quote: 'I\'ve never seen anyone so excited to get work before. Adalida is a great utility player.'
  },
  {
    name: 'Kevin Irwin',
    title: 'IT Director, Menaul',
    quote: 'Adalida proved to be a valuable asset to our team, and her contributions greatly enhanced our department\'s productivity and effectiveness.'
  }
]

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map(p => p[0]?.toUpperCase() ?? '').join('')
}

const Avatar = ({ name, photo }: { name: string, photo?: string }): JSX.Element => {
  if (photo !== undefined && photo !== '') {
    return <img src={photo} alt={name} className='avatar' />
  }
  return <div className='avatar initials'>{getInitials(name)}</div>
}

const Testimonials = (): JSX.Element => {
  const items = testimonials
  const REPEAT = 200
  const extended = useMemo(() => Array.from({ length: REPEAT }, () => items).flat(), [items])
  // Start in the middle copy at the first testimonial (Ricardo) for infinite scroll in both directions
  const baseOffset = items.length * Math.floor(REPEAT / 2)
  const [index, setIndex] = useState(baseOffset) // start at first testimonial (Ricardo) in middle copy
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    // On mount, snap to initial index (first testimonial) without animation
    const track = trackRef.current
    if (track === null) return
    const child = track.children[baseOffset] as HTMLElement | undefined
    if (child !== undefined) track.scrollTo({ left: child.offsetLeft, behavior: 'auto' })
  }, [baseOffset])

  // Prevent page "jump" by locking the carousel container to the tallest card height
  useEffect(() => {
    const setStableHeight = (): void => {
      const track = trackRef.current
      const container = containerRef.current
      if (track === null || container === null) return
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.testimonial-card'))
      if (cards.length === 0) return

      // Temporarily measure intrinsic card height (not the already-locked height),
      // otherwise we can "lock in" extra whitespace.
      const prevTrackHeight = track.style.height
      const prevMinHeight = container.style.minHeight
      const prevVar = container.style.getPropertyValue('--testimonial-card-height')
      const prevCardHeights = cards.map((c) => c.style.height)

      container.style.removeProperty('--testimonial-card-height')
      container.style.minHeight = ''
      track.style.height = 'auto'
      cards.forEach((c) => { c.style.height = 'auto' })

      // Measure a sample of unique cards (first items.length is enough) and take the max
      const sample = cards.slice(0, items.length)
      const maxHeight = sample.reduce((m, el) => Math.max(m, el.offsetHeight), 0)

      // Restore inline styles, then apply the new lock height
      track.style.height = prevTrackHeight
      cards.forEach((c, i) => { c.style.height = prevCardHeights[i] ?? '' })

      if (maxHeight > 0) {
        container.style.minHeight = `${maxHeight}px`
        container.style.setProperty('--testimonial-card-height', `${maxHeight}px`)
      } else {
        container.style.minHeight = prevMinHeight
        if (prevVar !== '') container.style.setProperty('--testimonial-card-height', prevVar)
      }
    }
    const raf = requestAnimationFrame(setStableHeight)
    window.addEventListener('resize', setStableHeight)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setStableHeight)
    }
  }, [items.length])
  const scrollToIndex = useCallback((i: number, behavior: ScrollBehavior = 'smooth') => {
    setIndex(i)
    const track = trackRef.current
    if (track === null) return
    const child = track.children[i] as HTMLElement | undefined
    if (child !== undefined) track.scrollTo({ left: child.offsetLeft, behavior })
  }, [])
  const go = useCallback((delta: number) => {
    setIndex((old) => {
      const next = old + delta
      scrollToIndex(next, 'smooth')
      return next
    })
  }, [scrollToIndex])
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => { go(1) }, 5000)
    return () => { clearInterval(id) }
  }, [paused, go])

  return (
    <Section title='Testimonials'>
      <div
        className='testimonials-slider-cards'
        ref={containerRef}
        onMouseEnter={() => { setPaused(true) }}
        onMouseLeave={() => { setPaused(false) }}
      >
        <div className='cards' ref={trackRef}>
          {extended.map(({ quote, name, title, photo }, i) => {
            const normalized = (i % items.length + items.length) % items.length
            return (
            <blockquote
              key={`${name}-${title}-${i}`}
              className='testimonial-card card'
            >
              <p className='quote'>{quote}</p>
              <footer className='attribution'>
                <div className='person'>
                  <Avatar name={name} photo={photo} />
                  <div className='name-title'>
                    <span className='name'>{name}</span>
                    {title !== '' ? <span className='title'>{title}</span> : null}
                  </div>
                </div>
              </footer>
            </blockquote>
          )})}
        </div>
        <div className='testimonials-controls'>
          <button className='nav small' onClick={() => { go(-1) }} aria-label='Previous testimonial'>‹</button>
          <div className='dot-nav' role='tablist' aria-label='Testimonials'>
            {items.map((_, i) => {
              const current = ((index % items.length) + items.length) % items.length
              return (
                <button
                  key={i}
                  className={`dot${i === current ? ' active' : ''}`}
                  onClick={() => { scrollToIndex(index + (i - current), 'smooth') }}
                  role='tab'
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              )
            })}
          </div>
          <button className='nav small' onClick={() => { go(1) }} aria-label='Next testimonial'>›</button>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials

