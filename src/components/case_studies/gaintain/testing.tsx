import React, { forwardRef, useContext, useState, type Ref } from 'react'

import SectionHeading from 'components/section_heading'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import { Projects } from 'projects'
import Logo from './brand/logo'

const backgroundImage = Projects.Gaintain.colors.primary
const darkColor = '#111'
const brightColor = '#F3F3F3'
const otherGradient = 'linear-gradient(45deg, #E65C00, #F9D423)'
const colorSwatches = [
  { label: 'Modern', hex: '#F2F2F2' },
  { label: 'Clean', hex: '#121212' },
  { label: 'Simple', hex: '#FFFFFF' }
]

const gradientOptions = [
  { 
    id: 'primary',
    label: 'GainTain',
    gradient: 'linear-gradient(-45deg, #E65C00, #F9D423)',
    hex: '#E65C00 → #F9D423',
    startColor: '#E65C00',
    endColor: '#F9D423'
  },
  { 
    id: 'pink-blue',
    label: 'Strong',
    gradient: 'linear-gradient(-45deg, #FC466B, #3F5EFB)',
    hex: '#FC466B → #3F5EFB',
    startColor: '#FC466B',
    endColor: '#3F5EFB'
  },
  { 
    id: 'teal-blue',
    label: 'Confident',
    gradient: 'linear-gradient(-45deg, #43CEA2, #185A9D)',
    hex: '#43CEA2 → #185A9D',
    startColor: '#43CEA2',
    endColor: '#185A9D'
  },
  { 
    id: 'orange-pink',
    label: 'Disciplined',
    gradient: 'linear-gradient(-45deg, #FF512F, #DD2476)',
    hex: '#FF512F → #DD2476',
    startColor: '#FF512F',
    endColor: '#DD2476'
  }
]

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text } = darkModeStyle(!darkMode)
  const [selectedGradient, setSelectedGradient] = useState(gradientOptions[0])
  
  // Use selected gradient for typography and logos
  const selectedGradientImage = selectedGradient.gradient
  
  // Use darkMode to determine background, then invert for contrasting logo color
  const primaryBackground = darkMode ? '#1A1A1A' : '#fff'
  const primaryLogoColor = darkMode ? brightColor : darkColor // Inverted: light bg needs dark logo, dark bg needs light logo
  
  const invertedBackground = darkMode ? '#fff' : '#1A1A1A'
  const invertedLogoColor = darkMode ? darkColor : brightColor // Inverted: light bg needs dark logo, dark bg needs light logo

  const logoLayouts = [
    { key: 'inverted', gradient: false, style: { color: invertedLogoColor, background: invertedBackground }, gradientStart: undefined, gradientEnd: undefined },
    { key: 'primary', gradient: false, style: { color: primaryLogoColor, background: primaryBackground }, gradientStart: undefined, gradientEnd: undefined },
    { key: 'gradient', gradient: true, style: { background: darkMode ? '#1A1A1A' : '#fff' }, gradientStart: selectedGradient.startColor, gradientEnd: selectedGradient.endColor },
    {
      key: 'alt-gradient',
      gradient: false,
      style: { color: darkMode ? brightColor : darkColor, backgroundImage: selectedGradient.gradient },
      gradientStart: undefined,
      gradientEnd: undefined
    }
  ]

  return (
    <div data-aos='fade-up' className='case-study-side-by-side gaintain-solution' ref={ref}>
      <div className='case-study-explanation'>
        <div className='gaintain-details-card'>
          <SectionHeading title='Solution' />
          <div className='body-2'>
            I paired <strong>AI-guided workouts</strong> with <strong>designed accountability</strong> to support follow-through.
          </div>
          <ul className='body-2' style={{ margin: '0.5em 0', paddingLeft: '1em' }}>
            <li style={{ marginBottom: '0.75em' }}>AI workouts handle planning and personalization</li>
            <li style={{ marginBottom: '0.75em' }}><strong>Pledges</strong> apply <strong>loss aversion</strong> to create commitment</li>
            <li style={{ marginBottom: '0.75em' }}>Calendar feedback makes progress visible over time</li>
          </ul>
          <div className='body-2'>
            Together, this <strong>reduces drop-off</strong> across training styles by designing for showing up, not restarting.
          </div>
        </div>
      </div>
      <div className='gaintain-solution-cards'>
        <div className='gaintain-design-system'>
          <div className='card gaintain-design-card gaintain-typography-card' style={{ background: darkMode ? '#1A1A1A' : '#fff', color: darkMode ? '#F3F3F3' : '#111' }}>
            <div className='gaintain-typography-content'>
              <div className='gaintain-typography-display'>
                <h2 className='case-study-gradient-text' style={{ backgroundImage: selectedGradientImage }}><strong>Gg</strong></h2>
              </div>
              <div className='gaintain-typography-info'>
                <div className='gaintain-typography-name case-study-gradient-text' style={{ backgroundImage: selectedGradientImage }}>Avenir Next LT PRO</div>
                <div className='gaintain-typography-styles' style={{ color: darkMode ? 'rgba(243, 243, 243, 0.75)' : 'rgba(0, 0, 0, 0.75)' }}>
                  <span>Regular</span>
                  <span><em>Italic</em></span>
                  <span><strong>Bold</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className='gaintain-logo-grid'>
            {logoLayouts.map((logo) => (
              <div 
                key={logo.key} 
                className='card gaintain-logo-card' 
                style={logo.style}
              >
                <Logo 
                  gradient={logo.gradient} 
                  color={logo.style.color as string | undefined}
                  gradientStartColor={logo.gradientStart}
                  gradientEndColor={logo.gradientEnd}
                />
              </div>
            ))}
          </div>
          <div className='gaintain-palette-section'>
            <div className='gaintain-palette-container'>
              <div className='gaintain-color-column'>
                {colorSwatches.map((swatch) => {
                  // Determine text color based on color brightness for contrast
                  const isLight = swatch.hex === '#FFFFFF' || swatch.hex === '#F2F2F2'
                  const textColor = isLight ? '#111' : '#fff'
                  
                  return (
                    <div
                      key={swatch.label}
                      className='glass card gaintain-color-card'
                      style={{ 
                        background: swatch.hex,
                        color: textColor,
                        borderColor: swatch.hex === '#FFFFFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <div className='gaintain-color-content'>
                        <div className='gaintain-color-labels'>
                          <div className='caption-2'>{swatch.label}</div>
                          <strong>{swatch.hex}</strong>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='gaintain-gradient-wrapper'>
                <div className='card gaintain-gradient-card' style={{ background: selectedGradient.gradient, color: '#fff' }}>
                  <div className='gaintain-gradient-content'>
                    <div className='caption-2 gaintain-gradient-label'>{selectedGradient.label}</div>
                    <strong className='gaintain-gradient-hex'>{selectedGradient.hex}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className='gaintain-gradient-controls-wrapper'>
              <div className='gaintain-gradient-controls'>
                <button
                  className='gaintain-gradient-change gaintain-gradient-prev'
                  onClick={() => {
                    const currentIndex = gradientOptions.findIndex(opt => opt.id === selectedGradient.id)
                    const prevIndex = (currentIndex - 1 + gradientOptions.length) % gradientOptions.length
                    setSelectedGradient(gradientOptions[prevIndex])
                  }}
                  aria-label='Previous gradient'
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className='gaintain-gradient-dots'>
                  {gradientOptions.map((option, index) => {
                    const currentIndex = gradientOptions.findIndex(opt => opt.id === selectedGradient.id)
                    return (
                      <span
                        key={option.id}
                        className={`gaintain-gradient-dot ${currentIndex === index ? 'active' : ''}`}
                        style={{ background: option.gradient }}
                        aria-label={`Gradient option ${index + 1}`}
                      />
                    )
                  })}
                </div>
                <button
                  className='gaintain-gradient-change gaintain-gradient-next'
                  onClick={() => {
                    const currentIndex = gradientOptions.findIndex(opt => opt.id === selectedGradient.id)
                    const nextIndex = (currentIndex + 1) % gradientOptions.length
                    setSelectedGradient(gradientOptions[nextIndex])
                  }}
                  aria-label='Next gradient'
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className='gaintain-gradient-prompt' style={{ color: darkMode ? 'rgba(243, 243, 243, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}>
                Customize your app color
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

Testing.displayName = 'Testing'

export default Testing
