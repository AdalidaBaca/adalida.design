import { Link } from 'gatsby'
import { IconArrowRight } from '@tabler/icons-react'
import { Projects } from 'projects'
import ContactStrip from '../contact_strip'

const EndCTA = (): JSX.Element => {
  const nextProject = Projects.InvibeEsthetics
  const nextProjectUrl = '/case_studies/invibe_esthetics'

  return (
    <>
      <ContactStrip theme="gaintain" />
      <div className="gaintain-next-project-section" data-aos="fade-up" data-aos-offset="100">
        <div className="gaintain-next-project-content">
          <span className="gaintain-next-project-label">Next Case Study</span>
          <Link to={nextProjectUrl} className="gaintain-next-project-link">
            <span className="gaintain-next-project-name">{nextProject.name}</span>
            <IconArrowRight height="1em" width="1em" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default EndCTA
