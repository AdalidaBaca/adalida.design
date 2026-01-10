import React, { useRef } from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'

import Context from '../context'
import Footer from '../footer'
import TableOfContents from '../table_of_contents'

import About from './about'
import Discovering from './discovering'
import Research from './research'
import Wireframing from './wireframing'
import Testing from './testing'
import Brand from './brand'
import Iterations from './iterations'
import FinalDesign from './final_design'
import Developer from './developer'
import Track from './track'
import InteractiveLibrary from './interactive_library'
import Frictionless from './frictionless'
import KeyTakeaways from './key_takeaways'

const Gaintain = (): JSX.Element => {
  const sections = {
    'GAINTAIN': useRef(null),
    About: useRef(null),
    Discovery: useRef(null),
    Research: useRef(null),
    Wireframes: useRef(null),
    Tests: useRef(null),
    'The Brand': useRef(null),
    Iterations: useRef(null),
    'Final Design': useRef(null),
    Handoff: useRef(null),
    Interactions: useRef(null),
    Retrospective: useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.Gaintain}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About heroRef={sections['GAINTAIN']} aboutRef={sections.About} />
        <Discovering ref={sections.Discovery} />
        <Research ref={sections.Research} />
        <Wireframing ref={sections.Wireframes} />
        <Testing ref={sections.Tests} />
        <Brand ref={sections['The Brand']} />
        <Iterations ref={sections.Iterations} />
        <FinalDesign ref={sections['Final Design']} />
        <Developer ref={sections.Handoff} />
        <InteractiveLibrary ref={sections.Interactions} />
        <Frictionless />
        <Track />
        <KeyTakeaways ref={sections.Retrospective} />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default Gaintain
