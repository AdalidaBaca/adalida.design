import React, { forwardRef, type Ref } from 'react'

import UnorderedFeatureList from 'components/feature_list/unordered'
import IterationsImage from 'images/gaintain/iterations.webp'

import SectionHeading from 'components/section_heading'

const Iterations = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side padding' ref={ref}>
    <div className='case-study-explanation'>
      <section className='more-padding'>
        <SectionHeading title='UI Iterations' />
        <p>Through iterations and internal testing, I refined key usability aspects:</p>
        <UnorderedFeatureList
          italic
          items={[
            { title: 'Flow Optimization', description: 'Restructured steps to match workout progression.' },
            { title: 'Visual Consistency', description: 'Standardized spacing, alignment, and hierarchy.' },
            { title: 'Efficient Inputs', description: 'Grouped sets, weights, and reps for faster tracking.' },
            { title: 'Reduced Cognitive Load', description: 'Removed distractions, keeping focus on essentials.' }
          ]}
        />
        <p>
          These <strong><em>refinements minimized friction</em></strong>, improved speed, and <strong><em>ensured a
          seamless logging experience.</em></strong>
        </p>
      </section>
    </div>
    <img src={IterationsImage} alt='Design iterations' />
  </div>
))

Iterations.displayName = 'Iterations'

export default Iterations
