import { IconArrowRight } from '@tabler/icons-react'
import { Link } from 'gatsby'
import { Projects } from 'projects'
import ContactStrip from '../contact_strip'

const MoreFrom = (): JSX.Element => {
  const nextProject = Projects.Gaintain
  const nextProjectUrl = '/case_studies/gaintain'

  return (
    <>
      <ContactStrip theme="project-echo" />
      <div className="project-echo-next-project-section" data-aos="fade-up" data-aos-offset="100">
        <div className="project-echo-next-project-content">
          <span className="project-echo-next-project-label">Next Case Study</span>
          <Link to={nextProjectUrl} className="project-echo-next-project-link">
            <span className="project-echo-next-project-name">{nextProject.name}</span>
            <IconArrowRight height="1em" width="1em" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default MoreFrom
