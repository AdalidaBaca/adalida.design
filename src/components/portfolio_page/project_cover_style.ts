import type { Project } from 'projects'
import type { CSSProperties } from 'react'

type ProjectCoverStyle = CSSProperties & {
  '--project-cover-color'?: string
  '--project-accent'?: string
}

/** Prefer a solid hex so hover color-mix() works when cover/primary is a gradient. */
const solidAccentColor = (value: string): string => {
  const match = /#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})\b/.exec(value)
  return match?.[0] ?? value
}

export const getProjectAccentVars = (project: Project): ProjectCoverStyle => {
  const { cover, primary } = project.colors
  const isGradient = typeof primary === 'string' && primary.includes('gradient')

  return {
    '--project-cover-color': isGradient ? primary : cover,
    '--project-accent': solidAccentColor(cover)
  }
}

export const getProjectCoverStyle = (project: Project): ProjectCoverStyle => {
  const { cover, primary } = project.colors
  const isGradient = typeof primary === 'string' && primary.includes('gradient')
  const accentVars = getProjectAccentVars(project)

  if (isGradient) {
    return {
      ...accentVars,
      background: primary,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }

  return {
    ...accentVars,
    backgroundImage: `
      radial-gradient(
        circle at 50% 25%,
        color-mix(in lch shorter hue, ${cover} 100%, #FFFFFF 100%),
        ${cover}
      )
    `
  }
}
