import type { Project } from 'projects'
import Description from './description'
import HeroImage from './hero_image'
import { getProjectCoverStyle } from '../project_cover_style'

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
  const imageSectionStyle = getProjectCoverStyle(project)

  return (
    <div className="portfolio-card" data-aos="fade-up" data-aos-offset="100" data-aos-duration="800">
      <div className="portfolio-image-section" style={imageSectionStyle}>
        <HeroImage project={project} />
      </div>
      <Description project={project} />
    </div>
  )
}

export default CaseStudyCard
