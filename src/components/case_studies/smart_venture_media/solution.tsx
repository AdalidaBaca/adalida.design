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
              <strong>Each role got its own document</strong>. Chair setup, speaker coordination, run of show, sponsor
              booth setup, volunteer directory, role sign-up. <strong>Built to reuse across every summit</strong>.
            </div>
            <div className="body-2">
              I used <strong>Claude</strong> to assign volunteers to speaker sessions based on their preferences, so
              each person got{' '}
              <strong>face time with at least one panelist they wanted to meet</strong>.
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-side-by-side smart-venture-media-vetting-layout">
        <div className="case-study-explanation">
          <div className="project-echo-details-card">
            <SectionHeading title="VOLUNTEER MANAGEMENT" subtitle="A Passive Filter Built Into Onboarding" />
            <div className="body-2">
              The founder pulled volunteers from her network and added them to a group chat. From there, it was unclear
              who could be counted on.
            </div>
            <div className="body-2">
              So I built a <strong>passive filter</strong> into the onboarding process where{' '}
              <strong>each stage revealed a little more</strong> about who was reliable, with{' '}
              <strong>role assignments coming last</strong> based on what each stage showed.
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
