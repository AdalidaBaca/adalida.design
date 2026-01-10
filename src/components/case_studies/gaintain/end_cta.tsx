import { IconMailFilled, IconBrandLinkedin } from '@tabler/icons-react'
import React, { useContext } from 'react'

import BadgeButton from 'components/badge_button'

import Context from '../context'

const EndCTA = (): JSX.Element => {
  const color = useContext(Context)?.colors?.primary

  return (
    <div className='gaintain-end-cta-section' data-aos='fade-up' data-aos-offset='100'>
      <div className='gaintain-end-cta-container'>
        <div className='gaintain-end-cta-content'>
          <h3 className='gaintain-end-cta-heading'>Ready to ship your product?</h3>
          <p className='gaintain-end-cta-description'>
            Let's discuss how we can bring your vision to life with thoughtful design and rapid iteration.
          </p>
          <div className='gaintain-end-cta-buttons'>
            <BadgeButton 
              to='https://www.linkedin.com/in/adalidabaca/'
              style={color !== undefined ? { background: color, color: '#F5F5F5' } : {}}
            >
              <IconBrandLinkedin height='1em' width='1em' />&nbsp; MESSAGE ON LINKEDIN
            </BadgeButton>
            <BadgeButton to='mailto:hi@adalida.design'>
              <IconMailFilled height='1em' width='1em' />&nbsp; SEND EMAIL
            </BadgeButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndCTA
