import { createContext } from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: true,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: This is a placeholder
  toggleDarkMode: (): void => {}
})
export default DarkModeContext
