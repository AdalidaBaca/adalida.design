import React from 'react'

import ContactCTA from 'components/about_page/contact_cta'
import Testimonials from 'components/about_page/testimonials'
import Intro from './intro'
import PortfolioContainer from './portfolio_container'
import useIsMobile from 'hooks/use_is_mobile'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      {isMobile !== null && <Intro />}
      <PortfolioContainer />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

export default PortfolioPage
