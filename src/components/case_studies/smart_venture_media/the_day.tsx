import SectionHeading from 'components/section_heading'
import SmartVentureMediaCollage01 from 'images/smart_venture_media/collage_01.png'
import SmartVentureMediaCollage04 from 'images/smart_venture_media/collage_04.png'
import SmartVentureMediaCollage05 from 'images/smart_venture_media/collage_05.png'
import SmartVentureMediaCollage06 from 'images/smart_venture_media/collage_06.png'
import SmartVentureMediaCollage07 from 'images/smart_venture_media/collage_07.png'
import SmartVentureMediaCollage08 from 'images/smart_venture_media/collage_08.png'
import SmartVentureMediaCollage09 from 'images/smart_venture_media/collage_09.png'
import SmartVentureMediaCollage10 from 'images/smart_venture_media/collage_10.png'
import SmartVentureMediaCollage12 from 'images/smart_venture_media/collage_12.png'
import SmartVentureMediaDayImage from 'images/smart_venture_media/day.png'
import { forwardRef, type Ref } from 'react'

const TheDay = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-side-by-side smart-venture-media-day-layout">
        <div className="smart-venture-media-day-visual">
          <div className="project-echo-details-card smart-venture-media-day-image-card">
            <img src={SmartVentureMediaDayImage} alt="Smart Venture Media summit day-of operations in action" />
          </div>
        </div>
        <div className="case-study-explanation smart-venture-media-day-text">
          <div className="project-echo-details-card">
            <SectionHeading title="EVENT DAY" subtitle="What Worked. What Didn&apos;t" />
            <div className="body-2">
              <strong>Security held</strong>. Volunteers covered <strong>both entrances</strong> to the speaker lounge,
              keeping the space exclusive to speakers. A direct improvement from previous summits.
            </div>
            <div className="body-2">
              The <strong>sponsor setup</strong> was harder than expected. We had the headcount but not the details.
              Equipment requirements, setup windows, and arrival times were all{' '}
              <strong>handled day-of instead of in advance</strong>.
            </div>
          </div>
        </div>
      </div>
      <div className="smart-venture-media-next-iteration-section">
        <div className="smart-venture-media-collage-container">
          <div className="smart-venture-media-collage-grid smart-venture-media-collage-grid-under-next">
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage01} alt="Summit collage 1" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage04} alt="Summit collage 4" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage05} alt="Summit collage 5" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage06} alt="Summit collage 6" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage07} alt="Summit collage 7" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage08} alt="Summit collage 8" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage09} alt="Summit collage 9" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage10} alt="Summit collage 10" />
            </div>
            <div className="smart-venture-media-collage-item">
              <img src={SmartVentureMediaCollage12} alt="Summit collage 12" />
            </div>
          </div>
        </div>
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="WHAT CHANGES NEXT TIME" subtitle="The Next Version" />
            <div className="body-2">
              The operation has outgrown the venue. The next summit needs a{' '}
              <strong>larger venue or fewer, higher-priced sponsors</strong>.
            </div>
            <div className="body-2">
              <strong>Sponsor onboarding</strong>: sponsor logistics need to be{' '}
              <strong>documented and shared with the ops team in advance</strong>, not discovered day-of.
            </div>
            <div className="body-2">
              <strong>Scheduled breaks</strong>: attendees need time to connect with speakers between panels. Without
              them, the next session opens to an empty room.
            </div>
            <div className="body-2">
              <strong>Volunteer commitment</strong>: the current filter screens intent, not follow-through. That gap
              still needs solving.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

TheDay.displayName = 'TheDay'

export default TheDay
