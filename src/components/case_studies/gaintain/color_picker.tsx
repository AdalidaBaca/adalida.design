import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import DarkModeContext from 'dark_mode_context'
import React, { useEffect, useMemo, useState } from 'react'

interface ColorPickerProps {
  onGradientChange: (startColor: string, endColor: string) => void
}

const GRADIENT_OPTIONS = [
  { start: '#E65C00', end: '#F9D423', label: 'GainTain', hex: '#E65C00 → #F9D423' },
  { start: '#FC466B', end: '#3F5EFB', label: 'Pink Blue', hex: '#FC466B → #3F5EFB' },
  { start: '#43CEA2', end: '#185A9D', label: 'Teal Blue', hex: '#43CEA2 → #185A9D' },
  { start: '#FF512F', end: '#DD2476', label: 'Orange Pink', hex: '#FF512F → #DD2476' }
] as const
const getGradient = (index: number) => GRADIENT_OPTIONS[index] ?? GRADIENT_OPTIONS[0]

const ColorPicker = ({ onGradientChange }: ColorPickerProps): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedGradient = useMemo(() => getGradient(selectedIndex), [selectedIndex])

  const handlePrevious = (): void => {
    const newIndex = (selectedIndex - 1 + GRADIENT_OPTIONS.length) % GRADIENT_OPTIONS.length
    setSelectedIndex(newIndex)
  }

  const handleNext = (): void => {
    const newIndex = (selectedIndex + 1) % GRADIENT_OPTIONS.length
    setSelectedIndex(newIndex)
  }

  const handleDotClick = (index: number): void => {
    setSelectedIndex(index)
  }

  useEffect(() => {
    onGradientChange(selectedGradient.start, selectedGradient.end)
  }, [onGradientChange, selectedGradient.end, selectedGradient.start])

  return (
    <div className="gaintain-gradient-controls-wrapper">
      <p className="gaintain-gradient-prompt">Personalize your app</p>
      <div className="gaintain-gradient-controls">
        <button
          className="gaintain-gradient-change gaintain-gradient-prev"
          onClick={handlePrevious}
          aria-label="Previous gradient"
          type="button"
        >
          <IconChevronLeft />
        </button>
        <div className="gaintain-gradient-dots">
          {GRADIENT_OPTIONS.map((option, index) => (
            <button
              key={option.label}
              className={`gaintain-gradient-dot ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Select gradient ${index + 1}`}
              style={{
                background: `linear-gradient(135deg, ${option.start} 0%, ${option.end} 100%)`,
                borderColor:
                  index === selectedIndex
                    ? darkMode
                      ? 'rgba(255, 255, 255, 0.4)'
                      : 'rgba(0, 0, 0, 0.3)'
                    : 'transparent',
                borderWidth: index === selectedIndex ? '1px' : '0'
              }}
              type="button"
            />
          ))}
        </div>
        <button
          className="gaintain-gradient-change gaintain-gradient-next"
          onClick={handleNext}
          aria-label="Next gradient"
          type="button"
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  )
}

export default ColorPicker
