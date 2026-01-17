import { IconArrowNarrowRight, IconLockShare } from '@tabler/icons-react'
import UniversalLink from 'components/universal_link'
import React from 'react'

interface Props {
  link: { url: string; text: string }
  className?: string
}

const BadgeLink = ({ link, className = 'animated-link portfolio-project-link' }: Props): React.ReactElement => (
  <UniversalLink className={className} to={link.url} aria-label={link.text}>
    {link.url.startsWith('mailto') ? <IconLockShare /> : <IconArrowNarrowRight />}
  </UniversalLink>
)

export default BadgeLink
