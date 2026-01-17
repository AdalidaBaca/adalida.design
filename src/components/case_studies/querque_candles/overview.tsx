import OverviewImage from 'images/querque_candles/overview.webp'
import { Projects } from 'projects'
import React, { forwardRef, type Ref } from 'react'

const backgroundImage = Projects.QuerqueCandles.colors.primary

const Overview = forwardRef(
  (_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
    <div data-aos="fade-up" className="querque-candles-overview" ref={ref}>
      <h3>
        <strong className="case-study-gradient-text" style={{ backgroundImage }}>
          QUERQUE CANDLES
        </strong>
      </h3>
      <img src={OverviewImage} alt="Querque Candles overview" />
      <div className="case-study-overview">
        <div className="row">
          <div>
            <span className="subtitle-2">Client:</span> <span className="body-2">Querque Candles</span>
          </div>
          <div>
            <span className="subtitle-2">Role:</span> <span className="body-2">Product Consultant / Designer</span>
          </div>
          <div>
            <span className="subtitle-2">Timeline:</span> <span className="body-2">4 weeks</span>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <div className="subtitle-2">Overview</div>
            <div className="body-2">
              Querque Candles needed a versatile brand identity for both product packaging and online marketing. I
              designed a custom logo, color palette, and visual elements optimized for sticker printing, social media,
              and a future Shopify store, ensuring a cohesive and professional brand presence.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)

Overview.displayName = 'Overview'

export default Overview
