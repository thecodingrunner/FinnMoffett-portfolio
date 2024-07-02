import React from 'react'
import './profile.css'
import ME from '../../assets/profile-image.jpg'
import profileImg from '../../assets/ProfileFinnMoffett.jpg'
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
                        <img src={profileImg} alt="About Image" loading='lazy' fetchPriority='high'/>
                    </div>
                </div>
                <div className="about__content">
                    <p>Following the completion of my Master's degree in Mechanical Engineering and a period of international experience in Japan, I transitioned into Web Development. I have since focused on developing my skills as a professional in this field. My work centers on creating efficient and visually appealing web solutions and applications, with an emphasis on functionality and user experience.</p>
                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>TypeScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>TailwindCSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
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
                            <div>
                                <h4>NextJS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>NodeJS</h4>
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
