import DarkModeContext from 'dark_mode_context'
import { useContext } from 'react'

interface Props {
  title: string
  subtitle?: string
}

const SectionHeading = ({ title, subtitle }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="section-heading-container">
      <h4 className={darkMode ? 'dark' : ''}>{title}</h4>
      {subtitle !== undefined && subtitle !== '' && (
        <p className="section-heading-subtitle">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
