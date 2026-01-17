import React, { useEffect } from 'react'
import AOS from 'aos'

import Seo from 'components/seo'
import Container from 'components/portfolio_page/container'
import ContactCTA from 'components/about_page/contact_cta'

const Timeline = (): JSX.Element => {
  useEffect(() => {
    // Refresh AOS when page loads to ensure cards animate
    AOS.refresh()
  }, [])

  return (
    <div style={{ paddingTop: '72px' }}>
      <div className='featured-projects-heading' data-aos='fade-up'>
        <span>FEATURED CLIENTS</span>
      </div>
      <Container />
      <ContactCTA />
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title='Timeline' />
export default Timeline
