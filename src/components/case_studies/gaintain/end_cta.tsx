import { IconArrowRight, IconUserPlus } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import UniversalLink from 'components/universal_link'
import AppStoreBadge from 'images/gaintain/Community/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import { Projects } from 'projects'

const EndCTA = (): JSX.Element => {
  const nextProject = Projects.InvibeEsthetics
  const nextProjectUrl = '/case_studies/invibe_esthetics'

  if (!nextProject) {
    return (
      <div className="gaintain-end-cta-section" data-aos="fade-up" data-aos-offset="100">
        <div className="gaintain-end-cta-container">
          <div className="gaintain-end-cta-content">
            <h3 className="gaintain-end-cta-heading">Join the Pilot </h3>
            <p className="gaintain-end-cta-description">
            Join 100+ lifters testing commitment-driven training.
            </p>
            <div className="gaintain-end-cta-buttons">
              <UniversalLink
                to="https://gaintain.co/app"
                className="gaintain-app-store-badge-link"
                aria-label="Download GainTain on the App Store"
              >
                <img src={AppStoreBadge} alt="Download on the App Store" className="gaintain-app-store-badge" />
              </UniversalLink>
              <BadgeButton to="https://gaintain.netlify.app">
                <IconUserPlus height="1em" width="1em" />
                &nbsp; JOIN PILOT
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="gaintain-end-cta-section" data-aos="fade-up" data-aos-offset="100">
        <div className="gaintain-end-cta-container">
          <div className="gaintain-end-cta-content">
            <h3 className="gaintain-end-cta-heading">Join the Pilot</h3>
            <p className="gaintain-end-cta-description">
            Join 100+ lifters testing commitment-driven training.
            </p>
            <div className="gaintain-end-cta-buttons">
              <UniversalLink
                to="https://gaintain.co/app"
                className="gaintain-app-store-badge-link"
                aria-label="Download GainTain on the App Store"
              >
                <img src={AppStoreBadge} alt="Download on the App Store" className="gaintain-app-store-badge" />
              </UniversalLink>
              <BadgeButton to="https://gaintain.netlify.app">
                <IconUserPlus height="1em" width="1em" />
                &nbsp; JOIN PILOT
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="gaintain-next-project-section" data-aos="fade-up" data-aos-offset="100">
        <div className="gaintain-next-project-content">
          <span className="gaintain-next-project-label">Next Case Study</span>
          <a href={nextProjectUrl} className="gaintain-next-project-link">
            <span className="gaintain-next-project-name">{nextProject.name}</span>
            <IconArrowRight height="1em" width="1em" />
          </a>
        </div>
      </div>
    </>
  )
}

export default EndCTA
