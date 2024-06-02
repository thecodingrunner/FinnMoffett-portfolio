import React, { useEffect } from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/#')

  const location = useLocation()
  console.log(location.pathname + location.hash)
  const loc = location.pathname + location.hash


  return (
    <nav>
      <a name='home' id='/#' href="/#" className={activeNav === '/#' ? 'active' : ''} onClick={() => setActiveNav('/#')}><IoHomeOutline /></a>
      <a name='about' id='/#about' href="/#about" className={activeNav === '/#about' ? 'active' : ''} onClick={() => setActiveNav('/#about')}><LuUser2 /></a>
      <a name='experience' id='/#experience' href="/#experience" className={activeNav === '/#experience' ? 'active' : ''} onClick={() => setActiveNav('/#experience')}><MdOutlineLibraryBooks /></a>
      <a name='portfolio' id='/#portfolio' href="/#portfolio" className={activeNav === '/#portfolio' ? 'active' : ''} onClick={() => setActiveNav('/#portfolio')}><CgWebsite /></a>
      <a name='contact' id='/#contact' href="/#contact" className={activeNav === '/#contact' ? 'active' : ''} onClick={() => setActiveNav('/#contact')}><FaRegMessage /></a>
    </nav>
  )
}

export default Nav
