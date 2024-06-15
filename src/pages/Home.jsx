import React from 'react'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Contact from '../components/contacts/Contact'
import Footer from '../components/footer/Footer'
import Portfolio from '../components/portfolio/Portfolio'
import Cursor from '../components/cursor/Cursor'
import Profile from '../components/profile/Profile'

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Profile />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home