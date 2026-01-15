import React from 'react'
import { LogoSVG } from './logo_svg'

interface LogoProps {
  gradient?: boolean
  color?: string
  gradientStartColor?: string
  gradientEndColor?: string
}

const Logo = ({ gradient = false, color, gradientStartColor = "#E65C00", gradientEndColor = "#F9D423" }: LogoProps): JSX.Element => {
  const gradientId = gradient ? 'gaintain-gradient' : undefined
  const fillValue = color || 'currentColor'
  
  return (
    <LogoSVG 
      fill={fillValue} 
      gradientId={gradientId}
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    />
  )
}

export default Logo
