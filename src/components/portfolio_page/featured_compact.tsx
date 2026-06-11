import { IconArrowUpRight } from '@tabler/icons-react'
import Image from 'components/image'
import UniversalLink from 'components/universal_link'
import type { Project } from 'projects'

import { getProjectAccentVars, getProjectCoverStyle } from './project_cover_style'

interface Props {
  project: Project
  index: number
}

const FeaturedCompact = ({ project, index }: Props): JSX.Element | null => {
  const { link, name, category, heroImage } = project
  if (link === undefined) {
    return null
  }

  const coverStyle = getProjectCoverStyle(project)
  const accentVars = getProjectAccentVars(project)

  return (
    <li
      className="featured-project-row-item"
      style={accentVars}
      data-aos="fade-up"
      data-aos-offset="60"
      data-aos-delay={Math.min(index * 50, 200)}
    >
      <UniversalLink to={link.url} className="featured-project-row" aria-label={`${link.text}: ${name}`}>
        <div className="featured-project-row-media" style={coverStyle}>
          <Image className="featured-project-row-image" alt="" path={heroImage} objectFit="contain" aria-hidden />
        </div>
        <div className="featured-project-row-content">
          <div className="featured-project-row-body">
            <p className="featured-project-row-category">{category}</p>
            <h4 className="featured-project-row-title">{name}</h4>
          </div>
        </div>
        <div className="featured-project-row-action">
          <span className="featured-project-row-label">{link.text}</span>
          <span className="featured-project-row-arrow" aria-hidden>
            <IconArrowUpRight />
          </span>
        </div>
      </UniversalLink>
    </li>
  )
}

export default FeaturedCompact
