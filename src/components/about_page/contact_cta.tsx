import { IconBrandLinkedin, IconMailFilled } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import Duck from 'components/duck'

interface ContactCTAProps {
  variant?: 'default' | 'project-echo'
}

const ContactCTA = ({ variant = 'default' }: ContactCTAProps): JSX.Element => {
  const sectionClass =
    variant === 'project-echo'
      ? 'contact-cta-section contact-cta-section--project-echo'
      : 'contact-cta-section'
  return (
    <div className={sectionClass} data-aos="fade-up" data-aos-offset="100">
      <div className="contact-cta-container">
        <div className="contact-cta-content">
          <div className="contact-cta-header">
            <Duck />
            <h3 className="contact-cta-heading">Let's book an intro call</h3>
          </div>
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
