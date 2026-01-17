import DarkModeContext from 'dark_mode_context'
import { useContext } from 'react'

const SectionHeading = ({ title }: { title: string }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="section-heading-container">
      <h4 className={darkMode ? 'dark' : ''}>{title}</h4>
    </div>
  )
}

export default SectionHeading
