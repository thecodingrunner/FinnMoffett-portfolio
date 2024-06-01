import React from 'react'
import './portfolio.css'
import data from '../../data/data.js'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  console.log(data[1].demo)
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, stack, github, demo}) => {
            return (
              <article key={title} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} loading='lazy'/>
                </div>
                <div className='portfolio__item-text'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="stack__tools">{stack.map(tool => <div className='stack__tool'>{tool}</div>)}</div>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn'>Github</a>
                    <a href={`https://${demo}`} className='btn btn-primary' target='_blank'>Live Demo</a>
                    <Link to={`/projects/${id}`} className='btn'>Info</Link>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
