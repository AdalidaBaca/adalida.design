import React, { useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import DarkModeContext from 'dark_mode_context'

interface ColorPickerProps {
  onGradientChange?: (startColor: string, endColor: string) => void
}

const ColorPicker = ({ onGradientChange }: ColorPickerProps): JSX.Element => {
  const { darkMode } = React.useContext(DarkModeContext)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const gradientOptions = [
    { start: '#E65C00', end: '#F9D423', label: 'GainTain', hex: '#E65C00 → #F9D423' },
    { start: '#FC466B', end: '#3F5EFB', label: 'Pink Blue', hex: '#FC466B → #3F5EFB' },
    { start: '#43CEA2', end: '#185A9D', label: 'Teal Blue', hex: '#43CEA2 → #185A9D' },
    { start: '#FF512F', end: '#DD2476', label: 'Orange Pink', hex: '#FF512F → #DD2476' },
  ]

  const selectedGradient = gradientOptions[selectedIndex]

  const handlePrevious = (): void => {
    const newIndex = selectedIndex === 0 ? gradientOptions.length - 1 : selectedIndex - 1
    setSelectedIndex(newIndex)
    if (onGradientChange) {
      onGradientChange(gradientOptions[newIndex].start, gradientOptions[newIndex].end)
    }
  }

  const handleNext = (): void => {
    const newIndex = selectedIndex === gradientOptions.length - 1 ? 0 : selectedIndex + 1
    setSelectedIndex(newIndex)
    if (onGradientChange) {
      onGradientChange(gradientOptions[newIndex].start, gradientOptions[newIndex].end)
    }
  }

  const handleDotClick = (index: number): void => {
    setSelectedIndex(index)
    if (onGradientChange) {
      onGradientChange(gradientOptions[index].start, gradientOptions[index].end)
    }
  }

  // Notify parent of initial gradient
  React.useEffect(() => {
    if (onGradientChange) {
      onGradientChange(selectedGradient.start, selectedGradient.end)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='gaintain-gradient-controls-wrapper'>
      <p className='gaintain-gradient-prompt'>Personalize your app</p>
      <div className='gaintain-gradient-controls'>
        <button
          className='gaintain-gradient-change gaintain-gradient-prev'
          onClick={handlePrevious}
          aria-label='Previous gradient'
        >
          <IconChevronLeft />
        </button>
        <div className='gaintain-gradient-dots'>
          {gradientOptions.map((option, index) => (
            <button
              key={index}
              className={`gaintain-gradient-dot ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Select gradient ${index + 1}`}
              style={{
                background: `linear-gradient(135deg, ${option.start} 0%, ${option.end} 100%)`,
                borderColor: index === selectedIndex 
                  ? (darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)')
                  : 'transparent',
                borderWidth: index === selectedIndex ? '1px' : '0',
              }}
            />
          ))}
        </div>
        <button
          className='gaintain-gradient-change gaintain-gradient-next'
          onClick={handleNext}
          aria-label='Next gradient'
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  )
}

export default ColorPicker
