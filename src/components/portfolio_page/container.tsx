import { Projects } from 'projects'
import React from 'react'
import CaseStudyCard from './card'

const Container = (): JSX.Element => {
  return (
    <div className="portfolio-container">
      {Object.values(Projects).map((project) => (
        <CaseStudyCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export default Container
