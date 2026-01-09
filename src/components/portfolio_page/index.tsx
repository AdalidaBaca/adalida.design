import React from 'react'

import Intro from './intro'
import PortfolioContainer from './portfolio_container'
import Testimonials from 'components/about_page/testimonials'
import ContactCTA from 'components/about_page/contact_cta'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Intro />
      <PortfolioContainer />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

export default PortfolioPage
