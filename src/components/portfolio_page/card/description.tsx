import type { Project } from 'projects'

import Badges from './badges'
import ProjectLinkWrapper from './badges_and_description'
import NameAndCategory from './name_and_category'

const Description = ({ project }: { project: Project }): React.ReactElement => {
  const coverColor = project.colors.cover
  return (
    <div className="project-description" style={{ '--project-cover-color': coverColor } as React.CSSProperties}>
      <Badges project={project} />
      <div className="text-and-cta-container">
        <div className="text-section">
          <NameAndCategory project={project} />
        </div>
        <div className="cta-section">
          <ProjectLinkWrapper project={project} />
        </div>
      </div>
    </div>
  )
}

export default Description
