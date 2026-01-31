import BadgeButton from 'components/badge_button'
import Image from 'components/image'
import { Projects } from 'projects'
import type { Ref } from 'react'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  const heroImagePath = Projects.InvibeEsthetics.heroImage
  return (
    <>
      <div data-aos="fade-up" className="invibe-esthetics-hero" ref={heroRef}>
        <div className="invibe-esthetics-hero-image">
          <Image path={heroImagePath} alt="Invibe Esthetics" objectFit="contain" />
        </div>
        <div data-aos="fade-up" data-aos-offset="150" className="invibe-esthetics-download-strip">
          <div className="invibe-esthetics-download-content">
            <div className="invibe-esthetics-download-text invibe-esthetics-download-text-animated">
              Invibe Esthetics
            </div>
            <div className="invibe-esthetics-download-buttons">
              <BadgeButton to="https://www.invibeesthetics.com/" className="invibe-esthetics-link-primary">
                Book Now
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="100" className="invibe-esthetics-details" ref={aboutRef}>
        <div className="invibe-esthetics-details-container">
          <div className="invibe-esthetics-details-main">
            <div data-aos="fade-up" data-aos-offset="150" className="invibe-esthetics-details-card">
              <h6 className="invibe-esthetics-details-label">Overview</h6>
              <p className="invibe-esthetics-details-text">
                Invibe is an independent esthetician who relies on online booking and client intake. This project
                focused on fixing the underlying workflow and data architecture so the business could operate reliably
                without added cost or complexity.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="100"
              className="invibe-esthetics-details-card"
            >
              <h6 className="invibe-esthetics-details-label">Role</h6>
              <p className="invibe-esthetics-details-text">
                <strong>Product Designer</strong>
              </p>
              <p className="invibe-esthetics-details-text">
                Led platform migration from Rosy to WIX, redesigned the booking and intake workflow, and owned
                system-level decisions. Partnered with a contract engineer to implement a custom integration.
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
                  <strong>Product designer + contract engineer</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Timeline</h6>
                <p className="invibe-esthetics-details-text">
                  <strong>8 Weeks</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Platform</h6>
                <p className="invibe-esthetics-details-text">
                  <strong>WIX CMS, Tally, Custom webhook</strong>
                </p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Website</h6>
                <p className="invibe-esthetics-details-text">
                  <BadgeButton to="https://www.invibeesthetics.com/" className="invibe-esthetics-link-secondary">
                    invibeesthetics.com
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
