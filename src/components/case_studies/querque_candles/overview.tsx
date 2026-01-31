import BadgeButton from 'components/badge_button'
import OverviewImage from 'images/querque_candles/overview.webp'
import { Projects } from 'projects'
import { forwardRef, type Ref } from 'react'

const backgroundImage = Projects.QuerqueCandles.colors.primary

const Overview = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="querque-candles-overview-wrapper" ref={ref}>
      <div className="querque-candles-hero">
        <div className="querque-candles-hero-image">
          <img src={OverviewImage} alt="Querque Candles overview" />
        </div>
        <div data-aos="fade-up" data-aos-offset="150" className="querque-candles-title-strip">
          <div className="querque-candles-title-content">
            <h3>
              <strong className="case-study-gradient-text" style={{ backgroundImage }}>
                Querque Candles
              </strong>
            </h3>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="100" className="querque-candles-details">
        <div className="querque-candles-details-container">
          <div className="querque-candles-details-main">
            <div data-aos="fade-up" data-aos-offset="150" className="querque-candles-details-card">
              <h6 className="querque-candles-details-label">Overview</h6>
              <p className="querque-candles-details-text">
                Querque Candles needed a versatile brand identity for both product packaging and online marketing. I
                designed a custom logo, color palette, and visual elements optimized for sticker printing, social media,
                and a future Shopify store, ensuring a cohesive and professional brand presence.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="100" className="querque-candles-details-card">
              <h6 className="querque-candles-details-label">Role</h6>
              <p className="querque-candles-details-text">
                <strong>Product Consultant / Designer</strong>
              </p>
              <p className="querque-candles-details-text">
                Led brand identity design including logo, color palette, and visual guidelines for packaging and digital
                use.
              </p>
            </div>
          </div>
          <div className="querque-candles-details-sidebar">
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="50"
              className="querque-candles-details-meta-grid"
            >
              <div className="querque-candles-details-meta-item">
                <h6 className="querque-candles-details-label">Client</h6>
                <p className="querque-candles-details-text">
                  <strong>Querque Candles</strong>
                </p>
              </div>
              <div className="querque-candles-details-meta-item">
                <h6 className="querque-candles-details-label">Team</h6>
                <p className="querque-candles-details-text">
                  <strong>Sole Designer</strong>
                </p>
              </div>
              <div className="querque-candles-details-meta-item">
                <h6 className="querque-candles-details-label">Timeline</h6>
                <p className="querque-candles-details-text">
                  <strong>4 weeks</strong>
                </p>
              </div>
              <div className="querque-candles-details-meta-item">
                <h6 className="querque-candles-details-label">Final Result</h6>
                <p className="querque-candles-details-text">
                  <BadgeButton
                    to="https://www.figma.com/community/file/1351614539511450440/querque-candles"
                    className="querque-candles-link-secondary"
                  >
                    View in Figma
                  </BadgeButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)

Overview.displayName = 'Overview'

export default Overview
