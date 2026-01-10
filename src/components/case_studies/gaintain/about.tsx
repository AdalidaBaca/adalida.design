import React, { type Ref } from 'react'

import IntroVideo from 'videos/gaintain/intro.mp4'
import IntroLoopVideo from 'videos/gaintain/intro_loop.mp4'

import IntroVideos from '../intro_videos'
import BadgeButton from 'components/badge_button'

interface Props {
  heroRef: Ref<HTMLDivElement>
  aboutRef: Ref<HTMLDivElement>
}

const About = ({ heroRef, aboutRef }: Props): JSX.Element => {
  return (
    <>
      <div data-aos='fade-up' className='gaintain-hero' ref={heroRef}>
        <IntroVideos videos={[IntroVideo, IntroLoopVideo]} />
      </div>
      <div data-aos='fade-up' data-aos-offset='100' className='gaintain-details' ref={aboutRef}>
      <div data-aos='fade-up' data-aos-offset='150' className='gaintain-download-strip'>
        <div className='gaintain-download-content'>
          <p className='gaintain-download-text'>GainTain</p>
          <div className='gaintain-download-buttons'>
            <BadgeButton to='https://gaintain.co/app' className='gaintain-link-primary'>Download</BadgeButton>
          </div>
        </div>
      </div>
      <div className='gaintain-details-container'>
        <div className='gaintain-details-main'>
          <div data-aos='fade-up' data-aos-offset='150' className='gaintain-details-card'>
            <h6 className='gaintain-details-label'>Overview</h6>
            <p className='gaintain-details-text'>
              GainTain is an AI-guided fitness app for weightlifters that pairs workout personalization with designed accountability.
            </p>
          </div>
          <div data-aos='fade-up' data-aos-offset='150' data-aos-delay='100' className='gaintain-details-card'>
            <h6 className='gaintain-details-label'>Role</h6>
            <p className='gaintain-details-text'>
              CEO and Product Designer. I led product strategy, UX design, and front-end interaction design, working closely with an engineering co-founder on data models and iOS architecture.
            </p>
          </div>
        </div>
        <div className='gaintain-details-sidebar'>
          <div data-aos='fade-up' data-aos-offset='150' data-aos-delay='50' className='gaintain-details-meta-grid'>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Team</h6>
              <p className='gaintain-details-text'>2 person founding team</p>
            </div>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Timeline</h6>
              <p className='gaintain-details-text'>9 weeks to launch</p>
            </div>
            <div className='gaintain-details-meta-item'>
              <h6 className='gaintain-details-label'>Platform</h6>
              <p className='gaintain-details-text'>iOS</p>
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
