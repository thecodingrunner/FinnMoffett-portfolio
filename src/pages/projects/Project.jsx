import { Link, useLocation, useParams } from "react-router-dom"
import data from "../../data/data"
import './project.css'
import Footer from "../../components/footer/Footer"
import Nav from "../../components/nav/Nav"

const Project = () => {
    const projectId = useParams().id
    // console.log(id)
    // console.log(data)
    let projectData = data.filter(project => project.id === Number(projectId))
    console.log(projectData)

    const {id, image, title, description, purpose, explanation, stack, github, demo, photos} = projectData[0]
    console.log(photos)

    return (
        <>
            <section className="project-section">
                <h1 className="title">{title}</h1>
                <div className="image-container">
                    <img src={image} alt="" />
                    <a href="#photos" className='scroll__down photos_link'>View Photos</a>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    <p>{description}</p>
                </div>
                <div className="purpose">
                    <h2>Project Purpose and Goal</h2>
                    <p>{purpose}</p>
                </div>
                <div className="explanation">
                    <h2>Webstack and Explanation</h2>
                    <div className="stack__tools">{stack.map(tool => <div className='stack__tool'>{tool}</div>)}</div>
                    <p>{explanation}</p>
                </div>
                <div id="photos" className="photos">
                    <h2>Photos</h2>
                    <div className="photos__container">
                        {photos.map((photo) => (
                            <img className="photo" src={photo} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Project