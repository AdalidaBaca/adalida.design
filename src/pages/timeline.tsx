import Container from 'components/portfolio_page/container'
import Thanks from 'components/portfolio_page/thanks'
import Seo from 'components/seo'
import React from 'react'

const Timeline = (): JSX.Element => {
  return (
    <>
      <Container />
      <Thanks />
    </>
  )
}

export const Head = (): JSX.Element => <Seo title="Timeline" />
export default Timeline
