import BadgeButton from 'components/badge_button'

type ContactStripTheme = 'gaintain' | 'invibe-esthetics' | 'project-echo'

interface Props {
  theme: ContactStripTheme
}

const ContactStrip = ({ theme }: Props): JSX.Element => (
  <div className={`${theme}-contact-strip`} data-aos="fade-up" data-aos-offset="100">
    <div className={`${theme}-contact-strip-content`}>
      <div className={`${theme}-contact-strip-copy`}>
        <h3 className={`${theme}-contact-strip-heading`}>Want an in-depth walkthrough?</h3>
        <p className={`${theme}-contact-strip-description`}>
          Get in touch for a detailed walkthrough or to discuss next steps.
        </p>
      </div>
      <BadgeButton to="mailto:hi@adalida.design" className={`${theme}-contact-strip-cta`}>
        Let&apos;s chat
      </BadgeButton>
    </div>
  </div>
)

ContactStrip.displayName = 'ContactStrip'

export default ContactStrip
