import React from 'react'

import CaseStudyCard from 'components/portfolio_page/card'
import Projects from 'projects'

const hackathonProjects = [
  Projects.Waugh,
  Projects.TLDR,
  Projects.GreenAction,
  Projects.Cheevo,
  Projects.GoldenRecordRemix
]

const Hackathons = (): React.ReactElement => (
  <div className='portfolio-container' style={{ marginTop: '4em' }}>
    {hackathonProjects.map((project) =>
      <CaseStudyCard key={project.name} project={project} />
    )}
  </div>
)

export default Hackathons
