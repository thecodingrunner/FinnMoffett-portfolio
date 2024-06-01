import React from 'react'
import { Link } from 'react-router-dom'
// import CV from 

const CTA = () => {
  return (
    <div className='cta'>
      <Link to='' download className='btn'>Download CV</Link>
      <Link to="#contact" className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA
