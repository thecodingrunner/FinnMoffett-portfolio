import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Finn Moffett</h1>
        <TypeAnimation 
          sequence={[
            'Frontend Developer',
            1000,
            'Mechanical Engineering Graduate',
            1000,
            'Japan Enthusiast',
            1000,
            'Sports Enthusiast',
            1000,
            'Martial Arts Enthusiast',
            1000,
            'Productive Procrastinator',
            1000,
            'Professional Overthinker',
            1000
          ]}
          wrapper="h5"
          speed={50}
          className='text-light'
          repeat={Infinity}
          />
        <CTA /> 
        <HeaderSocials />

        <a href="#portfolio" className='scroll__down'>View my work</a>
      </div>
    </header>
  )
}

export default Header
