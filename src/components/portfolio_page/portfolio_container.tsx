import React from 'react'

import Projects from 'projects'
import Card from './card'

const PortfolioContainer = (): JSX.Element => {
  // Only show these three projects on the portfolio page
  const portfolioProjects = [
    Projects.Gaintain,
    Projects.AirbrushArtStudio,
    Projects.ProjectEcho
  ]

  return (
    <>
      <div className='featured-projects-heading'>
        <span>FEATURED PROJECTS</span>
      </div>
      <div className='portfolio-container'>
        {portfolioProjects.map((project, index) =>
          <Card key={project.name} reverse={index % 2 === 1} project={project} />
        )}
      </div>
    </>
  )
}

export default PortfolioContainer
