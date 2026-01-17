import Hackathons from 'components/about_page/hackathons'
import Seo from 'components/seo'
import React from 'react'

const Experiments = (): JSX.Element => {
  return <Hackathons />
}

export const Head = (): JSX.Element => (
  <>
    <Seo title="Experiments" />
  </>
)

export default Experiments
