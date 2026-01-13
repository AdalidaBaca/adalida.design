import React, { forwardRef, type Ref } from 'react'

import FinalDesignImage from 'images/gaintain/final_design.webp'

import SectionHeading from 'components/section_heading'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom gaintain-results-section' ref={ref}>
      <div className='gaintain-image-container'>
        <img src={FinalDesignImage} alt='Different types of sets' />
      </div>
      <div className='case-study-explanation'>
        <SectionHeading title='Results' />
        <div className='gaintain-results-grid' style={{ marginTop: '0.25em' }}>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Outcomes</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'>MVP shipped in <strong>9 weeks</strong> with roughly <strong>30 App Store releases</strong></li>
              <li className='gaintain-results-item'><strong>117 downloads</strong> across <strong>148 countries</strong> with no paid marketing</li>
              <li className='gaintain-results-item'><strong>~40% reduction</strong> in onboarding drop-off after redesign</li>
            </ul>
          </div>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Signals</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'><strong>1.17K App Store impressions</strong> → 364 product page views</li>
              <li className='gaintain-results-item'><strong>12% App Store conversion rate</strong>, above average for new consumer apps</li>
              <li className='gaintain-results-item'>Organic traffic driven primarily by <strong>Google and LinkedIn</strong></li>
            </ul>
          </div>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Validation</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'>Positive early App Store ratings</li>
              <li className='gaintain-results-item'><strong>100% Lighthouse scores</strong> for SEO, accessibility, and best practices</li>
              <li className='gaintain-results-item'>Accepted into <strong>Founder University</strong> and selected as a <strong>Gamma pitch competition finalist</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
