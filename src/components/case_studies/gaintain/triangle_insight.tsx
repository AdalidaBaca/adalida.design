import React from 'react'

import DarkModeContext from 'dark_mode_context'
import HybridImage from 'images/gaintain/hybrid.png'
import NomadImage from 'images/gaintain/nomad.png'
import ProgramGoerImage from 'images/gaintain/program goer.png'

interface PersonaCardProps {
  image: string
  title: string
  subtitle: string
  imageBelow?: boolean
  className?: string
}

const PersonaCard = ({ image, title, subtitle, imageBelow = false, className }: PersonaCardProps): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const classNames = ['persona-card', className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {!imageBelow && (
        <div className='persona-image-container'>
          <img src={image} alt={title} />
        </div>
      )}
      <div className='persona-text-card'>
        <div className='persona-title'>{title}</div>
        <div className='persona-subtitle'>{subtitle}</div>
      </div>
      {imageBelow && (
        <div className='persona-image-container'>
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  )
}

const TriangleInsight = (): JSX.Element => {
  return (
    <div className='persona-cards-container'>
      <div className='persona-row'>
        <PersonaCard
          image={NomadImage}
          title='PROGRAM'
          subtitle='Predefined Plans / Trainer'
          imageBelow={true}
          className='image-below-card'
        />
        <PersonaCard
          image={HybridImage}
          title='NOMAD'
          subtitle='Trains freely, logs as they go'
          imageBelow={true}
          className='image-below-card'
        />
      </div>
      <div className='accountability-gap-row'>
        <div className='accountability-gap-text'>Accountability Gap</div>
      </div>
      <div className='persona-row'>
        <PersonaCard
          image={ProgramGoerImage}
          title='HYBRID'
          subtitle='Mix of programs / trains freely'
          className='hybrid-card'
        />
      </div>
    </div>
  )
}

export default TriangleInsight
