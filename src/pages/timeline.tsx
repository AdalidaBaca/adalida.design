import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import Container from 'components/portfolio_page/container'
import SectionHeaderLink from 'components/section_header_link'
import Seo from 'components/seo'
import { useEffect } from 'react'

const WIX_PORTFOLIO_URL = 'https://www.wix.com/studio/community/partners/adalidadesign'

const Timeline = (): JSX.Element => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="clients-page">
      <header className="clients-header" data-aos="fade-up">
        <h1 className="clients-title">Featured Clients</h1>
        <div className="clients-header-row">
          <p className="clients-intro">
            Selected freelance and client work across brand design, marketing, and web — from local studios to national
            organizations.
          </p>
          <SectionHeaderLink to={WIX_PORTFOLIO_URL}>Book Web Design</SectionHeaderLink>
        </div>
      </header>
      <Container />
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Featured Clients" />

export default Timeline
