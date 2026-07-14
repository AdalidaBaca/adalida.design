import useIsMobile from 'hooks/use_is_mobile'
import ConstraintDrivenPlanning from './constraint_driven_planning'
import ContactCTA from './contact_cta'
import GitHubCalendar from './github_calendar'
import HowIThink from './how_i_think'
import Intro from './intro'
import Resources from './resources'
import Toolkit from './toolkit'

const AboutPage = (): JSX.Element => {
  const isMobile = useIsMobile()

  return (
    <div className="about-page">
      {isMobile !== null && <Intro />}
      <GitHubCalendar />
      <Resources />
      <HowIThink />
      <ConstraintDrivenPlanning />
      <Toolkit />
      <ContactCTA />
    </div>
  )
}

export default AboutPage
