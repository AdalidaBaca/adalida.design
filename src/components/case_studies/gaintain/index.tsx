import React, { useRef } from 'react'

import FinalDesignImage from 'images/gaintain/final_design.webp'
import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'

import Context from '../context'
import TableOfContents from '../table_of_contents'

import About from './about'
import Discovering from './discovering'
import Wireframing from './wireframing'
import Testing from './testing'
import Brand from './brand'
import Iterations from './iterations'
import FinalDesign from './final_design'
import Developer from './developer'
import InteractiveLibrary from './interactive_library'
import WorkoutLanding from './workout_landing'
import KeyTakeaways from './key_takeaways'
import EndCTA from './end_cta'

const Gaintain = (): JSX.Element => {
  const sections = {
    'GAINTAIN': useRef(null),
    About: useRef(null),
    Problem: useRef(null),
    'Key Insight': useRef(null),
    'Design Strategy': useRef(null),
    Solution: useRef(null),
    'Workout Dashboard': useRef(null),
    'Pledge Setup': useRef(null),
    'Social Timeline': useRef(null),
    Implementation: useRef(null),
    Results: useRef(null),
    'Key Takeaways': useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.Gaintain}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About heroRef={sections['GAINTAIN']} aboutRef={sections.About} />
        <Discovering ref={sections.Problem} keyInsightRef={sections['Key Insight']} />
        <Wireframing ref={sections['Design Strategy']} />
        <Testing ref={sections.Solution} />
        <WorkoutLanding ref={sections['Workout Dashboard']} />
        <InteractiveLibrary ref={sections['Pledge Setup']} />
        <Developer ref={sections['Social Timeline']} />
        <Iterations ref={sections.Implementation} />
        <div data-aos='fade-up' className='gaintain-hero-2'>
          <div className='gaintain-image-container'>
            <img src={FinalDesignImage} alt='Different types of sets' />
          </div>
        </div>
        <FinalDesign ref={sections.Results} />
        <KeyTakeaways ref={sections['Key Takeaways']} />
        <EndCTA />
        {/* <Brand ref={sections['The Brand']} /> */}
      </div>
    </Context.Provider>
  )
}

export default Gaintain
