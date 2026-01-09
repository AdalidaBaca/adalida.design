import React from 'react'

import Intro from './intro'
import PortfolioContainer from './portfolio_container'
import Thanks from './thanks'
import Testimonials from 'components/about_page/testimonials'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Intro />
      <PortfolioContainer />
      <Testimonials />
      <Thanks />
    </>
  )
}

export default PortfolioPage
