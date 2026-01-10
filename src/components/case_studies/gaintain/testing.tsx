import React, { forwardRef, type Ref } from 'react'

import UnorderedFeatureList from 'components/feature_list/unordered'
import TestingImage from 'images/gaintain/testing.webp'

import SectionHeading from 'components/section_heading'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
    <div className='case-study-explanation'>
      <section className='more-padding'>
        <SectionHeading title='Testing for Usability' />
        <div className='body-2'>
          Using <strong><em>contextual inquiry</em></strong>, I tested two MVP UI designs in a real-world gym
          environment to evaluate usability. Observing users in their routines revealed key challenges that
          shaped design refinements:
        </div>
        <UnorderedFeatureList
          italic
          items={[
            {
              title: 'Equipment Availability',
              description: 'Limited machine access required flexible workout planning.'
            },
            {
              title: 'Environmental Challenges',
              description: 'Chalk-covered hands led to larger tap targets and gesture-based controls.'
            },
            {
              title: 'Timer Usability',
              description: 'The timer was duplicated across screens, causing confusion.'
            }
          ]}
        />
        <div className='body-2'><strong><em>
          Findings from these tests directly influenced the design, ensuring an intuitive, adaptable, and efficient
          tracking experience.
        </em></strong></div>
      </section>
    </div>
    <img className='gaintain-internal-testing-image' src={TestingImage} alt='Comparing two versions' />
  </div>
))

Testing.displayName = 'Testing'

export default Testing
