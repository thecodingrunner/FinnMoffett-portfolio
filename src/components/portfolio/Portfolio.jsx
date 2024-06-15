import React from 'react'
import './portfolio.css'
import data from '../../data/data.js'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  console.log(data[1].demo)
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='portfolio__title'>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, stack, github, demo}, index) => {
            return (
              <>
                {/* {index % 2 === 0 ? ( */}
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
                {/* ) : ( */}
                  {/* <article className='portfolio__item' key={index}>
                    <div className='portfolio__item-text'>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="stack__tools">{stack.map(tool => <div className='stack__tool'>{tool}</div>)}</div>
                      <div className='portfolio__item-cta'>
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        <Link to={`/projects/${id}`} className='btn'>Info</Link>
                      </div>
                    </div>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} loading='lazy'/>
                    </div>
                  </article>
                )} */}
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
