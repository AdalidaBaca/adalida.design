import { createContext } from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: true,
  toggleDarkMode: (): void => {}
})
export default DarkModeContext
