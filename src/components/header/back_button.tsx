import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { IconArrowLeft } from '@tabler/icons-react'

import { HomePageContext } from '../home_page_context'

interface Props {
  caseStudyName?: string
}

const BackButton = ({ caseStudyName }: Props): JSX.Element => {
  const { isPortfolioPage, isAboutPage } = useContext(HomePageContext)
  const hide = isPortfolioPage === true || isAboutPage === true
  return (
    <Link className={`btn header-button animated-link absolute${hide ? ' hide-up' : ''}`} to='/'>
      <IconArrowLeft size='1.57em' />
    </Link>
  )
}

export default BackButton
