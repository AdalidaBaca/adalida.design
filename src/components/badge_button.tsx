import DarkModeContext from 'dark_mode_context'
import { useContext, useMemo } from 'react'

import UniversalLink from './universal_link'

interface Props {
  to: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const BadgeButton = ({ to, children, style, className }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const baseClassName = useMemo(() => `btn badge big-badge badge-danger${darkMode ? ' dark' : ''}`, [darkMode])
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName

  return (
    <div className={finalClassName} style={style}>
      <UniversalLink to={to} className="flex-center">
        {children}
      </UniversalLink>
    </div>
  )
}

export default BadgeButton
