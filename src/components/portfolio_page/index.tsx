import ContactCTA from 'components/about_page/contact_cta'
import Testimonials from 'components/about_page/testimonials'
import useIsMobile from 'hooks/use_is_mobile'
import Intro from './intro'
import PortfolioContainer from './portfolio_container'

const PortfolioPage = (): JSX.Element => {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile !== null && <Intro />}
      <PortfolioContainer />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

export default PortfolioPage
