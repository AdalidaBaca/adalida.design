import React from 'react'

const About = (): JSX.Element => {
  return (
    <div data-aos="fade-up" className="about-phronesis">
      <div className="client-and-date">
        <div>
          <strong>Client</strong>
          <span>Phronesis</span>
        </div>
        <div>
          <strong>Date</strong>
          <span>2 weeks</span>
        </div>
      </div>

      <p>
        <strong>Case Study Details</strong>
      </p>
      <p>
        Discover the transformative power of Phronesis, a captivating portfolio piece featuring a student-focused
        landing page. Through thoughtful design and meticulous attention to detail, Phronesis offers a user-friendly
        interface that enhances the student experience within educational institutions. Seamlessly access important
        information, communicate effectively, and take control of your academic journey with ease. Experience intuitive
        design and visually engaging elements that empower students to navigate their educational path with confidence.
        Phronesis invites you to explore a new era of student information management, where simplicity and functionality
        meet to create a seamless user experience.
      </p>
      <p>
        <strong>Role Details</strong>
      </p>
      <div>User Experience Design</div>
      <div>Visual Design</div>
      <p>
        <a href="https://www.figma.com/community/file/1275945844735159445/PHRONESIS" target="_blank" rel="noreferrer">
          <strong>
            VIEW FIGMA <span className="arrow" />
          </strong>
        </a>
      </p>
    </div>
  )
}

export default About
