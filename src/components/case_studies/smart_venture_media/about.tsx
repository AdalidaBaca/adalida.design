import BadgeButton from 'components/badge_button'
import Image from 'components/image'
import { Projects } from 'projects'
import type { Ref } from 'react'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  const heroImagePath = Projects.SmartVentureMedia.heroImage
  return (
    <>
      <div data-aos="fade-up" className="invibe-esthetics-hero" ref={heroRef}>
        <div className="invibe-esthetics-hero-image">
          <Image path={heroImagePath} alt="Smart Venture Media" objectFit="contain" />
        </div>
        <div data-aos="fade-up" data-aos-offset="150" className="invibe-esthetics-download-strip">
          <div className="invibe-esthetics-download-content">
            <div className="invibe-esthetics-download-top">
              <div className="invibe-esthetics-download-text invibe-esthetics-download-text-animated">
                Smart Venture Media
              </div>
              <div className="invibe-esthetics-download-primary">
                <BadgeButton to="https://www.smartventuremedia.com/" className="invibe-esthetics-link-primary">
                  Visit Website
                </BadgeButton>
              </div>
            </div>
            <div className="invibe-esthetics-download-secondary-block">
              <p className="invibe-esthetics-download-description">View more of my client work from Adalida.Design.</p>
              <BadgeButton to="/timeline" className="invibe-esthetics-download-secondary">
                View Client Work
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="100" className="invibe-esthetics-details" ref={aboutRef}>
        <div className="invibe-esthetics-details-container">
          <div className="invibe-esthetics-details-main">
            <div data-aos="fade-up" data-aos-offset="150" className="invibe-esthetics-details-card">
              <h6 className="invibe-esthetics-details-label">Role</h6>
              <p className="invibe-esthetics-details-text">
                <strong>Systems Designer and Event Operator</strong>
              </p>
              <p className="invibe-esthetics-details-text">
                I designed the operational infrastructure for Smart Venture Media&apos;s AI Leadership Summit and ran
                day-of execution across multiple summits.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="100"
              className="invibe-esthetics-details-card"
            >
              <h6 className="invibe-esthetics-details-label">Overview</h6>
              <p className="invibe-esthetics-details-text">
                Smart Venture Media hosts AI leadership summits and executive events in San Francisco. I designed the
                website, CMS, and the operational infrastructure behind the summit events.
              </p>
              <p className="invibe-esthetics-details-text">
                As the summits grew, so did the complexity. More speakers, more panels, more sponsors, unvetted
                volunteers, and one ship date in a room full of a16z, Sequoia, and Bessemer partners at the SVB Center
                off Market.
              </p>
            </div>
          </div>
          <div className="invibe-esthetics-details-sidebar">
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="50"
              className="invibe-esthetics-details-meta-grid"
            >
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Team</h6>
                <p className="invibe-esthetics-details-text">
                  <strong>Solo, embedded with founder</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Timeline</h6>
                <p className="invibe-esthetics-details-text">
                  <strong>1 year across 3 summits</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Platform</h6>
                <p className="invibe-esthetics-details-text">
                  <strong>Google Sheets, Wix CMS, Day-of Operations</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Website</h6>
                <p className="invibe-esthetics-details-text">
                  <BadgeButton to="https://www.smartventuremedia.com/" className="invibe-esthetics-link-secondary">
                    smartventuremedia.com
                  </BadgeButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

About.displayName = 'About'

export default About
