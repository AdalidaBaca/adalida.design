import { Projects } from 'projects'
import CaseStudyCard from './card'

const Container = (): JSX.Element => {
  // Clients ordered from newest to oldest
  const clientProjects = [
    Projects.InvibeEsthetics,
    Projects.SmartVentureMedia,
    Projects.QuerqueCandles,
    Projects.AirbrushArtStudio,
    Projects.JSharpMusic,
    Projects.SunbeltProperties,
    Projects.UniNights
  ]

  return (
    <div className="portfolio-container">
      {clientProjects.map(project => (
        <CaseStudyCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export default Container
