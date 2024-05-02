import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="__blank" name='linkedIn'><FaLinkedin /></a>
      <a href="https://github.com" target="__blank" name='linkedIn'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
