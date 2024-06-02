import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="#" className='footer__logo'>Finn Moffett</Link>

      <ul className='permalinks'>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#experience">Experience</Link></li>
        <li><Link to="#portfolio">Portfolio</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <Link to="https://github.com/thecodingrunner" name='github'><FaGithub /></Link>
        <Link to="https://www.linkedin.com/in/finnmoffett/" name='linkedIn'><FaLinkedin /></Link>
      </div>
    </footer>
  )
}

export default Footer
