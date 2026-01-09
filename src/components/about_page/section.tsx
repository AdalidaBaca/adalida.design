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
  const isResources = title === 'Resources'
  const isContributions = title === 'Contributions'
  const isMyProcess = title === 'My Process'
  const sectionClass = isTestimonials ? 'testimonials-section' : 
                       isResources ? 'resources-section' :
                       isContributions ? 'contributions-section' :
                       isMyProcess ? 'my-process-section' : undefined
  return (
    <div 
      data-aos={aos !== 'none' ? aos : undefined} 
      data-aos-offset={aos !== 'none' ? aosOffset : undefined}
      className={sectionClass}
    >
      <SectionHeading title={title} />
      {children}
    </div>
  )
}

export default Section
