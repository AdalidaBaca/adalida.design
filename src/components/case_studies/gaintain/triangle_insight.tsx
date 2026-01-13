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
      <div className='persona-image-container'>
        <img src={image} alt={title} />
      </div>
      <div className='persona-text-card'>
        <div className='persona-title'>{title}</div>
        <div className='persona-subtitle'>{subtitle}</div>
      </div>
    </div>
  )
}

const TriangleInsight = (): JSX.Element => {
  return (
    <div className='persona-cards-container'>
      <div className='persona-row persona-row-images-inline'>
        <PersonaCard
          image={NomadImage}
          title='PROGRAM'
          subtitle='Predefined Plans / Trainer'
          imageBelow={false}
          className='image-below-card'
        />
        <svg className='persona-arrow' viewBox='0 0 100 50' preserveAspectRatio='xMidYMid meet'>
          <defs>
            <linearGradient id='gaintain-gradient-arrow-inline' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
              <stop offset='0%' stopColor='#E65C00' />
              <stop offset='100%' stopColor='#F9D423' />
            </linearGradient>
          </defs>
          <path
            d='M 10 25 L 90 25'
            fill='none'
            stroke='url(#gaintain-gradient-arrow-inline)'
            strokeWidth='2.5'
            strokeLinecap='round'
            markerEnd='url(#arrowhead-inline)'
          />
          <defs>
            <marker
              id='arrowhead-inline'
              markerWidth='10'
              markerHeight='10'
              refX='9'
              refY='5'
              orient='auto'
            >
              <polygon
                points='0,0 10,5 0,10'
                fill='url(#gaintain-gradient-arrow-inline)'
              />
            </marker>
          </defs>
        </svg>
        <PersonaCard
          image={ProgramGoerImage}
          title='HYBRID'
          subtitle='Mix of programs / freely'
          imageBelow={false}
          className='hybrid-card image-below-card'
        />
        <svg className='persona-arrow' viewBox='0 0 100 50' preserveAspectRatio='xMidYMid meet'>
          <defs>
            <linearGradient id='gaintain-gradient-arrow-inline-2' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
              <stop offset='0%' stopColor='#E65C00' />
              <stop offset='100%' stopColor='#F9D423' />
            </linearGradient>
          </defs>
          <path
            d='M 10 25 L 90 25'
            fill='none'
            stroke='url(#gaintain-gradient-arrow-inline-2)'
            strokeWidth='2.5'
            strokeLinecap='round'
            markerEnd='url(#arrowhead-inline-2)'
          />
          <defs>
            <marker
              id='arrowhead-inline-2'
              markerWidth='10'
              markerHeight='10'
              refX='9'
              refY='5'
              orient='auto'
            >
              <polygon
                points='0,0 10,5 0,10'
                fill='url(#gaintain-gradient-arrow-inline-2)'
              />
            </marker>
          </defs>
        </svg>
        <PersonaCard
          image={HybridImage}
          title='NOMAD'
          subtitle='Trains freely, logs as they go'
          imageBelow={false}
          className='image-below-card'
        />
        <svg className='persona-arrow' viewBox='0 0 100 50' preserveAspectRatio='xMidYMid meet'>
          <defs>
            <linearGradient id='gaintain-gradient-arrow-inline-3' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
              <stop offset='0%' stopColor='#E65C00' />
              <stop offset='100%' stopColor='#F9D423' />
            </linearGradient>
          </defs>
          <path
            d='M 10 25 L 90 25'
            fill='none'
            stroke='url(#gaintain-gradient-arrow-inline-3)'
            strokeWidth='2.5'
            strokeLinecap='round'
            markerEnd='url(#arrowhead-inline-3)'
          />
          <defs>
            <marker
              id='arrowhead-inline-3'
              markerWidth='10'
              markerHeight='10'
              refX='9'
              refY='5'
              orient='auto'
            >
              <polygon
                points='0,0 10,5 0,10'
                fill='url(#gaintain-gradient-arrow-inline-3)'
              />
            </marker>
          </defs>
        </svg>
        <div className='persona-card image-below-card'>
          <div className='persona-image-container'>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M 8 8 L 32 32 M 32 8 L 8 32' stroke='#DC2626' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </div>
          <div className='persona-text-card'>
            <div className='persona-title'>DROP OFF</div>
            <div className='persona-subtitle'>shared break point</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TriangleInsight
