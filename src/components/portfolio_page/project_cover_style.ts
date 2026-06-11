import type { Project } from 'projects'
import type { CSSProperties } from 'react'

export type ProjectCoverStyle = CSSProperties & {
  '--project-cover-color'?: string
  '--project-accent'?: string
}

export const getProjectAccentVars = (project: Project): Pick<ProjectCoverStyle, '--project-cover-color' | '--project-accent'> => {
  const { cover, primary } = project.colors
  const isGradient = typeof primary === 'string' && primary.includes('gradient')

  return {
    '--project-cover-color': isGradient ? primary : cover,
    '--project-accent': cover
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
