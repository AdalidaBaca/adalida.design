import Seo from 'components/seo'
import { useLayoutEffect } from 'react'
import Portfolio from './portfolio'

const Root = (): JSX.Element => {
  useLayoutEffect(() => {
    history.replaceState({}, '', '/portfolio')
  }, [])
  return <Portfolio />
}

export const Head = (): JSX.Element => <Seo title="Adalida Design" />

export default Root
