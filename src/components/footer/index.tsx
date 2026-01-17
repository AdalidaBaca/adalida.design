import { IconArrowNarrowRight } from '@tabler/icons-react'

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="footer-row footer-bottom">
      <div className="footer-column">
        <div className="footer-logo">
          <h6>ADALIDA.DESIGN</h6>
        </div>
        <div className="footer-links">
          <a href="/timeline" className="animated-link">
            Clients <IconArrowNarrowRight />
          </a>
          <div className="footer-link-row">
            <a href="/experiments" className="animated-link">
              Experiments <IconArrowNarrowRight />
            </a>
            <span className="footer-spacer" />
            <span className="subtitle-2">© 2026</span>
          </div>
          <div className="footer-link-row">
            <a
              href="https://adalida.notion.site/Adalida-s-B-A-English-Philosophy-13634efdeebd4c83ad11fabc7c4f09c0"
              className="animated-link"
            >
              Timeline <IconArrowNarrowRight />
            </a>
            <span className="footer-spacer" />
            <span className="subtitle-2">Built with Cursor and Green Chile</span>
          </div>
          <a href="/experiments" className="animated-link footer-link-desktop">
            Experiments <IconArrowNarrowRight />
          </a>
          <a
            href="https://adalida.notion.site/Adalida-s-B-A-English-Philosophy-13634efdeebd4c83ad11fabc7c4f09c0"
            className="animated-link footer-link-desktop"
          >
            Timeline <IconArrowNarrowRight />
          </a>
        </div>
      </div>
      <div className="footer-column footer-copyright">
        <div className="subtitle-2">© 2026</div>
        <div className="subtitle-2">Built with Cursor and Green Chile</div>
      </div>
    </div>
  </div>
)

export default Footer
