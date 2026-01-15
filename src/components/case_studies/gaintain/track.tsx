import React from 'react'

import TrackImage from 'images/gaintain/Hero Photos/track.webp'
import { Projects } from 'projects'

const backgroundImage = Projects.Gaintain.colors.primary

const Track = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-about'>
      <h3><strong className='case-study-gradient-text' style={{ backgroundImage }}>GAINTAIN</strong></h3>
      <h5>Where Gains are Data-Driven</h5>
      <img src={TrackImage} alt='Where Gains are Data-Driven' />
    </div>
  )
}

export default Track
