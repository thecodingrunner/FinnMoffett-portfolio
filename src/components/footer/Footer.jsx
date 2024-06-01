import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="#" className='footer__logo'>LOGO</Link>

      <ul className='permalinks'>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#experience">Experience</Link></li>
        <li><Link to="#portfolio">Portfolio</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <Link to="https://github.com" name='github'><FaGithub /></Link>
        <Link to="https://linkedin.com" name='linkedIn'><FaLinkedin /></Link>
      </div>
    </footer>
  )
}

export default Footer
