import { IconArrowNarrowRight } from '@tabler/icons-react'
import Image from 'components/image'
import UniversalLink from 'components/universal_link'
import type { Project } from 'projects'

import { getProjectAccentVars, getProjectCoverStyle } from './project_cover_style'

interface Props {
  project: Project
}

const FeaturedHero = ({ project }: Props): JSX.Element | null => {
  const { link, name, category, description, heroImage, badges } = project
  if (link === undefined) {
    return null
  }

  const coverStyle = getProjectCoverStyle(project)
  const accentVars = getProjectAccentVars(project)

  return (
    <article className="featured-project-hero" style={accentVars} data-aos="fade-up" data-aos-offset="80">
      <UniversalLink to={link.url} className="featured-project-hero-link">
        <div className="featured-project-hero-media" style={coverStyle}>
          <div className="featured-project-hero-image-container">
            <Image className="featured-project-hero-image" alt={`${name} cover`} path={heroImage} objectFit="contain" />
          </div>
        </div>
        <div className="featured-project-hero-body">
          <p className="featured-project-hero-eyebrow">{category}</p>
          <h3 className="featured-project-hero-title">{name}</h3>
          {badges.length > 0 && (
            <ul className="featured-project-hero-badges" aria-label="Project tags">
              {badges.slice(0, 3).map(badge => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>
          )}
          <p className="featured-project-hero-description">{description}</p>
          <span className="featured-project-hero-cta">
            {link.text}
            <IconArrowNarrowRight aria-hidden />
          </span>
        </div>
      </UniversalLink>
    </article>
  )
}

export default FeaturedHero
