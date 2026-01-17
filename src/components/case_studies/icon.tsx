import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import React, { useContext, useMemo } from 'react'

import Context from './context'

const Icon = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background: defaultBackground, text } = useMemo(() => darkModeStyle(!darkMode), [darkMode])
  const caseStudyColor = useContext(Context)?.colors?.primary
  const color = text
  const background = caseStudyColor ?? defaultBackground
  return (
    <div className="case-study-icon" style={{ background, color }}>
      {children}
    </div>
  )
}

export default Icon
