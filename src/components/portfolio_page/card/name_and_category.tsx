import React from 'react'

import type { Project } from 'projects'

const NameAndCategory = ({ project }: { project: Project }): React.ReactElement => {
  const { category, name } = project

  return (
    <div className='name-and-category' data-title-container>
      <h5 className='project-name'>{name}</h5>
      <div className='project-category'>{category}</div>
    </div>
  )
}

export default NameAndCategory
