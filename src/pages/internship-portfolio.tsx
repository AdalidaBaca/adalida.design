import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import InternshipRow from 'components/portfolio_page/internship_row'
import Seo from 'components/seo'
import { INTERNSHIP_PORTFOLIO_SECTIONS } from 'data/internship_portfolio'
import { useCallback, useEffect } from 'react'

const sectionId = (title: string): string => title.toLowerCase().replace(/\s+/g, '-')

const HEADER_SCROLL_OFFSET = 76

const InternshipPortfolio = (): JSX.Element => {
  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior = 'smooth'): void => {
    if (typeof window === 'undefined') {
      return
    }
    const element = document.getElementById(id)
    if (element === null) {
      return
    }
    const top = window.scrollY + element.getBoundingClientRect().top - HEADER_SCROLL_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior })
  }, [])

  useEffect(() => {
    AOS.refresh()

    const hash = window.location.hash.replace('#', '')
    if (hash !== '') {
      requestAnimationFrame(() => {
        scrollToSection(hash, 'auto')
      })
    }
  }, [scrollToSection])

  return (
    <div className="internship-portfolio-page">
      <header className="internship-portfolio-header" data-aos="fade-up">
        <h1 className="internship-portfolio-title">Project ECHO Internship Portfolio</h1>
        <p className="internship-portfolio-intro">
          Documentation, guides, and diagrams from my internship with the Project ECHO Data Team.
        </p>
        <nav className="experiments-nav" aria-label="Portfolio sections">
          {INTERNSHIP_PORTFOLIO_SECTIONS.map(section => (
            <a
              key={section.sectionTitle}
              href={`#${sectionId(section.sectionTitle)}`}
              className="experiments-nav-link"
              onClick={event => {
                event.preventDefault()
                const id = sectionId(section.sectionTitle)
                scrollToSection(id)
                window.history.replaceState(null, '', `#${id}`)
              }}
            >
              {section.sectionTitle}
            </a>
          ))}
        </nav>
      </header>
      {INTERNSHIP_PORTFOLIO_SECTIONS.map(section => (
        <section key={section.sectionTitle} id={sectionId(section.sectionTitle)} className="experiments-section">
          <h2 className="experiments-section-heading" data-aos="fade-up" data-aos-offset="100">
            {section.sectionTitle}
          </h2>
          <ul className="featured-project-list">
            {section.items.map((item, index) => (
              <InternshipRow key={item.title} item={item} sectionTitle={section.sectionTitle} index={index} />
            ))}
          </ul>
        </section>
      ))}
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Project ECHO Internship Portfolio" />

export default InternshipPortfolio
