import React from 'react'

import Intro from './intro'
import HowIThink from './how_i_think'
import Resources from './resources'
import GitHubCalendar from './github_calendar'
import ContactCTA from './contact_cta'
import ToolsCarousel from 'components/tools_carousel'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Intro />
      <ToolsCarousel />
      <HowIThink />
      <Resources />
      <GitHubCalendar />
      <ContactCTA />
    </div>
  )
}

export default AboutPage
