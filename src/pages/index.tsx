import Seo from 'components/seo'
import { useLayoutEffect } from 'react'
import Portfolio from './portfolio'

const Root = (): JSX.Element => {
  useLayoutEffect(() => {
    history.replaceState({}, '', '/portfolio')
  }, [])
  return <Portfolio />
}

export const Head = (): JSX.Element => (
  <Seo
    title="Adalida Baca Portfolio"
    description="Product designer portfolio — case studies, systems design, and shipped products. Adalida Baca."
  />
)

export default Root
