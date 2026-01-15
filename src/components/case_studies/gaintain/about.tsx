import React, { type Ref } from 'react'

import AboutHeroImage from 'images/gaintain/Hero Photos/about.png'
import BadgeButton from 'components/badge_button'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  return (
    <>
      <div data-aos='fade-up' className='gaintain-hero' ref={heroRef}>
        <div className='intro-videos'>
          <img className='gaintain-hero-image' src={AboutHeroImage} alt='GainTain app preview' />
        </div>
      </div>
      <div data-aos='fade-up' data-aos-offset='100' className='gaintain-details' ref={aboutRef}>
      <div data-aos='fade-up' data-aos-offset='150' className='gaintain-download-strip'>
        <div className='gaintain-download-content'>
          <p className='gaintain-download-text'>GainTain</p>
          <div className='gaintain-download-buttons'>
            <BadgeButton to='https://gaintain.co/app' className='gaintain-link-primary'>Download on the App Store</BadgeButton>
          </div>
        </div>
      </div>
      <div className='gaintain-details-container'>
        <div className='gaintain-details-main'>
          <div data-aos='fade-up' data-aos-offset='150' className='gaintain-details-card'>
            <h6 className='gaintain-details-label'>Overview</h6>
            <p className='gaintain-details-text'>
              GainTain is an <strong>AI-guided fitness app for weightlifters</strong> that pairs <strong>workout personalization with designed accountability</strong> to <strong>reduce drop-off</strong>.
            </p>
          </div>
          <div data-aos='fade-up' data-aos-offset='150' data-aos-delay='100' className='gaintain-details-card'>
            <h6 className='gaintain-details-label'>Role</h6>
            <p className='gaintain-details-text'>
              <strong>CEO & Product Designer</strong>
            </p>
            <p className='gaintain-details-text'>
              I led <strong>product strategy, UX, and front-end interaction design</strong>, working closely with my engineering co-founder on <strong>data models and iOS architecture</strong>.
            </p>
          </div>
        </div>
        <div className='gaintain-details-sidebar'>
          <div data-aos='fade-up' data-aos-offset='150' data-aos-delay='50' className='gaintain-details-meta-grid'>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Team</h6>
              <p className='gaintain-details-text'><strong>Two-person founding team</strong></p>
            </div>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Timeline</h6>
              <p className='gaintain-details-text'><strong>8 months total</strong><br />9 weeks to ship the initial MVP</p>
            </div>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Platform</h6>
              <p className='gaintain-details-text'><strong>iOS</strong></p>
            </div>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Website</h6>
              <p className='gaintain-details-text'>
                <BadgeButton to='https://gaintain.co' className='gaintain-link-secondary'>gaintain.co</BadgeButton>
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
