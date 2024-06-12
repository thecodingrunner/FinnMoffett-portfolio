import React from 'react'
import './profile.css'
import ME from '../../assets/profile-image.jpg'
import { Link } from 'react-router-dom'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import htmlIcon from '../../assets/HTML-5-Badge-Logo.png'
import cssIcon from '../../assets/CSS3_logo.svg.png'
import Javascript from '../../assets/Javascript.jpg'
import ReactIcon from '../../assets/React-icon.svg.png'
import nodeIcon from '../../assets/1200px-Node.js_logo.svg.png'
import mongodbIcon from '../../assets/mongodb_original_wordmark_logo_icon_146425.png'
import tailwindIcon from '../../assets/images.png'
import nextIcon from '../../assets/nextjs-icon-dark-background.png'

const Profile = () => {
  return (
    <section id='profile'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className='profile__container'>
            <div className="about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" loading='lazy' fetchPriority='high'/>
                    </div>
                </div>
                <div className="about__content">
                    <p>After graduating with a Masters degree in Mechanical Engineering, and living in Japan for 6 months, I discovered Web Development, and since then have committed myself to becoming a professional developer. I enjoy developing innovative and stylish web solutions and applications.</p>
                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>Javascript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>TailwindCSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                            <div>
                                <h4>Framer Motion</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                        {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                        <div>
                            <h4>NextJS</h4>
                        </div>
                        </article>
                        {/* <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>NodeJS</h4>
                        </div>
                        </article> */}
                        {/* <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>ExpressJS</h4>
                        </div>
                        </article> */}
                        <article className='experience__details'>
                        {/* <BsFillPatchCheckFill className='experience__details-icon'/> */}
                        <div>
                            <h4>MongoDB</h4>
                        </div>
                        </article>
                    </div>
                </div>
            </div>

            <div className='slider-frame'>
                <div className='slider-icons'>
                    <div className='image'><img src={htmlIcon} alt='HTML' loading='lazy'/></div>
                    <div className='image'><img src={cssIcon} alt='CSS' loading='lazy'/></div>
                    <div className='image'><img src={Javascript} alt='Javascript' loading='lazy'/></div>
                    <div className='image'><img src={ReactIcon} alt='React' loading='lazy'/></div>
                    {/* <div className='image'><img src={nodeIcon} alt='NodeJS' loading='lazy'/></div> */}
                    <div className='image'><img src={mongodbIcon} alt='MongoDB' loading='lazy'/></div>
                    <div className='image'><img src={tailwindIcon} alt='Tailwind' loading='lazy'/></div>
                    <div className='image'><img src={nextIcon} alt='NextJS' loading='lazy'/></div>
                    {/* second copy */}
                    <div className='image'><img src={htmlIcon} alt='HTML' loading='lazy'/></div>
                    <div className='image'><img src={cssIcon} alt='CSS' loading='lazy'/></div>
                    <div className='image'><img src={Javascript} alt='Javascript' loading='lazy'/></div>
                    <div className='image'><img src={ReactIcon} alt='React' loading='lazy'/></div>
                    {/* <div className='image'><img src={nodeIcon} alt='NodeJS' loading='lazy'/></div> */}
                    <div className='image'><img src={mongodbIcon} alt='MongoDB' loading='lazy'/></div>
                    <div className='image'><img src={tailwindIcon} alt='Tailwind' loading='lazy'/></div>
                    <div className='image'><img src={nextIcon} alt='NextJS' loading='lazy'/></div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Profile
