import React from 'react'

import Intro from './intro'
import Testimonials from './testimonials'
import HowIThink from './how_i_think'
import Resources from './resources'
import GitHubCalendar from './github_calendar'
import Thanks from './thanks'
import ToolsCarousel from 'components/tools_carousel'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Intro />
      <ToolsCarousel />
      <HowIThink />
      <Testimonials />
      <Resources />
      <GitHubCalendar />
      <Thanks />
    </div>
  )
}

export default AboutPage
