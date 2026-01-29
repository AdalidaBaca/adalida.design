import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'
import { useRef } from 'react'

import Context from '../context'
import TableOfContents from '../table_of_contents'

import About from './about'
import Approach from './approach'
import Insight from './insight'
import KeyTakeaways from './key_takeaways'
import MoreFrom from './more_from'
import Outcome from './outcome'
import Solution from './solution'
import Upset from './upset'

const InvibeEsthetics = (): JSX.Element => {
  const sections = {
    'INVIBE ESTHETICS': useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    Constraints: useRef(null),
    Insight: useRef(null),
    Solution: useRef(null),
    Outcome: useRef(null),
    'Key Takeaways': useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.InvibeEsthetics}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className="case-study-container invibe-esthetics-container">
        <About heroRef={sections['INVIBE ESTHETICS']} aboutRef={sections.About} />
        <Insight copy="problem" ref={sections.Problem} />
        <Approach constraintsRef={sections.Constraints} insightRef={sections.Insight} />
        <Solution ref={sections.Solution} />
        <Outcome ref={sections.Outcome} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <MoreFrom />
      </div>
    </Context.Provider>
  )
}

export default InvibeEsthetics
