import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import InternshipCard from 'components/portfolio_page/internship_card'
import Seo from 'components/seo'
import { INTERNSHIP_PORTFOLIO_SECTIONS } from 'data/internship_portfolio'
import { useCallback, useEffect } from 'react'

const sectionId = (title: string): string => title.toLowerCase().replace(/\s+/g, '-')
const getScrollOffset = (): number => {
  // Fixed header is 56px; keep breathing room so section heading is fully visible.
  return 84
}

const InternshipPortfolio = (): JSX.Element => {
  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior = 'smooth'): void => {
    if (typeof window === 'undefined') {
      return
    }
    const element = document.getElementById(id)
    if (element === null) {
      return
    }
    const top = window.scrollY + element.getBoundingClientRect().top - getScrollOffset()
    window.scrollTo({ top: Math.max(top, 0), behavior })
  }, [])

  useEffect(() => {
    AOS.refresh()

    // If a hash is present (direct link or back/forward), align with fixed header offset.
    const hash = window.location.hash.replace('#', '')
    if (hash !== '') {
      requestAnimationFrame(() => {
        scrollToSection(hash, 'auto')
      })
    }
  }, [scrollToSection])

  return (
    <div className="internship-portfolio-page" style={{ paddingTop: '72px' }}>
      <header className="internship-portfolio-header" data-aos="fade-up">
        <h1 className="internship-portfolio-title">Project ECHO Internship Portfolio</h1>
        <p className="internship-portfolio-intro">
          Documentation, guides, and diagrams from my internship with the Project ECHO Data Team.
        </p>
        <nav className="internship-portfolio-nav" aria-label="Portfolio sections">
          {INTERNSHIP_PORTFOLIO_SECTIONS.map(section => (
            <a
              key={section.sectionTitle}
              href={`#${sectionId(section.sectionTitle)}`}
              className="internship-portfolio-nav-link"
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
        <section
          key={section.sectionTitle}
          id={sectionId(section.sectionTitle)}
          className="internship-portfolio-section"
        >
          <h2 className="internship-portfolio-section-heading" data-aos="fade-up" data-aos-offset="100">
            {section.sectionTitle}
          </h2>
          <div className="internship-portfolio-grid">
            {section.items.map(item => (
              <InternshipCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
      <ContactCTA variant="project-echo" />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Project ECHO Internship Portfolio" />
export default InternshipPortfolio
