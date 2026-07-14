import { Link } from 'gatsby'
import type { AnchorHTMLAttributes } from 'react'
import { useMemo } from 'react'

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
}

const UniversalLink = ({ to, children, ...rest }: Props): JSX.Element => {
  const { external, mailTo, externalProps } = useMemo(() => {
    const external = /^(http|\/static)/.test(to)
    const mailTo = to.startsWith('mailto')
    const externalProps = mailTo ? {} : { target: '_blank', rel: 'noopener noreferrer' }
    return { external, mailTo, externalProps }
  }, [to])

  if (external || mailTo) {
    return (
      <a href={to} {...externalProps} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}

export default UniversalLink
