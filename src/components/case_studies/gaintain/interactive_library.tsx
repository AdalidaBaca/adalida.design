import React, { forwardRef, type Ref } from 'react'

import InteractiveLibraryVideo from 'videos/gaintain/interactive_library.mp4'

import SectionHeading from 'components/section_heading'

const InteractiveLibrary = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <SectionHeading title='Exercise Library' />
        <p>
          GainTain&apos;s <strong><em>on-demand instructional library</em></strong> provides video and text-based
          guides to help users maintain proper form.
        </p>
        <p>
          A <strong><em>tappable play button</em></strong> offers real-time, step-by-step tutorials, ensuring
          exercises are performed safely and effectively.
        </p>
        <p>
          Designed for <strong><em>seamless access</em></strong>, this feature supports different learning preferences,
          helping users refine technique and train with confidence.
        </p>
      </section>
    </div>
    <video src={InteractiveLibraryVideo} autoPlay loop muted playsInline />
  </div>
))

InteractiveLibrary.displayName = 'InteractiveLibrary'

export default InteractiveLibrary
