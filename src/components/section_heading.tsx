import DarkModeContext from 'dark_mode_context'
import { useContext } from 'react'

interface Props {
  title: string
  subtitle?: string
  headerAction?: React.ReactNode
}

const SectionHeading = ({ title, subtitle, headerAction }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const hasAction = headerAction !== undefined && headerAction !== null
  return (
    <div className={`section-heading-container${hasAction ? ' section-heading-container--with-action' : ''}`}>
      <h4 className={darkMode ? 'dark' : ''}>{title}</h4>
      {hasAction && <div className="section-heading-action">{headerAction}</div>}
      {subtitle !== undefined && subtitle !== '' && <p className="section-heading-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
