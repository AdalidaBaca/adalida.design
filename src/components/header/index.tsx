import { useLocation } from '@reach/router'
import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'
import { type Project, Projects } from 'projects'
import { useContext, useEffect, useMemo, useState } from 'react'
import BackButton from './back_button'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import PortfolioPageSwitch from './portfolio_page_switch'

interface NavTitleConfig {
  title: string
  titleSelector: string
  backgroundImage: string
}

const getCaseStudyFromPath = (pathname: string): Project | null => {
  if (pathname.includes('/case_studies/gaintain')) {
    return Projects.Gaintain
  }
  if (pathname.includes('/case_studies/invibe_esthetics')) {
    return Projects.InvibeEsthetics
  }
  if (pathname.includes('/case_studies/phronesis')) {
    return Projects.Phronesis
  }
  if (pathname.includes('/case_studies/querque_candles')) {
    return Projects.QuerqueCandles
  }
  if (pathname.includes('/case_studies/project_echo')) {
    return Projects.ProjectEcho
  }
  return null
}

/** Selector for the hero/download-strip title element used to trigger nav title when it scrolls under the header. */
const getTitleSelectorForCaseStudy = (project: Project): string => {
  if (project === Projects.Gaintain) return '.gaintain-download-text'
  if (project === Projects.InvibeEsthetics) return '.invibe-esthetics-download-text'
  if (project === Projects.ProjectEcho) return '.project-echo-download-text'
  if (project === Projects.Phronesis) return '.phronesis-hero h3'
  if (project === Projects.QuerqueCandles) return '.querque-candles-hero h3'
  return ''
}

/** Nav title config for case studies and internship portfolio (same gradient title effect). */
const getNavTitleConfig = (pathname: string): NavTitleConfig | null => {
  const caseStudy = getCaseStudyFromPath(pathname)
  if (caseStudy !== null) {
    return {
      title: caseStudy.name.toUpperCase(),
      titleSelector: getTitleSelectorForCaseStudy(caseStudy),
      backgroundImage: caseStudy.colors.primary
    }
  }
  if (pathname.includes('/internship-portfolio')) {
    return {
      title: 'PROJECT ECHO INTERNSHIP PORTFOLIO',
      titleSelector: '.internship-portfolio-title',
      backgroundImage: Projects.ProjectEcho.colors.primary
    }
  }
  return null
}

const Header = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { pathname } = useLocation()
  const caseStudy = useMemo(() => getCaseStudyFromPath(pathname), [pathname])
  const [showNavTitle, setShowNavTitle] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isMobile = useIsMobile(768)

  useEffect(() => {
    if (caseStudy === null) {
      return
    }

    setShowNavTitle(false)

    let rafId: number | null = null
    const titleSelector = getTitleSelectorForCaseStudy(caseStudy)

    const handleScroll = (): void => {
      if (rafId !== null) {
        return
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        const container = document.querySelector('.case-study-container')
        const downloadTitle =
          titleSelector === ''
            ? null
            : (container?.querySelector(titleSelector) ?? document.querySelector(titleSelector))

        if (downloadTitle !== null) {
          const titleRect = downloadTitle.getBoundingClientRect()
          const headerHeight = 56 // $header-height
          const shouldShow = titleRect.bottom < headerHeight
          setShowNavTitle(prev => {
            if (prev === true) return true
            return shouldShow
          })
        }

        // Calculate scroll progress for horizontal scrollbar (mobile only) - direct calculation, no delays
        if (isMobile === true) {
          const caseStudyContainer = document.querySelector('.case-study-container')
          if (caseStudyContainer instanceof HTMLElement) {
            // Calculate total scrollable distance for the case study
            const documentHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const maxScroll = documentHeight - viewportHeight

            // Progress: 0 = at top of page, 1 = scrolled to bottom
            // This directly ties to scroll position for immediate response
            const progress = maxScroll > 0 ? Math.min(1, Math.max(0, currentScrollY / maxScroll)) : 0

            setScrollProgress(progress)
          }
        }

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [caseStudy, isMobile])

  const backgroundImage = caseStudy?.colors.primary ?? Projects.Gaintain.colors.primary

  return (
    <header className={`navbar${darkMode ? ' dark' : ''}`}>
      <nav className="left flex-center" aria-label="Home and back">
        <HomeLink />
        <BackButton />
      </nav>
      <nav className="primary-nav" aria-label="Primary">
        {caseStudy !== null && showNavTitle ? (
          <h4 key={caseStudy.name} className="navbar-case-study-title">
            <strong className="case-study-gradient-text" style={{ backgroundImage }}>
              {caseStudy.name.toUpperCase()}
            </strong>
          </h4>
        ) : (
          <PortfolioPageSwitch />
        )}
      </nav>
      <nav className="right flex-center" aria-label="Theme">
        <DarkModeButton />
      </nav>
      {caseStudy !== null && isMobile === true && (
        <div
          className="navbar-scroll-progress"
          style={
            {
              '--scroll-progress': `${scrollProgress * 100}%`,
              '--progress-gradient':
                typeof backgroundImage === 'string' && backgroundImage.includes('gradient')
                  ? backgroundImage
                  : undefined,
              '--progress-color':
                typeof backgroundImage === 'string' && backgroundImage.includes('gradient')
                  ? undefined
                  : backgroundImage
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header
