import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import { useContext } from 'react'

import Context from './context'
import Icon from './icon'

const IconHeading = ({ icon, heading }: { icon: JSX.Element; heading: string }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text } = darkModeStyle(darkMode)
  const backgroundImage = useContext(Context)?.colors?.primary ?? `linear-gradient(${text}, ${text})`
  return (
    <div className="case-study-icon-heading">
      <Icon>{icon}</Icon> <h5 style={{ backgroundImage }}>{heading}</h5>
    </div>
  )
}

export default IconHeading
