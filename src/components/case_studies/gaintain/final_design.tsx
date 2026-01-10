import React, { forwardRef, type Ref } from 'react'

import OrderedFeatureList from 'components/feature_list/ordered'
import FinalDesignImage from 'images/gaintain/final_design.webp'

import SectionHeading from 'components/section_heading'

const FinalDesign = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
    <div className='case-study-explanation'>
      <section className='more-padding'>
        <SectionHeading title='Final Design:' />
        <p>
          To <strong><em>validate GainTain&apos;s adaptability</em></strong>, I conducted internal scenario testing,
          simulating real-world workout conditions to  to support three key workout types:
        </p>
        <OrderedFeatureList
          italic
          items={[
            { title: 'Weighted Sets', description: 'Strength training' },
            { title: 'Non-weighted Sets', description: 'Bodyweight, HIIT, and stretching' },
            { title: 'Weighted Supersets', description: 'Combined exercises' }
          ]}
        />
        <p>
          <strong><em>
            These refinements improved efficiency, minimized cognitive load, and ensured seamless tracking across all
            workout styles.
          </em></strong>
        </p>
      </section>
    </div>
    <img src={FinalDesignImage} alt='Different types of sets' />
  </div>
))

FinalDesign.displayName = 'FinalDesign'

export default FinalDesign
