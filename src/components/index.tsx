import React, { useContext, useMemo } from 'react'
import AboutPage from './about_page'
import { HomePageContext } from './home_page_context'
import PortfolioPage from './portfolio_page'

const MainPage = (): JSX.Element | null => {
  const { isPortfolioPage } = useContext(HomePageContext)

  const content = useMemo(() => {
    if (isPortfolioPage === undefined) {
      return null // This prevents the wrong page from flashing in production
    }
    return isPortfolioPage ? <PortfolioPage /> : <AboutPage />
  }, [isPortfolioPage])

  return content
}

export default MainPage
