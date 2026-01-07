import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

const Header = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <header className={`navbar${darkMode ? ' dark' : ''}`} role='banner' aria-label='Site header'>
      <div className='left flex-center' aria-label='Home and back'>
        <HomeLink />
        <BackButton />
      </div>
      <nav className='primary-nav' aria-label='Primary'>
        <PortfolioPageSwitch />
      </nav>
      <div className='right flex-center' aria-label='Theme'>
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header
