import { useLocation } from '@reach/router'
import DarkModeContext from 'dark_mode_context'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import Footer from './footer'
import Header from './header'
import Page from './page'

const getCaseStudyAccentClass = (pathname: string): string | null => {
  if (pathname.includes('/case_studies/project_echo')) {
    return 'case-study-accent--project-echo'
  }
  if (pathname.includes('/case_studies/gaintain')) {
    return 'case-study-accent--gaintain'
  }
  return null
}

interface Props {
  children: React.ReactNode
  darkMode: boolean | null
  toggleDarkMode: () => void
}

const Layout = ({ children, darkMode, toggleDarkMode }: Props): JSX.Element | null => {
  useAnimateOnScroll()
  const { pathname } = useLocation()
  const caseStudyAccentClass = getCaseStudyAccentClass(pathname)

  if (darkMode === null) {
    return null
  }
  const themeClass = darkMode ? 'dark' : 'light'
  const rootClassName = [themeClass, caseStudyAccentClass].filter(Boolean).join(' ')

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div data-nosnippet className={rootClassName}>
        <Header />
        <Page>{children}</Page>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  )
}

export default Layout
