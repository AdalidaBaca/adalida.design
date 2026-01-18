import { Link } from 'gatsby'
import { useMemo } from 'react'

interface Props {
  to: string
  children: React.ReactNode
  className?: string
}

const UniversalLink = ({ to, children, className }: Props): JSX.Element => {
  const { external, mailTo, rest } = useMemo(() => {
    const external = /^(http|\/static)/.test(to)
    const mailTo = to.startsWith('mailto')
    const rest = mailTo ? {} : { target: '_blank', rel: 'noopener noreferrer' }
    return { external, mailTo, rest }
  }, [to])

  if (external || mailTo) {
    return (
      <a href={to} className={className} {...rest}>
        {children}
      </a>
    )
  } else {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
}

export default UniversalLink
