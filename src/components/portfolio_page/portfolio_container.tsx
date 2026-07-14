import { featuredPortfolioProjects } from 'projects'

import FeaturedCompact from './featured_compact'
import FeaturedHero from './featured_hero'

const PortfolioContainer = (): JSX.Element | null => {
  if (featuredPortfolioProjects.length === 0) {
    return null
  }

  const [heroProject, ...moreProjects] = featuredPortfolioProjects

  return (
    <section className="featured-projects" aria-labelledby="featured-projects-heading">
      <div className="featured-projects-heading" id="featured-projects-heading" data-aos="fade-up">
        <span>Featured Projects</span>
      </div>
      {heroProject !== undefined && <FeaturedHero project={heroProject} />}
      {moreProjects.length > 0 && (
        <div className="featured-project-more">
          <p className="featured-project-list-label">More case studies</p>
          <ul className="featured-project-list">
            {moreProjects.map((project, index) => (
              <FeaturedCompact key={`${project.name}-${project.category}`} project={project} index={index} />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default PortfolioContainer
