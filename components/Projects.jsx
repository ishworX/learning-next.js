import Image from 'next/image'
import { WORKDATA } from '@/public/data';
import React from 'react'

const Projects = () => {
    return (
        <section id="work">
            <div className="title">
                <h2>My Projects</h2>
            </div>
            <div className="tab-buttons">
                <button className="btn active">All</button>
                <button className="btn">FrontEnd</button>
                <button className="btn">BackEnd</button>
                <button className="btn">Full Stack</button>
            </div>
            <div className="container work-container">
                {
                    WORKDATA.map((work, i) => (
                        <div className="work-card" key={i}>
                            <Image src={work.img} alt="work" />
                            <h4>{work.title}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, tempora veritatis, autem laborum ipsa, fugit perspiciatis voluptates delectus deserunt pariatur reprehenderit qui!</p>
                            <div className="work-buttons">
                                <button className="btn">Preview</button>
                                <button className="btn">Github</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects