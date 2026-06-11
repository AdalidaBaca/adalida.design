import type { CSSProperties } from 'react'

const darkColor = '#09090B'
const lightColor = '#F9FAFB'

interface Colors {
  background: CSSProperties['color'] & string
  text: CSSProperties['color'] & string
}

const darkModeDefaultColors: Colors = {
  background: darkColor,
  text: '#EEEBE7'
}

const lightModeDefaultColors: Colors = {
  background: lightColor,
  text: '#18181B'
}

const darkModeStyle = (darkMode: boolean): Colors => (darkMode ? darkModeDefaultColors : lightModeDefaultColors)

export default darkModeStyle
