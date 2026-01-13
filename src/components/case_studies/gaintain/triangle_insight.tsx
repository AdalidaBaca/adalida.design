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
      <div className='persona-text-card'>
        <div className='persona-image-container'>
          <img src={image} alt={title} />
        </div>
        <div className='persona-title'>{title}</div>
        <div className='persona-subtitle'>{subtitle}</div>
      </div>
    </div>
  )
}

const TriangleInsight = (): JSX.Element => {
  return (
    <div className='persona-cards-container'>
      <div className='persona-row persona-row-top'>
        <div className='persona-card image-below-card drop-off-card'>
          <div className='persona-text-card'>
            <div className='persona-image-container drop-off-image-container'>
              <span className='drop-off-x'>x</span>
            </div>
            <div className='drop-off-text-container'>
              <div className='persona-title'>DROP OFF</div>
              <div className='persona-subtitle'>Life friction break point</div>
            </div>
          </div>
        </div>
      </div>
      <div className='persona-brace-container'>
        <svg className='brace-svg-horizontal' viewBox='0 -30 1000 30' preserveAspectRatio='none'>
          <path
            className='brace-path-horizontal'
            d='M 0 0 C 0 -10, 15 -10, 15 0 h 470 C 500 0, 500 -25, 500 -25 S 500 0, 515 0 h 470 C 1000 0, 1000 -10, 1000 0'
            stroke='#DC2626'
            strokeWidth='8'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='persona-row persona-row-images-inline'>
        <PersonaCard
          image={HybridImage}
          title='NOMAD'
          subtitle='Trains freely, logs as they go'
          imageBelow={false}
          className='image-below-card'
        />
        <PersonaCard
          image={ProgramGoerImage}
          title='HYBRID'
          subtitle='Workout templates / trains freely'
          imageBelow={false}
          className='hybrid-card image-below-card'
        />
        <PersonaCard
          image={NomadImage}
          title='PROGRAM'
          subtitle='Trainer / predefined plans'
          imageBelow={false}
          className='image-below-card'
        />
      </div>
    </div>
  )
}

export default TriangleInsight
