import { useLocation } from '@reach/router'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'gatsby'
import { useContext } from 'react'

import { HomePageContext } from '../home_page_context'

const SUB_PAGES_BACK_TO_PREVIOUS = ['/timeline', '/internship-portfolio']

const BackButton = (): JSX.Element => {
  const { isPortfolioPage, isAboutPage } = useContext(HomePageContext)
  const { pathname } = useLocation()
  const hide = isPortfolioPage === true || isAboutPage === true
  const useHistoryBack = SUB_PAGES_BACK_TO_PREVIOUS.some(p => pathname === p || pathname.startsWith(`${p}/`))

  if (useHistoryBack) {
    return (
      <button
        type="button"
        className={`btn header-button animated-link absolute${hide ? ' hide-up' : ''}`}
        onClick={() => window.history.back()}
        aria-label="Back to previous page"
      >
        <IconArrowLeft size="1.57em" />
      </button>
    )
  }

  return (
    <Link
      className={`btn header-button animated-link absolute${hide ? ' hide-up' : ''}`}
      to="/"
      aria-label="Back to home"
    >
      <IconArrowLeft size="1.57em" />
    </Link>
  )
}

export default BackButton
