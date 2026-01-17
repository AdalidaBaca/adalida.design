import type { CSSProperties } from 'react'

const darkColor = '#121212'
const lightColor = '#F5F5F5'

interface Colors {
  background: CSSProperties['color'] & string
  text: CSSProperties['color'] & string
}

const darkModeDefaultColors: Colors = {
  background: darkColor,
  text: lightColor
}

const lightModeDefaultColors: Colors = {
  background: lightColor,
  text: darkColor
}

const darkModeStyle = (darkMode: boolean): Colors => (darkMode ? darkModeDefaultColors : lightModeDefaultColors)

export default darkModeStyle
