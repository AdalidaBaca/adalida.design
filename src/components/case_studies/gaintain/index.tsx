import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'
import React, { useRef } from 'react'

import Context from '../context'
import TableOfContents from '../table_of_contents'

import About from './about'
import Developer from './developer'
import Discovering from './discovering'
import EndCTA from './end_cta'
import FinalDesign from './final_design'
import InteractiveLibrary from './interactive_library'
import Iterations from './iterations'
import KeyTakeaways from './key_takeaways'
import Testing from './testing'
import Wireframing from './wireframing'
import WorkoutLanding from './workout_landing'

const Gaintain = (): JSX.Element => {
  const sections = {
    GAINTAIN: useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    'Key Insight': useRef(null),
    'Design Strategy': useRef(null),
    Solution: useRef(null),
    'Pledge Setup': useRef(null),
    'Workout Dashboard': useRef(null),
    'Social Timeline': useRef(null),
    Implementation: useRef(null),
    Results: useRef(null),
    'Key Takeaways': useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.Gaintain}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className="case-study-container">
        <About heroRef={sections.GAINTAIN} aboutRef={sections.About} />
        <Discovering ref={sections.Problem} keyInsightRef={sections['Key Insight']} />
        <Wireframing ref={sections['Design Strategy']} />
        <Testing ref={sections.Solution} />
        <InteractiveLibrary ref={sections['Pledge Setup']} />
        <WorkoutLanding ref={sections['Workout Dashboard']} />
        <Developer ref={sections['Social Timeline']} />
        <Iterations ref={sections.Implementation} />
        <FinalDesign ref={sections.Results} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <EndCTA />
      </div>
    </Context.Provider>
  )
}

export default Gaintain
