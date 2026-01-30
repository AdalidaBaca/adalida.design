import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import InternshipCard from 'components/portfolio_page/internship_card'
import Seo from 'components/seo'
import { INTERNSHIP_PORTFOLIO_SECTIONS } from 'data/internship_portfolio'
import { useEffect } from 'react'

const sectionId = (title: string): string =>
  title.toLowerCase().replace(/\s+/g, '-')

const InternshipPortfolio = (): JSX.Element => {
  useEffect(() => {
    AOS.refresh()
  }, [])

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
