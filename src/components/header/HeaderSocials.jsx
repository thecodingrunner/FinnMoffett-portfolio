import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './header.css'
import { Link } from 'react-router-dom';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/finnmoffett/" target="__blank" name='linkedIn'><FaLinkedin /></a>
      <a href="https://github.com/thecodingrunner" target="__blank" name='github'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
