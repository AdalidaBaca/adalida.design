import { IconArrowNarrowRight, IconBrandFigma, IconBrandNotion, IconNotes } from '@tabler/icons-react'
import Section from './section'

interface StructureCard {
  href: string
  label: string
  detail: string
  Icon: typeof IconBrandNotion
}

const STRUCTURE_CARDS: StructureCard[] = [
  {
    href: 'https://www.notion.com/@adalidabaca',
    label: 'Notion',
    detail: 'Document Templates',
    Icon: IconBrandNotion
  },
  {
    href: 'https://www.figma.com/@adalida',
    label: 'Figma',
    detail: 'Design Kits',
    Icon: IconBrandFigma
  },
  {
    href: 'https://adalida.substack.com/?utm_source=site&utm_medium=resources&utm_campaign=writing_primary',
    label: 'Substack',
    detail: 'Philosophical Thoughts',
    Icon: IconNotes
  }
]

const Resources = (): JSX.Element => (
  <Section title="Resources" subtitle="Writing and design bring clarity to my thinking.">
    <div className="structure">
      <ul className="structure-cards" aria-label="Resources links">
        {STRUCTURE_CARDS.map(({ href, label, detail, Icon }) => (
          <li key={href}>
            <a className="structure-card" href={href} target="_blank" rel="noopener noreferrer">
              <span className="structure-card-icon" aria-hidden>
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span className="structure-card-body">
                <span className="structure-card-label">{label}</span>
                <span className="structure-card-detail">{detail}</span>
              </span>
              <IconArrowNarrowRight className="structure-card-arrow" size={18} strokeWidth={1.5} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default Resources
