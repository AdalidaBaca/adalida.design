import SectionHeaderLink from 'components/section_header_link'
import AcademicPreviewCarousel from './academic_preview_carousel'
import Section from './section'

const HowIThink = (): JSX.Element => (
  <Section
    title="Foundations"
    subtitle="Systems thinking helps me ship with engineering and data."
    headerAction={<SectionHeaderLink to="/academic">Academic Work</SectionHeaderLink>}
  >
    <AcademicPreviewCarousel />
  </Section>
)

export default HowIThink
