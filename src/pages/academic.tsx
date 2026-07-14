import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import AcademicArchive from 'components/academic_page/archive'
import Seo from 'components/seo'
import { useEffect } from 'react'

const Academic = (): JSX.Element => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="academic-page" style={{ paddingTop: '72px' }}>
      <header className="academic-page-header" data-aos="fade-up">
        <div className="academic-page-heading">
          <span className="academic-page-duration-badge">2016–2020</span>
          <h1 className="academic-page-title">B.A. English–Philosophy</h1>
          <p className="academic-page-subtitle">The University of New Mexico</p>
        </div>
      </header>
      <AcademicArchive />
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => (
  <Seo
    title="Academic Journey"
    description="B.A. English & Philosophy (2016–2020), UNM — philosophy papers, English coursework, visual rhetoric, and intersection projects at Project ECHO."
  />
)

export default Academic
