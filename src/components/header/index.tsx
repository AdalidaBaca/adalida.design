import { useLocation } from '@reach/router'
import React, { useContext, useEffect, useMemo, useState } from 'react'

import DarkModeContext from 'dark_mode_context'
import { Projects, type Project } from 'projects'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

const getCaseStudyFromPath = (pathname: string): Project | null => {
  if (pathname.includes('/case_studies/gaintain')) return Projects.Gaintain
  if (pathname.includes('/case_studies/phronesis')) return Projects.Phronesis
  if (pathname.includes('/case_studies/querque_candles')) return Projects.QuerqueCandles
  if (pathname.includes('/case_studies/project_echo')) return Projects.ProjectEcho
  return null
}

const Header = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { pathname } = useLocation()
  const caseStudy = useMemo(() => getCaseStudyFromPath(pathname), [pathname])
  const [showNavTitle, setShowNavTitle] = useState(false)

  useEffect(() => {
    if (caseStudy === null) return

    const handleScroll = (): void => {
      // Look for the title in the download/visit strip (the word copy that should trigger the nav title)
      const downloadTitle = document.querySelector('.gaintain-download-text, .project-echo-download-text, .phronesis-hero h3, .querque-hero h3')
      if (downloadTitle === null) return

      const titleRect = downloadTitle.getBoundingClientRect()
      const headerHeight = 56 // $header-height
      const shouldShow = titleRect.bottom < headerHeight

      setShowNavTitle(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [caseStudy])

  const backgroundImage = caseStudy?.colors.primary ?? Projects.Gaintain.colors.primary

  return (
    <header className={`navbar${darkMode ? ' dark' : ''}`} role='banner' aria-label='Site header'>
      <div className='left flex-center' aria-label='Home and back'>
        <HomeLink />
        <BackButton caseStudyName={caseStudy?.name} />
      </div>
      <nav className='primary-nav' aria-label='Primary'>
        {caseStudy !== null && showNavTitle ? (
          <h4 className='navbar-case-study-title'>
            <strong 
              className='case-study-gradient-text' 
              style={{ backgroundImage }}
            >
              {caseStudy.name.toUpperCase()}
            </strong>
          </h4>
        ) : (
          <PortfolioPageSwitch />
        )}
      </nav>
      <div className='right flex-center' aria-label='Theme'>
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header
