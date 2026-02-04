import { Link } from 'gatsby'
import { IconArrowRight } from '@tabler/icons-react'
import { Projects } from 'projects'
import ContactStrip from '../contact_strip'

const MoreFrom = (): JSX.Element => {
  const nextProject = Projects.ProjectEcho
  const nextProjectUrl = '/case_studies/project_echo'

  return (
    <>
      <ContactStrip theme="invibe-esthetics" />
      <div className="invibe-esthetics-next-project-section" data-aos="fade-up" data-aos-offset="100">
        <div className="invibe-esthetics-next-project-content">
          <span className="invibe-esthetics-next-project-label">Next Case Study</span>
          <Link to={nextProjectUrl} className="invibe-esthetics-next-project-link">
            <span className="invibe-esthetics-next-project-name">{nextProject.name}</span>
            <IconArrowRight height="1em" width="1em" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default MoreFrom
