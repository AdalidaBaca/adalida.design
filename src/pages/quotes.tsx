import AOS from 'aos'
import QuotesPage from 'components/quotes_page'
import Seo from 'components/seo'
import { useEffect } from 'react'

const Quotes = (): JSX.Element => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return <QuotesPage />
}

export const Head = (): JSX.Element => (
  <Seo
    title="Quotes"
    description="A collection of quotes on beauty, doubt, process, mathematics, and preparing for opportunity."
  />
)

export default Quotes
