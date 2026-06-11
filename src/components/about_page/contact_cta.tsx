import BadgeButton from 'components/badge_button'

const ContactCTA = (): JSX.Element => {
  return (
    <div className="contact-cta-section">
      <section
        className="contact-section contact-cta"
        aria-label="Let's talk"
        data-aos="fade-up"
        data-aos-offset="80"
      >
        <div className="contact-cta-card">
          <div className="contact-cta-copy">
            <h2 className="contact-cta-title">Let&apos;s talk</h2>
            <p className="contact-cta-lead">
              Have a messy problem? Let&apos;s talk through the constraints.
            </p>
          </div>
          <div className="contact-cta-actions">
            <div className="contact-cta-buttons">
              <BadgeButton to="mailto:hi@adalida.design">Email Me</BadgeButton>
              <BadgeButton to="https://www.linkedin.com/in/adalidabaca/" className="badge-frosted">
                LinkedIn
              </BadgeButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactCTA
