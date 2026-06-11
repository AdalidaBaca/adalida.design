import ToolsCarousel from 'components/tools_carousel'
import Section from './section'

const Toolkit = (): JSX.Element => (
  <Section title="Toolkit" subtitle="The stack I use to design, build, and ship.">
    <div className="toolkit-marquee">
      <ToolsCarousel variant="about" badgeText={null} fullBleed={false} ariaLabel="Tools I use" />
    </div>
  </Section>
)

export default Toolkit
