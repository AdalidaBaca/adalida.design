import React from 'react'

import Hackathons from 'components/about_page/hackathons'
import Seo from 'components/seo'

const Experiments = (): JSX.Element => {
  return <Hackathons />
}

export const Head = (): JSX.Element => (
  <>
    <Seo title='Experiments' />
  </>
)

export default Experiments

