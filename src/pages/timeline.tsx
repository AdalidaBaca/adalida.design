import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import Container from 'components/portfolio_page/container'
import Seo from 'components/seo'
import { useEffect } from 'react'

const Timeline = (): JSX.Element => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="clients-page">
      <header className="clients-header" data-aos="fade-up">
        <h1 className="clients-title">Featured Clients</h1>
        <p className="clients-intro">
          Selected freelance and client work across brand design, marketing, and web — from local studios to national
          organizations.
        </p>
      </header>
      <Container />
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Featured Clients" />

export default Timeline
