import type { Project } from 'projects'
import React from 'react'

import ProjectLink from './project_link'

const ProjectLinkWrapper = ({ project }: { project: Project }): React.ReactElement => {
  const { link } = project
  if (link === undefined) {
    return <></>
  }
  return <ProjectLink link={link} />
}

export default ProjectLinkWrapper
