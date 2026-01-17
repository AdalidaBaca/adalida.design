import ToolsCarousel from 'components/tools_carousel'
import useIsMobile from 'hooks/use_is_mobile'
import React from 'react'
import ContactCTA from './contact_cta'
import GitHubCalendar from './github_calendar'
import HowIThink from './how_i_think'
import Intro from './intro'
import Resources from './resources'

const AboutPage = (): JSX.Element => {
  const isMobile = useIsMobile()

  return (
    <div className="about-page">
      {isMobile !== null && <Intro />}
      <ToolsCarousel />
      <HowIThink />
      <Resources />
      <GitHubCalendar />
      <ContactCTA />
    </div>
  )
}

export default AboutPage
