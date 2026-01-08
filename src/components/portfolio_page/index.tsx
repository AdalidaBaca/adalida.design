import React from 'react'

import Intro from './intro'
import PortfolioContainer from './portfolio_container'
import Testimonial from './testimonial'
import Thanks from './thanks'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Intro />
      <PortfolioContainer />
      <Testimonial />
      <Thanks />
    </>
  )
}

export default PortfolioPage
