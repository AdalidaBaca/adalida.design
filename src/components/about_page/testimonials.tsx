import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import useIsMobile from 'hooks/use_is_mobile'
import React from 'react'
import Section from './section'

interface Testimonial {
  quote: string
  name: string
  title: string
  photo?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Grace Gong',
    title: 'VC, Smart Venture Media',
    quote:
      "Adi is an absolute gem. Hardworking, reliable, and genuinely talented! She brought our vision to life and made the whole process easy. Couldn't recommend her more highly."
  },
  {
    name: 'Ricardo Piro-Rael',
    title: 'Co-founder & Engineer',
    quote:
      'Adalida has a strong bias to action. I felt like I had a thought partner, not just a designer. Because of that partnership, we were able to ship.'
  },
  {
    name: 'Andria Herrera',
    title: 'Owner, Invibe Esthetics',
    quote:
      'Adalida is so kind, patient, open minded, and knowledgeable. My sales and bookings have increased significantly, bringing so much growth to my business. HIGHLY recommend!'
  },
  {
    name: 'Mariana Lucchesi',
    title: 'Mentor, Women in Design',
    quote:
      'Adalida is a brilliant mentee who turns feedback into action and complex ideas into accessible case studies. Knowledgeable, creative, and a natural learner, she is a standout talent.'
  },
  {
    name: 'Jeanette Acosta Fresquez',
    title: 'Manager, Project ECHO',
    quote:
      "What Adalida learned and accomplished at Project ECHO is very impressive! I've never seen anyone so excited to get work before. She's a great utility player."
  },
  {
    name: 'Armando Diaz',
    title: 'Owner, Airbrush Art',
    quote:
      'Adalida was truly heaven sent. Once I had a real website, clients trusted my business more and I was able to close bigger deals.'
  }
]

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map(p => p[0]?.toUpperCase() ?? '').join('')
}

const Avatar = ({ name, photo }: { name: string; photo?: string }): JSX.Element => {
  if (photo !== undefined && photo !== '') {
    return <img src={photo} alt={name} className="avatar" />
  }
  return <div className="avatar initials">{getInitials(name)}</div>
}

const nearestCardIndex = (container: HTMLElement, maxIndex: number): number => {
  const cards = Array.from(container.children) as HTMLElement[]
  if (cards.length === 0) return 0

  const origin = container.getBoundingClientRect().left
  let nearest = 0
  let nearestDist = Number.POSITIVE_INFINITY

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    if (card === undefined) continue
    const dist = Math.abs(card.getBoundingClientRect().left - origin)
    if (dist < nearestDist) {
      nearestDist = dist
      nearest = i
    }
  }

  return Math.min(nearest, maxIndex)
}

const Testimonials = (): JSX.Element => {
  const isMobile = useIsMobile() ?? false
  const visibleCount = isMobile ? 1 : 2
  const maxIndex = Math.max(0, testimonials.length - visibleCount)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const cardsRef = React.useRef<HTMLUListElement>(null)
  const ignoreScrollSync = React.useRef(false)
  const clearIgnoreTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollToIndex = React.useCallback((index: number): void => {
    const el = cardsRef.current
    const card = el?.children[index] as HTMLElement | undefined
    if (el == null || card == null) return

    ignoreScrollSync.current = true
    if (clearIgnoreTimeout.current != null) clearTimeout(clearIgnoreTimeout.current)
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })

    const release = (): void => {
      ignoreScrollSync.current = false
      el.removeEventListener('scrollend', release)
    }
    el.addEventListener('scrollend', release, { once: true })
    clearIgnoreTimeout.current = setTimeout(release, 450)
  }, [])

  const goTo = (index: number): void => {
    const next = Math.max(0, Math.min(maxIndex, index))
    setCurrentIndex(next)
    scrollToIndex(next)
  }

  const goPrev = (): void => {
    goTo(currentIndex - 1)
  }
  const goNext = (): void => {
    goTo(currentIndex + 1)
  }

  // Keep dots / arrows in sync when the user scrolls or swipes the track.
  React.useEffect(() => {
    const el = cardsRef.current
    if (el == null) return

    let frame = 0
    const syncFromScroll = (): void => {
      frame = 0
      if (ignoreScrollSync.current) return
      const next = nearestCardIndex(el, maxIndex)
      setCurrentIndex(prev => (prev === next ? prev : next))
    }

    const onScroll = (): void => {
      if (frame !== 0) return
      frame = requestAnimationFrame(syncFromScroll)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (frame !== 0) cancelAnimationFrame(frame)
    }
  }, [maxIndex])

  React.useEffect(() => {
    setCurrentIndex(i => Math.min(i, maxIndex))
  }, [maxIndex])

  React.useEffect(
    () => () => {
      if (clearIgnoreTimeout.current != null) clearTimeout(clearIgnoreTimeout.current)
    },
    []
  )

  const dotCount = isMobile ? testimonials.length : maxIndex + 1

  return (
    <Section title="Testimonials">
      <div className="testimonials-slider-cards">
        <ul ref={cardsRef} className="cards">
          {testimonials.map(({ quote, name, title, photo }, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + visibleCount
            const isLeading = index === currentIndex
            return (
              <li
                key={`${name}-${title}`}
                className={[isVisible ? 'is-visible' : 'is-offscreen', isLeading ? 'is-leading' : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <blockquote
                  className="testimonial-card"
                  data-aos="fade-up"
                  data-aos-offset="80"
                  data-aos-duration="600"
                >
                  <p className="quote">{quote}</p>
                  <footer className="attribution">
                    <div className="person">
                      <Avatar name={name} photo={photo} />
                      <div className="name-title">
                        <span className="name">{name}</span>
                        {title !== '' ? <span className="title">{title}</span> : null}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </li>
            )
          })}
        </ul>
        <div className="testimonials-controls">
          <button
            type="button"
            className="nav small"
            onClick={goPrev}
            disabled={currentIndex === 0}
            aria-label="Previous testimonial"
          >
            <IconChevronLeft size={18} strokeWidth={2} aria-hidden />
          </button>
          <div className="dot-nav" role="tablist" aria-label="Testimonial position">
            {Array.from({ length: dotCount }, (_, i) => {
              const key = isMobile && testimonials[i] ? `${testimonials[i].name}-${testimonials[i].title}` : `page-${i}`
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={currentIndex === i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`dot ${currentIndex === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                />
              )
            })}
          </div>
          <button
            type="button"
            className="nav small"
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next testimonial"
          >
            <IconChevronRight size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
