import AOS from 'aos'
import ContactCTA from 'components/about_page/contact_cta'
import Container from 'components/portfolio_page/container'
import Seo from 'components/seo'
import React, { useEffect } from 'react'

const Timeline = (): JSX.Element => {
  useEffect(() => {
    // Refresh AOS when page loads to ensure cards animate
    AOS.refresh()
  }, [])

  return (
    <div style={{ paddingTop: '72px' }}>
      <div className="featured-projects-heading" data-aos="fade-up">
        <span>FEATURED CLIENTS</span>
      </div>
      <Container />
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Timeline" />
export default Timeline
