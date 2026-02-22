import "./experience.css"

const ExperienceSection = () =>{
    return (
        <section className="ExperienceSection" id="ExperienceSection">
            <div className="experience-top">
                <h1>Experience</h1>
                <hr className="experience-line" />
            </div>
            <div className="experience-bottom">
                <div className="experience-techstack">
                    <div className="techbtop">
                        <h2>Tech Stack</h2>
                        <hr />
                    </div>
                
                    <div className="tech-boxes">
                        <div className="tech-containers tech-container1">
                            <img src="src/assets/Python.svg" alt="" />
                            <p>Python</p>
                        </div>
                        <div className="tech-containers tech-container2">
                            <img src="src/assets/Java.svg" alt="" />
                            <p>Java</p>
                        </div>
                        <div className="tech-containers tech-container3">
                            <img src="src/assets/mysql.svg" alt="" />
                            <p>MySql</p>
                        </div>
                        <div className="tech-containers tech-container4">
                            <img src="src/assets/C.svg" alt="" />
                            <p>C</p>
                        </div>
                        <div className="tech-containers tech-container5">
                            <img src="src/assets/c++.svg" alt="" />
                            <p>C++</p>
                        </div>
                        <div className="tech-containers tech-container6">
                            <img src="src/assets/reacticon.png" alt="" />
                            <p>React</p>
                        </div>
                        <div className="tech-containers tech-container7">
                            <img src="src/assets/JavaScript.svg" alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-containers tech-container8">
                            <img src="src/assets/html.svg" alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="tech-containers tech-container9">
                            <img src="src/assets/css.svg" alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="tech-containers tech-container10">
                            <img src="src/assets/Figma.svg" alt="" />
                            <p>Figma</p>
                        </div>
                        <div className="tech-containers tech-container11">
                            <img src="src/assets/php.svg" alt="" />
                            <p>PHP</p>
                        </div>
                        <div className="tech-containers tech-container12">
                            <img src="src/assets/Bootstrap.svg" alt="" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="tech-containers tech-container13">
                            <img src="src/assets/tailwindcssicon.png" alt="" />
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ExperienceSection;