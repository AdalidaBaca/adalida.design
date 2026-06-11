import { IconArrowNarrowRight } from '@tabler/icons-react'
import UniversalLink from './universal_link'

interface Props {
  to: string
  children: React.ReactNode
}

const SectionHeaderLink = ({ to, children }: Props): JSX.Element => (
  <UniversalLink to={to} className="section-heading-link">
    {children}
    <IconArrowNarrowRight size={16} strokeWidth={1.75} aria-hidden />
  </UniversalLink>
)

export default SectionHeaderLink
