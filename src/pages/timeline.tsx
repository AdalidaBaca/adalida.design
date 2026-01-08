import React from 'react'

import Seo from 'components/seo'
import Container from 'components/portfolio_page/container'
import Thanks from 'components/portfolio_page/thanks'

const Timeline = (): JSX.Element => {
  return (
    <>
      <Container />
      <Thanks />
    </>
  )
}

export const Head = (): JSX.Element => <Seo title='Timeline' />
export default Timeline
