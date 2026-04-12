import type { CSSProperties } from 'react'
import type { Project } from 'projects'
import Description from './description'
import HeroImage from './hero_image'

type ImageSectionStyle = CSSProperties & { '--project-cover-color'?: string }

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
  const primary = project.colors.primary
  // Use primary gradient if it's a gradient string, otherwise use radial gradient
  const isGradient = typeof primary === 'string' && primary.includes('gradient')
  /* CTAs / hovers use --project-cover-color; keep it aligned with the image band (same as Invibe). */
  const coverCssVar = isGradient ? primary : color
  const imageSectionStyle = (
    isGradient
      ? {
          /* `background` (not only `backgroundImage`) so the strip always paints like the case study hero */
          background: primary,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          '--project-cover-color': coverCssVar
        }
      : {
          backgroundImage: `
        radial-gradient(
          circle at 50% 25%,
          color-mix(in lch shorter hue, ${color} 100%, #FFFFFF 100%),
          ${color}
        )
      `,
          '--project-cover-color': coverCssVar
        }
  ) as ImageSectionStyle

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
