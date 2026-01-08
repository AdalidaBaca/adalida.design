import React from 'react'

const Testimonial = (): JSX.Element => {
  return (
    <div className='portfolio-testimonial'>
      <span className='quote-icon'>&ldquo;</span>
      <blockquote className='testimonial-quote'>
        Adalida has a strong bias to action. I felt like I had a thought partner, not just a designer.
      </blockquote>
      <cite className='testimonial-author'>— Ricardo Piro-Rael, Co-founder & Engineer</cite>
    </div>
  )
}

export default Testimonial
