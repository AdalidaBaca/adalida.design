import React from 'react'

import type { Project } from 'projects'

import HeroImage from './hero_image'
import Description from './description'

interface Props {
  project: Project
}

/**
 * Unified Case Study Card Component
 * 
 * All case study cards use this component to ensure identical styling.
 * Based on Invibe Esthetics as the reference template.
 */
const CaseStudyCard = ({ project }: Props): JSX.Element => {
  const color = project.colors.cover
  // Consistent gradient position for all cards - center-top
  const imageSectionStyle = {
    backgroundImage: `
      radial-gradient(
        circle at 50% 25%,
        color-mix(in lch shorter hue, ${color} 100%, #FFFFFF 100%),
        ${color}
      )
    `,
    '--project-cover-color': color
  } as React.CSSProperties

  return (
    <div
      className='portfolio-card'
      data-aos='fade-up'
      data-aos-offset='100'
      data-aos-duration='800'
    >
      <div className='portfolio-image-section' style={imageSectionStyle}>
        <HeroImage project={project} />
      </div>
      <Description project={project} />
    </div>
  )
}

export default CaseStudyCard
