import { IconArrowRight } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import { Projects } from 'projects'

const MoreFrom = (): JSX.Element => {
  const nextProject = Projects.Gaintain
  const nextProjectUrl = '/case_studies/gaintain'

  return (
    <>
      <div className="invibe-esthetics-end-cta-section" data-aos="fade-up" data-aos-offset="100">
        <div className="invibe-esthetics-end-cta-container">
          <div className="invibe-esthetics-end-cta-content">
            <h3 className="invibe-esthetics-end-cta-heading">More Client Work</h3>
            <p className="invibe-esthetics-end-cta-description">
              View more of my client work from adalida.design.
            </p>
            <div className="invibe-esthetics-end-cta-buttons">
              <BadgeButton
                to="/timeline"
                className="invibe-esthetics-link-primary"
              >
                VIEW CLIENT WORK
              </BadgeButton>
              <BadgeButton to="https://www.linkedin.com/in/adalidabaca/">CHAT WITH ADI</BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="invibe-esthetics-next-project-section" data-aos="fade-up" data-aos-offset="100">
        <div className="invibe-esthetics-next-project-content">
          <span className="invibe-esthetics-next-project-label">Next Case Study</span>
          <a href={nextProjectUrl} className="invibe-esthetics-next-project-link">
            <span className="invibe-esthetics-next-project-name">{nextProject.name}</span>
            <IconArrowRight height="1em" width="1em" />
          </a>
        </div>
      </div>
    </>
  )
}

export default MoreFrom
