import React from 'react'

import FrictionlessVideo from 'videos/gaintain/frictionless.mp4'

import SectionHeading from 'components/section_heading'

const Frictionless = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side reverse'>
      <div className='case-study-explanation'>
        <section>
          <SectionHeading title='Workout Logging' />
          <p>
            GainTain simplifies tracking by <strong><em>automatically pre-filling weight and reps</em></strong> based on
            the last recorded input.
          </p>
          <p>
            Users can <strong><em>adjust as needed</em></strong>, reducing friction and eliminating guesswork.
          </p>
          <p>
            By minimizing manual entry, this feature <strong><em>enhances efficiency, reduces cognitive load, and helps
            lifters stay focused on progress.</em></strong>
          </p>
        </section>
      </div>
      <video src={FrictionlessVideo} autoPlay loop muted playsInline />
    </div>
  )
}

export default Frictionless
