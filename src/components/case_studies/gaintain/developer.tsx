import React, { forwardRef, type Ref } from 'react'

import DeveloperImage from 'images/gaintain/developer.webp'

import SectionHeading from 'components/section_heading'

const Developer = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <SectionHeading title='Developer Handoff:' />
        <p>
          To complete a workout, click the check mark.
          The content is populated by the Gaintain CMS based on the data in the user profile.
        </p>
        <p>Checkmark Icon (Tap): Records workout as complete</p>
        <p>Numbered Segmented Picker (Tap): Changes view of exercise in workout</p>
        <p>
          Plus and minus icon (Tap): Adjusts the recorded weight where the starting weight is what the user completed
          in the prior workout. If first workout, start at zero.
        </p>
        <p>Play Video Icon (Tap): Sheet pops up containing  instructional video with written instructions.</p>
        <p>Page controls (Swipe left or right): Changes view to next step in the workout.</p>
        <p>Next button (Tap): View swipes right to next set for the exercise.</p>
      </section>
    </div>
    <img src={DeveloperImage} alt='Developer specifications' />
  </div>
))

Developer.displayName = 'Developer'

export default Developer
