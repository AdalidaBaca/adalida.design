import React from 'react'

import Section from './section'

interface Testimonial {
  quote: string
  name: string
  title: string
  photo?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Piro-Rael',
    title: 'Co-founder & Engineer',
    quote:
      'Adalida has a strong bias to action. I felt like I had a thought partner, not just a designer. Because of that partnership, we were able to ship.'
  },
  {
    name: 'Mariana Lucchesi',
    title: 'Mentor, Women in Design',
    quote: 'Adalida is decisive, practical, and focused on progress.'
  },
  {
    name: 'Jeanette Acosta Fresquez',
    title: 'Manager, Project ECHO',
    quote: "I've never seen anyone so excited to get work before. Adalida is a great utility player."
  }
  // Commented out testimonials:
  // {
  //   name: 'Armando Diaz',
  //   title: 'Owner, Airbrush Art',
  //   quote: 'Adalida was heaven sent. Once I had a real website, clients trusted my business more and I was able to close bigger deals.'
  // },
  // {
  //   name: 'Kevin Irwin',
  //   title: 'IT Director, Menaul',
  //   quote: 'Adalida proved to be a valuable asset to our team, and her contributions greatly enhanced our department\'s productivity and effectiveness.'
  // }
]

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('')
}

const Avatar = ({ name, photo }: { name: string; photo?: string }): JSX.Element => {
  if (photo !== undefined && photo !== '') {
    return <img src={photo} alt={name} className="avatar" />
  }
  return <div className="avatar initials">{getInitials(name)}</div>
}

const Testimonials = (): JSX.Element => {
  const items = testimonials
  // Removed carousel logic - now showing static 3 cards

  return (
    <Section title="Testimonials">
      <div className="testimonials-grid">
        {items.map(({ quote, name, title, photo }) => (
          <blockquote
            key={`${name}-${title}`}
            className="testimonial-card card"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="800"
          >
            <p className="quote">{quote}</p>
            <footer className="attribution">
              <div className="person">
                <Avatar name={name} photo={photo} />
                <div className="name-title">
                  <span className="name">{name}</span>
                  {title !== '' ? <span className="title">{title}</span> : null}
                </div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
