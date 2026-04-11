import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'
import { useRef } from 'react'

import Context from '../context'
import TableOfContents from '../table_of_contents'
import About from './about'
import Insight from './insight'
import KeyTakeaways from './key_takeaways'
import MoreFrom from './more_from'
import Outcome from './outcome'
import Problem from './problem'
import Solution from './solution'
import TheDay from './the_day'

const SmartVentureMedia = (): JSX.Element => {
  const sections = {
    'SMART VENTURE MEDIA': useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    Insight: useRef(null),
    Solution: useRef(null),
    'Event Day': useRef(null),
    Outcome: useRef(null),
    'Key Takeaways': useRef(null)
  }

  const isMobile = useIsMobile(1400)

  return (
    <Context.Provider value={Projects.SmartVentureMedia}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className="case-study-container smart-venture-media-container">
        <About heroRef={sections['SMART VENTURE MEDIA']} aboutRef={sections.About} />
        <Problem ref={sections.Problem} />
        <Insight ref={sections.Insight} />
        <Solution ref={sections.Solution} />
        <TheDay ref={sections['Event Day']} />
        <Outcome ref={sections.Outcome} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <MoreFrom />
      </div>
    </Context.Provider>
  )
}

export default SmartVentureMedia
