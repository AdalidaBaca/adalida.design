import { Projects } from 'projects'

import FeaturedCompact from './featured_compact'

const Container = (): JSX.Element => {
  // Clients ordered from newest to oldest
  const clientProjects = [
    Projects.SmartVentureMedia,
    Projects.InvibeEsthetics,
    Projects.QuerqueCandles,
    Projects.AirbrushArtStudio,
    Projects.JSharpMusic,
    Projects.SunbeltProperties,
    Projects.UniNights
  ]

  return (
    <ul className="featured-project-list">
      {clientProjects.map((project, index) => (
        <FeaturedCompact key={project.name} project={project} index={index} />
      ))}
    </ul>
  )
}

export default Container
