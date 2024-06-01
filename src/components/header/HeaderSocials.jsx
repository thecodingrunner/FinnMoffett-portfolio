import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './header.css'
import { Link } from 'react-router-dom';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <Link to="https://linkedin.com" target="__blank" name='linkedIn'><FaLinkedin /></Link>
      <Link to="https://github.com" target="__blank" name='linkedIn'><FaGithub /></Link>
    </div>
  )
}

export default HeaderSocials
