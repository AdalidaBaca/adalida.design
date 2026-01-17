import { IconArrowNarrowRight, IconBrandLinkedin, IconMailFilled } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import Duck from 'components/duck'
import React from 'react'

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="footer-row">
      <div className="footer-column">
        <div className="footer-logo">
          <h6>ADALIDA.DESIGN</h6>
        </div>
        <div className="footer-links">
          <a
            href="https://adalida.notion.site/A-Heavenly-Read-dfe9351a7e204898a1451de826b3e812"
            className="animated-link"
          >
            Foundations <IconArrowNarrowRight />
          </a>
          <a href="/experiments" className="animated-link">
            Experiments <IconArrowNarrowRight />
          </a>
          <a href="/timeline" className="animated-link">
            Timeline <IconArrowNarrowRight />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-chat-heading">
          <Duck />
          <h6>Let's chat?</h6>
        </div>
        <div className="footer-cta-container">
          <BadgeButton to="https://www.linkedin.com/in/adalidabaca/">
            <IconBrandLinkedin height="1em" width="1em" />
            &nbsp; LINKEDIN
          </BadgeButton>
          <BadgeButton to="mailto:hi@adalida.design">
            <IconMailFilled height="1em" width="1em" />
            &nbsp; EMAIL ADI
          </BadgeButton>
        </div>
      </div>
    </div>
    <div className="footer-row">
      <hr />
    </div>
    <div className="footer-row subtitle-2">
      <div className="footer-column">© 2026</div>
      <div className="footer-column">Built with Cursor and Green Chile</div>
    </div>
  </div>
)

export default Footer
