import React, { forwardRef, type Ref } from 'react'

import DiscoveringImage from 'images/gaintain/discovering.webp'

import SectionHeading from 'components/section_heading'

const Discovering = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <SectionHeading title='Discovering the Gap:' />
        <div className='body-2'>
          Workout tracking is valuable, but most apps lock it behind coaching or subscriptions.
        </div>
        <div className='body-2'>
          <strong>
            <em>How can we give trainees full control&mdash;seamlessly tracking progress without relying on a trainer?</em>
          </strong>
        </div>
      </section>
      <section>
        <SectionHeading title='Ideating the Solution:' />
        <div className='body-2'>
          A seamless, fast workout tracker that prioritizes effortless logging&mdash;eliminating the need for multiple apps
          while giving trainees full control over their progress.
        </div>
        <div className='body-2'>
          By focusing on <strong><em>input efficiency over complexity,</em></strong> it <strong><em>ensures consistent
          tracking and meaningful insights without reliance on a trainer.</em></strong>
        </div>
      </section>
    </div>
    <img src={DiscoveringImage} alt='About Gaintain' />
  </div>
))

Discovering.displayName = 'Discovering'

export default Discovering
