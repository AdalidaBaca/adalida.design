import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'
import { useRef } from 'react'

import Context from '../context'
import TableOfContents from '../table_of_contents'
import About from './about'
import Handoff from './handoff'
import Insight from './insight'
import KeyTakeaways from './key_takeaways'
import MoreFrom from './more_from'
import Outcome from './outcome'
import Problem from './problem'
import Solution from './solution'
import Strategy from './strategy'
import TheWall from './the_wall'

const GraceGong = (): JSX.Element => {
  const sections = {
    'GRACE GONG': useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    Insight: useRef(null),
    Strategy: useRef(null),
    Solution: useRef(null),
    'The Wall': useRef(null),
    Outcome: useRef(null),
    'The Handoff': useRef(null),
    'Key Takeaways': useRef(null)
  }

  const isMobile = useIsMobile(1400)

  return (
    <Context.Provider value={Projects.SmartVentureMediaWebsite}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className="case-study-container grace-gong-container">
        <About heroRef={sections['GRACE GONG']} aboutRef={sections.About} />
        <Problem ref={sections.Problem} />
        <Insight ref={sections.Insight} />
        <Strategy ref={sections.Strategy} />
        <Solution ref={sections.Solution} />
        <TheWall ref={sections['The Wall']} />
        <Outcome ref={sections.Outcome} />
        <Handoff ref={sections['The Handoff']} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <MoreFrom />
      </div>
    </Context.Provider>
  )
}

export default GraceGong
