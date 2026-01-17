import React from 'react'

import Projects from 'projects'
import CaseStudyCard from './card'

const Container = (): JSX.Element => {
  // Timeline projects ordered from newest to oldest
  const timelineProjects = [
    Projects.Gaintain,
    Projects.InvibeEsthetics,
    Projects.SmartVentureMedia,
    Projects.QuerqueCandles,
    Projects.AirbrushArtStudio,
    Projects.JSharpMusic,
    Projects.SunbeltProperties
  ]
  
  return (
    <div className='portfolio-container'>
      {timelineProjects.map((project) =>
        <CaseStudyCard key={project.name} project={project} />
      )}
    </div>
  )
}

export default Container
