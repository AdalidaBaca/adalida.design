import React from 'react'

import SectionHeading from 'components/section_heading'

interface Props {
  title: string
  children: React.ReactNode
  aos?: string | 'none'
  aosOffset?: number
}

const Section = ({ title, children, aos = 'fade-up', aosOffset }: Props): JSX.Element => {
  const isTestimonials = title === 'Testimonials'
  return (
    <div 
      data-aos={aos !== 'none' ? aos : undefined} 
      data-aos-offset={aos !== 'none' ? aosOffset : undefined}
      className={isTestimonials ? 'testimonials-section' : undefined}
    >
      <SectionHeading title={title} />
      {children}
    </div>
  )
}

export default Section
