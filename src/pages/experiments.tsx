import AOS from 'aos'
import FeaturedCompact from 'components/portfolio_page/featured_compact'
import Seo from 'components/seo'
import type { Project } from 'projects'
import { Projects } from 'projects'
import { useEffect, useMemo } from 'react'

const sectionId = (title: string): string => title.toLowerCase().replace(/\s+/g, '-')

const EXPERIMENTS_SECTION_TITLES = ['Hackathons', 'Volunteer', 'Sandbox'] as const

function buildExperimentsSections(): { sectionTitle: string; projects: Project[] }[] {
  const allExperimentProjects = [
    Projects.Waugh,
    Projects.Phronesis,
    Projects.TLDR,
    Projects.GoldenRecordRemix,
    Projects.GreenAction,
    Projects.Cheevo,
    Projects.LoboGardens
  ]
  const hackathons = allExperimentProjects.filter(p => p.badges.some(b => b.toLowerCase() === 'hackathon'))
  const volunteer = [Projects.LoboGardens]
  const sandbox = [Projects.Phronesis]
  return [
    { sectionTitle: 'Hackathons', projects: hackathons },
    { sectionTitle: 'Volunteer', projects: volunteer },
    { sectionTitle: 'Sandbox', projects: sandbox }
  ]
}

const Experiments = (): JSX.Element => {
  const sections = useMemo(() => buildExperimentsSections(), [])

  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="experiments-page">
      <header className="experiments-header" data-aos="fade-up">
        <h1 className="experiments-title">Experiments</h1>
        <p className="experiments-intro">
          Side projects, hackathons, and exploratory work across product design, civic tech, and creative tools.
        </p>
        <nav className="experiments-nav" aria-label="Experiments sections">
          {EXPERIMENTS_SECTION_TITLES.map(title => (
            <a key={title} href={`#${sectionId(title)}`} className="experiments-nav-link">
              {title}
            </a>
          ))}
        </nav>
      </header>
      {sections.map(section => (
        <section key={section.sectionTitle} id={sectionId(section.sectionTitle)} className="experiments-section">
          <h2 className="experiments-section-heading" data-aos="fade-up" data-aos-offset="100">
            {section.sectionTitle}
          </h2>
          <ul className="featured-project-list">
            {section.projects.map((project, index) => (
              <FeaturedCompact key={project.name} project={project} index={index} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export const Head = (): JSX.Element => <Seo title="Experiments" />

export default Experiments
