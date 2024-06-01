import React from 'react'
import './about.css'
import ME from '../../assets/profile-image.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" loading='lazy' fetchPriority='high'/>
          </div>
        </div>
        <div className="about__content">

          <p>I create creative websites and applications using the MERN stack. After graduating with a Masters degree in Mechanical Engineering, and living in Japan for 6 months, I discovered Web Development, and since then have committed myself to becoming a professional developer. The concept of creating creative and stylish web solutions and applications is exciting to me.</p>

          <Link to="#contact" className='btn btn-primary'>Let's Talk</Link>
        </div>
      </div>
    </section>
  )
}

export default About
