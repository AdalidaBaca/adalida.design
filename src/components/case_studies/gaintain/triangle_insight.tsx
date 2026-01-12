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
      <div className='persona-row persona-row-with-arrow'>
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
        <svg className='program-to-nomad-arrow' viewBox='0 0 200 100' preserveAspectRatio='xMidYMid meet'>
          <defs>
            <linearGradient id='gaintain-gradient-arrow' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
              <stop offset='0%' stopColor='#E65C00' />
              <stop offset='100%' stopColor='#F9D423' />
            </linearGradient>
          </defs>
          {/* Shadow/outline path for visibility */}
          <path
            d='M 190 50 Q 100 30 10 50'
            fill='none'
            stroke='rgba(0, 0, 0, 0.2)'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M 190 50 Q 100 30 10 50'
            fill='none'
            stroke='url(#gaintain-gradient-arrow)'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          {/* Shadow for arrowhead - aligned with line direction for equal spacing */}
          {/* Line ends at (10,50) coming from control (100,30), direction vector is (-90,20) */}
          {/* Normalized direction: (-0.976, 0.217), perpendicular: (0.217, 0.976) */}
          {/* Arrowhead extends 15 units back along line, with 8 units perpendicular offset on each side */}
          {/* Same width as program-to-hybrid: 16 units between points */}
          <path
            d='M 10,50 L 26.38,54.55 M 10,50 L 22.90,38.93'
            fill='none'
            stroke='rgba(0, 0, 0, 0.2)'
            strokeWidth='3'
            strokeLinecap='round'
          />
          {/* Arrowhead - just the two lines forming the point, no base line, gradient color, same thickness as line */}
          <path
            d='M 10,50 L 26.38,54.55 M 10,50 L 22.90,38.93'
            fill='none'
            stroke='url(#gaintain-gradient-arrow)'
            strokeWidth='2.5'
            strokeLinecap='round'
          />
        </svg>
      </div>
      <div className='accountability-gap-row'>
        <div className='accountability-gap-text'>Consistency Gap</div>
        <div className='accountability-gap-subtitle'>Shared breakdown point.</div>
      </div>
      <div className='persona-row'>
        <PersonaCard
          image={ProgramGoerImage}
          title='HYBRID'
          subtitle='Mix of programs / trains freely'
          className='hybrid-card'
        />
      </div>
      <svg className='program-to-hybrid-arrow' viewBox='0 0 400 400' preserveAspectRatio='xMidYMid meet'>
        <defs>
          <linearGradient id='gaintain-gradient-arrow-diagonal' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
        </defs>
        {/* Shadow/outline path for visibility - from bottom of Program image to left side of Hybrid image */}
        {/* Start: bottom of Program image (around 50 200) */}
        {/* End: left side of Hybrid image (around 100 300) */}
        <path
          d='M 50 200 Q 50 250 100 300'
          fill='none'
          stroke='rgba(0, 0, 0, 0.2)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M 50 200 Q 50 250 100 300'
          fill='none'
          stroke='url(#gaintain-gradient-arrow-diagonal)'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* Shadow for arrowhead - rotated to align with curve direction */}
        {/* Curve direction at end: from control (50,250) to end (100,300) = (50,50) = 45° from horizontal */}
        {/* Arrowhead points up (270°), so rotate by 45° - 270° = -225° = 135° */}
        {/* But we need to flip it 180° to point in the direction of travel, so 135° + 180° = 315° */}
        {/* Arrowhead - just the two lines forming the point, no base line, same thickness as line */}
        <g transform='translate(100, 300) rotate(315)'>
          <path
            d='M 0,0 L -8,-15 M 0,0 L 8,-15'
            fill='none'
            stroke='rgba(0, 0, 0, 0.2)'
            strokeWidth='3'
            strokeLinecap='round'
          />
        </g>
        <g transform='translate(100, 300) rotate(315)'>
          <path
            d='M 0,0 L -8,-15 M 0,0 L 8,-15'
            fill='none'
            stroke='url(#gaintain-gradient-arrow-diagonal)'
            strokeWidth='2.5'
            strokeLinecap='round'
          />
        </g>
      </svg>
      <svg className='hybrid-to-nomad-arrow' viewBox='0 0 400 400' preserveAspectRatio='xMidYMid meet'>
        <defs>
          <linearGradient id='gaintain-gradient-arrow-hybrid-nomad' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='objectBoundingBox'>
            <stop offset='0%' stopColor='#E65C00' />
            <stop offset='100%' stopColor='#F9D423' />
          </linearGradient>
        </defs>
        {/* Shadow/outline path for visibility - from right side middle of Hybrid to bottom of Nomad image */}
        {/* Start: right side middle of Hybrid (around 300 300) */}
        {/* End: bottom of Nomad image (top-right row, bottom of image around 350 200) */}
        {/* Curve shape mirrors program-to-hybrid: M 50 150 Q 50 250 100 300 (curves outward/down) */}
        {/* For hybrid-to-nomad to curve outward: M 300 300 Q 350 250 350 200 - control point to the right to bulge outward */}
        <path
          d='M 300 300 Q 350 250 350 200'
          fill='none'
          stroke='rgba(0, 0, 0, 0.2)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M 300 300 Q 350 250 350 200'
          fill='none'
          stroke='url(#gaintain-gradient-arrow-hybrid-nomad)'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* Shadow for arrowhead - aligned with line direction */}
        {/* Curve direction at end: from control (350,250) to end (350,200) = (0,-50) = straight up */}
        {/* Arrowhead rotation: 270° - 90° = 180° */}
        <g transform='translate(350, 200) rotate(180)'>
          <path
            d='M 0,0 L -8,-15 M 0,0 L 8,-15'
            fill='none'
            stroke='rgba(0, 0, 0, 0.2)'
            strokeWidth='3'
            strokeLinecap='round'
          />
        </g>
        <g transform='translate(350, 200) rotate(180)'>
          <path
            d='M 0,0 L -8,-15 M 0,0 L 8,-15'
            fill='none'
            stroke='url(#gaintain-gradient-arrow-hybrid-nomad)'
            strokeWidth='2.5'
            strokeLinecap='round'
          />
        </g>
      </svg>
    </div>
  )
}

export default TriangleInsight
