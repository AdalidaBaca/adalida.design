import { Projects } from 'projects'
import CaseStudyCard from './card'

const PortfolioContainer = (): JSX.Element => {
  // Show only featured projects on the portfolio page
  // All cards use the unified CaseStudyCard component for consistent styling
  const portfolioProjects = [Projects.Gaintain, Projects.ProjectEcho]

  return (
    <>
      <div className="featured-projects-heading" data-aos="fade-up">
        <span>FEATURED PROJECTS</span>
      </div>
      <div className="portfolio-container">
        {portfolioProjects.map(project => (
          <CaseStudyCard key={project.name} project={project} />
        ))}
      </div>
    </>
  )
}

export default PortfolioContainer
