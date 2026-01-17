import DarkModeContext from 'dark_mode_context'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'
import React from 'react'

import Footer from './footer'
import Header from './header'
import Page from './page'

interface Props {
  children: React.ReactNode
  darkMode: boolean | null
  toggleDarkMode: () => void
}

const Layout = ({ children, darkMode, toggleDarkMode }: Props): JSX.Element | null => {
  useAnimateOnScroll()

  if (darkMode === null) {
    return null
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div data-nosnippet className={darkMode ? 'dark' : 'light'}>
        <Header />
        <Page>{children}</Page>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  )
}

export default Layout
