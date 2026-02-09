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
  },
  {
    name: 'Mariana Lucchesi',
    title: 'Mentor, Women in Design',
    quote: 'Adalida is decisive, practical, and focused on progress.'
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

const Testimonials = (): JSX.Element => {
  const isMobile = useIsMobile(768) ?? false
  const visibleCount = isMobile ? 1 : 3
  const maxIndex = Math.max(0, testimonials.length - visibleCount)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const cardsRef = React.useRef<HTMLUListElement>(null)

  const goPrev = (): void => {
    setCurrentIndex(i => Math.max(0, i - 1))
  }
  const goNext = (): void => {
    setCurrentIndex(i => Math.min(maxIndex, i + 1))
  }

  // Scroll so the current card (or first of the visible slice) is in view
  React.useEffect(() => {
    const el = cardsRef.current
    if (el == null) return
    const card = el.children[currentIndex] as HTMLElement | undefined
    if (card != null) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }, [currentIndex])

  const dotCount = isMobile ? testimonials.length : maxIndex + 1

  return (
    <Section title="Testimonials">
      <div className="testimonials-slider-cards">
        <ul ref={cardsRef} className="cards">
          {testimonials.map(({ quote, name, title, photo }) => (
            <li key={`${name}-${title}`}>
              <blockquote
                className="testimonial-card card"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="800"
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
          ))}
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
                  onClick={() => setCurrentIndex(i)}
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
