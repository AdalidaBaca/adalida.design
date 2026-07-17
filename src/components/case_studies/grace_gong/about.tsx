import BadgeButton from 'components/badge_button'
import Image from 'components/image'
import { Projects } from 'projects'
import type { Ref } from 'react'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  const project = Projects.SmartVentureMediaWebsite
  return (
    <>
      <div data-aos="fade-up" className="invibe-esthetics-hero" ref={heroRef}>
        <div className="invibe-esthetics-hero-image">
          <Image path={project.heroImage} alt="Grace Gong" objectFit="contain" />
        </div>
        <div data-aos="fade-up" data-aos-offset="150" className="invibe-esthetics-download-strip">
          <div className="invibe-esthetics-download-content">
            <div className="invibe-esthetics-download-top">
              <div className="invibe-esthetics-download-text invibe-esthetics-download-text-animated">Grace Gong</div>
              <div className="invibe-esthetics-download-primary">
                <BadgeButton to="https://www.gracegong.com/" className="invibe-esthetics-link-primary">
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
              <p className="invibe-esthetics-details-text">Content Architecture & Data Systems</p>
              <p className="invibe-esthetics-details-text">
                I designed the data model behind gracegong.com, consolidating three websites into{' '}
                <strong>one structured CMS with a single source of truth</strong> that a{' '}
                <strong>non-technical team runs without a developer</strong>.
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
                Grace Gong is a VC and podcast host: <strong>300+ episodes</strong> across two shows, plus one of the
                Valley&apos;s most curated AI summit series. <strong>Three summits in twelve months</strong>, and the
                whole operation spread across <strong>three separate websites</strong> with no single source of truth.
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
                <p className="invibe-esthetics-details-text">Solo, embedded with founder, EA, content designer</p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Timeline</h6>
                <p className="invibe-esthetics-details-text">Delivered in weeks</p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Scope</h6>
                <p className="invibe-esthetics-details-text">Data model, migration, documentation</p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Platform</h6>
                <p className="invibe-esthetics-details-text">Wix Studio CMS, Velo</p>
              </div>
              <div className="invibe-esthetics-details-meta-item">
                <h6 className="invibe-esthetics-details-label">Website</h6>
                <p className="invibe-esthetics-details-text">
                  <BadgeButton to="https://www.gracegong.com/" className="invibe-esthetics-link-secondary">
                    gracegong.com
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
