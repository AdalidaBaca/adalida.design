import React, { forwardRef, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom gaintain-results-section' ref={ref}>
      <div className='case-study-explanation'>
        <SectionHeading title='Results' />
        <div className='gaintain-results-grid' style={{ marginTop: '0.25em' }}>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Outcomes</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'>MVP shipped in 9 weeks with roughly 30 App Store releases</li>
              <li className='gaintain-results-item'>117 downloads across 148 countries with no paid marketing</li>
              <li className='gaintain-results-item'>~40% reduction in onboarding drop-off after redesign</li>
            </ul>
          </div>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Signals</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'>1.17K App Store impressions → 364 product page views</li>
              <li className='gaintain-results-item'>12% App Store conversion rate, above average for new consumer apps</li>
              <li className='gaintain-results-item'>Organic traffic driven primarily by Google and LinkedIn</li>
            </ul>
          </div>
          <div className='gaintain-details-card'>
            <div className='body-2 gaintain-results-title'>Validation</div>
            <ul className='body-2 gaintain-results-list'>
              <li className='gaintain-results-item'>Positive early App Store ratings</li>
              <li className='gaintain-results-item'>100% Lighthouse scores for SEO, accessibility, and best practices</li>
              <li className='gaintain-results-item'>Accepted into Founder University and selected as a Gamma pitch competition finalist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
