import SectionHeading from 'components/section_heading'
import solutionGraphic from 'images/smart_venture_media/solution.png'
import { forwardRef, type Ref } from 'react'
import VettingFunnel from './vetting_funnel'

const Solution = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="case-study-side-by-side smart-venture-media-solution-layout">
        <div className="smart-venture-media-solution-visual">
          <div className="invibe-esthetics-hero smart-venture-media-solution-hero-inset">
            <div className="invibe-esthetics-hero-image">
              <img src={solutionGraphic} alt="Smart Venture Media solution visual" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="SOLUTION" subtitle="A Sharable Source of Truth" />
            <div className="body-2">
              The solution was <strong>six documents</strong>, each scoped to exactly one role. Before I built them,
              every operational question routed back to Grace.
            </div>
            <div className="body-2">
              The <strong>chair team</strong>, <strong>mic coordinators</strong>, <strong>operations leads</strong>,{' '}
              <strong>sponsors</strong>, and <strong>volunteers</strong> each had exactly what they needed. Nothing
              more.
            </div>
            <div className="body-2">
              I used <strong>Claude</strong> to assign <strong>volunteers</strong> to speaker sessions, ensuring each
              coordinator owned at least one panel.
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-side-by-side smart-venture-media-vetting-layout">
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="VETTING" subtitle="A System Disguised as a Sign-Up Sheet" />
            <div className="body-2">
              Grace sourced volunteers through her network, adding them to a group chat. <strong>No screening</strong>.
              Just a group chat invite.
            </div>
            <div className="body-2">
              So I built a <strong>passive filter</strong> into onboarding itself. Fill out the directory:{' '}
              <strong>dependable</strong>. Skip it: <strong>plan around them</strong>.
            </div>
            <div className="body-2">
              A group call added one more layer, enough to read personalities before anyone set foot in the venue.
            </div>
          </div>
        </div>
        <div className="smart-venture-media-vetting-visual">
          <div className="project-echo-details-card smart-venture-media-vetting-image-card">
            <VettingFunnel />
          </div>
        </div>
      </div>
    </div>
  )
})

Solution.displayName = 'Solution'

export default Solution
