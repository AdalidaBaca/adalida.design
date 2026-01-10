import React, { forwardRef, useContext, type Ref } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import { Projects } from 'projects'
import BrandImage from 'images/gaintain/brand.webp'

import SectionHeading from 'components/section_heading'

import Logo from './logo'

const backgroundImage = Projects.Gaintain.colors.primary
const darkColor = '#111'
const brightColor = '#F3F3F3'
const otherGradient = 'linear-gradient(45deg, #FF512F, #DD2476)'

const Brand = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text } = darkModeStyle(!darkMode)
  return (
    <div data-aos='fade-up' className='case-study-top-to-bottom' ref={ref}>
      <div className='case-study-explanation'>
        <section>
          <SectionHeading title='Injecting the Brand:' />
          <p>
            GainTain&apos;s brand is built to be both personal and motivating. Users can customize their environment with
            gradients during onboarding, unlocking additional options as they progress, creating a sense of
            ownership and achievement.
          </p>
        </section>
      </div>
      <div>
      <div className='gaintain-brand'>
        <img src={BrandImage} alt='Logo with lines' className='gaintain-wireframing' />
        <div className='typography'>
          <div className='avenir glass card'>
            <h3 className='case-study-gradient-text' style={{ backgroundImage }}><strong>Aa</strong></h3>
            <div className='case-study-gradient-text caption-1' style={{ backgroundImage }}>Avenir Next LT PRO</div>
            <div className='case-study-gradient-text caption-1' style={{ backgroundImage }}>
              Regular / <i>Italic</i> / <strong>Bold</strong>
            </div>
          </div>
          <div className='gradient glass card' style={{ backgroundImage, color: text }}>
            <div className='gradient-description'>
              <h2>-45</h2>
              <div className='subtitle-1'>Linear Gradient</div>
            </div>
            <div className='flex-center'>
              <div>FF512F</div>
              <div className='separator' />
              <div>DD2476</div>
            </div>
          </div>
        </div>
      </div>
      <div className='gaintain-brand-cards'>
        <div className='logos'>
          <div className='glass card' style={{ color: darkMode ? brightColor : darkColor }}><Logo /></div>
          <div className='glass card'><Logo gradient /></div>
          <div className='glass card' style={{ color: darkMode ? darkColor : brightColor, backgroundImage: otherGradient }}>
            <Logo />
          </div>
          <div className='glass card' style={{ background: darkMode ? brightColor : darkColor }}><Logo gradient /></div>
        </div>
        <div className='typography'>
          <div className='glass card' style={{ background: darkMode ? brightColor : darkColor }}>
            <h6 className='case-study-gradient-text' style={{ backgroundImage }}><strong><em>Clean</em></strong></h6>
            <div className='caption-2 case-study-gradient-text' style={{ backgroundImage }}>RGB &nbsp;#121212</div>
          </div>
          <div className='glass card'>
            <h6 className='case-study-gradient-text' style={{ backgroundImage }}><strong><em>Modern</em></strong></h6>
            <div className='caption-2 case-study-gradient-text' style={{ backgroundImage }}>RGB &nbsp;#F2F2F2</div>
          </div>
          <div className='glass card'>
            <h6 className='case-study-gradient-text' style={{ backgroundImage }}><strong><em>Simple</em></strong></h6>
            <div className='caption-2 case-study-gradient-text' style={{ backgroundImage }}>RGB &nbsp;#FFFFFF</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
})

Brand.displayName = 'Brand'

export default Brand
