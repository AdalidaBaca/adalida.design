import React, { forwardRef, type Ref } from 'react'

import WireframingImage from 'images/gaintain/wireframing.webp'

import SectionHeading from 'components/section_heading'

const Wireframing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <SectionHeading title='Wireframing the Experience' />
        <p>
          <strong><em>Transitioning from paper to digital required careful information architecture </em></strong> and
          usability considerations. Using the Swift UI Framework, I developed lo-fi wireframes <strong><em>to maintain
          the mental model of traditional tracking</em></strong> while improving efficiency.
        </p>
      </section>
    </div>
    <img src={WireframingImage} alt='Mockups' className='gaintain-wireframing' />
    <section>
      <strong><em>Through feature mapping, I structured key workflows</em></strong>&mdash;exercise tracking,
      instructional support, and daily workout plans&mdash;<strong><em>into an intuitive, cohesive user experience.</em></strong>
    </section>
  </div>
))

Wireframing.displayName = 'Wireframing'

export default Wireframing
