import React, { useEffect, useMemo, useState } from 'react'

interface HomePageContextType {
  isPortfolioPage?: boolean
  setPortfolioPage?: (portfolioPage: boolean) => void
  isAboutPage?: boolean
}

const HomePageContext = React.createContext<HomePageContextType>({})

const HomePageProvider = ({ pathname, children }: { pathname: string; children: JSX.Element }): JSX.Element => {
  const [isPortfolioPage, setIsPortfolioPage] = useState(pathname === '/' || pathname.startsWith('/portfolio'))
  const [isAboutPage, setIsAboutPage] = useState(pathname.startsWith('/about'))

  useEffect(() => {
    if (pathname === undefined) {
      return
    }

    if (pathname === '/' || pathname.startsWith('/portfolio')) {
      setIsPortfolioPage(true)
      setIsAboutPage(false)
    } else if (pathname.startsWith('/about')) {
      setIsPortfolioPage(false)
      setIsAboutPage(true)
    } else {
      setIsPortfolioPage(false)
      setIsAboutPage(false)
    }
  }, [pathname])

  const setPortfolioPage = useMemo(() => {
    if (!isPortfolioPage && !isAboutPage) {
      return
    }

    return (portfolioPage: boolean): void => {
      setIsPortfolioPage((oldIsPortfolioPage: boolean) => {
        if (oldIsPortfolioPage !== portfolioPage) {
          history.pushState({}, '', oldIsPortfolioPage ? '/about' : '/portfolio')
          setIsAboutPage(!portfolioPage)
        }
        return portfolioPage
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isPortfolioPage, isAboutPage])

  return (
    <HomePageContext.Provider value={{ isPortfolioPage, setPortfolioPage, isAboutPage }}>
      {children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
