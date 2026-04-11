import SectionHeading from 'components/section_heading'
import SmartVentureMediaCollage01 from 'images/smart_venture_media_collage_01.png'
import SmartVentureMediaCollage04 from 'images/smart_venture_media_collage_04.png'
import SmartVentureMediaCollage05 from 'images/smart_venture_media_collage_05.png'
import SmartVentureMediaCollage06 from 'images/smart_venture_media_collage_06.png'
import SmartVentureMediaCollage07 from 'images/smart_venture_media_collage_07.png'
import SmartVentureMediaCollage08 from 'images/smart_venture_media_collage_08.png'
import SmartVentureMediaCollage09 from 'images/smart_venture_media_collage_09.png'
import SmartVentureMediaCollage10 from 'images/smart_venture_media_collage_10.png'
import SmartVentureMediaCollage12 from 'images/smart_venture_media_collage_12.png'
import SmartVentureMediaDayImage from 'images/smart_venture_media_day.png'
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
            <SectionHeading title="EVENT DAY" subtitle="What Worked. What Didn&apos;t." />
            <div className="body-2">
              <strong>Security held</strong>. Volunteers posted at the speaker lounge entrance kept the space exclusive
              to speakers and sponsors, a direct improvement from previous summits.
            </div>
            <div className="body-2">
              The <strong>sponsor setup didn&apos;t</strong>. We knew sponsor count was growing but never collected their{' '}
              <strong>physical requirements</strong> in advance. Screens, tables, and equipment were all{' '}
              <strong>surprises day-of</strong>. The information existed. We just <strong>never built a system</strong> to
              capture it before they arrived.
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
            <SectionHeading title="WHAT CHANGES NEXT TIME" subtitle="Already Designing the Next Version" />
            <div className="body-2">
              The operation has <strong>outgrown the venue</strong>. The next summit needs a{' '}
              <strong>larger venue or fewer, higher-priced sponsors</strong>. Three things change next time:
            </div>
            <ul className="body-2">
              <li>
                <strong>Sponsor onboarding</strong> — electrical requirements, setup windows, and arrival times
                confirmed before day-of
              </li>
              <li>
                <strong>Scheduled breaks</strong> — attendees need time to connect with speakers between panels. Without
                it, the next session opens to an empty room.
              </li>
              <li>
                <strong>Volunteer commitment</strong> — the current filter screens intent, not follow-through. The next
                version closes that gap.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

TheDay.displayName = 'TheDay'

export default TheDay
