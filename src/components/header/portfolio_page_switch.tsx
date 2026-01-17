import React, { useContext } from 'react'

import { HomePageContext } from '../home_page_context'

const PortfolioPageSwitch = (): JSX.Element => {
  const { isPortfolioPage, setPortfolioPage } = useContext(HomePageContext)
  const hide = setPortfolioPage === undefined
  const initial = isPortfolioPage === undefined
  return (
    <div className={`switch-container${hide ? ' hide-up' : ''}`}>
      <div className={`switch-grid${initial ? ' initial' : ''}`} role="tablist" aria-label="Page selector">
        <div
          className="switch-indicator"
          style={{ transform: isPortfolioPage === true ? undefined : 'translateX(100%)' }}
        />
        <button
          className={`switch-button${isPortfolioPage === true ? ' active' : ''}`}
          role="tab"
          aria-selected={isPortfolioPage === true}
          onClick={() => {
            setPortfolioPage?.(true)
          }}
        >
          PORTFOLIO
        </button>
        <button
          className={`switch-button${isPortfolioPage === false ? ' active' : ''}`}
          role="tab"
          aria-selected={isPortfolioPage === false}
          onClick={() => {
            setPortfolioPage?.(false)
          }}
        >
          ABOUT
        </button>
      </div>
    </div>
  )
}

export default PortfolioPageSwitch
