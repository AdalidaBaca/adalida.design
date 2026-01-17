import { IconBrandLinkedin, IconMailFilled } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import React from 'react'

const ContactCTA = (): JSX.Element => {
  return (
    <div className="contact-cta-section" data-aos="fade-up" data-aos-offset="100">
      <div className="contact-cta-container">
        <div className="contact-cta-content">
          <h3 className="contact-cta-heading">Let's book an intro call</h3>
          <p className="contact-cta-description">
            Have a project in mind? Let's have coffee and chat about how we can work together.
          </p>
          <div className="contact-cta-buttons">
            <BadgeButton to="https://www.linkedin.com/in/adalidabaca/">
              <IconBrandLinkedin height="1em" width="1em" />
              &nbsp; MESSAGE ON LINKEDIN
            </BadgeButton>
            <BadgeButton to="mailto:hi@adalida.design">
              <IconMailFilled height="1em" width="1em" />
              &nbsp; SEND EMAIL
            </BadgeButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCTA
