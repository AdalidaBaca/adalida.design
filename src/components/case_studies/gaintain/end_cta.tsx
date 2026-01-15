import { IconDeviceMobile, IconUserPlus, IconArrowRight } from '@tabler/icons-react'
import React, { useContext } from 'react'

import BadgeButton from 'components/badge_button'
import { Projects } from 'projects'

import Context from '../context'

const EndCTA = (): JSX.Element => {
  const color = useContext(Context)?.colors?.primary
  const nextProject = Projects.ProjectEcho
  const nextProjectUrl = '/case_studies/project_echo'

  if (!nextProject) {
    return (
      <div className='gaintain-end-cta-section' data-aos='fade-up' data-aos-offset='100'>
        <div className='gaintain-end-cta-container'>
          <div className='gaintain-end-cta-content'>
            <h3 className='gaintain-end-cta-heading'>Try GainTain</h3>
            <p className='gaintain-end-cta-description'>
              Download the app or join the pilot program to experience AI-guided fitness tracking.
            </p>
            <div className='gaintain-end-cta-buttons'>
              <BadgeButton 
                to='https://gaintain.co/app'
                style={color !== undefined ? { background: color, color: '#F5F5F5' } : {}}
              >
                <IconDeviceMobile height='1em' width='1em' />&nbsp; DOWNLOAD
              </BadgeButton>
              <BadgeButton to='https://gaintain.netlify.app'>
                <IconUserPlus height='1em' width='1em' />&nbsp; JOIN PILOT
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='gaintain-end-cta-section' data-aos='fade-up' data-aos-offset='100'>
        <div className='gaintain-end-cta-container'>
          <div className='gaintain-end-cta-content'>
            <h3 className='gaintain-end-cta-heading'>Try GainTain</h3>
            <p className='gaintain-end-cta-description'>
              Download the app or join the pilot program to experience AI-guided fitness tracking.
            </p>
            <div className='gaintain-end-cta-buttons'>
              <BadgeButton 
                to='https://gaintain.co/app'
                style={color !== undefined ? { background: color, color: '#F5F5F5' } : {}}
              >
                <IconDeviceMobile height='1em' width='1em' />&nbsp; DOWNLOAD
              </BadgeButton>
              <BadgeButton to='https://gaintain.netlify.app'>
                <IconUserPlus height='1em' width='1em' />&nbsp; JOIN PILOT
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div className='gaintain-next-project-section' data-aos='fade-up' data-aos-offset='100'>
        <div className='gaintain-next-project-content'>
          <span className='gaintain-next-project-label'>Next Case Study</span>
          <a href={nextProjectUrl} className='gaintain-next-project-link'>
            <span className='gaintain-next-project-name'>{nextProject.name}</span>
            <IconArrowRight height='1em' width='1em' />
          </a>
        </div>
      </div>
    </>
  )
}

export default EndCTA
