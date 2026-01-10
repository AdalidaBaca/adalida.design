import React, { forwardRef, type Ref } from 'react'

import TrackImage from 'images/gaintain/track.webp'

import SectionHeading from 'components/section_heading'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos='fade-up' ref={ref} className='case-study-top-to-bottom gaintain-key-takeaways'>
      <div className='gaintain-image-container'>
        <img src={TrackImage} alt='Where Gains are Data-Driven' />
      </div>
      <div className='case-study-explanation'>
        <SectionHeading title='Key Takeaways' />
        <div className='gaintain-results-grid' style={{ marginTop: '0.25em' }}>
        <div className='gaintain-details-card'>
          <div className='body-2'>
            Aligning early on <strong>data models</strong> reduced rework as priorities shifted.
          </div>
        </div>

        <div className='gaintain-details-card'>
          <div className='body-2'>
            <strong>Prototyping in code</strong> enabled fast testing with real users in context.
          </div>
        </div>

        <div className='gaintain-details-card'>
          <div className='body-2'>
            Evaluating <strong>revenue impact</strong> per feature prevented early <strong>scope creep</strong>.
          </div>
        </div>
        </div>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
