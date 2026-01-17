import { describe, it, expect } from 'vitest'
import darkModeStyle from '../dark_mode_style'

describe('darkModeStyle', () => {
  describe('background', () => {
    it('gives the dark background when it is dark mode', () => {
      const { background } = darkModeStyle(true)
      expect(background).toEqual('#121212')
    })
    it('gives the light background when it is light mode', () => {
      const { background } = darkModeStyle(false)
      expect(background).toEqual('#F5F5F5')
    })
  })
})
