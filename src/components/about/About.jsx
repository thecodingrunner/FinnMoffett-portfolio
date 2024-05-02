import React from 'react'
import './about.css'
import ME from '../../assets/profile-image.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" loading='lazy'/>
          </div>
        </div>
        <div className="about__content">

          <p>I create creative websites and applications using the MERN stack. After graduating with a Masters degree in Mechanical Engineering, and living in Japan for 6 months, I discovered Web Development, and since then have committed myself to becoming a professional developer. The concept of creating creative and stylish web solutions and applications is exciting to me.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
