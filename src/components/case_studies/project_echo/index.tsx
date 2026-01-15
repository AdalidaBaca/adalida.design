import React, { useRef } from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'

import Context from '../context'
import TableOfContents from '../table_of_contents'

import About from './about'
import Insight from './insight'
import Approach from './approach'
import Solution from './solution'
import Outcome from './outcome'
import KeyTakeaways from './key_takeaways'
import MoreFrom from './more_from'

const ProjectEcho = (): JSX.Element => {
  const sections = {
    'PROJECT ECHO': useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    Insight: useRef(null),
    Approach: useRef(null),
    Solution: useRef(null),
    Outcome: useRef(null),
    'Key Takeaways': useRef(null),
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.ProjectEcho}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About heroRef={sections['PROJECT ECHO']} aboutRef={sections.About} />
        <Insight copy='problem' ref={sections.Problem} />
        <Insight ref={sections.Insight} />
        <Approach ref={sections.Approach} />
        <Solution ref={sections.Solution} />
        <Outcome ref={sections.Outcome} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <MoreFrom />
      </div>
    </Context.Provider>
  )
}

export default ProjectEcho
