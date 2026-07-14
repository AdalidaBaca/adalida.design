import { IconArrowUpRight } from '@tabler/icons-react'
import type { InternshipItem } from 'data/internship_portfolio'
import { Projects } from 'projects'

import { getProjectAccentVars } from './project_cover_style'

interface Props {
  item: InternshipItem
  sectionTitle: string
  index: number
}

const ACRONYMS = new Set(['SOP', 'JIRA', 'SSH', 'FQHC', 'IECHO', 'ECHO', 'CRM', 'BI', 'UNM'])

const formatTitle = (title: string): string =>
  title
    .split(/\s+/)
    .map(word => {
      const upper = word.toUpperCase()
      if (ACRONYMS.has(upper)) {
        return upper
      }
      if (upper === 'JAVASCRIPT') {
        return 'JavaScript'
      }
      if (upper === 'ZOOM') {
        return 'Zoom'
      }
      return upper.charAt(0) + upper.slice(1).toLowerCase()
    })
    .join(' ')

const linkLabel = (link: string | undefined): string | undefined => {
  if (link === undefined) {
    return undefined
  }
  if (link.includes('gist.github.com')) {
    return 'View gist'
  }
  return 'View document'
}

const InternshipRow = ({ item, sectionTitle, index }: Props): JSX.Element => {
  const accentVars = getProjectAccentVars(Projects.ProjectEcho)
  const label = linkLabel(item.link)
  const displayTitle = formatTitle(item.title)

  const rowBody = (
    <>
      <div className="featured-project-row-content">
        <div className="featured-project-row-body">
          <p className="featured-project-row-category">{sectionTitle}</p>
          <h4 className="featured-project-row-title">{displayTitle}</h4>
        </div>
      </div>
      {label !== undefined && (
        <div className="featured-project-row-action">
          <span className="featured-project-row-label">{label}</span>
          <span className="featured-project-row-arrow" aria-hidden>
            <IconArrowUpRight />
          </span>
        </div>
      )}
    </>
  )

  const rowClassName = 'featured-project-row featured-project-row--text-only'

  return (
    <li
      className="featured-project-row-item"
      style={accentVars}
      data-aos="fade-up"
      data-aos-offset="60"
      data-aos-delay={Math.min(index * 50, 200)}
    >
      {item.link !== undefined ? (
        <a
          href={item.link}
          className={rowClassName}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}: ${displayTitle}`}
        >
          {rowBody}
        </a>
      ) : (
        <div className={`${rowClassName} featured-project-row--static`}>{rowBody}</div>
      )}
    </li>
  )
}

export default InternshipRow
