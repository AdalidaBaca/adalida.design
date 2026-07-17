import { useCallback, useEffect } from 'react'
import { FOOTER_QUOTE, HERO_QUOTE, QUOTE_SECTIONS } from './quotes_data'

const HEADER_SCROLL_OFFSET = 76

const formatOrder = (index: number): string => String(index + 1).padStart(2, '0')

const QuotesPage = (): JSX.Element => {
  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior = 'smooth'): void => {
    if (typeof window === 'undefined') {
      return
    }
    const element = document.getElementById(id)
    if (element === null) {
      return
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const top = window.scrollY + element.getBoundingClientRect().top - HEADER_SCROLL_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: prefersReduced ? 'auto' : behavior })
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === '') {
      return
    }
    requestAnimationFrame(() => {
      scrollToSection(hash, 'auto')
    })
  }, [scrollToSection])

  return (
    <div className="quotes-page">
      <figure className="quotes-hero" data-aos="fade-up">
        <blockquote className="quotes-hero-quote">
          <p>{HERO_QUOTE.text}</p>
        </blockquote>
        <figcaption className="quotes-hero-attribution">
          <cite>{HERO_QUOTE.author}</cite>
        </figcaption>
      </figure>

      <header className="quotes-page-header" data-aos="fade-up" data-aos-delay="40">
        <h1 className="quotes-page-title">Quotes</h1>
        <nav className="quotes-nav" aria-label="Quote categories">
          {QUOTE_SECTIONS.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="quotes-nav-link"
              onClick={event => {
                event.preventDefault()
                scrollToSection(section.id)
                window.history.replaceState(null, '', `#${section.id}`)
              }}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      {QUOTE_SECTIONS.map(section => (
        <section key={section.id} id={section.id} className="quotes-section">
          <header className="quotes-section-header">
            <h2 className="quotes-section-title">{section.title}</h2>
            <p className="quotes-section-description">{section.description}</p>
          </header>
          <ol className="quotes-list">
            {section.quotes.map((quote, index) => (
              <li key={`${section.id}-${quote.author}-${index}`} className="quotes-card">
                <span className="quotes-card-order" aria-hidden>
                  {formatOrder(index)}
                </span>
                <blockquote className="quotes-card-quote">
                  <p>{quote.text}</p>
                  <footer className="quotes-card-attribution">
                    <cite>{quote.author}</cite>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <figure className="quotes-hero quotes-hero--footer">
        <blockquote className="quotes-hero-quote">
          <p>{FOOTER_QUOTE.text}</p>
        </blockquote>
        <figcaption className="quotes-hero-attribution">
          <cite>{FOOTER_QUOTE.author}</cite>
        </figcaption>
      </figure>
    </div>
  )
}

export default QuotesPage
