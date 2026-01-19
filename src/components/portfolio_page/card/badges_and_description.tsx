import type { Project } from 'projects'

import ProjectLink from './project_link'

const ProjectLinkWrapper = ({ project }: { project: Project }): React.ReactElement | null => {
  const { link } = project
  if (link === undefined) {
    return null
  }
  return <ProjectLink link={link} />
}

export default ProjectLinkWrapper
