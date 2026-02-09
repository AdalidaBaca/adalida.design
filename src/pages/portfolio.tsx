import MainPage from 'components'
import Seo from 'components/seo'

const Portfolio = (): JSX.Element => {
  return <MainPage />
}

export const Head = (): JSX.Element => (
  <Seo
    title="Adalida Baca Portfolio"
    description="Product designer portfolio — case studies, systems design, and shipped products. Adalida Baca."
  />
)
export default Portfolio
