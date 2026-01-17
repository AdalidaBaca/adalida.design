import MainPage from 'components'
import Seo from 'components/seo'
import Profile from 'components/seo/profile'
import React from 'react'

const About = (): JSX.Element => {
  return <MainPage />
}

export const Head = (): JSX.Element => (
  <>
    <Seo title="About" />
    <Profile />
  </>
)

export default About
