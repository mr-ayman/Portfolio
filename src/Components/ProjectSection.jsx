import "./project.css"
import { useState } from "react";

const ProjectSection = () =>{
    const [showAll, setShowAll] = useState(false);
    return (
        <section className="ProjectSection" id="ProjectSection">
            <div className="project-top">
                <h1>Projects</h1>
                <hr />
            </div>
            <div className={`project-bottom ${showAll ? "active" : ""}`}>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
                <div className="project-list-container">
                    <img src="" alt="" />
                    <h3>Portfolio</h3>
                    <p>This was my portfolio design</p>
                    <div className="project-buttons">
                        <button className="project-button Github">Github</button>
                        <button className="project-button Live">Live</button>
                    </div>
                </div>
            </div>
             <button 
                className="show-more-btn"
                onClick={() => setShowAll(!showAll)}
                >
                {showAll ? "Show Less" : "Show More"}
            </button>
        </section>
    )
}
export default ProjectSection;