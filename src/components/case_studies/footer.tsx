import { useLocation } from '@reach/router'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'
import { useContext } from 'react'
import Context from './context'

const studies = ['gaintain', 'phronesis', 'querque_candles']

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const color = useContext(Context)?.colors?.primary
  const currentIndex = studies.findIndex(study => pathname.includes(study))
  const nextCaseStudy = studies[(currentIndex + 1) % studies.length]
  const to = `/case_studies/${nextCaseStudy}`

  return (
    <div data-aos="fade-up" className="pre-footer">
      <div className="contact-cta-container">
        <div className="contact-cta-content">
          <h3 className="contact-cta-heading">Thanks for making it to the end! Read my next case study here.</h3>
          <BadgeButton to={to} style={color !== undefined ? { background: color, color: '#F5F5F5' } : {}}>
            Read case study <IconArrowNarrowRight />
          </BadgeButton>
        </div>
      </div>
    </div>
  )
}

export default Footer
