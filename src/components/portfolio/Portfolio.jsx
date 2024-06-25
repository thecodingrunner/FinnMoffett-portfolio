import React, { useState } from 'react'
import './portfolio.css'
import data from '../../data/data.js'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  console.log(data[1].demo)
  const [show, setShow] = useState('All')
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='portfolio__title'>Portfolio</h2>

      <div className='category-filter'>
        <button className={`category-button ${show === 'All' ? 'category-selected' : ''}`} onClick={() => setShow('All')}>All</button>
        <button className={`category-button ${show === 'Frontend' ? 'category-selected' : ''}`} onClick={() => setShow('Frontend')}>Frontend</button>
        <button className={`category-button ${show === 'Fullstack' ? 'category-selected' : ''}`} onClick={() => setShow('Fullstack')}>Fullstack</button>
        <button className={`category-button ${show === 'TypeScript' ? 'category-selected' : ''}`} onClick={() => setShow('TypeScript')}>TypeScript</button>
      </div>

      <div className="container portfolio__container">
        {
          data.filter(({category}) => category.includes(show)).map(({id, image, title, description, stack, github, demo}, index) => {
            return (
              <>
                  <article className='portfolio__item' key={index}>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} loading='lazy'/>
                    </div>
                    <div className='portfolio__item-text'>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="stack__tools">{stack.map(tool => <div className='stack__tool'>{tool}</div>)}</div>
                      <div className='portfolio__item-cta'>
                        <Link to={`/projects/${id}`} className='btn'>Info Page</Link>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        <a href={github} className='btn' target='_blank'>Github</a>
                      </div>
                    </div>
                  </article>
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
