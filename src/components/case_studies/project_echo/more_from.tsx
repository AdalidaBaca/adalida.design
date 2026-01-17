import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'

import BadgeButton from 'components/badge_button'
import { Projects } from 'projects'

const MoreFrom = (): JSX.Element => {
  const nextProject = Projects.Gaintain
  const nextProjectUrl = '/case_studies/gaintain'

  return (
    <>
      <div className='project-echo-end-cta-section' data-aos='fade-up' data-aos-offset='100'>
        <div className='project-echo-end-cta-container'>
          <div className='project-echo-end-cta-content'>
            <h3 className='project-echo-end-cta-heading'>More work from Project ECHO</h3>
            <p className='project-echo-end-cta-description'>
              Selected dashboards, documentation, and internal tools from my internship at Project ECHO.
            </p>
            <div className='project-echo-end-cta-buttons'>
              <BadgeButton to='https://adalidabaca.wixsite.com/internship-portfolio' className='project-echo-link-primary'>
                VIEW PORTFOLIO
              </BadgeButton>
              <BadgeButton to='https://www.linkedin.com/in/adalidabaca/'>
                CHAT WITH ADI
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div className='project-echo-next-project-section' data-aos='fade-up' data-aos-offset='100'>
        <div className='project-echo-next-project-content'>
          <span className='project-echo-next-project-label'>Next Case Study</span>
          <a href={nextProjectUrl} className='project-echo-next-project-link'>
            <span className='project-echo-next-project-name'>{nextProject.name}</span>
            <IconArrowRight height='1em' width='1em' />
          </a>
        </div>
      </div>
    </>
  )
}

export default MoreFrom
