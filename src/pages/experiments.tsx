import AOS from 'aos'
import CaseStudyCard from 'components/portfolio_page/card'

import Seo from 'components/seo'
import { Projects } from 'projects'
import { useEffect } from 'react'

const Experiments = (): JSX.Element => {
  // Experiments ordered from newest to oldest
  const experimentProjects = [
    Projects.Waugh,
    Projects.Phronesis,
    Projects.TLDR,
    Projects.ProjectEcho,
    Projects.GoldenRecordRemix,
    Projects.GreenAction,
    Projects.Cheevo,
    Projects.LoboGardens,
    Projects.UniNights
  ]

  useEffect(() => {
    // Refresh AOS when page loads to ensure cards animate
    AOS.refresh()
  }, [])

  return (
    <div style={{ paddingTop: '72px' }}>
      <div className="featured-projects-heading" data-aos="fade-up">
        <span>EXPERIMENTS</span>
      </div>
      <div className="portfolio-container" style={{ marginBottom: '4em' }}>
        {experimentProjects.map((project) => (
          <CaseStudyCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export const Head = (): JSX.Element => (
  <>
    <Seo title="Experiments" />
  </>
)

export default Experiments
