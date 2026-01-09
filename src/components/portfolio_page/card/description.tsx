import React from 'react'

import type { Project } from 'projects'

import Badges from './badges'
import NameAndCategory from './name_and_category'
import ProjectLinkWrapper from './badges_and_description'

const Description = ({ project }: { project: Project }): React.ReactElement => {
  const coverColor = project.colors.cover
  return (
    <div 
      className='project-description'
      style={{ '--project-cover-color': coverColor } as React.CSSProperties}
    >
      <Badges project={project} />
      <NameAndCategory project={project} />
      <ProjectLinkWrapper project={project} />
    </div>
  )
}

export default Description
