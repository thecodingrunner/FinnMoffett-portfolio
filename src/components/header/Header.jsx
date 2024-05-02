import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Finn Moffett</h1>
        <TypeAnimation 
          sequence={[
            '<h1>Frontend Developer</h1>',
            1000,
            '<h1>Mechanical Engineering Graduate</h1>',
            1000,
            '<h1>Japan Enthusiast</h1>',
            1000,
            '<h1>Sports Enthusiast</h1>',
            1000,
            '<h1>Martial Arts Enthusiast</h1>',
            1000,
            '<h1>Productive Procrastinator</h1>',
            1000,
            '<h1>Professional Overthinker</h1>',
            1000
          ]}
          wrapper="h5"
          speed={50}
          className='text-light'
          repeat={Infinity}
          />
        <CTA /> 
        <HeaderSocials />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
