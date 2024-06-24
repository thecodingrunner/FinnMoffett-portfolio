import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../../assets/Finn-Moffett-Web-Developer-CV.pdf'

// import CV from 

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} target="_blank" className='btn'>View CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
