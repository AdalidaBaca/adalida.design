import BadgeButton from 'components/badge_button'

import ProjectEchoImage from 'images/works/project_echo.webp'
import { Projects } from 'projects'
import React, { type Ref } from 'react'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  const _backgroundImage = Projects.ProjectEcho.colors.primary
  return (
    <>
      <div data-aos="fade-up" className="project-echo-hero" ref={heroRef}>
        <div className="project-echo-hero-image">
          <img src={ProjectEchoImage} alt="Visualizing Overlap in Intersectional Health Data" />
        </div>
        <div data-aos="fade-up" data-aos-offset="150" className="project-echo-download-strip">
          <div className="project-echo-download-content">
            <p className="project-echo-download-text">Project ECHO</p>
            <div className="project-echo-download-buttons">
              <BadgeButton to="https://projectecho.unm.edu" className="project-echo-link-primary">
                Visit Website
              </BadgeButton>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="100" className="project-echo-details" ref={aboutRef}>
        <div className="project-echo-details-container">
          <div className="project-echo-details-main">
            <div data-aos="fade-up" data-aos-offset="150" className="project-echo-details-card">
              <h6 className="project-echo-details-label">Overview</h6>
              <p className="project-echo-details-text">
                A researcher at Project ECHO needed a way to present intersectional health data involving{' '}
                <strong>three vulnerable populations:</strong> gender minorities, individuals with unstable housing, and
                IV drug users. The work was part of an internal effort to improve how complex datasets were communicated
                across research, reporting, and funding contexts.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="100" className="project-echo-details-card">
              <h6 className="project-echo-details-label">Role</h6>
              <p className="project-echo-details-text">
                <strong>Contributor</strong>
              </p>
              <p className="project-echo-details-text">
                I worked as part of the <strong>Data Team</strong> at Project ECHO, focusing on{' '}
                <strong>data visualization design and implementation</strong>.
              </p>
            </div>
          </div>
          <div className="project-echo-details-sidebar">
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="50"
              className="project-echo-details-meta-grid"
            >
              <div className="project-echo-details-meta-item">
                <h6 className="project-echo-details-label">Organization</h6>
                <p className="project-echo-details-text">
                  <strong>Project ECHO</strong>
                </p>
              </div>
              <div className="project-echo-details-meta-item">
                <h6 className="project-echo-details-label">Team</h6>
                <p className="project-echo-details-text">
                  <strong>Data Team</strong>
                </p>
              </div>
              <div className="project-echo-details-meta-item">
                <h6 className="project-echo-details-label">Year</h6>
                <p className="project-echo-details-text">
                  <strong>2020</strong>
                </p>
              </div>
              <div className="project-echo-details-meta-item">
                <h6 className="project-echo-details-label">Platform</h6>
                <p className="project-echo-details-text">
                  <strong>Web (browser-based visualization)</strong>
                </p>
              </div>
              <div className="project-echo-details-meta-item">
                <h6 className="project-echo-details-label">Final Result:</h6>
                <p className="project-echo-details-text">
                  <BadgeButton
                    to="https://echo.unm.edu/intersectionality-visualization/index.html"
                    className="project-echo-link-secondary"
                  >
                    View Visualization
                  </BadgeButton>
                  <small style={{ fontStyle: 'italic', display: 'block', marginTop: '0.5em', opacity: 0.7 }}>
                    with mock data
                  </small>
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
