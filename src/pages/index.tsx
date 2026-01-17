import Seo from 'components/seo'
import React, { useLayoutEffect } from 'react'
import Portfolio from './portfolio'

const Root = (): JSX.Element => {
  useLayoutEffect(() => {
    history.replaceState({}, '', '/portfolio')
  }, [])
  return <Portfolio />
}

export const Head = Seo

export default Root
