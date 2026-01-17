import { Link } from 'gatsby'
import useIsMobile from 'hooks/use_is_mobile'
import { useContext } from 'react'
import { HomePageContext } from '../home_page_context'
import Logo from '../logo'

const HomeLink = (): JSX.Element | null => {
  const { isPortfolioPage, isAboutPage } = useContext(HomePageContext)
  const hide = isPortfolioPage !== true && isAboutPage !== true
  const isMobile = useIsMobile(1000)
  if (isMobile === null) {
    return null
  }

  return (
    <Link className={`home-link absolute ${hide ? 'hide-up' : ''}`} to="/" aria-label="Home">
      <Logo />
    </Link>
  )
}

export default HomeLink
