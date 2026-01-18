import DarkModeContext from 'dark_mode_context'
import { useContext } from 'react'
import Icon from './icon'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button className="header-button" aria-label="Toggle dark mode" onClick={toggleDarkMode} type="button">
      <Icon darkMode={darkMode} />
    </button>
  )
}

export default DarkModeButton
